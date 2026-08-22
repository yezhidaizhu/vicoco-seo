import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vicoco.uk',
  base: '/squoosh-batch-image-compressor',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: {
    assets: '_assets',
  },
});
