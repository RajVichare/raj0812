import type { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { StructuredData } from "@/components/StructuredData";
import { absoluteUrl, ogImagePath, personStructuredData, primaryKeywords, searchConsoleVerification, siteName, siteUrl, websiteStructuredData } from "@/data/seo";
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
  metadataBase: new URL(siteUrl),
  title: {
    default: "Raj Vichare | Product Manager & Design-first Builder",
    template: "%s | Raj Vichare"
  },
  description: siteContent.seoDescription,
  applicationName: siteName,
  keywords: primaryKeywords,
  authors: [{ name: siteContent.fullName, url: absoluteUrl("/") }],
  creator: siteContent.fullName,
  publisher: siteContent.fullName,
  category: "Portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  verification: {
    google: searchConsoleVerification
  },
  openGraph: {
    title: "Raj Vichare | Product Manager & Design-first Builder",
    description: siteContent.seoDescription,
    url: absoluteUrl("/"),
    siteName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: absoluteUrl(ogImagePath),
        width: 1200,
        height: 630,
        alt: "Raj Vichare portfolio Open Graph image"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Vichare | Product Manager & Design-first Builder",
    description: siteContent.seoDescription,
    images: [absoluteUrl(ogImagePath)]
  },
  alternates: {
    canonical: "/"
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  icons: {
    icon: [
      {
        url: "/icons/Google.png",
        type: "image/png",
        sizes: "100x100"
      },
      {
        url: "/icons/light.png",
        type: "image/png",
        sizes: "100x100",
        media: "(prefers-color-scheme: light)"
      },
      {
        url: "/icons/dark.png",
        type: "image/png",
        sizes: "100x100",
        media: "(prefers-color-scheme: dark)"
      }
    ],
    shortcut: [
      {
        url: "/icons/Google.png",
        type: "image/png"
      },
      {
        url: "/icons/light.png",
        type: "image/png",
        media: "(prefers-color-scheme: light)"
      },
      {
        url: "/icons/dark.png",
        type: "image/png",
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
        <StructuredData data={[personStructuredData, websiteStructuredData]} />
        <div className="min-h-screen">
          <Navbar />
          <main>{children}</main>
        </div>
        <GoogleAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
