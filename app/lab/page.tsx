import type { Metadata } from "next";
import Script from "next/script";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CoverArt from "@/components/CoverArt";
import FinalCTA from "@/components/sections/FinalCTA";
import { labExperiments } from "@/lib/content/lab";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "AGAT Lab — experimental AI work in characters, video, interfaces and automation, built to explore capability ahead of client briefs.",
  alternates: { canonical: "/lab" },
};

export default function LabPage() {
  return (
    <>
      <Script
        id="schema-breadcrumb-lab"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Lab", url: `${site.url}/lab` },
            ])
          ),
        }}
      />

      <PageHero
        eyebrow="AGAT Lab"
        title="Where we test what's next."
        description="Experimental AI work — characters, video, interfaces, automation — built ahead of client briefs, so we already know what's possible when a real one arrives."
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {labExperiments.map((exp, i) => (
              <Reveal key={exp.slug} delay={(i % 3) * 0.08}>
                <div className="group overflow-hidden rounded-3xl border border-border transition-colors hover:border-fg-muted">
                  <CoverArt {...exp.cover} className="aspect-square w-full" />
                  <div className="p-6">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-fg-muted">
                      {exp.category}
                    </p>
                    <p className="mt-2 font-display text-xl font-semibold text-fg">{exp.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-fg-muted">{exp.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
