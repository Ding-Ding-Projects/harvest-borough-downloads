import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import { fileURLToPath } from 'node:url';
import site from './site.config.json' with { type: 'json' };

const projectRoot = fileURLToPath(new URL('.', import.meta.url));
const base = new URL(site.canonicalUrl).pathname;

export default defineConfig({
  root: `${projectRoot}pages`,
  base,
  publicDir: `${projectRoot}public`,
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [react(), {
    name: 'canonical-pages-metadata',
    transformIndexHtml(html) {
      return html.replaceAll('__SITE_URL__', site.canonicalUrl).replaceAll('__BASE_PATH__', base);
    },
  }],
  build: {
    outDir: `${projectRoot}dist/pages`,
    emptyOutDir: true,
    sourcemap: false,
  },
});
