import { site, contactEmail } from "@/lib/content/site";
import { pillars } from "@/lib/content/pillars";
import { faqItems } from "@/lib/content/faq";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    email: contactEmail,
    description: site.description,
    logo: `${site.url}/brand/agat-mark.svg`,
    slogan: site.tagline,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.description,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en",
  };
}

export function servicesSchema() {
  return pillars.map((pillar) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/services#${pillar.id}`,
    name: pillar.name,
    serviceType: pillar.short,
    description: pillar.description,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: "Worldwide",
  }));
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
