"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "@/components/Reveal";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

const pillarAccent: Record<string, string> = {
  build: "var(--color-fg)",
  create: "var(--color-accent)",
  agents: "var(--color-fg-muted)",
  grow: "var(--color-accent)",
};

export default function Showcase({ dict }: { dict: Dictionary }) {
  const items = dict.showcase.items;
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <section className="border-t border-border bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
            {dict.showcase.eyebrow}
          </span>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-4xl font-semibold tracking-tight text-fg lg:text-5xl">
            {dict.showcase.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div
            className="flex flex-wrap gap-2 lg:flex-col lg:gap-1"
            role="tablist"
            aria-label={dict.showcase.ariaLabel}
          >
            {items.map((item, i) => (
              <button
                key={item.key}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`rounded-full px-4 py-2.5 text-left text-sm font-medium transition-colors lg:rounded-none lg:border-b lg:border-border lg:px-0 lg:py-4 ${
                  active === i
                    ? "bg-accent text-accent-foreground lg:bg-transparent lg:text-accent"
                    : "bg-bg text-fg-muted hover:text-fg lg:bg-transparent"
                }`}
              >
                <span className="lg:font-display lg:text-xl lg:font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-bg">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.key}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8"
              >
                <GeneratedGlyph accent={pillarAccent[current.pillar]} label={current.label} />
                <div className="text-center">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
                    AGAT {current.pillar}
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold text-fg">{current.label}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function GeneratedGlyph({ accent, label }: { accent: string; label: string }) {
  const seed = label.length;
  return (
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" aria-hidden="true">
      <circle cx="90" cy="90" r="88" stroke="var(--color-border)" strokeWidth="1" />
      {Array.from({ length: 6 }).map((_, i) => {
        const r = 20 + i * 12 + (seed % 5);
        return (
          <circle
            key={i}
            cx="90"
            cy="90"
            r={r}
            stroke={i === (seed % 6) ? accent : "var(--color-border)"}
            strokeOpacity={i === (seed % 6) ? 0.9 : 0.4}
            strokeWidth={i === (seed % 6) ? 2 : 1}
          />
        );
      })}
      <circle cx="90" cy="90" r="6" fill={accent} />
    </svg>
  );
}
