"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/editorial";

const services = [
  {
    tier: "Learn with me",
    title: "1:1 tutoring",
    desc:
      "Live screen-share sessions. Bring a goal — leave with a working build, not homework.",
    cta: "Book a session",
    href: "https://calendly.com/key-keybuilds/tutoring",
  },
  {
    tier: "Audit with me",
    title: "AI audit",
    desc:
      "60-minute review of your tools and workflows. You get a written breakdown of the three highest-ROI places to plug AI in, plus a clear action list.",
    cta: "Request an audit",
    href: "/intake?service=audit",
  },
  {
    tier: "Ask anything",
    title: "Office hours / Q&A",
    desc:
      "Small-group live calls. Bring questions, leave with answers, screenshots, and links. Cheaper than 1:1. Deeper than a podcast.",
    cta: "Reserve your seat",
    href: "/intake?service=qa",
  },
  {
    tier: "Speak / sponsor",
    title: "Speaking and brand deals",
    desc:
      "Keynotes, panels, fireside chats, sponsored content. Calm, prepared, on-message. I co-brand with tools I actually use.",
    cta: "Pitch me",
    href: "/intake?service=speaking",
  },
  {
    tier: "Buy a build",
    title: "Templates and digital products",
    desc:
      "Notion dashboards, Claude skills, custom GPTs, prompt libraries, agent kits. Buy the build, skip the hourly rate.",
    cta: "Browse the catalog",
    href: "https://go.keybuilds.ai",
  },
  {
    tier: "Custom build",
    title: "Apex personal assistants",
    desc:
      "An AI assistant built for your specific role — inbox, calendar, content, research, ops. In your voice. In the tools you already use.",
    cta: "Commission yours",
    href: "/intake?service=apex",
  },
  {
    tier: "For small business",
    title: "Booking systems",
    desc:
      "Automated scheduling, intake, reminders, and follow-ups. Connected to Calendly, Cal.com, Google or Outlook, Stripe — whatever you already use. Your phone stops being the bottleneck.",
    cta: "Build my booking flow",
    href: "/intake?service=booking",
  },
  {
    tier: "Cohort",
    title: "“Burn the Gate” cohort",
    desc:
      "5 weeks. 2 live calls per week. 12–20 operators, founders, and creators ship their first AI build alongside me. Demo day at the end. You leave with a tool you actually use.",
    cta: "Apply for the next cohort",
    href: "/intake?service=cohort",
  },
  {
    tier: "Search visibility",
    title: "AI Search Visibility Kit",
    desc:
      "Get your site cited by AI search — Google AI Overviews, Perplexity, ChatGPT, Gemini, Copilot. 14-component package: AI-readable schema, machine-readable services file, voice-search markup, AI-bot allowlist, full Search Console wiring. Add-on with a website ($997) or retrofit an existing site ($1,997).",
    cta: "Submit a discovery brief",
    href: "/aisv/discover",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <SectionEyebrow num="05" label="The services" />

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
            Nine ways to work with me.
          </h2>
          <p
            className="col-span-12 md:col-span-5 text-sm sm:text-base leading-relaxed"
            style={{ color: "rgba(237, 233, 223, 0.55)" }}
          >
            Pick what matches where you are — from a 30-minute Q&amp;A to a
            custom assistant built for your role.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ backgroundColor: "rgba(237, 233, 223, 0.08)" }}
        >
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              whileHover={{ y: -2 }}
              className="block p-7 transition-colors group"
              style={{ backgroundColor: "#0C0E0D" }}
            >
              <span className="mono-caps" style={{ color: "#3E8E6B" }}>
                {s.tier}
              </span>
              <h3
                className="font-heading font-bold mt-3 mb-3"
                style={{ color: "#EDE9DF", fontSize: "1.4rem", letterSpacing: "-0.02em" }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "rgba(237, 233, 223, 0.6)" }}
              >
                {s.desc}
              </p>
              <span
                className="mono-caps inline-flex items-center gap-2 transition-transform group-hover:translate-x-1"
                style={{ color: "#3E8E6B" }}
              >
                {s.cta} &rarr;
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
