import type { CSSProperties } from "react";
import { Anton, Manrope } from "next/font/google";

const clubDisplayFont = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const clubBodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export type FontPresetId = "studio" | "editorial" | "club";

export type FontPreset = {
  id: FontPresetId;
  label: string;
  bodyFamily: string;
  displayFamily: string;
};

export const fontPresets: Record<FontPresetId, FontPreset> = {
  studio: {
    id: "studio",
    label: "Base",
    bodyFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    displayFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  editorial: {
    id: "editorial",
    label: "Editorial",
    bodyFamily:
      'Baskerville, "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
    displayFamily:
      '"Iowan Old Style", Baskerville, "Palatino Linotype", "Book Antiqua", Georgia, serif',
  },
  club: {
    id: "club",
    label: "Club",
    bodyFamily: `${clubBodyFont.style.fontFamily}, "Segoe UI", sans-serif`,
    displayFamily: `${clubDisplayFont.style.fontFamily}, Impact, sans-serif`,
  },
};

export const defaultFontPresetId: FontPresetId = "studio";
export const fontPresetOrder: FontPresetId[] = [
  "studio",
  "editorial",
  "club",
];

const fontPresetAliases: Record<string, FontPresetId> = {
  mono: "club",
};

export function getFontPreset(font?: string): FontPreset {
  if (!font) return fontPresets[defaultFontPresetId];

  const normalizedFont = font.toLowerCase();
  return (
    fontPresets[normalizedFont as FontPresetId] ??
    fontPresets[fontPresetAliases[normalizedFont]] ??
    fontPresets[defaultFontPresetId]
  );
}

export function getFontPresetEntries(): FontPreset[] {
  return fontPresetOrder.map((id) => fontPresets[id]);
}

export function getFontStyle(fontPreset: FontPreset): CSSProperties {
  return {
    "--pk-font-body": fontPreset.bodyFamily,
    "--pk-font-display": fontPreset.displayFamily,
  } as CSSProperties;
}
