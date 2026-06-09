---
title: "Qué es MCP y para qué sirve"
description: "Model Context Protocol explicado en español. Qué es, cómo funciona y por qué es la pieza que le faltaba a los agentes de IA."
pubDate: "2026-06-09"
tags: ["mcp", "ia", "agentes", "automatización"]
relatedTools: ["playwright-mcp"]
draft: true
---

## Qué es MCP

Model Context Protocol (MCP) es un estándar abierto que define cómo los agentes de IA se conectan con herramientas externas.

Antes de MCP, cada cliente de IA (Claude Desktop, Cursor, etc.) tenía su propia forma de integrarse con herramientas.
Caos total. Cada integración era un trabajo a medida.

Con MCP, cualquier herramienta que implemente el protocolo funciona con cualquier cliente que lo soporte.
Como USB, pero para agentes de IA.

## Cómo funciona

Un servidor MCP es un proceso que expone herramientas al agente.
El agente pregunta qué herramientas hay disponibles, el servidor responde, y el agente las usa cuando las necesita.

La comunicación puede ser local (el servidor corre en tu máquina) o remota (corre en un servidor).

## Por qué importa

Los agentes de IA son potentes pero ciegos.
Sin MCPs, solo pueden leer lo que tú les mandes en el contexto.
Con MCPs, pueden leer archivos, ejecutar código, buscar en internet, controlar un navegador...

La diferencia es la misma que entre un consultor al que le mandas un email y uno que tiene acceso a tus sistemas.

## Dónde empezar

El directorio tiene una sección entera de MCPs con guías de instalación en español.
Empieza por el de Playwright si necesitas automatizar el navegador, o por el de filesystem si quieres que tu agente lea tus archivos locales.
