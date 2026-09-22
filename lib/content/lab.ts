import type { Dictionary } from "@/lib/i18n/get-dictionary";

// Structural, locale-independent facts about each lab experiment (slug,
// cover art gradient). Translated copy lives in dict.labExperiments,
// matched by array index — both arrays must stay in the same order.

export type LabMeta = {
  slug: string;
  cover: { from: string; to: string; pattern: "strata" | "grid" | "wave" | "dot" };
};

export const labMeta: LabMeta[] = [
  { slug: "generative-interface-studies", cover: { from: "#1a1611", to: "#0b0b0a", pattern: "grid" } },
  { slug: "ai-character-exploration", cover: { from: "#241a12", to: "#0b0b0a", pattern: "dot" } },
  { slug: "motion-from-stills", cover: { from: "#151a17", to: "#0b0b0a", pattern: "wave" } },
  { slug: "n8n-content-pipeline", cover: { from: "#1c150f", to: "#0b0b0a", pattern: "strata" } },
];

export type LocalizedLabExperiment = LabMeta & Dictionary["labExperiments"][number];

export function getLabExperiments(dict: Dictionary): LocalizedLabExperiment[] {
  return labMeta.map((meta, i) => ({ ...meta, ...dict.labExperiments[i] }));
}
