import { getAllPostsMeta } from "@/lib/blog";

const BASE = "https://keybuilds.ai";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = getAllPostsMeta();
  const buildDate = new Date().toUTCString();

  const items = posts
    .map((p) => {
      const link = `${BASE}/blog/${p.slug}`;
      const pubDate = new Date(p.date).toUTCString();
      return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(p.excerpt)}</description>
      ${p.tags.map((t) => `<category>${escapeXml(t)}</category>`).join("\n      ")}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Key Builds AI — Field Notes</title>
    <link>${BASE}/blog</link>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Weekly field notes from a full stack software engineer + Certified Solutions AI Architect building with AI every day.</description>
    <language>en-US</language>
    <copyright>© 2026 Key Builds AI</copyright>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <managingEditor>key@keybuilds.ai (Key Builds AI)</managingEditor>
    <webMaster>key@keybuilds.ai (Key Builds AI)</webMaster>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
