import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { pillars } from "@/lib/content/pillars";

const grow = pillars.find((p) => p.id === "grow")!;

export default function WebsiteCare() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
              {grow.name}
            </span>
            <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-fg lg:text-5xl">
              Launch is not the end.
            </h2>
            <p className="mt-6 max-w-md text-fg-muted">{grow.statement} We keep systems
              technically healthy, visible in search and AI answers, and
              improving — not frozen the day they ship.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-fg hover:text-accent"
            >
              Talk about ongoing support
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {grow.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl border border-border p-4 text-sm text-fg-muted"
                >
                  <Check size={15} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
