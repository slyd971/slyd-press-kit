import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutSection } from "@/components/press-kit/AboutSection";
import { BrandsSection } from "@/components/press-kit/BrandsSection";
import { ClubsSection } from "@/components/press-kit/ClubsSection";
import { AvailabilitySection } from "@/components/press-kit/AvailabilitySection";
import { ContactSection } from "@/components/press-kit/ContactSection";
import { DevControlPanel } from "@/components/press-kit/DevControlPanel";
import { Footer } from "@/components/press-kit/Footer";
import { GalleryPreviewSection } from "@/components/press-kit/GalleryPreviewSection";
import { Header } from "@/components/press-kit/Header";
import { HeroSection } from "@/components/press-kit/HeroSection";
import { HighlightsSection } from "@/components/press-kit/HighlightsSection";
import { MediaKitSection } from "@/components/press-kit/MediaKitSection";
import { RiderSection } from "@/components/press-kit/RiderSection";
import { SoundSection } from "@/components/press-kit/SoundSection";
import { SpotifySection } from "@/components/press-kit/SpotifySection";
import { VideoSection } from "@/components/press-kit/VideoSection";
import { VisionSection } from "@/components/press-kit/VisionSection";
import { YoutubeSection } from "@/components/press-kit/YoutubeSection";
import { TourSection } from "@/components/press-kit/TourSection";
import { ConceptsSection } from "@/components/press-kit/ConceptsSection";
import { CollaborationsSection } from "@/components/press-kit/CollaborationsSection";
import { getFontPreset, getFontStyle } from "@/data/font-presets";
import {
  createPressKitEntry,
  getArtistGalleryHref,
  getArtistHomeHref,
  getArtistVideosHref,
  getMenuFooterLinks,
  getResolvedNavigation,
  hasBrandsContent,
  hasGalleryContent,
  hasHighlightsContent,
  hasMediaKitContent,
  hasRiderContent,
  hasSoundContent,
  hasSpotifyContent,
  hasVisionContent,
  hasVideoContent,
  hasYoutubeContent,
  hasTourContent,
  hasConceptsContent,
  getConceptHref,
  hasCollaborationsContent,
} from "@/data/press-kits";
import { getClientBySlug } from "@/data/clients";
import type { ClientConfig } from "@/data/clients/types";
import { getTemplateStyle, getTemplateTheme, getTemplateVariant } from "@/data/templates";
import {
  getRequestedClientSlug,
  getRequiredRequestClient,
} from "@/lib/clients/server";
import { getAvailability, isAvailabilityEnabled } from "@/lib/availability";
import { isLocalRequest } from "@/lib/is-local-request";
import { buildClientMetadata } from "@/lib/seo";
import { getSlydClubsTitle, getSlydPresentationClass, isSlydPoster } from "@/components/press-kit/slyd/presentation";
import kitStyles from "@/components/press-kit/kit.module.css";

type HomeProps = {
  params?: Promise<{
    locale?: string;
  }>;
  searchParams?: Promise<{
    client?: string;
    artist?: string;
    template?: string;
    variant?: string;
    font?: string;
  }>;
};

function getLocalizedClient(client: ClientConfig, locale?: string) {
  const normalizedLocale = locale?.toUpperCase();

  if (
    !normalizedLocale ||
    client.languageSwitch?.some((item) => {
      return item.active && item.label.toUpperCase() === normalizedLocale;
    })
  ) {
    return client;
  }

  const localizedSwitch = client.languageSwitch?.find((item) => {
    return item.label.toUpperCase() === normalizedLocale;
  });
  const localizedSlug =
    localizedSwitch?.clientSlug ??
    (localizedSwitch?.href
      ? new URL(localizedSwitch.href, "https://presskit.local").searchParams.get("client")
      : null);

  return getClientBySlug(localizedSlug) ?? client;
}

export async function generateMetadata({
  params,
  searchParams,
}: HomeProps): Promise<Metadata> {
  const resolvedParams = params ? await params : undefined;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const client = getLocalizedClient(
    await getRequiredRequestClient(getRequestedClientSlug(resolvedSearchParams)),
    resolvedParams?.locale
  );
  const metadataPath = resolvedParams?.locale?.toLowerCase() === "en" ? "/en" : "/";

  return buildClientMetadata(client, metadataPath);
}

