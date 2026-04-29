import { NextRequest, NextResponse } from "next/server";
import { createNotionLeadCard } from "@/lib/notion";

/**
 * POST /api/intake
 *
 * Generic intake handler for /intake?service=X form submissions.
 *
 * Handles all 9 KBAi services except AISV Kit (which uses /api/aisv/discover).
 *
 * Behavior:
 * 1. Validates required fields + email shape
 * 2. Logs structured submission to Vercel runtime (always)
 * 3. If NOTION_TOKEN + NOTION_AISV_DB_ID env vars are set, creates a
 *    card in the AISV Pipeline DB
 * 4. Returns ok:true on success
 *
 * TODO: also forward via Resend / SendGrid for inbox-level visibility
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

    // Optional: create Notion card if env wired
    await createNotionLeadCard({
      source: "intake",
      service: data.service,
      data,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[intake] error", err);
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }
}
