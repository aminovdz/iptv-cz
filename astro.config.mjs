import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://iptv-cz.net',
  output: 'server',
  adapter: cloudflare({
    imageService: 'cloudflare'
  }),
  integrations: [
    sitemap()
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
