import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-[2rem] border border-line bg-white p-8 shadow-card transition hover:-translate-y-1">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Case Study</p>
        <h3 className="text-2xl font-semibold tracking-tight text-ink">{project.title}</h3>
        <p className="text-base leading-7 text-muted">{project.summary}</p>
      </div>
      <div className="mt-8 flex items-center justify-between gap-4">
        <p className="text-sm text-ink">{project.impact}</p>
        <Link href={`/projects/${project.slug}`} className="text-sm font-medium text-ink underline underline-offset-4">
          View project
        </Link>
      </div>
    </article>
  );
}
