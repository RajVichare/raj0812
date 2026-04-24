import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AdxCaseStudy from "@/components/AdxCaseStudy";
import MavicCaseStudy from "@/components/MavicCaseStudy";
import PhonePeCaseStudy from "@/components/PhonePeCaseStudy";
import { ProjectViewTracker } from "@/components/ProjectViewTracker";
import { ProjectTemplate } from "@/components/ProjectTemplate";
import SoraCaseStudy from "@/components/SoraCaseStudy";
import { StructuredData } from "@/components/StructuredData";
import { getProjectBySlug, projects } from "@/data/projects";
import { absoluteUrl, buildMetadata } from "@/data/seo";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {};
  }

  return buildMetadata({
    title: project.seo.title,
    description: project.seo.description,
    path: `/projects/${project.slug}`,
    keywords: project.seo.keywords,
    type: "article",
    image: project.seo.ogImage
  });
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const projectStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.seo.title,
    name: project.title,
    description: project.seo.description,
    url: absoluteUrl(`/projects/${project.slug}`),
    image: absoluteUrl(project.seo.ogImage),
    author: {
      "@type": "Person",
      name: "Raj Vivek Vichare"
    },
    publisher: {
      "@type": "Person",
      name: "Raj Vivek Vichare"
    },
    mainEntityOfPage: absoluteUrl(`/projects/${project.slug}`),
    inLanguage: "en-IN",
    keywords: project.seo.keywords
  };

  if (project.slug === "mavic") {
    return (
      <>
        <StructuredData data={projectStructuredData} />
        <ProjectViewTracker slug={project.slug} title={project.title} />
        <MavicCaseStudy />
      </>
    );
  }

  if (project.slug === "headcount") {
    return (
      <>
        <StructuredData data={projectStructuredData} />
        <ProjectViewTracker slug={project.slug} title={project.title} />
        <PhonePeCaseStudy />
      </>
    );
  }

  if (project.slug === "sora-cloud") {
    return (
      <>
        <StructuredData data={projectStructuredData} />
        <ProjectViewTracker slug={project.slug} title={project.title} />
        <SoraCaseStudy />
      </>
    );
  }

  if (project.slug === "adx") {
    return (
      <>
        <StructuredData data={projectStructuredData} />
        <ProjectViewTracker slug={project.slug} title={project.title} />
        <AdxCaseStudy />
      </>
    );
  }

  return (
    <>
      <StructuredData data={projectStructuredData} />
      <ProjectViewTracker slug={project.slug} title={project.title} />
      <div className="mx-auto max-w-6xl px-8 py-16">
        <ProjectTemplate project={project} />
      </div>
    </>
  );
}
