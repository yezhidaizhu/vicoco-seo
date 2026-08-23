# AGENTS.md

<INSTRUCTIONS>
- This project owns Vicoco's SEO content pages and the authoritative domain-root `robots.txt`, `sitemap.xml`, and `llms.txt` for `https://vicoco.uk`.
- Before selecting keywords or writing feature claims, read `docs/README.md`, `docs/seo-keyword-opportunities.md`, and `docs/product-capabilities.md`.
- Keep new raw keyword exports in `docs/keyword-data/` and update its `README.md` inventory without rewriting the source data.
- Before drafting or implementing an SEO page, follow `docs/scont/README.md`; source relevant FAQs from `docs/keyword-data/seo-ques.js` first and include at least six FAQs.
- Before adding or changing Footer links, follow `docs/internal-linking-plan.md`; keep the complete related-tools group at five links or fewer and avoid orphan pages.
- Keep `/app/all-tools/` development-only, `noindex`, and absent from production output, sitemap, `llms.txt`, Footer links, and the internal-link plan.
- Keep `docs/product-capabilities.md` synchronized with the product repository's `docs/implemented-features.md`; never claim an unchecked feature as implemented.
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
