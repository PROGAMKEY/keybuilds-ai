import type { Metadata } from "next";
import Link from "next/link";
import { DiscoverForm } from "./form";

export const metadata: Metadata = {
  title: "AISV Discovery Brief — Key Builds AI",
  description:
    "Apply for the AI Search Visibility Kit. 10 minutes. We'll review and respond within 1 business day.",
  alternates: { canonical: "https://keybuilds.ai/aisv/discover" },
  robots: { index: false, follow: true }, // intake form, not for SEO
};

export default function DiscoverPage() {
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
          AISV Discovery Brief
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
          Tell me about the site.
        </h1>

        <p
          className="mb-10 leading-relaxed"
          style={{
            color: "rgba(237, 233, 223, 0.75)",
            fontSize: "clamp(1.05rem, 1.5vw, 1.15rem)",
            lineHeight: 1.6,
          }}
        >
          10 minutes. I read every brief personally and respond within 1
          business day with whether it's a fit, what tier makes sense, and
          a Calendly link if it goes further.
        </p>

        <DiscoverForm />
      </div>
    </main>
  );
}
