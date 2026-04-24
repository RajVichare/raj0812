import type { Metadata } from "next";
import Link from "next/link";
import { HomeFooter } from "@/components/HomeFooter";
import { StructuredData } from "@/components/StructuredData";
import { projects } from "@/data/projects";
import { absoluteUrl, buildMetadata } from "@/data/seo";

export const metadata: Metadata = buildMetadata({
  title: "Raj Vichare Portfolio | Product & UX Case Studies",
  description:
    "Selected product and UX case studies across enterprise systems, fintech platforms, field sales automation, workforce planning, ad monetisation, and AI infrastructure.",
  path: "/projects",
  keywords: [
    "Raj Vichare Portfolio",
    "Product & UX case studies",
    "enterprise systems",
    "fintech platforms",
    "field sales automation",
    "workforce planning",
    "ad monetisation",
    "AI infrastructure"
  ]
});

export default function ProjectsPage() {
  const collectionPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Raj Vichare Portfolio | Product & UX Case Studies",
    description: metadata.description,
    url: absoluteUrl("/projects"),
    hasPart: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      url: absoluteUrl(`/projects/${project.slug}`)
    }))
  };

  return (
    <div className="bg-white text-[#3b3b3b]">
      <StructuredData data={collectionPageStructuredData} />

      <section className="mx-auto max-w-[1440px] px-5 pb-0 pt-[60px] min-[480px]:px-6 md:px-12 md:pt-[90px] lg:px-20 xl:px-[120px]">
        <div className="mx-auto max-w-[920px] text-center">
          <h1 className="font-display text-[28px] leading-[1.2] md:text-[42px] xl:text-[54px]">
            Raj Vichare Portfolio
          </h1>
          <p className="mt-5 font-body text-[16px] leading-[1.7] md:text-[18px]">
            Selected product and UX case studies across enterprise systems, fintech platforms, workflow products, field
            sales automation, workforce planning, ad monetisation, and AI infrastructure.
          </p>
        </div>

        <div className="mt-12 grid gap-6 pb-[100px] md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.slug} className="rounded-[20px] border border-[#ebe7e2] bg-[#f6f4f1] p-6">
              <p className="font-body text-[12px] font-semibold uppercase tracking-[0.2em] text-[#6f6a63]">
                Case Study
              </p>
              <h2 className="mt-3 font-display text-[24px] leading-none">{project.title}</h2>
              <p className="mt-4 font-body text-[16px] leading-[1.7]">{project.problem}</p>
              <Link
                href={`/projects/${project.slug}`}
                className="mt-5 inline-block font-body text-[15px] font-semibold underline underline-offset-4"
              >
                View case study
              </Link>
            </article>
          ))}
        </div>
      </section>

      <div className="w-full bg-[#f6f4f1]">
        <HomeFooter />
      </div>
    </div>
  );
}
