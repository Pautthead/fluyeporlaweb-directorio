import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import pagefind from 'astro-pagefind';

export default defineConfig({
  site: 'https://fluyeporlaweb.com',
  output: 'static',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap(),
    mdx(),
    pagefind(),
  ],
});
