import type { Metadata } from "next";
import Script from "next/script";
import PageHero from "@/components/PageHero";
import Process from "@/components/sections/Process";
import BrandStatement from "@/components/sections/BrandStatement";
import FinalCTA from "@/components/sections/FinalCTA";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How AGAT works: Discover, Strategize, Create, Build, Connect, Grow — six steps from idea to a running digital system.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <Script
        id="schema-breadcrumb-process"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Process", url: `${site.url}/process` },
            ])
          ),
        }}
      />

      <PageHero
        eyebrow="How we build"
        title="You bring the idea. We build the system."
        description="No black box. Six steps get every project from a first conversation to a running digital system — and stay the same whether we're shipping a landing page or a full automation stack."
      />

      <Process />
      <BrandStatement />
      <FinalCTA />
    </>
  );
}
