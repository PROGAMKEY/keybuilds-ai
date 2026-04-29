"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/editorial";

export function Subscribe() {
  return (
    <section id="subscribe" className="py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <SectionEyebrow num="07" label="The newsletter" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-10 grid grid-cols-12 gap-x-6 gap-y-8 items-end"
        >
          <div className="col-span-12 md:col-span-7">
            <h2
              className="editorial-italic mb-5"
              style={{
                color: "#EDE9DF",
                fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
              }}
            >
              Learn AI the easy way.
            </h2>
            <p
              className="leading-relaxed"
              style={{
                color: "rgba(237, 233, 223, 0.7)",
                fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
                lineHeight: 1.65,
              }}
            >
              Free tips, real builds, and step-by-step breakdowns every week.
              No jargon, no gatekeeping. Just the stuff that actually works —
              and the time it buys you back.
            </p>
          </div>

          <div className="col-span-12 md:col-span-5 md:pl-8 md:border-l md:pt-2"
            style={{ borderLeftColor: "rgba(62, 142, 107, 0.25)" }}>
            <div className="mono-caps mb-3" style={{ color: "rgba(237, 233, 223, 0.5)" }}>
              Weekly · Free · No spam
            </div>
            <a
              href="#"
              id="subscribe-btn"
              className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-4 rounded-md font-heading font-semibold text-base transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: "#3E8E6B",
                color: "#0C0E0D",
                boxShadow: "0 8px 30px rgba(62, 142, 107, 0.28)",
              }}
            >
              Get free AI tips &rarr;
            </a>
            <p className="mt-4 text-xs" style={{ color: "rgba(237, 233, 223, 0.35)" }}>
              You can unsubscribe anytime. I&rsquo;ll never sell your email.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
