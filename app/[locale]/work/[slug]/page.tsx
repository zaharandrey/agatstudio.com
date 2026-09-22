import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Script from "next/script";
import Reveal from "@/components/Reveal";
import CoverArt from "@/components/CoverArt";
import FinalCTA from "@/components/sections/FinalCTA";
import { projectsMeta, getProjectBySlug } from "@/lib/content/projects";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/content/site";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { localeAlternates, localizeHref, type Locale } from "@/lib/i18n/config";

export function generateStaticParams() {
  return projectsMeta.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const project = getProjectBySlug(dict, slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: localeAlternates(locale, `/work/${project.slug}`),
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const project = getProjectBySlug(dict, slug);
  if (!project) notFound();

  return (
    <>
      <Script
        id="schema-breadcrumb-project"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: dict.breadcrumb.home, url: site.url },
              { name: dict.breadcrumb.work, url: `${site.url}/work` },
              { name: project.title, url: `${site.url}/work/${project.slug}` },
            ])
          ),
        }}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-10 lg:pt-24">
          <Link
            href={localizeHref(locale, "/work")}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted hover:text-fg"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            {dict.workDetail.backLink}
          </Link>

          <Reveal>
            <span className="mt-8 inline-block rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-muted">
              {project.tag}
            </span>
            <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-fg-muted">{project.summary}</p>
          </Reveal>
        </div>

        <CoverArt {...project.cover} className="mt-12 aspect-[21/9] w-full" />
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-28">
          <dl className="space-y-14">
            {dict.workDetail.stages.map((stage) => (
              <Reveal key={stage.key}>
                <dt className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  {stage.label}
                </dt>
                <dd className="mt-3 max-w-2xl text-lg leading-relaxed text-fg">
                  {project[stage.key as keyof typeof project] as string}
                </dd>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={0.1}>
            <Link
              href={localizeHref(locale, "/contact")}
              className="mt-16 inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-fg"
            >
              {dict.workDetail.ctaStartSimilar}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <FinalCTA locale={locale} dict={dict} />
    </>
  );
}
