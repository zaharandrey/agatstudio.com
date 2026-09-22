import { site, contactEmail } from "@/lib/content/site";
import { getPillars } from "@/lib/content/pillars";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { defaultLocale, localizeHref, type Locale } from "@/lib/i18n/config";

function urlFor(locale: Locale, path: string) {
  return `${site.url}${localizeHref(locale, path)}`;
}

export function organizationSchema(dict: Dictionary, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    email: contactEmail,
    description: dict.site.description,
    logo: `${site.url}/brand/agat-mark.svg`,
    slogan: dict.site.tagline,
    inLanguage: locale,
  };
}

export function websiteSchema(dict: Dictionary, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: locale === defaultLocale ? site.url : urlFor(locale, "/"),
    name: site.name,
    description: dict.site.description,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: locale,
  };
}

export function servicesSchema(dict: Dictionary, locale: Locale) {
  return getPillars(dict).map((pillar) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${urlFor(locale, "/services")}#${pillar.id}`,
    name: pillar.name,
    serviceType: pillar.short,
    description: pillar.description,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: "Worldwide",
    inLanguage: locale,
  }));
}

export function faqSchema(dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faqSection.items.map((item) => ({
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
