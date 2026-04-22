import type { ReactNode } from "react";
import Link from "next/link";
import { SafeAssetImage } from "@/components/SafeAssetImage";

const pageShell = "mx-auto w-full max-w-[1560px] px-5 min-[480px]:px-6 md:px-12 lg:px-[60px]";
const textRail = "mx-auto w-full max-w-[1200px] px-5 min-[480px]:px-6 md:px-12 xl:px-0";
const bodyText = "font-body text-[16px] font-normal leading-[1.65] text-[#3B3B3B] md:text-[18px] md:leading-[1.7]";
const subtitleText = "font-body text-[16px] font-semibold leading-[1.4] text-[#3B3B3B] md:text-[18px]";

function phonePeAsset(name: string) {
  return `/projects/PhonePe/${encodeURIComponent(name)}`;
}

function SectionTitle({ title, className = "" }: { title: string; className?: string }) {
  return (
    <h2
      className={`font-display text-[20px] font-medium leading-[1.2] tracking-normal text-[#3B3B3B] md:text-[24px] ${className}`}
    >
      {title}
    </h2>
  );
}

function Body({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`${bodyText} ${className}`}>{children}</div>;
}

function PlainImage({
  image,
  alt,
  className = "h-auto w-full object-contain",
  fallbackClassName = "min-h-[220px]"
}: {
  image: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
}) {
  return (
    <SafeAssetImage
      src={phonePeAsset(image)}
      alt={alt}
      label={image}
      className={className}
      fallbackClassName={fallbackClassName}
    />
  );
}

function SectionCopy({
  title,
  children,
  className = ""
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`${textRail} ${className}`}>
      <SectionTitle title={title} />
      <Body className="mt-3">{children}</Body>
    </section>
  );
}

function PlanningIconBlock({
  image,
  caption,
  className = ""
}: {
  image: string;
  caption: string;
  className?: string;
}) {
  return (
    <div className={`mx-auto text-center ${className}`}>
      <PlainImage image={image} alt={caption} className="mx-auto h-[224px] w-[291px] object-contain" />
      <p className={`${bodyText} mx-auto mt-6 max-w-[720px] text-center md:whitespace-nowrap`}>{caption}</p>
    </div>
  );
}

