import type { Metadata } from "next";
import Script from "next/script";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import FinalCTA from "@/components/sections/FinalCTA";
import { projects } from "@/lib/content/projects";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "AGAT concept explorations and AGAT Lab experiments across websites, AI creative, agents and automation — clearly labeled, no invented clients or metrics.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <Script
        id="schema-breadcrumb-work"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Work", url: `${site.url}/work` },
            ])
          ),
        }}
      />

      <PageHero
        eyebrow="Selected work"
        title="Concepts, not claims."
        description="AGAT is a new studio. Rather than invent clients or metrics, everything here is marked exactly as it is — a concept exploration or an AGAT Lab experiment."
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 2) * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
