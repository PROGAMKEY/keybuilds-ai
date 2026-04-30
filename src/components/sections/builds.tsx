"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/editorial";

const services = [
  { title: "AI-powered websites", desc: "Full sites with SEO, booking, and AI-search optimization built in. Deployed in hours, not months." },
  { title: "Automation workflows", desc: "Connect your tools — n8n, Make, Zapier, MCP — so the busywork runs itself." },
  { title: "Custom AI agents", desc: "Chatbots and agents that handle real work for your business, not toy demos." },
  { title: "SOPs and documentation", desc: "Polished SOPs in Google Docs, paired with Claude Code skills that automate the steps." },
  { title: "SEO and growth systems", desc: "Schema markup, content calendars, dashboards, and a clear plan to climb." },
  { title: "Content systems", desc: "Calendars, dashboards, Notion trackers, and repurposing workflows that ship weekly." },
];

const apps = [
  {
    tag: "Personal assistant",
    title: "Apex",
    desc: "An AI assistant built for one specific role. Handles inbox, calendar, content, research, and ops — in your voice, in the tools you already use.",
    stat: "Custom",
    statLabel: "Per role, per voice",
  },
  {
    tag: "Wellness app",
    title: "Zu-Well",
    desc: "AI wellness app. Currently in QA. More to come.",
    stat: "Soon",
    statLabel: "Stealth · in QA",
  },
  {
    tag: "Sister brand",
    title: "Key's Touch",
    desc: "My AI consultancy for mid-market and enterprise — done-with-you and done-for-you implementation.",
    stat: "Live",
    statLabel: "keystouch.com",
    href: "https://keystouch.com",
  },
  {
    tag: "Skills library",
    title: "Custom skills + agents",
    desc: "73 skills installed. 11 custom agents. 23 slash commands. Covering marketing, finance, engineering, ops, and exec work — all shipping.",
    stat: "100+",
    statLabel: "Tools in arsenal",
  },
  {
    tag: "Digital product",
    title: "AI Field Notes",
    desc: "Free 12-page PDF — 10 AI builds that bought back my time. Each one with a takeaway you can ship this weekend.",
    stat: "Vol. 01",
    statLabel: "Free download",
    href: "/assets/ai-field-notes-vol-01.pdf",
  },
  {
    tag: "Catalog",
    title: "Templates + digital products",
    desc: "The full shop — Notion dashboards, Claude skills, custom GPTs, prompt libraries, agent kits.",
    stat: "Shop",
    statLabel: "go.keybuilds.ai",
    href: "https://go.keybuilds.ai",
  },
];

const projects = [
  {
    tag: "Website + SEO",
    title: "Scales in Justice",
    desc: "Criminal defense site — 6 practice areas, review schema, FAQ snippets, Calendly booking. Built to rank.",
    stat: "85/100",
    statLabel: "SEO score",
    href: "https://scalesinjustice.com",
  },
  {
    tag: "Notion + dashboard",
    title: "Social Media Growth HQ",
    desc: "Full Notion dashboard — weekly metrics, 6 chart views, content calendar, milestone tracker to 4M followers.",
    stat: "6 views",
    statLabel: "Built in 1 hour",
  },
];

export function Builds() {
  return (
    <section id="builds" className="py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <SectionEyebrow num="06" label="The work" />

        <h2
          className="mt-8 mb-14 editorial-italic"
          style={{
            color: "#EDE9DF",
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          What I build, ship, and teach.
        </h2>

        {/* Services — reading-list style */}
        <div className="mb-20">
          <div className="mono-caps mb-6" style={{ color: "rgba(237, 233, 223, 0.55)" }}>
            What I build
          </div>
          <ul>
            {services.map((service, i) => (
              <motion.li
                key={service.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.55 }}
                className="grid grid-cols-12 gap-4 py-5 border-t"
                style={{ borderTopColor: "rgba(237, 233, 223, 0.08)" }}
              >
                <div className="col-span-1 mono-caps pt-1" style={{ color: "rgba(62, 142, 107, 0.7)" }}>
                  0{i + 1}
                </div>
                <h3
                  className="col-span-11 sm:col-span-4 font-heading font-bold"
                  style={{ color: "#EDE9DF", fontSize: "1.15rem", letterSpacing: "-0.015em" }}
                >
                  {service.title}
                </h3>
                <p
                  className="col-span-12 sm:col-span-7 text-sm sm:text-base leading-relaxed"
                  style={{ color: "rgba(237, 233, 223, 0.6)" }}
                >
                  {service.desc}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Apps and properties — feature spread */}
        <div className="mb-20">
          <div className="mono-caps mb-6" style={{ color: "rgba(237, 233, 223, 0.55)" }}>
            Apps and properties
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(237, 233, 223, 0.08)" }}>
            {apps.map((app, i) => (
              <motion.a
                key={app.title}
                href={app.href || "#"}
                target={app.href && app.href.startsWith("http") ? "_blank" : undefined}
                rel={app.href && app.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -2 }}
                className="block p-7 transition-colors group"
                style={{ backgroundColor: "#0C0E0D" }}
              >
                <span
                  className="mono-caps"
                  style={{ color: "#3E8E6B" }}
                >
                  {app.tag}
                </span>
                <h3
                  className="font-heading font-bold mt-3 mb-3"
                  style={{ color: "#EDE9DF", fontSize: "1.4rem", letterSpacing: "-0.02em" }}
                >
                  {app.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "rgba(237, 233, 223, 0.55)" }}
                >
                  {app.desc}
                </p>
                <div className="flex items-baseline gap-2">
                  <span
                    className="font-heading font-black tabular-nums"
                    style={{ color: "#3E8E6B", fontSize: "2rem", letterSpacing: "-0.03em", lineHeight: 1 }}
                  >
                    {app.stat}
                  </span>
                  <span
                    className="mono-caps"
                    style={{ color: "rgba(237, 233, 223, 0.4)" }}
                  >
                    {app.statLabel}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Recent client builds — wider cards */}
        <div>
          <div className="mono-caps mb-6" style={{ color: "rgba(237, 233, 223, 0.55)" }}>
            Recent client builds
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "rgba(237, 233, 223, 0.08)" }}>
            {projects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.href || "#"}
                target={project.href ? "_blank" : undefined}
                rel={project.href ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -2 }}
                className="block p-7 transition-colors group"
                style={{ backgroundColor: "#0C0E0D" }}
              >
                <span
                  className="mono-caps"
                  style={{ color: "#3E8E6B" }}
                >
                  {project.tag}
                </span>
                <h3
                  className="font-heading font-bold mt-3 mb-3"
                  style={{ color: "#EDE9DF", fontSize: "1.5rem", letterSpacing: "-0.02em" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "rgba(237, 233, 223, 0.55)" }}
                >
                  {project.desc}
                </p>
                <div className="flex items-baseline gap-2">
                  <span
                    className="font-heading font-black tabular-nums"
                    style={{ color: "#3E8E6B", fontSize: "2.25rem", letterSpacing: "-0.03em", lineHeight: 1 }}
                  >
                    {project.stat}
                  </span>
                  <span
                    className="mono-caps"
                    style={{ color: "rgba(237, 233, 223, 0.4)" }}
                  >
                    {project.statLabel}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
