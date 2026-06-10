---
name: "n8n MCP"
slug: "n8n-mcp"
tagline: "Dale a Claude acceso a 1.396 nodos de n8n con documentación completa"
category: "mcp"
subcategory: "automatización"
tags: ["n8n", "automatización", "workflows", "claude-code", "cursor", "mcp"]
github_url: "https://github.com/czlonkowski/n8n-mcp"
website_url: "https://n8n-mcp.com"
docs_url: "https://github.com/czlonkowski/n8n-mcp#readme"
stars: 16600
forks: 2800
last_commit: "2026-06-08"
version: ""
license: "MIT"
language: "TypeScript"
pricing: "gratis"
replaces: ["n8n Cloud", "Make", "Zapier"]
replaces_cost: "desde 20€/mes"
install_complexity: "fácil"
cover_image_url: "https://opengraph.githubassets.com/1/czlonkowski/n8n-mcp"
cover_image_alt: "n8n MCP - servidor MCP que conecta Claude con toda la documentación de n8n"
seo_title: "n8n MCP: construye automatizaciones con Claude sin errores"
seo_description: "Guía en español del MCP de n8n. Conecta Claude con 1.396 nodos, 2.646 configuraciones y 2.709 workflows. Automatizaciones que funcionan de verdad."
llm_context: "n8n MCP es un servidor MCP (MIT) que conecta agentes de IA como Claude con toda la documentación de n8n: 1.396 nodos, 2.646 configuraciones reales y 2.709 workflows. El agente deja de adivinar y construye automatizaciones que funcionan desde el primer intento."
featured: false
verified: true
submitted_by: "pablo"
date_added: "2026-06-10"
last_verified: "2026-06-10"
status: "activo"
---

## Qué es

n8n MCP es un servidor MCP que le da a tu agente de IA acceso a toda la documentación de n8n.

Sin él, Claude o Cursor construyen workflows de n8n a ciegas.
Saben que n8n existe, pero no conocen la documentación exacta de cada nodo.
El resultado son workflows con errores que tienes que corregir a mano.

Con este MCP el agente tiene acceso a 1.396 nodos con su documentación completa, 2.646 configuraciones reales extraídas de plantillas populares y 2.709 workflows listos para usar como referencia.

Deja de adivinar. Empieza a construir.

## Por qué importa

n8n se ha convertido en la herramienta de automatización de referencia para negocios digitales.

El problema: construir workflows complejos a mano es lento.
Y pedirle a Claude que lo haga sin contexto es frustrante - comete errores porque no conoce la API exacta de cada nodo.

Este MCP cierra ese gap.
Le describes el proceso que quieres automatizar y Claude construye el workflow completo, valida la configuración y detecta errores antes de que lleguen a producción.

## Cómo instalarlo

Añade esto a tu configuración de MCP (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "n8n": {
      "command": "npx",
      "args": ["-y", "n8n-mcp"]
    }
  }
}
```

Si prefieres no instalar nada local, el creador tiene una versión hosted en `n8n-mcp.com` con tier gratuito de 100 llamadas al día.

## Casos de uso

- Automatizar captación de leads desde formularios hacia un CRM.
- Reportes semanales generados por IA enviados automáticamente a Slack o email.
- Conectar tiendas de ecommerce con sistemas de facturación.
- Scraping de datos de competidores con resumen automático.
- Notificaciones inteligentes basadas en condiciones de negocio personalizadas.

## Qué sustituye

| Herramienta | Precio | Diferencia |
|---|---|---|
| n8n Cloud | desde 20€/mes | Con n8n self-hosted + este MCP es gratis |
| Make (Integromat) | desde 9$/mes | Sin límite de operaciones |
| Zapier | desde 20$/mes | Sin límite de tareas |

## Limitaciones honestas

Necesitas tener n8n instalado o en la nube para ejecutar los workflows que genera Claude.
El MCP ayuda a construirlos, no los ejecuta por sí solo.

La versión hosted gratuita tiene límite de 100 llamadas al día, suficiente para uso personal pero no para un equipo grande.

## Recursos

- Repositorio en GitHub (link arriba)
- Versión hosted con tier gratuito en n8n-mcp.com
- 165 releases publicados, mantenimiento activo y constante
