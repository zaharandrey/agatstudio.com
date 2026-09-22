import type { Metadata } from "next";
import Script from "next/script";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import { pillars } from "@/lib/content/pillars";
import { servicesSchema, breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Four connected disciplines: AGAT Build (websites & digital products), AGAT Create (AI creative studio), AGAT Agents (AI agents & automation) and AGAT Grow (SEO, GEO & continuous growth).",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Script
        id="schema-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema()) }}
      />
      <Script
        id="schema-breadcrumb-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Services", url: `${site.url}/services` },
            ])
          ),
        }}
      />

      <PageHero
        eyebrow="Services"
        title="Four disciplines. One system."
        description="AGAT doesn't sell a list of deliverables. Every engagement draws from the same four connected disciplines — as much or as little as the project needs."
      />

      {pillars.map((pillar, i) => (
        <section
          key={pillar.id}
          id={pillar.id}
          className={`scroll-mt-20 border-b border-border ${i % 2 === 1 ? "bg-bg-elevated" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
              <Reveal>
                <span className="font-mono text-sm text-accent">{pillar.code}</span>
                <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-fg lg:text-5xl">
                  {pillar.name}
                </h2>
                <p className="mt-2 font-medium text-fg-muted">{pillar.short}</p>
                <p className="mt-6 max-w-md text-fg-muted">{pillar.description}</p>
                {pillar.flow && (
                  <div className="mt-8 flex flex-wrap items-center gap-2">
                    {pillar.flow.map((step, idx) => (
                      <span key={step} className="flex items-center gap-2">
                        <span className="rounded-full border border-border px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-fg-muted">
                          {step}
                        </span>
                        {idx < pillar.flow!.length - 1 && (
                          <span className="text-fg-muted/40" aria-hidden="true">
                            →
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                )}
                {pillar.highlight && (
                  <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-6">
                    <p className="font-display text-base font-semibold text-accent">
                      {pillar.highlight.title}
                    </p>
                    <p className="mt-2 text-sm text-fg-muted">{pillar.highlight.description}</p>
                  </div>
                )}
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {pillar.deliverables.map((item) => (
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
      ))}

      <FAQ />
      <FinalCTA />
    </>
  );
}
