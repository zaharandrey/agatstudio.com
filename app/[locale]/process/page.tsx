import type { Metadata } from "next";
import Script from "next/script";
import PageHero from "@/components/PageHero";
import Process from "@/components/sections/Process";
import BrandStatement from "@/components/sections/BrandStatement";
import FinalCTA from "@/components/sections/FinalCTA";
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
    title: dict.metadata.process.title,
    description: dict.metadata.process.description,
    alternates: localeAlternates(locale, "/process"),
  };
}

export default async function ProcessPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Script
        id="schema-breadcrumb-process"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: dict.breadcrumb.home, url: site.url },
              { name: dict.breadcrumb.process, url: `${site.url}/process` },
            ])
          ),
        }}
      />

      <PageHero
        eyebrow={dict.processPage.pageHero.eyebrow}
        title={dict.processPage.pageHero.title}
        description={dict.processPage.pageHero.description}
      />

      <Process dict={dict} />
      <BrandStatement dict={dict} />
      <FinalCTA locale={locale} dict={dict} />
    </>
  );
}
