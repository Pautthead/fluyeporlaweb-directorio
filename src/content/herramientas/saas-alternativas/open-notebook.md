---
name: "Open Notebook"
slug: "open-notebook"
tagline: "NotebookLM de Google en tu máquina, con 16 modelos y sin mandar tus datos a nadie"
category: "saas-alternativas"
subcategory: "productividad-ia"
tags: ["notebooklm", "rag", "local", "privacidad", "ollama", "documentos"]
github_url: "https://github.com/lfnovo/open-notebook"
website_url: ""
docs_url: "https://github.com/lfnovo/open-notebook#readme"
stars: 25400
forks: 2900
last_commit: "2026-06-01"
version: ""
license: "MIT"
language: "Python"
pricing: "gratis"
replaces: ["Google NotebookLM", "Notion AI", "ChatPDF"]
replaces_cost: "desde 0€ pero con tus datos en Google"
install_complexity: "medio"
cover_image_url: "https://opengraph.githubassets.com/1/lfnovo/open-notebook"
cover_image_alt: "Open Notebook - alternativa open source a Google NotebookLM"
seo_title: "Open Notebook: alternativa open source a Google NotebookLM"
seo_description: "Guía de Open Notebook. NotebookLM en tu máquina con 16 modelos de IA y modo offline con Ollama. Alternativa gratuita que no envía tus documentos a Google."
llm_context: "Open Notebook es una alternativa open source (MIT) a Google NotebookLM que corre en local. Soporta 16+ modelos de IA y funciona 100% offline con Ollama. Tus documentos no salen de tu máquina. 25.4K estrellas en GitHub."
featured: false
verified: true
submitted_by: "pablo"
date_added: "2026-06-14"
last_verified: "2026-06-14"
status: "activo"
---

## Qué es

Open Notebook hace lo mismo que Google NotebookLM: subes documentos y le haces preguntas sobre ellos.

La diferencia es que tus documentos no salen de tu máquina.

Soporta 16+ modelos de IA (Claude, GPT, Gemini, y modelos locales via Ollama).
Funciona 100% offline si usas Ollama.

25.400 estrellas. MIT.

## Por qué importa

Google NotebookLM es gratis pero tus documentos van a los servidores de Google.

Para documentos sensibles (contratos, datos de clientes, investigación propietaria) eso no es aceptable.

Open Notebook te da la misma funcionalidad con privacidad total.
Y sin los límites de páginas y notebooks del plan gratuito de Google.

## Cómo instalarlo

Con Docker es lo más sencillo:

```bash
git clone https://github.com/lfnovo/open-notebook.git
cd open-notebook
cp .env.example .env
# Añade tu API key en .env (o deja vacío para usar Ollama)
docker compose up -d
```

Se abre en `http://localhost:8080`.

Para modo 100% offline, instala Ollama primero y elige un modelo local en la configuración.

## Casos de uso

- Analizar contratos o documentos legales sin subirlos a ningún servidor.
- Investigar bases de conocimiento internas de empresa con privacidad.
- Estudiar PDFs técnicos largos haciéndoles preguntas directas.
- Crear podcasts de audio a partir de tus documentos (función similar a NotebookLM).
- Investigación periodística con fuentes sensibles.

## Qué sustituye

| Herramienta | Problema | Open Notebook |
|---|---|---|
| Google NotebookLM | Tus docs en servidores de Google | 100% local |
| ChatPDF | Pago por páginas | Sin límites |
| Notion AI | Suscripción + datos en Notion | Gratis y local |

## Limitaciones honestas

La instalación con Docker requiere conocimientos básicos de terminal.

En modo offline con Ollama la calidad depende del modelo local que uses. Los modelos pequeños (7B) no razonan tan bien como Claude o GPT-4.

La generación de podcasts de audio, una de las funciones estrella de NotebookLM, está todavía en desarrollo en Open Notebook.

## Recursos

- Repositorio en GitHub (link arriba)
- Compatible con Claude, GPT-4, Gemini y modelos locales via Ollama
- Documentación completa en el README
