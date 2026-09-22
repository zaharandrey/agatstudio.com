import type { Dictionary } from "@/lib/i18n/get-dictionary";

// Structural, locale-independent facts about each project (slug for
// routing, pillar for color-coding, cover art gradient). The translated
// copy (title, summary, challenge, etc.) lives in dict.projects, matched
// by array index — both arrays must stay in the same order.

export type ProjectMeta = {
  slug: string;
  pillar: "build" | "create" | "agents" | "grow";
  cover: { from: string; to: string; pattern: "strata" | "grid" | "wave" | "dot" };
};

export const projectsMeta: ProjectMeta[] = [
  {
    slug: "concept-boutique-retail-website",
    pillar: "build",
    cover: { from: "#1a1815", to: "#0b0b0a", pattern: "grid" },
  },
  {
    slug: "concept-personal-brand-ai-photoshoot",
    pillar: "create",
    cover: { from: "#241a12", to: "#0b0b0a", pattern: "dot" },
  },
  {
    slug: "concept-saas-support-agent",
    pillar: "agents",
    cover: { from: "#151a17", to: "#0b0b0a", pattern: "wave" },
  },
  {
    slug: "concept-local-business-automation",
    pillar: "grow",
    cover: { from: "#1c150f", to: "#0b0b0a", pattern: "strata" },
  },
];

export type LocalizedProject = ProjectMeta & Dictionary["projects"][number];

export function getProjects(dict: Dictionary): LocalizedProject[] {
  return projectsMeta.map((meta, i) => ({ ...meta, ...dict.projects[i] }));
}

export function getProjectBySlug(dict: Dictionary, slug: string): LocalizedProject | undefined {
  return getProjects(dict).find((p) => p.slug === slug);
}
