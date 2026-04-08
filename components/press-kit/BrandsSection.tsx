import type { PressKitConfig } from "@/data/config";

type BrandsSectionProps = {
  brands: PressKitConfig["brands"];
};

export function BrandsSection({ brands }: BrandsSectionProps) {
  return (
    <section
      id="brands"
      className="relative scroll-mt-24 overflow-hidden bg-black px-4 py-8 md:px-8 md:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(181,31,36,0.14),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(181,31,36,0.06),transparent_22%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:34px_34px]" />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="grid gap-4 md:gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
          <div>
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--pk-accent)] md:mb-4 md:text-xs md:tracking-[0.36em]">
              {brands.eyebrow}
            </div>

            <h2 className="max-w-2xl whitespace-pre-line text-2xl font-black uppercase leading-[1.02] md:text-4xl xl:text-[3.4rem]">
              {brands.title}
            </h2>
          </div>

          <div className="xl:pt-2">
            <p className="max-w-xl text-sm leading-6 text-white/70 md:text-lg md:leading-8">
              {brands.intro}
            </p>

            <p className="mt-2 max-w-xl text-sm leading-6 text-white/60 md:mt-4 md:text-lg md:leading-8">
              {brands.supportingText}
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap md:mt-8 md:gap-2.5">
          {brands.categories.map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-center text-[8px] font-medium uppercase tracking-[0.14em] text-white/55 md:px-4 md:text-[9px] md:tracking-[0.28em]"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-5 grid items-stretch gap-3 md:mt-8 md:gap-4 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="grid grid-cols-2 gap-2.5 md:gap-4">
            {brands.items.map((brand) => (
              <div
                key={brand}
                className="group flex min-h-[5.9rem] flex-col justify-between rounded-lg border border-white/10 bg-white/[0.015] p-2.5 backdrop-blur-sm transition hover:border-[rgb(var(--pk-accent-rgb)/0.4)] hover:bg-white/[0.03] hover:shadow-[0_0_30px_rgb(var(--pk-accent-rgb)/0.12)] sm:min-h-[6.6rem] md:rounded-[1.4rem] md:p-5"
              >
                <div>
                  <div className="text-[7px] uppercase tracking-[0.14em] text-white/35 md:text-[9px] md:tracking-[0.28em]">
                    {brands.itemLabel}
                  </div>
                  <div className="mt-3 text-[0.72rem] font-black uppercase leading-tight [overflow-wrap:anywhere] sm:text-sm md:mt-7 md:text-2xl">
                    {brand}
                  </div>
                </div>
                <div className="mt-3 h-px w-[60%] bg-[rgb(var(--pk-accent-rgb)/0.6)] transition group-hover:w-[80%] md:mt-4 md:w-[65%]" />
              </div>
            ))}
          </div>

          <div className="self-start rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(60,5,8,0.2)_0%,rgba(255,255,255,0.02)_100%)] p-4 backdrop-blur-sm md:rounded-[1.4rem] md:p-6">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--pk-accent-soft)] md:text-xs md:tracking-[0.34em]">
                {brands.fit.eyebrow}
              </div>

              <h3 className="mt-3 text-base font-black uppercase leading-[1.15] md:mt-5 md:text-2xl">
                {brands.fit.title}
              </h3>

              <div className="mt-3 grid gap-2 text-sm leading-5 text-white/60 sm:grid-cols-3 md:mt-5 md:block md:space-y-4 md:leading-6">
                {brands.fit.points.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
