import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Script from "next/script";
import Reveal from "@/components/Reveal";
import CoverArt from "@/components/CoverArt";
import FinalCTA from "@/components/sections/FinalCTA";
import { projects } from "@/lib/content/projects";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/content/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

const stages = [
  { key: "challenge", label: "Challenge" },
  { key: "strategy", label: "Strategy" },
  { key: "ai", label: "AI" },
  { key: "build", label: "Build" },
  { key: "automation", label: "Automation" },
  { key: "result", label: "Result" },
] as const;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Script
        id="schema-breadcrumb-project"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Work", url: `${site.url}/work` },
              { name: project.title, url: `${site.url}/work/${project.slug}` },
            ])
          ),
        }}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-10 lg:pt-24">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted hover:text-fg"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            All work
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
            {stages.map((stage) => (
              <Reveal key={stage.key}>
                <dt className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  {stage.label}
                </dt>
                <dd className="mt-3 max-w-2xl text-lg leading-relaxed text-fg">
                  {project[stage.key]}
                </dd>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={0.1}>
            <Link
              href="/contact"
              className="mt-16 inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-fg"
            >
              Start a project like this
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
