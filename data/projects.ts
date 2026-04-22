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
    ]
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
    ]
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
    ]
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
    ]
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
