import Image from "next/image";
import type { PressKitConfig } from "@/data/config";

// Versions blanches sur fond transparent (public/logos/white). La hauteur est
// réglée par logo pour un poids visuel équivalent entre formats très différents.
const existingLogos: Record<string, { src: string; height: string }> = {
  Dior: { src: "/logos/white/dior.png", height: "2.25rem" },
  "Foot Locker": { src: "/logos/white/footlocker.png", height: "4.5rem" },
  "Mouv' Radio": { src: "/logos/white/mouv.png", height: "3.25rem" },
};

export function BrandReferences({ items, language }: {
  items: PressKitConfig["brands"]["items"];
  language: "fr" | "en";
}) {
  return (
    <div id="brands" className="scroll-mt-24">
      <h3 className="mb-6 text-2xl font-bold md:text-3xl">
        {language === "en" ? "Brands & media" : "Marques & médias"}
      </h3>
      <div className="grid grid-cols-2 items-center gap-6 md:grid-cols-4 md:gap-10">
        {items.map((item) => {
          const name = typeof item === "string" ? item : item.name;
          const customLogo = typeof item === "string" ? undefined : item.logo;
          const logo = customLogo
            ? { src: customLogo, height: "3.5rem" }
            : existingLogos[name];
          const href = typeof item === "string" ? undefined : item.href;
          const content = logo
            ? <Image src={logo.src} alt={name} width={360} height={160} style={{ height: logo.height }} />
            : <span>{name}</span>;
          return href
            ? <a key={name} data-slyd-brand href={href} target="_blank" rel="noopener noreferrer">{content}</a>
            : <div key={name} data-slyd-brand>{content}</div>;
        })}
      </div>
    </div>
  );
}
