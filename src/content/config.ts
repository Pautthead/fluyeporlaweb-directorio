import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const herramientas = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx'], base: './src/content/herramientas' }),
  schema: z.object({
    name: z.string(),
    slug: z.string().regex(/^[a-z0-9-]+$/, 'slug en minúsculas, sin acentos ni espacios'),
    tagline: z.string().max(120),

    category: z.enum(['mcp', 'repos', 'apis', 'saas-alternativas', 'apps']),
    subcategory: z.string(),
    tags: z.array(z.string()).min(1).max(8),

    github_url: z.string().url().optional().or(z.literal('')),
    website_url: z.string().url().optional().or(z.literal('')),
    docs_url: z.string().url().optional().or(z.literal('')),

    stars: z.number().int().nonnegative().optional(),
    forks: z.number().int().nonnegative().optional(),
    last_commit: z.string().optional(),
    version: z.string().optional(),
    license: z.string(),
    language: z.string().optional(),

    pricing: z.enum(['gratis', 'freemium', 'pago']),
    replaces: z.array(z.string()).default([]),
    replaces_cost: z.string().optional(),
    install_complexity: z.enum(['fácil', 'medio', 'avanzado']),

    cover_image_url: z.string().optional(),
    cover_image_alt: z.string().optional(),

    seo_title: z.string().max(60),
    seo_description: z.string().max(160),
    llm_context: z.string().max(400),

    featured: z.boolean().default(false),
    verified: z.boolean().default(false),
    submitted_by: z.enum(['pablo', 'community']).default('community'),
    date_added: z.string(),
    last_verified: z.string(),
    status: z.enum(['activo', 'inactivo', 'verificar']).default('activo'),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx'], base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.string(),
    updatedDate: z.string().optional(),
    tags: z.array(z.string()).default([]),
    relatedTools: z.array(z.string()).default([]),
    cover_image: z.string().optional(),
    cover_image_alt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { herramientas, blog };
