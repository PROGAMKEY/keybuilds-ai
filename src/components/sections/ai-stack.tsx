"use client";

import { motion } from "framer-motion";

const platforms = [
  {
    name: "Claude",
    org: "Anthropic",
    desc: "Daily driver. Claude Code for shipped builds, skills, and agents.",
  },
  {
    name: "ChatGPT",
    org: "OpenAI",
    desc: "Custom GPTs, image gen, fast iteration on copy and ideas.",
  },
  {
    name: "Gemini",
    org: "Google",
    desc: "Nano Banana for brand imagery. Google Workspace deep-link.",
  },
  {
    name: "Perplexity",
    org: "—",
    desc: "Research, sourcing, citations. Where I start before building.",
  },
  {
    name: "Claude Code",
    org: "Anthropic",
    desc: "The CLI I use to ship. Skills, agents, MCPs, the full stack.",
  },
];

export function AIStack() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2
              className="font-heading text-sm font-bold uppercase tracking-widest"
              style={{ color: "#3E8E6B" }}
            >
              The stack
            </h2>
            <div className="h-[2px] w-10 rounded" style={{ backgroundColor: "#3E8E6B" }} />
          </div>
          <h3
            className="font-heading text-2xl sm:text-3xl font-bold mb-3"
            style={{ color: "#EDE9DF" }}
          >
            Tools I work with every day.
          </h3>
          <p className="text-sm max-w-md mx-auto" style={{ color: "rgba(237, 233, 223, 0.45)" }}>
            Not loyal to any one model. I pick the right tool for the job — and
            I&rsquo;ll show you when to do the same.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="p-4 rounded-xl bg-[#1A2120] border border-[#EDE9DF]/[0.05] hover:border-[#3E8E6B]/30 transition-colors"
            >
              <div
                className="w-2 h-2 rounded-full mb-3"
                style={{ backgroundColor: "#3E8E6B" }}
              />
              <h4
                className="font-heading text-sm font-bold mb-1"
                style={{ color: "#EDE9DF" }}
              >
                {p.name}
              </h4>
              <p className="text-[10px] uppercase tracking-wider mb-2" style={{ color: "#3E8E6B" }}>
                {p.org}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(237, 233, 223, 0.45)" }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
