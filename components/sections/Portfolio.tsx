import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/content/projects";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export default function Portfolio({
  locale,
  dict,
  limit,
}: {
  locale: Locale;
  dict: Dictionary;
  limit?: number;
}) {
  const all = getProjects(dict);
  const items = limit ? all.slice(0, limit) : all;

  return (
    <section id="work" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
              {dict.portfolioSection.eyebrow}
            </span>
            <h2 className="mt-4 max-w-xl text-balance font-display text-4xl font-semibold tracking-tight text-fg lg:text-5xl">
              {dict.portfolioSection.title}
            </h2>
            <p className="mt-4 max-w-lg text-fg-muted">{dict.portfolioSection.description}</p>
          </Reveal>
          {limit && (
            <Link
              href={localizeHref(locale, "/work")}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-fg hover:text-accent"
            >
              {dict.portfolioSection.viewAllCta}
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          )}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {items.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.08}>
              <ProjectCard project={project} locale={locale} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
