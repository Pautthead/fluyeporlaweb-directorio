// Cloudflare Worker: health-check diario de las herramientas del directorio
// Despliegue: wrangler deploy. Cron en wrangler.toml: crons = ["0 6 * * *"]
//
// Qué hace: cada día hace ping al website_url de cada herramienta. Si no responde,
// avisa al canal de Telegram. NO modifica los .md (eso lo haría un PR posterior
// con revisión humana). Solo alerta. La decisión de marcar status: verificar es de Pablo.
//
// Necesita en el repo un endpoint estático que liste las herramientas y sus URLs.
// Lo más simple: Astro genera /api/herramientas.json en build con slug + website_url + github_url.

export default {
  async scheduled(event, env, ctx) {
    ctx.waitUntil(comprobar(env));
  },

  // permite lanzarlo a mano para probar: GET a la url del worker
  async fetch(request, env, ctx) {
    ctx.waitUntil(comprobar(env));
    return new Response('Health-check lanzado', { status: 200 });
  },
};

async function comprobar(env) {
  // El JSON lo genera Astro en build y se sirve desde el propio dominio
  const res = await fetch('https://fluyeporlaweb.com/api/herramientas.json');
  const herramientas = await res.json();

  const caidas = [];

  for (const h of herramientas) {
    const url = h.website_url || h.github_url;
    if (!url) continue;
    try {
      const ping = await fetch(url, { method: 'HEAD', redirect: 'follow' });
      if (!ping.ok && ping.status >= 400) {
        caidas.push(`${h.name} (${ping.status}) -> ${url}`);
      }
    } catch (e) {
      caidas.push(`${h.name} (sin respuesta) -> ${url}`);
    }
  }

  if (caidas.length > 0) {
    await avisarTelegram(env, caidas);
  }
}

async function avisarTelegram(env, caidas) {
  // BOT_TOKEN y CHAT_ID se guardan como secrets del Worker: wrangler secret put
  const texto =
    `Health-check del directorio\n\n` +
    `Estas herramientas no responden, conviene revisarlas:\n\n` +
    caidas.map(c => `- ${c}`).join('\n');

  await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: env.CHAT_ID,
      text: texto,
      disable_web_page_preview: true,
    }),
  });
}
