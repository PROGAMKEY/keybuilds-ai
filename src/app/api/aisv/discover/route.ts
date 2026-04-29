import { NextRequest, NextResponse } from "next/server";
import { createNotionLeadCard } from "@/lib/notion";

/**
 * POST /api/aisv/discover
 *
 * Captures an AISV Discovery Brief submission.
 *
 * Behavior:
 * 1. Validates 11 required fields + email + URL shape
 * 2. Logs to Vercel runtime (always)
 * 3. If NOTION_TOKEN + NOTION_AISV_DB_ID env vars are set, creates a
 *    card in the AISV Pipeline DB
 *
 * TODO: also forward via Resend for inbox-level visibility
 */

const REQUIRED_FIELDS = [
  "full_name",
  "email",
  "role",
  "company",
  "website_url",
  "stack",
  "services",
  "ideal_customer",
  "priority_queries",
  "tier",
  "timeline",
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data: Record<string, string> = {};
    for (const k of Object.keys(body)) data[k] = String(body[k] ?? "").trim();

    // Validate required
    const missing = REQUIRED_FIELDS.filter((k) => !data[k]);
    if (missing.length) {
      return NextResponse.json(
        { ok: false, error: `Missing fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    // Email shape
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    // URL shape
    try {
      new URL(data.website_url);
    } catch {
      return NextResponse.json({ ok: false, error: "Invalid website URL" }, { status: 400 });
    }

    // Log structured submission for Vercel runtime
    console.log(
      `[aisv-discover] ${new Date().toISOString()} ` +
        JSON.stringify({
          email: data.email,
          company: data.company,
          tier: data.tier,
          timeline: data.timeline,
          stack: data.stack,
        })
    );
    // Full payload (separate line for Vercel log readability)
    console.log("[aisv-discover-full]", JSON.stringify(data));

    await createNotionLeadCard({
      source: "aisv-discover",
      service: data.tier || "aisv",
      data,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[aisv-discover] error", err);
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }
}
