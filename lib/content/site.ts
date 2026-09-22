// Central site configuration. Real contact details are not yet finalized —
// every value below marked PLACEHOLDER must be replaced before launch.

export const site = {
  name: "AGAT",
  legalName: "AGAT",
  domain: "agat.top",
  url: "https://agat.top",
  locale: "en",
  tagline: "From idea to digital system.",
  description:
    "We combine AI, design and technology to turn ideas into working digital systems.",
  ogDescription:
    "AGAT is an AI / digital agency. We build websites, AI creative, AI agents and automation — as one connected digital system.",
  keywords: [
    "AI agency",
    "AI digital agency",
    "AI website design",
    "AI creative studio",
    "AI agents",
    "AI automation",
    "AI virtual photoshoot",
    "digital product studio",
  ],
} as const;

// PLACEHOLDER — replace with a real inbox before launch.
export const contactEmail = "hello@agat.top";

export const socialLinks = [
  { label: "Email", href: `mailto:${contactEmail}`, placeholder: true },
  // PLACEHOLDER — replace with the real Telegram handle.
  { label: "Telegram", href: "https://t.me/agat_top", placeholder: true },
  // PLACEHOLDER — replace with the real Instagram handle.
  { label: "Instagram", href: "https://instagram.com/agat.top", placeholder: true },
  // PLACEHOLDER — replace with the real LinkedIn page.
  { label: "LinkedIn", href: "https://linkedin.com/company/agat-top", placeholder: true },
] as const;
