"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/editorial";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <SectionEyebrow num="02" label="The person" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-10 grid grid-cols-12 gap-x-8 gap-y-10 items-start"
        >
          {/* Portrait */}
          <div className="col-span-12 md:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.23, 0.86, 0.39, 0.96] }}
              className="relative overflow-hidden rounded-md"
              style={{ aspectRatio: "4 / 5" }}
            >
              <Image
                src="/images/about-portrait.jpg"
                alt="Key Builds AI — founder portrait"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                priority={false}
              />
              <div
                className="absolute bottom-3 right-3"
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  backgroundColor: "#3E8E6B",
                }}
                aria-hidden
              />
            </motion.div>

            {/* Credibility chips below portrait */}
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "10+ yrs full-stack engineer",
                "Certified Data AI Governance",
                "Certified Solutions AI Architect",
                "AI authority",
                "Founder × 2",
              ].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border"
                  style={{
                    backgroundColor: "#1A2120",
                    borderColor: "rgba(62, 142, 107, 0.3)",
                  }}
                >
                  <span
                    style={{ width: "6px", height: "6px", backgroundColor: "#3E8E6B" }}
                    aria-hidden
                  />
                  <span
                    className="mono-caps"
                    style={{ color: "#EDE9DF", fontSize: "0.7rem" }}
                  >
                    {label}
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className="col-span-12 md:col-span-7">
            <h2
              className="editorial-italic mb-6"
              style={{
                color: "#EDE9DF",
                fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.015em",
              }}
            >
              I&rsquo;m Key.
            </h2>

            <p
              className="editorial-italic mb-8"
              style={{
                color: "rgba(237, 233, 223, 0.85)",
                fontSize: "clamp(1.4rem, 2.6vw, 1.8rem)",
                lineHeight: 1.25,
                letterSpacing: "-0.005em",
              }}
            >
              Ten-plus years a full stack software engineer. Now obsessed with the moment AI
              clicks for someone — and they realize they can build, too.
            </p>

            <div className="space-y-5">
              <p
                className="leading-relaxed"
                style={{
                  color: "rgba(237, 233, 223, 0.85)",
                  fontSize: "clamp(1.05rem, 1.6vw, 1.18rem)",
                  lineHeight: 1.65,
                }}
              >
                I build with AI every single day. Websites, automations,
                agents, full business systems. I work across&nbsp;
                <span style={{ color: "#3E8E6B" }}>Claude</span>,&nbsp;
                <span style={{ color: "#3E8E6B" }}>ChatGPT</span>,&nbsp;
                <span style={{ color: "#3E8E6B" }}>Gemini</span>,&nbsp;
                <span style={{ color: "#3E8E6B" }}>Perplexity</span>,&nbsp;
                <span style={{ color: "#3E8E6B" }}>Cursor</span>,&nbsp;
                <span style={{ color: "#3E8E6B" }}>Codex</span>,&nbsp;
                <span style={{ color: "#3E8E6B" }}>Windsurf</span>,&nbsp;
                <span style={{ color: "#3E8E6B" }}>Copilot</span>, and&nbsp;
                <span style={{ color: "#3E8E6B" }}>Zapier</span> — and ship
                real products on top of them. Then I teach the people around
                me to do the same.
              </p>
              <p
                className="leading-relaxed"
                style={{
                  color: "rgba(237, 233, 223, 0.65)",
                  fontSize: "clamp(0.98rem, 1.5vw, 1.08rem)",
                  lineHeight: 1.7,
                }}
              >
                Certified in&nbsp;
                <span style={{ color: "#3E8E6B" }}>Data AI Governance</span>{" "}
                and as a&nbsp;
                <span style={{ color: "#3E8E6B" }}>
                  Solutions AI Architect
                </span>
                . Which means I don&rsquo;t just ship — I ship responsibly,
                with the guardrails that hold up at scale.
              </p>
              <p
                className="leading-relaxed"
                style={{
                  color: "rgba(237, 233, 223, 0.65)",
                  fontSize: "clamp(0.98rem, 1.5vw, 1.08rem)",
                  lineHeight: 1.7,
                }}
              >
                My passion: <span style={{ color: "#EDE9DF", fontWeight: 600 }}>AI conversion</span> — moving people from
                "AI is intimidating" to "AI is the thing I shipped this
                weekend." Authority isn&rsquo;t loud. It&rsquo;s a track
                record. I show mine — and teach you to build yours.
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
          </div>
        </motion.div>

        {/* Workspace shot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="mt-16 sm:mt-20 relative overflow-hidden rounded-md"
          style={{ aspectRatio: "16 / 7" }}
        >
          <Image
            src="/images/key-workspace.jpg"
            alt="Key at work — building with AI"
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(12,14,13,0.7) 0%, rgba(12,14,13,0.0) 35%, rgba(12,14,13,0.0) 100%)",
            }}
            aria-hidden
          />
          <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 max-w-md">
            <span className="mono-caps" style={{ color: "#3E8E6B" }}>
              In the workshop
            </span>
            <p
              className="editorial-italic mt-2"
              style={{
                color: "#EDE9DF",
                fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)",
                lineHeight: 1.2,
              }}
            >
              Builds happen here every day.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
