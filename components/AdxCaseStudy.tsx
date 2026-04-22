import type { ReactNode } from "react";
import Link from "next/link";
import { SafeAssetImage } from "@/components/SafeAssetImage";

const pageShell = "mx-auto w-full max-w-[1440px] px-5 min-[480px]:px-6 md:px-12 lg:px-20 xl:px-[120px]";
const bodyText = "font-body text-[16px] font-normal leading-[1.7] text-[#555555] md:text-[18px]";
const bodyLight = "font-body text-[16px] font-normal leading-[1.7] text-white/80 md:text-[18px]";
const subheadText = "font-body text-[16px] font-semibold leading-[1.4] text-[#3B3B3B] md:text-[18px]";
const subheadLight = "font-body text-[16px] font-semibold leading-[1.4] text-white md:text-[18px]";

const publisherFeatures = [
  {
    title: "Publisher Authentication",
    body: "A simple login for existing publishers to enter the AdX workspace.",
    image: "Publisher Authentication.png",
    layout: "hero"
  },
  {
    title: "App Registration",
    body: "A guided flow to register apps, verify ownership, and complete the steps needed for domain validation.",
    image: "App Registration.adx.png",
    layout: "wide"
  },
  {
    title: "Account Verification",
    body: "A verification flow to either create a new Google Ad Manager account or connect an existing one for AdX activation.",
    image: "Account Verification.png",
    layout: "wide"
  },
  {
    title: "Ad unit setup",
    body: "A structured interface for creating supported ad formats with clear guidance around available inventory types.",
    image: "Ad unit setup.png",
    layout: "split"
  },
  {
    title: "Performance Dashboard",
    body: "A dashboard that gave publishers visibility into revenue, impressions, and unit-level performance over time.",
    image: "Performance Dashboard.png",
    layout: "split"
  }
] as const;

const adminFeatures = [
  {
    title: "Ad Units Performance Dashboard",
    body: "A central view of publishers, apps, impressions, and revenue, with table-level visibility into individual ad unit performance.",
    image: "Ad Units Performance Dashboard.png"
  },
  {
    title: "Publisher Management & Communication",
    body: "An operational interface for managing publisher accounts, statuses, notifications, and revenue-related workflows across multiple accounts.",
    image: "Publisher Management & Communication.png"
  }
] as const;

const impactStats = [
  "1,500+ publishers onboarded",
  "10B+ monthly impressions processed",
  "40% average revenue uplift for publishers",
  "20-40% eCPM improvement over traditional ad networks",
  "$17.2M ARR during a phase of rapid growth"
] as const;

function adxAsset(name: string) {
  return `/projects/ADX/${encodeURIComponent(name)}`;
}

function Body({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`${bodyText} ${className}`}>{children}</div>;
}

function SectionTitle({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <h2
      className={`font-display text-[20px] font-medium leading-[1.2] tracking-normal md:text-[22px] ${
        light ? "text-white" : "text-[#3B3B3B]"
      }`}
    >
      {children}
    </h2>
  );
}

function FlowImage({
  image,
  alt,
  className = ""
}: {
  image: string;
  alt: string;
  className?: string;
}) {
  return (
    <SafeAssetImage
      src={adxAsset(image)}
      alt={alt}
      label={image}
      className={`h-auto w-full object-contain ${className}`}
      fallbackClassName="min-h-[260px]"
    />
  );
}

function ProductFeature({
  title,
  body,
  image,
  wide = false
}: {
  title: string;
  body: string;
  image: string;
  wide?: boolean;
}) {
  return (
    <div>
      {wide ? (
        <div className="-mx-5 overflow-x-auto px-5 min-[480px]:-mx-6 min-[480px]:px-6 md:mx-0 md:px-0">
          <div className="w-[720px] max-w-none snap-center md:w-full">
            <FlowImage image={image} alt={`${title} screens`} className="rounded-[8px]" />
          </div>
        </div>
      ) : (
        <FlowImage image={image} alt={`${title} screen`} className="mx-auto max-w-[620px] rounded-[8px]" />
      )}
      <div className="mx-auto mt-8 max-w-[900px] text-center">
        <h3 className={subheadLight}>{title}</h3>
        <p className={`${bodyLight} mt-px`}>{body}</p>
      </div>
    </div>
  );
}

