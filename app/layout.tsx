import type { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { siteContent } from "@/data/siteContent";

const avenirNext = localFont({
  src: [
    {
      path: "./fonts/AV-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/AV-Demi.woff2",
      weight: "600",
      style: "normal"
    }
  ],
  variable: "--font-av"
});

const playfairDisplay = localFont({
  src: [
    {
      path: "./fonts/PD-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/PD-BoldItalic.ttf",
      weight: "700",
      style: "italic"
    }
  ],
  variable: "--font-pd"
});

export const metadata: Metadata = {
  title: siteContent.name,
  description: "A clean and modern Product Manager portfolio built with Next.js and Tailwind CSS.",
  icons: {
    icon: [
      {
        url: "/icons/favicon-light.png",
        media: "(prefers-color-scheme: light)"
      },
      {
        url: "/icons/favicon-dark.png",
        media: "(prefers-color-scheme: dark)"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${avenirNext.variable} ${playfairDisplay.variable} bg-sand text-ink antialiased`}>
        <div className="min-h-screen">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
