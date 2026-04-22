import type { ReactNode } from "react";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectTemplateProps = {
  project: Project;
};

export function ProjectTemplate({ project }: ProjectTemplateProps) {
  return (
    <div className="space-y-12">
      <div className="space-y-5 rounded-[2rem] border border-line bg-white p-10 shadow-card">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Project Case Study</p>
        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-ink">{project.title}</h1>
        <p className="max-w-3xl text-lg leading-8 text-muted">{project.summary}</p>
        <div className="grid gap-4 pt-4 md:grid-cols-3">
          <ProjectMeta label="Role" value={project.role} />
          <ProjectMeta label="Timeline" value={project.timeline} />
          <ProjectMeta label="Team" value={project.team} />
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <ContentBlock title="Problem">
          <p>{project.problem}</p>
        </ContentBlock>
        <ContentBlock title="Impact">
          <p>{project.impact}</p>
        </ContentBlock>
      </div>

      <ContentBlock title="Approach">
        <ul className="space-y-3">
          {project.approach.map((item) => (
            <li key={item} className="rounded-2xl border border-line/80 bg-sand px-5 py-4">
              {item}
            </li>
          ))}
        </ul>
      </ContentBlock>

      <div className="grid gap-8 lg:grid-cols-2">
        <ContentBlock title="Outcomes">
          <ul className="space-y-3">
            {project.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ContentBlock>
        <ContentBlock title="Lessons Learned">
          <ul className="space-y-3">
            {project.lessons.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ContentBlock>
      </div>

      <div className="flex items-center justify-between rounded-[2rem] border border-line bg-white px-8 py-6 shadow-card">
        <p className="text-muted">Want to keep exploring? Swap this text with a CTA, contact note, or next step.</p>
        <Link href="/" className="text-sm font-medium text-ink underline underline-offset-4">
          Back home
        </Link>
      </div>
    </div>
  );
}

function ProjectMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-line/70 bg-sand px-5 py-4">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">{label}</p>
      <p className="mt-2 text-base text-ink">{value}</p>
    </div>
  );
}

function ContentBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-[2rem] border border-line bg-white p-8 shadow-card">
      <h2 className="mb-5 text-2xl font-semibold text-ink">{title}</h2>
      <div className="space-y-4 leading-7 text-muted">{children}</div>
    </section>
  );
}