export default function AdxCaseStudy() {
  return (
    <div className="bg-white text-[#3B3B3B]">
      <section className="bg-[#F7F8FC]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-[25%_minmax(0,1fr)] items-start gap-4 px-5 py-10 min-[480px]:px-6 md:px-12 lg:grid-cols-[34%_66%] lg:items-stretch lg:gap-0 lg:px-0 lg:py-0">
          <div className="flex aspect-square items-center justify-center overflow-hidden rounded-full bg-[#554AE2] p-2 lg:aspect-auto lg:rounded-none lg:px-8 lg:py-12">
            <FlowImage image="Hero.adx.png" alt="AdX product analytics illustration" className="max-w-[390px]" />
          </div>
          <div className="flex items-center lg:px-[60px] lg:py-12 xl:pr-[120px]">
            <div className="max-w-[840px]">
              <SafeAssetImage
                src={adxAsset("icon.adx.svg")}
                alt="AdX"
                label="icon.adx.svg"
                className="h-[30px] w-[89px] object-contain"
              />
              <h1 className="mt-8 font-display text-[20px] font-medium leading-[36px] tracking-normal text-[#3B3B3B] md:text-[22px]">
                Turning a support-led AdX workflow into a self-serve platform
              </h1>
              <Body className="mt-3">
                <p>
                  AdX was built to help GreedyGame move from a support-heavy way of onboarding premium publishers into a
                  product that could scale. Publishers needed a clearer path to get set up, verify requirements, create
                  ad units, and track monetisation, while internal teams needed stronger control across approvals,
                  account status, and revenue workflows.
                </p>
              </Body>
            </div>
          </div>
        </div>
      </section>

      <section className={`${pageShell} grid gap-10 py-[72px] lg:grid-cols-[minmax(0,1fr)_296px] lg:items-center lg:gap-[90px]`}>
        <div>
          <SectionTitle>The Challenge</SectionTitle>
          <Body className="mt-3">
            <p>
              Before a publisher could start monetising, they had to verify app ownership, connect or create a Google Ad
              Manager account, move through approval checkpoints, and then set up ad units. These steps were spread out
              and handled manually, with different parts of the journey sitting across teams.
            </p>
            <p className="mt-4">The process worked, but it didn&apos;t hold together as one system.</p>
            <p className="mt-4">Looking at how publishers moved through this flow, a few patterns stood out:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>the process felt opaque once a request moved beyond the first step</li>
              <li>app-ads.txt verification created the highest friction, especially for non-technical users</li>
              <li>publishers had very little visibility into status, blockers, or what came next</li>
              <li>internal teams were repeatedly stepping in to resolve setup issues and push approvals forward</li>
              <li>the workflow worked, but mostly because people were holding it together manually</li>
            </ul>
          </Body>
        </div>
        <FlowImage
          image="The challenge.adx.svg"
          alt="Ad monetisation challenge illustration"
          className="mx-auto hidden max-w-[296px] md:block"
        />
      </section>

      <section className="bg-[#F7F8FC] py-[72px]">
        <div className={pageShell}>
          <div className="text-center">
            <SectionTitle>System Architecture</SectionTitle>
          </div>
          <FlowImage image="system architecture.adx.png" alt="AdX system architecture" className="mx-auto mt-10 max-w-[1098px]" />
        </div>
      </section>

      <section className={`${pageShell} py-[72px]`}>
        <SectionTitle>How it worked</SectionTitle>
        <Body className="mt-3 max-w-[1280px]">
          <p>
            As a publisher moved from app registration to verification, account setup, and ad unit creation, their
            progress was reflected in the system in real time. That changed how both sides worked.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              For publishers, it meant they didn&apos;t have to rely on follow-ups to understand where things stood. They
              could see what was done, what was pending, and what came next.
            </li>
            <li>
              For internal teams, it meant they no longer had to piece things together manually. They could see where an
              account was stuck, what needed action, and step in only when required.
            </li>
          </ul>
          <p className="mt-4">
            Under the hood, this was tied together through Google Ad Manager integration, app-ads.txt verification,
            role-based access, and performance tracking. But the value wasn&apos;t in these parts individually, it was in
            how they worked together as one system.
          </p>
        </Body>
      </section>

      <section className="bg-[#F7F8FC] py-[72px]">
        <div className={pageShell}>
          <div className="text-center">
            <SectionTitle>Design System &amp; Foundations</SectionTitle>
          </div>
          <FlowImage image="Design sys.png" alt="AdX design system foundations" className="mx-auto mt-10 max-w-[1098px] rounded-[8px]" />
        </div>
      </section>

      <section className="bg-[#554AE2] py-[72px] text-white md:py-[96px]">
        <div className={`${pageShell} space-y-[96px]`}>
          <div>
            <SectionTitle light>Publisher side</SectionTitle>
            <p className={`${bodyLight} mt-3 max-w-[1280px]`}>
              The publisher side supported the full journey from account access and app registration to verification, ad
              unit setup, and performance tracking.
            </p>
          </div>

          <ProductFeature
            title={publisherFeatures[0].title}
            body={publisherFeatures[0].body}
            image={publisherFeatures[0].image}
          />

          <ProductFeature
            title={publisherFeatures[1].title}
            body={publisherFeatures[1].body}
            image={publisherFeatures[1].image}
            wide
          />

          <ProductFeature
            title={publisherFeatures[2].title}
            body={publisherFeatures[2].body}
            image={publisherFeatures[2].image}
            wide
          />

          <ProductFeature
            title={publisherFeatures[3].title}
            body={publisherFeatures[3].body}
            image={publisherFeatures[3].image}
          />

          <ProductFeature
            title={publisherFeatures[4].title}
            body={publisherFeatures[4].body}
            image={publisherFeatures[4].image}
          />

          <div>
            <SectionTitle light>Admin side</SectionTitle>
            <p className={`${bodyLight} mt-3 max-w-[1280px]`}>
              The admin side gave internal teams a way to manage publisher accounts, monitor platform performance, and
              handle communication and operational workflows at scale.
            </p>
          </div>

          <ProductFeature title={adminFeatures[0].title} body={adminFeatures[0].body} image={adminFeatures[0].image} />

          <ProductFeature
            title={adminFeatures[1].title}
            body={adminFeatures[1].body}
            image={adminFeatures[1].image}
            wide
          />
        </div>
      </section>

      <section className={`${pageShell} py-[72px]`}>
        <SectionTitle>The Impact</SectionTitle>
        <Body className="mt-3 max-w-[1280px]">
          <p>
            The shift showed up in how the system started holding itself together as scale increased. What earlier
            depended on constant coordination and support began to run with far fewer touchpoints, even though the
            workflow itself remained just as demanding. Instead of progress being tracked across calls and follow-ups,
            more of that load moved into the product, making the system easier to operate without losing control.
          </p>
          <p className="mt-4">That shift showed up in both usage and business outcomes:</p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            {impactStats.map((stat) => (
              <li key={stat}>{stat}</li>
            ))}
          </ul>
        </Body>
      </section>

      <footer className="bg-[#F7F8FC]">
        <div className={`${pageShell} py-[58px]`}>
          <p className="max-w-[1280px] font-body text-[13px] font-normal leading-[1.6] text-[#555555] md:text-[14px]">
            All work showcased here is my own and created in collaboration with respective teams and organisations. Some
            details, visuals, and identifiers may have been adapted or anonymised for confidentiality. Please do not
            reproduce, reuse, or distribute any part of this work without prior permission.
          </p>
        <Link
          href="/"
            className="mt-5 inline-flex font-body text-[16px] font-semibold leading-none text-[#3B3B3B] underline underline-offset-4 transition hover:opacity-70 md:text-[18px]"
        >
          Return Home
        </Link>
        </div>
      </footer>
    </div>
  );
}
