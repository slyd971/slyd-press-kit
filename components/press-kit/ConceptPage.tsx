import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import kitStyles from "@/components/press-kit/kit.module.css";
import { ConceptCover } from "@/components/press-kit/ConceptsSection";
import { GalleryClient } from "@/components/gallery/GalleryClient";
import { DevControlPanel } from "@/components/press-kit/DevControlPanel";
import { Footer } from "@/components/press-kit/Footer";
import { Header } from "@/components/press-kit/Header";
import { getSlydPresentationClass, isSlydPoster } from "@/components/press-kit/slyd/presentation";
import type { PressKitConfig } from "@/data/config";
import { getFontPreset, getFontStyle } from "@/data/font-presets";
import {
  createPressKitEntry,
  getArtistGalleryHref,
  getArtistHomeHref,
  getArtistVideosHref,
  getMenuFooterLinks,
  getResolvedNavigation,
  hasVideoContent,
} from "@/data/press-kits";
import { getTemplateStyle, getTemplateTheme } from "@/data/templates";
import { isAvailabilityEnabled } from "@/lib/availability";
import { getRequestedClientSlug, getRequiredRequestClient } from "@/lib/clients/server";
import { isLocalRequest } from "@/lib/is-local-request";
import { getLocalizedClient } from "@/lib/localized-client";
import { buildClientMetadata } from "@/lib/seo";

export type ConceptPageProps = {
  params: Promise<{ slug: string; locale?: string }>;
  searchParams?: Promise<{ client?: string; artist?: string; template?: string; font?: string }>;
};

async function resolveConcept({ params, searchParams }: ConceptPageProps) {
  const { slug, locale } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const requested = await getRequiredRequestClient(getRequestedClientSlug(resolvedSearchParams));
  const client = getLocalizedClient(requested, locale);
  const concept = client.pressKit.concepts?.items.find((item) => item.slug === slug);

  if (!concept || !client.pressKit.concepts) notFound();

  return { client, concept, concepts: client.pressKit.concepts, locale, resolvedSearchParams };
}

export async function generateConceptMetadata(props: ConceptPageProps): Promise<Metadata> {
  const { client, concept, locale } = await resolveConcept(props);
  const path = `${locale?.toLowerCase() === "en" ? "/en" : ""}/concepts/${concept.slug}`;
  const description =
    concept.description?.[0] ??
    [concept.name, concept.tagline, ...(concept.details?.map((detail) => detail.value) ?? [])]
      .filter(Boolean)
      .join(" · ");

  return buildClientMetadata(client, path, {
    title: `${concept.name}${concept.tagline ? ` — ${concept.tagline}` : ""} | ${client.name}`,
    description,
    image: concept.image?.src ?? client.seo.ogImage,
    imageAlt: concept.image?.alt ?? concept.name,
  });
}

type ConceptItem = NonNullable<PressKitConfig["concepts"]>["items"][number];

