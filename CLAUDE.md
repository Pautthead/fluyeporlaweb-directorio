# CLAUDE.md — Brief del proyecto para Claude Code

Este archivo es el contexto maestro del proyecto. Léelo entero antes de tocar nada.
Vive en la raíz del repo. Si te pierdes, vuelve aquí.

---

## Qué estamos construyendo

Un directorio de herramientas open source en español. El más grande de habla hispana
para developers, diseñadores, marketers y makers. No es un wrapper de GitHub: es la capa
de contexto en español que GitHub no da (por qué importa cada herramienta, cómo se instala
de verdad, qué alternativa de pago sustituye, casos de uso reales, limitaciones honestas).

Vive en **fluyeporlaweb.com** (migra desde un WordPress vacío, no hay nada que conservar
salvo el dominio, Search Console verificado y las páginas legales).

El público es hispanohablante, pero el contenido tiene que ser útil para cualquiera vía la
traducción nativa del navegador (HTML semántico limpio, nada de texto en imágenes, nada de
JS que bloquee la traducción). El tráfico de X ahora es internacional por la traducción de Grok.

## Por qué existe (la tesis)

- Cero competencia seria en español para herramientas open source / MCPs / APIs.
- El contenido enriquecido posiciona en LLMs (ChatGPT, Perplexity, Claude, Gemini) porque
  responde preguntas completas que ningún sitio en español responde hoy.
- La cuenta de X (@fluyeporlaweb, ~20.8K) es el motor de distribución validado. Cada
  herramienta del directorio es un post potencial; cada post linkea al directorio.
- Modelo a largo plazo, sostenible, abierto en GitHub (atrae PRs y backlinks naturales).

## Objetivo de negocio

10K€/mes combinando: reparto de ingresos de X + publicidad en el directorio (AdSense →
Ezoic → Mediavine según tráfico) + afiliados directos + listings de pago cuando haya volumen.
La base de la monetización es la publicidad. El diseño tiene que ser AdSense-friendly desde
el día uno.

---

## Stack técnico (no negociable)

- **Framework:** Astro (estático, Content Collections con type-safety por Zod).
- **Hosting:** Cloudflare Pages.
- **Repo:** GitHub, público (org: github.com/fluyeporlaweb).
- **Automatización:** GitHub Actions (datos de repos) + Cloudflare Workers (health-check + submit).
- **Búsqueda interna:** Pagefind (estático, cero backend) en fase 1. D1 si escala mucho.
- **Analítica:** Google Search Console + Google Analytics 4.
- **Anuncios:** AdSense en fase 1, slots preparados para Ezoic/Mediavine después.

Por qué Astro y no Next: estático puro = Core Web Vitals perfectos de base = mejor SEO y
mejor aprobación de AdSense. Sin servidor que mantener. Content Collections valida el
frontmatter de cada herramienta contra un schema (ver `schema/`), así que un `.md` mal
formado falla en build y no en producción.

---

## Arquitectura de carpetas del sitio Astro

```
src/
  content/
    config.ts            ← define las colecciones y el schema Zod (ver schema/)
    herramientas/        ← un .md por herramienta (el core)
      mcp/
      repos/
      apis/
      saas-alternativas/
      apps/
    blog/                ← artículos de apoyo SEO/LLM
  components/
    HerramientaCard.astro     ← tarjeta de listado
    Relacionadas.astro        ← enlazado interno automático por tags
    Alternativas.astro        ← cruza el campo `replaces`
    Badges.astro              ← licencia, stars, pricing
    AdSlot.astro              ← slot de anuncio reutilizable (vacío hasta tener AdSense)
    Breadcrumbs.astro
    Buscador.astro            ← Pagefind UI
  layouts/
    Base.astro                ← head, schema JSON-LD, header, footer
    Herramienta.astro         ← layout de página de herramienta
    Categoria.astro
    Articulo.astro            ← layout de blog
  pages/
    index.astro
    directorio/
      index.astro
      [categoria]/index.astro     ← genera páginas de categoría
      [categoria]/[slug].astro     ← genera páginas de herramienta
    blog/
      index.astro
      [slug].astro
    enviar.astro              ← formulario de submission gratuito
    sobre.astro
    legal/                    ← privacidad, cookies, términos (necesario para AdSense)
  styles/
    tokens.css                ← design tokens (ver sección Diseño)
```

URLs limpias, máximo 3 clics desde home:
- `/directorio/mcp/playwright-mcp`
- `/directorio/saas-alternativas/...`
- `/blog/mejores-mcp-para-automatizacion`

---

## Diseño (referencia: Calculator.net por UX, no por estética)

El modelo de UX que funciona para AdSense y para devs: navegación por categorías muy
visible, cada herramienta en su página limpia, buscador prominente, cero pop-ups, cero
modales de registro, sidebar derecho como zona natural de anuncio, footer con sitemap.

NO copiamos el look anticuado de Calculator.net. Hacemos algo limpio y propio. Reglas:

- **Color de marca:** verde `#16a34a` para acentos y header. NUNCA azul.
- Fondo claro, mucho aire, tipografía legible. Dark mode automático (`prefers-color-scheme`).
- Tarjetas de herramienta con badges (licencia, stars, pricing) escaneables de un vistazo.
- Mobile first. Respeta `prefers-reduced-motion`. Focus visible en teclado.
- Los slots de AdSense (`AdSlot.astro`) van en: sidebar de página de herramienta, entre
  el contenido y "herramientas relacionadas", y footer antes del sitemap. Tres posiciones,
  ni una más. Empiezan vacíos (placeholder) hasta tener la cuenta aprobada.

Lee `/mnt/skills/public/frontend-design/SKILL.md` antes de decidir tipografía y tokens.
Define un sistema de tokens en `tokens.css` (4-6 colores nombrados, escala de tipo, espaciado).

