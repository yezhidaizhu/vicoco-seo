import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vicoco.uk',
  base: '/squoosh-batch-image-compressor',
  trailingSlash: 'always',
  build: {
    assets: '_assets',
  },
});
