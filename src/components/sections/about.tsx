"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/editorial";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto">
        <SectionEyebrow num="02" label="The person" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-10 grid grid-cols-12 gap-x-6 gap-y-6"
        >
          <h2
            className="col-span-12 md:col-span-4 editorial-italic"
            style={{
              color: "#EDE9DF",
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
            }}
          >
            I&rsquo;m Key.
          </h2>

          <div className="col-span-12 md:col-span-8 space-y-5">
            <p
              className="leading-relaxed"
              style={{
                color: "rgba(237, 233, 223, 0.85)",
                fontSize: "clamp(1.05rem, 1.6vw, 1.18rem)",
                lineHeight: 1.65,
              }}
            >
              I build with AI every single day. Websites, automations, agents,
              full business systems. I work across&nbsp;
              <span style={{ color: "#3E8E6B" }}>Claude</span>,&nbsp;
              <span style={{ color: "#3E8E6B" }}>ChatGPT</span>,&nbsp;
              <span style={{ color: "#3E8E6B" }}>Gemini</span>, and&nbsp;
              <span style={{ color: "#3E8E6B" }}>Perplexity</span> — and ship
              real products on top of them. Then I teach the people around me
              to do the same.
            </p>
            <p
              className="leading-relaxed"
              style={{
                color: "rgba(237, 233, 223, 0.65)",
                fontSize: "clamp(0.98rem, 1.5vw, 1.08rem)",
                lineHeight: 1.7,
              }}
            >
              Authority isn&rsquo;t loud. It&rsquo;s a track record. I show
              mine — and teach you to build yours.
            </p>
            <div className="flex items-center gap-3 pt-3">
              <span
                className="block"
                style={{ width: "1.5rem", height: "1px", backgroundColor: "rgba(62, 142, 107, 0.5)" }}
                aria-hidden
              />
              <a
                href="https://keystouch.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mono-caps inline-flex items-center gap-1.5 transition-colors"
                style={{ color: "rgba(237, 233, 223, 0.7)" }}
              >
                Also founder of Key&rsquo;s Touch &nbsp;&rarr;
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
