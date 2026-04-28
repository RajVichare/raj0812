import type { Metadata } from "next";
import { DownloadCvButton } from "@/components/DownloadCvButton";
import { ResumeContactActions } from "@/components/ResumeContactActions";
import { StructuredData } from "@/components/StructuredData";
import { resumeContent } from "@/data/resume";
import { absoluteUrl, buildMetadata } from "@/data/seo";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = buildMetadata({
  title: "Raj Vichare Resume | Product Manager & Design-first Builder",
  description:
    "View the resume of Raj Vichare, a product manager and design-first builder working across product strategy, UX, systems, and execution.",
  path: "/about/resume",
  type: "profile",
  keywords: [
    "Raj Vichare Resume",
    "Raj Vivek Vichare Resume",
    "Product Manager Resume",
    "Design-first Builder Resume",
    "Bangalore Product Manager"
  ]
});

function SectionShell({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-[#ebe7e2]">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 min-[480px]:px-6 md:px-12 md:py-14 lg:px-20 xl:grid-cols-[220px_minmax(0,1fr)] xl:gap-[60px] xl:px-[120px]">
        <div>
          <p className="font-body text-[12px] font-semibold uppercase tracking-[0.22em] text-[#6f6a63]">{label}</p>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export default function ResumePage() {
  const resumeStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Raj Vichare Resume",
    description: metadata.description,
    url: absoluteUrl("/about/resume"),
    mainEntity: {
      "@type": "Person",
      name: siteContent.fullName,
      jobTitle: ["Product Manager", "Product Builder"],
      sameAs: [siteContent.linkedIn],
      address: {
        "@type": "PostalAddress",
        addressLocality: resumeContent.location,
        addressCountry: siteContent.country
      }
    }
  };

  return (
    <div className="bg-white text-[#3B3B3B]">
      <StructuredData data={resumeStructuredData} />

      <section className="w-full border-b border-[#ebe7e2] bg-[#F6F4F1]">
        <div className="mx-auto max-w-[1440px] px-5 pb-12 pt-[56px] min-[480px]:px-6 md:pb-14 md:pt-[64px] md:px-12 lg:px-20 xl:px-[120px] xl:pb-[72px]">
          <p className="font-body text-[12px] font-semibold uppercase tracking-[0.22em] text-[#6f6a63]">Resume</p>
          <div className="mt-5 max-w-[1120px]">
            <h1 className="font-display text-[34px] leading-[1.05] md:text-[52px] xl:text-[64px]">{resumeContent.name}</h1>
            <p className="mt-6 max-w-[1060px] font-body text-[17px] leading-[1.75] md:text-[19px] md:leading-[1.75]">
              {resumeContent.summary}
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-[#3B3B3B]/14 pt-6">
            <p className="font-body text-[14px] leading-none text-[#6f6a63]">{resumeContent.location}</p>
            <ResumeContactActions
              location="resume_page_header"
              phone={resumeContent.phone}
              email={resumeContent.email}
              linkedInLabel={resumeContent.linkedInLabel}
              linkedInUrl={resumeContent.linkedInUrl}
            />
          </div>
        </div>
      </section>

      <SectionShell label="Professional Experience">
        <div className="space-y-12">
          {resumeContent.experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="border-b border-[#ebe7e2] pb-10 last:border-b-0 last:pb-0">
              <div>
                <h2 className="font-display text-[24px] leading-none md:text-[28px]">{item.company}</h2>
                <p className="mt-2 font-body text-[15px] italic leading-[1.6] text-[#6f6a63] md:text-[16px]">
                  {item.context}
                </p>
                <p className="mt-4 font-body text-[16px] font-semibold leading-[1.45]">{item.role}</p>
                <p className="mt-1 font-body text-[14px] leading-[1.45] text-[#6f6a63]">{item.period}</p>
                <p className="mt-1 font-body text-[14px] leading-[1.45] text-[#6f6a63]">{item.location}</p>
              </div>

              <div className="mt-6 space-y-4 font-body text-[16px] leading-[1.75] md:text-[17px]">
                {item.bullets.map((bullet) => (
                  <p key={bullet}>{bullet}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="Education">
        <div className="space-y-8">
          {resumeContent.education.map((item) => (
            <article key={`${item.program}-${item.institution}`} className="flex flex-col gap-2 border-b border-[#ebe7e2] pb-8 last:border-b-0 last:pb-0 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="font-body text-[18px] font-semibold leading-[1.45] md:text-[20px]">{item.program}</h2>
                <p className="mt-1 font-body text-[16px] leading-[1.65] text-[#6f6a63]">{item.institution}</p>
              </div>
              <p className="shrink-0 font-body text-[15px] leading-[1.45] text-[#6f6a63] md:text-right">{item.year}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="Additional Information">
        <div className="space-y-6">
          {resumeContent.additionalInformation.map((item) => (
            <div key={item.label} className="grid gap-2 md:grid-cols-[140px_minmax(0,1fr)] md:gap-6">
              <p className="font-body text-[15px] font-semibold leading-[1.45]">{item.label}</p>
              <p className="font-body text-[16px] leading-[1.75] text-[#3B3B3B] md:text-[17px]">{item.value}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <section className="w-full bg-[#F6F4F1]">
        <div className="mx-auto flex min-h-[120px] max-w-[1440px] items-center justify-center px-5 py-8 min-[480px]:px-6 md:px-12 lg:px-20 xl:px-[120px]">
          <DownloadCvButton href={siteContent.resumeFile} location="resume_page_bottom_strip" />
        </div>
      </section>
    </div>
  );
}