---

## El dato es el rey: schema de cada herramienta

El frontmatter de cada `.md` está definido en `schema/frontmatter-schema.md` y codificado
en Zod en `src/content/config.ts`. NO improvises campos. Si falta un campo, el build falla.

Campos clave que mucha gente olvida y que son nuestro diferencial:
- `replaces` / `replaces_cost`: qué herramienta de pago sustituye y cuánto ahorras.
- `llm_context`: 2-3 frases optimizadas para que un LLM cite la entrada correctamente.
- `install_complexity`: fácil | medio | avanzado.
- `status`: activo | inactivo | verificar (lo gestiona el Worker de health-check).

Los datos volátiles (`stars`, `forks`, `last_commit`, `version`) los actualiza GitHub
Actions automáticamente. No los toques a mano.

## El contenido de cada herramienta (las secciones del cuerpo del .md)

Cada entrada tiene estas secciones, en este orden. Mira `ejemplos/` para ver dos completas.

1. **Qué es** — honesto, sin hype. Qué hace exactamente.
2. **Por qué importa** — el problema real que resuelve, con números si se puede.
3. **Cómo instalarlo** — pasos reales y probados, no el README en inglés copiado.
4. **Casos de uso** — 3 a 5 ejemplos concretos del mundo real.
5. **Qué sustituye** — tabla comparativa: herramienta de pago vs esta, con precios reales.
6. **Limitaciones honestas** — lo que no hace bien. Esto genera confianza brutal.
7. **Recursos** — links a docs, ejemplos, comunidad.

---

## Voz y escritura (CRÍTICO)

Todo el texto del directorio sigue la voz de @fluyeporlaweb. NO suena a IA.

- Frases cortas tras largas. Cada idea en su propia línea cuando aporta ritmo.
- Humor seco, autoconsciencia, de buen rollo. Sin ofender, sin insultos.
- Palabras propias: flipar, cagada, compadre, cosillas, "esto es la h0stia".
  No abuses ni repitas siempre las mismas. Aprende sobre la marcha.
- **NUNCA em dashes (—). Usa guion normal (-).**
- **NUNCA dos frases separadas por punto en la misma línea.** Salto de línea entre ideas.
- Sin emojis (o muy pocos y justificados). Sin hashtags. Sin signposting ("vamos a ver...").
- Ortografía y tildes perfectas en español. Cero faltas: cámara, rápido, también, más, está, así.
- Pasa SIEMPRE el contenido por el humanizador (`SKILL.md` del proyecto) como capa final.

Hay una muestra de la voz de Pablo en el blog invitado de aitorpradas.com sobre SEO e IA.
Si tienes dudas de tono, tira hacia ahí: informal, con criterio, sin venderte.

---

## Automatizaciones (ver scripts/)

1. **`scripts/update-github-data.yml`** — GitHub Action semanal. Recorre los `.md` con
   `github_url`, llama a la API de GitHub, actualiza `stars`/`forks`/`last_commit`/`version`,
   hace commit. Cloudflare Pages redespliega solo al detectar el push.

2. **`scripts/health-check-worker.js`** — Cloudflare Worker diario (cron). Hace ping al
   `website_url` de cada herramienta. Si no responde, marca `status: verificar` y avisa al
   canal de Telegram (t.me/fluyeporlaweb).

3. **`scripts/submit-worker.js`** — Worker que recibe el formulario de `/enviar`, valida los
   campos, crea un PR automático en GitHub con el `.md` prellenado. Pablo revisa y mergea.
   IMPORTANTE: el Worker NO mergea solo. Solo abre el PR. La revisión humana es obligatoria.

---

## Orden de ejecución para Claude Code

NO intentes 1000 herramientas. La autoridad temática se construye vertical a vertical.
Lanzamos con MCPs (vertical donde Pablo es autoridad y tiene su propio MCP publicado).

**Sprint 1 — Scaffolding (esta sesión)**
1. Inicializa proyecto Astro + integraciones (sitemap, Pagefind, MDX).
2. Crea `src/content/config.ts` con el schema Zod de `schema/`.
3. Monta layouts, componentes y páginas de la arquitectura de arriba.
4. Define `tokens.css` siguiendo frontend-design (verde #16a34a, dark mode auto).
5. Mete las 2 entradas de ejemplo de `ejemplos/` para validar el build end-to-end.
6. Configura `astro.config.mjs` para Cloudflare Pages.
7. Crea las páginas legales (privacidad, cookies, términos, contacto) — placeholder OK,
   Pablo las completa, pero tienen que existir para AdSense.
8. `AdSlot.astro` con placeholder visual, sin código de AdSense todavía.

**Sprint 2 — Contenido (Pablo + Claude Desktop generan los .md)**
- 15 herramientas MCP listas antes de lanzar. Claude Desktop genera los `.md`, Pablo aprueba.
- Claude Code solo mergea y verifica que el build pasa.

**Sprint 3 — Automatización**
- Implementa los 3 scripts de `scripts/`. Conecta Search Console y GA4.

**Sprint 4 — Lanzamiento y escala**
- Deploy a producción. Solicitar AdSense con 30-40 páginas reales indexadas.
- Segunda vertical (repos / saas-alternativas).

---

## Reglas de oro

- Verifica SIEMPRE stars/forks/licencia directamente en GitHub. Nunca fuentes secundarias.
- Calidad sobre cantidad. 100 entradas perfectas baten a 1000 a medias.
- Todo abierto en GitHub. Submissions gratis. Funciones de pago solo con tráfico real (>50K/mes).
- El sitio tiene que servir a UN público: gente que busca herramientas open source para construir.
- Nada de Monetag, pop-ups, ni push notifications. Mata la confianza del público dev y choca con AdSense.
