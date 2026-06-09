# Plan de ejecución por fases

Vertical a vertical. Empezamos por MCPs. Calidad sobre cantidad.

---

## Sprint 1 — Scaffolding (lo que Claude Code hace ahora)

Objetivo: sitio Astro desplegado en Cloudflare con 2 entradas reales y build verde.

- [ ] `npm create astro@latest` con TypeScript estricto.
- [ ] Integraciones: `@astrojs/sitemap`, `@astrojs/mdx`, `astro-pagefind`.
- [ ] `src/content/config.ts` con el schema Zod de `schema/frontmatter-schema.md`.
- [ ] `tokens.css`: paleta (verde marca `#16a34a`, NO azul), escala tipográfica, dark mode auto.
      Lee `frontend-design/SKILL.md` antes. Algo limpio y propio, no el look de Calculator.net.
- [ ] Layouts: `Base`, `Herramienta`, `Categoria`, `Articulo`. JSON-LD `SoftwareApplication`
      + `BreadcrumbList` en el head de las páginas de herramienta.
- [ ] Componentes: `HerramientaCard`, `Relacionadas` (cruza tags), `Alternativas` (cruza
      `replaces`), `Badges`, `AdSlot` (placeholder visual, sin código AdSense aún), `Breadcrumbs`,
      `Buscador` (Pagefind).
- [ ] Páginas: home, `/directorio`, `/directorio/[categoria]`, `/directorio/[categoria]/[slug]`,
      `/blog`, `/blog/[slug]`, `/enviar`, `/sobre`, legales.
- [ ] Endpoint `/api/herramientas.json` (lo consume el Worker de health-check).
- [ ] Meter `ejemplos/playwright-mcp.md` y `ejemplos/excalidraw.md` en sus carpetas.
- [ ] `astro.config.mjs` con `site: 'https://fluyeporlaweb.com'` y adaptador Cloudflare.
- [ ] Páginas legales (privacidad, cookies, términos, contacto). Placeholder OK pero deben existir.
- [ ] `npm run build` pasa sin errores. Deploy de prueba a Cloudflare Pages.

Hecho cuando: las dos herramientas de ejemplo se ven bien en local y en el deploy de prueba,
con sus relacionadas, su tabla de "qué sustituye" y sus badges.

---

## Sprint 2 — Contenido inicial (Pablo + Claude Desktop)

Objetivo: 15 herramientas MCP listas antes del lanzamiento público.

- [ ] Pablo elige 15 MCPs (es autoridad en esto, tiene su propio MCP publicado).
- [ ] Por cada una: Claude Desktop genera el `.md` completo con las 7 secciones, en la voz.
      Pablo revisa en 2 min y aprueba.
- [ ] Verificar SIEMPRE stars/forks/licencia en GitHub directo. Nunca fuentes secundarias.
- [ ] Claude Code mergea y confirma que el build sigue verde con 15 entradas.
- [ ] 2-3 artículos de blog de apoyo ("Qué es MCP y para qué sirve", "Los mejores MCP de 2026").

Hecho cuando: 15 entradas MCP + 2-3 artículos publicados, enlazados entre sí.

---

## Sprint 3 — Automatización

Objetivo: el sitio se mantiene solo.

- [ ] `.github/workflows/update-github-data.yml` + `scripts/fetch-github-data.mjs` funcionando.
      Lanzar a mano una vez para confirmar que rellena los datos reales.
- [ ] Worker de health-check desplegado con cron diario. Secrets de Telegram puestos.
- [ ] Worker de submit desplegado. Probar el formulario de `/enviar` end-to-end (que abra PR).
- [ ] Search Console: añadir propiedad, enviar sitemap.
- [ ] Google Analytics 4 conectado.

Hecho cuando: un cambio de stars aparece solo tras correr el Action; un submit de prueba
abre un PR; Search Console recibe el sitemap.

---

## Sprint 4 — Lanzamiento y monetización

Objetivo: tráfico real y primeros ingresos.

- [ ] Deploy a producción en fluyeporlaweb.com (apuntar dominio a Cloudflare Pages).
- [ ] Difusión en X: un post por herramienta destacada, gancho en la voz, link en primer comentario.
- [ ] Solicitar AdSense con 30-40 páginas reales ya indexadas y legales completas.
- [ ] Afiliados directos en las tarjetas de herramientas de pago (Buffer, Dub, Framer...).
- [ ] Activar `AdSlot` con el código real solo tras aprobación de AdSense.

Hecho cuando: AdSense aprobado y primeros clics de afiliado.

---

## Después (cuando el tráfico lo justifique)

- Segunda vertical: repos / saas-alternativas (ya hay un ejemplo de repo listo).
- A 50K visitas/mes: Ezoic + listings destacados de pago (29€/mes), badge verificado (49€).
- A 100K visitas/mes: Mediavine + explorar anuncios clasificados propios.
- Reinvertir parte de los ingresos de X en herramientas de crecimiento.

---

## Lo que NO hacemos

- 1000 herramientas de golpe. Mata la autoridad temática y la calidad.
- Monetag, pop-ups, push notifications. Choca con AdSense y espanta al público dev.
- Mergear submissions sin revisión humana.
- Inventar datos de stars/forks. Se verifican en GitHub o se dejan en placeholder.
- Texto en imágenes o JS que bloquee la traducción del navegador.
