"use client";

import { useState } from "react";
import { siteContent } from "@/data/siteContent";
import { Modal } from "@/components/Modal";

export function IntroModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition hover:border-ink"
      >
        Open Intro Modal
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="What this portfolio is meant to show">
        <p>{siteContent.intro}</p>
        <p>
          You can reuse this modal for a contact prompt, product philosophy, featured achievement, or a short recruiter
          note.
        </p>
      </Modal>
    </>
  );
}
