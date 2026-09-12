import type { CSSProperties } from "react";

export type ShapePresetId = "pill" | "block";

export type ShapePreset = {
  id: ShapePresetId;
  label: string;
  radiusCta: string;
  radiusBadge: string;
};

export const shapePresets: Record<ShapePresetId, ShapePreset> = {
  pill: {
    id: "pill",
    label: "Pilule",
    radiusCta: "9999px",
    radiusBadge: "9999px",
  },
  block: {
    id: "block",
    label: "Bloc",
    radiusCta: "0.65rem",
    radiusBadge: "0.4rem",
  },
};

export const defaultShapePresetId: ShapePresetId = "pill";

export function getShapePreset(id?: ShapePresetId): ShapePreset {
  return shapePresets[id ?? defaultShapePresetId] ?? shapePresets[defaultShapePresetId];
}

export function getShapeStyle(shape: ShapePreset): CSSProperties {
  return {
    "--pk-radius-cta": shape.radiusCta,
    "--pk-radius-badge": shape.radiusBadge,
  } as CSSProperties;
}
