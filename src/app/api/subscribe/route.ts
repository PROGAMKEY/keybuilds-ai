import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = String(body?.email ?? "").trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Enter a valid email" },
        { status: 400 }
      );
    }

    if (!BEEHIIV_API_KEY || !BEEHIIV_PUBLICATION_ID) {
      console.warn(`[subscribe] env not set, accepting ${email} without forward`);
      return NextResponse.json({ ok: true, mode: "dev" });
    }

    const referer = req.headers.get("referer") ?? "https://keybuilds.ai";

    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${BEEHIIV_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: "keybuilds.ai",
          utm_medium: "site",
          utm_campaign: "branded_form",
          referring_site: referer,
        }),
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error(`[subscribe] beehiiv error ${res.status}: ${text}`);
      return NextResponse.json(
        { ok: false, error: "Subscription failed. Try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[subscribe] handler error", err);
    return NextResponse.json(
      { ok: false, error: "Bad request" },
      { status: 400 }
    );
  }
}
