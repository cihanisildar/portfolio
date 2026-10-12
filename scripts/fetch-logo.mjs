#!/usr/bin/env node
/**
 * grab a company's own logo and drop it in public/logos/.
 *
 *   node scripts/fetch-logo.mjs turkcell turkcell.com.tr
 *
 * prefers the wordmark the site puts in its own header, then an
 * apple-touch-icon or <link rel=icon>, then google's favicon service.
 *
 * then set `logo: "/logos/<company>.<ext>"` on the entry in
 * constants/experience.ts.
 */

import { writeFile, mkdir } from "node:fs/promises";
import { join, extname } from "node:path";

const [company, domainArg] = process.argv.slice(2);

if (!company || !domainArg) {
  console.error("usage: node scripts/fetch-logo.mjs <company> <domain>");
  process.exit(1);
}

const domain = domainArg.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
const OUT_DIR = join(process.cwd(), "public", "logos");
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36";

/** parse <link rel="...icon..."> tags, biggest declared size first */
function iconsFromHtml(html, base) {
  const links = html.match(/<link\b[^>]*>/gi) ?? [];
  const found = [];

  for (const tag of links) {
    const rel = /rel=["']([^"']+)["']/i.exec(tag)?.[1]?.toLowerCase() ?? "";
    if (!/icon/.test(rel)) continue;

    const href = decode(/href=["']([^"']+)["']/i.exec(tag)?.[1] ?? "");
    if (!href) continue;

    const size =
      Number(/sizes=["'](\d+)/i.exec(tag)?.[1] ?? 0) ||
      (rel.includes("apple-touch") ? 180 : 0);

    try {
      found.push({ url: new URL(href, base).href, size });
    } catch {
      /* malformed href — skip it */
    }
  }

  return found.sort((a, b) => b.size - a.size).map((i) => i.url);
}

/** hrefs in html are entity-encoded — "&amp;" in a url is a real "&" */
function decode(href) {
  return href
    .replace(/&amp;/g, "&")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&quot;/g, '"')
    .replace(/&#x2F;/gi, "/");
}

/** the wordmark the site shows in its own header: any image whose
    path says "logo". vector first, and the company's own name wins. */
function logosFromHtml(html, base, company) {
  const refs =
    html.match(/(?:src|srcset|data-src)=["']([^"']*logo[^"']*)["']/gi) ?? [];
  const found = [];

  for (const ref of refs) {
    const raw = /=["']([^"']+)["']/.exec(ref)?.[1];
    if (!raw) continue;

    // srcset is "url 1x, url 2x" — the first url is enough
    const href = decode(raw.split(/[\s,]+/)[0]);
    if (!href || href.startsWith("data:")) continue;

    let url;
    try {
      url = new URL(href, base).href;
    } catch {
      continue;
    }

    const path = url.toLowerCase();
    const score =
      (path.includes(company.toLowerCase()) ? 100 : 0) +
      (/\.svg(\?|$)/.test(path) ? 20 : 0) +
      (/\.png(\?|$)/.test(path) ? 10 : 0) +
      (/nav|header|brand/.test(path) ? 5 : 0);

    found.push({ url, score });
  }

  return found.sort((a, b) => b.score - a.score).map((l) => l.url).slice(0, 4);
}

async function get(url) {
  const res = await fetch(url, { headers: { "user-agent": UA }, redirect: "follow" });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res;
}

async function main() {
  const candidates = [];

  for (const scheme of ["https", "http"]) {
    try {
      const res = await get(`${scheme}://${domain}/`);
      const html = await res.text();
      candidates.push(...logosFromHtml(html, res.url, company));
      candidates.push(...iconsFromHtml(html, res.url));
      break;
    } catch (err) {
      console.warn(`  could not read ${scheme}://${domain} — ${err.message}`);
    }
  }

  candidates.push(
    `https://${domain}/apple-touch-icon.png`,
    `https://www.google.com/s2/favicons?domain=${domain}&sz=256`,
    `https://${domain}/favicon.ico`
  );

  // .ico is almost always the 16px one — try everything else first
  const isIco = (u) => /\.ico(\?|$)/i.test(u);
  const ordered = [
    ...candidates.filter((u) => !isIco(u)),
    ...candidates.filter(isIco),
  ];

  for (const url of ordered) {
    try {
      const res = await get(url);
      const buf = Buffer.from(await res.arrayBuffer());

      // google hands back a 16px placeholder globe when it has nothing
      if (buf.byteLength < 900) throw new Error("too small to be a logo");

      const type = res.headers.get("content-type") ?? "";
      const ext =
        (type.includes("svg") && ".svg") ||
        (type.includes("png") && ".png") ||
        (type.includes("jpeg") && ".jpg") ||
        (type.includes("icon") && ".ico") ||
        extname(new URL(url).pathname) ||
        ".png";

      await mkdir(OUT_DIR, { recursive: true });
      const file = join(OUT_DIR, `${company}${ext}`);
      await writeFile(file, buf);

      console.log(`✓ ${company}: ${url}`);
      console.log(`  → public/logos/${company}${ext} (${buf.byteLength} bytes)`);
      console.log(`  set logo: "/logos/${company}${ext}" in constants/experience.ts`);
      return;
    } catch (err) {
      console.warn(`  ${url} — ${err.message}`);
    }
  }

  console.error(`✗ ${company}: nothing usable at ${domain}`);
  process.exit(1);
}

main();
