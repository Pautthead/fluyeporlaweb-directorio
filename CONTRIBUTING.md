# Cómo contribuir al directorio

Gracias por querer añadir una herramienta. Esto explica el proceso exacto.

---

## La regla principal

**Ningún envío se mergea sin revisión humana.** Ni el formulario web ni las PRs automáticas se publican solas. Pablo revisa cada una antes de mergear.

---

## Criterios de aceptación

Una herramienta entra en el directorio si cumple esto:

- Es **open source** con licencia verificable (MIT, Apache, GPL, AGPL, MPL o similar)
- Está **activamente mantenida** (commit en los últimos 6 meses, o tiene comunidad activa)
- Es **útil para developers, diseñadores o makers hispanohablantes**
- Tiene al menos **100 estrellas en GitHub** o es especialmente relevante para el ecosistema MCP/IA
- **Sustituye algo de pago** o resuelve un problema real sin alternativa obvia

No se acepta:
- Freeware que no es open source
- Proyectos abandonados
- Herramientas duplicadas sin diferenciación clara respecto a las ya indexadas
- Productos de pago con un plan gratuito de uso simbólico

---

## Cómo añadir una herramienta vía PR

### 1. Crea el archivo

Crea un nuevo `.md` dentro de la carpeta de su categoría:

```
src/content/herramientas/
  mcp/          ← servidores MCP
  repos/        ← proyectos para instalar o autoalojar
  apis/         ← APIs con plan gratuito generoso
  saas-alternativas/  ← alternativas open source a SaaS de pago
  apps/         ← apps listas para usar
```

El nombre del archivo debe coincidir con el campo `slug`: `mi-herramienta.md`

### 2. Copia esta plantilla de frontmatter

```yaml
---
name: "Nombre de la herramienta"
slug: "nombre-herramienta"          # minúsculas, guiones, sin acentos
tagline: "Una frase. Sin punto final. Sin hype."

category: "repos"                   # mcp | repos | apis | saas-alternativas | apps
subcategory: "tu-subcategoría"
tags: ["tag1", "tag2", "tag3"]      # entre 1 y 8 tags

github_url: "https://github.com/org/repo"
website_url: ""                     # web oficial, si la hay
docs_url: ""                        # documentación, si la hay

# Estos campos los actualiza el GitHub Action semanalmente.
# Ponlos a mano con datos reales verificados en GitHub ahora mismo.
stars: 0
forks: 0
last_commit: "YYYY-MM-DD"
version: "x.x.x"
license: "MIT"                      # licencia exacta del repo
language: "TypeScript"

pricing: "gratis"                   # gratis | freemium | pago
replaces: ["Herramienta A", "Herramienta B"]   # qué sustituye (nombres exactos)
replaces_cost: "desde X€/mes"
install_complexity: "fácil"         # fácil | medio | avanzado

cover_image_url: "https://opengraph.githubassets.com/1/org/repo"
cover_image_alt: "Descripción de la imagen"

seo_title: "Nombre: frase clave en español"    # máximo 60 caracteres
seo_description: "Descripción para Google."    # máximo 160 caracteres
llm_context: "Una o dos frases que describan la herramienta de forma que un LLM la cite bien. Máximo 400 caracteres."

featured: false
verified: false
submitted_by: "community"
date_added: "YYYY-MM-DD"
last_verified: "YYYY-MM-DD"
status: "activo"
---
```

### 3. Escribe el cuerpo en estas 7 secciones (en este orden)

```markdown
## Qué es

Qué hace exactamente. Honesto, sin hype.
Una frase por idea. Corto.

## Por qué importa

El problema real que resuelve. Con números si puedes.

## Cómo instalarlo

Pasos reales y probados. Comandos que funcionan.
No copies el README en inglés sin más.

## Casos de uso

- Caso concreto 1
- Caso concreto 2
- Caso concreto 3
(entre 3 y 5)

## Qué sustituye

| Herramienta | Precio | Qué te ahorras |
|---|---|---|
| Nombre | X€/mes | descripción |

## Limitaciones honestas

Lo que no hace bien. Esto genera confianza.
Sin esto, la entrada no pasa la revisión.

## Recursos

- Links a docs, ejemplos, comunidad
```

### 4. Verifica localmente antes de la PR

```bash
npm install
npm run build   # el build falla si el frontmatter no pasa el schema Zod
```

Si el build pasa, el frontmatter es válido.

### 5. Abre la PR

- Título: `content: añadir NombreHerramienta`
- Descripción: una o dos frases explicando por qué merece estar en el directorio

---

## Campos obligatorios

Estos campos son obligatorios. El build falla sin ellos:

| Campo | Tipo | Notas |
|---|---|---|
| `name` | string | Nombre oficial |
| `slug` | string | `^[a-z0-9-]+$` — solo minúsculas y guiones |
| `tagline` | string | Máximo 120 caracteres |
| `category` | enum | `mcp` \| `repos` \| `apis` \| `saas-alternativas` \| `apps` |
| `subcategory` | string | Libre |
| `tags` | array | Entre 1 y 8 elementos |
| `license` | string | Nombre exacto de la licencia |
| `pricing` | enum | `gratis` \| `freemium` \| `pago` |
| `install_complexity` | enum | `fácil` \| `medio` \| `avanzado` |
| `seo_title` | string | Máximo 60 caracteres |
| `seo_description` | string | Máximo 160 caracteres |
| `llm_context` | string | Máximo 400 caracteres |
| `date_added` | string | Formato `YYYY-MM-DD` |
| `last_verified` | string | Formato `YYYY-MM-DD` |

---

## Notas de estilo

El directorio tiene una voz propia. Al escribir el cuerpo:

- Frases cortas. Una idea por línea cuando aporta ritmo.
- Sin hype, sin adjetivos vacíos ("increíble", "revolucionario", "poderoso").
- La sección "Limitaciones honestas" es obligatoria y tiene que ser real.
- Sin emojis salvo que aporten algo.
- Ortografía y tildes perfectas en español.
- **Nunca em dashes (—). Usa guion normal (-) si necesitas separar.**

---

## ¿Tienes dudas?

Abre una issue con el tag `question` o escribe en [@fluyeporlaweb](https://x.com/fluyeporlaweb).
