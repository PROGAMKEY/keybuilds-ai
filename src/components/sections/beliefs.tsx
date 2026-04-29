"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/editorial";

const beliefs = [
  {
    headline: "AI doesn't have to be the villain.",
    body: "It works for you — but only if you learn to use it appropriately. Responsibly. With your eyes open.",
  },
  {
    headline: "AI buys back time.",
    body: "The hour you save on a repetitive task is the hour you spend with family, with builders, with what matters.",
  },
  {
    headline: "Anyone can learn AI.",
    body: "The gate is intimidation. I burn the gate — then teach you to walk through it without losing your nerve.",
  },
  {
    headline: "Authority isn't loud.",
    body: "It's a track record. I show mine. Then I teach you to build yours, one shipped thing at a time.",
  },
];

export function Beliefs() {
  return (
    <section className="py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <SectionEyebrow num="06" label="The manifesto" />

        <h2
          className="mt-8 mb-14 editorial-italic"
          style={{
            color: "#EDE9DF",
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          Four things I believe.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {beliefs.map((belief, i) => (
            <motion.div
              key={belief.headline}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
            >
              <div
                className="editorial-italic"
                style={{
                  color: "#3E8E6B",
                  fontSize: "1.1rem",
                  marginBottom: "0.75rem",
                }}
              >
                0{i + 1}
              </div>
              <h3
                className="font-heading font-bold mb-4"
                style={{
                  color: "#EDE9DF",
                  fontSize: "clamp(1.4rem, 2.4vw, 1.75rem)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                }}
              >
                {belief.headline}
              </h3>
              <p
                className="leading-relaxed"
                style={{
                  color: "rgba(237, 233, 223, 0.6)",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                }}
              >
                {belief.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
