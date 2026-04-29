"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/editorial";

export function Quote() {
  return (
    <section className="py-20 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto">
        <SectionEyebrow num="01" label="The belief" />

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="mt-8"
        >
          <p
            className="editorial-italic drop-cap"
            style={{
              color: "#EDE9DF",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              lineHeight: 1.18,
              letterSpacing: "-0.005em",
            }}
          >
            Anyone can learn AI. The gate is intimidation. I burn the gate
            &mdash; then teach you to walk through.
          </p>
          <footer className="mt-6 flex items-center gap-3">
            <span
              className="block"
              style={{
                width: "2rem",
                height: "1px",
                backgroundColor: "#3E8E6B",
              }}
              aria-hidden
            />
            <cite
              className="mono-caps not-italic"
              style={{ color: "rgba(237, 233, 223, 0.55)" }}
            >
              Key Builds AI / Founder
            </cite>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
