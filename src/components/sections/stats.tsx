"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

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
  { value: 5, suffix: "+", label: "AI platforms shipping daily" },
  { value: 73, suffix: "", label: "Skills installed and live" },
  { value: 11, suffix: "", label: "Custom agents built" },
];

export function Stats() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center p-3 sm:p-5 rounded-2xl bg-[#1A2120] border border-[#EDE9DF]/[0.05]"
            >
              <div
                className="text-2xl sm:text-4xl font-heading font-bold tabular-nums"
                style={{ color: "#3E8E6B" }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div
                className="text-[10px] sm:text-xs mt-1 leading-tight"
                style={{ color: "rgba(237, 233, 223, 0.45)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
