import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/intake
 *
 * Generic intake handler for /intake?service=X form submissions.
 *
 * Handles all 9 KBAi services except AISV Kit (which uses /api/aisv/discover).
 *
 * Logs to Vercel runtime. TODO: forward to a real destination —
 *   - Email via Resend / SendGrid → key@keybuilds.ai
 *   - Notion API → AISV Pipeline DB (via integration token)
 *   - Beehiiv subscriber tag (for cohort applications)
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data: Record<string, string> = {};
    for (const k of Object.keys(body)) data[k] = String(body[k] ?? "").trim();

    if (!data.service || !data.full_name || !data.email) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields (service / name / email)" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    console.log(
      `[intake/${data.service}] ${new Date().toISOString()} ` +
        JSON.stringify({
          email: data.email,
          name: data.full_name,
          company: data.company || "",
          timeline: data.timeline || "",
        })
    );
    console.log(`[intake-full/${data.service}]`, JSON.stringify(data));

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }
}
