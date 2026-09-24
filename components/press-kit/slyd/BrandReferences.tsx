import Image from "next/image";
import type { PressKitConfig } from "@/data/config";

const existingLogos: Record<string, string> = {
  Dior: "/logos/dior.png",
  "Foot Locker": "/logos/footlocker.png",
  "Mouv' Radio": "/logos/mouv.png",
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
          const logo = (typeof item === "string" ? undefined : item.logo) ?? existingLogos[name];
          const href = typeof item === "string" ? undefined : item.href;
          const content = logo
            ? <Image src={logo} alt={name} width={240} height={160} className="bg-white p-2" />
            : <span>{name}</span>;
          return href
            ? <a key={name} data-slyd-brand href={href} target="_blank" rel="noopener noreferrer">{content}</a>
            : <div key={name} data-slyd-brand>{content}</div>;
        })}
      </div>
    </div>
  );
}
