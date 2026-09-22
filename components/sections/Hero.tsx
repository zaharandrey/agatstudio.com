"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export default function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const flow = dict.hero.flow;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % flow.length), 1400);
    return () => clearInterval(id);
  }, [flow.length]);

  return (
    <section className="relative overflow-hidden">
      <BackgroundStrata />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pb-28 lg:pt-28">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-fg-muted"
        >
          {dict.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl text-balance font-display text-[13vw] font-semibold leading-[0.95] tracking-tight text-fg sm:text-7xl lg:text-8xl"
        >
          {dict.hero.titleLine1}
          <br />
          {dict.hero.titleLine2}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-fg-muted lg:text-xl"
        >
          {dict.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href={localizeHref(locale, "/contact")}
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-fg"
          >
            {dict.hero.ctaPrimary}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <Link
            href={localizeHref(locale, "/work")}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-fg-muted"
          >
            {dict.hero.ctaSecondary}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 flex flex-wrap items-center gap-x-2 gap-y-3 lg:mt-28"
          aria-label={dict.hero.flowAriaLabel}
        >
          {flow.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              <span
                className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors duration-500 ${
                  i === active
                    ? "border-accent text-accent"
                    : "border-border text-fg-muted"
                }`}
              >
                {step}
              </span>
              {i < flow.length - 1 && (
                <span className="text-fg-muted/40" aria-hidden="true">
                  →
                </span>
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BackgroundStrata() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,90,41,0.14),_transparent_55%)]" />
      <svg
        className="absolute -right-24 -top-24 h-[560px] w-[560px] opacity-[0.35] lg:h-[720px] lg:w-[720px]"
        viewBox="0 0 400 400"
        fill="none"
      >
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          d="M40 320L120 220H280L360 320H40Z"
          stroke="var(--color-fg)"
          strokeOpacity="0.25"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.2, ease: "easeInOut" }}
          d="M100 220L160 140H240L300 220H100Z"
          stroke="var(--color-fg)"
          strokeOpacity="0.3"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.4, ease: "easeInOut" }}
          d="M160 140L200 80L240 140H160Z"
          stroke="var(--color-accent)"
          strokeOpacity="0.8"
        />
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
    </div>
  );
}
