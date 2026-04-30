"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SectionEyebrow } from "@/components/ui/editorial";

const faqs = [
  {
    q: "Who is Key Builds AI?",
    a: "Key Builds AI is the personal brand of Key — a full-stack software engineer with 10+ years of experience, certified in Data AI Governance and as a Solutions AI Architect. She runs two brands: Key Builds AI (education, products, and speaking) and Key's Touch (AI consultancy for mid-market and enterprise). She works daily with Claude, ChatGPT, Gemini, Perplexity, and the major dev tools, and has shipped 73+ Claude Code skills, 11 custom agents, and 23 productized commands.",
  },
  {
    q: "What does Key Builds AI offer?",
    a: "Nine services: 1:1 AI tutoring, AI audits, office-hours Q&A, speaking and brand deals, templates and digital products, Apex personal assistants, booking systems for small businesses, the Burn the Gate live AI cohort, and the AI Search Visibility Kit. Plus a free weekly newsletter and a free PDF (AI Field Notes Vol. 01).",
  },
  {
    q: "What is the AI Search Visibility Kit?",
    a: "A 14-component package that makes a website citable by AI search engines — Google AI Overviews, Perplexity, ChatGPT, Gemini, and Copilot — not just rankable on Google. Includes: structured data (schema.org with linked entity graph), an /llms.txt file for AI agents, a machine-readable /services.md, voice-search markup, an AI-bot allowlist in robots.txt, a dynamic sitemap, 100+ clustered keywords, Open Graph and Twitter cards, multi-size favicons and a PWA manifest, Google Search Console and Bing Webmaster verification, and a hand-off walkthrough video. keybuilds.ai is the reference build. Pricing: $997 add-on with a website build, $1,997 standalone retrofit. Included on Key Builds AI premium-tier websites and every Key's Touch website.",
  },
  {
    q: "What is the Burn the Gate cohort?",
    a: "A 5-week live AI cohort with 2 calls per week — one teaching call, one workshop call. 12 to 20 founders, operators, and creators ship their first working AI build alongside Key. Demo day at the end. Slack channel between sessions for async help. You leave with a working tool, a peer group that keeps building, and a lifetime alumni community. Cohorts run 3 to 4 times per year.",
  },
  {
    q: "What is the AI Field Notes PDF?",
    a: "A free 12-page editorial PDF called \"10 AI builds that bought back my time.\" It walks through ten practical AI projects you can ship this weekend, each with a takeaway. Download at https://keybuilds.ai/assets/ai-field-notes-vol-01.pdf or get it through the newsletter.",
  },
  {
    q: "What AI tools does Key use?",
    a: "Every day: Claude (Anthropic) — Claude Code is her main CLI; ChatGPT (OpenAI) for custom GPTs and image generation; Gemini (Google) for brand imagery and Workspace integration; Perplexity for research and citations. For shipping: Next.js, Vercel, Tailwind, Framer Motion, ReportLab. Plus the 73 Claude Code skills, 11 custom agents, and 23 commands she's built.",
  },
  {
    q: "What is the BUILD framework?",
    a: "Key's teaching method, in 5 steps: Brief, Understand, Implement, Learn, Deepen. (1) Brief: define the task and what time you want back. (2) Understand: pick the right tool and learn its limits. (3) Implement: ship the smallest useful version. (4) Learn: measure what worked. (5) Deepen: scale it, then teach it forward.",
  },
  {
    q: "How do booking systems for small businesses work?",
    a: "Automated scheduling, custom-built for service businesses. Includes a booking flow, calendar sync, intake form, confirmations, reminders, and follow-ups. Wired to whatever you already use — Calendly, Cal.com, Google or Outlook calendar, Stripe. Fixed-price packages, no hourly billing.",
  },
  {
    q: "What are Apex personal assistants?",
    a: "Custom AI assistants built for one specific role. Each one handles inbox, calendar, content pipeline, research, and ops — wired into your existing tools, in your voice, with your guardrails. Built for a job, not as a generic chatbot.",
  },
  {
    q: "How do I work with Key?",
    a: "If you want to learn: subscribe to the free newsletter at keybuilds.ai. If you're a founder or solo operator: email key@keybuilds.ai with the service you want (tutoring, audit, Apex, booking system, cohort, etc.). If you're mid-market or enterprise: visit keystouch.com.",
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
