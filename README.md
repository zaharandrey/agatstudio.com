# AGAT Studio — agatstudio.com

AI / Digital Agency site. From idea to digital system.

Next.js (App Router) + TypeScript + Tailwind CSS v4 + Motion. All content lives in
[`lib/content/`](lib/content) as typed data, not hardcoded in components — edit those files to
change copy, services, projects, tools or navigation. Brand assets and usage notes are in
[`BRAND.md`](BRAND.md) and [`public/brand/`](public/brand).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local dev server
- `npm run build` — static export to `out/` (Ukrainian pages at the root, English under `/en`)
- `npm run preview` — serve `out/` locally to check the built site
- `npm run lint` — ESLint

## Before launch

Search for `PLACEHOLDER` in [`lib/content/site.ts`](lib/content/site.ts) and replace the email,
Telegram, Instagram and LinkedIn links with real ones. The legal pages under `app/legal/` are
drafts pending review by counsel.

## Hosting (Cloudflare)

The site is a pure static export (`output: "export"` in `next.config.ts`) served by
Cloudflare Workers static assets — see `wrangler.jsonc`. Cloudflare builds every push to
`main` automatically:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

Language: Ukrainian is the default and has no URL prefix, English lives under `/en`.
Visitors switch with the UA/EN toggle in the header (the choice is remembered in a cookie).
