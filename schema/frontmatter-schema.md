# Schema del frontmatter de cada herramienta

Este es el contrato de datos. Toda herramienta del directorio tiene exactamente estos campos.
Codificado en Zod en `src/content/config.ts` para que el build falle si un `.md` está mal.

## Frontmatter completo (plantilla)

```yaml
---
# ── IDENTIDAD ──────────────────────────────────────────
name: "Playwright MCP"                    # nombre tal cual
slug: "playwright-mcp"                     # url-safe, sin acentos ni espacios
tagline: "Automatiza el navegador con lenguaje natural desde tu agente de IA"

# ── CLASIFICACIÓN ──────────────────────────────────────
category: "mcp"                            # mcp | repos | apis | saas-alternativas | apps
subcategory: "automatización"
tags: ["browser", "testing", "automatización", "playwright"]

# ── URLS Y FUENTE ──────────────────────────────────────
github_url: "https://github.com/microsoft/playwright-mcp"
website_url: ""                            # web oficial si la hay
docs_url: ""                               # documentación si la hay

# ── DATOS VERIFICADOS (los actualiza GitHub Actions) ───
stars: 8400
forks: 312
last_commit: "2026-05-28"
version: "0.4.1"
license: "MIT"
language: "TypeScript"

# ── PARA EL USUARIO ────────────────────────────────────
pricing: "gratis"                          # gratis | freemium | pago
replaces: ["BrowserStack", "Selenium Grid"]
replaces_cost: "399€/mes"
install_complexity: "fácil"                # fácil | medio | avanzado

# ── SEO Y LLMS ─────────────────────────────────────────
seo_title: "Playwright MCP: automatiza el navegador con IA gratis"
seo_description: "Guía en español de Playwright MCP. Instalación, casos de uso y por qué sustituye a herramientas de pago como BrowserStack."
llm_context: "Playwright MCP permite a agentes de IA controlar navegadores web mediante lenguaje natural. Es una alternativa gratuita y open source a BrowserStack para testing y automatización web."

# ── CONTROL ────────────────────────────────────────────
featured: false
verified: true
submitted_by: "pablo"                      # pablo | community
date_added: "2026-06-09"
last_verified: "2026-06-09"
status: "activo"                           # activo | inactivo | verificar
---
```

## Definición Zod para `src/content/config.ts`

```ts
import { defineCollection, z } from 'astro:content';

const herramientas = defineCollection({
  type: 'content',
  schema: z.object({
    // Identidad
    name: z.string(),
    slug: z.string().regex(/^[a-z0-9-]+$/, 'slug en minúsculas, sin acentos ni espacios'),
    tagline: z.string().max(120),

    // Clasificación
    category: z.enum(['mcp', 'repos', 'apis', 'saas-alternativas', 'apps']),
    subcategory: z.string(),
    tags: z.array(z.string()).min(1).max(8),

    // Urls
    github_url: z.string().url().optional().or(z.literal('')),
    website_url: z.string().url().optional().or(z.literal('')),
    docs_url: z.string().url().optional().or(z.literal('')),

    // Datos verificados (GitHub Actions los rellena)
    stars: z.number().int().nonnegative().optional(),
    forks: z.number().int().nonnegative().optional(),
    last_commit: z.string().optional(),
    version: z.string().optional(),
    license: z.string(),
    language: z.string().optional(),

    // Usuario
    pricing: z.enum(['gratis', 'freemium', 'pago']),
    replaces: z.array(z.string()).default([]),
    replaces_cost: z.string().optional(),
    install_complexity: z.enum(['fácil', 'medio', 'avanzado']),

    // SEO / LLM
    seo_title: z.string().max(60),
    seo_description: z.string().max(160),
    llm_context: z.string().max(400),

    // Control
    featured: z.boolean().default(false),
    verified: z.boolean().default(false),
    submitted_by: z.enum(['pablo', 'community']).default('community'),
    date_added: z.string(),
    last_verified: z.string(),
    status: z.enum(['activo', 'inactivo', 'verificar']).default('activo'),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.string(),
    updatedDate: z.string().optional(),
    tags: z.array(z.string()).default([]),
    relatedTools: z.array(z.string()).default([]),  // slugs de herramientas
    draft: z.boolean().default(false),
  }),
});

export const collections = { herramientas, blog };
```

## Notas de diseño del schema

- `slug` con regex estricto evita problemas de URL y de traducción del navegador.
- `replaces` y `replaces_cost` alimentan el componente `Alternativas.astro` y la tabla
  "qué sustituye". Es el campo que más valor SEO/LLM aporta.
- `llm_context` máximo 400 chars: lo justo para que un LLM lo cite sin cortar.
- `tags` (máx 8) son la columna vertebral del enlazado interno. `Relacionadas.astro` cruza
  herramientas que comparten tags. Cuantas más entradas, más rico el enlazado, sin tocar código.
- Los campos de datos verificados son `.optional()` porque al crear la entrada a mano puede
  que aún no estén; el GitHub Action los rellena en el primer ciclo.
