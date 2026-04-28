import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeFooter } from "@/components/HomeFooter";
import { StructuredData } from "@/components/StructuredData";
import { projects } from "@/data/projects";
import { absoluteUrl, buildMetadata } from "@/data/seo";

export const metadata: Metadata = buildMetadata({
  title: "Raj Vichare | Product Manager & Design-first Builder",
  description:
    "Product builder with a background in IT, design, and business. I work across product strategy, UX, systems, and execution, turning complex product systems into usable, scalable solutions.",
  path: "/",
  keywords: [
    "Raj Vichare",
    "Raj Vivek Vichare",
    "Raj Vichare Product Manager",
    "Raj Vichare Portfolio",
    "Product Builder",
    "Product Strategy",
    "UX Design",
    "Enterprise Products",
    "Fintech Products",
    "Workflow Products"
  ]
});

type HomeProject = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  ctaLabel: string;
  external?: boolean;
};

const homeProjects: readonly HomeProject[] = [
  {
    slug: "mavic",
    title: "MAVIC",
    subtitle: "Salesforce Automation Tool",
    description:
      "A field sales platform built around how distributor teams actually work and helping them plan routes, place orders, and manage collections in one place.",
    image: "/home/mavic.png",
    imageAlt: "MAVIC field sales platform case study preview for Tata Consumer Products",
    href: "/projects/mavic",
    ctaLabel: "Read More"
  },
  {
    slug: "headcount",
    title: "Headcount",
    subtitle: "Enterprise Annual Operating Plan (AOP) platform",
    description:
      "A workforce planning platform that brought annual planning and in-year changes into a single system. It helped teams align on headcount, track decisions, and manage approvals without losing context across layers.",
    image: "/home/headcount.png",
    imageAlt: "PhonePe annual operating plan and workforce planning case study preview",
    href: "/projects/headcount",
    ctaLabel: "Read More"
  },
  {
    slug: "adx",
    title: "ADX",
    subtitle: "Inventory App Revolutionized",
    description:
      "An ad monetisation platform at GreedyGame to give direct control and visibility to the clients over their ad operations, enabling better decisions and stronger revenue outcomes.",
    image: "/home/adx.png",
    imageAlt: "GreedyGame AdX monetisation platform case study preview",
    href: "/projects/adx",
    ctaLabel: "Read More"
  },
  {
    slug: "dice",
    title: "DICE",
    subtitle: "Digital ecosystem for public schools",
    description:
      "Part of a 6-person SUGAR Network team working across 11 schools to understand schooling gaps through field research. The work evolved into a digital solution to help children of migrant labourers stay in school during COVID-19.",
    image: "/home/dice.png",
    imageAlt: "DICE education ecosystem project preview",
    href: "https://www.behance.net/gallery/101334049/DICE-Digital-Education-Ecosystem",
    ctaLabel: "Open in Behance",
    external: true
  }
];

