# AGENTS.md

<INSTRUCTIONS>
- This project owns Vicoco's SEO content pages and the authoritative domain-root `robots.txt`, `sitemap.xml`, and `llms.txt` for `https://vicoco.uk`.
- When adding, renaming, removing, or materially changing an indexable page, review and update its title, meta description, canonical URL, robots meta, Open Graph data, JSON-LD, internal links, sitemap output, `public/robots.txt`, and `public/llms.txt`.
- `public/sitemap.xml` is intentionally static and must always include the main app homepage `https://vicoco.uk/`, even though that page is implemented in the separate `web-squoosh` project. Never remove the homepage while editing only this repository.
- Keep `public/robots.txt` pointed at `https://vicoco.uk/sitemap.xml`.
- `public/llms.txt` must always include `https://vicoco.uk/` as a main resource, plus every indexable SEO page. Never remove the homepage while editing only this repository.
- Keep 404 and other non-indexable pages on `noindex` and out of the sitemap.
- Every SEO content page must remain under the shared `/app/` URL prefix so Cloudflare needs only one content route. Do not add SEO pages at arbitrary domain-root paths.
- Cloudflare must route `/app/*`, `/robots.txt`, `/sitemap.xml`, and `/llms.txt` to this project; application routes remain owned by `web-squoosh`.
- `npm run build` must run `scripts/package-static.mjs` after Astro. It moves pages and their assets into `dist/app/`, while keeping `404.html`, `robots.txt`, `sitemap.xml`, and `llms.txt` at the deployment root. Keep this output contract synchronized with Cloudflare routes.
- Never hand-edit `dist`.
- Do not run a production build unless the user requests it.
</INSTRUCTIONS>
