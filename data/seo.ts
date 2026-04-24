import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { siteContent } from "@/data/siteContent";

const fallbackSiteUrl = "http://localhost:3000";

function normalizeSiteUrl(value?: string) {
  if (!value) {
    return fallbackSiteUrl;
  }

  return value.startsWith("http://") || value.startsWith("https://") ? value : `https://${value}`;
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL
);

export const siteName = `${siteContent.name} Portfolio`;
export const ogImagePath = "/og-image.png";
export const searchConsoleVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "google-search-console-verification-placeholder";

export const primaryKeywords: string[] = [
  "Raj Vichare",
  "Raj Vivek Vichare",
  "Raj Vichare Product Manager",
  "Raj Vichare Portfolio",
  "Raj Vichare UX Product Design",
  "Product Manager portfolio India",
  "Product design to product management portfolio",
  "Product Manager",
  "Product Builder",
  "UX Design",
  "Product Strategy",
  "Enterprise Products",
  "Fintech Products",
  "B2B SaaS",
  "Workflow Products",
  "Platform Products",
  "Product Execution",
  "PRDs",
  "User Flows",
  "Systems Thinking",
  "Design Thinking",
  "Cross-functional Execution",
  "Product-led Design",
  "Human-centered Products",
  "Bangalore Product Manager",
  "India Product Manager"
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
  image = ogImagePath
}: {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  type?: "website" | "article" | "profile";
  image?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords: [...primaryKeywords, ...keywords],
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "en_IN",
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteContent.fullName} portfolio preview`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}

export function getProjectUrl(slug: string) {
  return `/projects/${slug}`;
}

export const allPublicPaths = ["/", "/about", "/projects", ...projects.map((project) => getProjectUrl(project.slug))];

export const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteContent.fullName,
  alternateName: [siteContent.name, "Raj Vichare Product Manager", "Raj Vichare Portfolio"],
  jobTitle: ["Product Manager", "Product Builder"],
  description:
    "Raj Vichare is a product builder with a background in IT, design, and business. He works across product strategy, UX, systems thinking, and execution across fintech, enterprise, and consumer platforms.",
  url: absoluteUrl("/"),
  image: absoluteUrl(ogImagePath),
  sameAs: [siteContent.linkedIn],
  address: {
    "@type": "PostalAddress",
    addressLocality: siteContent.city,
    addressCountry: siteContent.country
  },
  worksFor: [
    { "@type": "Organization", name: "PhonePe" },
    { "@type": "Organization", name: "Tata Consumer Products" },
    { "@type": "Organization", name: "Vodafone Idea" },
    { "@type": "Organization", name: "Peak XV" },
    { "@type": "Organization", name: "GreedyGame" }
  ],
  knowsAbout: primaryKeywords,
  subjectOf: absoluteUrl(siteContent.resumeFile)
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  alternateName: [siteContent.name, siteContent.fullName],
  url: absoluteUrl("/"),
  description: siteContent.seoDescription,
  inLanguage: "en-IN",
  publisher: {
    "@type": "Person",
    name: siteContent.fullName
  }
};
