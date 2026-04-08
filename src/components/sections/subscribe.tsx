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
        <div className="relative rounded-2xl bg-white/[0.02] border border-white/[0.06] p-8 sm:p-10 text-center overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 to-teal-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] to-teal-500/[0.03]" />

          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-teal-500 flex items-center justify-center mx-auto mb-5"
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>

            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
              Learn AI the Easy Way
            </h2>
            <p className="text-sm text-white/40 mb-6 leading-relaxed">
              Free tips, real builds, and step-by-step breakdowns every week.
              No jargon, no gatekeeping. Just the stuff that actually works.
            </p>

            <a
              href="#"
              id="subscribe-btn"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-teal-500 text-white font-semibold text-sm hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-[0_8px_30px_rgba(123,104,238,0.25)]"
            >
              Get Free AI Tips &rarr;
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
