import Image from "next/image";
import type { PressKitConfig } from "@/data/config";

type BrandItem = PressKitConfig["brands"]["items"][number];

type BrandsSectionProps = {
  brands: PressKitConfig["brands"];
};

function BrandLogo({ item }: { item: BrandItem }) {
  const name = typeof item === "string" ? item : item.name;
  const logo = typeof item === "string" ? undefined : item.logo;
  const logoInvert = typeof item === "string" ? false : item.logoInvert;
  const href = typeof item === "string" ? undefined : item.href;

  const inner = (
    <div className="flex min-h-14 items-center rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 transition hover:border-[rgb(var(--pk-accent-rgb)/0.4)] hover:bg-white/[0.045] md:min-h-16 md:px-6">
      {logo ? (
        <Image
          src={logo}
          alt={name}
          width={180}
          height={72}
          className={`max-h-8 w-auto max-w-36 object-contain md:max-h-10 md:max-w-44${logoInvert ? " invert" : ""}`}
        />
      ) : (
        <span className="text-sm font-black uppercase tracking-[0.12em] text-white/82 md:text-base">
          {name}
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return inner;
}

export function BrandsSection({ brands }: BrandsSectionProps) {
  return (
    <section
      id="brands"
      className="relative scroll-mt-24 overflow-hidden bg-black px-4 py-10 md:px-8 md:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgb(var(--pk-accent-rgb)/0.14),transparent_30%),radial-gradient(circle_at_70%_80%,rgb(var(--pk-accent-rgb)/0.06),transparent_22%)]" />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="grid gap-6 md:gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
          <div>
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:mb-4 md:text-xs md:tracking-[0.36em]">
              {brands.eyebrow}
            </div>

            <h2 className="max-w-2xl whitespace-pre-line text-3xl font-black uppercase leading-[1.02] tracking-tight md:text-4xl xl:text-[3.4rem]">
              {brands.title}
            </h2>
          </div>

          <div className="xl:pt-2">
            <p className="max-w-xl text-sm leading-6 text-white/70 md:text-lg md:leading-8">
              {brands.intro}
            </p>

            {brands.supportingText && (
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/60 md:mt-4 md:text-lg md:leading-8">
                {brands.supportingText}
              </p>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 md:mt-8 md:gap-2.5">
          {brands.categories.map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.2em] text-white/55 md:px-4 md:text-[9px] md:tracking-[0.28em]"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-8 md:gap-4">
          {brands.items.map((item) => {
            const key = typeof item === "string" ? item : item.name;
            return <BrandLogo key={key} item={item} />;
          })}
        </div>

        {brands.fit && (
          <div className="mt-6 max-w-2xl md:mt-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--pk-accent-soft)] md:text-xs md:tracking-[0.34em]">
              {brands.fit.eyebrow}
            </div>

            <h3 className="mt-4 text-lg font-black uppercase leading-[1.2] md:mt-5 md:text-2xl">
              {brands.fit.title}
            </h3>

            <div className="mt-4 space-y-3 text-sm leading-6 text-white/60 md:mt-5 md:space-y-4">
              {brands.fit.points.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
