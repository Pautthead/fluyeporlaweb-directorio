# Paquete de arranque — Directorio fluyeporlaweb

Esto es todo lo que Claude Code necesita para arrancar el proyecto.
Lee los archivos en este orden.

## Por dónde empezar

1. **`CLAUDE.md`** — el brief completo. Léelo entero antes de tocar nada.
   Copia este archivo a la raíz del repo nuevo: es tu contexto permanente.

2. **`schema/frontmatter-schema.md`** — el contrato de datos. La definición Zod va tal cual
   en `src/content/config.ts`. No improvises campos.

3. **`docs/plan-de-fases.md`** — el orden de ejecución con tareas y criterios de hecho.
   Estás en el Sprint 1.

4. **`ejemplos/`** — dos herramientas reales y completas (`playwright-mcp.md` y `excalidraw.md`).
   Muestran el formato del frontmatter y las 7 secciones del cuerpo en la voz del proyecto.
   Mételas en `src/content/herramientas/mcp/` y `src/content/herramientas/repos/`.
   OJO: los números de stars/forks son placeholder marcados con comentario. Los rellena el Action.

5. **`scripts/`** — las tres automatizaciones (Sprint 3, no ahora):
   - `update-github-data.yml` + el script `.mjs` comentado dentro
   - `health-check-worker.js`
   - `submit-worker.js`

## Tu tarea ahora (Sprint 1)

Montar el scaffolding de Astro según la arquitectura del `CLAUDE.md`, con las dos entradas
de ejemplo dentro, build verde y deploy de prueba en Cloudflare Pages.

## Cosas que no se negocian

- Astro estático + Cloudflare Pages. No Next.
- Verde de marca `#16a34a`. Nunca azul.
- Verifica datos de GitHub en la fuente. Nunca fuentes secundarias.
- Voz de @fluyeporlaweb en todo el texto. Sin em dashes. Una idea por línea. Tildes perfectas.
- Pasa el contenido por el humanizador (SKILL.md del proyecto) como capa final.
- AdSense-friendly: cero pop-ups, tres slots de anuncio máximo, páginas legales presentes.