function ConceptHeader({ concept, eyebrow, lineupLabel }: { concept: ConceptItem; eyebrow: string; lineupLabel?: string }) {
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--pk-accent)] md:text-xs md:tracking-[0.35em]">
        {eyebrow}
      </div>
      <h1 className="mt-3 text-4xl font-black uppercase leading-[0.95] md:text-6xl">{concept.name}</h1>
      {concept.tagline ? (
        <p className="mt-3 text-lg font-semibold uppercase tracking-[0.12em] text-white/60 md:text-xl">{concept.tagline}</p>
      ) : null}

      {concept.details?.length ? (
        <dl className="mt-8 grid gap-x-8 gap-y-5 border-y border-white/10 py-6 sm:grid-cols-2">
          {concept.details.map((detail) => (
            <div key={detail.label}>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">{detail.label}</dt>
              <dd className="mt-1 text-lg font-semibold text-white">{detail.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      {concept.lineup?.length ? (
        <div className="mt-8">
          {lineupLabel ? (
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">{lineupLabel}</div>
          ) : null}
          <ul className="flex flex-wrap gap-2">
            {concept.lineup.map((name) => (
              <li key={name} className="border border-white/20 px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.1em] text-white/85">
                {name}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {concept.description?.length ? (
        <div className="mt-8 max-w-2xl space-y-4 text-base leading-7 text-white/72 md:text-lg md:leading-8">
          {concept.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export async function ConceptPage(props: ConceptPageProps) {
  const { client, concept, concepts, resolvedSearchParams } = await resolveConcept(props);
  const pressKitEntry = createPressKitEntry(client);
  const pressKitConfig = pressKitEntry.config;
  const theme = getTemplateTheme(resolvedSearchParams?.template ?? pressKitEntry.defaultTheme);
  const fontPreset = getFontPreset(resolvedSearchParams?.font ?? client.defaultFont);
  const showLocalSwitchers = await isLocalRequest();
  const navigation = getResolvedNavigation(
    pressKitConfig,
    isAvailabilityEnabled(client.slug, { allowDemo: showLocalSwitchers }) ? ["#disponibilites"] : []
  );
  const homeHref = getArtistHomeHref(pressKitEntry.id);
  const galleryHref = getArtistGalleryHref(pressKitEntry.id);
  const videosHref = hasVideoContent(pressKitConfig) ? getArtistVideosHref(pressKitEntry.id) : "";
  const isEnglish = client.slug.endsWith("-en");
  const homeLocalized = isEnglish ? homeHref.replace(/^\/(?=\?|$)/, "/en") : homeHref;
  const backHref = `${homeLocalized.split("?")[0]}${homeLocalized.includes("?") ? "?" + homeLocalized.split("?")[1] : ""}#concepts`;
  const contactHref = backHref.replace("#concepts", "#contact");

  return (
    <main
      style={{ ...getTemplateStyle(theme), ...getFontStyle(fontPreset) }}
      data-pk-font={resolvedSearchParams?.font ? "custom" : undefined}
      data-pk-theme={theme.id === "monochrome" ? "monochrome" : undefined}
      className={`${kitStyles.kit} min-h-screen bg-[var(--pk-bg)] text-[var(--pk-text)]${isSlydPoster(client) ? ` ${getSlydPresentationClass(client)}` : ""}`}
    >
      <Header
        artist={pressKitConfig.artist}
        navigation={navigation}
        ui={pressKitConfig.ui}
        homeHref={homeHref}
        menuLinks={getMenuFooterLinks(pressKitConfig)}
      />
      {showLocalSwitchers && (
        <DevControlPanel
          activeClientId={pressKitEntry.id}
          activeThemeId={theme.id}
          activeFontPresetId={fontPreset.id}
        />
      )}

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 md:px-6 md:pb-24 md:pt-32">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {concepts.backLabel}
        </Link>

        {concept.video ? (
          <div className="mt-8 md:mt-12">
            <ConceptHeader concept={concept} eyebrow={concepts.pageEyebrow} lineupLabel={concepts.lineupLabel} />

            <div className="mt-10 md:mt-12">
              {concepts.videoLabel ? (
                <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/55">{concepts.videoLabel}</h2>
              ) : null}
              <video
                controls
                playsInline
                preload="metadata"
                poster={concept.video.poster}
                aria-label={concept.video.title}
                className={`bg-black object-contain ${concept.video.orientation === "portrait" ? "aspect-[9/16] w-full max-w-sm" : "aspect-video w-full max-w-4xl"}`}
              >
                <source src={concept.video.src} type="video/mp4" />
              </video>
            </div>
          </div>
        ) : (
          <div className="mt-8 grid gap-10 md:mt-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden bg-white/5 lg:mx-0">
              {concept.image ? (
                <img
                  src={concept.image.src}
                  alt={concept.image.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ height: "100%" }}
                />
              ) : (
                <div className="absolute inset-0">
                  <ConceptCover name={concept.name} tagline={concept.tagline} />
                </div>
              )}
            </div>
            <ConceptHeader concept={concept} eyebrow={concepts.pageEyebrow} lineupLabel={concepts.lineupLabel} />
          </div>
        )}

        {concept.gallery?.length ? (
          <div className="mt-14 md:mt-20">
            {concepts.galleryLabel ? (
              <h2 className="mb-6 text-2xl font-black uppercase md:text-4xl">{concepts.galleryLabel}</h2>
            ) : null}
            <GalleryClient
              images={concept.gallery}
              viewLabel={pressKitConfig.ui.galleryViewLabel}
              downloadLabel={pressKitConfig.ui.galleryDownloadLabel}
              closeLabel={pressKitConfig.ui.galleryCloseLabel}
              previousLabel={pressKitConfig.ui.galleryPreviousLabel}
              nextLabel={pressKitConfig.ui.galleryNextLabel}
            />
          </div>
        ) : null}

        <Link
          href={contactHref}
          className="mt-12 inline-flex items-center rounded bg-[var(--pk-accent)] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[var(--pk-accent-strong)]"
        >
          {concepts.bookLabel}
        </Link>
      </div>

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
