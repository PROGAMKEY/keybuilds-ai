"use client";

import { motion } from "framer-motion";

/* Section eyebrow — "01 — The Stack" pattern.
   Pure CSS classes from globals.css. No props needed beyond content. */
export function SectionEyebrow({ num, label }: { num: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="section-eyebrow"
    >
      <span className="num">{num}</span>
      <span className="rule" aria-hidden />
      <span>{label}</span>
    </motion.div>
  );
}

/* Hairline divider with centered K-mark glyph between sections */
export function SectionDivider() {
  return (
    <div className="py-6">
      <div className="section-divider" aria-hidden />
    </div>
  );
}

/* Grain overlay — fixed, full-viewport, editorial paper texture */
export function GrainOverlay() {
  return <div className="grain-overlay" aria-hidden />;
}
