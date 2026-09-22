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
    title: dict.metadata.privacy.title,
    description: dict.metadata.privacy.description,
    alternates: localeAlternates(locale, "/legal/privacy"),
    robots: { index: false },
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const p = dict.legal.privacy;

  return (
    <>
      <PageHero eyebrow={dict.legal.eyebrow} title={p.title} />
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="rounded-2xl border border-border bg-bg-elevated p-5 text-sm text-fg-muted">
            {p.draftNotice}
          </p>

          <div className="mt-10 space-y-8 text-fg-muted">
            <p>{p.p1}</p>
            <p>{p.p2}</p>
            <p>{p.p3}</p>
            <p>
              {p.p4Prefix}{" "}
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
