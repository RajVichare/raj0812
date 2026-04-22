"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteContent } from "@/data/siteContent";

const links = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" }
];

export function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const isSoraPage = pathname === "/projects/sora-cloud";

  useEffect(() => {
    let previousY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingUp = currentY < previousY;
      const closeToTop = currentY < 12;

      setIsVisible(scrollingUp || closeToTop);
      previousY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur transition-transform duration-300 ${
        isSoraPage ? "border-[#121214] bg-[#121214]/95" : "border-[#ebe7e2] bg-white/95"
      } ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex h-[83px] max-w-[1440px] items-center justify-between px-5 py-5 min-[480px]:px-6 md:px-12 lg:px-20 xl:px-[120px]">
        <Link
          href="/"
          className={`font-display text-[22px] font-normal leading-none min-[480px]:text-[24px] md:text-[28px] xl:text-[32px] ${
            isSoraPage ? "text-white" : "text-[#3b3b3b]"
          }`}
        >
          {siteContent.name}
        </Link>
        <nav
          className={`font-display flex items-center gap-4 text-[16px] leading-none min-[480px]:gap-5 min-[480px]:text-[18px] md:gap-6 md:text-[20px] xl:gap-8 xl:text-[24px] ${
            isSoraPage ? "text-white" : "text-[#3b3b3b]"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:opacity-100 ${pathname === link.href ? "font-semibold opacity-100" : "font-normal opacity-100"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
