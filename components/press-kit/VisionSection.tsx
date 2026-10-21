"use client";

import { ArrowUpRight } from "lucide-react";
import type { PressKitConfig } from "@/data/config";

type VisionSectionProps = {
  vision: NonNullable<PressKitConfig["vision"]>;
};

export function VisionSection({ vision }: VisionSectionProps) {
  return (
    <section
      id="vision"
      className="relative scroll-mt-24 overflow-hidden bg-[#050505] px-4 py-10 md:px-8 md:py-20"
    >
      <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:36px_36px]" />

      <div className="relative mx-auto grid max-w-[1200px] gap-6 xl:grid-cols-[0.95fr_1.05fr] xl:items-stretch">
        <div className="flex min-h-full flex-col justify-between">
          <div>
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:mb-4 md:text-xs md:tracking-[0.36em]">
              {vision.eyebrow}
            </div>
            <h2 className="max-w-2xl whitespace-pre-line text-3xl font-black uppercase leading-[1.02] md:text-5xl xl:text-[4rem]">
              {vision.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/74 md:text-xl md:leading-9">
              {vision.intro}
            </p>
            <div className="mt-5 space-y-3 text-sm leading-6 text-white/58 md:text-base md:leading-7">
              {vision.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-2.5 md:gap-3">
            {vision.stats.map((stat) => (
              <div
                key={`${stat.value}-${stat.label}`}
                className="border border-white/10 bg-white/[0.025] px-3 py-4 md:px-4 md:py-5"
              >
                <div className="text-xl font-black uppercase leading-none text-white md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/45 md:text-[9px] md:tracking-[0.26em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex min-h-full items-center justify-center overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/[0.025] p-3 shadow-2xl shadow-black/30 md:rounded-[1.6rem] md:p-5">
          <video
            className="aspect-[9/16] max-h-[76vh] min-h-[420px] w-full max-w-[360px] rounded-[1rem] bg-black object-cover md:min-h-[560px] md:rounded-[1.25rem]"
            src={vision.video.src}
            poster={vision.video.poster}
            controls
            preload="metadata"
            playsInline
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-black/70 to-transparent px-4 pb-12 pt-4 md:px-5 md:pt-5">
            <div className="inline-flex rounded-full border border-white/10 bg-black/55 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/82 backdrop-blur-md md:text-[10px]">
              {vision.video.title}
            </div>
          </div>
          {vision.cta ? (
            <a
              href={vision.cta.href}
              target={vision.cta.external ? "_blank" : undefined}
              rel={vision.cta.external ? "noreferrer" : undefined}
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-black transition hover:bg-[var(--pk-accent)] hover:text-white md:bottom-5 md:right-5 md:px-5 md:py-3"
            >
              {vision.cta.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
