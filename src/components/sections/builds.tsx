"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Layers,
  Bot,
  FileText,
  TrendingUp,
  Calendar,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "AI-Powered Websites",
    desc: "Full sites with SEO, booking, and Schema.org. Deployed in hours",
  },
  {
    icon: Layers,
    title: "Automation Workflows",
    desc: "n8n, Make, Zapier, MCP. Connect your tools and kill busywork",
  },
  {
    icon: Bot,
    title: "Custom AI Agents",
    desc: "Claude Code skills, chatbots, and agents that work for your business",
  },
  {
    icon: FileText,
    title: "SOPs and Documentation",
    desc: "Professional SOPs as Google Docs with automatable Claude Code skills",
  },
  {
    icon: TrendingUp,
    title: "SEO and Growth Systems",
    desc: "Schema markup, content calendars, dashboards, and ranking strategy",
  },
  {
    icon: Calendar,
    title: "Content Systems",
    desc: "Calendars, dashboards, Notion trackers, and repurposing workflows",
  },
];

const projects = [
  {
    tag: "Website + SEO",
    title: "Scales in Justice",
    desc: "Criminal defense attorney site with 6 practice areas, review schema, FAQ rich snippets, and Calendly booking.",
    stat: "85/100",
    statLabel: "SEO Score",
    gradient: "from-indigo-600/20 to-blue-600/20",
    href: "https://scalesinjustice.com",
  },
  {
    tag: "Notion + Dashboard",
    title: "Social Media Growth HQ",
    desc: "Full Notion dashboard with weekly metrics, 6 chart views, content calendar, and milestone tracking to 4M.",
    stat: "6 Views",
    statLabel: "Built in 1 Hour",
    gradient: "from-violet-600/20 to-purple-600/20",
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
            <h2 className="font-heading text-sm font-bold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-teal-400">
              What I Build
            </h2>
            <div className="h-[2px] w-10 bg-gradient-to-r from-indigo-500 to-teal-500 rounded" />
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
                className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-indigo-500/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-teal-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-indigo-500/30 group-hover:to-teal-500/30 transition-all">
                  <service.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-0.5">
                    {service.title}
                  </h3>
                  <p className="text-xs text-white/35 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Builds */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-heading text-sm font-bold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-teal-400">
              Recent Builds
            </h2>
            <div className="h-[2px] w-10 bg-gradient-to-r from-indigo-500 to-teal-500 rounded" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {projects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.href || "#"}
                target={project.href ? "_blank" : undefined}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="block rounded-xl bg-white/[0.02] border border-white/[0.05] overflow-hidden hover:border-indigo-500/20 transition-all group"
              >
                <div
                  className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center border-b border-white/[0.05]`}
                >
                  <span className="font-heading text-xl font-bold text-white/60 group-hover:text-white/80 transition-colors">
                    {project.title}
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-teal-400">
                    {project.tag}
                  </span>
                  <h3 className="text-sm font-semibold text-white mt-1 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/35 leading-relaxed mb-3">
                    {project.desc}
                  </p>
                  <div>
                    <span className="text-xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-teal-400">
                      {project.stat}
                    </span>
                    <span className="text-[10px] text-white/30 ml-2">
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
