import Reveal from "@/components/Reveal";

export default function BrandStatement() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <p className="max-w-3xl text-balance font-display text-3xl font-medium leading-tight tracking-tight text-fg sm:text-4xl lg:text-5xl">
            AI is the engine.
            <span className="text-fg-muted"> Human thinking is the direction.</span>
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-14">
            <div>
              <h3 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
                AI accelerates
              </h3>
              <p className="mt-3 max-w-sm text-fg-muted">
                Research, ideation, generation, automation, analysis and
                optimization — the parts of the process that benefit from
                speed and scale.
              </p>
            </div>
            <div>
              <h3 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-fg-muted">
                Human thinking defines
              </h3>
              <p className="mt-3 max-w-sm text-fg-muted">
                Strategy, taste, storytelling, art direction, quality control
                and decision making — the parts that decide whether the work
                is actually good.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
