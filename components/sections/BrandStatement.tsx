import Reveal from "@/components/Reveal";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export default function BrandStatement({ dict }: { dict: Dictionary }) {
  const d = dict.brandStatement;
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <p className="max-w-3xl text-balance font-display text-3xl font-medium leading-tight tracking-tight text-fg sm:text-4xl lg:text-5xl">
            {d.line1}
            <span className="text-fg-muted"> {d.line2}</span>
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-14">
            <div>
              <h3 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
                {d.acceleratesTitle}
              </h3>
              <p className="mt-3 max-w-sm text-fg-muted">{d.acceleratesText}</p>
            </div>
            <div>
              <h3 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-fg-muted">
                {d.definesTitle}
              </h3>
              <p className="mt-3 max-w-sm text-fg-muted">{d.definesText}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
