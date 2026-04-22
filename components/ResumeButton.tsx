type ResumeButtonProps = {
  href: string;
};

export function ResumeButton({ href }: ResumeButtonProps) {
  return (
    <a
      href={href}
      download
      className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition hover:bg-black"
    >
      Download Resume PDF
    </a>
  );
}
