import type { Metadata } from "next";
import Image from "next/image";
import { DownloadCvButton } from "@/components/DownloadCvButton";
import { HoverVideoLink } from "@/components/HoverVideoLink";
import { HomeFooter } from "@/components/HomeFooter";
import { StructuredData } from "@/components/StructuredData";
import { absoluteUrl, buildMetadata } from "@/data/seo";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = buildMetadata({
  title: "About Raj Vichare | Product, Design & Systems",
  description:
    "Learn more about Raj Vichare’s journey across IT, design, business, product execution, leadership, and personal interests in ecology, systems, and building.",
  path: "/about",
  type: "profile",
  keywords: [
    "About Raj Vichare",
    "Raj Vichare Product Manager",
    "Product execution",
    "Systems thinking",
    "Design thinking",
    "Bangalore Product Manager",
    "India Product Manager"
  ]
});

const focusAreas = [
  {
    title: "Design Lens",
    body: "I approach problems through the lens of usability and clarity. My design background helps me break down messy experiences, understand where people struggle, and shape solutions that feel intuitive in actual use."
  },
  {
    title: "Product Clarity",
    body: "A lot of my work starts before the solution is clear, where I’m figuring out what the real problem is, how it breaks down into flows and decisions, and what needs to be prioritised so teams can start building with clarity."
  },
  {
    title: "Execution",
    body: "I work closely with engineering, stakeholders, and business teams to take ideas through to release, writing requirements, managing expectations, resolving trade-offs, and staying close to execution, so the original intent does not get lost."
  },
  {
    title: "Real-world Usability",
    body: "I’m most interested in products that hold up in the real world, not only something that looks good on prototype, but something practical, scalable, and usable by the people who rely on it every day."
  }
];

const conservationLinks = {
  coral:
    "Duarte Farrajota Ramos, probably my favourite conservationist, and his organisation Mossy Earth started this coral rehabilitation project in Nusa Penida, Indonesia, in an attempt to rebuild reef ecosystems that had been reduced to unstable fields of rubble. Once coral reefs collapse into this state, recovery becomes extremely difficult. The seabed turns into shifting debris, constantly disturbed by currents, which prevents new coral from attaching and growing. What remains is a system that has lost the basic conditions required to regenerate. The team introduced metal hexagonal structures, anchored to the seabed to stabilise the rubble, and attached naturally broken coral fragments onto them using zip ties. They used coral fragments already present in the environment, given a chance to survive. What stands out is how thoughtfully these structures are designed. They balance stability with permeability, allowing water flow, light, and movement while creating a surface for coral to take hold. Over time, they stop reading as external objects and begin to function as part of the reef itself. As the base stabilised, the system began to shift. Coral started growing, fish returned, and the structures became active habitats. The change wasn’t forced at every level, but triggered by introducing the right conditions at the foundation. The project shows how a well-placed intervention, designed with an understanding of how the system behaves, can unlock recovery without trying to control every outcome.",
  wolves:
    "Wolves and other large predators had been hunted to extinction in Yellowstone National Park, which led to herbivore populations overgrazing large parts of the landscape. Young willow and aspen were especially affected, preventing forests from regenerating. Riverbanks weakened, biodiversity dropped, and entire habitats began to thin out. In 1995, conservationists brought wolves back in a move that, at the time, felt less like careful conservation and more cuckoo, reintroducing a top predator into a system that had long forgotten how to deal with one. The change wasn’t just in reforestation numbers, but in behaviour. Elk began avoiding open valleys and river edges where they were more exposed, which gave vegetation the space to recover. As willow and aspen returned, so did beavers, which rely on them for food and dam building. That created wetlands, which then supported fish, amphibians, and birds. Over time, species like foxes, badgers, eagles, ravens, and even bears saw indirect benefits. Studies have shown that more than 50 species were positively impacted as this balance came back into place. What I find most interesting is that this wasn’t a series of controlled fixes. It was a single reintroduction that allowed the ecosystem to rebalance itself naturally, with one change setting off a chain of recovery across the entire system.",
  house:
    "Stefano Ianiro, a wildlife photographer, set up a home in Québec and gradually turned the surrounding land into a space that could support local wildlife. Over the course of three years, he documented the animals that began visiting when he quietly shaped the environment to make it more hospitable. Small interventions like water sources, natural shelters, and preserving vegetation created conditions where animals felt safe enough to return on their own terms."
};

