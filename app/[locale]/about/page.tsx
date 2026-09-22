import type { Metadata } from "next";
import Script from "next/script";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BrandStatement from "@/components/sections/BrandStatement";
import Tools from "@/components/sections/Tools";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
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
    title: dict.metadata.about.title,
    description: dict.metadata.about.description,
    alternates: localeAlternates(locale, "/about"),
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const a = dict.aboutPage;

  return (
    <>
      <Script
        id="schema-breadcrumb-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: dict.breadcrumb.home, url: site.url },
              { name: dict.breadcrumb.about, url: `${site.url}/about` },
            ])
          ),
        }}
      />

      <PageHero eyebrow={a.pageHero.eyebrow} title={a.pageHero.title} description={a.pageHero.description} />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-fg lg:text-4xl">
                {a.block1.title}
              </h2>
              <p className="mt-5 text-fg-muted">{a.block1.p1}</p>
              <p className="mt-4 text-fg-muted">{a.block1.p2}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-fg lg:text-4xl">
                {a.block2.title}
              </h2>
              <p className="mt-5 text-fg-muted">{a.block2.p1}</p>
              <p className="mt-4 text-fg-muted">{a.block2.p2}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <BrandStatement dict={dict} />
      <Tools dict={dict} />
      <Script
        id="schema-faq-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(dict)) }}
      />
      <FAQ dict={dict} />
      <FinalCTA locale={locale} dict={dict} />
    </>
  );
}
