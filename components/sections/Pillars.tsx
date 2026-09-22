"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Reveal from "@/components/Reveal";
import { getPillars } from "@/lib/content/pillars";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export default function Pillars({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const pillars = getPillars(dict);

  return (
    <section id="pillars" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
            {dict.pillarsSection.eyebrow}
          </span>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-4xl font-semibold tracking-tight text-fg lg:text-5xl">
            {dict.pillarsSection.title}
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {pillars.map((pillar, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={pillar.id}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`pillar-panel-${pillar.id}`}
                  className="group flex w-full items-center gap-6 py-8 text-left transition-colors hover:bg-bg-elevated"
                >
                  <span className="font-mono text-sm text-fg-muted">{pillar.code}</span>
                  <span className="flex-1">
                    <span className="block font-display text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                      {pillar.name}
                    </span>
                    <span className="mt-1 block text-sm text-fg-muted">{pillar.short}</span>
                  </span>
                  <ArrowUpRight
                    size={22}
                    className={`shrink-0 text-fg-muted transition-transform duration-300 group-hover:text-accent ${
                      isOpen ? "rotate-45 text-accent" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <motion.div
                  id={`pillar-panel-${pillar.id}`}
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-8 pb-10 pl-0 sm:pl-16 lg:grid-cols-[1fr_1fr]">
                    <div>
                      <p className="max-w-md text-fg-muted">{pillar.description}</p>
                      {pillar.highlight && (
                        <div className="mt-6 rounded-2xl border border-accent/30 bg-accent/5 p-5">
                          <p className="font-display text-sm font-semibold text-accent">
                            {pillar.highlight.title}
                          </p>
                          <p className="mt-2 text-sm text-fg-muted">
                            {pillar.highlight.description}
                          </p>
                        </div>
                      )}
                      <Link
                        href={localizeHref(locale, `/services#${pillar.id}`)}
                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-fg hover:text-accent"
                      >
                        {dict.pillarsSection.exploreCta} {pillar.name}
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </Link>
                    </div>
                    <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                      {pillar.deliverables.slice(0, 8).map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-fg-muted">
                          <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
