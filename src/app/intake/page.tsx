import type { Metadata } from "next";
import Link from "next/link";
import { IntakeForm } from "./form";

export const metadata: Metadata = {
  title: "Start a project — Key Builds AI",
  description:
    "Quick intake form. Tell me what you need. I respond within 1 business day.",
  alternates: { canonical: "https://keybuilds.ai/intake" },
  robots: { index: false, follow: true },
};

const SERVICE_COPY: Record<string, { eyebrow: string; title: string; lede: string }> = {
  audit: {
    eyebrow: "AI audit",
    title: "Tell me about your stack.",
    lede: "60-min review of your tools, repetitive workflows, and the 3 highest-ROI places to plug AI in. PDF + walkthrough delivered after the call.",
  },
  qa: {
    eyebrow: "Office hours / Q&A",
    title: "Reserve your seat.",
    lede: "Recurring small-group calls. Drop your email and I'll send the next session date plus a calendar invite.",
  },
  speaking: {
    eyebrow: "Speaking / brand deals",
    title: "Pitch me.",
    lede: "Keynotes, panels, fireside chats, sponsored content. Tell me about the audience, the date, and the budget. I respond within 2 business days.",
  },
  apex: {
    eyebrow: "Apex personal assistants",
    title: "Commission yours.",
    lede: "Custom AI assistants tailored to your role. Inbox, calendar, content, research, financial ops, scheduling — wired into the tools you already use, in your voice, with your guardrails.",
  },
  booking: {
    eyebrow: "Booking systems",
    title: "Build my booking flow.",
    lede: "Automated scheduling, intake, confirmations, reminders for service businesses. Tell me what tools you already use and I'll scope a fixed-price package.",
  },
  cohort: {
    eyebrow: "Burn the Gate cohort",
    title: "Apply for the next cohort.",
    lede: "Five weeks. Two live calls/week. Twelve to twenty seats. Ship your first working AI build. I read every application personally and respond within 48 hours.",
  },
  tutoring: {
    eyebrow: "1:1 tutoring",
    title: "Book a session.",
    lede: "Live working session. Bring the goal — leave with a working artifact. Tell me what you want to build and I'll send a Calendly link with the right time block.",
  },
  default: {
    eyebrow: "Start a project",
    title: "Tell me what you need.",
    lede: "Pick a service in the form below and give me the basics. I respond within 1 business day.",
  },
};

type SearchParams = { service?: string };

export default async function IntakePage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { service: rawService } = await searchParams;
  const service = (rawService && SERVICE_COPY[rawService]) ? rawService : "default";
  const copy = SERVICE_COPY[service];

  return (
    <main className="min-h-screen px-6 sm:px-10 py-20 sm:py-28">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/#services"
          className="mono-caps inline-block mb-10"
          style={{ color: "rgba(237, 233, 223, 0.55)" }}
        >
          &larr; Back to services
        </Link>

        <div className="mono-caps mb-4" style={{ color: "#3E8E6B" }}>
          {copy.eyebrow}
        </div>

        <h1
          className="editorial-italic mb-6"
          style={{
            color: "#EDE9DF",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
          }}
        >
          {copy.title}
        </h1>

        <p
          className="mb-10 leading-relaxed"
          style={{
            color: "rgba(237, 233, 223, 0.75)",
            fontSize: "clamp(1.05rem, 1.5vw, 1.15rem)",
            lineHeight: 1.6,
          }}
        >
          {copy.lede}
        </p>

        <IntakeForm initialService={service} />
      </div>
    </main>
  );
}
