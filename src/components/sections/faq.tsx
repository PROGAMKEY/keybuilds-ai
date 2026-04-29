"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SectionEyebrow } from "@/components/ui/editorial";

const faqs = [
  {
    q: "Who is Key Builds AI?",
    a: "Key Builds AI is the personal brand of a full stack software engineer with 10+ years of experience, certified in Data AI Governance and as a Solutions AI Architect. She runs two brands: Key Builds AI (personal brand, education, products, speaking) and Key's Touch (AI consultancy for mid-market and enterprise). She works daily with Claude, ChatGPT, Gemini, Perplexity, Cursor, Codex, Windsurf, Copilot, and Zapier, and has shipped 73+ Claude Code skills, 11 custom agents, and 23 productized commands.",
  },
  {
    q: "What does Key Builds AI offer?",
    a: "Eight services: 1:1 AI tutoring, AI audits, office hours / Q&A, speaking + brand deals, templates and digital products, Apex personal assistants, booking systems for small businesses, and the “Burn the Gate” live AI cohort. Plus a free weekly newsletter and a free lead-magnet PDF (AI Field Notes Vol. 01).",
  },
  {
    q: "What is the “Burn the Gate” cohort?",
    a: "A five-week live AI cohort with two calls per week — one teaching call, one workshop call. Twelve to twenty operators, founders, and creators ship their first working AI build alongside Key. Demo day at the end. Async Slack between sessions. You leave with a working tool, a peer group that keeps building, and a lifetime alumni community. Cohorts run 3-4 times per year.",
  },
  {
    q: "What is the AI Field Notes PDF?",
    a: "A free 12-page editorial-style PDF — \"10 AI builds that bought back my time.\" It walks through ten practical AI builds you can ship this weekend, each with a takeaway. Free at https://keybuilds.ai/assets/ai-field-notes-vol-01.pdf or via the newsletter.",
  },
  {
    q: "What AI tools does Key use?",
    a: "Daily: Anthropic Claude (Claude Code is the CLI), OpenAI ChatGPT (Custom GPTs, image gen), Google Gemini (Nano Banana for brand imagery, Workspace deep-link), and Perplexity (research, sourcing). For shipping: Next.js, Vercel, Tailwind, Framer Motion, ReportLab. Plus 73 Claude Code skills, 11 custom agents, 23 commands.",
  },
  {
    q: "What is the BUILD framework?",
    a: "Key's signature methodology: Brief, Understand, Implement, Learn, Deepen. Define the task and the time-back goal. Pick the right tool and learn its limits. Ship the smallest useful version. Measure what worked. Scale it and teach it forward.",
  },
  {
    q: "How do booking systems for small businesses work?",
    a: "Custom-built automated scheduling for service businesses — booking flow, calendar sync, intake form, confirmations, reminders, follow-ups. Wired to whatever the business already uses (Calendly, Cal.com, Google or Outlook calendar, Stripe). Fixed-price packages available.",
  },
  {
    q: "What are Apex personal assistants?",
    a: "Custom AI assistants tailored to a person's role. Inbox triage, calendar, content pipeline, research, ops — wired into existing tools with the user's voice and guardrails. Each one is built for a specific role rather than as a generic chatbot.",
  },
  {
    q: "How do I work with Key?",
    a: "For learners: subscribe to the newsletter at keybuilds.ai. For founders or solo operators: email key@keybuilds.ai with the service you want (1:1 tutoring, AI audit, Apex assistant, booking system, etc.). For mid-market and enterprise: visit keystouch.com.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto">
        <SectionEyebrow num="10" label="The questions" />

        <h2
          className="mt-8 mb-12 editorial-italic"
          style={{
            color: "#EDE9DF",
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          Things people ask me.
        </h2>

        <ul className="divide-y" style={{ borderColor: "rgba(237, 233, 223, 0.1)" }}>
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <motion.li
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                className="border-t"
                style={{ borderTopColor: "rgba(237, 233, 223, 0.1)" }}
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full text-left flex items-baseline justify-between gap-4 py-5 group"
                  style={{ minHeight: "44px" }}
                >
                  <h3
                    className="font-heading font-bold flex-1"
                    style={{ color: "#EDE9DF", fontSize: "1.1rem", letterSpacing: "-0.015em" }}
                  >
                    {faq.q}
                  </h3>
                  <span
                    className="mono-caps shrink-0 transition-transform"
                    style={{
                      color: "#3E8E6B",
                      transform: open ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: "hidden" }}
                >
                  <p
                    className="pb-6 pr-8 leading-relaxed"
                    style={{ color: "rgba(237, 233, 223, 0.7)", fontSize: "1rem", lineHeight: 1.65 }}
                  >
                    {faq.a}
                  </p>
                </motion.div>
              </motion.li>
            );
          })}
        </ul>
      </div>

      {/* FAQPage schema for AI search citation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
