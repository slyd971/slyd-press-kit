"use client";

import { useEffect, useRef, useState } from "react";

const NUMBER_PATTERN = /^(\D*)(\d[\d\s]*)(.*)$/;

type CountUpValueProps = {
  value: string;
  duration?: number;
};

/** Anime un chiffre de 0 à sa valeur quand il entre à l'écran (« 23 000 », « 5M+ », « 2016 »). */
export function CountUpValue({ value, duration = 1600 }: CountUpValueProps) {
  const match = value.match(NUMBER_PATTERN);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!match || !ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const [, prefix, digits, suffix] = match;
    const target = Number(digits.replace(/\s/g, ""));
    const grouped = /\s/.test(digits.trim());
    const isYear = target >= 1900 && target <= 2100;
    const from = isYear ? target - 25 : 0;
    const format = (n: number) => {
      const text = Math.round(n).toString();
      return grouped ? text.replace(/\B(?=(\d{3})+(?!\d))/g, " ") : text;
    };

    setDisplay(`${prefix}${format(from)}${suffix}`);

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(`${prefix}${format(from + (target - from) * eased)}${suffix}`);
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return (
    <span ref={ref} aria-label={value}>
      {display}
    </span>
  );
}
