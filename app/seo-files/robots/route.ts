import robots from "@/app/robots";
import { robotsToText } from "@/lib/seo-files";

export const dynamic = "force-dynamic";

export async function GET() {
  return new Response(robotsToText(await robots()), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
