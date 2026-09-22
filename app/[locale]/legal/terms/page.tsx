import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { contactEmail } from "@/lib/content/site";
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
    title: dict.metadata.terms.title,
    description: dict.metadata.terms.description,
    alternates: localeAlternates(locale, "/legal/terms"),
    robots: { index: false },
  };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const t = dict.legal.terms;

  return (
    <>
      <PageHero eyebrow={dict.legal.eyebrow} title={t.title} />
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="rounded-2xl border border-border bg-bg-elevated p-5 text-sm text-fg-muted">
            {t.draftNotice}
          </p>

          <div className="mt-10 space-y-8 text-fg-muted">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
            <p>
              {t.p4Prefix}{" "}
              <a href={`mailto:${contactEmail}`} className="text-fg underline underline-offset-4">
                {contactEmail}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
