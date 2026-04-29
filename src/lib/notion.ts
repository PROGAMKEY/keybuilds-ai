/**
 * Optional Notion integration. Activates only if both env vars are set:
 *   NOTION_TOKEN=secret_xxx (from notion.so/my-integrations)
 *   NOTION_AISV_DB_ID=xxxx  (from setup_notion_aisv_db.py output)
 *
 * If unset, this is a no-op — submissions still log to Vercel runtime.
 */

type LeadInput = {
  source: "intake" | "aisv-discover";
  service: string;
  data: Record<string, string>;
};

const NOTION_API = "https://api.notion.com/v1/pages";
const NOTION_VERSION = "2022-06-28";

const TIER_MAP: Record<string, string> = {
  // From AISV Discovery brief tier select
  "kbai-addon": "kbai-addon",
  "kbai-premium": "kbai-premium",
  "kbai-standalone": "kbai-standalone",
  "kt-bundled": "kt-bundled",
  "kt-standalone": "kt-standalone",
  monitoring: "monitoring",
  unsure: "kbai-standalone",
  // From intake form services - default to kbai-standalone for non-AISV
  audit: "kbai-standalone",
  tutoring: "kbai-addon",
  qa: "kbai-addon",
  speaking: "kbai-addon",
  apex: "kbai-standalone",
  booking: "kbai-standalone",
  cohort: "kbai-addon",
  other: "kbai-standalone",
  aisv: "kbai-addon",
};

const SOURCE_MAP: Record<string, string> = {
  newsletter: "Newsletter",
  Newsletter: "Newsletter",
  ig: "Instagram",
  Instagram: "Instagram",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  LinkedIn: "LinkedIn",
  tiktok: "TikTok",
  TikTok: "TikTok",
  youtube: "YouTube",
  YouTube: "YouTube",
  referral: "Referral",
  Referral: "Referral",
  alumni: "Cohort alumni",
};

function detectSource(howHeard: string): string {
  if (!howHeard) return "Cold";
  const lower = howHeard.toLowerCase();
  if (lower.includes("newsletter") || lower.includes("email")) return "Newsletter";
  if (lower.includes("instagram") || lower.includes("ig")) return "Instagram";
  if (lower.includes("linkedin")) return "LinkedIn";
  if (lower.includes("tiktok")) return "TikTok";
  if (lower.includes("youtube")) return "YouTube";
  if (lower.includes("referral") || lower.includes("friend")) return "Referral";
  if (lower.includes("cohort") || lower.includes("alumni")) return "Cohort alumni";
  return SOURCE_MAP[howHeard] || "Cold";
}

export async function createNotionLeadCard(input: LeadInput): Promise<void> {
  const token = process.env.NOTION_TOKEN;
  const dbId = process.env.NOTION_AISV_DB_ID;

  if (!token || !dbId) {
    // Notion not wired — silent no-op
    return;
  }

  try {
    const { data, service, source } = input;
    const today = new Date().toISOString().slice(0, 10);
    const tier = TIER_MAP[service] || "kbai-standalone";
    const brand = tier.startsWith("kt-") ? "Key's Touch" : "Key Builds AI";
    const sourceVal = detectSource(data.how_heard || data.source || "");

    // Build the priority queries / notes blob from whatever fields exist
    const priorityBlob = [
      data.priority_queries || data.goal || "",
      data.faq_questions ? `\n\nFAQ:\n${data.faq_questions}` : "",
      data.competitors ? `\n\nCompetitors:\n${data.competitors}` : "",
    ]
      .filter(Boolean)
      .join("");

    const notesBlob = [
      data.notes || "",
      data.role ? `\nRole: ${data.role}` : "",
      data.event_name ? `\nEvent: ${data.event_name}` : "",
      data.event_date ? `\nEvent date: ${data.event_date}` : "",
      data.audience_size ? `\nAudience: ${data.audience_size}` : "",
      data.budget ? `\nBudget: ${data.budget}` : "",
      data.topic ? `\nTopic: ${data.topic}` : "",
      data.business_type ? `\nBusiness type: ${data.business_type}` : "",
      data.current_tools ? `\nCurrent tools: ${data.current_tools}` : "",
      data.why_cohort ? `\nCohort goal: ${data.why_cohort}` : "",
      data.ideal_customer ? `\nIdeal customer: ${data.ideal_customer}` : "",
      data.services ? `\n\nServices listed:\n${data.services}` : "",
      `\n\nForm source: ${source}`,
    ]
      .filter(Boolean)
      .join("");

    const properties: Record<string, unknown> = {
      Client: {
        title: [{ text: { content: data.full_name || data.email || "Unknown" } }],
      },
      Email: { email: data.email },
      Tier: { select: { name: tier } },
      Brand: { select: { name: brand } },
      "Inquiry date": { date: { start: today } },
      Source: { select: { name: sourceVal } },
      Notes: {
        rich_text: [{ text: { content: notesBlob.slice(0, 1900) } }],
      },
    };

    if (data.company) properties.Company = { rich_text: [{ text: { content: data.company } }] };
    if (data.role) properties.Role = { rich_text: [{ text: { content: data.role } }] };
    if (data.website_url) properties["Website URL"] = { url: data.website_url };
    if (data.stack) properties.Stack = { select: { name: data.stack } };
    if (priorityBlob) {
      properties["Priority queries"] = {
        rich_text: [{ text: { content: priorityBlob.slice(0, 1900) } }],
      };
    }

    const res = await fetch(NOTION_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parent: { database_id: dbId },
        properties,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("[notion] failed", res.status, errText);
      return;
    }

    console.log("[notion] card created");
  } catch (err) {
    console.error("[notion] exception", err);
  }
}
