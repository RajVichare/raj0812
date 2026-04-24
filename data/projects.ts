export type Project = {
  slug: string;
  title: string;
  summary: string;
  impact: string;
  role: string;
  timeline: string;
  team: string;
  problem: string;
  approach: string[];
  outcomes: string[];
  lessons: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
};

export const projects: Project[] = [
  {
    slug: "mavic",
    title: "MAVIC",
    summary: "Salesforce Automation Tool",
    impact: "Designing an adaptive field workflow for planning, orders, pricing, and retail execution.",
    role: "Product Manager",
    timeline: "Case study placeholder",
    team: "Product, Design, Engineering",
    problem:
      "MAVIC reimagined field workflows in a single app for planning routes, pricing, and retail execution for the sales and distribution teams.",
    approach: [
      "Mapped daily workflows across sales and distribution touchpoints.",
      "Reduced task-switching by consolidating critical flows into one system.",
      "Prioritized usability for field teams working in dynamic environments."
    ],
    outcomes: [
      "Created a single product narrative that is easy to present as a case study.",
      "Improved clarity around what matters most in the user journey.",
      "Established a stronger foundation for workflow-based decision-making."
    ],
    lessons: [
      "Complex field operations need interfaces that stay clear under pressure.",
      "System thinking matters most when many small actions must work together."
    ],
    seo: {
      title: "MAVIC Case Study | Tata Consumer Products Field Sales Platform",
      description:
        "A field sales platform case study for Tata Consumer Products focused on route planning, order management, collections, and workflow design for distributor and FMCG sales teams.",
      keywords: [
        "Raj Vichare",
        "Raj Vichare Portfolio",
        "field sales platform",
        "sales force automation",
        "enterprise product",
        "route planning",
        "order management",
        "collections workflow",
        "FMCG sales app",
        "workflow products"
      ],
      ogImage: "/projects/mavic/Hero.png"
    }
  },
  {
    slug: "headcount",
    title: "Headcount",
    summary: "Enterprise Annual Operating Plan Platform",
    impact: "A financial planning platform built for approval-heavy orgs and annual budgeting flows.",
    role: "Product Manager",
    timeline: "Case study placeholder",
    team: "Product, Design, Finance, Engineering",
    problem:
      "Built an AOP platform for organizations to plan headcount, approve staffing changes, and forecast needs against business goals.",
    approach: [
      "Aligned operations, finance, and managers around one planning workflow.",
      "Designed clear information hierarchy for dense financial decisions.",
      "Focused on actions, approvals, and visibility over dashboard noise."
    ],
    outcomes: [
      "Created one place to understand headcount value, cost, and approvals.",
      "Reduced ambiguity in planning conversations across stakeholders.",
      "Turned complex planning states into a simpler decision interface."
    ],
    lessons: [
      "Enterprise planning tools succeed when complexity is organized, not hidden.",
      "Financial users need trust, context, and traceability at every step."
    ],
    seo: {
      title: "AOP Case Study | PhonePe Workforce Planning Platform",
      description:
        "A PhonePe workforce planning case study covering annual operating plan workflows, headcount planning, approval systems, and enterprise decision-making for HR, finance, and business teams.",
      keywords: [
        "Raj Vichare",
        "Raj Vichare Product Manager",
        "workforce planning",
        "annual operating plan",
        "headcount planning",
        "HRBP workflow",
        "enterprise planning platform",
        "approval workflows",
        "fintech products",
        "enterprise products"
      ],
      ogImage: "/projects/PhonePe/Hero.png"
    }
  },
  {
    slug: "adx",
    title: "ADX",
    summary: "Inventory App Revolutionized",
    impact: "A warehouse and inventory management product redesigned for visibility and day-to-day control.",
    role: "Product Manager",
    timeline: "Case study placeholder",
    team: "Product, Design, Engineering, Operations",
    problem:
      "ADX rethought inventory visibility and operational control so warehouse teams could manage assets, statuses, and flows without extra friction.",
    approach: [
      "Simplified operational information into an interface that stays readable at scale.",
      "Balanced admin power with clearer defaults and day-to-day actions.",
      "Used product structure to reduce cognitive load across key tasks."
    ],
    outcomes: [
      "Improved the story around visibility, control, and actionable inventory data.",
      "Made the product easier to scan and operate through clearer structure.",
      "Built a cleaner case study foundation around operational software."
    ],
    lessons: [
      "Operational products need clarity before they need embellishment.",
      "Designing for repeat usage requires strong hierarchy and predictable patterns."
    ],
    seo: {
      title: "AdX Case Study | Self-serve Monetisation Platform",
      description:
        "A GreedyGame AdX case study about building a self-serve monetisation platform with publisher workflows, ad unit setup, performance dashboards, and operational visibility.",
      keywords: [
        "Raj Vivek Vichare",
        "ad monetisation platform",
        "Google AdX",
        "publisher platform",
        "app monetisation",
        "ad unit management",
        "revenue dashboard",
        "platform products",
        "enterprise products"
      ],
      ogImage: "/projects/ADX/Hero.adx.png"
    }
  },
  {
    slug: "sora-cloud",
    title: "Sora Cloud",
    summary: "AI and Infrastructure Marketplace",
    impact: "A marketplace experience for serving LLMs and infrastructure workloads through one platform.",
    role: "Product Manager",
    timeline: "Case study placeholder",
    team: "Product, Design, Engineering",
    problem:
      "Sora Cloud was conceived as a self-serve platform for accessing LLMs alongside the underlying GPU infrastructure required to power them.",
    approach: [
      "Created a clearer marketplace structure around deployments, inputs, and outputs.",
      "Used a dark, technical UI language while keeping workflows understandable.",
      "Connected product strategy with the realities of infrastructure complexity."
    ],
    outcomes: [
      "Turned a technical offering into a more approachable product story.",
      "Balanced depth and usability in a developer-facing environment.",
      "Created a compelling foundation for a future case study page."
    ],
    lessons: [
      "Developer products still need strong onboarding and conceptual clarity.",
      "Even complex AI systems benefit from calmer interaction patterns."
    ],
    seo: {
      title: "Sora Cloud Case Study | LLM Marketplace & GPU Infrastructure",
      description:
        "A case study on Sora Cloud, an AI infrastructure and LLM marketplace product designed around deployment flows, GPU resources, model selection, and enterprise AI usability.",
      keywords: [
        "Raj Vichare Portfolio",
        "LLM marketplace",
        "GPU infrastructure",
        "AI deployment platform",
        "model deployment",
        "AI infrastructure",
        "enterprise AI platform",
        "platform products",
        "product strategy"
      ],
      ogImage: "/projects/Sora/Hero.so.png"
    }
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
