import type { Metadata } from "next";
import Script from "next/script";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import { getPillars } from "@/lib/content/pillars";
import { servicesSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
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
    title: dict.metadata.services.title,
    description: dict.metadata.services.description,
    alternates: localeAlternates(locale, "/services"),
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const pillars = getPillars(dict);

  return (
    <>
      <Script
        id="schema-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema(dict, locale)) }}
      />
      <Script
        id="schema-breadcrumb-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: dict.breadcrumb.home, url: site.url },
              { name: dict.breadcrumb.services, url: `${site.url}/services` },
            ])
          ),
        }}
      />

      <PageHero
        eyebrow={dict.servicesPage.pageHero.eyebrow}
        title={dict.servicesPage.pageHero.title}
        description={dict.servicesPage.pageHero.description}
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

      <Script
        id="schema-faq-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(dict)) }}
      />
      <FAQ dict={dict} />
      <FinalCTA locale={locale} dict={dict} />
    </>
  );
}
