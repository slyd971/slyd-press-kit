import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function rewriteToArtistPage(request: NextRequest, pathname: string, artist: string) {
  const url = request.nextUrl.clone();
  url.pathname = pathname;
  url.searchParams.set("artist", artist);

  return NextResponse.rewrite(url);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/slyd") {
    return rewriteToArtistPage(request, "/", "slyd");
  }

  if (pathname === "/slyd/gallery") {
    return rewriteToArtistPage(request, "/gallery", "slyd");
  }

  if (pathname === "/yoruboy") {
    return rewriteToArtistPage(request, "/", "yoruboy");
  }

  if (pathname === "/yoruboy/gallery") {
    return rewriteToArtistPage(request, "/gallery", "yoruboy");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/slyd", "/slyd/gallery", "/yoruboy", "/yoruboy/gallery"],
};
