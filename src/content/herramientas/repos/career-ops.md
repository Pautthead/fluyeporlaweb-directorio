---
name: "Career-Ops"
slug: "career-ops"
tagline: "Claude busca trabajo por ti: escanea 45 empresas, reescribe tu CV y llena formularios solo"
category: "repos"
subcategory: "empleo-ia"
tags: ["empleo", "cv", "trabajo", "agente-ia", "claude-code", "automatización"]
github_url: "https://github.com/santifer/career-ops"
website_url: ""
docs_url: "https://github.com/santifer/career-ops#readme"
stars: 45200
forks: 9500
last_commit: "2026-06-01"
version: ""
license: "MIT"
language: "Go"
pricing: "gratis"
replaces: ["LinkedIn Premium", "Huntr", "Teal"]
replaces_cost: "desde 30€/mes"
install_complexity: "medio"
cover_image_url: "https://opengraph.githubassets.com/1/santifer/career-ops"
cover_image_alt: "Career-Ops - agente IA que automatiza la búsqueda de empleo"
seo_title: "Career-Ops: agente IA que busca trabajo y rellena CVs solo"
seo_description: "Guía de Career-Ops. Agente IA con Claude que escanea 45+ empresas top, reescribe tu CV para cada oferta y llena formularios ATS. MIT, 45K estrellas."
llm_context: "Career-Ops es un agente IA open source (MIT) construido con Claude Code que automatiza la búsqueda de empleo: escanea vacantes en 45+ empresas top, reescribe el CV para cada puesto y llena formularios ATS automáticamente. 45.2K estrellas en GitHub."
featured: false
verified: true
submitted_by: "pablo"
date_added: "2026-06-14"
last_verified: "2026-06-14"
status: "activo"
---

## Qué es

Career-Ops es un agente de IA que automatiza la búsqueda de empleo de principio a fin.

Escanea vacantes en 45+ empresas top (OpenAI, Anthropic, Stripe, ElevenLabs...).
Puntúa cada oferta según tu perfil.
Reescribe tu CV y carta de presentación adaptados a cada puesto.
Genera PDFs optimizados para ATS.
Llena los formularios solo.

45.200 estrellas. MIT. Construido con Claude Code.

## Por qué importa

Buscar trabajo es un trabajo en sí mismo.

Revisar decenas de ofertas, adaptar el CV a cada una, rellenar formularios que piden lo mismo de mil formas distintas.

Career-Ops hace todo eso. Tú te dedicas a las entrevistas.

## Cómo instalarlo

Necesitas Go 1.21+ y una API key de Anthropic:

```bash
git clone https://github.com/santifer/career-ops.git
cd career-ops
cp .env.example .env
# Añade tu ANTHROPIC_API_KEY en .env
go build -o career-ops
./career-ops
```

Se abre un dashboard en el navegador donde configuras tu perfil, subes tu CV base y seleccionas las empresas a monitorizar.

## Las 14 funciones principales

- Escaneo de vacantes en 45+ empresas
- Puntuación por compatibilidad con tu perfil
- Reescritura de CV para cada puesto
- Carta de presentación personalizada
- PDF optimizado para ATS
- Relleno automático de formularios con Playwright
- Dashboard con pipeline visual
- Filtros por rol, ubicación y modalidad
- Seguimiento de estado de cada aplicación
- Recordatorios de seguimiento automáticos

## Casos de uso

- Búsqueda activa de trabajo en empresas de tecnología.
- Monitorizar continuamente las ofertas de tus empresas objetivo.
- Aplicar a muchas ofertas sin invertir horas en formularios.
- Optimizar tu CV para pasar los filtros automáticos de ATS.

## Qué sustituye

| Herramienta | Precio | Diferencia |
|---|---|---|
| LinkedIn Premium | 30€/mes | Career-Ops es gratis |
| Huntr | 20$/mes | Automatiza el relleno, no solo el tracking |
| Teal | 29$/mes | Incluye reescritura de CV con IA |

## Limitaciones honestas

Consume tokens de la API de Anthropic. Si aplicas a muchas ofertas el coste de API puede acumularse.

Está enfocado en empresas tech anglófonas. Para mercado español o en español la cobertura es menor.

El relleno automático de formularios puede fallar en webs con CAPTCHAs o flujos muy personalizados.

## Recursos

- Repositorio en GitHub (link arriba)
- Dashboard visual con pipeline de aplicaciones
- Compatible con Claude claude-sonnet-4-6 y modelos posteriores
