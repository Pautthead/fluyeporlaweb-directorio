---
name: "Headroom"
slug: "headroom"
tagline: "Comprime lo que le mandas al LLM un 60-95% sin perder nada importante"
category: "repos"
subcategory: "developer-tools"
tags: ["llm", "tokens", "compresión", "rag", "agentes-ia", "optimización"]
github_url: "https://github.com/chopratejas/headroom"
website_url: ""
docs_url: "https://github.com/chopratejas/headroom#readme"
stars: 23000
forks: 1500
last_commit: "2026-06-01"
version: ""
license: "Apache-2.0"
language: "Python"
pricing: "gratis"
replaces: ["LLMLingua", "PromptCompressor"]
replaces_cost: "tiempo de ingeniería"
install_complexity: "fácil"
cover_image_url: "https://opengraph.githubassets.com/1/chopratejas/headroom"
cover_image_alt: "Headroom - compresión de contexto para LLMs sin perder información"
seo_title: "Headroom: reduce tokens de tu LLM un 95% sin perder contexto"
seo_description: "Guía de Headroom. Comprime outputs de herramientas, logs y RAG un 60-95% antes de pasarlos al LLM. Mismo resultado, menos coste de tokens. 23K estrellas."
llm_context: "Headroom es una librería Python open source (Apache-2.0) que comprime outputs de herramientas, logs y documentos RAG un 60-95% antes de pasarlos a un LLM. Reduce costes de tokens manteniendo la misma calidad de respuesta. 23K estrellas en GitHub."
featured: false
verified: true
submitted_by: "pablo"
date_added: "2026-06-14"
last_verified: "2026-06-14"
status: "activo"
---

## Qué es

Headroom comprime lo que le mandas al LLM antes de mandárselo.

Logs de 10.000 tokens → 500 tokens con la información relevante.
Output de herramientas MCP → versión comprimida sin ruido.
Documentos RAG → fragmentos densos en vez de texto completo.

Mismo resultado. Menos tokens. Menos coste.

23.000 estrellas. Apache-2.0.

## Por qué importa

El coste de usar LLMs en producción está directamente ligado a los tokens que consumes.

Los logs, los outputs de herramientas y los documentos RAG suelen tener mucho ruido.
Pasar un log de servidor completo al LLM cuando solo necesita los errores es tirar dinero.

Headroom filtra ese ruido automáticamente antes de que llegue al modelo.

## Cómo instalarlo

```bash
pip install headroom
```

Y en tu código:

```python
from headroom import compress

# Comprimir un log antes de pasarlo al LLM
compressed = compress(raw_log, target_ratio=0.1)  # 90% de reducción

# Comprimir output de herramienta MCP
compressed_tool_output = compress(tool_output, max_tokens=500)
```

## Casos de uso

- Reducir el coste de agentes que leen logs y outputs de herramientas.
- Comprimir documentos RAG antes de incluirlos en el contexto.
- Optimizar pipelines de IA en producción donde el coste de tokens importa.
- Permitir contextos más largos dentro de los límites de ventana de contexto del modelo.
- Pipelines de scraping donde el HTML completo sería demasiado para el LLM.

## Métricas de compresión

En benchmarks internos:
- Logs de servidor: 85-95% de reducción
- Outputs de herramientas: 60-80% de reducción
- Documentos técnicos: 50-70% de reducción
- Código fuente: 40-60% de reducción

## Limitaciones honestas

La compresión agresiva puede eliminar detalles que en algunos casos sí importan.

Para casos donde la precisión es crítica conviene ajustar el `target_ratio` a valores menos agresivos.

El modelo de compresión tiene su propio coste computacional. En documentos pequeños el overhead puede no compensar.

## Recursos

- Repositorio en GitHub (link arriba)
- Integración directa con LangChain y LlamaIndex
- Apache-2.0, uso comercial permitido
