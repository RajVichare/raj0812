import type { ReactNode } from "react";
import Link from "next/link";
import { SafeAssetImage } from "@/components/SafeAssetImage";

const pageShell = "mx-auto w-full max-w-[1560px] px-5 min-[480px]:px-6 md:px-12 lg:px-[60px]";
const sectionGap = "pt-[60px]";

const processItems = [
  {
    title: "Discovery",
    body: "Field visits, conversations, and shadowing teams to see how work happens on the ground"
  },
  {
    title: "Definition",
    body: "Breaking down workflows, defining key journeys, and aligning on what the product needed to support"
  },
  {
    title: "Decision",
    body: "Translating this into flows, requirements, and working closely with engineering to bring it to life"
  },
  {
    title: "Execution",
    body: "Supporting rollout, gathering feedback, and improving the system based on real usage"
  }
] as const;

const challengeColumns = [
  {
    title: "Business requirements",
    items: [
      "A sales platform that could improve consistency and seamlessness across order taking, collections, and outlet visits",
      "Better visibility into field activity and individual and product performance",
      "Higher adoption of the SFA app across sales reps",
      "A quick basis for planning, productivity, and sales tracking"
    ]
  },
  {
    title: "Field teams were dealing with",
    items: [
      "Everyday tasks were spread across manual processes and disconnected tools",
      "Core flows like order taking and collections were paper based and involved unnecessary friction",
      "There was limited support for decision-making in the field"
    ]
  }
] as const;

const directionColumns = [
  {
    title: "What the product needed to do",
    items: [
      "Make important tasks like order taking and payment collections easier to complete",
      "Give reps visibility into their performance and incentives",
      "Reduce reliance on disconnected tools and manual follow-ups",
      "Support communication and decision-making on-field"
    ]
  },
  {
    title: "Some process-driven features",
    items: [
      "A more guided order placement journey",
      "Visual summaries for sales, incentives, and outlet performance",
      "A notification system for timely action",
      "Better communication between reps, distributors, and managers",
      "A system designed to work clearly across different devices and field conditions"
    ]
  }
] as const;

const productBlocks = [
  {
    title: "Beat execution",
    body: "Route lists help sales reps manage their visits efficiently, ensuring every customer is reached with minimal manual effort.",
    image: "PS2.png",
    centered: false
  },
  {
    title: "Sales Calls",
    body: "Each beat includes prioritised tasks, detailed customer insights, and visual analytics to guide reps on what matters most each day.",
    image: "PS3.png",
    centered: false
  },
  {
    title: "Sales return",
    body: "Salespeople can quickly report returned items, tracking reasons and quantities to help resolve return issues promptly.",
    image: "PS4.png",
    centered: false
  },
  {
    title: "Attendance",
    body: "Check-ins are simplified to a single tap with GPS validation, ensuring transparency and saving reps’ time.",
    image: "PS5.png",
    centered: true
  },
  {
    title: "Bill collection",
    body: "The billing flow supports multiple payment methods per store, streamlining transactions and keeping financial records accessible.",
    image: "PS6.png",
    centered: false
  },
  {
    title: "Order placement",
    body: "The billing flow supports multiple payment methods per store, streamlining transactions and keeping financial records accessible.",
    image: "PS7.png",
    centered: false
  },
  {
    title: "Incentive dashboard",
    body: "Sales reps see real-time updates on their performance bonuses, motivating sustained high performance through clear visibility.",
    image: "PS8.png",
    centered: true
  },
  {
    title: "Help and support",
    body: "A self-service hub with FAQs, troubleshooting guides, and chat support minimises downtime and boosts rep productivity.",
    image: "PS9.png",
    centered: false
  }
] as const;

function mavicAsset(name: string) {
  return `/projects/mavic/${encodeURIComponent(name)}`;
}

function SectionTitle({
  title,
  centered = false
}: {
  title: string;
  centered?: boolean;
}) {
  return (
    <h2
      className={`font-display text-[24px] leading-[1.2] tracking-[-0.02em] text-[#191919] ${
        centered ? "text-center" : ""
      }`}
    >
      {title}
    </h2>
  );
}

function DesktopHeroCrop() {
  return (
    <SafeAssetImage
      src={mavicAsset("Hero.png")}
      alt="Mavic hero image"
      label="Hero.png"
      className="h-auto w-full max-w-[569px] object-contain"
      fallbackClassName="min-h-[420px]"
    />
  );
}

