"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/editorial";

const services = [
  {
    tier: "Learn with me",
    title: "1:1 tutoring",
    desc:
      "Live working sessions. You bring the goal — I'll show you the build, screen-share style. You leave with a working artifact, not a homework folder.",
    cta: "Book a session",
    href: "https://calendly.com/key-keybuilds/tutoring",
  },
  {
    tier: "Audit with me",
    title: "AI audit",
    desc:
      "Productized 60-min review of your stack, your repetitive workflows, and the three highest-ROI places to plug AI in. You get a written breakdown + an action list.",
    cta: "Request an audit",
    href: "/intake?service=audit",
  },
  {
    tier: "Ask anything",
    title: "Office hours / Q&A",
    desc:
      "Recurring small-group calls. Bring questions, leave with answers, screenshots, and links. Cheaper than 1:1, deeper than a podcast.",
    cta: "Reserve your seat",
    href: "/intake?service=qa",
  },
  {
    tier: "Speak / sponsor",
    title: "Speaking and brand deals",
    desc:
      "Keynotes, panels, fireside chats, sponsored content. I show up calm, prepared, and on-message — and yes, I'll co-brand with your tool if it earns it.",
    cta: "Pitch me",
    href: "/intake?service=speaking",
  },
  {
    tier: "Buy a build",
    title: "Templates and digital products",
    desc:
      "Notion dashboards, Claude skills, custom GPTs, prompt libraries, build-your-own-agent kits. Productized so you don't pay me hourly to copy-paste.",
    cta: "Browse the catalog",
    href: "https://go.keybuilds.ai",
  },
  {
    tier: "Custom build",
    title: "Apex personal assistants",
    desc:
      "Custom AI assistants tailored to your role. Executive inbox, calendar, content pipeline, research, financial ops, scheduling — wired into the tools you already use, in your voice, with your guardrails.",
    cta: "Commission yours",
    href: "/intake?service=apex",
  },
  {
    tier: "For small business",
    title: "Booking systems",
    desc:
      "Automated scheduling, intake, confirmations, and reminders for small businesses. Wired to Calendly, Cal.com, Google or Outlook, Stripe — whatever you already use. Stops your phone from being the bottleneck.",
    cta: "Build my booking flow",
    href: "/intake?service=booking",
  },
  {
    tier: "Cohort",
    title: "“Burn the Gate” cohort",
    desc:
      "Five weeks. Two live calls a week. Twelve to twenty operators, founders, and creators ship their first working AI build alongside me. Demo day at the end. You leave with a tool you actually use.",
    cta: "Apply for the next cohort",
    href: "/intake?service=cohort",
  },
  {
    tier: "Search visibility",
    title: "AI Search Visibility Kit",
    desc:
      "Make your site citable by Google AI Overviews, Perplexity, ChatGPT, Gemini, and Copilot — not just rankable. Schema.org with linked @id graph, /llms.txt, machine-readable services file, voice-search markup, sitemap + robots tuned for AI bots, Google Search Console + Bing wired. Add-on to any website build, or standalone retrofit on an existing site.",
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
            Pick the lane that matches where you are. From 30-minute Q&amp;A to a
            custom personal assistant built for your role — same standard, same
            voice.
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
