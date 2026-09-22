#!/usr/bin/env node
import { chromium } from "playwright";

const url = process.argv[2] ?? "http://127.0.0.1:8080/proposal";
const out = process.argv[3] ?? "/workspace/public/abwab-salesgency-proposal.pdf";

const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1280, height: 1600 } });
await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(400);
await page.emulateMedia({ media: "print" });
await page.pdf({
  path: out,
  format: "Letter",
  printBackground: true,
  preferCSSPageSize: false,
  margin: { top: "0.4in", bottom: "0.6in", left: "0.45in", right: "0.45in" },
  displayHeaderFooter: true,
  headerTemplate: "<div></div>",
  footerTemplate: `<div style="font-size:8px;width:100%;padding:0 28px;color:#566579;font-family:Inter,sans-serif;display:flex;justify-content:space-between;">
    <span>SalesGency · Confidential · ABWAB & More</span>
    <span><span class="pageNumber"></span> / <span class="totalPages"></span></span>
  </div>`,
});
await browser.close();
console.log(JSON.stringify({ ok: true, url, out }));