export default async function Home({ params, searchParams }: HomeProps) {
  const resolvedParams = params ? await params : undefined;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const requestedClient = await getRequiredRequestClient(
    getRequestedClientSlug(resolvedSearchParams)
  );
  const requestedLocale = resolvedParams?.locale?.toLowerCase();

  // /[locale] only exists for the languages a client really offers; any other
  // single segment (/foo, /robots.txt...) must be a 404, not the home page.
  if (
    requestedLocale &&
    !requestedClient.languageSwitch?.some(
      (item) => item.label.toLowerCase() === requestedLocale
    )
  ) {
    notFound();
  }

  const client = getLocalizedClient(requestedClient, resolvedParams?.locale);
  const pressKitEntry = createPressKitEntry(client);
  const slydPoster = isSlydPoster(client);
  const pressKitConfig = pressKitEntry.config;
  const theme = getTemplateTheme(
    resolvedSearchParams?.template ?? pressKitEntry.defaultTheme
  );
  const variant = getTemplateVariant(
    resolvedSearchParams?.variant ?? pressKitEntry.defaultVariant
  );
  // On mobile, DJ SLY'D uses the showcase hero (full-bleed background
  // photo, text overlaid) instead of the desktop layout's side-by-side
  // portrait card.
  const mobileHeroVariant = slydPoster ? "showcase" : undefined;
  const requestedFont = resolvedSearchParams?.font ?? client.defaultFont;
  const fontPreset = getFontPreset(requestedFont);
  const showLocalSwitchers = await isLocalRequest();
  const navigation = getResolvedNavigation(
    pressKitConfig,
    isAvailabilityEnabled(client.slug, { allowDemo: showLocalSwitchers })
      ? ["#disponibilites"]
      : []
  );
  const galleryHref = getArtistGalleryHref(pressKitEntry.id);
  const videosHref = hasVideoContent(pressKitConfig)
    ? getArtistVideosHref(pressKitEntry.id)
    : "";
  const homeHref =
    client.languageSwitch?.find((item) => item.active)?.href ??
    getArtistHomeHref(pressKitEntry.id);
  const inlineBrandsBelowClubs =
    hasBrandsContent(pressKitConfig) && pressKitConfig.brands.inlineBelowClubs;
  const availability = slydPoster
    ? await getAvailability(client.slug, { allowDemo: showLocalSwitchers })
    : null;
  const availabilityBookingHref =
    pressKitConfig.contact.methods.find((method) => method.href.startsWith("mailto:"))
      ?.href ?? "#contact";

  return (
    <main
      style={{ ...getTemplateStyle(theme), ...getFontStyle(fontPreset) }}
      data-pk-font={requestedFont ? "custom" : undefined}
      data-pk-theme={theme.id}
      data-pk-alt-bg={client.slug.startsWith("dj-killerz") ? "" : undefined}
      data-pk-variant={variant.id}
      className={`${kitStyles.kit} relative overflow-x-hidden bg-[var(--pk-bg)] text-[var(--pk-text)] selection:bg-[var(--pk-accent)] selection:text-white${slydPoster ? ` ${getSlydPresentationClass(client)}` : ""}`}
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
        menuLinks={getMenuFooterLinks(pressKitConfig)}
      />
      <HeroSection
        heroVariants={pressKitConfig.heroVariants}
        heroSocials={pressKitConfig.heroSocials}
        variant={variant.id}
        mobileVariant={mobileHeroVariant}
      />
      <AboutSection
        about={pressKitConfig.about}
        slydPoster={slydPoster}
        collapseOnDesktop={client.slug.startsWith("dj-killerz")}
        language={client.slug.endsWith("-en") ? "en" : "fr"}
      />
      <ClubsSection
        clubs={slydPoster ? { ...pressKitConfig.clubs, title: getSlydClubsTitle(client) } : pressKitConfig.clubs}
        slydPoster={slydPoster}
        language={client.slug.endsWith("-en") ? "en" : "fr"}
        brandReferences={slydPoster ? pressKitConfig.brands.items : undefined}
        brands={inlineBrandsBelowClubs ? pressKitConfig.brands : undefined}
      />
      {hasTourContent(pressKitConfig) && pressKitConfig.tour && (
        <TourSection tour={pressKitConfig.tour} />
      )}
      {hasCollaborationsContent(pressKitConfig) && pressKitConfig.collaborations && (
        <CollaborationsSection collaborations={pressKitConfig.collaborations} />
      )}
      {hasHighlightsContent(pressKitConfig) && pressKitConfig.highlights && (
        <HighlightsSection highlights={pressKitConfig.highlights} />
      )}
      {hasGalleryContent(pressKitConfig) && (
        <GalleryPreviewSection
          gallery={pressKitConfig.gallery}
          galleryHref={galleryHref}
          arrowBadge={slydPoster}
        />
      )}
      {hasVideoContent(pressKitConfig) && (
        <VideoSection videos={pressKitConfig.videos} maxItems={3} />
      )}
      {hasYoutubeContent(pressKitConfig) && pressKitConfig.youtube && (
        <YoutubeSection youtube={pressKitConfig.youtube} />
      )}
      {hasConceptsContent(pressKitConfig) && pressKitConfig.concepts && (
        <ConceptsSection
          concepts={pressKitConfig.concepts}
          getHref={(conceptSlug) => getConceptHref(client.slug, conceptSlug)}
        />
      )}
      {hasVisionContent(pressKitConfig) && pressKitConfig.vision && (
        <VisionSection vision={pressKitConfig.vision} />
      )}
      {hasSoundContent(pressKitConfig) && (
        <SoundSection sound={pressKitConfig.sound} />
      )}
      {hasSpotifyContent(pressKitConfig) && (
        <SpotifySection spotify={pressKitConfig.spotify} />
      )}
      {!slydPoster && hasBrandsContent(pressKitConfig) && !inlineBrandsBelowClubs && (
        <BrandsSection brands={pressKitConfig.brands} />
      )}
      {hasRiderContent(pressKitConfig) && pressKitConfig.rider && (
        <RiderSection rider={pressKitConfig.rider} />
      )}
      {hasMediaKitContent(pressKitConfig) && pressKitConfig.mediaKit && (
        <MediaKitSection mediaKit={pressKitConfig.mediaKit} />
      )}
      {availability && availability.source !== "none" && (
        <AvailabilitySection
          busyDates={availability.busyDates}
          today={new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Paris" }).format(new Date())}
          bookingHref={availabilityBookingHref}
          language={client.slug.endsWith("-en") ? "en" : "fr"}
          demo={availability.source === "demo"}
          unavailable={availability.source === "error"}
        />
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
