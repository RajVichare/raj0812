import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-8 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Page Not Found</p>
      <h1 className="mt-4 text-4xl font-semibold text-ink">This page does not exist yet.</h1>
      <p className="mt-4 text-base leading-7 text-muted">
        If you add more routes later, this page will help visitors recover gracefully.
      </p>
      <Link href="/" className="mt-8 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white">
        Return Home
      </Link>
    </div>
  );
}
