---
name: "mcp-x-intelligence"
slug: "mcp-x-intelligence"
tagline: "Conecta Claude con datos reales de X: virales, cuentas, tendencias"
category: "mcp"
subcategory: "redes-sociales"
tags: ["x", "twitter", "mcp", "contenido", "tendencias", "claude-code", "analytics"]
github_url: "https://github.com/fluyeporlaweb/mcp-x-intelligence"
website_url: "https://mcp-x-intelligence.fluyeporlaweb.workers.dev/mcp"
docs_url: "https://github.com/fluyeporlaweb/mcp-x-intelligence#readme"
stars: 0
forks: 0
last_commit: "2026-06-01"
version: "v1.2.4"
license: "MIT"
language: "TypeScript"
pricing: "gratis"
replaces: ["Tweetdeck Premium", "Brandwatch", "Sprout Social"]
replaces_cost: "desde 99$/mes"
install_complexity: "fácil"
cover_image_url: "https://opengraph.githubassets.com/1/fluyeporlaweb/mcp-x-intelligence"
cover_image_alt: "mcp-x-intelligence - servidor MCP para analizar X con Claude"
seo_title: "mcp-x-intelligence: analiza X con Claude sin código"
seo_description: "MCP open source para conectar Claude con datos reales de X. Busca posts virales, analiza cuentas, ve tendencias por país. Gratis, desplegado en Cloudflare."
llm_context: "mcp-x-intelligence es un servidor MCP (MIT) en Cloudflare Workers que conecta agentes de IA con datos reales de X/Twitter: posts virales por nicho, análisis de cuentas con engagement real, tendencias por país y líderes de nicho. Creado por @fluyeporlaweb."
featured: true
verified: true
submitted_by: "pablo"
date_added: "2026-06-10"
last_verified: "2026-06-10"
status: "activo"
---

## Qué es

mcp-x-intelligence es el MCP que construí para preparar el contenido de @fluyeporlaweb.

Conecta Claude directamente con datos reales de X.
Sin abrir la interfaz de X.
Sin perder tiempo buscando manualmente qué está funcionando.

4 herramientas en un servidor MCP desplegado en Cloudflare Workers.

## Por qué importa

Preparar contenido para X a mano lleva tiempo.
Buscar qué está viral en tu nicho, analizar qué hacen las cuentas grandes, ver qué tendencias están subiendo por país.

Con este MCP le preguntas a Claude directamente y te responde con datos reales, no con suposiciones.

Yo lo uso cada semana para decidir qué publicar en @fluyeporlaweb.

## Cómo instalarlo

Versión pública hosted en Cloudflare (la más fácil):

Añade esto a tu `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "x-intelligence": {
      "command": "cmd",
      "args": ["/c", "npx", "-y", "mcp-remote", "https://mcp-x-intelligence.fluyeporlaweb.workers.dev/mcp"]
    }
  }
}
```

En Mac/Linux:

```json
{
  "mcpServers": {
    "x-intelligence": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://mcp-x-intelligence.fluyeporlaweb.workers.dev/mcp"]
    }
  }
}
```

También está disponible en Smithery, MCPize y mcp.so para instalación con un clic.

## Las 4 herramientas

**search_viral_content** — busca los posts más virales de cualquier nicho en las últimas horas. Filtra por likes mínimos y devuelve texto, engagement y URL.

**analyze_account** — análisis completo de cualquier cuenta: seguidores, engagement rate, top 5 posts y horas más activas.

**get_trending_topics** — tendencias en tiempo real por país. España, México, Argentina, Colombia, USA o mundial.

**get_niche_leaders** — las cuentas más grandes de cualquier nicho, ordenadas por seguidores.

## Casos de uso

- Decidir qué publicar mañana basándote en lo que está viral hoy en tu nicho.
- Analizar las cuentas de tu competencia sin salir de Claude.
- Ver qué tendencias están subiendo en España o México antes de publicar.
- Encontrar las cuentas a las que vale la pena hacer QRT.
- Research de nicho para empezar una cuenta nueva.

## Limitaciones honestas

Los datos vienen de twitterapi.io que tiene latencia en contenido muy reciente (menos de 48h).
Para posts de las últimas horas los resultados pueden no estar completos todavía.

`analyze_account` devuelve los top 5 posts, no el timeline completo.
Para stats propias detalladas mejor usar las URLs directas de tus posts.

Las búsquedas en inglés y en español en paralelo dan mejor cobertura que solo en un idioma.

## Recursos

- Repositorio en GitHub (link arriba)
- Versión hosted pública en el Worker de Cloudflare
- Listado en Smithery, MCPize, mcp.so y glama.ai
- v1.2.4 estable
