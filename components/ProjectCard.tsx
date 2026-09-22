import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CoverArt from "@/components/CoverArt";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { LocalizedProject } from "@/lib/content/projects";

export default function ProjectCard({ project, locale }: { project: LocalizedProject; locale: Locale }) {
  return (
    <Link
      href={localizeHref(locale, `/work/${project.slug}`)}
      className="group block overflow-hidden rounded-3xl border border-border transition-colors hover:border-fg-muted"
    >
      <CoverArt {...project.cover} className="aspect-[4/3] w-full" />
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-muted">
            {project.tag}
          </span>
          <ArrowUpRight
            size={18}
            className="text-fg-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
            aria-hidden="true"
          />
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-fg">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">{project.summary}</p>
      </div>
    </Link>
  );
}
