import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PressKitConfig } from "@/data/config";

type GalleryPreviewSectionProps = {
  gallery: PressKitConfig["gallery"];
  galleryHref: string;
};

export function GalleryPreviewSection({
  gallery,
  galleryHref,
}: GalleryPreviewSectionProps) {
  const previewImages = gallery.images.slice(0, 4);

  return (
    <section
      id="gallery"
      className="scroll-mt-24 mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-20"
    >
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:mb-16 md:flex-row md:items-end md:gap-5">
        <div>
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:mb-4 md:text-xs md:tracking-[0.35em]">
            {gallery.title}
          </div>
          <h2 className="text-3xl font-black uppercase leading-[0.95] md:text-6xl">
            {gallery.homepageTitle}
          </h2>
        </div>

        <Link
          href={galleryHref}
          className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:text-white md:text-sm md:tracking-[0.28em]"
        >
          {gallery.homepageCtaLabel} <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid auto-rows-[220px] grid-cols-1 gap-3 md:grid-cols-4 md:auto-rows-[220px] md:gap-4">
        {previewImages.map((image) => (
          <Link
            key={image.src}
            href={galleryHref}
            className={`${image.size ?? ""} group relative block overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/5 md:rounded-[2rem]`}
          >
            <div
              className="absolute inset-0 transition duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundSize: `${(image.previewScale ?? 1) * 100}%`,
                backgroundPosition:
                  image.position ?? `center ${image.previewOffsetY ?? "50%"}`,
                backgroundRepeat: "no-repeat",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/32 via-transparent to-transparent" />

            <div className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/35 p-2.5 backdrop-blur-sm md:right-5 md:top-5 md:p-3">
              <ArrowUpRight className="h-3.5 w-3.5 text-white/85 md:h-4 md:w-4" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
