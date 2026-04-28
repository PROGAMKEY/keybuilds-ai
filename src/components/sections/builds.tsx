"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Layers,
  Bot,
  FileText,
  TrendingUp,
  Calendar,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "AI-powered websites",
    desc: "Full sites with SEO, booking, and Schema.org. Deployed in hours.",
  },
  {
    icon: Layers,
    title: "Automation workflows",
    desc: "n8n, Make, Zapier, MCP. Connect your tools and kill busywork.",
  },
  {
    icon: Bot,
    title: "Custom AI agents",
    desc: "Claude Code skills, chatbots, and agents that work for your business.",
  },
  {
    icon: FileText,
    title: "SOPs and documentation",
    desc: "Professional SOPs as Google Docs with automatable Claude Code skills.",
  },
  {
    icon: TrendingUp,
    title: "SEO and growth systems",
    desc: "Schema markup, content calendars, dashboards, and ranking strategy.",
  },
  {
    icon: Calendar,
    title: "Content systems",
    desc: "Calendars, dashboards, Notion trackers, and repurposing workflows.",
  },
];

const apps = [
  {
    tag: "Wellness app",
    title: "Zu-Well",
    desc: "Multi-sprint AI wellness app — barcode restaurant scanner, inflammation tracking, custom token-pricing model. Currently in QA.",
    stat: "10+",
    statLabel: "Sprints shipped",
  },
  {
    tag: "Sister brand",
    title: "Keys Touch",
    desc: "AI consultancy for mid-market and enterprise. TOUCH framework, lead-magnet PDF, Calendly intake, fully branded.",
    stat: "Live",
    statLabel: "keystouch.com",
    href: "https://keystouch.com",
  },
  {
    tag: "Skills library",
    title: "Custom skills + agents",
    desc: "73 installed skills, 11 custom agents, 23 slash commands. Marketing, finance, engineering, c-level — all shipping.",
    stat: "100+",
    statLabel: "Tools in arsenal",
  },
];

const projects = [
  {
    tag: "Website + SEO",
    title: "Scales in Justice",
    desc: "Criminal defense attorney site with 6 practice areas, review schema, FAQ rich snippets, and Calendly booking.",
    stat: "85/100",
    statLabel: "SEO score",
    href: "https://scalesinjustice.com",
  },
  {
    tag: "Notion + dashboard",
    title: "Social Media Growth HQ",
    desc: "Full Notion dashboard with weekly metrics, 6 chart views, content calendar, and milestone tracking to 4M.",
    stat: "6 views",
    statLabel: "Built in 1 hour",
  },
];

export function Builds() {
  return (
    <section id="builds" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* What I Build */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <h2
              className="font-heading text-sm font-bold uppercase tracking-widest"
              style={{ color: "#3E8E6B" }}
            >
              What I build
            </h2>
            <div className="h-[2px] w-10 rounded" style={{ backgroundColor: "#3E8E6B" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 4, scale: 1.02 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#1A2120] border border-[#EDE9DF]/[0.05] hover:border-[#3E8E6B]/30 transition-colors group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all"
                  style={{ backgroundColor: "rgba(62, 142, 107, 0.15)" }}
                >
                  <service.icon className="w-5 h-5" style={{ color: "#3E8E6B" }} />
                </div>
                <div>
                  <h3
                    className="text-sm font-semibold mb-0.5"
                    style={{ color: "#EDE9DF" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(237, 233, 223, 0.4)" }}
                  >
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Apps and properties */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <h2
              className="font-heading text-sm font-bold uppercase tracking-widest"
              style={{ color: "#3E8E6B" }}
            >
              Apps and properties
            </h2>
            <div className="h-[2px] w-10 rounded" style={{ backgroundColor: "#3E8E6B" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {apps.map((app, i) => (
              <motion.a
                key={app.title}
                href={app.href || "#"}
                target={app.href ? "_blank" : undefined}
                rel={app.href ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="block rounded-xl bg-[#1A2120] border border-[#EDE9DF]/[0.05] overflow-hidden hover:border-[#3E8E6B]/30 transition-all group p-5"
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: "#3E8E6B" }}
                >
                  {app.tag}
                </span>
                <h3
                  className="text-base font-semibold mt-1 mb-1"
                  style={{ color: "#EDE9DF" }}
                >
                  {app.title}
                </h3>
                <p
                  className="text-xs leading-relaxed mb-3"
                  style={{ color: "rgba(237, 233, 223, 0.4)" }}
                >
                  {app.desc}
                </p>
                <div>
                  <span
                    className="text-xl font-heading font-bold tabular-nums"
                    style={{ color: "#3E8E6B" }}
                  >
                    {app.stat}
                  </span>
                  <span
                    className="text-[10px] ml-2"
                    style={{ color: "rgba(237, 233, 223, 0.35)" }}
                  >
                    {app.statLabel}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Recent client builds */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <h2
              className="font-heading text-sm font-bold uppercase tracking-widest"
              style={{ color: "#3E8E6B" }}
            >
              Recent client builds
            </h2>
            <div className="h-[2px] w-10 rounded" style={{ backgroundColor: "#3E8E6B" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {projects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.href || "#"}
                target={project.href ? "_blank" : undefined}
                rel={project.href ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="block rounded-xl bg-[#1A2120] border border-[#EDE9DF]/[0.05] overflow-hidden hover:border-[#3E8E6B]/30 transition-all group"
              >
                <div
                  className="h-32 flex items-center justify-center border-b border-[#EDE9DF]/[0.05]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(62, 142, 107, 0.12) 0%, rgba(31, 77, 58, 0.18) 100%)",
                  }}
                >
                  <span
                    className="font-heading text-xl font-bold transition-colors"
                    style={{ color: "rgba(237, 233, 223, 0.65)" }}
                  >
                    {project.title}
                  </span>
                </div>
                <div className="p-5">
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: "#3E8E6B" }}
                  >
                    {project.tag}
                  </span>
                  <h3
                    className="text-sm font-semibold mt-1 mb-1"
                    style={{ color: "#EDE9DF" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed mb-3"
                    style={{ color: "rgba(237, 233, 223, 0.4)" }}
                  >
                    {project.desc}
                  </p>
                  <div>
                    <span
                      className="text-xl font-heading font-bold tabular-nums"
                      style={{ color: "#3E8E6B" }}
                    >
                      {project.stat}
                    </span>
                    <span
                      className="text-[10px] ml-2"
                      style={{ color: "rgba(237, 233, 223, 0.35)" }}
                    >
                      {project.statLabel}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
