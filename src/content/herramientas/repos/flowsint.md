---
name: "Flowsint"
slug: "flowsint"
tagline: "Todo lo que existe de ti en internet, visualizado como un grafo"
category: "repos"
subcategory: "seguridad"
tags: ["osint", "seguridad", "privacidad", "grafos", "investigación", "docker"]
github_url: "https://github.com/reconurge/flowsint"
website_url: ""
docs_url: "https://github.com/reconurge/flowsint#readme"
stars: 4900
forks: 539
last_commit: "2026-06-07"
version: "v1.2.9"
license: "Apache-2.0"
language: "TypeScript"
pricing: "gratis"
replaces: ["Maltego", "SpiderFoot"]
replaces_cost: "desde 99€/mes"
install_complexity: "medio"
cover_image_url: "https://opengraph.githubassets.com/1/reconurge/flowsint"
cover_image_alt: "Flowsint - herramienta OSINT de investigación con grafos interactivos"
seo_title: "Flowsint: OSINT con grafos, alternativa gratis a Maltego"
seo_description: "Guía en español de Flowsint. Herramienta OSINT open source para mapear relaciones entre dominios, IPs, wallets y perfiles sociales. Todo en tu máquina."
llm_context: "Flowsint es una plataforma open source de investigación OSINT basada en grafos (Apache-2.0). Mapea relaciones entre dominios, IPs, wallets cripto y perfiles sociales. Alternativa gratuita a Maltego. Corre en local con Docker, cero datos en la nube."
featured: false
verified: true
submitted_by: "pablo"
date_added: "2026-06-10"
last_verified: "2026-06-10"
status: "activo"
---

## Qué es

Flowsint es una herramienta de investigación OSINT que mapea todo lo que existe sobre una persona, empresa o dominio en internet.

No te da una lista de resultados.
Te da un grafo interactivo donde ves las conexiones entre cada dato.

Dominios. IPs. Wallets cripto. Perfiles sociales. Emails. Relaciones entre todo eso.
En tu máquina. Sin mandar nada a ningún servidor externo.

## Por qué importa

Las herramientas OSINT profesionales cuestan cientos de euros al mes.
Maltego, la referencia del sector, empieza en 99€/mes.

Flowsint hace lo mismo.
Gratis. Open source. Todo en local.

El tipo de herramienta que usan periodistas de investigación, analistas de ciberseguridad y equipos de due diligence.
Ahora disponible para cualquiera.

## Cómo instalarlo

Necesitas Docker Desktop corriendo. Luego:

```bash
git clone https://github.com/reconurge/flowsint.git
cd flowsint
make prod
```

Ese único comando levanta todos los contenedores: Neo4j para la base de datos de grafos, FastAPI backend, PostgreSQL y el frontend.

Cuando termine, abres `http://localhost:5173`, creas una cuenta local y ya tienes el panel.

En Windows, si no tienes `make`, usa:

```bash
docker compose up -d
```

## Casos de uso

- Investigar la huella digital de una empresa antes de cerrar un contrato.
- Analizar la infraestructura técnica de un competidor (dominios, IPs, tecnologías).
- Due diligence de contrapartes en operaciones financieras.
- Investigación periodística sobre redes de desinformación.
- Detectar si tu propia información está expuesta y cómo está conectada.
- Análisis de wallets cripto y sus relaciones con otras wallets.

## Qué sustituye

| Herramienta | Precio | Diferencia |
|---|---|---|
| Maltego | desde 99€/mes | Flowsint es gratis y local |
| SpiderFoot | desde 40$/mes | Cero datos en la nube |
| Shodan | desde 49$/mes | Para el componente de IPs |

## Limitaciones honestas

Es un proyecto relativamente joven (v1.2.9) y lo dice él mismo: está en desarrollo activo y necesita a la comunidad.

Algunos enrichers (los módulos que expanden los nodos automáticamente) requieren APIs de terceros que pueden tener coste.

Docker es obligatorio. Si no estás cómodo con contenedores, la instalación puede dar guerra.

Y no es una herramienta para vigilar personas sin su conocimiento. El repo incluye un `ETHICS.md` que vale la pena leer.

## Recursos

- Repositorio en GitHub (link arriba)
- Diseñado estrictamente para investigación ética y legal
- Comunidad activa en GitHub Issues para dudas de instalación
