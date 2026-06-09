# fluyeporlaweb — Directorio de herramientas open source en español

> **El directorio de herramientas open source más grande en español.**
> MCPs, repositorios, APIs y alternativas SaaS con guías de instalación reales, contexto en español y comparativas honestas.

[![Herramientas indexadas](https://img.shields.io/badge/herramientas-3-16a34a?style=flat-square)](https://fluyeporlaweb.com/directorio)
[![Built with Astro](https://img.shields.io/badge/built%20with-Astro-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Deployed on Cloudflare Pages](https://img.shields.io/badge/deploy-Cloudflare%20Pages-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)
[![License MIT](https://img.shields.io/badge/licencia-MIT-16a34a?style=flat-square)](LICENSE)
[![X Follow](https://img.shields.io/badge/X-@fluyeporlaweb-000000?style=flat-square&logo=x&logoColor=white)](https://x.com/fluyeporlaweb)

---

## Qué es

No es una lista de GitHub con traductor automático encima.

Cada herramienta del directorio tiene:
- **Por qué importa** — el problema real que resuelve, con números
- **Cómo instalarlo** — pasos reales y probados, no el README copiado
- **Qué sustituye** — tabla comparativa con precios reales de las alternativas de pago
- **Limitaciones honestas** — lo que no hace bien
- **Contexto para LLMs** — optimizado para que ChatGPT, Perplexity y Claude citen bien la entrada

El público es la comunidad hispanohablante de developers, diseñadores y makers.
El tráfico internacional llega a través de la traducción nativa del navegador.

🌐 **[fluyeporlaweb.com](https://fluyeporlaweb.com)** — sitio en producción  
🐦 **[@fluyeporlaweb](https://x.com/fluyeporlaweb)** — cuenta de X (~20K seguidores)  
✈️ **[t.me/fluyeporlaweb](https://t.me/fluyeporlaweb)** — canal de Telegram

---

## Categorías

| Categoría | Descripción |
|---|---|
| [MCPs](https://fluyeporlaweb.com/directorio/mcp) | Servidores Model Context Protocol para agentes de IA |
| [Repositorios](https://fluyeporlaweb.com/directorio/repos) | Proyectos para instalar y autoalojar |
| [APIs](https://fluyeporlaweb.com/directorio/apis) | Interfaces con plan gratuito generoso |
| [Alternativas SaaS](https://fluyeporlaweb.com/directorio/saas-alternativas) | Open source que sustituye a servicios de pago |
| [Apps](https://fluyeporlaweb.com/directorio/apps) | Aplicaciones listas para usar |

---

## Stack técnico

| Pieza | Tecnología | Por qué |
|---|---|---|
| Framework | [Astro 5](https://astro.build) | Estático puro → Core Web Vitals perfectos → mejor SEO y AdSense |
| Hosting | [Cloudflare Pages](https://pages.cloudflare.com) | CDN global, despliegue en cada push, sin servidor que mantener |
| Contenido | Markdown + Zod | Cada herramienta es un `.md` con frontmatter validado en build time |
| Búsqueda | [Pagefind](https://pagefind.app) | Índice estático generado en build, cero backend |
| Sitemap | `@astrojs/sitemap` | Generación automática para Search Console |
| Datos de repos | GitHub Actions | Actualización semanal de stars, forks y versiones sin intervención manual |

---

## Desarrollo local

```bash
# Clonar el repo
git clone https://github.com/Pautthead/fluyeporlaweb-directorio.git
cd fluyeporlaweb-directorio

# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
# → http://localhost:4321

# Build de producción
npm run build

# Preview del build (con búsqueda Pagefind activa)
npm run preview
# → http://localhost:4321
```

**Requisitos:** Node 18 o superior.

---

## Cómo contribuir

Las contribuciones son bienvenidas. Hay tres formas de ayudar:

### 1. Enviar una herramienta nueva

La forma más fácil es usar el formulario en [fluyeporlaweb.com/enviar](https://fluyeporlaweb.com/enviar).
Se abre una PR automáticamente. Pablo la revisa y mergea si cumple los criterios.

Si prefieres hacerlo directamente vía PR, consulta [CONTRIBUTING.md](CONTRIBUTING.md) para el formato exacto.

### 2. Corregir un error

Si ves datos incorrectos (stars mal, enlace roto, guía desactualizada), abre una issue
o envía una PR con la corrección directamente sobre el `.md` de la herramienta.

### 3. Mejorar el código del sitio

Fork → rama → PR. Los cambios que afecten al diseño o al schema de frontmatter
conviene comentarlos primero en una issue para alinear antes de invertir tiempo.

---

## Estructura del proyecto

```
src/
  content/
    herramientas/      ← un .md por herramienta (el core del directorio)
      mcp/
      repos/
      apis/
      saas-alternativas/
      apps/
    blog/              ← artículos de apoyo SEO
  components/          ← HerramientaCard, Badges, Relacionadas, etc.
  layouts/             ← Base, Herramienta, Categoria, Articulo
  pages/               ← rutas del sitio
  styles/
    tokens.css         ← design tokens (verde #16a34a, dark mode auto)
schema/
  frontmatter-schema.md  ← contrato de datos de cada herramienta
scripts/               ← GitHub Action de datos + Workers de Cloudflare
```

---

## Licencia

[MIT](LICENSE) © 2026 Pablo Navarro ([@fluyeporlaweb](https://x.com/fluyeporlaweb))

El contenido de las herramientas (textos, guías, valoraciones) está licenciado bajo MIT.
Cada herramienta listada mantiene su propia licencia original.
