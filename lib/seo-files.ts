import type { MetadataRoute } from "next";

// Plain-text / XML serializers for robots.txt and sitemap.xml. They back the
// /seo-files/* route handlers, which next.config.ts exposes as /robots.txt and
// /sitemap.xml with a beforeFiles rewrite, so the app/[locale] dynamic route
// can never shadow them on Vercel.

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const toArray = <T,>(value: T | T[] | undefined): T[] =>
  value === undefined ? [] : Array.isArray(value) ? value : [value];

export function robotsToText(robots: MetadataRoute.Robots): string {
  const lines: string[] = [];

  for (const rule of toArray(robots.rules)) {
    for (const userAgent of toArray(rule.userAgent)) {
      lines.push(`User-Agent: ${userAgent}`);
    }
    for (const allow of toArray(rule.allow)) lines.push(`Allow: ${allow}`);
    for (const disallow of toArray(rule.disallow)) lines.push(`Disallow: ${disallow}`);
    lines.push("");
  }

  if (robots.host) lines.push(`Host: ${robots.host}`, "");
  for (const sitemap of toArray(robots.sitemap)) lines.push(`Sitemap: ${sitemap}`);

  return `${lines.join("\n").trim()}\n`;
}

export function sitemapToXml(entries: MetadataRoute.Sitemap): string {
  const urls = entries.map((entry) => {
    const parts = [`    <loc>${escapeXml(entry.url)}</loc>`];

    for (const image of entry.images ?? []) {
      parts.push(`    <image:image><image:loc>${escapeXml(image)}</image:loc></image:image>`);
    }
    if (entry.lastModified) {
      parts.push(`    <lastmod>${new Date(entry.lastModified).toISOString()}</lastmod>`);
    }
    if (entry.changeFrequency) {
      parts.push(`    <changefreq>${entry.changeFrequency}</changefreq>`);
    }
    if (typeof entry.priority === "number") {
      parts.push(`    <priority>${entry.priority}</priority>`);
    }

    return `  <url>\n${parts.join("\n")}\n  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls.join("\n")}\n</urlset>\n`;
}