function IterationBlock({
  title,
  body,
  image,
  worked,
  didnt,
  outcomeGap = "mt-[60px]"
}: {
  title: string;
  body: string;
  image: string;
  worked: string;
  didnt?: string;
  outcomeGap?: string;
}) {
  return (
    <div>
      <div className="grid items-center gap-8 lg:grid-cols-[720px_minmax(0,1fr)] lg:gap-[60px]">
        <PlainImage image={image} alt={title} className="h-auto w-full max-w-[720px] object-contain" />
        <div>
          <h3 className={subtitleText}>{title}</h3>
          <p className={bodyText}>{body}</p>
        </div>
      </div>

      <div className={`${outcomeGap} grid gap-[60px] ${didnt ? "md:grid-cols-2" : ""}`}>
        <div>
          <p className={subtitleText}>What worked:</p>
          <p className={bodyText}>{worked}</p>
        </div>
        {didnt ? (
          <div>
            <p className={subtitleText}>What didn&apos;t work:</p>
            <p className={bodyText}>{didnt}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function P1MappedLayout() {
  const annotations = [
    {
      top: 105,
      text: "Key performance indicators showing total headcount, budget utilisation, and approval status across all business units."
    },
    {
      top: 516,
      text: "Line graph displaying planned vs. actual headcount progression throughout the planning year with monthly breakdowns."
    },
    {
      top: 882,
      text: "Pie chart visualising headcount allocation across different departments, enabling quick identification of resource concentration"
    },
    {
      top: 1085,
      text: "Detailed breakdown of pending, approved, and rejected requests with department-wise categorisation."
    }
  ] as const;

  return (
    <>
      <div className="relative -mr-5 min-[480px]:-mr-6 md:hidden">
        <div className="w-[68%]">
          <PlainImage
            image="P1.png"
            alt="Dashboard overview"
            className="h-auto w-full object-contain"
            fallbackClassName="min-h-[520px]"
          />
        </div>
        <div className="absolute right-0 top-0 h-full w-[46%]">
          {annotations.map((annotation) => (
            <p
              key={annotation.top}
              className="absolute right-0 w-full rounded-l-[8px] bg-[#F9F8FC]/95 py-2 pl-2 pr-0 font-body text-[12px] font-normal leading-[1.25] text-[#3B3B3B]"
              style={{ top: `${(annotation.top / 1254) * 100}%` }}
            >
              {annotation.text}
            </p>
          ))}
        </div>
      </div>

      <div className="hidden overflow-x-auto md:block">
        <div className="relative flex w-max items-start gap-10 md:gap-[60px]">
          <PlainImage
            image="P1.png"
            alt="Dashboard overview"
            className="h-[1254px] w-[620px] max-w-none object-contain"
            fallbackClassName="min-h-[700px]"
          />
          <div className="relative h-[1254px] w-[320px] md:w-[380px]">
            {annotations.map((annotation) => (
              <p
                key={annotation.top}
                className="absolute left-0 max-w-[360px] font-body text-[16px] font-normal leading-[1.55] text-[#3B3B3B] md:text-[18px]"
                style={{ top: annotation.top }}
              >
                {annotation.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function NonStackingPair({
  left,
  right,
  leftAlt,
  rightAlt
}: {
  left: string;
  right: string;
  leftAlt: string;
  rightAlt: string;
}) {
  return (
    <div className="overflow-x-auto">
      <div className="grid min-w-[760px] grid-cols-2 gap-5">
        <PlainImage image={left} alt={leftAlt} />
        <PlainImage image={right} alt={rightAlt} />
      </div>
    </div>
  );
}

export default function PhonePeCaseStudy() {
  return (
    <div className="bg-white text-[#3B3B3B]">
      <section className="bg-[#F9F8FC]">
        <div className={`${pageShell} py-[60px] lg:py-[120px]`}>
          <div className="mx-auto grid max-w-[1200px] items-center gap-[60px] lg:grid-cols-[minmax(320px,520px)_minmax(0,1fr)]">
            <PlainImage
              image="Hero.png"
              alt="PhonePe headcount planning dashboard"
              className="h-auto w-full object-contain"
              fallbackClassName="min-h-[260px]"
            />
            <div>
              <p className="font-body text-[14px] font-semibold uppercase tracking-[0.22em] text-[#873AE3]">
                PhonePe
              </p>
              <h1 className="mt-3 font-display text-[20px] font-medium leading-[1.2] tracking-normal text-[#3B3B3B] md:text-[24px]">
                HEADCOUNT Pro
              </h1>
              <Body className="mt-3">
                <p>
                  At PhonePe, we built an internal platform to support annual operating planning across teams, bringing
                  managers, planners, and leadership into a shared system.
                </p>
                <p>
                  The work sat inside a fast-moving business where planning involved multiple stakeholders, shifting
                  inputs, and constant alignment. The focus was on creating a platform teams could rely on for planning,
                  decision-making, and visibility as the business continued to evolve.
                </p>
              </Body>
              <p className={`${subtitleText} mt-6`}>Project Duration: 6 months</p>
            </div>
          </div>
        </div>
      </section>

      <SectionCopy title="The Challenge" className="pt-[60px]">
        <p>
          Planning at PhonePe was business-critical, but the process was still spread across spreadsheets, presentations,
          and siloed conversations.
        </p>
        <p>
          As planning moved across teams and business units, information became harder to consolidate, reviews slowed
          down, and leadership had limited visibility into how priorities and dependencies were changing.
        </p>
        <p>
          The challenge was to turn that fragmented process into a system teams could easily work through. It needed to
          bring structure to planning without making it heavier, and support alignment across functions with enough
          flexibility.
        </p>
      </SectionCopy>

      <SectionCopy title="Understanding the planning process" className="pt-[60px]">
        <p>
          Planning worked in two connected layers: an annual plan set the baseline, and in-year changes continuously
          reshaped it. Annual planning establishes priorities, headcount, and resource assumptions for the year, while
          ongoing workforce planning has to absorb shifting business needs and keep hiring plans aligned to cost and
          capacity.
        </p>
      </SectionCopy>

      <section className={`${textRail} pt-[60px]`}>
        <div className="grid items-center gap-[60px] lg:grid-cols-[minmax(0,1fr)_520px]">
          <div>
            <h3 className={subtitleText}>Initial planning</h3>
            <p className={bodyText}>
              At the start of the financial year, teams aligned on headcount, budgets, and business priorities to create
              the initial plan. This was less about approvals in sequence and more about getting HR, finance, and
              business teams to agree on a shared baseline for the year ahead. That baseline became the reference point
              for everything that followed. Annual planning is commonly framed this way: a collaborative process for
              setting targets, allocating resources, and connecting strategy to execution.
            </p>
          </div>
          <PlanningIconBlock
            image="Initial.svg"
            caption="Sets the initial plan for headcount, cost, and priorities."
          />
        </div>
      </section>

      <section className={`${textRail} pt-[60px]`}>
        <h3 className={subtitleText}>Revised planning</h3>
        <p className={bodyText}>
          Once the year was underway, planning became more dynamic. New asks started at team level, moved upward for
          alignment and approval, and then came back down into hiring execution. This is where the product had to do more
          than record requests — it had to show how the same need changed as it moved across managers, HR, and
          leadership, while keeping the revised plan in sync with the original baseline. Modern workforce planning
          systems explicitly support this kind of continuous adjustment, reconciliation, and scenario-driven change over
          time.
        </p>
        <div className="mt-8 text-center">
          <PlainImage
            image="Revised.svg"
            alt="Revised planning"
            className="mx-auto h-auto w-full max-w-[800px] object-contain"
          />
          <p className={`${bodyText} mx-auto mt-6 max-w-[800px] text-center`}>
            From team-level need to approval and hiring action.
          </p>
        </div>
      </section>

      <section className="pt-[60px] md:pt-[120px]">
        <div className={textRail}>
          <SectionTitle title="Planning needs across teams" className="text-center" />
        </div>
        <div className={`${textRail} mt-[60px] space-y-[60px]`}>
          <PlainImage image="1.2.png" alt="Planning persona one" />
          <PlainImage image="1.3.png" alt="Planning persona two" />
          <PlainImage image="1.4.png" alt="Planning persona three" />
        </div>
      </section>

      <section className="mt-[60px] bg-[#F9F8FC] py-[60px]">
        <div className={textRail}>
          <SectionTitle title="Structuring the product" className="text-center" />
          <Body className="mx-auto mt-3 max-w-[980px] text-center">
            <p>The information architecture was designed to serve the 3 user types while maintaining logical data flow:</p>
          </Body>
          <div className="mt-[60px] grid items-end gap-[60px] md:grid-cols-3">
            {[
              { title: "Planning Headcount", image: "Planner - Plan HC.png" },
              { title: "Raise Request", image: "Planner - Raise Request.png" },
              { title: "Tracking Request", image: "Planner - track request.png" }
            ].map((item) => (
              <div key={item.image}>
                <PlainImage image={item.image} alt={item.title} />
                <p className={`${subtitleText} mt-6 text-center`}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${textRail} pt-[60px] md:pt-[120px]`}>
        <SectionTitle title="Product Iterations" className="text-center" />
        <Body className="mx-auto mt-3 max-w-[980px] text-center">
          <p>
            Each iteration responded to a different version of the problem, from managing requests, to understanding plan
            impact, to making the system usable across a wider group of stakeholders.
          </p>
        </Body>

        <div className="mt-[60px] space-y-[60px] md:space-y-[120px]">
          <IterationBlock
            title="Approach 1: Request-led model"
            image="first 1.png"
            body="This version treated the problem as an approval flow. The screen was built around incoming requests, with approvers reviewing roles, departments, and status in a structured list."
            worked="It made the ad hoc process easier to manage. Requests were visible, sortable, and easier to act on than before."
            didnt="It solved for movement, but not enough for judgment. Approvers could process a request, but didn’t have enough context to understand what that request meant for the larger plan."
          />
          <IterationBlock
            title="Approach 2: Plan-led model"
            image="Second 1.png"
            body="This version shifted the centre of gravity from the request to the plan itself. Instead of only showing what had come in, it tried to show how changes affected headcount, cost, and the annual baseline."
            worked="It gave people a much better basis for decision-making. A request could now be read against the plan, not in isolation, and the financial impact was much easier to understand."
            didnt="It became harder to hold together once multiple people were working in it at the same time. Draft changes, approvals, and plan updates started interfering with each other, and the experience became heavier than it needed to be."
          />
          <IterationBlock
            title="Final Iteration: Simplified User Experience"
            image="Final.png"
            body="This version simplified the experience and made it clearer who needed to see what. The screen moved away from showing everything at once, and instead focused on making changes, plan movement, and comparisons easier to read."
            worked="It was easier to understand, lighter to use, and worked better across different kinds of users. The visual summaries helped people read change more quickly, while the structure made it easier to control how much information each role needed to see."
          />
        </div>
      </section>

      <section className="mt-[60px] bg-[#F9F8FC] py-[60px]">
        <div className={textRail}>
        <SectionTitle title="Product Screens" className="text-center" />

        <div className="mt-[60px]">
          <div className="mb-6">
            <h3 className={subtitleText}>Dashboard Overview</h3>
            <p className={bodyText}>Annual planning dashboard with multiple data visualisation sections</p>
          </div>
          <P1MappedLayout />
        </div>

        <div className="mt-[60px] grid items-center gap-6 md:mt-[120px] lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-[60px]">
          <PlainImage image="P2-Planning.png" alt="Planning hub" />
          <div>
            <h3 className={subtitleText}>Planning Hub</h3>
            <p className={bodyText}>Business Unit level planning interface with departmental breakdown</p>
          </div>
        </div>

        <div className="mt-[60px] md:mt-[120px]">
          <NonStackingPair
            left="Role and planning 1.png"
            right="Role and planning 2.png"
            leftAlt="Role planning screen one"
            rightAlt="Role planning screen two"
          />
          <div className="mx-auto mt-6 max-w-[760px] text-center">
            <h3 className={subtitleText}>Role Planning & Request Creation</h3>
            <p className={bodyText}>
              Role addition workflow- Allowing managers to specify position details, compensation bands, and
              justification.
            </p>
          </div>
        </div>

        <div className="mt-[60px] grid items-center gap-6 md:mt-[120px] lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-[60px]">
          <p className={`${bodyText} order-2 lg:order-1`}>
            Role addition workflow- Allowing managers to specify position details, compensation bands, and justification.
          </p>
          <div className="order-1 lg:order-2">
            <PlainImage image="Role Addition.png" alt="Role addition workflow" />
          </div>
        </div>

        <div className="mt-[60px] grid items-center gap-6 md:mt-[120px] lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-[60px]">
          <PlainImage image="P- Track request. .png" alt="Request tracking view" />
          <p className={bodyText}>
            Real-time view of all submitted requests with status tracking, timeline visualisation, and priority
            indicators. Enables managers to monitor approval progress without follow-ups.
          </p>
        </div>

        <div className="mt-[60px] md:mt-[120px]">
          <NonStackingPair
            left="LEadership approval 1.png"
            right="LEadership approval 2.png"
            leftAlt="Leadership approval list"
            rightAlt="Leadership approval detail"
          />
          <div className="mt-6">
            <h3 className={subtitleText}>Leadership Approval Workflow</h3>
            <p className={bodyText}>
              This dashboard shows all pending approvals with colour-coded indicators for quick status at a glance.
              Selecting a request opens a detailed view where leaders can review position info, add comments, and approve
              or reject efficiently, ensuring clear decisions and accountability in one place.
            </p>
          </div>
        </div>
        </div>
      </section>

      <SectionCopy title="Results & Impact" className="py-[60px]">
        <p>
          The shift from scattered workflows to a structured planning system changed how teams approached hiring
          decisions.
        </p>
        <p>
          Planning cycles became much faster, reducing from 6 weeks to 3–4 weeks, with teams able to move from alignment
          to execution with far less back-and-forth. Data consolidation, which previously took close to 80 hours each
          cycle, was reduced to around 20 hours by bringing everything into a single system.
        </p>
        <p>
          More importantly, the product was quickly adopted across teams. Within the first quarter, all users had moved
          onto the platform, with minimal onboarding required. Managers and HRBPs were able to start using the system
          without extensive training, which was a strong signal that the product aligned well with how they already
          worked.
        </p>
      </SectionCopy>

      <section className="bg-[#F9F8FC] py-[60px]">
        <div className={textRail}>
          <p className={bodyText}>
            All work showcased here is my own and created in collaboration with respective teams and organisations. Some
            details, visuals, and identifiers may have been adapted or anonymised for confidentiality. Please do not
            reproduce, reuse, or distribute any part of this work without prior permission.
          </p>

          <div className="mt-8">
            <Link href="/" className={`${subtitleText} underline underline-offset-4`}>
              Back home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
