"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function BeehiivEmbed({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
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
      setStatus("success");
      setMessage("Check your inbox.");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Try again");
    }
  }

  if (status === "success") {
    return (
      <div className={className}>
        <div
          className="editorial-italic"
          style={{
            color: "#3E8E6B",
            fontSize: "1.5rem",
            lineHeight: 1.2,
          }}
        >
          {message}
        </div>
        <p className="mt-2 text-sm" style={{ color: "rgba(237, 233, 223, 0.6)" }}>
          AI Field Notes Vol. 01 incoming.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={className} noValidate>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@domain.com"
          disabled={status === "loading"}
          className="flex-1 px-4 py-3 rounded-md text-sm font-heading outline-none transition-colors"
          style={{
            backgroundColor: "rgba(237, 233, 223, 0.04)",
            border: "1px solid rgba(62, 142, 107, 0.3)",
            color: "#EDE9DF",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "#3E8E6B";
            e.currentTarget.style.backgroundColor = "rgba(237, 233, 223, 0.06)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "rgba(62, 142, 107, 0.3)";
            e.currentTarget.style.backgroundColor = "rgba(237, 233, 223, 0.04)";
          }}
        />
        <button
          type="submit"
          disabled={status === "loading" || !email}
          className="px-5 py-3 rounded-md font-heading font-semibold text-sm transition-opacity"
          style={{
            backgroundColor: "#3E8E6B",
            color: "#0C0E0D",
            opacity: status === "loading" || !email ? 0.6 : 1,
            cursor: status === "loading" || !email ? "not-allowed" : "pointer",
          }}
        >
          {status === "loading" ? "Sending…" : "Subscribe →"}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-xs" style={{ color: "#E07B6F" }}>
          {message}
        </p>
      )}
    </form>
  );
}
