"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function Subscribe() {
  return (
    <section id="subscribe" className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto"
      >
        <div className="relative rounded-2xl bg-[#1A2120] border border-[#EDE9DF]/[0.06] p-8 sm:p-10 text-center overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ backgroundColor: "#3E8E6B" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(62, 142, 107, 0.03) 0%, rgba(62, 142, 107, 0.01) 100%)",
            }}
          />

          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ backgroundColor: "#3E8E6B" }}
            >
              <Zap className="w-6 h-6" style={{ color: "#0C0E0D" }} />
            </motion.div>

            <h2
              className="font-heading text-2xl sm:text-3xl font-bold mb-3"
              style={{ color: "#EDE9DF" }}
            >
              Learn AI the easy way.
            </h2>
            <p
              className="text-sm mb-6 leading-relaxed"
              style={{ color: "rgba(237, 233, 223, 0.55)" }}
            >
              Free tips, real builds, and step-by-step breakdowns every week. No
              jargon, no gatekeeping. Just the stuff that actually works — and
              the time it buys you back.
            </p>

            <a
              href="#"
              id="subscribe-btn"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: "#3E8E6B",
                color: "#0C0E0D",
                boxShadow: "0 8px 30px rgba(62, 142, 107, 0.25)",
              }}
            >
              Get free AI tips &rarr;
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
