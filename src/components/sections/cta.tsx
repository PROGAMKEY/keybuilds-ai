"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto"
      >
        <div className="relative rounded-2xl bg-gradient-to-br from-indigo-500/10 to-teal-500/10 border border-white/[0.06] p-8 sm:p-10 text-center overflow-hidden">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
            Start Your AI Journey
          </h2>
          <p className="text-sm text-white/40 mb-6">
            Follow me on socials for daily builds. Subscribe for the weekly
            breakdown. DM me when you&rsquo;re ready to go deeper.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="#subscribe"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-teal-500 text-white font-semibold text-sm hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-[0_8px_30px_rgba(123,104,238,0.25)]"
            >
              Get Free AI Tips &rarr;
            </a>
            <a
              href="mailto:key@keybuilds.ai"
              className="px-6 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white/70 font-semibold text-sm hover:border-white/20 hover:text-white transition-all"
            >
              Work With Me
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
