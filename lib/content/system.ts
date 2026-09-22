// The hero's compressed flow (idea -> result) and the fuller
// "one idea, many digital layers" system section on the homepage.

export const heroFlow = [
  "Idea",
  "Strategy",
  "AI",
  "Design",
  "Code",
  "Automation",
  "Result",
] as const;

export const systemLayers = [
  { label: "Idea", note: "Where every project starts" },
  { label: "Brand", note: "Positioning, voice, visual identity" },
  { label: "Website", note: "The system's front door" },
  { label: "Content", note: "Visuals, video, social" },
  { label: "AI Agent", note: "Answers, qualifies, routes" },
  { label: "Automation", note: "Connects the tools you already use" },
  { label: "Analytics", note: "What's actually working" },
  { label: "Growth", note: "Continuous iteration" },
] as const;

export const showcaseItems = [
  { key: "website", label: "Website", pillar: "build" },
  { key: "ai-photo", label: "AI Photo", pillar: "create" },
  { key: "ai-agent", label: "AI Agent", pillar: "agents" },
  { key: "reel", label: "Reel", pillar: "create" },
  { key: "carousel", label: "Carousel", pillar: "create" },
  { key: "presentation", label: "Presentation", pillar: "create" },
  { key: "brand", label: "Brand", pillar: "build" },
  { key: "automation", label: "Automation", pillar: "agents" },
  { key: "dashboard", label: "Dashboard", pillar: "grow" },
  { key: "e-commerce", label: "E-commerce", pillar: "build" },
] as const;
