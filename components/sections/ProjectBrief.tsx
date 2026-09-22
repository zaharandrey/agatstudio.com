"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Check, RotateCcw } from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  briefBuildingOptions,
  briefBudgetOptions,
  briefTimelineOptions,
} from "@/lib/content/brief";
import { contactEmail } from "@/lib/content/site";

type BriefState = {
  building: string[];
  idea: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
};

const initialState: BriefState = {
  building: [],
  idea: "",
  budget: "",
  timeline: "",
  name: "",
  email: "",
};

export default function ProjectBrief() {
  const [state, setState] = useState<BriefState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const isValid =
    state.building.length > 0 &&
    state.idea.trim().length > 0 &&
    state.budget !== "" &&
    state.timeline !== "" &&
    state.email.trim().length > 3;

  function toggleBuilding(option: string) {
    setState((s) => ({
      ...s,
      building: s.building.includes(option)
        ? s.building.filter((o) => o !== option)
        : [...s.building, option],
    }));
  }

  const mailtoHref = useMemo(() => {
    const subject = `Project brief — ${state.name || "New inquiry"}`;
    const body = [
      `Building: ${state.building.join(", ")}`,
      "",
      `Idea: ${state.idea}`,
      "",
      `Budget: ${state.budget}`,
      `Timeline: ${state.timeline}`,
      "",
      `Name: ${state.name}`,
      `Email: ${state.email}`,
    ].join("\n");
    return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [state]);

  if (submitted) {
    return (
      <section id="brief" className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="rounded-3xl border border-accent/30 bg-accent/5 p-8 lg:p-10">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                <Check size={14} /> Brief ready
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-fg lg:text-3xl">
                Here&apos;s your summary.
              </h3>

              <dl className="mt-6 space-y-4 text-sm">
                <Row label="Building" value={state.building.join(", ")} />
                <Row label="Idea" value={state.idea} />
                <Row label="Budget" value={state.budget} />
                <Row label="Timeline" value={state.timeline} />
                <Row label="Contact" value={`${state.name} — ${state.email}`} />
              </dl>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={mailtoHref}
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-fg"
                >
                  Send this brief by email
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setState(initialState);
                    setSubmitted(false);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-6 py-3 text-sm font-semibold text-fg hover:border-fg-muted"
                >
                  <RotateCcw size={15} aria-hidden="true" />
                  Start over
                </button>
              </div>
              <p className="mt-6 text-xs text-fg-muted">
                Sending opens your email client with this brief pre-filled — nothing is sent
                automatically or stored on our end.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="brief" className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Project brief
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-fg lg:text-5xl">
            What are you building?
          </h2>
        </Reveal>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (isValid) setSubmitted(true);
          }}
          className="mt-12 space-y-12"
        >
          <fieldset>
            <legend className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
              01 — Select all that apply
            </legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {briefBuildingOptions.map((option) => {
                const active = state.building.includes(option);
                return (
                  <button
                    type="button"
                    key={option}
                    onClick={() => toggleBuilding(option)}
                    aria-pressed={active}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-border text-fg-muted hover:border-fg-muted hover:text-fg"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div>
            <label htmlFor="idea" className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
              02 — Tell us about your idea
            </label>
            <textarea
              id="idea"
              required
              rows={4}
              value={state.idea}
              onChange={(e) => setState((s) => ({ ...s, idea: e.target.value }))}
              placeholder="What are you trying to build, and for whom?"
              className="mt-3 w-full rounded-2xl border border-border bg-bg-elevated p-4 text-fg placeholder:text-fg-muted/60 focus-visible:border-accent"
            />
          </div>

          <fieldset>
            <legend className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
              03 — Budget
            </legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {briefBudgetOptions.map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => setState((s) => ({ ...s, budget: option }))}
                  aria-pressed={state.budget === option}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    state.budget === option
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border text-fg-muted hover:border-fg-muted hover:text-fg"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
              04 — Timeline
            </legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {briefTimelineOptions.map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => setState((s) => ({ ...s, timeline: option }))}
                  aria-pressed={state.timeline === option}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    state.timeline === option
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border text-fg-muted hover:border-fg-muted hover:text-fg"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={state.name}
                onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
                className="mt-3 w-full rounded-full border border-border bg-bg-elevated px-4 py-3 text-fg placeholder:text-fg-muted/60 focus-visible:border-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={state.email}
                onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
                className="mt-3 w-full rounded-full border border-border bg-bg-elevated px-4 py-3 text-fg placeholder:text-fg-muted/60 focus-visible:border-accent"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-fg disabled:cursor-not-allowed disabled:opacity-40"
          >
            Build my project brief
            <ArrowUpRight size={16} aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[100px_1fr] gap-4 border-b border-border/60 pb-3">
      <dt className="font-mono text-xs uppercase tracking-wider text-fg-muted">{label}</dt>
      <dd className="text-fg">{value}</dd>
    </div>
  );
}
