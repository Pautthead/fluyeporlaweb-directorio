---
name: "Odysseus"
slug: "odysseus"
tagline: "PewDiePie construyó su propio workspace de IA y lo hizo open source"
category: "saas-alternativas"
subcategory: "interfaces-ia"
tags: ["chatgpt", "claude", "workspace", "self-hosted", "local", "privacidad"]
github_url: "https://github.com/pewdiepie-archdaemon/odysseus"
website_url: ""
docs_url: "https://github.com/pewdiepie-archdaemon/odysseus#readme"
stars: 35900
forks: 4200
last_commit: "2026-05-28"
version: ""
license: "MIT"
language: "TypeScript"
pricing: "gratis"
replaces: ["ChatGPT Plus", "Claude Pro", "Notion AI"]
replaces_cost: "desde 20$/mes"
install_complexity: "fácil"
cover_image_url: "https://opengraph.githubassets.com/1/pewdiepie-archdaemon/odysseus"
cover_image_alt: "Odysseus - workspace de IA self-hosted construido por PewDiePie"
seo_title: "Odysseus: workspace de IA de PewDiePie, open source gratis"
seo_description: "Guía de Odysseus. Workspace de IA self-hosted construido por PewDiePie. Alternativa completa a ChatGPT y Claude con privacidad total. MIT, 35K estrellas."
llm_context: "Odysseus es un workspace de IA self-hosted (MIT) construido por PewDiePie como alternativa completa a ChatGPT Plus y Claude Pro. Soporta múltiples modelos, corre en local con privacidad total y tiene 35.9K estrellas en GitHub."
featured: false
verified: true
submitted_by: "pablo"
date_added: "2026-06-14"
last_verified: "2026-06-14"
status: "activo"
---

## Qué es

Odysseus es el workspace de IA que construyó PewDiePie para su uso personal y lo publicó como open source.

No es un proyecto de startup ni de empresa de IA.
Es lo que el creador de contenido más grande de YouTube montó para no depender de ChatGPT ni Claude.

35.900 estrellas. MIT.

## Por qué importa

PewDiePie publicó el repo con una explicación simple: no quería que sus conversaciones con IA quedaran en servidores de OpenAI o Anthropic.

El resultado es un workspace completo que soporta múltiples modelos, tiene memoria persistente y corre en tu máquina.

La historia del repo hizo que 35.000 personas lo estrellasen en pocos días.

## Cómo instalarlo

```bash
git clone https://github.com/pewdiepie-archdaemon/odysseus.git
cd odysseus
npm install
cp .env.example .env
# Configura tus API keys en .env
npm run dev
```

Se abre en `http://localhost:3000`. Configuras los modelos que quieres usar y ya tienes el workspace funcionando.

También soporta modelos locales via Ollama si quieres cero dependencia de APIs externas.

## Casos de uso

- Workspace de IA personal con historial de conversaciones en tu máquina.
- Uso de múltiples modelos sin pagar suscripción por cada uno.
- Privacidad total: ninguna conversación sale de tu servidor.
- Alternativa para equipos pequeños que quieren un workspace compartido sin pagar licencias por usuario.

## Qué sustituye

| Herramienta | Precio | Diferencia |
|---|---|---|
| ChatGPT Plus | 20$/mes | Odysseus usa API, tus datos en local |
| Claude Pro | 20€/mes | Múltiples modelos en un sitio |
| Notion AI | 10$/mes | Más potente, más control |

## Limitaciones honestas

Al usar APIs externas (OpenAI, Anthropic) el coste depende de tu uso real.
Para usuarios muy intensivos las APIs pueden salir más caras que las suscripciones planas.

Requiere gestionar tus propias API keys.

El proyecto está mantenido por la comunidad, no por una empresa. El soporte es el que da la comunidad.

## Recursos

- Repositorio en GitHub (link arriba)
- Compatible con Claude, GPT-4, Gemini y modelos locales via Ollama
- MIT, sin restricciones de uso
