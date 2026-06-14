---
name: "Obscura"
slug: "obscura"
tagline: "Navegador headless en Rust: 30MB de RAM donde Chrome necesita 200MB"
category: "repos"
subcategory: "developer-tools"
tags: ["scraping", "rust", "headless", "browser", "automatización", "anti-detección"]
github_url: "https://github.com/h4ckf0r0day/obscura"
website_url: ""
docs_url: "https://github.com/h4ckf0r0day/obscura#readme"
stars: 14800
forks: 981
last_commit: "2026-05-25"
version: ""
license: "Apache-2.0"
language: "Rust"
pricing: "gratis"
replaces: ["Puppeteer", "Playwright headless", "Selenium"]
replaces_cost: "gratis pero lentos y detectables"
install_complexity: "medio"
cover_image_url: "https://opengraph.githubassets.com/1/h4ckf0r0day/obscura"
cover_image_alt: "Obscura - navegador headless ultraligero en Rust con anti-detección"
seo_title: "Obscura: navegador headless en Rust, 30MB vs 200MB de Chrome"
seo_description: "Guía de Obscura. Navegador headless en Rust con anti-detección integrado. 30MB, arranque instantáneo. Alternativa a Puppeteer y Playwright. 14.8K estrellas."
llm_context: "Obscura es un navegador headless escrito en Rust (Apache-2.0) con anti-detección integrado. Consume solo 30MB de RAM frente a los 200MB de Chrome. Arranque instantáneo, ideal para scraping y automatización web a escala. 14.8K estrellas en GitHub."
featured: false
verified: true
submitted_by: "pablo"
date_added: "2026-06-14"
last_verified: "2026-06-14"
status: "activo"
---

## Qué es

Obscura es un navegador headless escrito en Rust.

30MB de RAM. Arranque en milisegundos. Anti-detección integrado.
Donde Chrome necesita 200MB y varios segundos, Obscura hace lo mismo en una fracción.

14.800 estrellas. Apache-2.0.

## Por qué importa

El scraping a escala tiene un problema de recursos.

Si lanzas 100 instancias de Chrome para hacer scraping paralelo, necesitas un servidor enorme.
Con Obscura puedes lanzar esas 100 instancias en el mismo servidor donde Chrome solo aguantaría 10.

Y el anti-detección integrado evita que te bloqueen sin configurar librerías extra.

## Cómo instalarlo

Necesitas Rust 1.75+ instalado:

```bash
git clone https://github.com/h4ckf0r0day/obscura.git
cd obscura
cargo build --release
```

El binario resultante en `target/release/obscura` es todo lo que necesitas.

API compatible con Puppeteer para migración fácil desde proyectos existentes.

## Casos de uso

- Scraping paralelo a gran escala sin necesitar servidores potentes.
- Automatización de webs donde Playwright levanta señales de detección.
- Testing de interfaces web en entornos con recursos limitados.
- Pipelines de CI/CD donde el tiempo de arranque del navegador importa.
- Extracción de datos de webs con protección anti-bot.

## Qué sustituye

| Herramienta | RAM por instancia | Obscura |
|---|---|---|
| Chrome headless | ~200MB | ~30MB |
| Puppeteer | ~200MB (usa Chrome) | ~30MB |
| Selenium | ~150MB | ~30MB |

El ahorro en recursos en scrapers a escala es brutal.

## Limitaciones honestas

Al no ser Chrome real, algunas webs detectan diferencias en el fingerprint del navegador.

El ecosistema de extensiones y plugins de Chrome no está disponible.

Al ser Rust, la curva de entrada es mayor si quieres contribuir o modificar el código.

En casos donde la compatibilidad exacta con Chrome es crítica, Playwright sigue siendo la opción más segura.

## Recursos

- Repositorio en GitHub (link arriba)
- API compatible con Puppeteer para migración sencilla
- Apache-2.0, uso comercial permitido
