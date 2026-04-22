type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-ink">{title}</h2>
      {description ? <p className="text-base leading-7 text-muted">{description}</p> : null}
    </div>
  );
}
