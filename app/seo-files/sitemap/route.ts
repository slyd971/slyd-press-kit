import sitemap from "@/app/sitemap";
import { sitemapToXml } from "@/lib/seo-files";

export const dynamic = "force-dynamic";

export async function GET() {
  return new Response(sitemapToXml(await sitemap()), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
