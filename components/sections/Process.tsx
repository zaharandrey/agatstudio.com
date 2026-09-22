import Reveal from "@/components/Reveal";
import { processSteps } from "@/lib/content/process";

export default function Process({ compact = false }: { compact?: boolean }) {
  return (
    <section id="process" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
            How we build
          </span>
          <h2 className="mt-4 max-w-xl text-balance font-display text-4xl font-semibold tracking-tight text-fg lg:text-5xl">
            Six steps. No guesswork.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal key={step.code} delay={(i % 3) * 0.08}>
              <span className="font-mono text-sm text-accent">{step.code}</span>
              <h3 className="mt-3 font-display text-2xl font-semibold text-fg">{step.title}</h3>
              <p className="mt-2 text-sm font-medium text-fg">{step.description}</p>
              {!compact && (
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{step.detail}</p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
