import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vicoco.uk',
  base: '/app',
  trailingSlash: 'always',
  build: {
    assets: '_assets',
  },
});
