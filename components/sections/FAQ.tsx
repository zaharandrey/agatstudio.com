"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "@/components/Reveal";
import { faqItems } from "@/lib/content/faq";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
            FAQ
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-fg lg:text-5xl">
            Good questions.
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-border border-t border-border">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg font-medium text-fg">{item.question}</span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-fg-muted transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-accent" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`faq-${i}`}
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="min-h-0 max-w-2xl text-fg-muted">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
