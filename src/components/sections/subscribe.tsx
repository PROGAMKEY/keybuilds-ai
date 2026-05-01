"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/editorial";
import { BeehiivEmbed } from "@/components/ui/beehiiv-embed";

export function Subscribe() {
  return (
    <section id="subscribe" className="py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <SectionEyebrow num="08" label="The newsletter" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-10 grid grid-cols-12 gap-x-6 gap-y-8 items-start"
        >
          <div className="col-span-12 md:col-span-6">
            <h2
              className="editorial-italic mb-5"
              style={{
                color: "#EDE9DF",
                fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
              }}
            >
              Get free AI tips.
            </h2>
            <p
              className="leading-relaxed mb-6"
              style={{
                color: "rgba(237, 233, 223, 0.7)",
                fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
                lineHeight: 1.65,
              }}
            >
              Drop your email and I&rsquo;ll send you{" "}
              <span style={{ color: "#3E8E6B" }}>
                AI Field Notes Vol. 01 — 10 AI builds that bought back my time
              </span>
              . You&rsquo;ll also get the weekly newsletter — real builds, no
              jargon, no gatekeeping.
            </p>

            <ul className="text-sm space-y-2 mb-8" style={{ color: "rgba(237, 233, 223, 0.6)" }}>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block w-1.5 h-1.5" style={{ backgroundColor: "#3E8E6B" }} aria-hidden />
                <span>Lead magnet: AI Field Notes Vol. 01 PDF (instant)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block w-1.5 h-1.5" style={{ backgroundColor: "#3E8E6B" }} aria-hidden />
                <span>Weekly issue: real builds + step-by-step breakdowns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block w-1.5 h-1.5" style={{ backgroundColor: "#3E8E6B" }} aria-hidden />
                <span>Free forever. Unsubscribe anytime.</span>
              </li>
            </ul>
          </div>

          <div
            className="col-span-12 md:col-span-6 md:pl-8 md:border-l"
            style={{ borderLeftColor: "rgba(62, 142, 107, 0.25)" }}
          >
            <div className="mono-caps mb-3" style={{ color: "rgba(237, 233, 223, 0.5)" }}>
              Drop your email
            </div>

            <BeehiivEmbed />

            <p className="mt-4 text-xs" style={{ color: "rgba(237, 233, 223, 0.35)" }}>
              I&rsquo;ll never sell your email. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
