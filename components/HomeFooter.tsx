"use client";

import Image from "next/image";
import { useState } from "react";
import { trackEvent } from "@/data/analytics";
import { siteContent } from "@/data/siteContent";

export function HomeFooter() {
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    trackEvent("contact_cta_click", {
      location: "home_footer",
      method: "copy_email"
    });

    try {
      await navigator.clipboard.writeText(siteContent.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <footer className="bg-[#f6f4f1]">
      <div className="mx-auto flex min-h-[72px] max-w-[1440px] flex-wrap items-center justify-between gap-4 px-5 py-5 min-[480px]:px-6 md:px-12 lg:px-20 xl:px-[120px]">
        <p className="font-display text-[20px] leading-none text-[#3b3b3b] md:text-[22px] xl:text-[24px]">
          Let&apos;s make something great together.
        </p>
        <div className="flex flex-wrap items-center gap-5 text-[14px] leading-none text-[#3b3b3b] min-[480px]:text-[15px] md:gap-6 md:text-[16px] xl:gap-8 xl:text-[18px]">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="font-body flex items-center gap-1 transition hover:text-[#3b3b3b]"
          >
            <Image src="/home/mail.png" alt="" width={16} height={20} className="h-[20px] w-[16px]" />
            <span>{siteContent.email}</span>
            <span className={`ml-2 text-[12px] text-[#3b3b3b] transition ${copied ? "opacity-100" : "opacity-0"}`}>
              Copied
            </span>
          </button>
          <a
            href={siteContent.linkedIn}
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              trackEvent("linkedin_click", {
                location: "home_footer"
              })
            }
            className="group flex items-center gap-2 text-[#3b3b3b] transition-colors hover:text-[#0077B5]"
            aria-label="Open LinkedIn profile"
          >
            <span
              className="block h-6 w-6 bg-current transition-colors"
              style={{
                WebkitMaskImage: "url('/home/linkedin.png')",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                WebkitMaskSize: "contain",
                maskImage: "url('/home/linkedin.png')",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                maskSize: "contain"
              }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
