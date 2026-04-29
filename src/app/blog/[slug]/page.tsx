import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllSlugs, getPostBySlug, getAllPostsMeta } from "@/lib/blog";

type Params = { slug: string };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `https://keybuilds.ai/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: post.cover ?? "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@keybuildsai",
      creator: "@keybuildsai",
      title: post.title,
      description: post.excerpt,
      images: [post.cover ?? "/og-image.png"],
    },
  };
}

export default async function BlogPost(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Related posts: same tag intersection or just next 3 chronologically
  const allPosts = getAllPostsMeta();
  const related = allPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      const aOverlap = a.tags.filter((t) => post.tags.includes(t)).length;
      const bOverlap = b.tags.filter((t) => post.tags.includes(t)).length;
      return bOverlap - aOverlap;
    })
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: {
      "@type": "Person",
      name: "Key Builds AI",
      url: "https://keybuilds.ai",
    },
    publisher: {
      "@type": "Organization",
      name: "Key Builds AI",
      logo: {
        "@type": "ImageObject",
        url: "https://keybuilds.ai/brand-assets/logo-mark/on-onyx/512.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://keybuilds.ai/blog/${post.slug}`,
    },
    image: post.cover ? `https://keybuilds.ai${post.cover}` : "https://keybuilds.ai/og-image.png",
    keywords: post.tags.join(", "),
    wordCount: post.contentMarkdown.split(/\s+/).length,
    timeRequired: `PT${post.readingMinutes}M`,
  };

  return (
    <main className="min-h-screen px-6 sm:px-10 py-20 sm:py-28">
      <article className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="mono-caps inline-block mb-10"
          style={{ color: "rgba(237, 233, 223, 0.55)" }}
        >
          &larr; All field notes
        </Link>

        <div className="mono-caps mb-4" style={{ color: "#3E8E6B" }}>
          {post.date} · {post.readingMinutes} min read
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
          {post.title}
        </h1>

        <p
          className="mb-10 leading-relaxed"
          style={{
            color: "rgba(237, 233, 223, 0.85)",
            fontSize: "clamp(1.1rem, 1.6vw, 1.25rem)",
            lineHeight: 1.55,
          }}
        >
          {post.excerpt}
        </p>

        <div
          className="prose-editorial"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {post.tags.length > 0 && (
          <div
            className="mt-12 pt-6 border-t flex flex-wrap gap-2"
            style={{ borderTopColor: "rgba(237, 233, 223, 0.08)" }}
          >
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="mono-caps px-2.5 py-1 rounded"
                style={{
                  color: "rgba(237, 233, 223, 0.7)",
                  backgroundColor: "rgba(62, 142, 107, 0.12)",
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {related.length > 0 && (
          <section
            className="mt-16 pt-10 border-t"
            style={{ borderTopColor: "rgba(237, 233, 223, 0.08)" }}
          >
            <div className="mono-caps mb-6" style={{ color: "rgba(237, 233, 223, 0.55)" }}>
              Keep reading
            </div>
            <ul className="space-y-4">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="block group">
                    <h3
                      className="font-heading font-bold"
                      style={{ color: "#EDE9DF", fontSize: "1.15rem" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-sm mt-1" style={{ color: "rgba(237, 233, 223, 0.55)" }}>
                      {p.excerpt}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section
          className="mt-16 pt-10 border-t"
          style={{ borderTopColor: "rgba(237, 233, 223, 0.08)" }}
        >
          <p style={{ color: "rgba(237, 233, 223, 0.65)" }}>
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
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </main>
  );
}
