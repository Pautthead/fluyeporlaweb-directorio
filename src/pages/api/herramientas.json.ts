import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const tools = await getCollection('herramientas');
  const data = tools.map(tool => ({
    slug: tool.data.slug,
    name: tool.data.name,
    category: tool.data.category,
    subcategory: tool.data.subcategory,
    status: tool.data.status,
    website_url: tool.data.website_url ?? '',
    github_url: tool.data.github_url ?? '',
    last_verified: tool.data.last_verified,
    tags: tool.data.tags,
  }));

  return new Response(JSON.stringify(data, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
};
