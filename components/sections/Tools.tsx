import Reveal from "@/components/Reveal";
import { toolGroups } from "@/lib/content/tools";

const allTools = toolGroups.flatMap((g) => g.tools);

export default function Tools() {
  return (
    <section className="border-t border-border bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-fg-muted">
              Tools we use
            </h2>
            <p className="text-xs text-fg-muted">Not partners or sponsors — just what we build with.</p>
          </div>
        </Reveal>
      </div>

      <p className="sr-only">{allTools.join(", ")}</p>

      <div className="relative overflow-hidden border-t border-border py-8" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-12 motion-reduce:animate-none">
          {[...allTools, ...allTools].map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="font-display text-2xl font-medium text-fg-muted/70 lg:text-3xl"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
