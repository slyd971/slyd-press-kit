import { GalleryClient } from "@/components/gallery/GalleryClient";
import { DevControlPanel } from "@/components/press-kit/DevControlPanel";
import { Header } from "@/components/press-kit/Header";
import { getFontPreset, getFontStyle } from "@/data/font-presets";
import {
  getArtistHomeHref,
  getPressKitEntry,
  getResolvedNavigation,
  hasGalleryContent,
} from "@/data/press-kits";
import { getTemplateStyle, getTemplateTheme } from "@/data/templates";
import { isLocalRequest } from "@/lib/is-local-request";

type GalleryPageProps = {
  searchParams?: Promise<{
    artist?: string;
    template?: string;
    font?: string;
  }>;
};

export default async function GalleryPage({ searchParams }: GalleryPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const pressKitEntry = getPressKitEntry(resolvedSearchParams?.artist);
  const pressKitConfig = pressKitEntry.config;
  const theme = getTemplateTheme(
    resolvedSearchParams?.template ?? pressKitEntry.defaultTheme
  );
  const fontPreset = getFontPreset(resolvedSearchParams?.font);
  const showLocalSwitchers = await isLocalRequest();
  const hasGallery = hasGalleryContent(pressKitConfig);
  const navigation = getResolvedNavigation(pressKitConfig);
  const homeHref = getArtistHomeHref(pressKitEntry.id);

  return (
    <main
      style={{ ...getTemplateStyle(theme), ...getFontStyle(fontPreset) }}
      className="bg-[var(--pk-bg)] px-6 py-24 text-[var(--pk-text)]"
    >
      <Header
        artist={pressKitConfig.artist}
        navigation={navigation}
        ui={pressKitConfig.ui}
        homeHref={homeHref}
      />
      {showLocalSwitchers && (
        <DevControlPanel
          activeArtistId={pressKitEntry.id}
          activeThemeId={theme.id}
          activeFontPresetId={fontPreset.id}
        />
      )}
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <div className="text-xs uppercase tracking-[0.35em] text-[var(--pk-accent)]">
            {pressKitConfig.gallery.eyebrow}
          </div>

          <h1 className="mt-4 text-5xl font-black uppercase md:text-6xl">
            {pressKitConfig.gallery.title}
          </h1>

          <p className="mt-4 max-w-2xl text-white/60">
            {hasGallery
              ? pressKitConfig.gallery.description
              : "No gallery assets available yet for this artist."}
          </p>
        </div>

        {hasGallery ? (
          <GalleryClient
            images={pressKitConfig.gallery.images}
            viewLabel={pressKitConfig.ui.galleryViewLabel}
            downloadLabel={pressKitConfig.ui.galleryDownloadLabel}
            closeLabel={pressKitConfig.ui.galleryCloseLabel}
            previousLabel={pressKitConfig.ui.galleryPreviousLabel}
            nextLabel={pressKitConfig.ui.galleryNextLabel}
          />
        ) : null}
      </div>
    </main>
  );
}
