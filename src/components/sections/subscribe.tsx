"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { SectionEyebrow } from "@/components/ui/editorial";

export function Subscribe() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setState("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      setState("success");
      setMessage(
        "You're in. Field Notes Vol. 01 is downloading now — and the next issue lands in your inbox."
      );
      // Trigger PDF download
      if (data.pdf) {
        const link = document.createElement("a");
        link.href = data.pdf;
        link.download = "ai-field-notes-vol-01.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section id="subscribe" className="py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <SectionEyebrow num="08" label="The newsletter" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-10 grid grid-cols-12 gap-x-6 gap-y-8 items-start"
        >
          <div className="col-span-12 md:col-span-7">
            <h2
              className="editorial-italic mb-5"
              style={{
                color: "#EDE9DF",
                fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
              }}
            >
              Get free AI tips.
            </h2>
            <p
              className="leading-relaxed mb-6"
              style={{
                color: "rgba(237, 233, 223, 0.7)",
                fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
                lineHeight: 1.65,
              }}
            >
              Drop your email and I&rsquo;ll send you{" "}
              <span style={{ color: "#3E8E6B" }}>
                AI Field Notes Vol. 01 — 10 AI builds that bought back my time
              </span>
              . You&rsquo;ll also get the weekly newsletter — real builds, no
              jargon, no gatekeeping.
            </p>

            <ul className="text-sm space-y-2 mb-8" style={{ color: "rgba(237, 233, 223, 0.6)" }}>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block w-1.5 h-1.5" style={{ backgroundColor: "#3E8E6B" }} aria-hidden />
                <span>Lead magnet: AI Field Notes Vol. 01 PDF (instant)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block w-1.5 h-1.5" style={{ backgroundColor: "#3E8E6B" }} aria-hidden />
                <span>Weekly issue: real builds + step-by-step breakdowns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block w-1.5 h-1.5" style={{ backgroundColor: "#3E8E6B" }} aria-hidden />
                <span>Free forever. Unsubscribe anytime.</span>
              </li>
            </ul>
          </div>

          <div
            className="col-span-12 md:col-span-5 md:pl-8 md:border-l"
            style={{ borderLeftColor: "rgba(62, 142, 107, 0.25)" }}
          >
            <div className="mono-caps mb-3" style={{ color: "rgba(237, 233, 223, 0.5)" }}>
              Drop your email
            </div>

            {state !== "success" ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={state === "loading"}
                  className="block w-full px-4 py-3 rounded-md bg-[#1A2120] border outline-none transition-colors"
                  style={{
                    borderColor: "rgba(237, 233, 223, 0.12)",
                    color: "#EDE9DF",
                    fontSize: "16px",
                  }}
                />
                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="block w-full px-7 py-4 rounded-md font-heading font-semibold text-base transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: "#3E8E6B",
                    color: "#0C0E0D",
                    boxShadow: "0 8px 30px rgba(62, 142, 107, 0.28)",
                  }}
                >
                  {state === "loading" ? "Sending…" : "Get the PDF + tips →"}
                </button>
                {state === "error" && (
                  <p className="text-sm" style={{ color: "#A85245" }}>
                    {message}
                  </p>
                )}
              </form>
            ) : (
              <div
                className="p-5 rounded-md border"
                style={{
                  borderColor: "rgba(62, 142, 107, 0.4)",
                  backgroundColor: "rgba(62, 142, 107, 0.08)",
                }}
              >
                <div className="mono-caps mb-2" style={{ color: "#3E8E6B" }}>
                  You&rsquo;re in
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(237, 233, 223, 0.85)" }}>
                  {message}
                </p>
                <a
                  href="/assets/ai-field-notes-vol-01.pdf"
                  className="inline-block mt-3 mono-caps"
                  style={{ color: "#3E8E6B" }}
                >
                  Re-download PDF →
                </a>
              </div>
            )}

            <p className="mt-4 text-xs" style={{ color: "rgba(237, 233, 223, 0.35)" }}>
              I&rsquo;ll never sell your email. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
