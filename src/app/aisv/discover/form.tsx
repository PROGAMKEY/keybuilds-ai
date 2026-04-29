"use client";

import { useState, FormEvent } from "react";

const TIERS = [
  { value: "kbai-addon", label: "AISV add-on with a new website build ($997)" },
  { value: "kbai-standalone", label: "AISV standalone retrofit on existing site ($1,997)" },
  { value: "kt-bundled", label: "Full Key's Touch website build (AISV included)" },
  { value: "kt-standalone", label: "Key's Touch retrofit + governance overlay ($3,997)" },
  { value: "monitoring", label: "Just ongoing monitoring ($297/mo)" },
  { value: "unsure", label: "Not sure — recommend the right tier" },
];

const STACKS = [
  "WordPress",
  "Webflow",
  "Squarespace",
  "Shopify",
  "Wix",
  "Next.js",
  "Custom",
  "Other / not sure",
];

const TIMELINES = [
  "ASAP (this week)",
  "Within 30 days",
  "Within 90 days",
  "Researching, no rush",
];

export function DiscoverForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setMessage("");

    const fd = new FormData(e.currentTarget);
    const payload: Record<string, string> = {};
    fd.forEach((v, k) => (payload[k] = String(v)));

    try {
      const res = await fetch("/api/aisv/discover", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Submission failed");
      setState("success");
      setMessage(
        "Got it. I'll read your brief and respond within 1 business day."
      );
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (state === "success") {
    return (
      <div
        className="p-8 rounded-md border"
        style={{
          borderColor: "rgba(62, 142, 107, 0.4)",
          backgroundColor: "rgba(62, 142, 107, 0.06)",
        }}
      >
        <div className="mono-caps mb-3" style={{ color: "#3E8E6B" }}>
          Brief received
        </div>
        <p className="leading-relaxed mb-4" style={{ color: "rgba(237, 233, 223, 0.85)" }}>
          {message}
        </p>
        <p className="leading-relaxed mb-4" style={{ color: "rgba(237, 233, 223, 0.85)" }}>
          If you want to skip the queue,{" "}
          <a
            href="https://calendly.com/key-keybuilds/aisv-discovery"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#3E8E6B", textDecoration: "underline" }}
          >
            book the 30-min discovery call directly
          </a>{" "}
          and we&rsquo;ll cover scope, tier, and timing.
        </p>
        <p className="text-sm" style={{ color: "rgba(237, 233, 223, 0.55)" }}>
          In the meantime: download the{" "}
          <a href="/assets/key-builds-ai-services.pdf" style={{ color: "#3E8E6B" }}>
            services catalog PDF
          </a>{" "}
          or read{" "}
          <a href="/blog" style={{ color: "#3E8E6B" }}>
            Field Notes
          </a>
          .
        </p>
      </div>
    );
  }

  const fieldStyle = {
    borderColor: "rgba(237, 233, 223, 0.12)",
    color: "#EDE9DF",
    fontSize: "16px",
    backgroundColor: "#1A2120",
  } as const;

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <FieldGroup label="01" title="Who are you?">
        <Field name="full_name" label="Full name" required />
        <Field name="email" label="Email" type="email" required />
        <Field name="role" label="Role / title" placeholder="Founder, Operator, Marketing Director…" required />
        <Field name="company" label="Company name" required />
      </FieldGroup>

      <FieldGroup label="02" title="The site">
        <Field name="website_url" label="Website URL" type="url" placeholder="https://" required />
        <Select name="stack" label="What's it built on?" options={STACKS} required />
        <Field
          name="competitors"
          label="3 competitors you want to outrank (one per line OK)"
          textarea
          rows={3}
        />
      </FieldGroup>

      <FieldGroup label="03" title="What you sell">
        <Field
          name="services"
          label="Top 5-10 services / products (1 line each)"
          textarea
          rows={6}
          placeholder={"e.g.\n1:1 coaching · $300/hr\nGroup workshops · $99\n…"}
          required
        />
        <Field
          name="ideal_customer"
          label="Who's your ideal customer? (industry, size, role, pain)"
          textarea
          rows={3}
          required
        />
      </FieldGroup>

      <FieldGroup label="04" title="Search goals">
        <Field
          name="priority_queries"
          label="10-20 priority search queries (one per line)"
          textarea
          rows={6}
          placeholder={"e.g.\nbest CRM for solo coaches\nAI scheduler for therapists"}
          required
        />
        <Field
          name="faq_questions"
          label="4-8 most common buyer questions (one per line, used for FAQ schema)"
          textarea
          rows={5}
        />
      </FieldGroup>

      <FieldGroup label="05" title="Engagement">
        <Select name="tier" label="Which tier looks right?" options={TIERS} required />
        <Select name="timeline" label="Timeline" options={TIMELINES} required />
        <Field
          name="notes"
          label="Anything else I should know?"
          textarea
          rows={4}
        />
        <Field name="how_heard" label="How did you hear about Key Builds AI?" />
      </FieldGroup>

      {state === "error" && (
        <p className="text-sm" style={{ color: "#A85245" }}>
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="px-8 py-4 rounded-md font-heading font-semibold transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          backgroundColor: "#3E8E6B",
          color: "#0C0E0D",
          fontSize: "1rem",
          boxShadow: "0 8px 30px rgba(62, 142, 107, 0.28)",
        }}
      >
        {state === "loading" ? "Sending…" : "Submit brief →"}
      </button>

      <p className="text-xs mt-2" style={{ color: "rgba(237, 233, 223, 0.4)" }}>
        Your brief goes straight to key@keybuilds.ai. I read every one personally.
      </p>
    </form>
  );
}

