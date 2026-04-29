import type { MetadataRoute } from "next";
import { getAllPostsMeta } from "@/lib/blog";

const BASE = "https://keybuilds.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().slice(0, 10);

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: today, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/blog`, lastModified: today, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/#services`, lastModified: today, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/#builds`, lastModified: today, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/#about`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/#faq`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/#subscribe`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services.md`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/llms.txt`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/assets/ai-field-notes-vol-01.pdf`, lastModified: today, changeFrequency: "yearly", priority: 0.7 },
    { url: "https://go.keybuilds.ai/", lastModified: today, changeFrequency: "weekly", priority: 0.9 },
  ];

  const posts = getAllPostsMeta().map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: p.updated ?? p.date,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticEntries, ...posts];
}
