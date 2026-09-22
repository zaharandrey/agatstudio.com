export type Pillar = {
  id: "build" | "create" | "agents" | "grow";
  code: string;
  name: string;
  short: string;
  statement: string;
  description: string;
  deliverables: string[];
  flow?: string[];
  highlight?: { title: string; description: string };
};

export const pillars: Pillar[] = [
  {
    id: "build",
    code: "01",
    name: "AGAT BUILD",
    short: "Digital products & websites",
    statement: "We build digital products that turn ideas into real experiences.",
    description:
      "Corporate sites, product launches, portfolios and full web applications — designed and shipped as one connected system, not a stack of disconnected pages.",
    deliverables: [
      "Corporate websites",
      "Business websites",
      "Landing pages",
      "Portfolios",
      "E-commerce",
      "SaaS websites",
      "Web applications",
      "AI-powered websites",
      "Interactive experiences",
    ],
    flow: ["Strategy", "UX", "UI", "Development", "Launch", "Support"],
  },
  {
    id: "create",
    code: "02",
    name: "AGAT CREATE",
    short: "AI creative studio",
    statement: "A full creative studio, running on AI production.",
    description:
      "Visuals, campaigns and content built with AI-assisted generation and edited by a human eye — so quality never depends on a shoot date or a studio booking.",
    deliverables: [
      "AI photoshoots",
      "Virtual photography",
      "AI portraits",
      "Product visualization",
      "Advertising creatives",
      "AI-generated images",
      "Image editing",
      "AI video",
      "Reels",
      "Shorts",
      "Social media content",
      "Carousels",
      "Presentations",
      "Pitch decks",
      "Visual identity",
      "Advertising materials",
      "Campaign visuals",
    ],
    highlight: {
      title: "AI Virtual Photoshoots",
      description:
        "You don't always need a physical set. We can build conceptual advertising and image campaigns — fashion, product, personal brand — entirely through AI-driven virtual photography.",
    },
  },
  {
    id: "agents",
    code: "03",
    name: "AGAT AGENTS",
    short: "AI agents & automation",
    statement: "Less manual work. Faster processes. More automation.",
    description:
      "We connect the tools your team already uses and put AI agents in the gaps — answering, qualifying, researching and routing, so people spend time on what actually needs a human.",
    deliverables: [
      "AI agents",
      "AI assistants",
      "Chatbots",
      "Customer support agents",
      "Sales assistants",
      "Lead qualification agents",
      "Research agents",
      "Content agents",
      "Internal business assistants",
      "Workflow automation",
      "API integrations",
      "n8n workflows",
      "Make automation",
    ],
  },
  {
    id: "grow",
    code: "04",
    name: "AGAT GROW",
    short: "Digital growth & continuous development",
    statement: "We don't just launch your digital system. We help it evolve.",
    description:
      "Launch is a starting point. AGAT Grow keeps the system healthy — technically, visually and in how well it's found, on search engines and in AI answers alike.",
    deliverables: [
      "SEO",
      "GEO / AI-search optimization",
      "Analytics",
      "Content systems",
      "Social media content",
      "Website maintenance",
      "Performance optimization",
      "Website improvements",
      "New landing pages",
      "Conversion optimization",
      "AI chatbot integration",
      "Ongoing digital development",
    ],
  },
];
