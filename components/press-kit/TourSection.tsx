import { ArrowUpRight } from "lucide-react";
import type { PressKitConfig } from "@/data/config";
import { MobileCarousel } from "./MobileCarousel";

type TourSectionProps = {
  tour: NonNullable<PressKitConfig["tour"]>;
};

export function TourSection({ tour }: TourSectionProps) {
  return (
    <section
      id="tour"
      className="scroll-mt-24 bg-black px-4 py-10 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-4xl md:mb-12">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:text-xs md:tracking-[0.35em]">
            {tour.eyebrow}
          </div>
          <h2 className="mt-3 whitespace-pre-line text-3xl font-black uppercase leading-tight md:text-5xl">
            {tour.title}
          </h2>
        </div>

        <MobileCarousel
          label={tour.title}
          className="no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 md:mx-0 md:grid md:snap-none md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0"
        >
          {tour.items.map((item) => (
            <article
              key={item.title}
              className="flex w-[85%] shrink-0 snap-start flex-col gap-5 rounded-[1.15rem] border border-white/10 bg-white/[0.025] p-4 sm:flex-row md:w-full md:p-6"
            >
              <div className={`flex shrink-0 items-start gap-2 ${item.images.length > 1 ? "sm:w-[58%]" : "sm:w-[44%] sm:flex-col md:w-[42%]"}`}>
                {item.images.map((image) => {
                  const img = (
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className={`h-auto min-w-0 rounded-xl border border-white/10 ${item.images.length > 1 ? "w-[calc(50%-0.25rem)]" : "w-full"}`}
                    />
                  );
                  return item.href ? (
                    <a
                      key={image.src}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.title} — ${tour.linkLabel ?? "Voir le post"}`}
                      className="block w-full transition hover:opacity-90"
                    >
                      {img}
                    </a>
                  ) : (
                    <div key={image.src} className="w-full">{img}</div>
                  );
                })}
              </div>

              <div className="min-w-0 flex-1">
                {item.date ? (
                  <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--pk-accent)] md:text-[11px] md:tracking-[0.3em]">
                    {item.date}
                  </div>
                ) : null}
                <h3 className="mt-2 text-xl font-black uppercase leading-tight text-white md:text-2xl">
                  {item.title}
                </h3>
                {item.venue ? (
                  <div className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-white/46">
                    {item.venue}
                  </div>
                ) : null}
                <div className="mt-4 space-y-4">
                  {item.groups.map((group, index) => (
                    <div key={`${group.title ?? "g"}-${index}`}>
                      {group.title ? (
                        <div className="text-sm font-bold uppercase tracking-[0.08em] text-white/85">
                          {group.title}
                        </div>
                      ) : null}
                      <ul className="mt-1.5 space-y-1 text-sm leading-6 text-white/64 md:text-[0.95rem]">
                        {group.points.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[var(--pk-accent)]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:text-white md:text-xs"
                  >
                    {tour.linkLabel ?? "Voir le post"}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </MobileCarousel>
      </div>
    </section>
  );
}
