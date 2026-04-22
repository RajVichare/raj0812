import { notFound } from "next/navigation";
import AdxCaseStudy from "@/components/AdxCaseStudy";
import MavicCaseStudy from "@/components/MavicCaseStudy";
import PhonePeCaseStudy from "@/components/PhonePeCaseStudy";
import { ProjectTemplate } from "@/components/ProjectTemplate";
import SoraCaseStudy from "@/components/SoraCaseStudy";
import { getProjectBySlug, projects } from "@/data/projects";

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

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  if (project.slug === "mavic") {
    return <MavicCaseStudy />;
  }

  if (project.slug === "headcount") {
    return <PhonePeCaseStudy />;
  }

  if (project.slug === "sora-cloud") {
    return <SoraCaseStudy />;
  }

  if (project.slug === "adx") {
    return <AdxCaseStudy />;
  }

  return (
    <div className="mx-auto max-w-6xl px-8 py-16">
      <ProjectTemplate project={project} />
    </div>
  );
}
