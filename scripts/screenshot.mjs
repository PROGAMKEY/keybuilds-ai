// Quick screenshot helper.
// Usage:
//   node scripts/screenshot.mjs                       # full page, default URL
//   node scripts/screenshot.mjs https://keybuilds.ai  # different URL
//   node scripts/screenshot.mjs https://keybuilds.ai #subscribe   # selector crop
//
// Output: ./screenshots/<timestamp>-<slug>.png
import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { join } from "path";

const URL = process.argv[2] || "https://keybuilds.ai";
const SELECTOR = process.argv[3] || null;

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

const OUT_DIR = "./screenshots";
mkdirSync(OUT_DIR, { recursive: true });

const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const slug = URL.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "");

const browser = await chromium.launch();
for (const vp of VIEWPORTS) {
  const ctx = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 2,
  });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(1500); // let beehiiv loader finish

  const target = SELECTOR ? page.locator(SELECTOR) : page;
  const file = join(OUT_DIR, `${stamp}-${vp.name}-${slug}.png`);
  await target.screenshot({ path: file, fullPage: !SELECTOR });
  console.log(`  ${file}`);
  await ctx.close();
}
await browser.close();
