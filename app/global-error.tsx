"use client";

import { useEffect } from "react";

type GlobalErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalErrorPage({ error, reset }: GlobalErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-white text-[#3b3b3b]">
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-8 text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-[#6f6a63]">Site Error</p>
          <h1 className="mt-4 font-display text-[32px] leading-none">The app hit an unexpected problem.</h1>
          <p className="mt-4 max-w-[40ch] font-body text-[16px] leading-7">
            Reloading should usually fix this in development. If it keeps happening, the console will now show the
            actual underlying error instead of a missing error boundary loop.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-8 rounded-full bg-[#3b3b3b] px-5 py-3 font-body text-sm font-medium text-white transition hover:opacity-90"
          >
            Reload section
          </button>
        </div>
      </body>
    </html>
  );
}
