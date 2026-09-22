"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export default function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const primaryNav = [
    { href: "/work", label: dict.nav.work },
    { href: "/services", label: dict.nav.services },
    { href: "/process", label: dict.nav.process },
    { href: "/lab", label: dict.nav.lab },
    { href: "/about", label: dict.nav.about },
    { href: "/contact", label: dict.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-border bg-bg/85 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 lg:px-10">
        <Logo locale={locale} />

        <nav className="hidden items-center gap-8 lg:flex" aria-label={dict.nav.primaryAriaLabel}>
          {primaryNav.map((item) => {
            const href = localizeHref(locale, item.href);
            return (
              <Link
                key={item.href}
                href={href}
                className={`text-sm font-medium transition-colors hover:text-fg ${
                  pathname === href ? "text-fg" : "text-fg-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher locale={locale} ariaLabel={dict.languageSwitcher.ariaLabel} />
          <Link
            href={localizeHref(locale, "/contact")}
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-fg"
          >
            {dict.nav.startProject}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher locale={locale} ariaLabel={dict.languageSwitcher.ariaLabel} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-fg"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border bg-bg lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-6" aria-label={dict.nav.mobileAriaLabel}>
              {primaryNav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={localizeHref(locale, item.href)}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border py-4 font-display text-2xl font-medium text-fg"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href={localizeHref(locale, "/contact")}
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
              >
                {dict.nav.startProject}
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
