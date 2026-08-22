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

`https://vicoco.uk/compress/squoosh-batch-image-compressor/`

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

Cloudflare Workers Static Assets uses `wrangler.jsonc` with `dist` as the
deployment directory. Build with `npm run build`, then deploy with
`npx wrangler deploy` or connect the repository through Cloudflare Builds.

Route these public paths to the deployed `vicoco-seo` project:

- `/compress*`
- `/robots.txt`
- `/sitemap.xml`
- `/llms.txt`

Route `/`, `/editor*`, `/handoff*`, and application assets to `web-squoosh`.
All SEO content pages must stay under `/compress/`. Astro places their JS, CSS
and public assets under the same prefix, so new SEO pages do not require new
Cloudflare routes. The public SEO files keep their domain-root URLs.

`/compress/` redirects to the primary Squoosh batch compressor page until a
dedicated SEO directory page replaces it.
