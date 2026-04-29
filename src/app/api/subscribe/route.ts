import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/subscribe
 *
 * Captures an email + returns success.
 *
 * TODO: wire to a real provider (Beehiiv / ConvertKit / Substack).
 *   - Beehiiv:    POST https://api.beehiiv.com/v2/publications/{id}/subscriptions
 *   - ConvertKit: POST https://api.convertkit.com/v3/forms/{id}/subscribe
 *   - Substack:   no public API — use the embed widget instead.
 *
 * For now we just log + accept. PDF download URL is returned in the response.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = String(body?.email ?? "").trim().toLowerCase();

    // Minimal validation — RFC 5322 simplified
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    // Capture (server log shows in Vercel runtime logs)
    console.log(`[subscribe] ${new Date().toISOString()} ${email}`);

    return NextResponse.json({
      ok: true,
      pdf: "/assets/ai-field-notes-vol-01.pdf",
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Bad request" },
      { status: 400 }
    );
  }
}
