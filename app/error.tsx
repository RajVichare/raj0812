"use client";

import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-8 text-center">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-[#6f6a63]">Something Went Wrong</p>
      <h2 className="mt-4 font-display text-[32px] leading-none text-[#3b3b3b]">This page needs a quick refresh.</h2>
      <p className="mt-4 max-w-[40ch] font-body text-[16px] leading-7 text-[#3b3b3b]">
        A temporary issue interrupted the page render. You can try again without leaving the site.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-full bg-[#3b3b3b] px-5 py-3 font-body text-sm font-medium text-white transition hover:opacity-90"
      >
        Try again
      </button>
    </div>
  );
}
