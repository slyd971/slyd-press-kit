import type { PressKitConfig } from "@/data/config";

type CollaborationsSectionProps = {
  collaborations: NonNullable<PressKitConfig["collaborations"]>;
};

export function CollaborationsSection({ collaborations }: CollaborationsSectionProps) {
  return (
    <section
      id="collaborations"
      className="scroll-mt-24 bg-black px-4 py-10 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-4xl md:mb-12">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:text-xs md:tracking-[0.35em]">
            {collaborations.eyebrow}
          </div>
          <h2 className="mt-3 whitespace-pre-line text-3xl font-black uppercase leading-tight md:text-5xl">
            {collaborations.title}
          </h2>
        </div>

        <div className={collaborations.image ? "grid gap-8 lg:grid-cols-[0.8fr_1.4fr] lg:items-center lg:gap-14" : undefined}>
          {collaborations.image && (
            <div className="relative hidden aspect-[4/5] overflow-hidden rounded-[1.4rem] border border-white/10 lg:block">
              <img
                src={collaborations.image.src}
                alt={collaborations.image.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: collaborations.image.position ?? "center" }}
              />
            </div>
          )}

          <ul className="grid grid-cols-3 gap-x-3 gap-y-7 sm:grid-cols-4 md:gap-x-5 md:gap-y-9 lg:grid-cols-5">
            {collaborations.artists.map((artist) => (
              <li key={artist.name} className="flex flex-col items-center text-center">
                <div data-pk-round className="aspect-square w-full max-w-[7.5rem] overflow-hidden rounded-full border border-white/15 bg-white/5">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    style={{
                      objectPosition: artist.position ?? "center",
                      transform: artist.zoom ? `scale(${artist.zoom})` : undefined,
                      transformOrigin: artist.position ?? "center",
                    }}
                  />
                </div>
                <span className="mt-3 text-xs font-bold uppercase tracking-[0.08em] text-white/85 md:text-sm">
                  {artist.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
