"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames, type Locale } from "@/lib/i18n/config";

function targetPath(currentLocale: Locale, targetLocale: Locale, pathname: string): string {
  const withoutPrefix = currentLocale === "en" ? pathname.replace(/^\/en(?=\/|$)/, "") || "/" : pathname;
  if (targetLocale === "en") {
    return withoutPrefix === "/" ? "/en" : `/en${withoutPrefix}`;
  }
  return withoutPrefix;
}

export default function LanguageSwitcher({
  locale,
  ariaLabel,
  className = "",
}: {
  locale: Locale;
  ariaLabel: string;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={`inline-flex items-center gap-0.5 rounded-full border border-border p-0.5 text-xs font-semibold ${className}`}
    >
      {locales.map((l) => {
        const active = l === locale;
        const href = targetPath(locale, l, pathname);
        return (
          <Link
            key={l}
            href={href}
            onClick={() => {
              try {
                document.cookie = `NEXT_LOCALE=${l}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
              } catch {
                // ignore — cookie is a persistence nicety, not required for navigation
              }
            }}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              active ? "bg-accent text-accent-foreground" : "text-fg-muted hover:text-fg"
            }`}
          >
            {localeNames[l]}
          </Link>
        );
      })}
    </div>
  );
}
