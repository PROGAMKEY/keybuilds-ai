"use client";

import { motion } from "framer-motion";
import { GLSLHills } from "@/components/ui/glsl-hills";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative w-full flex flex-col justify-end overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* GLSL noise hills — atmospheric, gray-on-transparent */}
      <div className="absolute inset-0 z-0">
        <GLSLHills width="100%" height="100%" />
      </div>

      {/* Vignette: fade canvas to onyx at top + bottom for type legibility */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(12,14,13,0.85) 0%, rgba(12,14,13,0.1) 30%, rgba(12,14,13,0.0) 50%, rgba(12,14,13,0.6) 80%, #0C0E0D 100%)",
        }}
      />

      {/* Top-left magazine masthead label */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="absolute top-6 sm:top-10 left-6 sm:left-10 z-10 flex items-center gap-3"
      >
        <div
          className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-heading font-black text-2xl sm:text-3xl"
          style={{
            color: "#EDE9DF",
            lineHeight: 1,
          }}
        >
          K
          <span
            className="ml-0.5 inline-block"
            style={{
              width: "0.45em",
              height: "0.45em",
              backgroundColor: "#3E8E6B",
              alignSelf: "flex-end",
              marginBottom: "0.15em",
            }}
            aria-hidden
          />
        </div>
        <div className="hidden sm:block mono-caps" style={{ color: "rgba(237, 233, 223, 0.55)" }}>
          Key Builds AI / Issue 01
        </div>
      </motion.div>

      {/* Top-right edition mark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="absolute top-6 sm:top-10 right-6 sm:right-10 z-10 mono-caps text-right"
        style={{ color: "rgba(237, 233, 223, 0.4)" }}
      >
        <div>2026 — Vol. I</div>
      </motion.div>

      {/* Hero copy — pinned bottom-left, magazine-cover composition */}
      <div className="relative z-10 px-6 sm:px-10 pb-16 sm:pb-24 max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-12 gap-x-6 gap-y-8 items-end">
          {/* Left: name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9, ease: [0.23, 0.86, 0.39, 0.96] }}
            className="col-span-12 md:col-span-6 lg:col-span-7"
          >
            <h1
              style={{
                color: "#EDE9DF",
                fontSize: "clamp(2.75rem, 9.5vw, 7rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.035em",
              }}
              className="font-heading font-black"
            >
              <span
                className="editorial-italic block"
                style={{
                  color: "#EDE9DF",
                  letterSpacing: "-0.015em",
                  fontWeight: 400,
                  marginLeft: "-0.04em",
                }}
              >
                Key
              </span>
              <span
                className="block"
                style={{
                  color: "#EDE9DF",
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                  marginTop: "-0.04em",
                }}
              >
                Builds
              </span>
              <span
                className="block"
                style={{
                  color: "#EDE9DF",
                  textTransform: "uppercase",
                  letterSpacing: "-0.04em",
                  marginTop: "-0.04em",
                  whiteSpace: "nowrap",
                }}
              >
                AI
                <span
                  className="cursor-pulse inline-block ml-2 align-middle"
                  style={{
                    width: "0.18em",
                    height: "0.18em",
                    backgroundColor: "#3E8E6B",
                    transform: "translateY(0.18em)",
                  }}
                  aria-hidden
                />
              </span>
            </h1>
          </motion.div>

          {/* Right: editorial dek + tagline + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9 }}
            className="col-span-12 md:col-span-6 lg:col-span-5 md:pl-2"
          >
            <p
              className="editorial-italic mb-3"
              style={{
                color: "#3E8E6B",
                fontSize: "clamp(1.4rem, 3.2vw, 1.9rem)",
                lineHeight: 1.15,
              }}
            >
              I don&rsquo;t sell AI hype.
              <br />
              <span style={{ color: "#EDE9DF" }}>I sell AI you can ship.</span>
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed mb-6 max-w-md"
              style={{ color: "rgba(237, 233, 223, 0.6)" }}
            >
              Full stack software engineer for 10+ years. Educator. Authority you can talk to. I
              work across Claude, ChatGPT, Gemini, Perplexity, Cursor, Codex,
              Windsurf, Copilot, and Zapier — and teach people to build
              responsibly. The gate is intimidation. I burn the gate.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="#subscribe"
                className="px-5 py-3 rounded-md font-heading font-semibold text-sm transition-all hover:-translate-y-0.5 inline-flex items-center"
                style={{
                  backgroundColor: "#3E8E6B",
                  color: "#0C0E0D",
                  boxShadow: "0 8px 30px rgba(62, 142, 107, 0.28)",
                }}
              >
                Get free AI tips
              </a>
              <a
                href="#builds"
                className="px-5 py-3 rounded-md border font-heading font-semibold text-sm inline-flex items-center"
                style={{
                  borderColor: "rgba(237, 233, 223, 0.18)",
                  color: "rgba(237, 233, 223, 0.85)",
                }}
              >
                See what I&rsquo;ve shipped
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown
            className="w-4 h-4"
            style={{ color: "rgba(237, 233, 223, 0.3)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
