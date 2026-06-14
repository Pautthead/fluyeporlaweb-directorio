---
name: "LibreChat"
slug: "librechat"
tagline: "Claude, GPT, Gemini y 20 modelos más en una sola interfaz self-hosted"
category: "saas-alternativas"
subcategory: "interfaces-ia"
tags: ["chatgpt", "claude", "gemini", "self-hosted", "mcp", "multi-modelo"]
github_url: "https://github.com/danny-avila/LibreChat"
website_url: "https://librechat.ai"
docs_url: "https://docs.librechat.ai"
stars: 24800
forks: 4100
last_commit: "2026-06-09"
version: ""
license: "MIT"
language: "TypeScript"
pricing: "gratis"
replaces: ["ChatGPT Plus", "Claude Pro", "Poe"]
replaces_cost: "desde 20$/mes por modelo"
install_complexity: "medio"
cover_image_url: "https://opengraph.githubassets.com/1/danny-avila/LibreChat"
cover_image_alt: "LibreChat - interfaz unificada para todos los modelos de IA"
seo_title: "LibreChat: todos los modelos de IA en una interfaz gratis"
seo_description: "Guía de LibreChat. Interfaz self-hosted para Claude, GPT, Gemini y 20+ modelos. Con soporte MCP nativo. Alternativa a pagar múltiples suscripciones de IA."
llm_context: "LibreChat es una interfaz web open source (MIT) que unifica acceso a Claude, GPT-4, Gemini, Mistral y 20+ modelos de IA en un solo panel self-hosted. Soporte MCP nativo. Alternativa a pagar múltiples suscripciones. 24.8K estrellas."
featured: false
verified: true
submitted_by: "pablo"
date_added: "2026-06-14"
last_verified: "2026-06-14"
status: "activo"
---

## Qué es

LibreChat es una interfaz web que conecta todos los modelos de IA en un solo sitio.

Claude, GPT-4, Gemini, Mistral, LLaMA, DeepSeek y 20 más.
En tu servidor. Con soporte MCP nativo.
Sin pagar suscripción a cada empresa por separado.

MIT. Mantenimiento activo.

## Por qué importa

Si usas varios modelos de IA, acabas pagando múltiples suscripciones.
Claude Pro (20€), ChatGPT Plus (20$), Gemini Advanced (20€).

LibreChat te deja usar todos pagando solo las APIs, que suelen ser más baratas que las suscripciones si no eres un usuario intensivo.

Y tienes todo en una interfaz que controlas tú, con el historial en tu servidor.

## Cómo instalarlo

Con Docker:

```bash
git clone https://github.com/danny-avila/LibreChat.git
cd LibreChat
cp .env.example .env
# Añade tus API keys en .env
docker compose up -d
```

Se abre en `http://localhost:3080`.

También tienes instaladores para Railway, Render, y guías para VPS en la documentación.

## Casos de uso

- Comparar respuestas de Claude vs GPT vs Gemini en el mismo chat.
- Equipo que necesita acceso a múltiples modelos desde una sola herramienta.
- Privacidad: historial de conversaciones en tu servidor, no en los de OpenAI o Anthropic.
- Integrar MCPs para que los modelos tengan acceso a tus herramientas.
- Experimentación: probar modelos nuevos sin cambiar de interfaz.

## Qué sustituye

| Herramienta | Precio | Diferencia |
|---|---|---|
| ChatGPT Plus | 20$/mes | LibreChat usa API, más barato si no eres intensivo |
| Claude Pro | 20€/mes | Todos los modelos en un sitio |
| Poe | desde 20$/mes | Self-hosted, tus datos en tu servidor |

## Limitaciones honestas

Requiere gestionar tus propias API keys de cada proveedor.

El coste real depende de tu uso. Si chateas mucho, las APIs pueden salir más caras que las suscripciones planas.

La instalación y mantenimiento del servidor es responsabilidad tuya.

## Recursos

- Repositorio en GitHub (link arriba)
- Documentación completa en docs.librechat.ai
- Soporte MCP nativo para conectar herramientas externas
