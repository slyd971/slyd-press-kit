import "./globals.css";
import type { Metadata } from "next";
import { yoruboyPressKitConfig } from "@/data/artists/yoruboy";

export const metadata: Metadata = {
  title: yoruboyPressKitConfig.metadata.title,
  description: yoruboyPressKitConfig.metadata.description,
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
