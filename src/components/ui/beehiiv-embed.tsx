"use client";

import { useEffect, useRef } from "react";

const FORM_ID = "793a0812-1bda-4694-a6e5-851c0a2dded4";
const LOADER_SRC = "https://subscribe-forms.beehiiv.com/v3/loader.js";

export function BeehiivEmbed({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const script = document.createElement("script");
    script.src = LOADER_SRC;
    script.async = true;
    script.setAttribute("data-beehiiv-form", FORM_ID);
    ref.current.appendChild(script);
  }, []);

  return <div ref={ref} className={className} />;
}
