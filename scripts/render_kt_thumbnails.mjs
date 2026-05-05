// Render KT thumbnails via playwright at exact pixel sizes.
// Composes: branded gradient bg → ember rounded square → traced ivory K+fingerprint paths.
// All vector → no resample chain → crisp at any size.

import { chromium } from "playwright";
import { readFileSync, writeFileSync, mkdirSync } from "fs";

const TRACED_SVG = "/Users/keyscales/Documents/Key's Touch/Website/brand-assets/logo-mark/vector/k-shape.svg";
const OUT_DIR = "/Users/keyscales/Documents/Key's Touch/Website/brand-assets/thumbnails";
mkdirSync(OUT_DIR, { recursive: true });

// Extract just the path data from traced SVG
const tracedRaw = readFileSync(TRACED_SVG, "utf8");
const pathMatch = tracedRaw.match(/<g[^>]*transform="([^"]+)"[^>]*>([\s\S]*?)<\/g>/);
const transform = pathMatch ? pathMatch[1] : "translate(0,2048) scale(0.1,-0.1)";
const paths = pathMatch ? pathMatch[2] : "";

const SIZES = [1500, 1200, 1080, 800, 400, 96];

function buildHTML(size) {
  // Brand tokens
  const INK = "#0F0E0C";
  const INK_SOFT = "#1B1916";
  const EMBER = "#D27D4A";
  const IVORY = "#F6F1E7";

  // Logo box at 62% of canvas, centered
  const logoBox = Math.round(size * 0.62);
  const radius = Math.round(logoBox * 0.06);

  return `<!DOCTYPE html><html><head><style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{width:${size}px;height:${size}px;background:radial-gradient(circle at center, ${INK_SOFT} 0%, ${INK} 70%);display:flex;align-items:center;justify-content:center}
    .logo{width:${logoBox}px;height:${logoBox}px;background:${EMBER};border-radius:${radius}px;position:relative;overflow:hidden}
    .k{width:100%;height:100%;position:absolute;inset:0}
  </style></head><body>
    <div class="logo">
      <svg class="k" viewBox="0 0 2048 2048" xmlns="http://www.w3.org/2000/svg">
        <g fill="${IVORY}" stroke="none" transform="${transform}">${paths}</g>
      </svg>
    </div>
  </body></html>`;
}

const browser = await chromium.launch();

for (const s of SIZES) {
  const html = buildHTML(s);
  const tmp = `/tmp/kt-thumb-${s}.html`;
  writeFileSync(tmp, html);

  const ctx = await browser.newContext({
    viewport: { width: s, height: s },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();
  await page.goto(`file://${tmp}`);
  await page.waitForLoadState("networkidle");

  const out = `${OUT_DIR}/keystouch-thumb-${s}.png`;
  await page.screenshot({ path: out, omitBackground: false, fullPage: false });
  console.log(`  ${out}`);
  await ctx.close();
}

await browser.close();
