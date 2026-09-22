"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Check, RotateCcw } from "lucide-react";
import Reveal from "@/components/Reveal";
import { contactEmail } from "@/lib/content/site";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

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

export default function ProjectBrief({ dict }: { dict: Dictionary }) {
  const b = dict.brief;
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
    const subject = `${b.summary.subjectPrefix} ${state.name || b.summary.newInquiry}`;
    const body = [
      `${b.summary.mailBuilding}: ${state.building.join(", ")}`,
      "",
      `${b.summary.mailIdea}: ${state.idea}`,
      "",
      `${b.summary.mailBudget}: ${state.budget}`,
      `${b.summary.mailTimeline}: ${state.timeline}`,
      "",
      `${b.summary.mailName}: ${state.name}`,
      `${b.summary.mailEmail}: ${state.email}`,
    ].join("\n");
    return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [state, b.summary]);

  if (submitted) {
    return (
      <section id="brief" className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="rounded-3xl border border-accent/30 bg-accent/5 p-8 lg:p-10">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                <Check size={14} /> {b.summary.readyBadge}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-fg lg:text-3xl">
                {b.summary.title}
              </h3>

              <dl className="mt-6 space-y-4 text-sm">
                <Row label={b.summary.rowBuilding} value={state.building.join(", ")} />
                <Row label={b.summary.rowIdea} value={state.idea} />
                <Row label={b.summary.rowBudget} value={state.budget} />
                <Row label={b.summary.rowTimeline} value={state.timeline} />
                <Row label={b.summary.rowContact} value={`${state.name} — ${state.email}`} />
              </dl>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={mailtoHref}
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-fg"
                >
                  {b.summary.sendCta}
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
                  {b.summary.startOverCta}
                </button>
              </div>
              <p className="mt-6 text-xs text-fg-muted">{b.summary.disclaimer}</p>
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
            {b.eyebrow}
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-fg lg:text-5xl">
            {b.title}
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
              {b.step1Legend}
            </legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {b.buildingOptions.map((option) => {
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
              {b.step2Label}
            </label>
            <textarea
              id="idea"
              required
              rows={4}
              value={state.idea}
              onChange={(e) => setState((s) => ({ ...s, idea: e.target.value }))}
              placeholder={b.ideaPlaceholder}
              className="mt-3 w-full rounded-2xl border border-border bg-bg-elevated p-4 text-fg placeholder:text-fg-muted/60 focus-visible:border-accent"
            />
          </div>

          <fieldset>
            <legend className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
              {b.step3Legend}
            </legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {b.budgetOptions.map((option) => (
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
              {b.step4Legend}
            </legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {b.timelineOptions.map((option) => (
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
                {b.nameLabel}
              </label>
              <input
                id="name"
                type="text"
                value={state.name}
                onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
                className="mt-3 w-full rounded-full border border-border bg-bg-elevated px-4 py-3 text-fg placeholder:text-fg-muted/60 focus-visible:border-accent"
                placeholder={b.namePlaceholder}
              />
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
                {b.emailLabel}
              </label>
              <input
                id="email"
                type="email"
                required
                value={state.email}
                onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
                className="mt-3 w-full rounded-full border border-border bg-bg-elevated px-4 py-3 text-fg placeholder:text-fg-muted/60 focus-visible:border-accent"
                placeholder={b.emailPlaceholder}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-fg disabled:cursor-not-allowed disabled:opacity-40"
          >
            {b.submitCta}
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