function FieldGroup({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <fieldset className="border-t pt-6" style={{ borderTopColor: "rgba(237, 233, 223, 0.1)" }}>
      <legend className="mono-caps mb-1" style={{ color: "#3E8E6B" }}>
        {label}
      </legend>
      <h2
        className="font-heading font-bold mb-5"
        style={{ color: "#EDE9DF", fontSize: "1.25rem", letterSpacing: "-0.015em" }}
      >
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </fieldset>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
  placeholder,
  textarea = false,
  rows = 3,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  textarea?: boolean;
  rows?: number;
}) {
  const cls = "block w-full px-4 py-3 rounded-md border outline-none transition-colors";
  const style = {
    borderColor: "rgba(237, 233, 223, 0.12)",
    color: "#EDE9DF",
    fontSize: "16px",
    backgroundColor: "#1A2120",
  };
  return (
    <label className="block">
      <span
        className="block mb-1.5 text-sm"
        style={{ color: "rgba(237, 233, 223, 0.7)" }}
      >
        {label}
        {required && <span style={{ color: "#3E8E6B" }}> *</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={rows}
          className={cls + " resize-vertical"}
          style={style}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className={cls}
          style={style}
        />
      )}
    </label>
  );
}

function Select({
  name,
  label,
  options,
  required = false,
}: {
  name: string;
  label: string;
  options: Array<string | { value: string; label: string }>;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span
        className="block mb-1.5 text-sm"
        style={{ color: "rgba(237, 233, 223, 0.7)" }}
      >
        {label}
        {required && <span style={{ color: "#3E8E6B" }}> *</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="block w-full px-4 py-3 rounded-md border outline-none"
        style={{
          borderColor: "rgba(237, 233, 223, 0.12)",
          color: "#EDE9DF",
          fontSize: "16px",
          backgroundColor: "#1A2120",
        }}
      >
        <option value="" disabled>
          Pick one…
        </option>
        {options.map((opt) => {
          const isObj = typeof opt === "object";
          const value = isObj ? opt.value : opt;
          const labelText = isObj ? opt.label : opt;
          return (
            <option key={value} value={value}>
              {labelText}
            </option>
          );
        })}
      </select>
    </label>
  );
}
