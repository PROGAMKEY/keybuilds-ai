import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "src/content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO yyyy-mm-dd
  updated?: string;
  author: string;
  tags: string[];
  cover?: string;
  draft?: boolean;
  readingMinutes: number;
};

export type Post = PostMeta & {
  contentHtml: string;
  contentMarkdown: string;
};

function readPostFile(slug: string): { data: matter.GrayMatterFile<string>["data"]; content: string } {
  const file = path.join(POSTS_DIR, `${slug}.md`);
  const raw = fs.readFileSync(file, "utf-8");
  const parsed = matter(raw);
  return { data: parsed.data, content: parsed.content };
}

function buildMeta(slug: string, data: Record<string, unknown>, content: string): PostMeta {
  const stats = readingTime(content);
  return {
    slug,
    title: String(data.title ?? slug),
    excerpt: String(data.excerpt ?? ""),
    date: String(data.date ?? new Date().toISOString().slice(0, 10)),
    updated: data.updated ? String(data.updated) : undefined,
    author: String(data.author ?? "Key Builds AI"),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    cover: data.cover ? String(data.cover) : undefined,
    draft: Boolean(data.draft),
    readingMinutes: Math.max(1, Math.round(stats.minutes)),
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPostsMeta(): PostMeta[] {
  return getAllSlugs()
    .map((slug) => {
      const { data, content } = readPostFile(slug);
      return buildMeta(slug, data, content);
    })
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  if (!getAllSlugs().includes(slug)) return null;
  const { data, content } = readPostFile(slug);
  const meta = buildMeta(slug, data, content);
  if (meta.draft) return null;
  marked.setOptions({ gfm: true, breaks: false });
  const contentHtml = marked.parse(content) as string;
  return { ...meta, contentHtml, contentMarkdown: content };
}
