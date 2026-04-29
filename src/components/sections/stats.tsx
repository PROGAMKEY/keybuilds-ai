"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { SectionEyebrow } from "@/components/ui/editorial";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 2,
      ease: "easeOut",
    });
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v + suffix;
    });
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [motionValue, rounded, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { value: 5, suffix: "+", label: "AI platforms shipping daily", caption: "Claude · ChatGPT · Gemini · Perplexity · Claude Code" },
  { value: 73, suffix: "", label: "Skills installed and live", caption: "Marketing · finance · engineering · ops · c-level" },
  { value: 11, suffix: "", label: "Custom agents built", caption: "Each one buying back hours every week" },
];

export function Stats() {
  return (
    <section className="py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <SectionEyebrow num="03" label="The receipts" />

        <h2
          className="mt-8 mb-12 editorial-italic"
          style={{
            color: "#EDE9DF",
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          Numbers, not narratives.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="border-t pt-6 sm:pt-8"
              style={{ borderTopColor: "rgba(62, 142, 107, 0.25)" }}
            >
              <div
                className="font-heading font-black tabular-nums"
                style={{
                  color: "#EDE9DF",
                  fontSize: "clamp(3rem, 7vw, 4.5rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.04em",
                }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div
                className="mt-2 mono-caps"
                style={{ color: "rgba(237, 233, 223, 0.55)" }}
              >
                {stat.label}
              </div>
              <div
                className="mt-2 text-xs sm:text-sm leading-relaxed"
                style={{ color: "rgba(237, 233, 223, 0.4)" }}
              >
                {stat.caption}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
