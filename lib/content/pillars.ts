import type { Dictionary } from "@/lib/i18n/get-dictionary";

export const pillarIds = ["build", "create", "agents", "grow"] as const;
export type PillarId = (typeof pillarIds)[number];

export function getPillars(dict: Dictionary) {
  return pillarIds.map((id) => dict.pillars[id]);
}

export function getPillar(dict: Dictionary, id: PillarId) {
  return dict.pillars[id];
}
