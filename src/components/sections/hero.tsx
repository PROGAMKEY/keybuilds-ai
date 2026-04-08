"use client";

import { motion } from "framer-motion";
import { GLSLHills } from "@/components/ui/glsl-hills";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <GLSLHills />

      <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/40 via-transparent to-[#030303] z-[2]" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="w-24 h-24 mx-auto mb-8 rounded-full overflow-hidden ring-2 ring-white/10 shadow-[0_0_60px_rgba(123,104,238,0.3)]"
        >
          <Image
            src="/avatar.png"
            alt="Key Scales"
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
          className="font-heading text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            Key Scales
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg sm:text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/80 to-teal-300 font-heading font-semibold mb-6"
        >
          AI made simple. One build at a time.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-sm sm:text-base text-white/40 max-w-md mx-auto leading-relaxed mb-10"
        >
          I build with AI every single day. Websites, automations, agents, full
          business systems. Follow along and see what AI can actually do.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex gap-3 justify-center flex-wrap"
        >
          <a
            href="#subscribe"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-teal-500 text-white font-semibold text-sm hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-[0_8px_30px_rgba(123,104,238,0.3)]"
          >
            Get Free AI Tips
          </a>
          <a
            href="#builds"
            className="px-6 py-3 rounded-xl border border-white/10 text-white/70 font-semibold text-sm hover:border-white/30 hover:text-white transition-all"
          >
            See My Work
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
            <ArrowDown className="w-5 h-5 text-white/20" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
