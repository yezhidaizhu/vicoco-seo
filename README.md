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

## SEO ownership

This project is the source of truth for Vicoco's domain-level SEO files:

- `https://vicoco.uk/robots.txt`
- `https://vicoco.uk/sitemap.xml`
- `https://vicoco.uk/llms.txt`

The sitemap and `llms.txt` intentionally include `https://vicoco.uk/`. The main
homepage is implemented in `web-squoosh`, but it must not be removed from these
files when SEO pages are added or changed here.

## Cloudflare routing

Route these public paths to the deployed `vicoco-seo` project:

- `/squoosh-batch-image-compressor*`
- `/robots.txt`
- `/sitemap.xml`
- `/llms.txt`

Route `/`, `/editor*`, `/handoff*`, and application assets to `web-squoosh`.
The public SEO files must keep their root URLs even though the Astro content page
uses the `/squoosh-batch-image-compressor/` base path.
