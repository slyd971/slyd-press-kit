"use client";

import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

type AvailabilitySectionProps = {
  /** YYYY-MM-DD days on which the DJ is already booked. */
  busyDates: string[];
  /** YYYY-MM-DD for "today" (computed on the server to avoid hydration drift). */
  today: string;
  /** Contact link used by the fallback shown when the calendar feed is down. */
  bookingHref: string;
  language?: "fr" | "en";
  /** Shown instead of the calendar when the feed could not be read. */
  unavailable?: boolean;
  /** Local design preview with fake dates. */
  demo?: boolean;
};

const COPY = {
  fr: {
    eyebrow: "Agenda",
    title: "Disponibilités",
    description:
      "Les dates en noir sont déjà prises. Pour toute autre date, contacte-moi directement.",
    free: "Libre",
    busy: "Indisponible",
    unavailable:
      "Le calendrier est momentanément indisponible. Écris-moi directement pour connaître mes disponibilités.",
    contact: "Me contacter",
    demo: "Aperçu de design — fausses dates",
    weekdays: ["L", "M", "M", "J", "V", "S", "D"],
    locale: "fr-FR",
    prev: "Mois précédent",
    next: "Mois suivant",
  },
  en: {
    eyebrow: "Calendar",
    title: "Availability",
    description:
      "Dates in black are already taken. For any other date, get in touch directly.",
    free: "Free",
    busy: "Unavailable",
    unavailable:
      "The calendar is temporarily unavailable. Write to me directly to check availability.",
    contact: "Get in touch",
    demo: "Design preview — fake dates",
    weekdays: ["M", "T", "W", "T", "F", "S", "S"],
    locale: "en-GB",
    prev: "Previous month",
    next: "Next month",
  },
} as const;

const MONTHS_AHEAD = 11;

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function toKey(year: number, monthIndex: number, day: number) {
  return `${year}-${pad(monthIndex + 1)}-${pad(day)}`;
}

function parseKey(key: string) {
  const [year, month, day] = key.split("-").map(Number);
  return { year, monthIndex: month - 1, day };
}

function formatLongDate(key: string, locale: string) {
  const { year, monthIndex, day } = parseKey(key);

  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, monthIndex, day)));
}

function buildMonth(year: number, monthIndex: number) {
  const firstWeekday = (new Date(Date.UTC(year, monthIndex, 1)).getUTCDay() + 6) % 7;
  const daysInMonth = new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();
  const cells: (number | null)[] = Array.from({ length: firstWeekday }, () => null);

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(day);
  }

  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  return cells;
}

export function AvailabilitySection({
  busyDates,
  today,
  bookingHref,
  language = "fr",
  unavailable = false,
  demo = false,
}: AvailabilitySectionProps) {
  const copy = COPY[language];
  const busy = useMemo(() => new Set(busyDates), [busyDates]);
  const todayParts = parseKey(today);
  const startIndex = todayParts.year * 12 + todayParts.monthIndex;
  const [offset, setOffset] = useState(0);

  const viewIndex = startIndex + offset;
  const viewYear = Math.floor(viewIndex / 12);
  const viewMonth = viewIndex % 12;
  const cells = useMemo(() => buildMonth(viewYear, viewMonth), [viewYear, viewMonth]);
  const monthLabel = new Intl.DateTimeFormat(copy.locale, {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(viewYear, viewMonth, 1)));

  return (
    <section
      id="disponibilites"
      className="scroll-mt-24 bg-[#0a0a0a] px-4 py-10 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:text-xs md:tracking-[0.35em]">
              {copy.eyebrow}
            </div>
            <h2 className="mt-3 text-3xl font-black uppercase leading-[0.95] sm:text-4xl md:text-6xl">
              {copy.title}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/65 md:mt-8 md:text-lg md:leading-8">
              {copy.description}
            </p>
            {demo && (
              <p className="mt-6 inline-block border border-white/25 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55">
                {copy.demo}
              </p>
            )}
          </div>

          {unavailable ? (
            <div
              data-pk-grain-light
              className="border-2 border-black p-6 text-black md:p-8"
            >
              <p className="text-sm leading-6 md:text-base md:leading-7">
                {copy.unavailable}
              </p>
              <a
                href={bookingHref}
                className="mt-5 inline-flex items-center gap-2 border-2 border-black bg-black px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5"
              >
                {copy.contact}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          ) : (
            <div
              data-pk-grain-light
              className="border-2 border-black p-4 text-black md:p-8"
            >
              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  aria-label={copy.prev}
                  disabled={offset === 0}
                  onClick={() => setOffset((value) => Math.max(0, value - 1))}
                  className="flex h-10 w-10 items-center justify-center border-2 border-black transition hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:border-black/20 disabled:text-black/20 disabled:hover:bg-transparent disabled:hover:text-black/20"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="text-center font-bold [font-family:var(--slyd-font-display,var(--pk-font-display)),sans-serif] text-2xl uppercase leading-none md:text-4xl">
                  {monthLabel}
                </div>

                <button
                  type="button"
                  aria-label={copy.next}
                  disabled={offset === MONTHS_AHEAD}
                  onClick={() => setOffset((value) => Math.min(MONTHS_AHEAD, value + 1))}
                  className="flex h-10 w-10 items-center justify-center border-2 border-black transition hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:border-black/20 disabled:text-black/20 disabled:hover:bg-transparent disabled:hover:text-black/20"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-5 grid grid-cols-7 gap-1 md:mt-6 md:gap-1.5">
                {copy.weekdays.map((weekday, index) => (
                  <div
                    key={`${weekday}-${index}`}
                    className="pb-1 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45 md:text-xs"
                  >
                    {weekday}
                  </div>
                ))}

                {cells.map((day, index) => {
                  if (day === null) {
                    return <div key={`empty-${index}`} aria-hidden="true" />;
                  }

                  const key = toKey(viewYear, viewMonth, day);
                  const isPast = key < today;
                  const isBusy = busy.has(key);
                  const isToday = key === today;

                  let tone = "border-black/25 text-black hover:border-black";

                  if (isPast) {
                    tone = "border-transparent text-black/25";
                  } else if (isBusy) {
                    tone = "border-black bg-black text-white/55 line-through";
                  }

                  return (
                    <div
                      key={key}
                      role="img"
                      aria-label={`${formatLongDate(key, copy.locale)} — ${isBusy ? copy.busy : copy.free}`}
                      className={`relative flex aspect-square items-center justify-center border-2 text-sm font-bold md:text-lg ${tone}`}
                    >
                      {day}
                      {isToday && (
                        <span className="absolute bottom-1 left-1/2 h-[3px] w-3 -translate-x-1/2 bg-[var(--pk-accent)]" />
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/60 md:text-xs">
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 border-2 border-black/40" />
                  {copy.free}
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 border-2 border-black bg-black" />
                  {copy.busy}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
