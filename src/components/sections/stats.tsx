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
  { value: 48, suffix: "hr", label: "Average Build Time" },
  { value: 85, suffix: "+", label: "SEO Score Standard" },
  { value: 100, suffix: "%", label: "AI-Powered" },
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
              className="text-center p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
            >
              <div className="text-3xl sm:text-4xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-teal-400">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-white/30 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
