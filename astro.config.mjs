// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
const siteUrl = process.env.PUBLIC_SITE_URL ?? 'https://mcr.noar.biz';
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: siteUrl,
  base: '/',
});
