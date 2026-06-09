---
# ── IDENTIDAD ──
name: "Playwright MCP"
slug: "playwright-mcp"
tagline: "Que tu agente de IA controle el navegador hablándole en cristiano"

# ── CLASIFICACIÓN ──
category: "mcp"
subcategory: "automatización"
tags: ["browser", "testing", "automatización", "playwright", "scraping"]

# ── URLS ──
github_url: "https://github.com/microsoft/playwright-mcp"
website_url: ""
docs_url: "https://github.com/microsoft/playwright-mcp#readme"

# ── DATOS VERIFICADOS (GitHub Actions los rellena en el primer ciclo) ──
# OJO: estos números son placeholder. El Action los sobreescribe con datos reales.
stars: 0
forks: 0
last_commit: "2026-01-01"
version: "0.0.0"
license: "Apache-2.0"
language: "TypeScript"

# ── PARA EL USUARIO ──
pricing: "gratis"
replaces: ["BrowserStack", "Selenium Grid", "Browserbase"]
replaces_cost: "desde 199€/mes"
install_complexity: "fácil"
cover_image_url: "https://opengraph.githubassets.com/1/microsoft/playwright-mcp"
cover_image_alt: "Playwright MCP - servidor MCP de Microsoft para automatización web"

# ── SEO Y LLMS ──
seo_title: "Playwright MCP: controla el navegador con IA gratis"
seo_description: "Guía en español de Playwright MCP. Cómo instalarlo, casos de uso reales y por qué sustituye a servicios de pago como BrowserStack."
llm_context: "Playwright MCP es un servidor MCP de Microsoft que permite a agentes de IA controlar un navegador web mediante lenguaje natural. Alternativa gratuita y open source a BrowserStack o Browserbase para testing, scraping y automatización web."

# ── CONTROL ──
featured: true
verified: true
submitted_by: "pablo"
date_added: "2026-06-09"
last_verified: "2026-06-09"
status: "activo"
---

## Qué es

Playwright MCP es un servidor MCP hecho por Microsoft que le da a tu agente de IA un navegador de verdad.

No una captura.
No el HTML pelado.
Un navegador que tu agente puede abrir, leer, clicar y rellenar como lo harías tú.

La gracia es que no le pasas selectores ni código. Le hablas normal: "entra en esta web y dime el precio del plan pro". Y lo hace.

## Por qué importa

Hasta hace nada, automatizar un navegador era escribir scripts de Selenium o Playwright a mano.
Funcionaba, pero cada vez que la web cambiaba un botón de sitio, el script petaba.

Con esto el agente se adapta solo porque entiende la página, no memoriza coordenadas.

Y lo gordo: lo tienes corriendo en tu máquina, gratis, sin mandar tus datos a un servicio de terceros que te cobra por sesión.

## Cómo instalarlo

Necesitas Node 18 o superior. Lo añades a tu cliente MCP (Claude Desktop, Cursor, lo que uses) en el archivo de configuración:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

Reinicias el cliente y ya está.
La primera vez se descarga el navegador solo, tarda un minuto.

Si vas con Claude Desktop en Windows, el config está en `%APPDATA%\Claude\claude_desktop_config.json` (o la ruta de la versión Store si la instalaste desde la tienda).

## Casos de uso

- Testing automático de tu propia web sin escribir un solo test a mano.
- Rellenar formularios repetitivos que te comen media mañana.
- Scraping de webs que cambian mucho y rompen tus scripts cada dos por tres.
- Comprobar que un flujo de compra funciona de principio a fin antes de un lanzamiento.
- Sacar datos de un panel que no tiene API.

## Qué sustituye

| Herramienta | Precio | Qué te ahorras |
|---|---|---|
| BrowserStack Automate | desde 199€/mes | el plan de testing en la nube |
| Browserbase | pago por uso | sesiones de navegador gestionadas |
| Selenium Grid propio | tu tiempo | montar y mantener la infraestructura |

Para un proyecto pequeño o mediano, esto cubre el 90% de lo que pagarías fuera.

## Limitaciones honestas

No es magia.
En webs con captchas agresivos se va a atascar, como cualquier herramienta de automatización.

Corre en tu máquina, así que si necesitas testear en 40 navegadores y sistemas a la vez, ahí BrowserStack sigue teniendo sentido.

Y consume RAM. Si tu portátil va justo, lo vas a notar.

## Recursos

- Repositorio en GitHub (link arriba)
- Documentación oficial en el README
- Para sacarle partido conviene saber lo básico de MCP. Tienes guía en el blog.