function MobileHeroCrop() {
  return (
    <div className="flex justify-center overflow-hidden lg:hidden">
      <SafeAssetImage
        src={mavicAsset("Hero2.png")}
        alt="Mavic hero image"
        label="Hero2.png"
        className="h-auto w-full max-w-[280px] object-contain"
        fallbackClassName="min-h-[420px]"
      />
    </div>
  );
}

function EditorialText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`font-body text-[18px] leading-[1.7] text-[#373737] ${className}`}>
      {children}
    </div>
  );
}

function BulletColumn({
  title,
  items
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div>
      <h3 className="font-body text-[18px] font-semibold leading-[1.4] text-[#191919]">{title}</h3>
      <ul className="mt-[2px] space-y-3 pl-5 font-body text-[18px] leading-[1.65] text-[#373737]">
        {items.map((item) => (
          <li key={item} className="list-disc">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ScreenFeature({
  title,
  body,
  image,
  centered
}: {
  title: string;
  body: string;
  image: string;
  centered: boolean;
}) {
  if (centered) {
    return (
      <div className="mt-[60px]">
        <div className="mx-auto hidden max-w-[760px] text-center lg:block">
          <h3 className="font-body text-[18px] font-semibold leading-[1.4] text-[#191919]">{title}</h3>
          <p className="font-body text-[18px] leading-[1.7] text-[#373737]">{body}</p>
        </div>

        <div className="mx-auto mt-[60px] max-w-[650px] pt-5 lg:pt-0">
          <SafeAssetImage
            src={mavicAsset(image)}
            alt={title}
            label={image}
            className="h-auto w-full object-contain"
            fallbackClassName="min-h-[420px]"
          />
        </div>

        <div className="mt-6 max-w-[640px] lg:hidden">
          <h3 className="font-body text-[18px] font-semibold leading-[1.4] text-[#191919]">{title}</h3>
          <p className="mt-2 font-body text-[18px] leading-[1.7] text-[#373737]">{body}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-[60px] lg:relative">
      <div className="lg:pr-[60px] xl:pr-[90px]">
        <SafeAssetImage
          src={mavicAsset(image)}
          alt={title}
          label={image}
          className="h-auto w-full object-contain lg:ml-auto lg:max-w-[78%] xl:max-w-[80%]"
          fallbackClassName="min-h-[520px]"
        />
      </div>

      <div className="mt-6 max-w-[640px] lg:absolute lg:left-0 lg:top-[56px] lg:z-10 lg:mt-0 lg:max-w-[520px] xl:left-[12px] xl:top-[72px] xl:max-w-[560px]">
        <div className="bg-white/0 lg:pr-6">
          <h3 className="font-body text-[18px] font-semibold leading-[1.4] text-[#191919]">{title}</h3>
          <p className="mt-2 font-body text-[18px] leading-[1.7] text-[#373737]">{body}</p>
        </div>
      </div>
    </div>
  );
}

export default function MavicCaseStudy() {
  return (
    <div className="bg-white text-[#3b3b3b]">
      <section className="bg-[#F9F7F5]">
        <div className={`${pageShell} pb-0 pt-10 md:py-[96px] lg:pb-[60px] lg:pt-[120px]`}>
          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_569px] lg:items-center lg:gap-[60px]">
            <div className="max-w-[640px] lg:pl-[120px]">
              <SafeAssetImage
                src={mavicAsset("Mavic Logo.png")}
                alt="Mavic logo"
                label="Mavic Logo.png"
                className="h-auto w-[128px] object-contain md:w-[160px]"
                fallbackClassName="min-h-[140px] max-w-[240px]"
              />

              <p className="mt-5 font-display text-[24px] leading-[1.25] text-[#191919] md:mt-10">
                FMCG Salesforce Automation
              </p>

              <EditorialText className="mt-1.5 space-y-3 font-normal md:mt-[12px] md:space-y-4">
                <p>
                  MAVIC is a field sales platform used by distributor sales reps to plan routes, place orders, and manage
                  day-to-day sales activity.
                </p>
                <p>
                  When we started the project, these workflows were spread across vendors, tools and processes, making it
                  harder for teams to stay organised.
                </p>
                <p>
                  The focus was to bring structure to this, creating an application that made everyday tasks simpler,
                  improved visibility, and supported better on-field decisions.
                </p>
              </EditorialText>

              <div className="mt-3 md:mt-4">
                <SafeAssetImage
                  src={mavicAsset("TCPL logo.png")}
                  alt="Tata Consumer Products logo"
                  label="TCPL logo.png"
                  className="h-auto w-[220px] max-w-full object-contain md:w-[342px]"
                  fallbackClassName="min-h-[150px] max-w-[360px]"
                />
              </div>
            </div>

            <div className="hidden lg:flex lg:items-end lg:justify-center lg:pr-[120px]">
              <DesktopHeroCrop />
            </div>

            <div className="mt-3 md:mt-0">
              <MobileHeroCrop />
            </div>
          </div>
        </div>
      </section>

      <section className={`${pageShell} pt-[70px]`}>
        <div className="text-left lg:text-center">
          <SectionTitle title="Process and Timeline" />
        </div>

        <div className="mt-8 lg:mt-[44px] grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-[60px]">
          {processItems.map((item) => (
            <div key={item.title}>
              <h3 className="font-body text-[18px] font-semibold leading-[1.4] text-[#191919]">{item.title}</h3>
              <p className="mt-3 font-body text-[18px] leading-[1.65] text-[#373737]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${pageShell} ${sectionGap}`}>
        <div className="mx-auto max-w-[1320px] lg:px-[60px]">
          <SafeAssetImage
            src={mavicAsset("Timeline.svg")}
            alt="Process timeline"
            label="Timeline.svg"
            className="h-auto w-full object-contain"
            fallbackClassName="min-h-[240px]"
          />
        </div>
      </section>

      <section className="mt-[60px] bg-[#F9F7F5] py-12 md:py-[48px]">
        <div className={pageShell}>
          <div className="rounded-[32px] bg-[#F9F7F5] px-0 py-0 md:px-0 md:py-0 lg:px-[108px] lg:py-[48px]">
            <SectionTitle title="Cross Functional Collaboration" centered />

            <EditorialText className="mt-[10px] mx-auto max-w-[860px] text-center">
              <p>
                This project involved working across multiple teams, both internal and external, as part of the day-to-day
                workflow over eight months. The map below shows how these collaborations fit into the project as it evolved.
              </p>
            </EditorialText>

            <div className="mx-auto mt-[60px] max-w-[820px]">
              <SafeAssetImage
                src={mavicAsset("Cross.svg")}
                alt="Cross functional collaboration"
                label="Cross.svg"
                className="h-auto w-full object-contain"
                fallbackClassName="min-h-[360px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`${pageShell} ${sectionGap}`}>
        <div className="text-left lg:text-center">
          <SectionTitle title="The Challenge" />
        </div>

        <EditorialText className="mt-5 mx-auto max-w-[1320px] space-y-4 text-left lg:text-center">
          <p>
            MAVIC sat at the intersection of two realities. On one side, the business needed stronger visibility, higher
            adoption, and better sales productivity. On the other, field reps were still working through disconnected
            tools, manual processes, and flows that made everyday tasks slower and harder.
          </p>
          <p>
            The problem was not just usability or business performance, but also the gap between how the system was
            expected to work and how work was actually happening on the ground. Bringing those two closer together became
            the real challenge of the project.
          </p>
        </EditorialText>

        <div className="mt-[60px] grid gap-10 lg:grid-cols-2 lg:gap-[60px]">
          {challengeColumns.map((column) => (
            <BulletColumn key={column.title} title={column.title} items={column.items} />
          ))}
        </div>

        <div className="mx-auto mt-[60px] max-w-[1320px] lg:px-[60px]">
          <SafeAssetImage
            src={mavicAsset("Research.png")}
            alt="Research"
            label="Research.png"
            className="h-auto w-full object-contain"
            fallbackClassName="min-h-[360px]"
          />
        </div>
      </section>

      <section className={`${pageShell} ${sectionGap}`}>
        <EditorialText className="mx-auto max-w-[1180px] text-left lg:text-center">
          <p>
            Once the problem was clear, the work shifted from understanding field realities to translating them into a
            product that could support day-to-day sales activity more reliably. The focus was on making the app easier to
            read, easier to use, and more useful in the field.
          </p>
        </EditorialText>

        <div className="mt-[60px] grid gap-10 lg:grid-cols-2 lg:gap-[60px]">
          {directionColumns.map((column) => (
            <BulletColumn key={column.title} title={column.title} items={column.items} />
          ))}
        </div>

        <div className="mx-auto mt-[60px] max-w-[760px]">
          <SafeAssetImage
            src={mavicAsset("IA.png")}
            alt="Information architecture"
            label="IA.png"
            className="h-auto w-full object-contain"
            fallbackClassName="min-h-[320px]"
          />
        </div>
      </section>

      <section className={`${pageShell} ${sectionGap}`}>
        <SectionTitle title="The Design" centered />

        <div className="mt-[60px] space-y-[60px]">
          <div className="mx-auto max-w-[1320px] lg:px-[60px]">
            <SafeAssetImage
              src={mavicAsset("DS1.png")}
              alt="Design system 1"
              label="DS1.png"
              className="mx-auto h-auto w-full max-w-[920px] object-contain"
              fallbackClassName="min-h-[320px]"
            />
          </div>

          <div className="mx-auto max-w-[1320px] lg:px-[60px]">
            <SafeAssetImage
              src={mavicAsset("DS2.png")}
              alt="Design system 2"
              label="DS2.png"
              className="mx-auto h-auto w-full max-w-[920px] object-contain"
              fallbackClassName="min-h-[320px]"
            />
          </div>

          <div className="mx-auto max-w-[1320px] lg:px-[60px]">
            <SafeAssetImage
              src={mavicAsset("DS3.png")}
              alt="Design system 3"
              label="DS3.png"
              className="mx-auto h-auto w-full object-contain"
              fallbackClassName="min-h-[320px]"
            />
          </div>
        </div>
      </section>

      <section
        className="mt-[60px] bg-[#f8f4f6]"
        style={{
          backgroundImage: `url(${mavicAsset("pd bg.png")})`,
          backgroundPosition: "center",
          backgroundRepeat: "repeat-y",
          backgroundSize: "cover"
        }}
      >
        <div className={`${pageShell} py-[60px]`}>
          <SectionTitle title="Product screens" centered />

          <div className="mt-[60px] px-0 lg:px-[120px]">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(280px,420px)_minmax(320px,520px)] lg:justify-center lg:gap-[18px] xl:grid-cols-[360px_minmax(360px,520px)]">
              <EditorialText className="order-2 max-w-[480px] lg:order-1 lg:relative lg:z-10 lg:pt-6">
                <p>
                  Mavic, designed for TCPL&apos;s field salesforce across India, replaces a low-adoption legacy app with a
                  sleek, human-centered system. It streamlines every stage of a Direct Sales Representative&apos;s day, from
                  beat planning and sales calls, to order placement, billing, incentive tracking, and support, empowering
                  reps with actionable data and smooth workflows.
                </p>
              </EditorialText>

              <div className="order-1 lg:order-2 lg:-ml-6 xl:-ml-10">
                <SafeAssetImage
                  src={mavicAsset("PS1.png")}
                  alt="Product screen overview"
                  label="PS1.png"
                  className="h-auto w-full object-contain"
                  fallbackClassName="min-h-[320px]"
                />
              </div>
            </div>
          </div>

          <div className="mt-[60px] px-0 lg:px-[120px]">
            {productBlocks.map((block) => (
              <ScreenFeature
                key={block.title}
                title={block.title}
                body={block.body}
                image={block.image}
                centered={block.centered}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={`${pageShell} pt-[80px]`}>
        <div className="mx-auto max-w-[1220px] lg:px-[60px]">
          <SectionTitle title="What was unique about this experience?" />

          <EditorialText className="mt-5 space-y-4">
            <p>
              What stood out in this project was the time TCPL invested in getting the foundation right. That space
              allowed us to bring structure to a fragmented workflow and shape a market-ready product.
            </p>
            <p>
              That clarity carried through the build, eventually turning the application into a new industry standard for
              sales force automation tools.
            </p>
            <p>
              The work was recognised with the <strong>IBDA Best Project award for 2025.</strong>
            </p>
          </EditorialText>
        </div>
      </section>

      <section className="pt-[80px]">
        <SafeAssetImage
          src={mavicAsset("Footer Image.png")}
          alt="Footer image"
          label="Footer Image.png"
          className="h-auto w-full object-cover"
          fallbackClassName="min-h-[320px] rounded-none border-x-0"
        />
      </section>

      <section className={`${pageShell} py-[60px]`}>
        <div className="mx-auto max-w-[1220px] lg:px-[60px]">
          <p className="font-body text-[18px] leading-[1.7] text-[#5c5651]">
            All work showcased here is my own and created in collaboration with respective teams and organisations. Some
            details, visuals, and identifiers may have been adapted or anonymised for confidentiality. Please do not
            reproduce, reuse, or distribute any part of this work without prior permission.
          </p>

          <div className="mt-8">
            <Link href="/" className="font-body text-[18px] font-semibold underline underline-offset-4">
              Back home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
