import type { Metadata } from "next";
import Script from "next/script";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CoverArt from "@/components/CoverArt";
import FinalCTA from "@/components/sections/FinalCTA";
import { getLabExperiments } from "@/lib/content/lab";
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
    title: dict.metadata.lab.title,
    description: dict.metadata.lab.description,
    alternates: localeAlternates(locale, "/lab"),
  };
}

export default async function LabPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const experiments = getLabExperiments(dict);

  return (
    <>
      <Script
        id="schema-breadcrumb-lab"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: dict.breadcrumb.home, url: site.url },
              { name: dict.breadcrumb.lab, url: `${site.url}/lab` },
            ])
          ),
        }}
      />

      <PageHero
        eyebrow={dict.labPage.pageHero.eyebrow}
        title={dict.labPage.pageHero.title}
        description={dict.labPage.pageHero.description}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experiments.map((exp, i) => (
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

      <FinalCTA locale={locale} dict={dict} />
    </>
  );
}
