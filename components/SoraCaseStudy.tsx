import type { ReactNode } from "react";
import Link from "next/link";
import { SafeAssetImage } from "@/components/SafeAssetImage";

const pageShell = "mx-auto w-full max-w-[1560px] px-5 min-[480px]:px-6 md:px-12 lg:px-[120px]";
const bodyText = "font-body text-[16px] font-normal leading-[1.55] text-[#D2D2D2] md:text-[18px]";
const headingText = "font-body text-[16px] font-semibold leading-[1.35] text-white md:text-[18px]";

const offerings = [
  {
    title: "Efficient AI Training",
    body: "Train and deploy models faster with automated workflows, reducing the need to manage infrastructure directly.",
    image: "Efficient AI Training.svg",
    imageClassName: "h-[60px] w-[60px]"
  },
  {
    title: "Custom AI Solutions",
    body: "Use pre-configured workflows to set up deployments quickly, with common patterns and best practices built in.",
    image: "Custom Ai Solutions.svg",
    imageClassName: "h-[60px] w-[57px]"
  },
  {
    title: "Dynamic GPU Resources",
    body: "Scale GPU compute based on demand, with flexible configurations designed to balance performance and cost.",
    image: "Dynamic GPU Resources.svg",
    imageClassName: "h-[42px] w-[60px]"
  }
] as const;

const featureRows = [
  {
    title: "Pick Your Model",
    body: "Browse available LLMs and choose the right one for your use case. Filter by model size, GPU requirements, and pricing.",
    image: "Pick Your Model.png",
    textSide: "left"
  },
  {
    title: "Deploy & Monitor",
    body: "Launch a deployment and track real-time metrics across your setup, including GPU allocation, memory usage, and active jobs.",
    image: "Deploy & Monitor.png",
    textSide: "right"
  },
  {
    title: "Scale Your Resources",
    body: "Add GPU machines as needed, or enable auto-scaling to adjust compute dynamically based on workload.",
    image: " Scale Your Resources.png",
    textSide: "left"
  },
  {
    title: "Monitor Performance",
    body: "Track QPS and latency in real time, and use live dashboards to balance performance with cost.",
    image: "Monitor Performance.png",
    textSide: "right"
  },
  {
    title: "Test & Iterate",
    body: "Use the Playground to test deployments with live requests, refine parameters, and validate outputs before production.",
    image: "Test & Iterate.png",
    textSide: "left"
  }
] as const;

function soraAsset(name: string) {
  return `/projects/Sora/${encodeURIComponent(name)}`;
}

function Body({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`${bodyText} ${className}`}>{children}</div>;
}

function OfferingCard({
  title,
  body,
  image,
  imageClassName
}: {
  title: string;
  body: string;
  image: string;
  imageClassName: string;
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center text-center">
      <SafeAssetImage src={soraAsset(image)} alt="" label={image} className={`${imageClassName} object-contain`} />
      <h2 className={`${headingText} mt-[15px]`}>{title}</h2>
      <p className={`${bodyText} mt-[6px] max-w-[340px] text-center`}>{body}</p>
    </div>
  );
}

function Divider() {
  return <div aria-hidden="true" className="hidden h-[132px] w-[0.25px] shrink-0 rounded-full bg-white/80 lg:block" />;
}

function FeatureRow({
  title,
  body,
  image,
  textSide
}: {
  title: string;
  body: string;
  image: string;
  textSide: "left" | "right";
}) {
  const copy = (
    <div
      className={`flex h-full flex-col justify-center ${
        textSide === "left" ? "items-start text-left lg:items-end lg:text-right" : "items-start text-left"
      }`}
    >
      <h2 className={headingText}>{title}</h2>
      <p className={`${bodyText} max-w-[520px]`}>{body}</p>
    </div>
  );

  const visual = (
    <div>
      <SafeAssetImage
        src={soraAsset(image)}
        alt={`${title} product screen`}
        label={image}
        className="h-auto w-full object-contain"
        fallbackClassName="min-h-[260px]"
      />
    </div>
  );

  return (
    <section
      className={`grid items-center gap-4 md:gap-6 lg:gap-[60px] ${
        textSide === "left"
          ? "lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
          : "lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]"
      }`}
    >
      {textSide === "left" ? (
        <>
          <div className="order-2 lg:order-1">{copy}</div>
          <div className="order-1 lg:order-2">{visual}</div>
        </>
      ) : (
        <>
          <div className="order-1 lg:order-1">{visual}</div>
          <div className="order-2 lg:order-2">{copy}</div>
        </>
      )}
    </section>
  );
}

