import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { getPillar } from "@/lib/content/pillars";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export default function WebsiteCare({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const grow = getPillar(dict, "grow");

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
              {grow.name}
            </span>
            <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-fg lg:text-5xl">
              {dict.websiteCare.title}
            </h2>
            <p className="mt-6 max-w-md text-fg-muted">
              {grow.statement} {dict.websiteCare.bodySuffix}
            </p>
            <Link
              href={localizeHref(locale, "/contact")}
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-fg hover:text-accent"
            >
              {dict.websiteCare.cta}
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {grow.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl border border-border p-4 text-sm text-fg-muted"
                >
                  <Check size={15} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
