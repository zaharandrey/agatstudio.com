export const locales = ["uk", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "uk";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * uk is served with no URL prefix (agat.top/...), en is served under /en
 * (agat.top/en/...). Use this everywhere an internal <Link> is built so the
 * prefix stays consistent with the routing in middleware.ts.
 */
export function localizeHref(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return normalized;
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

export const localeNames: Record<Locale, string> = {
  uk: "UA",
  en: "EN",
};

export const htmlLang: Record<Locale, string> = {
  uk: "uk",
  en: "en",
};

/** Per-locale canonical + hreflang alternates for a given path, ready to
 * spread into a page's `generateMetadata` return value. */
export function localeAlternates(locale: Locale, path: string) {
  const normalized = path === "/" ? "/" : path;
  return {
    canonical: localizeHref(locale, normalized),
    languages: {
      uk: normalized,
      en: localizeHref("en", normalized),
      "x-default": normalized,
    },
  };
}
