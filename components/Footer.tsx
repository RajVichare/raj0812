import Link from "next/link";
import { siteContent } from "@/data/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-line/60 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-8 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          {siteContent.name} • {siteContent.role}
        </p>
        <div className="flex gap-5">
          <a href={`mailto:${siteContent.email}`} className="transition hover:text-ink">
            Email
          </a>
          <Link href="/about" className="transition hover:text-ink">
            About
          </Link>
          <a href={siteContent.linkedIn} target="_blank" rel="noreferrer" className="transition hover:text-ink">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
