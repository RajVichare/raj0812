"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

type HoverVideoLinkProps = {
  label: string;
  href: string;
  description: string;
};

export function HoverVideoLink({ label, href, description }: HoverVideoLinkProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopStyle, setDesktopStyle] = useState<CSSProperties | null>(null);
  const rootRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  function openDesktopPopup() {
    const trigger = rootRef.current;

    if (!trigger || !window.matchMedia("(min-width: 768px)").matches) {
      return;
    }

    const rect = trigger.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const gutter = 20;
    const overlap = 6;
    const width = Math.min(860, viewportWidth - gutter * 2);
    const opensBelow = rect.top < viewportHeight / 2;
    const maxHeight = Math.max(
      220,
      opensBelow ? viewportHeight - rect.bottom - gutter + overlap : rect.top - gutter + overlap
    );
    const preferredLeft = rect.left + rect.width / 2 - width / 2;
    const left = Math.min(Math.max(preferredLeft, gutter), viewportWidth - width - gutter);

    setDesktopStyle({
      width,
      left,
      maxHeight,
      transform: "none",
      ...(opensBelow ? { top: rect.bottom - overlap } : { bottom: viewportHeight - rect.top - overlap })
    });
  }

  function closeDesktopPopup() {
    setDesktopStyle(null);
  }

  function openMobilePopup() {
    if (!window.matchMedia("(min-width: 768px)").matches) {
      setIsOpen(true);
    }
  }

  return (
    <span
      ref={rootRef}
      className="relative inline-block align-baseline"
      onMouseEnter={openDesktopPopup}
      onMouseLeave={closeDesktopPopup}
    >
      <button
        type="button"
        onClick={openMobilePopup}
        className="font-semibold underline transition-all hover:font-normal hover:no-underline"
      >
        {label}
      </button>

      {desktopStyle ? (
        <span
          className="fixed z-40 hidden overflow-y-auto border border-[#3B3B3B]/20 bg-[#FFFFFF] p-5 text-left font-body text-[14px] font-normal leading-[1.45] text-[#3B3B3B] shadow-[0_24px_60px_rgba(59,59,59,0.12)] md:block"
          style={desktopStyle}
        >
          <span>{description}</span>
          <YouTubeLink href={href} className="mt-4" />
        </span>
      ) : null}

      {isOpen ? (
        <span
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#3B3B3B]/20 px-5 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <span
            className="relative max-h-[82vh] w-full max-w-[420px] overflow-y-auto border border-[#3B3B3B]/20 bg-[#FFFFFF] p-5 text-left font-body text-[12px] font-normal leading-[1.45] text-[#3B3B3B] shadow-[0_24px_60px_rgba(59,59,59,0.16)]"
            onClick={(event) => event.stopPropagation()}
          >
            <span className="block">{description}</span>
            <YouTubeLink href={href} className="mt-4 text-[12px]" />
          </span>
        </span>
      ) : null}
    </span>
  );
}

function YouTubeLink({ href, className = "" }: { href: string; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`flex w-fit items-center gap-2 font-body font-normal text-[#3B3B3B] underline-offset-4 hover:underline ${className}`}
    >
      <IconMask src="/icons/youtube.svg" className="h-5 w-5" />
      <span>Watch on YouTube</span>
    </a>
  );
}

function IconMask({ src, className }: { src: string; className: string }) {
  return (
    <span
      className={`block bg-current ${className}`}
      style={{
        WebkitMaskImage: `url('${src}')`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "contain",
        maskImage: `url('${src}')`,
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "contain"
      }}
    />
  );
}
