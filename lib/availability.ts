import ical, { type VEvent } from "node-ical";

// Availability = days on which a DJ's calendar (iCloud public calendar or
// Google "secret iCal address") has a busy event. Only YYYY-MM-DD strings
// leave this module: event titles, places and times are never exposed.

const TIME_ZONE = "Europe/Paris";
const MONTHS_AHEAD = 12;
const REVALIDATE_SECONDS = 600;
const FETCH_TIMEOUT_MS = 8000;

export type Availability = {
  busyDates: string[];
  source: "calendar" | "demo" | "error" | "none";
};

const dayFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: TIME_ZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

function toParisDay(date: Date) {
  return dayFormatter.format(date);
}

function toLocalDay(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function addDays(day: string, amount: number) {
  const [year, month, date] = day.split("-").map(Number);
  const next = new Date(Date.UTC(year, month - 1, date + amount));
  return next.toISOString().slice(0, 10);
}

function envKeyFor(slug: string) {
  return `AVAILABILITY_ICS_${slug.toUpperCase().replace(/[^A-Z0-9]/g, "_")}`;
}

// "djslyd-en" shares the calendar of "djslyd".
function baseSlug(slug: string) {
  return slug.replace(/-en$/, "");
}

export function getCalendarUrl(slug: string) {
  const raw = process.env[envKeyFor(baseSlug(slug))]?.trim();

  if (!raw) {
    return null;
  }

  // iCloud shares public calendars as webcal://, which fetch() can't open.
  const url = raw.replace(/^webcals?:\/\//i, "https://");

  return /^https:\/\//i.test(url) ? url : null;
}

function collectBusyDays(events: VEvent[], from: Date, to: Date) {
  const busy = new Set<string>();
  const fromDay = toParisDay(from);
  const toDay = toParisDay(to);

  function mark(startDay: string, lastDay: string) {
    let day = startDay;

    for (let guard = 0; guard < 400 && day <= lastDay; guard += 1) {
      if (day >= fromDay && day <= toDay) {
        busy.add(day);
      }
      day = addDays(day, 1);
    }
  }

  function markInstance(start: Date, end: Date | undefined, isFullDay: boolean) {
    if (isFullDay) {
      // All-day events: DTEND is exclusive and date-only values are parsed
      // in the server's local zone.
      const startDay = toLocalDay(start);
      const lastDay = end ? addDays(toLocalDay(end), -1) : startDay;
      mark(startDay, lastDay < startDay ? startDay : lastDay);
      return;
    }

    // Timed events count for the day they start. A set that runs past
    // midnight (22:00 → 04:00) must not block the next day, so the end is
    // pulled back 6h before deciding whether the event spans several days.
    const startDay = toParisDay(start);
    const lastDay = end ? toParisDay(new Date(end.getTime() - 6 * 3600 * 1000)) : startDay;
    mark(startDay, lastDay < startDay ? startDay : lastDay);
  }

  for (const event of events) {
    if (event.status === "CANCELLED" || event.transparency === "TRANSPARENT") {
      continue;
    }

    if (event.rrule) {
      const instances = ical.expandRecurringEvent(event, {
        from,
        to,
        includeOverrides: true,
        excludeExdates: true,
      });

      for (const instance of instances) {
        markInstance(instance.start, instance.end, Boolean(instance.isFullDay));
      }
      continue;
    }

    if (event.start) {
      markInstance(event.start, event.end, event.datetype === "date");
    }
  }

  return [...busy].sort();
}

async function fetchBusyDates(url: string) {
  const response = await fetch(url, {
    next: { revalidate: REVALIDATE_SECONDS, tags: ["availability"] },
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`Calendar responded with ${response.status}`);
  }

  const parsed = ical.parseICS(await response.text());
  const events = Object.values(parsed).filter(
    (item): item is VEvent => item?.type === "VEVENT"
  );
  const from = new Date();
  const to = new Date(from);
  to.setMonth(to.getMonth() + MONTHS_AHEAD);

  return collectBusyDays(events, from, to);
}

// Fake but realistic dates so the block can be designed before a real
// calendar is connected. Only used on localhost.
function getDemoBusyDates() {
  const today = toParisDay(new Date());
  const offsets = [2, 3, 9, 10, 11, 16, 17, 23, 24, 30, 31, 38, 45, 46, 52, 59, 60];

  return offsets.map((offset) => addDays(today, offset));
}

export async function getAvailability(
  slug: string,
  options: { allowDemo?: boolean } = {}
): Promise<Availability> {
  const url = getCalendarUrl(slug);

  if (url) {
    try {
      return { busyDates: await fetchBusyDates(url), source: "calendar" };
    } catch (error) {
      console.error(`[availability] ${slug}:`, error);
      // Never show a misleadingly empty calendar when the feed is down.
      return { busyDates: [], source: "error" };
    }
  }

  if (options.allowDemo) {
    return { busyDates: getDemoBusyDates(), source: "demo" };
  }

  return { busyDates: [], source: "none" };
}

/** True when the Disponibilités block is rendered for this client. */
export function isAvailabilityEnabled(
  slug: string,
  options: { allowDemo?: boolean } = {}
) {
  return Boolean(getCalendarUrl(slug)) || Boolean(options.allowDemo);
}
