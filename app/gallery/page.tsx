"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";

const images = [
  {
    src: "/press-kit/2025-12-29-22-31-08-761.jpg",
    alt: "Live performance",
  },
  {
    src: "/press-kit/20250719_192423.jpg",
    alt: "Studio portrait",
  },
  {
    src: "/press-kit/1000019881.jpg",
    alt: "Urban portrait",
  },
  {
    src: "/press-kit/DSC01685.JPG",
    alt: "DJ set",
  },
  {
    src: "/press-kit/20250628_205905.jpg",
    alt: "Urban portrait",
  },
  {
    src: "/press-kit/OUTFIT MIC_20250727_194822_0000.png",
    alt: "DJ set",
  },
  {
    src: "/press-kit/_DSC6062.jpg",
    alt: "Urban portrait",
  },
  {
    src: "/press-kit/DSC_9021-Avec-accentuation-Bruit.jpg",
    alt: "DJ set",
  },
  {
    src: "/press-kit/DSC02599.jpg",
    alt: "DJ set",
  },
  {
    src: "/press-kit/2025-12-29-22-28-27-905.jpg",
    alt: "Urban portrait",
  },
  {
    src: "/press-kit/Screenshot_20251229_234153_Gallery.jpg",
    alt: "DJ set",
  },
  {
    src: "/press-kit/Java-10.jpg",
    alt: "DJ set",
  },
  {
    src: "/press-kit/DSC02563.jpg",
    alt: "Urban portrait",
  },
  {
    src: "/press-kit/Screenshot_20251229_234057_Gallery.jpg",
    alt: "DJ set",
  },
];

export default function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <main className="bg-black text-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-14">
          <div className="text-xs uppercase tracking-[0.35em] text-[#D9252A]">
            Press Kit
          </div>

          <h1 className="mt-4 text-5xl font-black uppercase md:text-6xl">
            Gallery
          </h1>

          <p className="mt-4 max-w-2xl text-white/60">
            High-resolution visuals available for promoters, brands and media.
            Click any image to view in full and download.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img, index) => (
            <button
              key={img.src}
              onClick={() => setActive(index)}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/10"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 transition group-hover:opacity-100" />

              <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.3em] text-white/80 opacity-0 group-hover:opacity-100">
                View
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {active !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
          {/* CLOSE */}
          <button
            onClick={() => setActive(null)}
            className="absolute top-6 right-6 text-white"
          >
            <X />
          </button>

          {/* PREV */}
          <button
            onClick={() =>
              setActive(active === 0 ? images.length - 1 : active - 1)
            }
            className="absolute left-6 text-white"
          >
            <ChevronLeft />
          </button>

          {/* IMAGE */}
          <img
            src={images[active].src}
            className="max-h-[85vh] max-w-full object-contain"
          />

          {/* NEXT */}
          <button
            onClick={() =>
              setActive(
                active === images.length - 1 ? 0 : active + 1
              )
            }
            className="absolute right-6 text-white"
          >
            <ChevronRight />
          </button>

          {/* DOWNLOAD */}
          <a
            href={images[active].src}
            download
            className="absolute bottom-6 flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm text-white hover:bg-white/10"
          >
            <Download className="h-4 w-4" />
            Download
          </a>
        </div>
      )}
    </main>
  );
}