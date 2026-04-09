import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};
export const alt = "DJ SLY'D press kit preview";

async function getHeroDataUrl() {
  const heroPath = path.join(
    process.cwd(),
    "public/press-kit/2025-12-29-22-31-08-761.jpg"
  );
  const heroBuffer = await readFile(heroPath);
  const heroBase64 = heroBuffer.toString("base64");

  return `data:image/jpeg;base64,${heroBase64}`;
}

export default async function OpenGraphImage() {
  const heroDataUrl = await getHeroDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #120709 0%, #24090c 45%, #451015 100%)",
          color: "#fff5f5",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 14% 16%, rgba(255,114,114,0.18), transparent 25%), radial-gradient(circle at 84% 18%, rgba(255,255,255,0.10), transparent 22%), radial-gradient(circle at 74% 84%, rgba(217,37,42,0.22), transparent 28%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 470,
            height: 630,
            display: "flex",
            overflow: "hidden",
          }}
        >
          <img
            src={heroDataUrl}
            alt="DJ SLY'D hero"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              background:
                "linear-gradient(90deg, rgba(18,7,9,0.96) 0%, rgba(18,7,9,0.42) 35%, rgba(18,7,9,0.18) 100%)",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "54px 58px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "#ffb4b4",
              fontSize: 22,
              letterSpacing: 3,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 11,
                height: 11,
                borderRadius: 9999,
                background: "#d9252a",
                display: "flex",
              }}
            />
            Paris • International Energy
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              maxWidth: 700,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 84,
                lineHeight: 0.92,
                letterSpacing: -3,
                fontWeight: 900,
              }}
            >
              <span>DJ SLY'D</span>
              <span style={{ color: "#ff6b72" }}>PRESS KIT</span>
            </div>

            <div
              style={{
                fontSize: 30,
                lineHeight: 1.34,
                color: "rgba(255,245,245,0.92)",
                maxWidth: 660,
              }}
            >
              Open format DJ and producer blending Hip-Hop, Afro, RnB and
              club-ready energy for nightlife, brands and bookings.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 24px",
                borderRadius: 9999,
                background: "#d9252a",
                color: "#fff5f5",
                fontSize: 21,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 1.3,
              }}
            >
              Book SLY'D
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 21,
                color: "rgba(255,245,245,0.74)",
              }}
            >
              djslyd-presskit.vercel.app
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
