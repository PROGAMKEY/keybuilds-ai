"use client";

import { motion } from "framer-motion";
import { GLSLHills } from "@/components/ui/glsl-hills";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full flex items-center justify-center overflow-hidden" style={{ minHeight: "100svh" }}>
      <div className="absolute inset-0 z-0">
        <GLSLHills width="100%" height="100%" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0E0D]/40 via-transparent to-[#0C0E0D] z-[2]" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="w-24 h-24 mx-auto mb-8 rounded-full overflow-hidden ring-1 ring-emerald/40 shadow-[0_0_60px_rgba(62,142,107,0.25)]"
          style={{ boxShadow: "0 0 60px rgba(62, 142, 107, 0.25)" }}
        >
          <Image
            src="/avatar.png"
            alt="Key Builds AI"
            width={96}
            height={96}
            className="w-full h-full object-cover"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-heading font-bold tracking-tight mb-4"
          style={{
            color: "#EDE9DF",
            fontSize: "clamp(2.5rem, 11vw, 6rem)",
            lineHeight: 1.05,
          }}
        >
          Key Scales
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-heading font-semibold mb-3 px-2"
          style={{
            color: "#3E8E6B",
            fontSize: "clamp(1rem, 4.5vw, 1.5rem)",
            lineHeight: 1.25,
          }}
        >
          I don&rsquo;t sell AI hype. I sell AI you can ship.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-base sm:text-lg font-heading font-medium mb-6"
          style={{ color: "rgba(237, 233, 223, 0.65)" }}
        >
          And the time it buys you back.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-10"
          style={{ color: "rgba(237, 233, 223, 0.45)" }}
        >
          I build with AI every single day across Claude, ChatGPT, Gemini, and
          Perplexity. Websites, automations, agents, custom skills. Anyone can
          learn this — the gate is intimidation. I burn the gate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex gap-3 justify-center flex-wrap"
        >
          <a
            href="#subscribe"
            className="px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
            style={{
              backgroundColor: "#3E8E6B",
              color: "#0C0E0D",
              boxShadow: "0 8px 30px rgba(62, 142, 107, 0.3)",
            }}
          >
            Get free AI tips
          </a>
          <a
            href="#builds"
            className="px-6 py-3 rounded-xl border font-semibold text-sm transition-all"
            style={{
              borderColor: "rgba(237, 233, 223, 0.15)",
              color: "rgba(237, 233, 223, 0.75)",
            }}
          >
            See what I&rsquo;ve built
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5" style={{ color: "rgba(237, 233, 223, 0.25)" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
