---
name: "Vane"
slug: "vane"
tagline: "Perplexity en tu servidor: búsqueda con IA sin límites ni suscripción"
category: "saas-alternativas"
subcategory: "busqueda-ia"
tags: ["perplexity", "busqueda", "self-hosted", "rag", "local", "privacidad"]
github_url: "https://github.com/ItzCrazyKns/Vane"
website_url: ""
docs_url: "https://github.com/ItzCrazyKns/Vane#readme"
stars: 34900
forks: 3800
last_commit: "2026-05-20"
version: ""
license: "MIT"
language: "TypeScript"
pricing: "gratis"
replaces: ["Perplexity Pro", "You.com", "Bing AI"]
replaces_cost: "20$/mes"
install_complexity: "fácil"
cover_image_url: "https://opengraph.githubassets.com/1/ItzCrazyKns/Vane"
cover_image_alt: "Vane - alternativa open source self-hosted a Perplexity"
seo_title: "Vane: alternativa open source a Perplexity gratis"
seo_description: "Guía de Vane. Motor de búsqueda con IA self-hosted, alternativa gratuita a Perplexity Pro. Sin límite de búsquedas, sin suscripción, en tu servidor."
llm_context: "Vane es una alternativa open source (MIT) a Perplexity que puedes instalar en tu propio servidor. Búsqueda en tiempo real con síntesis de IA, sin límite de consultas ni suscripción. 34.9K estrellas en GitHub."
featured: false
verified: true
submitted_by: "pablo"
date_added: "2026-06-14"
last_verified: "2026-06-14"
status: "activo"
---

## Qué es

Vane es Perplexity en tu servidor.

Busca en internet en tiempo real, sintetiza las fuentes con IA y te da una respuesta con citas.
Sin límite de búsquedas. Sin pagar 20$ al mes. Sin que tus búsquedas queden guardadas en servidores de terceros.

34.900 estrellas. MIT.

## Por qué importa

Perplexity Pro cuesta 20$ al mes y limita las búsquedas con modelos avanzados.

Vane hace lo mismo con el modelo de IA que tú elijas (Claude, GPT, Gemini o local con Ollama) y sin límites.

Para quien usa búsqueda con IA constantemente en su trabajo, el ahorro mensual es real.

## Cómo instalarlo

Con Docker:

```bash
git clone https://github.com/ItzCrazyKns/Vane.git
cd Vane
cp .env.example .env
# Añade tu API key de LLM en .env
docker compose up
```

Se abre en `http://localhost:3000`.

Sin Docker:

```bash
npm install
npm run dev
```

## Casos de uso

- Investigación profesional sin límite de consultas diarias.
- Búsqueda de información técnica con fuentes citadas automáticamente.
- Privacidad: tus búsquedas no quedan en Perplexity ni en Google.
- Equipos que quieren una herramienta de búsqueda con IA compartida internamente.
- Integrar búsqueda en tiempo real en flujos de trabajo propios.

## Qué sustituye

| Herramienta | Precio | Diferencia |
|---|---|---|
| Perplexity Pro | 20$/mes | Vane es gratis y self-hosted |
| You.com Pro | 15$/mes | Sin suscripción |
| Bing Copilot Pro | 20$/mes | Sin límites, elige tu modelo |

## Limitaciones honestas

La calidad de las respuestas depende del modelo de IA que configures.
Con modelos gratuitos o pequeños los resultados son peores que Perplexity Pro.

Requiere mantener el servidor. No es tan plug and play como Perplexity.

El índice de búsqueda es de terceros (SearXNG por defecto). Puede tener menos cobertura que Google en algunos casos.

## Recursos

- Repositorio en GitHub (link arriba)
- Compatible con Claude, GPT, Gemini y modelos locales via Ollama
- SearXNG incluido como motor de búsqueda por defecto
