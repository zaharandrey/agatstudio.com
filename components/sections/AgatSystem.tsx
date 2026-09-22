import Reveal from "@/components/Reveal";
import { systemLayers } from "@/lib/content/system";

export default function AgatSystem() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal>
            <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
              The AGAT system
            </span>
            <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-fg lg:text-5xl">
              One idea.
              <br />
              Many digital layers.
            </h2>
            <p className="mt-6 max-w-sm text-fg-muted">
              Most businesses end up briefing seven different vendors for
              seven disconnected pieces. AGAT builds them as one system —
              so the brand, the site, the content and the automation all
              speak to each other.
            </p>
          </Reveal>

          <ol className="relative border-l border-border pl-8">
            {systemLayers.map((layer, i) => (
              <Reveal key={layer.label} delay={i * 0.05} y={12} as="li">
                <div className="relative pb-10 last:pb-0">
                  <span
                    className="absolute -left-[41px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-bg bg-accent"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs text-fg-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-xl font-semibold text-fg">{layer.label}</p>
                  <p className="mt-1 text-sm text-fg-muted">{layer.note}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
