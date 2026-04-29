"use client";

import { motion } from "framer-motion";

const socials = [
  {
    name: "TikTok",
    href: "#",
    handle: "@keybuilds.ai",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/keybuilds.ai/",
    handle: "@keybuilds.ai",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/keym/",
    handle: "/in/keym",
  },
  {
    name: "YouTube",
    href: "#",
    handle: "@keybuildsai",
  },
];

export function Socials() {
  return (
    <section className="py-16 sm:py-20 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="mono-caps mb-6" style={{ color: "rgba(237, 233, 223, 0.55)" }}>
          Find me on
        </div>
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
        >
          {socials.map((social, i) => (
            <motion.li
              key={social.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border-t py-5"
              style={{ borderTopColor: "rgba(237, 233, 223, 0.1)" }}
            >
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div
                  className="font-heading font-bold flex items-center gap-2"
                  style={{ color: "#EDE9DF", fontSize: "1.2rem", letterSpacing: "-0.015em" }}
                >
                  {social.name}
                  <span
                    className="inline-block transition-transform group-hover:translate-x-1"
                    style={{ color: "#3E8E6B" }}
                  >
                    &rarr;
                  </span>
                </div>
                <div className="mono-caps mt-1" style={{ color: "rgba(237, 233, 223, 0.4)" }}>
                  {social.handle}
                </div>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
