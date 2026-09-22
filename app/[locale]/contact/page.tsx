import type { Metadata } from "next";
import Script from "next/script";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ProjectBrief from "@/components/sections/ProjectBrief";
import { breadcrumbSchema } from "@/lib/schema";
import { site, socialLinks } from "@/lib/content/site";
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
    title: dict.metadata.contact.title,
    description: dict.metadata.contact.description,
    alternates: localeAlternates(locale, "/contact"),
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Script
        id="schema-breadcrumb-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: dict.breadcrumb.home, url: site.url },
              { name: dict.breadcrumb.contact, url: `${site.url}/contact` },
            ])
          ),
        }}
      />

      <PageHero
        eyebrow={dict.contactPage.pageHero.eyebrow}
        title={dict.contactPage.pageHero.title}
        description={dict.contactPage.pageHero.description}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-fg-muted transition-colors hover:border-fg-muted hover:text-fg"
            >
              {dict.social[link.key]}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ))}
        </div>
      </PageHero>

      <Reveal>
        <ProjectBrief dict={dict} />
      </Reveal>
    </>
  );
}
