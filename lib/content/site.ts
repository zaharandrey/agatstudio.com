// Central, locale-independent site configuration. Translatable copy
// (tagline, description, OG text) lives in lib/i18n/dictionaries/*.
// Real contact details are not yet finalized — every value below marked
// PLACEHOLDER must be replaced before launch.

export const site = {
  name: "AGAT Studio",
  legalName: "AGAT Studio",
  domain: "agatstudio.com",
  url: "https://agatstudio.com",
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
export const contactEmail = "hello@agatstudio.com";

export const socialLinks = [
  { key: "email", href: `mailto:${contactEmail}`, placeholder: true },
  // PLACEHOLDER — replace with the real Telegram handle.
  { key: "telegram", href: "https://t.me/agatstudio", placeholder: true },
  // PLACEHOLDER — replace with the real Instagram handle.
  { key: "instagram", href: "https://instagram.com/agatstudio", placeholder: true },
  // PLACEHOLDER — replace with the real LinkedIn page.
  { key: "linkedin", href: "https://linkedin.com/company/agatstudio", placeholder: true },
] as const;
