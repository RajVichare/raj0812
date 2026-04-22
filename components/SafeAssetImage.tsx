"use client";

import { useState } from "react";

type SafeAssetImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
  label?: string;
};

export function SafeAssetImage({
  src,
  alt,
  className = "",
  fallbackClassName = "",
  label
}: SafeAssetImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex min-h-[220px] w-full items-center justify-center rounded-[24px] border border-dashed border-line bg-sand px-6 py-10 text-center ${fallbackClassName}`}
      >
        <div>
          <p className="font-body text-[12px] font-semibold uppercase tracking-[0.2em] text-muted">Asset Placeholder</p>
          <p className="mt-3 font-body text-[16px] font-semibold text-ink">{label ?? alt}</p>
          <p className="mt-2 break-all font-body text-[13px] leading-6 text-muted">{src}</p>
        </div>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} loading="lazy" onError={() => setHasError(true)} />;
}
