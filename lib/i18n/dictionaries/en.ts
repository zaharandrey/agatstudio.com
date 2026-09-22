// Canonical dictionary — its shape (via `typeof`) is the Dictionary type
// that lib/i18n/dictionaries/uk.ts must also satisfy.

type PillarId = "build" | "create" | "agents" | "grow";

// Explicitly typed (rather than left to plain object-literal inference) so
// every pillar shares one shape — otherwise TS infers a distinct type per
// pillar (since e.g. only "create" has `highlight`) and `getPillars()`
// can't access `.flow` / `.highlight` on the resulting union.
type PillarText = {
  id: PillarId;
  code: string;
  name: string;
  short: string;
  statement: string;
  description: string;
  deliverables: string[];
  flow?: string[];
  highlight?: { title: string; description: string };
};

// Explicitly typed so `pillar` stays the literal union instead of widening
// to `string`, which lib/content/projects.ts's ProjectMeta type requires.
type ProjectText = {
  slug: string;
  tag: string;
  pillar: PillarId;
  title: string;
  summary: string;
  challenge: string;
  strategy: string;
  ai: string;
  build: string;
  automation: string;
  result: string;
};

const dict = {
  site: {
    tagline: "From idea to digital system.",
    description: "We combine AI, design and technology to turn ideas into working digital systems.",
    ogDescription:
      "AGAT is an AI / digital agency. We build websites, AI creative, AI agents and automation — as one connected digital system.",
  },

  common: {
    skipToContent: "Skip to content",
  },

  languageSwitcher: {
    ariaLabel: "Change language",
  },

  nav: {
    work: "Work",
    services: "Services",
    process: "Process",
    lab: "Lab",
    about: "About",
    contact: "Contact",
    startProject: "Start a project",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    primaryAriaLabel: "Primary",
    mobileAriaLabel: "Mobile",
  },

  hero: {
    eyebrow: "AI / Digital Agency",
    titleLine1: "From idea to",
    titleLine2: "digital system.",
    description:
      "We combine AI, design and technology to turn ideas into working digital systems — websites, AI creative, agents and automation, built as one connected whole.",
    ctaPrimary: "Start a project",
    ctaSecondary: "See our work",
    flowAriaLabel: "How an idea becomes a system",
    flow: ["Idea", "Strategy", "AI", "Design", "Code", "Automation", "Result"],
  },

  brandStatement: {
    line1: "AI is the engine.",
    line2: "Human thinking is the direction.",
    acceleratesTitle: "AI accelerates",
    acceleratesText:
      "Research, ideation, generation, automation, analysis and optimization — the parts of the process that benefit from speed and scale.",
    definesTitle: "Human thinking defines",
    definesText:
      "Strategy, taste, storytelling, art direction, quality control and decision making — the parts that decide whether the work is actually good.",
  },

  pillarsSection: {
    eyebrow: "What we build",
    title: "Four disciplines. One system.",
    exploreCta: "Explore",
  },

  pillars: {
    build: {
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
    } as PillarText,
    create: {
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
    } as PillarText,
    agents: {
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
    } as PillarText,
    grow: {
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
    } as PillarText,
  },

  showcase: {
    eyebrow: "Show, don't tell",
    title: "What can AGAT create?",
    ariaLabel: "Showcase categories",
    items: [
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
    ],
  },

  system: {
    eyebrow: "The AGAT system",
    titleLine1: "One idea.",
    titleLine2: "Many digital layers.",
    description:
      "Most businesses end up briefing seven different vendors for seven disconnected pieces. AGAT builds them as one system — so the brand, the site, the content and the automation all speak to each other.",
    layers: [
      { label: "Idea", note: "Where every project starts" },
      { label: "Brand", note: "Positioning, voice, visual identity" },
      { label: "Website", note: "The system's front door" },
      { label: "Content", note: "Visuals, video, social" },
      { label: "AI Agent", note: "Answers, qualifies, routes" },
      { label: "Automation", note: "Connects the tools you already use" },
      { label: "Analytics", note: "What's actually working" },
      { label: "Growth", note: "Continuous iteration" },
    ],
  },

  processSection: {
    eyebrow: "How we build",
    title: "Six steps. No guesswork.",
    steps: [
      {
        code: "01",
        title: "Discover",
        description: "Understand the business, audience and problem.",
        detail:
          "We start with the business, not the deliverable — who it serves, what's actually blocking growth, and what a working system would need to do.",
      },
      {
        code: "02",
        title: "Strategize",
        description: "Define the digital architecture.",
        detail:
          "We map how the pieces connect — site, content, agents, automation — into one architecture instead of a list of separate tasks.",
      },
      {
        code: "03",
        title: "Create",
        description: "Generate and test creative directions using AI.",
        detail:
          "AI lets us explore far more directions than a traditional process — visuals, copy, layouts — before we commit design time to one.",
      },
      {
        code: "04",
        title: "Build",
        description: "Turn the strongest concept into a working product.",
        detail:
          "The chosen direction becomes real: designed, built and tested as a production-ready product, not a static mockup.",
      },
      {
        code: "05",
        title: "Connect",
        description: "Add AI agents, automation and integrations.",
        detail:
          "We wire the system together — agents, forms, CRM, analytics — so it runs with less manual work from day one.",
      },
      {
        code: "06",
        title: "Grow",
        description: "Measure, optimize and continuously improve.",
        detail:
          "Launch is the start of the data. We use it to keep improving performance, content and conversion over time.",
      },
    ],
  },

  portfolioSection: {
    eyebrow: "Selected work",
    title: "Concepts, not claims.",
    description:
      "AGAT is a new studio. Rather than invent clients or metrics, the work below is marked exactly as it is — concept explorations and AGAT Lab experiments.",
    viewAllCta: "View all work",
  },

  projects: [
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
    } as ProjectText,
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
    } as ProjectText,
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
    } as ProjectText,
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
    } as ProjectText,
  ],

  workDetail: {
    backLink: "All work",
    stages: [
      { key: "challenge", label: "Challenge" },
      { key: "strategy", label: "Strategy" },
      { key: "ai", label: "AI" },
      { key: "build", label: "Build" },
      { key: "automation", label: "Automation" },
      { key: "result", label: "Result" },
    ],
    ctaStartSimilar: "Start a project like this",
  },

  labSection: {
    eyebrow: "AGAT Lab",
    title: "Where we test what's next.",
    description: "Experimental AI work — characters, video, interfaces, automation — built to explore capability ahead of client briefs.",
    enterCta: "Enter the lab",
  },

  labExperiments: [
    {
      slug: "generative-interface-studies",
      title: "Generative Interface Studies",
      category: "Experimental interfaces",
      description:
        "A series of interface layouts generated and refined through AI-assisted iteration, exploring what a fully AI-native product UI could look like.",
    },
    {
      slug: "ai-character-exploration",
      title: "AI Character Exploration",
      category: "AI characters",
      description:
        "Consistent AI-generated characters across multiple scenes and expressions — a study in identity persistence for future brand mascots.",
    },
    {
      slug: "motion-from-stills",
      title: "Motion From Stills",
      category: "AI video",
      description:
        "Turning a handful of AI-generated stills into a short motion sequence, testing how far AI video tools can stretch a limited source set.",
    },
    {
      slug: "n8n-content-pipeline",
      title: "Automated Content Pipeline",
      category: "Automation experiment",
      description:
        "An n8n workflow that drafts, formats and queues social captions from a single input brief — reviewed, never auto-published.",
    },
  ],

  tools: {
    title: "Tools we use",
    note: "Not partners or sponsors — just what we build with.",
  },

  websiteCare: {
    title: "Launch is not the end.",
    bodySuffix:
      "We keep systems technically healthy, visible in search and AI answers, and improving — not frozen the day they ship.",
    cta: "Talk about ongoing support",
  },

  brief: {
    eyebrow: "Project brief",
    title: "What are you building?",
    step1Legend: "01 — Select all that apply",
    buildingOptions: [
      "Website",
      "AI Agent",
      "AI Photoshoot",
      "AI Video",
      "Reels",
      "Carousels",
      "Brand",
      "Automation",
      "E-commerce",
      "Web App",
      "Other",
    ],
    step2Label: "02 — Tell us about your idea",
    ideaPlaceholder: "What are you trying to build, and for whom?",
    step3Legend: "03 — Budget",
    budgetOptions: ["I don't know yet", "€500–1,000", "€1,000–3,000", "€3,000–5,000", "€5,000+"],
    step4Legend: "04 — Timeline",
    timelineOptions: ["ASAP", "2–4 weeks", "1–2 months", "Flexible"],
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@company.com",
    submitCta: "Build my project brief",
    summary: {
      readyBadge: "Brief ready",
      title: "Here's your summary.",
      rowBuilding: "Building",
      rowIdea: "Idea",
      rowBudget: "Budget",
      rowTimeline: "Timeline",
      rowContact: "Contact",
      sendCta: "Send this brief by email",
      startOverCta: "Start over",
      disclaimer:
        "Sending opens your email client with this brief pre-filled — nothing is sent automatically or stored on our end.",
      subjectPrefix: "Project brief —",
      newInquiry: "New inquiry",
      mailBuilding: "Building",
      mailIdea: "Idea",
      mailBudget: "Budget",
      mailTimeline: "Timeline",
      mailName: "Name",
      mailEmail: "Email",
    },
  },

  finalCta: {
    title1: "Have an idea?",
    title2: "Let's build the system.",
    cta: "Start a project",
  },

  faqSection: {
    eyebrow: "FAQ",
    title: "Good questions.",
    items: [
      {
        question: "What does AGAT actually do?",
        answer:
          "AGAT is an AI / digital agency. We build websites and digital products (AGAT Build), AI-generated creative and content (AGAT Create), AI agents and automation (AGAT Agents), and ongoing SEO/GEO and growth support (AGAT Grow) — as one connected digital system rather than four separate services.",
      },
      {
        question: "Do I need to understand AI to work with AGAT?",
        answer:
          "No. You bring the idea and the business context; we handle the strategy, design, AI production and automation. You'll see clear options and outcomes, not technical implementation detail.",
      },
      {
        question: "Do you always use AI-generated imagery instead of real photography?",
        answer:
          "No — AI virtual photography is one option, useful when a physical shoot isn't practical or a concept needs to be tested quickly. We'll recommend whichever approach fits the brief.",
      },
      {
        question: "What is GEO, and why does it matter?",
        answer:
          "GEO (generative engine optimization) is structuring a site so AI systems like ChatGPT, Claude, Gemini and Perplexity can understand and cite it accurately — alongside, not instead of, traditional SEO.",
      },
      {
        question: "Do you offer fixed pricing?",
        answer:
          "Project cost depends on scope, so we don't publish fixed rate cards. The project brief on our contact page collects your budget range and timeline so we can scope accurately before we talk.",
      },
      {
        question: "What happens after a website or system launches?",
        answer:
          "Launch is the start, not the end. AGAT Grow covers maintenance, SEO/GEO, analytics, content and ongoing improvements — available as continuous support after any project.",
      },
    ],
  },

  footer: {
    taglinePrefix: "AI / Digital Agency.",
    servicesTitle: "Services",
    companyTitle: "Company",
    socialTitle: "Social",
    services: [
      { label: "AGAT Build — websites & digital products", anchor: "#build" },
      { label: "AGAT Create — AI creative studio", anchor: "#create" },
      { label: "AGAT Agents — AI agents & automation", anchor: "#agents" },
      { label: "AGAT Grow — SEO, GEO & continuous growth", anchor: "#grow" },
    ],
    company: ["About", "Work", "Process", "Lab", "Contact"],
    legal: { privacy: "Privacy Policy", terms: "Terms" },
    rights: "All rights reserved.",
  },

  social: {
    email: "Email",
    telegram: "Telegram",
    instagram: "Instagram",
    linkedin: "LinkedIn",
  },

  aboutPage: {
    pageHero: {
      eyebrow: "About AGAT",
      title: "Why the name AGAT?",
      description:
        "Agate is a banded stone — layers, formed one on top of another, rising to a single point. That's the whole idea behind the studio: every project is a stack of layers, built in order, ending in one working system.",
    },
    block1: {
      title: "Not a website shop. Not an AI gimmick.",
      p1: "Most businesses end up briefing a different vendor for the website, the content, the automation and the ongoing growth work — four relationships, four handoffs, four places for context to get lost.",
      p2: "AGAT builds all four as one system from the start: AGAT Build, AGAT Create, AGAT Agents and AGAT Grow. AI is what lets a small studio move at that scope without the traditional headcount — but it's still a person making every call on strategy, taste and what actually ships.",
    },
    block2: {
      title: "You bring the idea. We build the system.",
      p1: "You don't need to understand AI, prompt engineering or automation platforms to work with us. You bring the business context and the goal. We handle the strategy, the AI production, the design, the build and what keeps it running afterward.",
      p2: "AGAT is a new studio, building in the open — the work section is honest about what's a concept exploration versus a live client project, and it will grow as real projects ship.",
    },
  },

  servicesPage: {
    pageHero: {
      eyebrow: "Services",
      title: "Four disciplines. One system.",
      description:
        "AGAT doesn't sell a list of deliverables. Every engagement draws from the same four connected disciplines — as much or as little as the project needs.",
    },
  },

  workPage: {
    pageHero: {
      eyebrow: "Selected work",
      title: "Concepts, not claims.",
      description:
        "AGAT is a new studio. Rather than invent clients or metrics, everything here is marked exactly as it is — a concept exploration or an AGAT Lab experiment.",
    },
  },

  processPage: {
    pageHero: {
      eyebrow: "How we build",
      title: "You bring the idea. We build the system.",
      description:
        "No black box. Six steps get every project from a first conversation to a running digital system — and stay the same whether we're shipping a landing page or a full automation stack.",
    },
  },

  labPage: {
    pageHero: {
      eyebrow: "AGAT Lab",
      title: "Where we test what's next.",
      description:
        "Experimental AI work — characters, video, interfaces, automation — built ahead of client briefs, so we already know what's possible when a real one arrives.",
    },
  },

  contactPage: {
    pageHero: {
      eyebrow: "Contact",
      title: "Have an idea? Let's build the system.",
      description: "Fill out the project brief below, or reach us directly — whichever's easier.",
    },
  },

  legal: {
    eyebrow: "Legal",
    privacy: {
      title: "Privacy Policy",
      draftNotice:
        "Draft — this page is a placeholder pending review by legal counsel before launch. It describes current practice, not a finalized legal policy.",
      p1: "This policy covers information submitted through the project brief and contact forms on this site: your name, email address and the details you choose to share about your project.",
      p2: "Submitting the project brief form does not send any data to AGAT automatically — it opens your own email client with the brief pre-filled, and nothing is transmitted or stored unless you choose to send that email.",
      p3: "If you contact us directly (email, Telegram, Instagram, LinkedIn), we use the information you provide only to respond to your inquiry and, if a project moves forward, to deliver the work. We do not sell or share your information with third parties.",
      p4Prefix: "Questions about this policy can be sent to",
    },
    terms: {
      title: "Terms",
      draftNotice:
        "Draft — this page is a placeholder pending review by legal counsel before launch. Project-specific terms (scope, payment, IP) are agreed in writing before any paid work begins.",
      p1: "This website and the concept/lab work shown on it are provided for informational purposes. Concept and AGAT Lab projects are exploratory work, not delivered client projects, and are labeled as such throughout the site.",
      p2: "Pricing shown in the project brief form (budget ranges) is indicative, used to scope a conversation — it is not a quote or a binding offer.",
      p3: "Any paid engagement with AGAT is governed by a separate written agreement covering scope, timeline, payment and intellectual property, agreed before work begins.",
      p4Prefix: "Questions about these terms can be sent to",
    },
  },

  breadcrumb: {
    home: "Home",
    services: "Services",
    work: "Work",
    process: "Process",
    lab: "Lab",
    about: "About",
    contact: "Contact",
  },

  metadata: {
    home: {
      title: "AGAT — From idea to digital system.",
      description: "We combine AI, design and technology to turn ideas into working digital systems.",
    },
    services: {
      title: "Services",
      description:
        "Four connected disciplines: AGAT Build (websites & digital products), AGAT Create (AI creative studio), AGAT Agents (AI agents & automation) and AGAT Grow (SEO, GEO & continuous growth).",
    },
    work: {
      title: "Work",
      description:
        "AGAT concept explorations and AGAT Lab experiments across websites, AI creative, agents and automation — clearly labeled, no invented clients or metrics.",
    },
    process: {
      title: "Process",
      description:
        "How AGAT works: Discover, Strategize, Create, Build, Connect, Grow — six steps from idea to a running digital system.",
    },
    lab: {
      title: "Lab",
      description:
        "AGAT Lab — experimental AI work in characters, video, interfaces and automation, built to explore capability ahead of client briefs.",
    },
    about: {
      title: "About",
      description:
        "AGAT is an AI / digital agency built around one idea: idea, strategy, AI, design, product, automation and growth as one connected digital system.",
    },
    contact: {
      title: "Contact",
      description:
        "Start a project with AGAT. Fill out a short project brief, or reach us directly by email, Telegram, Instagram or LinkedIn.",
    },
    privacy: {
      title: "Privacy Policy",
      description: "How AGAT handles the information you share with us.",
    },
    terms: {
      title: "Terms",
      description: "The terms that apply to using this website and working with AGAT.",
    },
  },
};

export default dict;
export type Dictionary = typeof dict;
