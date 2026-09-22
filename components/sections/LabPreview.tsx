import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import CoverArt from "@/components/CoverArt";
import { labExperiments } from "@/lib/content/lab";

export default function LabPreview() {
  return (
    <section className="border-t border-border bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
              AGAT Lab
            </span>
            <h2 className="mt-4 max-w-xl text-balance font-display text-4xl font-semibold tracking-tight text-fg lg:text-5xl">
              Where we test what&apos;s next.
            </h2>
            <p className="mt-4 max-w-lg text-fg-muted">
              Experimental AI work — characters, video, interfaces, automation —
              built to explore capability ahead of client briefs.
            </p>
          </Reveal>
          <Link
            href="/lab"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-fg hover:text-accent"
          >
            Enter the lab
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {labExperiments.map((exp, i) => (
            <Reveal key={exp.slug} delay={(i % 4) * 0.06}>
              <div className="group overflow-hidden rounded-2xl border border-border">
                <CoverArt {...exp.cover} className="aspect-square w-full" />
                <div className="p-4">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-fg-muted">
                    {exp.category}
                  </p>
                  <p className="mt-1 font-display text-base font-semibold text-fg">{exp.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
