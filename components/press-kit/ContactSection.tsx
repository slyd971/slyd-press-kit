"use client";

import { ArrowUpRight, Instagram, Mail, Music2, Phone, Youtube } from "lucide-react";
import type { ContactMethod, PressKitConfig } from "@/data/config";

type ContactSectionProps = {
  contact: PressKitConfig["contact"];
};

function TikTokIcon({ className }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.12v13.17a2.81 2.81 0 1 1-2.81-2.81c.31 0 .61.05.9.15V9.36a5.93 5.93 0 0 0-.9-.07A5.93 5.93 0 1 0 15.82 15V8.33a7.9 7.9 0 0 0 4.64 1.5V6.69h-.87Z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12.04 2a9.88 9.88 0 0 0-8.55 14.8L2.2 22l5.34-1.25A9.93 9.93 0 1 0 12.04 2Zm0 18.08a8.08 8.08 0 0 1-4.13-1.13l-.3-.18-3.16.74.76-3.06-.2-.32a8.05 8.05 0 1 1 7.03 3.95Zm4.42-6.03c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

const iconMap = {
  instagram: Instagram,
  mail: Mail,
  music: Music2,
  phone: Phone,
  tiktok: TikTokIcon,
  whatsapp: WhatsAppIcon,
  youtube: Youtube,
};

function LargeContactCard({ method }: { method: ContactMethod }) {
  const Icon = iconMap[method.icon];

  return (
    <a
      href={method.href}
      target={method.external ? "_blank" : undefined}
      rel={method.external ? "noreferrer" : undefined}
      data-pk-grain-light
      className="group flex items-center justify-between gap-4 border-2 border-black px-5 py-5 transition hover:-translate-y-0.5 md:px-8 md:py-7"
    >
      <div className="flex min-w-0 items-center gap-4 md:gap-6">
        <Icon className="h-6 w-6 shrink-0 text-[var(--pk-accent)] md:h-8 md:w-8" strokeWidth={1.75} />

        <div className="min-w-0">
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--pk-accent)] md:text-xs">
            {method.label}
          </div>
          <div className="mt-1.5 [overflow-wrap:anywhere] font-bold [font-family:var(--slyd-font-display,var(--pk-font-display)),sans-serif] text-2xl uppercase leading-none text-black md:mt-2 md:text-4xl">
            {method.value}
          </div>
        </div>
      </div>

      <ArrowUpRight className="h-5 w-5 shrink-0 text-black/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black md:h-7 md:w-7" />
    </a>
  );
}

function SmallContactCard({ method }: { method: ContactMethod }) {
  const Icon = iconMap[method.icon];

  return (
    <a
      href={method.href}
      target={method.external ? "_blank" : undefined}
      rel={method.external ? "noreferrer" : undefined}
      data-pk-grain-light
      className="group flex items-center justify-between gap-3 border-2 border-black px-5 py-4 transition hover:-translate-y-0.5 md:px-6 md:py-5"
    >
      <div className="flex items-center gap-3 md:gap-4">
        <Icon className="h-5 w-5 shrink-0 text-[var(--pk-accent)] md:h-6 md:w-6" strokeWidth={1.75} />
        <div className="font-bold [font-family:var(--slyd-font-display,var(--pk-font-display)),sans-serif] text-lg uppercase leading-none text-black md:text-2xl">
          {method.label}
        </div>
      </div>

      <ArrowUpRight className="h-5 w-5 shrink-0 text-black/35 transition group-hover:text-black" />
    </a>
  );
}

export function ContactSection({ contact }: ContactSectionProps) {
  const [primaryMethod, secondaryMethod, ...otherMethods] = contact.methods;
  const useLargeCardsOnly = contact.methods.length <= 3;

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-[var(--pk-accent)] px-4 pb-12 pt-8 md:px-6 md:pb-20 md:pt-14"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80 md:mb-6 md:text-xs md:tracking-[0.35em]">
          {contact.eyebrow}
        </div>

        <div className="grid gap-8 md:gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <h2 className="max-w-3xl text-3xl font-black uppercase leading-[0.95] sm:text-4xl md:text-7xl">
              {contact.title}
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/85 md:mt-8 md:text-xl md:leading-9">
              {contact.description}
            </p>
          </div>

          <div className="grid gap-3 md:gap-5">
            {useLargeCardsOnly ? (
              contact.methods.map((method) => (
                <LargeContactCard key={method.href} method={method} />
              ))
            ) : (
              <>
                {primaryMethod && <LargeContactCard method={primaryMethod} />}
                {secondaryMethod && <LargeContactCard method={secondaryMethod} />}
              </>
            )}

            {!useLargeCardsOnly && otherMethods.length > 0 && (
              <div className="grid gap-3 sm:grid-cols-2 md:gap-5">
                {otherMethods.map((method) => (
                  <SmallContactCard key={method.href} method={method} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
