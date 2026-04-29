import Link from "next/link";
import type { Metadata } from "next";
import { getAllPostsMeta } from "@/lib/blog";
import { SectionEyebrow } from "@/components/ui/editorial";

export const metadata: Metadata = {
  title: "Field Notes — Key Builds AI",
  description:
    "Weekly field notes from a full stack software engineer building with AI every day. Real builds, time saved, what worked, what broke.",
  alternates: { canonical: "https://keybuilds.ai/blog" },
  openGraph: {
    title: "Field Notes — Key Builds AI",
    description:
      "Weekly field notes from a full stack software engineer building with AI every day.",
    url: "https://keybuilds.ai/blog",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function BlogIndex() {
  const posts = getAllPostsMeta();

  return (
    <main className="min-h-screen px-6 sm:px-10 py-20 sm:py-28">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="mono-caps inline-block mb-10"
          style={{ color: "rgba(237, 233, 223, 0.55)" }}
        >
          &larr; Back to home
        </Link>

        <SectionEyebrow num="—" label="Field notes" />

        <h1
          className="mt-6 mb-4 editorial-italic"
          style={{
            color: "#EDE9DF",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
          }}
        >
          What I&rsquo;m building this week.
        </h1>

        <p
          className="max-w-xl mb-16 leading-relaxed"
          style={{
            color: "rgba(237, 233, 223, 0.65)",
            fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
            lineHeight: 1.65,
          }}
        >
          One real build per week. The receipts, the prompts, the workflow,
          and the version you can ship this weekend.
        </p>

        {posts.length === 0 ? (
          <p style={{ color: "rgba(237, 233, 223, 0.55)" }}>
            First issue lands soon.
          </p>
        ) : (
          <ul>
            {posts.map((post, i) => (
              <li
                key={post.slug}
                className="border-t py-7 sm:py-8"
                style={{ borderTopColor: "rgba(237, 233, 223, 0.08)" }}
              >
                <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 sm:col-span-3 mono-caps" style={{ color: "rgba(237, 233, 223, 0.5)" }}>
                      <span style={{ color: "#3E8E6B" }}>0{i + 1}</span>
                      <span className="ml-3">{post.date}</span>
                    </div>
                    <div className="col-span-12 sm:col-span-9">
                      <h2
                        className="font-heading font-bold mb-2"
                        style={{
                          color: "#EDE9DF",
                          fontSize: "clamp(1.4rem, 2.4vw, 1.75rem)",
                          letterSpacing: "-0.02em",
                          lineHeight: 1.2,
                        }}
                      >
                        {post.title}
                      </h2>
                      <p
                        className="text-sm sm:text-base leading-relaxed mb-3"
                        style={{ color: "rgba(237, 233, 223, 0.65)" }}
                      >
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3 mono-caps" style={{ color: "rgba(237, 233, 223, 0.4)" }}>
                        <span>{post.readingMinutes} min read</span>
                        {post.tags.length > 0 && (
                          <>
                            <span aria-hidden>·</span>
                            <span style={{ color: "#3E8E6B" }}>{post.tags.slice(0, 3).join(" · ")}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-16 pt-10 border-t" style={{ borderTopColor: "rgba(237, 233, 223, 0.08)" }}>
          <p style={{ color: "rgba(237, 233, 223, 0.55)" }}>
            Want the next issue in your inbox?
          </p>
          <Link
            href="/#subscribe"
            className="inline-block mt-4 px-6 py-3 rounded-md font-heading font-semibold text-sm"
            style={{
              backgroundColor: "#3E8E6B",
              color: "#0C0E0D",
              boxShadow: "0 8px 30px rgba(62, 142, 107, 0.25)",
            }}
          >
            Subscribe to Field Notes &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
