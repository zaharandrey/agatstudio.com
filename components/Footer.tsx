import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { site, socialLinks } from "@/lib/content/site";

const companyHrefs = ["/about", "/work", "/process", "/lab", "/contact"] as const;

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const serviceLinks = dict.footer.services.map((item) => ({
    label: item.label,
    href: localizeHref(locale, `/services${item.anchor}`),
  }));
  const companyLinks = dict.footer.company.map((label, i) => ({
    label,
    href: localizeHref(locale, companyHrefs[i]),
  }));
  const legalLinks = [
    { label: dict.footer.legal.privacy, href: localizeHref(locale, "/legal/privacy") },
    { label: dict.footer.legal.terms, href: localizeHref(locale, "/legal/terms") },
  ];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo locale={locale} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg-muted">
              {dict.footer.taglinePrefix} {dict.site.tagline}
            </p>
          </div>

          <FooterColumn title={dict.footer.servicesTitle} items={serviceLinks} />
          <FooterColumn title={dict.footer.companyTitle} items={companyLinks} />

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-fg-muted">
              {dict.footer.socialTitle}
            </h3>
            <ul className="mt-4 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    {dict.social[link.key]}
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-fg-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {dict.footer.rights}
          </p>
          <div className="flex gap-6">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-fg">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-fg-muted">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-sm text-fg-muted transition-colors hover:text-fg">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
