"use client";

import { trackEvent } from "@/data/analytics";

type DownloadCvButtonProps = {
  href: string;
};

export function DownloadCvButton({ href }: DownloadCvButtonProps) {
  return (
    <a
      href={href}
      download
      onClick={() =>
        trackEvent("cv_download", {
          location: "about_page",
          file_name: "Raj_Vichare_Resume.pdf"
        })
      }
      className="inline-flex h-[39px] w-[129px] shrink-0 items-center justify-center rounded-[10px] bg-[#3B3B3B] font-body text-[13px] font-medium tracking-[0.02em] text-[#FFFFFF] transition hover:opacity-90 md:text-[14px]"
    >
      DOWNLOAD CV
    </a>
  );
}
