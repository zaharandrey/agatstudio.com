export const primaryNav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Lab", href: "/lab" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  services: [
    { label: "AGAT Build — websites & digital products", href: "/services#build" },
    { label: "AGAT Create — AI creative studio", href: "/services#create" },
    { label: "AGAT Agents — AI agents & automation", href: "/services#agents" },
    { label: "AGAT Grow — SEO, GEO & continuous growth", href: "/services#grow" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Process", href: "/process" },
    { label: "Lab", href: "/lab" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms", href: "/legal/terms" },
  ],
} as const;
