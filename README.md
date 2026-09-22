# AGAT — agat.top

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
- `npm run build` — production build (fully static — every route prerenders)
- `npm run lint` — ESLint

## Before launch

Search for `PLACEHOLDER` in [`lib/content/site.ts`](lib/content/site.ts) and replace the email,
Telegram, Instagram and LinkedIn links with real ones. The legal pages under `app/legal/` are
drafts pending review by counsel.