export default function HomePage() {
  const featuredProject = projects.find((project) => project.slug === "sora-cloud");
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Raj Vichare | Product Manager & Design-first Builder",
    description: metadata.description,
    url: absoluteUrl("/"),
    about: {
      "@type": "Person",
      name: "Raj Vivek Vichare"
    }
  };

  return (
    <div className="bg-white text-[#3b3b3b]">
      <StructuredData data={homeStructuredData} />
      <div dangerouslySetInnerHTML={{ __html: "<!--Hello, please dont look into my code! -->" }} />
      <section className="w-full bg-[#f6f4f1]">
        <div className="relative mx-auto min-h-[827px] max-w-[1440px] overflow-hidden px-5 pb-10 pt-8 min-[480px]:px-6 md:px-12 md:pb-12 md:pt-10 lg:px-20 lg:pb-14 lg:pt-12 xl:px-[120px] xl:pb-0 xl:pt-[65px]">
          <div className="w-full">
            <h1 className="mx-auto max-w-full text-center font-display text-[28px] leading-[1.28] tracking-[-0.02em] text-[#3b3b3b] min-[480px]:max-w-[18ch] min-[480px]:text-[32px] md:max-w-[18ch] md:text-[42px] md:leading-[1.24] lg:max-w-[19ch] lg:text-[52px] xl:max-w-[1260px] xl:text-[60px] xl:leading-[1.28]">
              Turning{" "}
              <span className="font-display text-[28px] font-bold italic min-[480px]:text-[32px] md:text-[42px] lg:text-[52px] xl:text-[60px]">
                complex product systems
              </span>{" "}
              into{" "}
              <span className="font-display text-[28px] font-bold italic min-[480px]:text-[32px] md:text-[42px] lg:text-[52px] xl:text-[60px]">
                simple, usable solutions
              </span>{" "}
              that people actually use.
            </h1>

            <div className="mt-8 flex justify-center xl:hidden">
              <Image
                src="/home/raj.png"
                alt="Raj Vichare portrait, product manager and design-first product builder"
                width={462}
                height={478}
                priority
                className="h-auto w-full max-w-[260px] object-contain min-[480px]:max-w-[300px] md:max-w-[360px] lg:max-w-[400px]"
              />
            </div>

            <div className="mt-8 md:mt-10 xl:mt-[65px] xl:grid xl:min-h-[497px] xl:grid-cols-[780px_462px] xl:items-end xl:gap-0">
              <div className="max-w-[688px] space-y-5 text-left font-body text-[16px] leading-[1.55] text-[#3b3b3b] md:space-y-6 md:text-[18px] md:leading-[1.5] xl:mb-[86px] xl:ml-[40px] xl:w-[780px] xl:max-w-[780px] xl:space-y-[26px] xl:text-[20px] xl:leading-[1.45]">
                <p className="w-full">
                  <span className="font-semibold">Hello 👋 I&apos;m Raj,</span>
                  <br />a design-first product builder working across technology, business, and execution.
                </p>
                <p className="w-full">
                  <span className="font-semibold">Systems:</span> With a background in IT, design, and business, I work on
                  products by understanding the logic and the people they are built for.
                </p>
                <p className="w-full">
                  <span className="font-semibold">Clarity:</span> I&apos;m brought into messy situations to bring structure
                  to that ambiguity, shape the product direction, and help teams move to clear decisions.
                </p>
                <p className="w-full">
                  <span className="font-semibold">Execution:</span> I like products that work in the real world. The kind
                  that are not only well designed, but thought through, buildable, and useful at scale.
                </p>
              </div>
            </div>
          </div>

          <Image
            src="/home/raj.png"
            alt="Raj Vichare portrait, product manager and design-first product builder"
            width={462}
            height={478}
            priority
            className="absolute bottom-0 right-0 hidden h-auto w-[462px] object-contain xl:block"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] bg-white px-5 pb-0 pt-[60px] min-[480px]:px-6 min-[480px]:pt-[80px] md:px-12 md:pt-[120px] lg:px-20 xl:px-[120px]">
        <p className="text-center font-body text-[16px] leading-[1.25] text-[#3b3b3b] md:text-[18px] md:leading-[1.2]">
          Here are a few selected projects from my recent work. Happy to share more!
        </p>

        <div className="mt-[30px] grid gap-y-12 md:gap-y-16 lg:gap-x-[60px] lg:gap-y-[90px] xl:grid-cols-2">
          {homeProjects.map((project) => (
            <ProjectCardLink key={project.slug} project={project} />
          ))}
        </div>

        {featuredProject ? (
          <Link href={`/projects/${featuredProject.slug}`} className="block pb-[120px] pt-[90px]">
            <article className="grid gap-y-5 xl:grid-cols-[633px_1fr] xl:items-center xl:gap-[60px]">
              <div className="overflow-hidden rounded-[10px] bg-white">
                <Image
                  src="/home/sora.png"
                  alt="Sora Cloud AI infrastructure and LLM marketplace case study preview"
                  width={633}
                  height={290}
                  className="h-auto max-h-[290px] w-full rounded-[10px] bg-white object-contain object-center"
                />
              </div>

              <div className="font-body text-[#3b3b3b]">
                <h2 className="text-[16px] leading-[1.35] md:text-[18px]">
                  <span className="font-semibold">{featuredProject.title}</span>
                  <span> | AI and Infrastructure marketplace</span>
                </h2>
                <p className="mt-[6px] max-w-[633px] text-[15px] leading-[1.5] md:text-[16px] md:leading-[1.45]">
                  This GPU infra product worked on the key flows to make GPU/AI compute setup and usage easier to
                  understand.
                </p>
                <span className="mt-[6px] block text-right text-[15px] font-semibold leading-[1.35] underline transition-all hover:font-normal hover:no-underline md:inline-block md:text-left md:text-[16px]">
                  Read More
                </span>
              </div>
            </article>
          </Link>
        ) : null}
      </section>

      <div className="w-full bg-[#f6f4f1]">
        <HomeFooter />
      </div>
    </div>
  );
}

function ProjectCardLink({
  project
}: {
  project: (typeof homeProjects)[number];
}) {
  const content = (
    <article className="w-full">
      <div className="overflow-hidden rounded-[10px] bg-white">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={633}
          height={290}
          className="h-auto max-h-[290px] w-full rounded-[10px] bg-white object-contain object-center"
        />
      </div>

      <div className="pt-5 font-body text-[#3b3b3b]">
        <h2 className="text-[16px] leading-[1.35] md:text-[18px]">
          <span className="font-semibold">{project.title}</span>
          <span> | {project.subtitle}</span>
        </h2>
        <p className="mt-[6px] max-w-[633px] text-[15px] leading-[1.5] text-[#3b3b3b] md:text-[16px] md:leading-[1.45]">
          {project.description}
        </p>
        <span className="mt-[6px] block text-right text-[15px] font-semibold leading-[1.35] text-[#3b3b3b] underline transition-all hover:font-normal hover:no-underline md:inline-block md:text-left md:text-[16px]">
          {project.ctaLabel}
        </span>
      </div>
    </article>
  );

  if (project.external) {
    return (
      <a href={project.href} target="_blank" rel="noreferrer" className="block">
        {content}
      </a>
    );
  }

  return (
    <Link href={project.href} className="block">
      {content}
    </Link>
  );
}
