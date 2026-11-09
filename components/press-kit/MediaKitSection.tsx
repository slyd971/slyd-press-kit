import { Download, FileText, Image as ImageIcon, Shapes, Video } from "lucide-react";
import type { PressKitConfig } from "@/data/config";

type MediaKitSectionProps = {
  mediaKit: NonNullable<PressKitConfig["mediaKit"]>;
};

const itemIcons = {
  logo: Shapes,
  bio: FileText,
  video: Video,
  photo: ImageIcon,
  document: FileText,
};

export function MediaKitSection({ mediaKit }: MediaKitSectionProps) {
  return (
    <section
      id="mediakit"
      className="scroll-mt-24 bg-[#0a0a0a] px-4 py-10 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-3xl md:mb-12">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:text-xs md:tracking-[0.35em]">
            {mediaKit.eyebrow}
          </div>
          <h2 className="mt-3 text-3xl font-black uppercase md:text-5xl">
            {mediaKit.title}
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/68 md:text-base md:leading-7">
            {mediaKit.description}
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
          {mediaKit.items.map((item) => {
            const Icon = itemIcons[item.icon];

            return (
              <li
                key={item.label}
                className="flex flex-col items-center gap-3 last:odd:col-span-2 md:last:odd:col-span-1 rounded-[1.2rem] border border-white/10 bg-white/[0.025] px-3 py-5 text-center md:rounded-[1.5rem] md:py-7"
              >
                <Icon className="h-6 w-6 text-[var(--pk-accent)]" aria-hidden="true" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/78 md:text-xs">
                  {item.label}
                </span>
                {item.detail && (
                  <span className="text-[11px] text-white/45">{item.detail}</span>
                )}
              </li>
            );
          })}
        </ul>

        <a
          href={mediaKit.cta.href}
          target={mediaKit.cta.external ? "_blank" : undefined}
          rel={mediaKit.cta.external ? "noopener noreferrer" : undefined}
          className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--pk-accent)] px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--pk-accent-strong)] md:text-xs md:tracking-[0.22em]"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          {mediaKit.cta.label}
        </a>
      </div>
    </section>
  );
}
