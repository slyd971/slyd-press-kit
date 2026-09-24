"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { Globe2, MapPin } from "lucide-react";
import type { PressKitConfig } from "@/data/config";
import { BrandReferences } from "./slyd/BrandReferences";

function ClubItem({
  item,
  iconOverrides,
}: {
  item: string;
  iconOverrides?: PressKitConfig["clubs"]["itemIconOverrides"];
}) {
  for (const [emoji, flag] of Object.entries(iconOverrides ?? {})) {
    if (item.startsWith(emoji)) {
      return (
        <span className="inline-flex items-center gap-1.5">
          <Image
            src={flag.src}
            alt={flag.alt}
            width={20}
            height={14}
            className="inline-block shrink-0 rounded-[2px] object-cover"
          />
          {item.slice(emoji.length)}
        </span>
      );
    }
  }
  return <>{item}</>;
}

type ClubsSectionProps = {
  clubs: PressKitConfig["clubs"];
  slydPoster?: boolean;
  language?: "fr" | "en";
  brandReferences?: PressKitConfig["brands"]["items"];
};

const iconMap = {
  globe: Globe2,
  "map-pin": MapPin,
};

export function ClubsSection({ clubs, slydPoster = false, language = "fr", brandReferences }: ClubsSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const referencesId = useId();
  return (
    <section
      id="clubs"
      className="scroll-mt-24 bg-[#0a0a0a] px-4 py-10 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-4xl md:mb-14">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:text-xs md:tracking-[0.35em]">
            {clubs.eyebrow}
          </div>
          <h2 className="mt-3 text-3xl font-black uppercase md:text-5xl">
            {clubs.title}
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/62 md:mt-5 md:text-lg md:leading-8">
            {clubs.description}
          </p>
        </div>

        <div className={slydPoster ? "grid gap-10 md:gap-12" : "grid gap-8 md:grid-cols-2 md:gap-16"}>
          {clubs.regions.map((region) => {
            const Icon = iconMap[region.icon];

            return (
              <div key={region.title}>
                <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold md:mb-6 md:text-3xl">
                  {!slydPoster && <Icon className="h-5 w-5 text-[var(--pk-accent)] md:h-6 md:w-6" />}
                  {region.title}
                </h3>

                {slydPoster ? (
                  region.icon === "globe" ? (
                    <ul data-pk-list className="text-base leading-relaxed text-gray-300">
                      {region.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  ) : (
                    <>
                      <ul id={`${referencesId}-${region.title}`} data-slyd-references className="text-gray-300">
                        {region.items.map((item, index) => (
                          <li key={item} hidden={index >= 8 && !expanded}>{item}</li>
                        ))}
                      </ul>
                      {region.items.length > 8 && (
                        <button
                          type="button"
                          aria-expanded={expanded}
                          aria-controls={`${referencesId}-${region.title}`}
                          onClick={() => setExpanded((value) => !value)}
                          className="mt-7 rounded border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                        >
                          {language === "en"
                            ? expanded ? "Show less" : "View all references"
                            : expanded ? "Réduire" : "Voir toutes les références"}
                        </button>
                      )}
                    </>
                  )
                ) : <div className="grid grid-cols-2 gap-3 text-sm text-gray-300 md:gap-4 md:text-base">
                  {region.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-white/10 p-2.5 md:p-3"
                    >
                      <ClubItem
                        item={item}
                        iconOverrides={clubs.itemIconOverrides}
                      />
                    </div>
                  ))}
                </div>}
              </div>
            );
          })}
          {slydPoster && brandReferences?.length > 0 && (
            <BrandReferences items={brandReferences} language={language} />
          )}
        </div>
      </div>
    </section>
  );
}
