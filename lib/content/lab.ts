// AGAT Lab — experimental explorations shown ahead of a larger body of
// commercial work. Clearly framed as experiments, not shipped client work.

export type LabExperiment = {
  slug: string;
  title: string;
  category: string;
  description: string;
  cover: { from: string; to: string; pattern: "strata" | "grid" | "wave" | "dot" };
};

export const labExperiments: LabExperiment[] = [
  {
    slug: "generative-interface-studies",
    title: "Generative Interface Studies",
    category: "Experimental interfaces",
    description:
      "A series of interface layouts generated and refined through AI-assisted iteration, exploring what a fully AI-native product UI could look like.",
    cover: { from: "#1a1611", to: "#0b0b0a", pattern: "grid" },
  },
  {
    slug: "ai-character-exploration",
    title: "AI Character Exploration",
    category: "AI characters",
    description:
      "Consistent AI-generated characters across multiple scenes and expressions — a study in identity persistence for future brand mascots.",
    cover: { from: "#241a12", to: "#0b0b0a", pattern: "dot" },
  },
  {
    slug: "motion-from-stills",
    title: "Motion From Stills",
    category: "AI video",
    description:
      "Turning a handful of AI-generated stills into a short motion sequence, testing how far AI video tools can stretch a limited source set.",
    cover: { from: "#151a17", to: "#0b0b0a", pattern: "wave" },
  },
  {
    slug: "n8n-content-pipeline",
    title: "Automated Content Pipeline",
    category: "Automation experiment",
    description:
      "An n8n workflow that drafts, formats and queues social captions from a single input brief — reviewed, never auto-published.",
    cover: { from: "#1c150f", to: "#0b0b0a", pattern: "strata" },
  },
];
