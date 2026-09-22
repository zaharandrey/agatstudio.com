// No real clients yet. Every entry here is a concept exploration or an AGAT
// Lab experiment, tagged accordingly, with no invented metrics or names that
// could be mistaken for a real business. Replace/extend once real work exists.

export type Project = {
  slug: string;
  tag: "CONCEPT" | "AGAT LAB";
  pillar: "build" | "create" | "agents" | "grow";
  title: string;
  summary: string;
  challenge: string;
  strategy: string;
  ai: string;
  build: string;
  automation: string;
  result: string;
  cover: { from: string; to: string; pattern: "strata" | "grid" | "wave" | "dot" };
};

export const projects: Project[] = [
  {
    slug: "concept-boutique-retail-website",
    tag: "CONCEPT",
    pillar: "build",
    title: "Concept — Boutique Retail Website",
    summary:
      "An AI-assisted design exploration for a small retail brand that needed an online presence that felt as considered as its physical store.",
    challenge:
      "A single-location retail business with no website and a brand voice that lived entirely in-store — nothing to point customers to online.",
    strategy:
      "Translate the in-store experience into a browsing flow: editorial product presentation first, checkout second.",
    ai: "AI-generated layout and copy variations were used to explore multiple editorial directions quickly, before one was refined by hand.",
    build: "A fast, content-driven storefront with a modular product template and an editorial homepage.",
    automation: "A lightweight inventory-to-site sync concept, removing manual product updates.",
    result: "Concept project — exploratory only, no live metrics to report.",
    cover: { from: "#1a1815", to: "#0b0b0a", pattern: "grid" },
  },
  {
    slug: "concept-personal-brand-ai-photoshoot",
    tag: "CONCEPT",
    pillar: "create",
    title: "Concept — Personal Brand AI Photoshoot",
    summary:
      "A virtual photoshoot concept exploring how far AI-generated imagery can carry a personal brand without a physical studio session.",
    challenge:
      "A founder needed a consistent set of portrait and lifestyle imagery for a personal brand launch, with no time for a traditional shoot.",
    strategy: "Define a visual identity — wardrobe, setting, mood — before generating a single frame.",
    ai: "AI image generation and editing produced a cohesive image set across multiple settings and poses from that one identity brief.",
    build: "A curated gallery of the resulting stills, prepared for web, social and print use.",
    automation: "Not applicable to this concept.",
    result: "Concept project — exploratory only, no live metrics to report.",
    cover: { from: "#241a12", to: "#0b0b0a", pattern: "dot" },
  },
  {
    slug: "concept-saas-support-agent",
    tag: "CONCEPT",
    pillar: "agents",
    title: "Concept — SaaS Support Agent",
    summary:
      "An AI support-agent concept for a small SaaS product, designed to answer common questions before a human ever has to.",
    challenge:
      "A small product team was spending hours a week answering the same handful of onboarding questions.",
    strategy: "Scope the agent to a narrow, well-documented set of tasks rather than an open-ended chatbot.",
    ai: "An AI agent trained on the product's own documentation to answer, triage and escalate only when needed.",
    build: "A chat widget concept wired into the product's existing help center content.",
    automation: "Escalation to a human via existing support tooling when the agent reaches its limits.",
    result: "Concept project — exploratory only, no live metrics to report.",
    cover: { from: "#151a17", to: "#0b0b0a", pattern: "wave" },
  },
  {
    slug: "concept-local-business-automation",
    tag: "AGAT LAB",
    pillar: "grow",
    title: "AGAT Lab — Local Business Automation System",
    summary:
      "An internal lab experiment connecting booking, follow-up and review requests into a single automated workflow for a service business.",
    challenge:
      "Service businesses often lose leads between the first inquiry and the booked appointment — this experiment targeted that gap.",
    strategy: "Map the lead-to-booking journey and automate the handoffs, not the judgment calls.",
    ai: "An AI agent drafts personalized follow-up messages based on the inquiry, for human approval before sending.",
    build: "A workflow prototype connecting a booking form, a messaging step and a review-request trigger.",
    automation: "Built entirely in n8n as a portable, inspectable workflow.",
    result: "Lab experiment — exploratory only, no live metrics to report.",
    cover: { from: "#1c150f", to: "#0b0b0a", pattern: "strata" },
  },
];
