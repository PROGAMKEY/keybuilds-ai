"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/editorial";

export function CTA() {
  return (
    <section className="py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <SectionEyebrow num="11" label="The next move" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-10"
        >
          <h2
            className="editorial-italic mb-6"
            style={{
              color: "#EDE9DF",
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
            }}
          >
            Three ways to keep going.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-8" style={{ backgroundColor: "rgba(237, 233, 223, 0.08)" }}>
            <a
              href="#subscribe"
              className="block p-7 transition-colors"
              style={{ backgroundColor: "#0C0E0D" }}
            >
              <span className="mono-caps" style={{ color: "#3E8E6B" }}>For learners</span>
              <h3 className="font-heading font-bold mt-3 mb-3" style={{ color: "#EDE9DF", fontSize: "1.25rem" }}>
                Subscribe to the newsletter
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(237, 233, 223, 0.55)" }}>
                Free tips, real builds, and step-by-step breakdowns every week.
              </p>
              <div className="mt-5 mono-caps" style={{ color: "#3E8E6B" }}>Get tips &rarr;</div>
            </a>

            <a
              href="mailto:key@keybuilds.ai"
              className="block p-7 transition-colors"
              style={{ backgroundColor: "#0C0E0D" }}
            >
              <span className="mono-caps" style={{ color: "#3E8E6B" }}>For founders</span>
              <h3 className="font-heading font-bold mt-3 mb-3" style={{ color: "#EDE9DF", fontSize: "1.25rem" }}>
                Work with me directly
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(237, 233, 223, 0.55)" }}>
                Brand deals, speaking, advisory. DM or email when you&rsquo;re ready to go deeper.
              </p>
              <div className="mt-5 mono-caps" style={{ color: "#3E8E6B" }}>Email me &rarr;</div>
            </a>

            <a
              href="https://keystouch.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-7 transition-colors"
              style={{ backgroundColor: "#0C0E0D" }}
            >
              <span className="mono-caps" style={{ color: "#3E8E6B" }}>For companies</span>
              <h3 className="font-heading font-bold mt-3 mb-3" style={{ color: "#EDE9DF", fontSize: "1.25rem" }}>
                Hire Key&rsquo;s Touch
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(237, 233, 223, 0.55)" }}>
                Mid-market and enterprise AI implementation. Done-with-you and done-for-you.
              </p>
              <div className="mt-5 mono-caps" style={{ color: "#3E8E6B" }}>keystouch.com &rarr;</div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
