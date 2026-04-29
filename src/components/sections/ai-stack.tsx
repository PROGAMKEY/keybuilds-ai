"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/editorial";

const platforms = [
  {
    name: "Claude",
    org: "Anthropic",
    role: "The daily driver",
    desc: "Claude Code is the CLI I ship from. Skills, agents, MCPs, full workflows. Lives at the center of my stack.",
  },
  {
    name: "ChatGPT",
    org: "OpenAI",
    role: "The fast iterator",
    desc: "Custom GPTs, image generation, quick copy passes, and the tool I reach for when speed matters more than depth.",
  },
  {
    name: "Gemini",
    org: "Google",
    role: "The visual + workspace",
    desc: "Nano Banana for brand imagery. Native Google Workspace deep-link for spreadsheets, docs, and scheduling.",
  },
  {
    name: "Perplexity",
    org: "Independent",
    role: "The starting point",
    desc: "Research, sourcing, citations. Where I start before building anything. Truth-tested before I move.",
  },
  {
    name: "Claude Code",
    org: "Anthropic",
    role: "The build environment",
    desc: "The CLI I use to ship. Skills, agents, MCPs, version-controlled prompts. The workshop.",
  },
];

export function AIStack() {
  return (
    <section className="py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <SectionEyebrow num="04" label="The stack" />

        <div className="mt-8 mb-12 grid grid-cols-12 gap-6 items-end">
          <h2
            className="col-span-12 md:col-span-7 editorial-italic"
            style={{
              color: "#EDE9DF",
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            The tools I work with every day.
          </h2>
          <p
            className="col-span-12 md:col-span-5 text-sm sm:text-base leading-relaxed"
            style={{ color: "rgba(237, 233, 223, 0.55)" }}
          >
            Not loyal to one model. I pick the right tool for the job — and
            I&rsquo;ll show you when to do the same.
          </p>
        </div>

        <ul className="divide-y" style={{ borderColor: "rgba(237, 233, 223, 0.08)" }}>
          {platforms.map((p, i) => (
            <motion.li
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="grid grid-cols-12 gap-4 py-6 sm:py-7 border-t"
              style={{ borderTopColor: "rgba(237, 233, 223, 0.08)" }}
            >
              <div className="col-span-12 sm:col-span-3 flex items-baseline gap-3">
                <span
                  className="editorial-italic"
                  style={{
                    color: "#3E8E6B",
                    fontSize: "1.1rem",
                  }}
                >
                  0{i + 1}
                </span>
                <h3
                  className="font-heading font-bold"
                  style={{
                    color: "#EDE9DF",
                    fontSize: "1.4rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {p.name}
                </h3>
              </div>
              <div className="col-span-12 sm:col-span-3">
                <div className="mono-caps" style={{ color: "rgba(237, 233, 223, 0.45)" }}>
                  {p.org}
                </div>
                <div
                  className="editorial-italic mt-1"
                  style={{ color: "#3E8E6B", fontSize: "1.05rem" }}
                >
                  {p.role}
                </div>
              </div>
              <p
                className="col-span-12 sm:col-span-6 text-sm sm:text-base leading-relaxed"
                style={{ color: "rgba(237, 233, 223, 0.7)" }}
              >
                {p.desc}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