export default function SoraCaseStudy() {
  return (
    <div className="overflow-hidden bg-[#121214] text-white">
      <section className="relative pt-[60px]">
        <div className="pointer-events-none absolute left-1/2 top-[154px] z-0 hidden h-[933px] w-[933px] -translate-x-1/2 lg:block">
          <SafeAssetImage
            src={soraAsset("Ellipse 39.svg")}
            alt=""
            label="Ellipse 39.svg"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-[154px] z-0 hidden w-[1632px] -translate-x-1/2 lg:block">
          <SafeAssetImage
            src={soraAsset("Hero.so.png")}
            alt="Sora Cloud platform dashboard"
            label="Hero.so.png"
            className="h-auto w-full object-contain"
            fallbackClassName="min-h-[520px]"
          />
        </div>

        <div className={`${pageShell} relative z-10`}>
          <div className="mx-auto flex flex-col items-center text-center">
            <SafeAssetImage
              src={soraAsset("logo.so.svg")}
              alt="Sora Cloud"
              label="logo.so.svg"
              className="h-[45px] w-[134px] object-contain"
            />
            <h1 className="mt-[26px] font-display text-[20px] font-medium leading-[1.18] tracking-normal text-white md:text-[32px]">
              Enterprises with Cutting-Edge AI
            </h1>
            <Body className="mt-3 max-w-[900px] text-center">
              <p>
                Sora Cloud is an LLM marketplace that allows enterprises to train and deploy models and manage GPU
                compute from a single platform. Built at a time when model access and infrastructure were typically
                handled separately, it brought both together to reduce the overhead of working across multiple vendors.
              </p>
            </Body>
          </div>

          <div className="relative left-1/2 mt-4 flex w-[90vw] -translate-x-1/2 justify-center overflow-visible lg:hidden">
            <SafeAssetImage
              src={soraAsset("Hero.so.png")}
              alt="Sora Cloud platform dashboard"
              label="Hero.so.png"
              className="h-auto w-full max-w-none object-contain"
              fallbackClassName="min-h-[260px]"
            />
          </div>

          <div className="mx-auto mt-4 grid max-w-[340px] grid-cols-1 gap-[52px] sm:max-w-[420px] lg:mt-[981px] lg:flex lg:max-w-[1240px] lg:items-center lg:justify-center lg:gap-[38px]">
            <OfferingCard {...offerings[0]} />
            <Divider />
            <OfferingCard {...offerings[1]} />
            <Divider />
            <OfferingCard {...offerings[2]} />
          </div>
        </div>
      </section>

      <div className={`${pageShell} space-y-[60px] pb-[58px] pt-[120px]`}>
        {featureRows.map((row) => (
          <FeatureRow key={row.title} {...row} />
        ))}

        <div className="mx-auto max-w-[1280px] pt-[12px]">
          <p className="font-body text-[13px] font-normal leading-[1.6] text-[#D2D2D2] md:text-[14px]">
            All work showcased here is my own and created in collaboration with respective teams and organisations. Some
            details, visuals, and identifiers may have been adapted or anonymised for confidentiality. Please do not
            reproduce, reuse, or distribute any part of this work without prior permission.
          </p>
          <Link
            href="/"
            className="mt-5 inline-flex font-body text-[16px] font-semibold leading-none text-white underline underline-offset-4 transition hover:opacity-80 md:text-[18px]"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
