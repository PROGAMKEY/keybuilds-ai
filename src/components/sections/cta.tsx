"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto"
      >
        <div
          className="relative rounded-2xl border p-8 sm:p-10 text-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(62, 142, 107, 0.10) 0%, rgba(31, 77, 58, 0.10) 100%)",
            borderColor: "rgba(237, 233, 223, 0.06)",
          }}
        >
          <h2
            className="font-heading text-2xl sm:text-3xl font-bold mb-3"
            style={{ color: "#EDE9DF" }}
          >
            Start your AI journey.
          </h2>
          <p
            className="text-sm mb-6"
            style={{ color: "rgba(237, 233, 223, 0.55)" }}
          >
            Follow me on socials for daily builds. Subscribe for the weekly
            breakdown. DM me when you&rsquo;re ready to go deeper. For
            company-side AI work, jump to{" "}
            <a
              href="https://keystouch.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
              style={{ color: "#3E8E6B" }}
            >
              Key&rsquo;s Touch
            </a>
            .
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="#subscribe"
              className="px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: "#3E8E6B",
                color: "#0C0E0D",
                boxShadow: "0 8px 30px rgba(62, 142, 107, 0.25)",
              }}
            >
              Get free AI tips &rarr;
            </a>
            <a
              href="mailto:key@keybuilds.ai"
              className="px-6 py-3 rounded-xl bg-[#1A2120] border font-semibold text-sm transition-all"
              style={{
                borderColor: "rgba(237, 233, 223, 0.10)",
                color: "rgba(237, 233, 223, 0.75)",
              }}
            >
              Work with me
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
