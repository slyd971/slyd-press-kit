import type { Metadata } from "next";
import { AboutSection } from "@/components/press-kit/AboutSection";
import { BrandsSection } from "@/components/press-kit/BrandsSection";
import { ClubsSection } from "@/components/press-kit/ClubsSection";
import { ContactSection } from "@/components/press-kit/ContactSection";
import { DevControlPanel } from "@/components/press-kit/DevControlPanel";
import { Footer } from "@/components/press-kit/Footer";
import { GalleryPreviewSection } from "@/components/press-kit/GalleryPreviewSection";
import { Header } from "@/components/press-kit/Header";
import { HeroSection } from "@/components/press-kit/HeroSection";
import { SoundSection } from "@/components/press-kit/SoundSection";
import { SpotifySection } from "@/components/press-kit/SpotifySection";
import { VideoSection } from "@/components/press-kit/VideoSection";
import { getFontPreset, getFontStyle } from "@/data/font-presets";
import {
  createPressKitEntry,
  getArtistGalleryHref,
  getArtistHomeHref,
  getArtistVideosHref,
  getResolvedNavigation,
  hasBrandsContent,
  hasGalleryContent,
  hasSoundContent,
  hasSpotifyContent,
  hasVideoContent,
} from "@/data/press-kits";
import { getTemplateStyle, getTemplateTheme, getTemplateVariant } from "@/data/templates";
import {
  getRequestedClientSlug,
  getRequiredRequestClient,
} from "@/lib/clients/server";
import { isLocalRequest } from "@/lib/is-local-request";
import { buildClientMetadata } from "@/lib/seo";

type HomeProps = {
  searchParams?: Promise<{
    client?: string;
    artist?: string;
    template?: string;
    variant?: string;
    font?: string;
  }>;
};

export async function generateMetadata({
  searchParams,
}: HomeProps): Promise<Metadata> {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const client = await getRequiredRequestClient(
    getRequestedClientSlug(resolvedSearchParams)
  );

  return buildClientMetadata(client);
}

export default async function Home({ searchParams }: HomeProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const client = await getRequiredRequestClient(
    getRequestedClientSlug(resolvedSearchParams)
  );
  const pressKitEntry = createPressKitEntry(client);
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
  const videosHref = getArtistVideosHref(pressKitEntry.id);
  const homeHref = getArtistHomeHref(pressKitEntry.id);

  return (
    <main
      style={{ ...getTemplateStyle(theme), ...getFontStyle(fontPreset) }}
      className="relative overflow-x-hidden bg-[var(--pk-bg)] text-[var(--pk-text)] selection:bg-[var(--pk-accent)] selection:text-white"
    >
      {showLocalSwitchers && (
        <DevControlPanel
          activeClientId={pressKitEntry.id}
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
        heroSocials={pressKitConfig.heroSocials}
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
        <VideoSection videos={pressKitConfig.videos} limit={3} videosHref={videosHref} />
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
      <Footer
        client={client}
        navigation={navigation}
        homeHref={homeHref}
        galleryHref={galleryHref}
        videosHref={videosHref}
      />
    </main>
  );
}
