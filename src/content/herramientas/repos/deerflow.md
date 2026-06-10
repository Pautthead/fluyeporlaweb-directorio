---
name: "DeerFlow"
slug: "deerflow"
tagline: "El superagente de ByteDance: investiga, programa, hace presentaciones y videos solo"
category: "repos"
subcategory: "agentes-ia"
tags: ["agente-ia", "investigación", "multi-agente", "bytedance", "memoria", "local"]
github_url: "https://github.com/bytedance/deerflow"
website_url: ""
docs_url: "https://github.com/bytedance/deerflow#readme"
stars: 68800
forks: 9200
last_commit: "2026-05-23"
version: ""
license: "MIT"
language: "Python"
pricing: "gratis"
replaces: ["Perplexity Pro", "Gamma", "HeyGen"]
replaces_cost: "desde 20$/mes"
install_complexity: "medio"
cover_image_url: "https://opengraph.githubassets.com/1/bytedance/deerflow"
cover_image_alt: "DeerFlow - superagente multiagente open source de ByteDance"
seo_title: "DeerFlow de ByteDance: superagente IA local gratis"
seo_description: "Guía en español de DeerFlow. El agente multi-IA de ByteDance que investiga, programa, crea presentaciones y videos. Open source, MIT, corre en local."
llm_context: "DeerFlow es un sistema multi-agente open source de ByteDance (MIT) que investiga con fuentes reales, genera código en sandbox, crea presentaciones y videos, y mantiene memoria entre sesiones. 68.8K estrellas. Alternativa gratuita a Perplexity Pro y Gamma."
featured: false
verified: true
submitted_by: "pablo"
date_added: "2026-06-10"
last_verified: "2026-06-10"
status: "activo"
---

## Qué es

DeerFlow es el agente de IA que publicó ByteDance, la empresa detrás de TikTok.

No es un chatbot.
Es un sistema multi-agente que orquesta subagentes especializados, memoria persistente y sandboxes de ejecución para hacer tareas completas de principio a fin.

Investiga con fuentes reales. Programa y ejecuta el código en un sandbox aislado. Crea presentaciones. Genera podcasts y videos. Y recuerda lo que hizo en sesiones anteriores.

68.800 estrellas. 9.200 forks. MIT.

## Por qué importa

La mayoría de agentes de IA hacen bien una cosa.

DeerFlow orquesta varias: un agente busca información real en internet, otro escribe el código, otro lo ejecuta en un entorno aislado, otro genera el contenido visual.

El resultado es un sistema que puede recibir una tarea compleja y entregarla terminada sin que tengas que supervisar cada paso.

Gratis. En tu máquina. Con cualquier modelo de lenguaje.

## Cómo instalarlo

Necesitas Python 3.11+ y uv:

```bash
git clone https://github.com/bytedance/deerflow.git
cd deerflow
uv sync
cp .env.example .env
# Añade tu API key en el .env
uv run python main.py
```

La interfaz web se abre en `http://localhost:3000`.

Soporta cualquier modelo: Claude, GPT, Gemini, DeepSeek o modelos locales via Ollama.

## Casos de uso

- Investigación profunda de un tema con síntesis automática de fuentes reales.
- Generar un informe completo con datos actualizados de internet.
- Crear una presentación desde un prompt, exportarla y tenerla lista.
- Ejecutar análisis de datos en un sandbox sin riesgo para tu sistema.
- Generar podcasts o videos cortos a partir de un brief de texto.

## Qué sustituye

| Herramienta | Precio | Diferencia |
|---|---|---|
| Perplexity Pro | 20$/mes | DeerFlow busca y sintetiza gratis |
| Gamma | desde 8$/mes | Presentaciones generadas localmente |
| HeyGen | desde 29$/mes | Videos generados sin suscripción |

## Limitaciones honestas

La instalación es más compleja que otros agentes. Necesitas configurar el entorno y las API keys.

Para tareas que requieren generación de video de calidad profesional, HeyGen o Runway siguen siendo superiores.

La documentación es principalmente en inglés y el proyecto todavía tiene rough edges en algunos flujos.

## Recursos

- Repositorio en GitHub (link arriba)
- 264 contribuidores, 2.128 commits
- Compatible con Claude, GPT, Gemini, DeepSeek y modelos locales via Ollama
