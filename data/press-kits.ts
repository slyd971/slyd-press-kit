import { yoruboyPressKitConfig } from "@/data/artists/yoruboy";
import { pressKitConfig, type PressKitConfig } from "@/data/config";
import type { TemplateId, TemplateVariantId } from "@/data/templates";

export type ArtistId = "slyd" | "yoruboy";

export const defaultArtistId: ArtistId = "yoruboy";

export type PressKitEntry = {
  id: ArtistId;
  label: string;
  config: PressKitConfig;
  defaultTheme: TemplateId;
  defaultVariant: TemplateVariantId;
};

const pressKitEntries: Record<ArtistId, PressKitEntry> = {
  slyd: {
    id: "slyd",
    label: "DJ SLY'D",
    config: pressKitConfig,
    defaultTheme: "red",
    defaultVariant: "impact",
  },
  yoruboy: {
    id: "yoruboy",
    label: "Yoruboy Dj",
    config: yoruboyPressKitConfig,
    defaultTheme: "orange",
    defaultVariant: "impact",
  },
};

export function getPressKitEntries(): PressKitEntry[] {
  return Object.values(pressKitEntries);
}

const sectionHrefMap = {
  about: "#about",
  clubs: "#clubs",
  gallery: "#gallery",
  videos: "#videos",
  sound: "#sound",
  spotify: "#spotify",
  brands: "#brands",
  contact: "#contact",
};

export function getPressKitEntry(artist?: string): PressKitEntry {
  if (!artist) return pressKitEntries[defaultArtistId];

  const normalizedArtist = artist.toLowerCase();
  return (
    pressKitEntries[normalizedArtist as ArtistId] ??
    pressKitEntries[defaultArtistId]
  );
}

export function getArtistGalleryHref(artistId: ArtistId): string {
  return artistId === defaultArtistId
    ? "/gallery"
    : `/gallery?artist=${artistId}`;
}

export function getArtistHomeHref(artistId: ArtistId): string {
  return artistId === defaultArtistId ? "/" : `/?artist=${artistId}`;
}

export function hasGalleryContent(config: PressKitConfig): boolean {
  return config.gallery.images.length > 0;
}

export function hasVideoContent(config: PressKitConfig): boolean {
  return config.videos.items.length > 0;
}

export function hasSoundContent(config: PressKitConfig): boolean {
  return Boolean(config.sound.embedUrl || config.sound.cta.href);
}

export function hasSpotifyContent(config: PressKitConfig): boolean {
  return config.spotify.playlists.length > 0;
}

export function hasBrandsContent(config: PressKitConfig): boolean {
  return config.brands.items.length > 0;
}

export function getResolvedNavigation(
  config: PressKitConfig
): PressKitConfig["navigation"] {
  const visibleSections = new Set<string>([
    sectionHrefMap.about,
    sectionHrefMap.clubs,
    sectionHrefMap.contact,
  ]);

  if (hasGalleryContent(config)) visibleSections.add(sectionHrefMap.gallery);
  if (hasVideoContent(config)) visibleSections.add(sectionHrefMap.videos);
  if (hasSoundContent(config)) visibleSections.add(sectionHrefMap.sound);
  if (hasSpotifyContent(config)) visibleSections.add(sectionHrefMap.spotify);
  if (hasBrandsContent(config)) visibleSections.add(sectionHrefMap.brands);

  return {
    ...config.navigation,
    items: config.navigation.items.filter((item) =>
      visibleSections.has(item.href)
    ),
  };
}
