import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vicoco.uk',
  base: '/compress',
  trailingSlash: 'always',
  build: {
    assets: '_assets',
  },
});
