"use client";

import { motion } from "framer-motion";

export function Quote() {
  return (
    <section className="py-8 px-4">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto"
      >
        <div
          className="border-l-2 pl-6 py-4 bg-[#EDE9DF]/[0.01] rounded-r-xl"
          style={{ borderLeftColor: "rgba(62, 142, 107, 0.6)" }}
        >
          <p
            className="text-lg font-light italic leading-relaxed"
            style={{ color: "rgba(237, 233, 223, 0.85)" }}
          >
            &ldquo;Anyone can learn AI. The gate is intimidation. I burn the
            gate.&rdquo;
          </p>
          <p
            className="text-sm mt-3 font-medium"
            style={{ color: "rgba(237, 233, 223, 0.4)" }}
          >
            Key Scales
          </p>
        </div>
      </motion.div>
    </section>
  );
}
