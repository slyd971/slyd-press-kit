import "./globals.css";
import type { Metadata } from "next";
import { pressKitConfig } from "@/data/config";

export const metadata: Metadata = {
  metadataBase: new URL("https://djslyd-presskit.vercel.app"),
  title: pressKitConfig.metadata.title,
  description: pressKitConfig.metadata.description,
  openGraph: {
    title: pressKitConfig.metadata.title,
    description: pressKitConfig.metadata.description,
    url: "https://djslyd-presskit.vercel.app",
    siteName: "DJ SLY'D",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "DJ SLY'D press kit preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pressKitConfig.metadata.title,
    description: pressKitConfig.metadata.description,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
