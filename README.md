# Vicoco SEO

Static landing page for Vicoco's Squoosh batch image compressor.

## Development

Requires Node.js 22.19 or newer.

```sh
npm install
npm run dev
npm run build
```

The production page is built for:

`https://vicoco.uk/squoosh-batch-image-compressor/`

The page stores selected images in the same-origin `vicoco-handoff` IndexedDB
database, then sends the transfer ID to the Vicoco app. Image data never leaves
the browser.
