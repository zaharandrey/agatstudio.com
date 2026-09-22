import type { Metadata } from "next";
import Script from "next/script";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import FinalCTA from "@/components/sections/FinalCTA";
import { getProjects } from "@/lib/content/projects";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/content/site";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { localeAlternates, type Locale } from "@/lib/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  return {
    title: dict.metadata.work.title,
    description: dict.metadata.work.description,
    alternates: localeAlternates(locale, "/work"),
  };
}

export default async function WorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const projects = getProjects(dict);

  return (
    <>
      <Script
        id="schema-breadcrumb-work"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: dict.breadcrumb.home, url: site.url },
              { name: dict.breadcrumb.work, url: `${site.url}/work` },
            ])
          ),
        }}
      />

      <PageHero
        eyebrow={dict.workPage.pageHero.eyebrow}
        title={dict.workPage.pageHero.title}
        description={dict.workPage.pageHero.description}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 2) * 0.08}>
                <ProjectCard project={project} locale={locale} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA locale={locale} dict={dict} />
    </>
  );
}
