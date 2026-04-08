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
        <div className="border-l-2 border-indigo-500/50 pl-6 py-4 bg-white/[0.01] rounded-r-xl">
          <p className="text-lg text-white/80 font-light italic leading-relaxed">
            &ldquo;Everyone&rsquo;s talking about AI. I&rsquo;d rather show you what it
            can do, then teach you how to do it yourself.&rdquo;
          </p>
          <p className="text-sm text-white/30 mt-3 font-medium">Key Scales</p>
        </div>
      </motion.div>
    </section>
  );
}
