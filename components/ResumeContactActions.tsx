"use client";

import { useState } from "react";
import { trackEvent } from "@/data/analytics";

type ResumeContactActionsProps = {
  location: string;
  phone: string;
  email: string;
  linkedInLabel: string;
  linkedInUrl: string;
};

export function ResumeContactActions({
  location,
  phone,
  email,
  linkedInLabel,
  linkedInUrl
}: ResumeContactActionsProps) {
  const [copiedField, setCopiedField] = useState<"phone" | "email" | null>(null);

  async function handleCopy(field: "phone" | "email", value: string) {
    trackEvent("contact_cta_click", {
      location,
      method: field === "phone" ? "copy_phone" : "copy_email"
    });

    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      window.setTimeout(() => setCopiedField(null), 1800);
    } catch {
      setCopiedField(null);
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3 font-body text-[15px] leading-[1.45] text-[#3b3b3b] md:text-[16px]">
      <button
        type="button"
        onClick={() => handleCopy("phone", phone)}
        className="text-left transition hover:opacity-70"
      >
        <span className="underline underline-offset-4">{phone}</span>
        <span className={`ml-2 text-[12px] text-[#6f6a63] transition ${copiedField === "phone" ? "opacity-100" : "opacity-0"}`}>
          Copied
        </span>
      </button>

      <button
        type="button"
        onClick={() => handleCopy("email", email)}
        className="text-left transition hover:opacity-70"
      >
        <span className="underline underline-offset-4">{email}</span>
        <span className={`ml-2 text-[12px] text-[#6f6a63] transition ${copiedField === "email" ? "opacity-100" : "opacity-0"}`}>
          Copied
        </span>
      </button>

      <a
        href={linkedInUrl}
        target="_blank"
        rel="noreferrer"
        onClick={() =>
          trackEvent("linkedin_click", {
            location
          })
        }
        className="underline underline-offset-4 transition hover:opacity-70"
      >
        {linkedInLabel}
      </a>
    </div>
  );
}
