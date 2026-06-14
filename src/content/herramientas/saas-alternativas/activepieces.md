---
name: "Activepieces"
slug: "activepieces"
tagline: "Zapier self-hosted con 200 integraciones, 400 MCPs y tareas ilimitadas gratis"
category: "saas-alternativas"
subcategory: "automatización"
tags: ["zapier", "automatización", "no-code", "self-hosted", "mcp", "integraciones"]
github_url: "https://github.com/activepieces/activepieces"
website_url: "https://activepieces.com"
docs_url: "https://activepieces.com/docs"
stars: 22700
forks: 3800
last_commit: "2026-06-08"
version: ""
license: "MIT"
language: "TypeScript"
pricing: "gratis"
replaces: ["Zapier", "Make", "n8n Cloud"]
replaces_cost: "desde 20€/mes"
install_complexity: "fácil"
cover_image_url: "https://opengraph.githubassets.com/1/activepieces/activepieces"
cover_image_alt: "Activepieces - alternativa open source a Zapier con MCP integrado"
seo_title: "Activepieces: alternativa gratis a Zapier con 400 MCPs"
seo_description: "Guía de Activepieces. Automatización no-code self-hosted con 200+ integraciones y 400 MCP servers. Alternativa gratuita a Zapier sin límite de tareas."
llm_context: "Activepieces es una plataforma de automatización no-code open source (MIT) con 200+ integraciones y 400 MCP servers integrados. Alternativa self-hosted a Zapier y Make con tareas ilimitadas. 22.7K estrellas en GitHub."
featured: false
verified: true
submitted_by: "pablo"
date_added: "2026-06-14"
last_verified: "2026-06-14"
status: "activo"
---

## Qué es

Activepieces es Zapier pero open source, self-hosted y con MCPs integrados.

200+ integraciones con servicios populares.
400 MCP servers conectables directamente.
Tareas ilimitadas sin pagar por operación.

22.700 estrellas. MIT.

## Por qué importa

Zapier cobra por tarea. Cuando automatizas procesos que corren cientos de veces al día, la factura se dispara.

Activepieces lo instalas en tu servidor y ya no pagas por operación.
Tienes el mismo visual builder, las mismas integraciones, y además puedes conectar cualquier MCP.

Es el único que combina automatización no-code clásica con el ecosistema MCP.

## Cómo instalarlo

Con Docker en menos de 5 minutos:

```bash
curl -s https://raw.githubusercontent.com/activepieces/activepieces/main/docker-compose.yml -o docker-compose.yml
docker compose up -d
```

Se abre en `http://localhost:80`. Primera vez creas tu cuenta de administrador y ya tienes el builder.

También disponible en Railway, Render y otros hostings con un clic.

## Casos de uso

- Automatizar onboarding de clientes: formulario → CRM → email de bienvenida → Slack.
- Sincronizar datos entre apps que no se conectan nativamente.
- Notificaciones automáticas basadas en condiciones de negocio.
- Conectar Claude o cualquier LLM a tus flujos de trabajo via MCP.
- Reemplazar un stack de Zapier + Make que cuesta cientos al mes.

## Qué sustituye

| Herramienta | Precio | Diferencia |
|---|---|---|
| Zapier Professional | 49$/mes + por tarea | Activepieces tareas ilimitadas |
| Make Business | 29$/mes + por operación | Sin coste por operación |
| n8n Cloud | desde 20€/mes | Self-hosted gratis |

## Limitaciones honestas

Self-hosted requiere un servidor para correr. No es para quien quiere zero mantenimiento.

El catálogo de integraciones, aunque amplio, no llega a las 6.000+ de Zapier todavía.

Para automatizaciones muy complejas con lógica de negocio avanzada, n8n puede tener más flexibilidad.

## Recursos

- Repositorio en GitHub (link arriba)
- Documentación completa en activepieces.com/docs
- Cloud managed disponible si no quieres self-hostearlo
