import type { Metadata } from "next";
import Script from "next/script";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BrandStatement from "@/components/sections/BrandStatement";
import Tools from "@/components/sections/Tools";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "AGAT is an AI / digital agency built around one idea: idea, strategy, AI, design, product, automation and growth as one connected digital system.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Script
        id="schema-breadcrumb-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "About", url: `${site.url}/about` },
            ])
          ),
        }}
      />

      <PageHero
        eyebrow="About AGAT"
        title="Why the name AGAT?"
        description="Agate is a banded stone — layers, formed one on top of another, rising to a single point. That's the whole idea behind the studio: every project is a stack of layers, built in order, ending in one working system."
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-fg lg:text-4xl">
                Not a website shop. Not an AI gimmick.
              </h2>
              <p className="mt-5 text-fg-muted">
                Most businesses end up briefing a different vendor for the
                website, the content, the automation and the ongoing growth
                work — four relationships, four handoffs, four places for
                context to get lost.
              </p>
              <p className="mt-4 text-fg-muted">
                AGAT builds all four as one system from the start: AGAT
                Build, AGAT Create, AGAT Agents and AGAT Grow. AI is what
                lets a small studio move at that scope without the
                traditional headcount — but it&apos;s still a person making every
                call on strategy, taste and what actually ships.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-fg lg:text-4xl">
                You bring the idea. We build the system.
              </h2>
              <p className="mt-5 text-fg-muted">
                You don&apos;t need to understand AI, prompt engineering or
                automation platforms to work with us. You bring the business
                context and the goal. We handle the strategy, the AI
                production, the design, the build and what keeps it running
                afterward.
              </p>
              <p className="mt-4 text-fg-muted">
                AGAT is a new studio, building in the open — the work section
                is honest about what&apos;s a concept exploration versus a
                live client project, and it will grow as real projects ship.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <BrandStatement />
      <Tools />
      <FAQ />
      <FinalCTA />
    </>
  );
}
