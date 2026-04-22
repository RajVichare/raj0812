import Link from "next/link";

export default function ProjectUnavailable() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-[1440px] items-center justify-center px-5 py-16 min-[480px]:px-6 md:px-12 lg:px-20 xl:px-[120px]">
      <div className="text-center">
        <h1 className="font-display text-[24px] leading-[1.2] tracking-[-0.02em] text-[#191919]">
          OOPS!, this one&apos;s out for a walk
        </h1>
        <div className="mt-8">
          <Link href="/" className="font-body text-[15px] font-semibold underline underline-offset-4 text-[#3b3b3b]">
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}
