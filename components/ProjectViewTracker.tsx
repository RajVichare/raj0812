"use client";

import { useEffect } from "react";
import { trackEvent } from "@/data/analytics";

type ProjectViewTrackerProps = {
  slug: string;
  title: string;
};

export function ProjectViewTracker({ slug, title }: ProjectViewTrackerProps) {
  useEffect(() => {
    trackEvent("project_page_view", {
      project_slug: slug,
      project_title: title
    });
  }, [slug, title]);

  return null;
}
