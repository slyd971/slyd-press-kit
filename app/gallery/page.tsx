"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const photos = [
  "/press-kit/2025-12-29-22-31-08-761.jpg",
  "/press-kit/20250719_192423.jpg",
  "/press-kit/1000019881.jpg",
  "/press-kit/DSC01685.JPG",
];

export default function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);

  const next = () => {
    if (active === null) return;
    setActive((active + 1) % photos.length);
  };

  const prev = () => {
    if (active === null) return;
    setActive((active - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (active === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [active]);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">

      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-12">

          <h1 className="text-4xl font-black">
            Gallery
          </h1>

          <Link href="/" className="border px-4 py-2 rounded-lg">
            Back
          </Link>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {photos.map((src, index) => (
            <img
              key={src}
              src={src}
              onClick={() => setActive(index)}
              className="cursor-pointer rounded-xl hover:scale-105 transition"
            />
          ))}

        </div>

      </div>

      {active !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center">

          <button onClick={close} className="absolute top-6 right-6">
            <X />
          </button>

          <button onClick={prev} className="absolute left-6">
            <ArrowLeft />
          </button>

          <img
            src={photos[active]}
            className="max-h-[80vh]"
          />

          <button onClick={next} className="absolute right-6">
            <ArrowRight />
          </button>

        </div>
      )}

    </main>
  );
}
