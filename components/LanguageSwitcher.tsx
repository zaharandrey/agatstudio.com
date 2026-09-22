"use client";

import { useEffect, useRef } from "react";
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
  // usePathname() is unreliable here: uk pages are served by rewriting "/"
  // to "/uk" in proxy.ts, and per Next's own docs ("Avoid hydration mismatch
  // with rewrites", app/api-reference/functions/use-pathname), a page reached
  // through a rewrite can report the rewritten (source) pathname on the
  // client rather than the real browser URL. The href below is corrected
  // imperatively via ref in an effect (rather than through React state) —
  // this element's href attribute was observed staying on its SSR value in
  // a `next start` build even after confirming, via the fiber's own
  // memoizedProps, that React's virtual href had already updated to the
  // correct value — i.e. a live React-vs-DOM commit desync for this
  // specific attribute, not a stale-state bug. Writing the attribute
  // directly sidesteps it. The onClick handler is a second, independent
  // guarantee: it always re-reads window.location.pathname fresh at click
  // time, regardless of what the href attribute currently shows.
  const pathname = usePathname();
  const anchorRefs = useRef<Partial<Record<Locale, HTMLAnchorElement | null>>>({});

  useEffect(() => {
    for (const l of locales) {
      const el = anchorRefs.current[l];
      if (el) el.setAttribute("href", targetPath(locale, l, window.location.pathname));
    }
  }, [locale]);

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
          // A plain <a> (not next/link) so this is always a full navigation:
          // "/" only exists via the proxy rewrite, not as a literal route in
          // the client router's manifest, and a soft client-side transition
          // to it silently no-ops in a production build. A hard navigation
          // always re-runs the proxy.
          <a
            key={l}
            ref={(el) => {
              anchorRefs.current[l] = el;
            }}
            href={href}
            onClick={(e) => {
              e.preventDefault();
              try {
                document.cookie = `NEXT_LOCALE=${l}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
              } catch {
                // ignore — cookie is a persistence nicety, not required for navigation
              }
              window.location.href = targetPath(locale, l, window.location.pathname);
            }}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              active ? "bg-accent text-accent-foreground" : "text-fg-muted hover:text-fg"
            }`}
          >
            {localeNames[l]}
          </a>
        );
      })}
    </div>
  );
}
