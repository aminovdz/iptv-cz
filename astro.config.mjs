import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://iptv-cz.net',
  output: 'static',
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