export default function AboutPage() {
  const profileStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "About Raj Vichare",
    description: metadata.description,
    url: absoluteUrl("/about"),
    mainEntity: {
      "@type": "Person",
      name: siteContent.fullName,
      jobTitle: ["Product Manager", "Product Builder"],
      sameAs: [siteContent.linkedIn]
    }
  };

  return (
    <div className="bg-[#FFFFFF] text-[#3B3B3B]">
      <StructuredData data={profileStructuredData} />
      <section className="w-full border-b border-[#e9e3db] bg-[#F6F4F1]">
        <div className="mx-auto flex min-h-[79px] max-w-[1440px] items-center justify-between gap-3 px-5 py-5 min-[480px]:gap-4 min-[480px]:px-6 md:gap-5 md:px-12 lg:px-20 xl:px-[120px]">
          <p className="min-w-0 flex-1 text-left font-body text-[14px] leading-[1.35] min-[480px]:text-[15px] md:text-[18px] md:leading-[1.4]">
            You can download my CV here if you&apos;re looking for a more formal overview.
          </p>
          <DownloadCvButton href={siteContent.resumeFile} />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-0 pt-[60px] min-[480px]:px-6 md:px-12 lg:px-20 xl:px-[120px]">
        <div className="grid gap-10 xl:grid-cols-[561px_minmax(0,729px)] xl:gap-[60px]">
          <div className="flex flex-col xl:items-center xl:pl-[60px]">
            <Image
              src="/about/quick-stage.png"
              alt="Raj Vichare speaking on stage at SUGAR Networks Global Kickoff Event"
              width={501}
              height={334}
              className="h-auto w-full max-w-[501px] object-contain"
            />
            <p className="mt-1 w-full max-w-[501px] text-left font-body text-[14px] leading-[1.35] text-[#3B3B3B]">
              SUGAR Networks Global Kickoff Event, Hefei, China 2019
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="font-display text-[24px] font-medium leading-none">The quick version</h1>

            <p className="max-w-[729px] font-body text-[16px] leading-[1.7] md:text-[18px] md:leading-[1.75]">
              Over the last six years, I’ve worked with teams at PhonePe, Tata Consumer Products, Vodafone Idea, Peak
              XV and others, helping shape products from early ambiguity into something teams can actually ship and use.
            </p>
            <p className="max-w-[729px] font-body text-[16px] leading-[1.7] md:text-[18px] md:leading-[1.75]">
              I started out in design, and over time my work moved closer to product, defining what to build, why it
              matters, and working with teams to take it into the real world. I’m especially interested in making
              complex systems simpler, more usable, and practical at scale.
            </p>
            <p className="max-w-[729px] font-body text-[16px] leading-[1.7] md:text-[18px] md:leading-[1.75]">
              Outside of work, I usually have some side project going on, building things, fixing things, or trying to
              understand how they work. That curiosity shows up in how I approach most problems.
            </p>

            <div className="flex w-full flex-col items-center">
              <div className="h-px w-full bg-[#3B3B3B]/40" />
              <div className="my-[21px] flex w-full flex-nowrap items-center justify-center gap-x-[10px] whitespace-nowrap font-body text-[14px] md:text-[16px] xl:text-[18px]">
                <span>13+ domains</span>
                <span>&bull;</span>
                <span>30+ organisations</span>
                <span>&bull;</span>
                <span>6+ years experience</span>
              </div>
              <div className="h-px w-full bg-[#3B3B3B]/40" />
            </div>
          </div>
        </div>

        <p className="mt-[60px] text-center font-body text-[18px] leading-none">What I focus on</p>
      </section>

      <section className="mt-8 w-full bg-[#F6F4F1]">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-14 min-[480px]:px-6 md:grid-cols-2 md:px-12 md:py-16 lg:px-20 xl:grid-cols-2 xl:gap-x-[60px] xl:gap-y-10 xl:px-[120px] xl:py-[68px]">
          {focusAreas.map((item) => (
            <div key={item.title}>
              <h2 className="font-body text-[18px] font-semibold leading-[1.35]">{item.title}</h2>
              <p className="mt-1 font-body text-[16px] leading-[1.65] md:text-[18px] md:leading-[1.6]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pt-[60px] min-[480px]:px-6 md:px-12 lg:px-20 xl:px-[120px]">
        <h2 className="text-center font-display text-[24px] font-medium leading-none">The longer version</h2>

        <div className="mt-[60px] grid items-start gap-8 xl:grid-cols-[402px_minmax(0,736px)] xl:items-start xl:gap-[60px]">
          <Image
            src="/about/starting-design.png"
            alt="Raj Vichare with a team at an exhibition during his early design and product journey"
            width={402}
            height={340}
            className="self-start h-auto w-full object-contain"
          />
          <div className="self-start pt-0">
            <h3 className="mt-0 pt-0 font-body text-[18px] font-semibold leading-none">Starting with design</h3>
            <p className="mt-1 font-body text-[16px] leading-[1.7] md:text-[18px] md:leading-[1.75]">
              After studying IT, I went on to study design thinking and innovation, which gave me a very different way
              of looking at problems. That early phase of my work took me through places like SUGAR Network, where I
              worked on public-sector challenges and even had my first international work trip to China, and later into
              startup environments like GreedyGame, where most of my learning came from building in fast-paced
              environments.
            </p>
            <p className="mt-4 font-body text-[16px] leading-[1.7] md:text-[18px] md:leading-[1.75]">
              That period shaped a lot of how I still work today, staying curious, getting close to the problem, and
              understanding that good design is one that delivers the desired or expected outcome easily, efficiently
              and pleasantly.
            </p>
          </div>
        </div>

        <div className="mt-[60px] grid grid-cols-2 gap-4 md:gap-6 xl:gap-[60px]">
          <div className="h-[180px] overflow-hidden bg-white md:h-[250px] xl:h-[340px]">
            <Image
              src="/about/row-one-left.png"
              alt="Raj Vichare collaborating with a team outdoors"
              width={570}
              height={340}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="h-[180px] overflow-hidden bg-white md:h-[250px] xl:h-[340px]">
            <Image
              src="/about/row-one-right.png"
              alt="Raj Vichare with students in a classroom project setting"
              width={570}
              height={340}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="mx-auto mt-[120px] max-w-[980px] text-center">
          <h3 className="font-body text-[18px] font-semibold leading-[1.35]">Leaning into product</h3>
          <p className="mt-1 font-body text-[16px] leading-[1.7] md:text-[18px] md:leading-[1.75]">
            At Lollypop Design Studio, the work naturally moved beyond experience design and closer to product. I
            found myself spending more time shaping direction, whether that meant helping startups define MVPs from
            the ground up or bringing structure to larger, more ambiguous enterprise systems so teams could actually
            build and ship them.
          </p>
          <p className="mt-4 font-body text-[16px] leading-[1.7] md:text-[18px] md:leading-[1.75]">
            What kept me interested was that this work sat across multiple layers at once: the user, the system, the
            business need, and the reality of execution. That eventually grew into mentoring others, shaping ways of
            org structures, and taking more ownership of how products came together end to end. At some point, the role
            stopped being just about the experience itself and became more about helping the whole product make sense.
          </p>
        </div>

        <div className="mt-[60px] grid grid-cols-2 gap-4 md:gap-6 xl:gap-[60px]">
          <div className="h-[180px] overflow-hidden bg-white md:h-[250px] xl:h-[340px]">
            <Image
              src="/about/row-two-left.png"
              alt="Raj Vichare with a team indoors during a workshop"
              width={570}
              height={340}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="h-[180px] overflow-hidden bg-white md:h-[250px] xl:h-[340px]">
            <Image
              src="/about/row-two-right.png"
              alt="Raj Vichare with a designathon team"
              width={570}
              height={340}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="mt-[120px] grid grid-cols-[120px_minmax(0,1fr)] items-start gap-4 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8 xl:grid-cols-[402px_587px] xl:gap-[60px]">
          <Image
            src="/about/beyond-main.png"
            alt="Raj Vichare outdoors, reflecting his interest in ecology and living systems"
            width={402}
            height={478}
            className="h-[120px] w-[120px] rounded-full object-cover object-top md:h-[180px] md:w-[180px] xl:h-full xl:w-full xl:rounded-none xl:object-cover"
          />
          <div className="max-w-[587px]">
            <h3 className="font-body text-[18px] font-semibold leading-[1.35]">Beyond work</h3>
            <p className="mt-1 font-body text-[16px] leading-[1.7] md:text-[18px] md:leading-[1.75]">
              I usually have something I’m learning, making, or getting mildly obsessive about. I
              recently finished a course in policy design, mostly because I wanted to understand how design helps
              create impact at a larger system.
            </p>
            <p className="mt-4 font-body text-[16px] leading-[1.7] md:text-[18px] md:leading-[1.75]">
              I like being outdoors whenever I can. Travelling and trekking have always been a big part of that, and
              more recently I got my Advanced Open Water diving license, which has opened up a completely different
              kind of world to explore. I also play a bit of guitar and spend a lot of time listening to alternative
              rock.
            </p>
            <p className="mt-4 font-body text-[16px] leading-[1.7] md:text-[18px] md:leading-[1.75]">
              I’ve always been drawn to animals, ecology, and the quiet complexity of living systems. That’s shown up
              in small ways over the years, building things like an egg incubator at home, keeping low-tech tanks and
              micro-ecosystems, and spending far too long just watching how they settle and evolve. I’d love to work
              on restoration projects like{" "}
              <HoverVideoLink
                label="this"
                href="https://youtu.be/6G8ID53zM-0?si=CDwD3ypN6hPfhrOj"
                description={conservationLinks.coral}
              />
              ,{" "}
              <HoverVideoLink
                label="this"
                href="https://youtu.be/FoFbY9vkg4Q?si=Kj0GcZl2iF59mqWn"
                description={conservationLinks.wolves}
              />
              , or build a house like{" "}
              <HoverVideoLink
                label="this"
                href="https://www.youtube.com/watch?v=j78UZoF0yQI"
                description={conservationLinks.house}
              />
              . Until then, I’m happy indulging the fascination
              through smaller experiments of my own :)
            </p>
          </div>
        </div>

        <div className="mt-[60px] grid grid-cols-2 gap-4 md:gap-6 xl:hidden">
          <video
            className="aspect-[3/4] w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/about/shrimp.mov" type="video/quicktime" />
            <source src="/about/shrimp.mov" type="video/mp4" />
          </video>
          <div className="aspect-[3/4] overflow-hidden bg-white">
            <Image
              src="/about/dogs-door.png"
              alt="Dogs by the door looking out to sea"
              width={360}
              height={480}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="mt-[60px] hidden grid-cols-3 gap-[60px] xl:grid">
          <video className="aspect-[3/4] w-full object-cover" autoPlay muted loop playsInline>
            <source src="/about/shrimp.mov" type="video/quicktime" />
            <source src="/about/shrimp.mov" type="video/mp4" />
          </video>
          <div className="aspect-[3/4] overflow-hidden bg-white">
            <Image
              src="/about/dogs-door.png"
              alt="Dogs by the door looking out to sea"
              width={360}
              height={480}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden bg-white">
            <Image
              src="/about/cat-hold.png"
              alt="Raj holding a cat"
              width={360}
              height={480}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="mt-[120px] flex justify-center">
          <div className="grid w-full max-w-[720px] gap-6 justify-items-center xl:grid-cols-[236px_auto] xl:items-center xl:justify-center xl:gap-[60px]">
          <video className="aspect-[236/420] h-auto max-h-[420px] w-full object-cover xl:w-auto" autoPlay muted loop playsInline>
            <source src="/about/dive.mp4" type="video/mp4" />
          </video>
            <p className="text-center font-body text-[18px] leading-[1.4] xl:text-left">Signing off 👋</p>
          </div>
        </div>
      </section>

      <div className="mt-[120px] w-full bg-[#f6f4f1]">
        <HomeFooter />
      </div>
    </div>
  );
}
