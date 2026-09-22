import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { contactEmail } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "The terms that apply to using this website and working with AGAT.",
  alternates: { canonical: "/legal/terms" },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms" />
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="rounded-2xl border border-border bg-bg-elevated p-5 text-sm text-fg-muted">
            Draft — this page is a placeholder pending review by legal counsel before launch.
            Project-specific terms (scope, payment, IP) are agreed in writing before any paid
            work begins.
          </p>

          <div className="mt-10 space-y-8 text-fg-muted">
            <p>
              This website and the concept/lab work shown on it are provided for informational
              purposes. Concept and AGAT Lab projects are exploratory work, not delivered client
              projects, and are labeled as such throughout the site.
            </p>
            <p>
              Pricing shown in the project brief form (budget ranges) is indicative, used to
              scope a conversation — it is not a quote or a binding offer.
            </p>
            <p>
              Any paid engagement with AGAT is governed by a separate written agreement covering
              scope, timeline, payment and intellectual property, agreed before work begins.
            </p>
            <p>
              Questions about these terms can be sent to{" "}
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
