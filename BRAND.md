# AGAT — Brand System

## Concept

**AGAT** — from idea to digital system. The name (Ukrainian for "agate," the banded stone) gives the brand
one honest visual idea: **layered strata rising to a point.** Every AGAT project moves through the same
stack — idea, strategy, AI, design, product, automation, growth — and the mark is a literal drawing of that
stack: three bands, each narrower than the last, ascending to a single accent tip. No brain, no robot, no
circuit board.

## Logo

- `public/brand/agat-mark.svg` — the mark alone (two off-white bands + one copper apex), transparent background.
- `public/brand/agat-mark-mono.svg` — single-color version using `currentColor`, for contexts needing one flat tone.
- `public/brand/agat-logo-light.svg` — full wordmark lockup in **light ink**, for dark backgrounds (default/primary lockup, used in the site header).
- `public/brand/agat-logo-dark.svg` — full wordmark lockup in **dark ink**, for light backgrounds (documents, light UI, print).
- `public/brand/favicon.svg` — mark on a rounded near-black tile, tuned for legibility at 16×16.
- `app/icon.svg` — same tile, wired into Next.js's automatic favicon/App-icon generation.

Clear space: keep at least the height of the copper apex band clear on all sides. Never recolor the copper
apex — it is the one fixed accent element that must always read as the "result" tip of the stack. Never
place the light lockup on a background lighter than `--color-bg-elevated`, or the dark lockup on anything
darker than `--color-fg-muted`.

## Typography

- **Space Grotesk** — display/headlines. Geometric, slightly technical, confident at very large sizes.
- **Inter** — body copy, UI labels, forms. Neutral, highly legible at small sizes, huge language coverage
  (needed once `/uk` and `/pl` locales are added).

## Color tokens

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#0B0B0A` | Primary background (near-black) |
| `--color-bg-elevated` | `#141310` | Cards, raised surfaces |
| `--color-fg` | `#F5F3EF` | Primary text (warm off-white) |
| `--color-fg-muted` | `#9A968D` | Secondary text, captions |
| `--color-border` | `#26241F` | Hairlines, dividers |
| `--color-accent` | `#FF5A29` | The one accent — signal copper. CTAs, active states, the mark's apex |
| `--color-accent-foreground` | `#0B0B0A` | Text/icons placed on top of the accent |
| `--color-card` | `#121110` | Card fill |

Deliberately one accent, no blue/purple AI gradient. Gradients, when used, are tonal (copper → transparent,
or off-white → transparent) — never rainbow, never neon.

## Usage notes

- The site defaults to the dark theme; it is the primary brand expression (premium, editorial, futuristic).
- Motion respects `prefers-reduced-motion`; the brand should never depend on animation to make sense.
- Never claim partnerships with AI tool vendors (Claude, GPT, Midjourney, etc.) — they are listed under
  "Tools we use," not "Partners."
