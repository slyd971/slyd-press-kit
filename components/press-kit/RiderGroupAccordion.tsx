"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

type RiderGroupAccordionProps = {
  title: string;
  items: string[];
  defaultOpen?: boolean;
};

/** Groupe du rider replié sur mobile (un tap pour déplier), toujours ouvert dès md. */
export function RiderGroupAccordion({ title, items, defaultOpen = false }: RiderGroupAccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const listId = useId();

  return (
    <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.025] px-5 py-4 md:rounded-[1.5rem] md:p-7">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-3 text-left md:pointer-events-none md:mb-5"
      >
        <span className="flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pk-accent)]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent-soft)] md:text-[11px] md:tracking-[0.34em]">
            {title}
          </span>
        </span>
        <span className="shrink-0 md:hidden">
          <ChevronDown
            aria-hidden="true"
            className={`h-4 w-4 text-white/60 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      <ul id={listId} className={`space-y-3 max-md:pt-4 ${open ? "" : "max-md:hidden"}`}>
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-5 text-white/68 md:text-[0.94rem] md:leading-6">
            <span className="mt-[0.42em] h-[5px] w-[5px] shrink-0 rounded-full bg-[rgb(var(--pk-accent-rgb)/0.55)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
