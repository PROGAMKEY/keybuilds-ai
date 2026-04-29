import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/aisv/discover
 *
 * Captures an AISV Discovery Brief submission. Logs to Vercel runtime
 * logs for now. TODO: forward to a real destination:
 *   - Email via Resend / SendGrid to key@keybuilds.ai
 *   - Notion API → AISV Pipeline DB
 *   - Beehiiv / ConvertKit subscriber tag
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

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }
}
