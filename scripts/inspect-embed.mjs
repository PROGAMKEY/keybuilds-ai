import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto("https://keybuilds.ai", { waitUntil: "networkidle" });
await page.waitForTimeout(2000);

const html = await page.evaluate(() => {
  const all = document.querySelectorAll("[data-beehiiv-form], .beehiiv-form, [class*='beehiiv'], [id*='beehiiv']");
  return Array.from(all).map(el => ({
    tag: el.tagName,
    cls: el.className,
    id: el.id,
    outerHTML: el.outerHTML.slice(0, 600),
  }));
});
console.log(JSON.stringify(html, null, 2));

// Check for iframe
const frames = page.frames().map(f => f.url());
console.log("\nFrames:", frames);

await browser.close();
