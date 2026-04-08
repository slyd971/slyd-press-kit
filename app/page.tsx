import { AboutSection } from "@/components/press-kit/AboutSection";
import { BrandsSection } from "@/components/press-kit/BrandsSection";
import { ClubsSection } from "@/components/press-kit/ClubsSection";
import { ContactSection } from "@/components/press-kit/ContactSection";
import { DevControlPanel } from "@/components/press-kit/DevControlPanel";
import { GalleryPreviewSection } from "@/components/press-kit/GalleryPreviewSection";
import { Header } from "@/components/press-kit/Header";
import { HeroSection } from "@/components/press-kit/HeroSection";
import { SoundSection } from "@/components/press-kit/SoundSection";
import { SpotifySection } from "@/components/press-kit/SpotifySection";
import { VideoSection } from "@/components/press-kit/VideoSection";
import { getFontPreset, getFontStyle } from "@/data/font-presets";
import {
  getArtistGalleryHref,
  getArtistHomeHref,
  getPressKitEntry,
  getResolvedNavigation,
  hasBrandsContent,
  hasGalleryContent,
  hasSoundContent,
  hasSpotifyContent,
  hasVideoContent,
} from "@/data/press-kits";
import { getTemplateStyle, getTemplateTheme, getTemplateVariant } from "@/data/templates";
import { isLocalRequest } from "@/lib/is-local-request";

type HomeProps = {
  searchParams?: Promise<{
    artist?: string;
    template?: string;
    variant?: string;
    font?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const pressKitEntry = getPressKitEntry(resolvedSearchParams?.artist);
  const pressKitConfig = pressKitEntry.config;
  const theme = getTemplateTheme(
    resolvedSearchParams?.template ?? pressKitEntry.defaultTheme
  );
  const variant = getTemplateVariant(
    resolvedSearchParams?.variant ?? pressKitEntry.defaultVariant
  );
  const fontPreset = getFontPreset(resolvedSearchParams?.font);
  const showLocalSwitchers = await isLocalRequest();
  const navigation = getResolvedNavigation(pressKitConfig);
  const galleryHref = getArtistGalleryHref(pressKitEntry.id);
  const homeHref = getArtistHomeHref(pressKitEntry.id);

  return (
    <main
      style={{ ...getTemplateStyle(theme), ...getFontStyle(fontPreset) }}
      className="relative overflow-x-hidden bg-[var(--pk-bg)] text-[var(--pk-text)] selection:bg-[var(--pk-accent)] selection:text-white"
    >
      {showLocalSwitchers && (
        <DevControlPanel
          activeArtistId={pressKitEntry.id}
          activeThemeId={theme.id}
          activeVariantId={variant.id}
          activeFontPresetId={fontPreset.id}
        />
      )}
      <Header
        artist={pressKitConfig.artist}
        navigation={navigation}
        ui={pressKitConfig.ui}
        homeHref={homeHref}
      />
      <HeroSection
        heroVariants={pressKitConfig.heroVariants}
        variant={variant.id}
      />
      <AboutSection about={pressKitConfig.about} />
      <ClubsSection clubs={pressKitConfig.clubs} />
      {hasGalleryContent(pressKitConfig) && (
        <GalleryPreviewSection
          gallery={pressKitConfig.gallery}
          galleryHref={galleryHref}
        />
      )}
      {hasVideoContent(pressKitConfig) && (
        <VideoSection videos={pressKitConfig.videos} />
      )}
      {hasSoundContent(pressKitConfig) && (
        <SoundSection sound={pressKitConfig.sound} />
      )}
      {hasSpotifyContent(pressKitConfig) && (
        <SpotifySection spotify={pressKitConfig.spotify} />
      )}
      {hasBrandsContent(pressKitConfig) && (
        <BrandsSection brands={pressKitConfig.brands} />
      )}
      <ContactSection contact={pressKitConfig.contact} />
    </main>
  );
}
