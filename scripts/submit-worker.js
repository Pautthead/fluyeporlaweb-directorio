// Cloudflare Worker: recibe el formulario de /enviar y abre un PR en GitHub
// Despliegue: wrangler deploy.
//
// REGLA CRÍTICA: este Worker NO mergea nada. Solo crea una rama nueva con el .md
// prellenado y abre un Pull Request. Pablo revisa y mergea a mano. Siempre.
// Esto evita spam y entradas de baja calidad en el directorio.
//
// Secrets necesarios (wrangler secret put): GH_TOKEN (con permiso repo), nada más.

const OWNER = 'fluyeporlaweb';
const REPO = 'directorio';        // ajusta al nombre real del repo
const BASE = 'main';

export default {
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return new Response('Método no permitido', { status: 405 });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: 'JSON inválido' }, 400);
    }

    // Validación mínima de campos obligatorios
    const requeridos = ['name', 'category', 'github_url', 'tagline', 'submitter_email'];
    for (const campo of requeridos) {
      if (!body[campo]) return json({ error: `Falta el campo: ${campo}` }, 400);
    }

    const categoriasOK = ['mcp', 'repos', 'apis', 'saas-alternativas', 'apps'];
    if (!categoriasOK.includes(body.category)) {
      return json({ error: 'Categoría no válida' }, 400);
    }

    const slug = slugify(body.name);
    const md = construirMd(body, slug);
    const ruta = `src/content/herramientas/${body.category}/${slug}.md`;
    const rama = `submit/${slug}-${Date.now()}`;

    try {
      const sha = await getBaseSha(env);
      await crearRama(env, rama, sha);
      await crearArchivo(env, ruta, md, rama, body.name);
      const pr = await abrirPR(env, rama, body);
      return json({ ok: true, pr_url: pr.html_url });
    } catch (e) {
      return json({ error: 'No se pudo crear el PR', detalle: String(e) }, 500);
    }
  },
};

function slugify(s) {
  return s.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')   // quita acentos
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function construirMd(b, slug) {
  const hoy = new Date().toISOString().slice(0, 10);
  const tags = (b.tags || '').split(',').map(t => t.trim()).filter(Boolean);
  return `---
name: "${b.name}"
slug: "${slug}"
tagline: "${b.tagline}"
category: "${b.category}"
subcategory: "${b.subcategory || 'general'}"
tags: ${JSON.stringify(tags.length ? tags : ['sin-clasificar'])}
github_url: "${b.github_url}"
website_url: "${b.website_url || ''}"
docs_url: "${b.docs_url || ''}"
stars: 0
forks: 0
last_commit: "${hoy}"
version: "0.0.0"
license: "${b.license || 'desconocida'}"
language: ""
pricing: "${b.pricing || 'gratis'}"
replaces: ${JSON.stringify((b.replaces || '').split(',').map(s => s.trim()).filter(Boolean))}
replaces_cost: "${b.replaces_cost || ''}"
install_complexity: "medio"
seo_title: "${b.name}: ${b.tagline}".slice(0, 60)
seo_description: "${b.tagline}".slice(0, 160)
llm_context: "${b.tagline}"
featured: false
verified: false
submitted_by: "community"
date_added: "${hoy}"
last_verified: "${hoy}"
status: "verificar"
---

## Qué es

${b.descripcion || '(Pendiente de completar en la revisión)'}

## Recursos

- Repositorio en GitHub (link arriba)

<!-- Enviado por la comunidad. Pablo: completa secciones y verifica antes de mergear. -->
<!-- Email de contacto del que lo envió: ${b.submitter_email} -->
`;
}

async function ghApi(env, path, opts = {}) {
  const r = await fetch(`https://api.github.com${path}`, {
    ...opts,
    headers: {
      Authorization: `Bearer ${env.GH_TOKEN}`,
      'User-Agent': 'fluyeporlaweb-submit',
      Accept: 'application/vnd.github+json',
      ...(opts.headers || {}),
    },
  });
  if (!r.ok) throw new Error(`${path} -> ${r.status}`);
  return r.json();
}

async function getBaseSha(env) {
  const ref = await ghApi(env, `/repos/${OWNER}/${REPO}/git/ref/heads/${BASE}`);
  return ref.object.sha;
}

async function crearRama(env, rama, sha) {
  return ghApi(env, `/repos/${OWNER}/${REPO}/git/refs`, {
    method: 'POST',
    body: JSON.stringify({ ref: `refs/heads/${rama}`, sha }),
  });
}

async function crearArchivo(env, ruta, contenido, rama, nombre) {
  const b64 = btoa(unescape(encodeURIComponent(contenido)));
  return ghApi(env, `/repos/${OWNER}/${REPO}/contents/${ruta}`, {
    method: 'PUT',
    body: JSON.stringify({
      message: `submit: ${nombre}`,
      content: b64,
      branch: rama,
    }),
  });
}

async function abrirPR(env, rama, b) {
  return ghApi(env, `/repos/${OWNER}/${REPO}/pulls`, {
    method: 'POST',
    body: JSON.stringify({
      title: `Nueva herramienta: ${b.name}`,
      head: rama,
      base: BASE,
      body: `Enviada desde el formulario.\n\nCategoría: ${b.category}\nGitHub: ${b.github_url}\n\nRevisar contenido y verificar datos antes de mergear.`,
    }),
  });
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
