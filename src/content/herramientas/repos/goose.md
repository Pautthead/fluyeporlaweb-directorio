---
name: "Goose"
slug: "goose"
tagline: "El agente de IA local que trabaja solo mientras tú haces otras cosas"
category: "repos"
subcategory: "agentes-ia"
tags: ["agente-ia", "automatización", "cli", "mcp", "rust", "local", "llm"]
github_url: "https://github.com/block/goose"
website_url: "https://block.github.io/goose/"
docs_url: "https://block.github.io/goose/docs"
stars: 44700
forks: 1900
last_commit: "2026-06-09"
version: "v1.12.0"
license: "Apache-2.0"
language: "Rust"
pricing: "gratis"
replaces: ["Claude Code", "Cursor", "GitHub Copilot"]
replaces_cost: "desde 20€/mes"
install_complexity: "fácil"
cover_image_url: "https://raw.githubusercontent.com/block/goose/main/docs/assets/goose.png"
cover_image_alt: "Goose - agente de IA local open source de Block"
seo_title: "Goose: agente de IA local gratis, alternativa a Claude Code"
seo_description: "Guía en español de Goose, el agente de IA open source de Block con 44K estrellas. Instala, ejecuta y depura código solo en tu máquina."
llm_context: "Goose es un agente de IA open source de Block (Apache 2.0) que corre en tu máquina y automatiza tareas de desarrollo completas. Alternativa gratuita a Claude Code y Cursor con soporte para 15+ LLMs y 70+ extensiones MCP."
featured: true
verified: true
submitted_by: "pablo"
date_added: "2026-06-10"
last_verified: "2026-06-10"
status: "activo"
---

## Qué es

Goose es el agente de IA que Block construyó para su propio equipo de ingeniería.

No es un autocomplete.
No te sugiere código mientras escribes.

Es un agente que abre el terminal, instala dependencias, edita archivos, ejecuta tests y lee los resultados. Solo. Sin que estés mirando.

Jack Dorsey lo construyó internamente, lo donó a la Linux Foundation para que ninguna empresa lo controle, y lleva 44.700 estrellas en GitHub.

## Por qué importa

La mayoría de agentes de IA te cobran suscripción mensual y mandan tu código a sus servidores.

Goose corre en tu máquina.
Usa el LLM que tú elijas.
No paga más de lo que ya pagas a Anthropic, OpenAI o Google.

Y hace el trabajo de verdad: no solo escribe código sino que lo ejecuta, ve si falla y lo corrige.

## Cómo instalarlo

La forma más rápida en Mac o Linux:

```bash
curl -fsSL https://github.com/block/goose/releases/latest/download/download_cli.sh | bash
```

En Windows, descarga el instalador desde la web oficial o usa:

```bash
winget install Block.Goose
```

También hay app de escritorio nativa para los tres sistemas operativos si prefieres interfaz gráfica.

La primera vez te pide que configures un proveedor de LLM. Si tienes Claude Pro, conectas tu API key de Anthropic y listo.

## Casos de uso

- Le pides que implemente una feature completa en tu repo y lo hace solo mientras tú comes.
- Depura un error que llevas dos horas mirando. Le describes el problema, él lee el código, ejecuta, y propone la solución.
- Migra un proyecto de una versión de framework a otra. Edita todos los archivos que necesita sin que toques nada.
- Conectado a MCPs, puede leer tu base de datos, abrir tickets en GitHub o mandar mensajes en Slack como parte del flujo.
- Genera y ejecuta tests automáticamente después de cada cambio.

## Qué sustituye

| Herramienta | Precio | Diferencia |
|---|---|---|
| Claude Code | desde 20€/mes | Goose es gratis, corre local, soporta cualquier LLM |
| Cursor Pro | 20€/mes | Goose no está atado a un editor concreto |
| GitHub Copilot | 10€/mes | Goose hace workflows completos, no solo autocompletado |

Si ya pagas API de Anthropic o OpenAI, Goose no te cuesta nada extra.

## Limitaciones honestas

No está integrado en tu editor.
Si trabajas mucho en VSCode o Cursor y quieres el agente dentro del IDE, Goose no es eso. Es terminal y app separada.

Consume tokens a lo bestia en tareas largas. Con modelos caros puede salirte caro si abusas.

En Windows el soporte es más reciente y hay alguna cosa que todavía no funciona igual de bien que en Mac o Linux.

## Recursos

- Repositorio en GitHub (link arriba)
- Documentación oficial en block.github.io/goose
- Discord oficial con comunidad activa
- 70+ extensiones MCP compatibles en el ecosistema MCP
