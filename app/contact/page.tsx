import type { Metadata } from "next";
import Script from "next/script";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ProjectBrief from "@/components/sections/ProjectBrief";
import { breadcrumbSchema } from "@/lib/schema";
import { site, socialLinks } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with AGAT. Fill out a short project brief, or reach us directly by email, Telegram, Instagram or LinkedIn.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Script
        id="schema-breadcrumb-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Contact", url: `${site.url}/contact` },
            ])
          ),
        }}
      />

      <PageHero
        eyebrow="Contact"
        title="Have an idea? Let's build the system."
        description="Fill out the project brief below, or reach us directly — whichever's easier."
      >
        <div className="mt-8 flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-fg-muted transition-colors hover:border-fg-muted hover:text-fg"
            >
              {link.label}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ))}
        </div>
      </PageHero>

      <Reveal>
        <ProjectBrief />
      </Reveal>
    </>
  );
}
