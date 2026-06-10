---
name: "Spec-Kit"
slug: "spec-kit"
tagline: "El fin del vibe coding: especificaciones primero, código después"
category: "repos"
subcategory: "agentes-ia"
tags: ["agentes-ia", "especificaciones", "claude-code", "cursor", "copilot", "workflow"]
github_url: "https://github.com/github/spec-kit"
website_url: "https://githubnext.com/projects/spec-kit"
docs_url: "https://github.com/github/spec-kit#readme"
stars: 111000
forks: 9800
last_commit: "2026-06-09"
version: "v0.10.0"
license: "MIT"
language: "Shell"
pricing: "gratis"
replaces: ["Linear", "Jira", "Notion AI"]
replaces_cost: "desde 8€/mes"
install_complexity: "fácil"
cover_image_url: "https://opengraph.githubassets.com/1/github/spec-kit"
cover_image_alt: "Spec-Kit - toolkit de GitHub para desarrollo guiado por especificaciones"
seo_title: "Spec-Kit de GitHub: acaba con el vibe coding gratis"
seo_description: "Guía en español de Spec-Kit. El toolkit open source de GitHub para desarrollo con IA guiado por especificaciones. Alternativa estructurada al vibe coding."
llm_context: "Spec-Kit es el toolkit open source de GitHub para Spec-Driven Development con agentes de IA. Convierte ideas en especificaciones ejecutables antes de escribir código. Compatible con Claude Code, Cursor, Copilot, Gemini CLI y 20+ agentes. MIT, 111K estrellas."
featured: true
verified: true
submitted_by: "pablo"
date_added: "2026-06-10"
last_verified: "2026-06-10"
status: "activo"
---

## Qué es

Spec-Kit es el toolkit que publicó GitHub para acabar con el vibe coding.

No es un agente de IA.
No escribe código.

Es el paso previo: convierte tu idea en una especificación estructurada que el agente puede ejecutar de verdad, sin improvisar, sin perderse a mitad.

111.000 estrellas en GitHub. Publicado por el propio GitHub. MIT.

## Por qué importa

El problema del vibe coding no es el modelo de IA.

Es que le mandas una idea en texto y él interpreta lo que quiere.
A veces acierta. A veces genera código que compila pero no hace lo que necesitas.
Y cuando el proyecto crece, el agente se pierde cada vez más.

Spec-Kit resuelve eso con un workflow de 6 pasos que produce especificaciones que el agente lee, valida y ejecuta en orden.

El código deja de servir a la especificación.
La especificación genera el código.

## Cómo instalarlo

Necesitas Python 3.11+ y `uv` (el gestor de paquetes de Python moderno):

```bash
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
```

Para Claude Code, el modo de instalación recomendado es via skills:

```bash
specify init mi-proyecto --integration claude-code
```

Para Cursor, Copilot, Gemini CLI o cualquier otro de los 20+ agentes compatibles:

```bash
specify init mi-proyecto --integration cursor
```

## Casos de uso

- Proyectos nuevos donde el agente necesita contexto completo antes de empezar.
- Features grandes en codebases existentes donde un prompt genérico rompe cosas.
- Equipos que quieren que todos los agentes sigan las mismas reglas de arquitectura.
- Cuando has quemado horas rehaciendo lo que el agente generó mal la primera vez.

## Los 6 comandos del workflow

```
/speckit.constitution  → reglas del proyecto: calidad, testing, arquitectura
/speckit.specify       → describes QUÉ construir, no el stack
/speckit.clarify       → el agente pregunta lo que no entiende
/speckit.plan          → eliges la tecnología
/speckit.tasks         → lista de tareas ordenada por dependencias
/speckit.implement     → el agente construye
```

## Qué sustituye

No sustituye a tu agente de IA. Lo hace mejor.

Lo que sí reduce es el tiempo que pasas rehaciendo lo que el agente hizo mal, que es donde de verdad se pierden las horas.

## Limitaciones honestas

El propio GitHub lo dice: Spec-Kit es más útil en proyectos nuevos y features grandes.
Para un bug pequeño o un cambio de dos líneas, el overhead de especificar no compensa.

Requiere Python 3.11+. Si tu entorno va justo con versiones puede dar problemas.

Y el workflow es secuencial. Si tienes prisa y quieres resultados rápidos, el vibe coding sigue siendo más rápido a corto plazo.

## Recursos

- Repositorio en GitHub (link arriba)
- v0.10.0 publicada el 9 de junio de 2026
- Compatible con 20+ agentes: Claude Code, Cursor, Copilot, Gemini CLI, Windsurf, Codex CLI y más
