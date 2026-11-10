import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PressKitConfig } from "@/data/config";

type ConceptsSectionProps = {
  concepts: NonNullable<PressKitConfig["concepts"]>;
  getHref: (slug: string) => string;
};

/** Pochette typographique quand le concept n'a pas encore d'affiche. */
export function ConceptCover({ name, tagline }: { name: string; tagline?: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 border border-white/15 bg-black p-6 text-center">
      <div className="font-[family-name:var(--slyd-font-display)] text-4xl font-bold uppercase leading-none text-white md:text-5xl">
        {name}
      </div>
      {tagline ? (
        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">{tagline}</div>
      ) : null}
    </div>
  );
}

export function ConceptsSection({ concepts, getHref }: ConceptsSectionProps) {
  const hasVideo = concepts.items.some((item) => item.video);
  return (
    <section id="concepts" className="scroll-mt-24 bg-black px-4 py-10 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-3xl md:mb-12">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:text-xs md:tracking-[0.35em]">
            {concepts.eyebrow}
          </div>
          <h2 className="mt-3 whitespace-pre-line text-3xl font-black uppercase leading-tight md:text-5xl">
            {concepts.title}
          </h2>
          {concepts.intro ? (
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/65 md:mt-5 md:text-lg md:leading-8">
              {concepts.intro}
            </p>
          ) : null}
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {concepts.items.map((item) => (
            <article key={item.slug} className="flex flex-col">
              {item.video ? (
                <div className="relative aspect-video overflow-hidden bg-black">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={item.video.poster}
                    aria-label={item.video.title}
                    className="absolute inset-0 h-full w-full bg-black object-cover"
                  >
                    <source src={item.video.src} type="video/mp4" />
                  </video>
                </div>
              ) : (
              <Link href={getHref(item.slug)} className={`group relative block ${hasVideo ? "aspect-video" : "aspect-[4/5]"} overflow-hidden bg-white/5`} aria-label={item.name}>
                {item.image ? (
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    style={{ height: "100%" }}
                  />
                ) : (
                  <div className="absolute inset-0">
                    <ConceptCover name={item.name} tagline={item.tagline} />
                  </div>
                )}
              </Link>
              )}

              <div className="mt-5">
                <h3 className="font-[family-name:var(--slyd-font-display)] text-3xl font-bold uppercase leading-none md:text-4xl">
                  {item.name}
                </h3>
                {item.tagline ? (
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/55">{item.tagline}</p>
                ) : null}
                {item.details?.length ? (
                  <p className="mt-2 text-sm text-white/65">
                    {item.details.map((detail) => detail.value).join(" · ")}
                  </p>
                ) : null}
                <Link
                  href={getHref(item.slug)}
                  className="mt-5 inline-flex items-center gap-2 rounded border border-white/25 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white hover:text-black"
                >
                  {concepts.ctaLabel}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
