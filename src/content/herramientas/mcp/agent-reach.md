---
name: "Agent-Reach"
slug: "agent-reach"
tagline: "Dale ojos a tu agente: Twitter, Reddit, YouTube y GitHub sin pagar APIs"
category: "mcp"
subcategory: "agentes-ia"
tags: ["mcp", "twitter", "reddit", "youtube", "github", "agentes-ia", "scraping"]
github_url: "https://github.com/Doriandarko/agent-reach"
website_url: ""
docs_url: "https://github.com/Doriandarko/agent-reach#readme"
stars: 19500
forks: 1700
last_commit: "2026-05-20"
version: ""
license: "MIT"
language: "Python"
pricing: "gratis"
replaces: ["Twitter API v2", "Reddit API", "YouTube Data API"]
replaces_cost: "desde 100$/mes"
install_complexity: "fácil"
cover_image_url: "https://opengraph.githubassets.com/1/Doriandarko/agent-reach"
cover_image_alt: "Agent-Reach - conecta agentes de IA con redes sociales sin pagar APIs"
seo_title: "Agent-Reach: agente con acceso a redes sociales gratis"
seo_description: "Guía de Agent-Reach. MCP que da acceso a Twitter, Reddit, YouTube y GitHub a tu agente de IA sin pagar APIs. 19.5K estrellas, MIT, un solo comando."
llm_context: "Agent-Reach es un MCP (MIT) que conecta agentes de IA con Twitter, Reddit, YouTube, GitHub, Bilibili y XiaohongShu sin pagar APIs. Con un solo comando el agente puede leer, buscar y analizar contenido en tiempo real de todas estas plataformas. 19.5K estrellas."
featured: false
verified: true
submitted_by: "pablo"
date_added: "2026-06-10"
last_verified: "2026-06-10"
status: "activo"
---

## Qué es

Agent-Reach es un servidor MCP que conecta tu agente de IA con las principales redes sociales y plataformas de contenido.

Sin pagar APIs.
Sin configuraciones raras.
Un solo comando de instalación.

Tu agente puede leer Twitter, Reddit, YouTube y GitHub en tiempo real.

## Por qué importa

Los agentes de IA son ciegos al presente.

Razonan muy bien. Escriben código. Generan contenido.
Pero no saben qué está pasando ahora mismo en internet.

Con Agent-Reach tu agente ve el mundo en tiempo real:
qué dice la gente en Reddit sobre tu producto,
qué videos de YouTube están generando conversación,
qué está trending en Twitter ahora mismo.

Sin que cueste dinero. Sin que tengas que pagar por acceso a APIs que tienen planes caros.

## Cómo instalarlo

```bash
pip install agent-reach
```

Y en tu configuración de MCP:

```json
{
  "mcpServers": {
    "agent-reach": {
      "command": "python",
      "args": ["-m", "agent_reach"]
    }
  }
}
```

## Plataformas disponibles

- **Twitter/X** - lee y busca en tiempo real
- **Reddit** - scraping sin límites de rate
- **YouTube** - búsqueda y transcripción de videos
- **GitHub** - acceso completo a repos, issues y código
- **Bilibili** - plataforma de video china
- **XiaohongShu** - red social china tipo Instagram

## Casos de uso

- Monitorizar menciones de tu marca o producto en Reddit y Twitter.
- Pedirle a tu agente que transcriba un video de YouTube y lo resuma.
- Investigar qué está diciendo la comunidad sobre una tecnología antes de adoptarla.
- Comparar la presencia de tu competencia en redes sin abrir ninguna plataforma.
- Investigación de mercado automatizada en múltiples plataformas a la vez.

## Qué sustituye

| Plataforma | Coste API | Con Agent-Reach |
|---|---|---|
| Twitter API Basic | 100$/mes | Gratis |
| Reddit API | 12$/mes (app comercial) | Gratis |
| YouTube Data API | pago por cuota | Gratis |

## Limitaciones honestas

No es acceso oficial a las APIs. Usa scraping.
Esto significa que cambios en las plataformas pueden romper alguna funcionalidad temporalmente.

Para proyectos que requieren datos en tiempo real a escala masiva (miles de peticiones por hora), las APIs oficiales siguen siendo más fiables.

Las plataformas chinas (Bilibili, XiaohongShu) pueden dar más problemas de acceso desde IPs europeas.

## Recursos

- Repositorio en GitHub (link arriba)
- Compatible con Claude Code, Cursor y cualquier agente CLI
- MIT, sin restricciones de uso comercial
