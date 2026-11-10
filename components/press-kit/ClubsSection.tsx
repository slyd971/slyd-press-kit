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

/** « 🇫🇷 » → « fr » (indicateurs régionaux Unicode) ; null si ce n'est pas un drapeau. */
function flagCode(flag: string) {
  const points = Array.from(flag).map((char) => char.codePointAt(0) ?? 0);
  if (points.length !== 2 || points.some((point) => point < 0x1f1e6 || point > 0x1f1ff)) {
    return null;
  }
  return points.map((point) => String.fromCharCode(point - 0x1f1e6 + 97)).join("");
}

type ClubsSectionProps = {
  clubs: PressKitConfig["clubs"];
  brands?: PressKitConfig["brands"];
  slydPoster?: boolean;
  language?: "fr" | "en";
  brandReferences?: PressKitConfig["brands"]["items"];
};

const iconMap = {
  globe: Globe2,
  "map-pin": MapPin,
};

export function ClubsSection({ clubs, brands, slydPoster = false, language = "fr", brandReferences }: ClubsSectionProps) {
  const inlineBrandLogos =
    brands?.items
      .map((item) => (typeof item === "string" ? undefined : item))
      .filter((item): item is { name: string; logo: string; logoInvert?: boolean } =>
        Boolean(item?.logo)
      ) ?? [];
  const [expanded, setExpanded] = useState(false);
  const referencesId = useId();
  const renderRegion = (region: PressKitConfig["clubs"]["regions"][number]) => {
            const Icon = iconMap[region.icon];

            return (
              <div key={region.title}>
                <h3 className={`${clubs.image ? "max-md:mb-5 " : ""}mb-4 flex items-center gap-3 text-2xl font-bold md:mb-6 md:text-3xl`}>
                  {!slydPoster && <Icon className="h-5 w-5 text-[var(--pk-accent)] md:h-6 md:w-6" />}
                  {region.title}
                  {region.display === "flags" && (
                    <span className="hidden text-base font-medium text-white/45 md:inline">{region.items.length}</span>
                  )}
                </h3>

                {slydPoster && region.display === "flags" ? (
                  <>
                  <ul className="hidden flex-wrap justify-between gap-y-5 md:flex">
                    {region.items.map((item) => {
                      const [flag, ...rest] = item.split(" ");
                      const code = flagCode(flag);
                      const name = rest.join(" ");
                      return (
                        <li key={item} title={name} className="group relative">
                          {code && region.flagsPath ? (
                            <img
                              src={`${region.flagsPath}/${code}.svg`}
                              alt=""
                              loading="lazy"
                              className="h-9 w-12 rounded-none object-cover opacity-95 saturate-[.85] transition group-hover:opacity-100 group-hover:saturate-100"
                            />
                          ) : (
                            <span aria-hidden="true" className="text-4xl leading-none">{flag}</span>
                          )}
                          <span className="sr-only">{name}</span>
                          <span aria-hidden="true" className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap bg-black px-2 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-white opacity-0 transition group-hover:opacity-100">
                            {name}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <ul className="grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-6 md:hidden">
                    {region.items.map((item) => {
                      const [flag, ...rest] = item.split(" ");
                      const code = flagCode(flag);
                      return (
                        <li key={item} className="flex flex-col items-center text-center">
                          {code && region.flagsPath ? (
                            <img
                              src={`${region.flagsPath}/${code}.svg`}
                              alt=""
                              loading="lazy"
                              className="h-6 w-8 rounded-none object-cover opacity-95 saturate-[.85] md:h-7 md:w-9"
                            />
                          ) : (
                            <span aria-hidden="true" className="text-3xl leading-none md:text-4xl">
                              {flag}
                            </span>
                          )}
                          <span className="mt-2 text-[11px] font-medium uppercase tracking-[0.1em] text-white/80 md:text-xs">
                            {rest.join(" ")}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  </>
                ) : slydPoster ? (
                  region.icon === "globe" ? (
                    <>
                    {region.display === "pairs" && (
                      <ul className="hidden grid-cols-2 gap-x-12 md:grid">
                        {region.items.map((item) => {
                          const [name, ...city] = item.split(" — ");
                          return (
                            <li key={item} className="flex items-baseline justify-between gap-4 border-b border-white/10 py-2.5 text-base">
                              <span className="text-white/90">{name}</span>
                              <span className="shrink-0 text-white/45">{city.join(" — ")}</span>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                    <div className={region.display === "pairs" ? "md:hidden" : undefined}>
                    <ul data-pk-list data-pk-compact={clubs.image ? "" : undefined} className={`text-base leading-relaxed text-gray-300${clubs.image ? " max-md:text-[13px] max-md:leading-5" : ""}`}>
                      {region.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    </div>
                    </>
                  ) : (
                    <>
                      {region.display === "featured" && (
                        <div className="hidden md:block">
                          <ul className="grid grid-cols-3 gap-x-8">
                            {region.items.filter((item) => item.includes(" | ")).map((item) => {
                              const [name, note] = item.split(" | ");
                              return (
                                <li key={item} className="border-t border-white/20 pt-4">
                                  <div className="font-[family-name:var(--slyd-font-display)] text-[1.7rem] font-bold uppercase leading-[1.05] text-white">{name}</div>
                                  <div className="mt-2 text-sm text-white/55">{note}</div>
                                </li>
                              );
                            })}
                          </ul>
                          <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-2 font-[family-name:var(--slyd-font-display)] text-base font-bold uppercase tracking-[0.02em] text-white/70">
                            {region.items.filter((item) => !item.includes(" | ")).map((item) => <li key={item}>{item}</li>)}
                          </ul>
                        </div>
                      )}
                      <div className={region.display === "featured" ? "md:hidden" : undefined}>
                      <ul id={`${referencesId}-${region.title}`} data-slyd-references data-pk-compact={clubs.image ? "" : undefined} className="text-gray-300">
                        {region.items.map((item, index) => (
                          <li key={item} hidden={index >= 8 && !expanded}>{item.split(" | ")[0]}</li>
                        ))}
                      </ul>
                      </div>
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
            };

  const useSideImage = Boolean(slydPoster && clubs.image);
  const sideRegions = useSideImage ? clubs.regions.filter((region) => region.display !== "flags") : [];
  const restRegions = useSideImage ? clubs.regions.filter((region) => region.display === "flags") : clubs.regions;

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

        <div className={slydPoster ? `grid gap-10 md:gap-12${clubs.image ? " max-md:gap-9" : ""}` : "grid gap-8 md:grid-cols-2 md:gap-16"}>
          {useSideImage && clubs.image && (
            <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-stretch lg:gap-14">
              <div className="relative aspect-[4/3] overflow-hidden lg:hidden">
                <img
                  src={clubs.image.src}
                  alt={clubs.image.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ height: "100%", objectPosition: clubs.image.mobilePosition ?? clubs.image.position ?? "center" }}
                />
              </div>
              <div className="grid gap-9 md:gap-12">{sideRegions.map(renderRegion)}</div>
              <div className="relative hidden min-h-[26rem] overflow-hidden lg:block">
                <img
                  src={clubs.image.src}
                  alt={clubs.image.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ height: "100%", objectPosition: clubs.image.position ?? "center" }}
                />
              </div>
            </div>
          )}
          {restRegions.map(renderRegion)}
          {slydPoster && brandReferences?.length > 0 && (
            <BrandReferences items={brandReferences} language={language} />
          )}
        </div>

        {inlineBrandLogos.length > 0 ? (
          <div className="mt-8 border-t border-white/10 pt-6 md:mt-12 md:pt-8">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {inlineBrandLogos.map((brand) => (
                <div
                  key={brand.name}
                  className="flex min-h-28 items-center justify-center rounded-lg border border-white/15 bg-black px-4 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.28)] md:min-h-32 md:px-5"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-16 w-full max-w-[88%] object-contain opacity-95 [filter:brightness(0)_invert(1)] md:max-h-20"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {brands?.feedback ? (
          <div className="mt-8 border-t border-white/10 pt-6 md:mt-12 md:pt-10">
            <div className="max-w-3xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:text-xs md:tracking-[0.35em]">
                {brands.feedback.eyebrow}
              </div>
              <h3 className="mt-3 text-3xl font-black uppercase leading-tight md:text-5xl">
                {brands.feedback.title}
              </h3>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3 md:gap-5">
              {brands.feedback.items.map((item) => (
                <article
                  key={item.name}
                  className="flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.025] p-4 md:p-5"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-14 w-14 shrink-0 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <div className="text-sm font-black uppercase leading-tight text-white">
                        {item.name}
                      </div>
                      <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
                        {item.role}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/68">
                    “{item.quote}”
                  </p>
                </article>
              ))}
            </div>

            {brands.feedback.cta ? (
              <div className="mt-6 flex justify-center">
                <a
                  href={brands.feedback.cta.href}
                  target={brands.feedback.cta.external ? "_blank" : undefined}
                  rel={brands.feedback.cta.external ? "noreferrer" : undefined}
                  style={{ backgroundColor: "var(--pk-accent)" }}
                  className="inline-flex items-center rounded-full px-5 py-3 text-center text-[11px] font-black uppercase tracking-[0.18em] text-white transition hover:opacity-90"
                >
                  {brands.feedback.cta.label}
                </a>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
