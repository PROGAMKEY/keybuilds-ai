"use client";

import { useState, FormEvent } from "react";

const SERVICES = [
  { value: "audit", label: "AI audit ($1,997)" },
  { value: "tutoring", label: "1:1 tutoring" },
  { value: "qa", label: "Office hours / Q&A" },
  { value: "speaking", label: "Speaking / brand deals" },
  { value: "apex", label: "Apex personal assistant" },
  { value: "booking", label: "Booking system for small business" },
  { value: "cohort", label: "“Burn the Gate” cohort" },
  { value: "other", label: "Something else" },
];

const TIMELINE = [
  "ASAP (this week)",
  "Within 30 days",
  "Within 90 days",
  "Researching, no rush",
];

export function IntakeForm({ initialService = "default" }: { initialService?: string }) {
  const [service, setService] = useState(
    initialService === "default" ? "" : initialService
  );
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
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Submission failed");
      setState("success");
      setMessage(
        "Got it. I read every submission personally. Reply lands in your inbox within 1 business day."
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
          Submission received
        </div>
        <p className="leading-relaxed" style={{ color: "rgba(237, 233, 223, 0.85)" }}>
          {message}
        </p>
      </div>
    );
  }

  const showSpeaking = service === "speaking";
  const showProject = ["audit", "apex", "booking", "tutoring", "cohort", "other"].includes(service);

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <FieldGroup label="01" title="Which service?">
        <Select
          name="service"
          label="Service"
          options={SERVICES}
          required
          value={service}
          onChange={setService}
        />
      </FieldGroup>

      <FieldGroup label="02" title="Who are you?">
        <Field name="full_name" label="Full name" required />
        <Field name="email" label="Email" type="email" required />
        <Field name="company" label="Company / project" />
      </FieldGroup>

      {showSpeaking && (
        <FieldGroup label="03" title="The event">
          <Field name="event_name" label="Event / show name" required />
          <Field name="event_date" label="Event date" type="date" />
          <Field name="audience_size" label="Audience size" placeholder="e.g. 250 attendees" />
          <Field name="budget" label="Budget range (USD)" placeholder="e.g. $5K-10K, or 'flexible'" />
          <Field name="topic" label="Topic / format" textarea rows={3} placeholder="Keynote, panel, fireside, sponsored content…" required />
        </FieldGroup>
      )}

      {showProject && (
        <FieldGroup label="03" title="The project">
          {service === "cohort" && (
            <Field
              name="why_cohort"
              label="What ONE workflow do you want to ship in 30 days?"
              textarea
              rows={4}
              placeholder="e.g. Auto-summarize my client meetings into action items"
              required
            />
          )}
          {service === "booking" && (
            <>
              <Field name="business_type" label="Business type" placeholder="Salon, gym, coach, attorney…" required />
              <Field name="current_tools" label="Current scheduling tools (if any)" placeholder="Calendly, Google Calendar, paper book…" />
            </>
          )}
          {service === "audit" && (
            <Field name="website_url" label="Website URL (if any)" type="url" placeholder="https://" />
          )}
          {service === "apex" && (
            <Field
              name="role"
              label="What role / use case is the assistant for?"
              placeholder="Founder, executive, content creator, finance ops, etc."
              required
            />
          )}
          <Field
            name="goal"
            label="What outcome are you hoping for?"
            textarea
            rows={4}
            required
          />
          <Select name="timeline" label="Timeline" options={TIMELINE} required />
        </FieldGroup>
      )}

      <FieldGroup label={showSpeaking || showProject ? "04" : "03"} title="Anything else">
        <Field name="notes" label="Anything else I should know?" textarea rows={3} />
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
        {state === "loading" ? "Sending…" : "Send →"}
      </button>

      <p className="text-xs mt-2" style={{ color: "rgba(237, 233, 223, 0.4)" }}>
        Submission goes to key@keybuilds.ai. I read every one personally.
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
  value,
  onChange,
}: {
  name: string;
  label: string;
  options: Array<string | { value: string; label: string }>;
  required?: boolean;
  value?: string;
  onChange?: (v: string) => void;
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
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        defaultValue={value === undefined ? "" : undefined}
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
          const v = isObj ? opt.value : opt;
          const labelText = isObj ? opt.label : opt;
          return (
            <option key={v} value={v}>
              {labelText}
            </option>
          );
        })}
      </select>
    </label>
  );
}
