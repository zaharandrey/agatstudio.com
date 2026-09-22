import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { contactEmail } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AGAT handles the information you share with us.",
  alternates: { canonical: "/legal/privacy" },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="rounded-2xl border border-border bg-bg-elevated p-5 text-sm text-fg-muted">
            Draft — this page is a placeholder pending review by legal counsel before launch. It
            describes current practice, not a finalized legal policy.
          </p>

          <div className="mt-10 space-y-8 text-fg-muted">
            <p>
              This policy covers information submitted through the project brief and contact
              forms on this site: your name, email address and the details you choose to share
              about your project.
            </p>
            <p>
              Submitting the project brief form does not send any data to AGAT automatically — it
              opens your own email client with the brief pre-filled, and nothing is transmitted
              or stored unless you choose to send that email.
            </p>
            <p>
              If you contact us directly (email, Telegram, Instagram, LinkedIn), we use the
              information you provide only to respond to your inquiry and, if a project moves
              forward, to deliver the work. We do not sell or share your information with third
              parties.
            </p>
            <p>
              Questions about this policy can be sent to{" "}
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
