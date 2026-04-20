import type {
  ContactMethod,
  CtaLink,
  GalleryImage,
  PressKitConfig,
  SpotifyPlaylist,
  StatItem,
  VideoItem,
} from "@/data/config";
import {
  getClientBySlug as getLocalClientBySlug,
  getClients as getLocalClients,
} from "@/data/clients";
import type {
  ClientConfig,
  ClientService,
  ClientTestimonial,
} from "@/data/clients/types";
import {
  defaultTemplateId,
  defaultTemplateVariantId,
  type TemplateId,
  type TemplateVariantId,
} from "@/data/templates";
import { matchesHostname } from "@/lib/domains";

type AirtableRecord = {
  id: string;
  fields: Record<string, unknown>;
};

type AirtableAttachment = {
  id?: string;
  url?: string;
  filename?: string;
  type?: string;
};

type AirtableListResponse = {
  records: AirtableRecord[];
  offset?: string;
};

type AirtableClientIndexEntry = {
  slug: string;
  domain?: string;
  vercelSubdomain?: string;
};

const AIRTABLE_API_URL = process.env.AIRTABLE_API_URL ?? "https://api.airtable.com/v0";
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TOKEN =
  process.env.AIRTABLE_TOKEN ?? process.env.AIRTABLE_PAT ?? null;
const AIRTABLE_REVALIDATE_SECONDS = Number(
  process.env.AIRTABLE_REVALIDATE_SECONDS ?? "60"
);

const AIRTABLE_TABLES = {
  clients: process.env.AIRTABLE_TABLE_CLIENTS ?? "Clients",
  sections: process.env.AIRTABLE_TABLE_SECTIONS ?? "Sections",
  heroVariants: process.env.AIRTABLE_TABLE_HERO_VARIANTS ?? "Hero Variants",
  clubRegions: process.env.AIRTABLE_TABLE_CLUB_REGIONS ?? "Club Regions",
  galleryImages: process.env.AIRTABLE_TABLE_GALLERY_IMAGES ?? "Gallery Images",
  videos: process.env.AIRTABLE_TABLE_VIDEOS ?? "Videos",
  spotifyPlaylists:
    process.env.AIRTABLE_TABLE_SPOTIFY_PLAYLISTS ?? "Spotify Playlists",
  contactMethods:
    process.env.AIRTABLE_TABLE_CONTACT_METHODS ?? "Contact Methods",
  services: process.env.AIRTABLE_TABLE_SERVICES ?? "Services",
  testimonials: process.env.AIRTABLE_TABLE_TESTIMONIALS ?? "Testimonials",
  brands: process.env.AIRTABLE_TABLE_BRANDS ?? "Brands",
} as const;

function isRecordObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function normalizeString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getString(
  fields: Record<string, unknown>,
  ...keys: string[]
): string | undefined {
  for (const key of keys) {
    const value = fields[key];

    if (typeof value === "string") {
      const trimmedValue = value.trim();

      if (trimmedValue) {
        return trimmedValue;
      }
    }
  }

  return undefined;
}

function getNumber(
  fields: Record<string, unknown>,
  ...keys: string[]
): number | undefined {
  for (const key of keys) {
    const value = fields[key];

    if (typeof value === "number" && Number.isFinite(value)) {
      return value;
    }

    if (typeof value === "string" && value.trim()) {
      const parsedValue = Number(value);

      if (Number.isFinite(parsedValue)) {
        return parsedValue;
      }
    }
  }

  return undefined;
}

function getBoolean(
  fields: Record<string, unknown>,
  ...keys: string[]
): boolean | undefined {
  for (const key of keys) {
    const value = fields[key];

    if (typeof value === "boolean") {
      return value;
    }

    if (typeof value === "string") {
      const normalizedValue = value.trim().toLowerCase();

      if (normalizedValue === "true") return true;
      if (normalizedValue === "false") return false;
    }
  }

  return undefined;
}

function getStringArray(
  fields: Record<string, unknown>,
  ...keys: string[]
): string[] | undefined {
  for (const key of keys) {
    const value = fields[key];

    if (Array.isArray(value)) {
      const items = value
        .map((item) => normalizeString(item))
        .filter(Boolean);

      if (items.length > 0) {
        return items;
      }
    }

    if (typeof value === "string") {
      const items = value
        .split(/\r?\n|,/)
        .map((item) => item.trim())
        .filter(Boolean);

      if (items.length > 0) {
        return items;
      }
    }
  }

  return undefined;
}

function getAttachmentUrl(
  fields: Record<string, unknown>,
  ...keys: string[]
): string | undefined {
  for (const key of keys) {
    const value = fields[key];

    if (!Array.isArray(value)) {
      continue;
    }

    const attachment = value.find((item) => {
      return isRecordObject(item) && typeof item.url === "string" && item.url.trim();
    }) as AirtableAttachment | undefined;

    if (attachment?.url) {
      return attachment.url.trim();
    }
  }

  return undefined;
}

function parseJsonValue<T>(value: unknown): T | undefined {
  if (typeof value !== "string" || !value.trim()) {
    return undefined;
  }

  try {
    return JSON.parse(value) as T;
  } catch (error) {
    console.error("Invalid Airtable JSON value", error);
    return undefined;
  }
}

function getJsonValue<T>(
  fields: Record<string, unknown>,
  ...keys: string[]
): T | undefined {
  for (const key of keys) {
    const parsedValue = parseJsonValue<T>(fields[key]);

    if (parsedValue !== undefined) {
      return parsedValue;
    }
  }

  return undefined;
}

function formulaEquals(fieldName: string, value: string) {
  const escapedValue = value.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
  return `{${fieldName}}='${escapedValue}'`;
}

function sortRecords(records: AirtableRecord[]) {
  return [...records].sort((leftRecord, rightRecord) => {
    const leftOrder =
      getNumber(leftRecord.fields, "order", "Order", "sortOrder", "Sort Order") ??
      Number.MAX_SAFE_INTEGER;
    const rightOrder =
      getNumber(
        rightRecord.fields,
        "order",
        "Order",
        "sortOrder",
        "Sort Order"
      ) ?? Number.MAX_SAFE_INTEGER;

    if (leftOrder !== rightOrder) {
      return leftOrder - rightOrder;
    }

    return leftRecord.id.localeCompare(rightRecord.id);
  });
}

function buildTagList(slug?: string) {
  return slug
    ? ["airtable", "airtable:clients", `airtable:client:${slug}`]
    : ["airtable", "airtable:clients"];
}

async function listAirtableRecords(
  tableName: string,
  options?: {
    filterByFormula?: string;
    fields?: string[];
    slug?: string;
  }
): Promise<AirtableRecord[]> {
  if (!AIRTABLE_BASE_ID || !AIRTABLE_TOKEN) {
    return [];
  }

  const records: AirtableRecord[] = [];
  let offset: string | undefined;

  do {
    const searchParams = new URLSearchParams();
    searchParams.set("pageSize", "100");

    if (options?.filterByFormula) {
      searchParams.set("filterByFormula", options.filterByFormula);
    }

    if (options?.fields) {
      for (const fieldName of options.fields) {
        searchParams.append("fields[]", fieldName);
      }
    }

    if (offset) {
      searchParams.set("offset", offset);
    }

    const response = await fetch(
      `${AIRTABLE_API_URL}/${AIRTABLE_BASE_ID}/${encodeURIComponent(
        tableName
      )}?${searchParams.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        },
        next: {
          revalidate: AIRTABLE_REVALIDATE_SECONDS,
          tags: buildTagList(options?.slug),
        },
      }
    );

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(
        `Airtable request failed for table "${tableName}" (${response.status}): ${errorBody}`
      );
    }

    const payload = (await response.json()) as AirtableListResponse;
    records.push(...payload.records);
    offset = payload.offset;
  } while (offset);

  return records;
}

function isIgnorableAirtableTableError(error: unknown) {
  if (!(error instanceof Error)) {
    return false;
  }

  return (
    error.message.includes("INVALID_PERMISSIONS_OR_MODEL_NOT_FOUND") ||
    error.message.includes("(403)") ||
    error.message.includes("(404)")
  );
}

async function listOptionalAirtableRecords(
  tableName: string,
  options?: {
    filterByFormula?: string;
    fields?: string[];
    slug?: string;
  }
) {
  try {
    return await listAirtableRecords(tableName, options);
  } catch (error) {
    if (isIgnorableAirtableTableError(error)) {
      console.warn(
        `Optional Airtable table "${tableName}" is unavailable, continuing with fallback empty data.`
      );
      return [];
    }

    throw error;
  }
}

export function isAirtableConfigured() {
  return Boolean(AIRTABLE_BASE_ID && AIRTABLE_TOKEN);
}

async function getAirtableClientIndex(): Promise<AirtableClientIndexEntry[]> {
  const records = await listAirtableRecords(AIRTABLE_TABLES.clients, {
    fields: ["slug", "domain", "vercelSubdomain"],
  });

  return sortRecords(records)
    .map((record) => {
      const slug = getString(record.fields, "slug");

      if (!slug) {
        return null;
      }

      return {
        slug: slug.toLowerCase(),
        domain: getString(record.fields, "domain"),
        vercelSubdomain: getString(record.fields, "vercelSubdomain"),
      };
    })
    .filter((entry) => entry !== null);
}

async function getAirtableChildRecords(slug: string) {
  const clientFormula = formulaEquals("clientSlug", slug);

  const [
    sectionRecords,
    heroVariantRecords,
    clubRegionRecords,
    galleryImageRecords,
    videoRecords,
    spotifyPlaylistRecords,
    contactMethodRecords,
    serviceRecords,
    testimonialRecords,
    brandRecords,
  ] = await Promise.all([
    listOptionalAirtableRecords(AIRTABLE_TABLES.sections, {
      filterByFormula: clientFormula,
      slug,
    }),
    listOptionalAirtableRecords(AIRTABLE_TABLES.heroVariants, {
      filterByFormula: clientFormula,
      slug,
    }),
    listOptionalAirtableRecords(AIRTABLE_TABLES.clubRegions, {
      filterByFormula: clientFormula,
      slug,
    }),
    listOptionalAirtableRecords(AIRTABLE_TABLES.galleryImages, {
      filterByFormula: clientFormula,
      slug,
    }),
    listOptionalAirtableRecords(AIRTABLE_TABLES.videos, {
      filterByFormula: clientFormula,
      slug,
    }),
    listOptionalAirtableRecords(AIRTABLE_TABLES.spotifyPlaylists, {
      filterByFormula: clientFormula,
      slug,
    }),
    listOptionalAirtableRecords(AIRTABLE_TABLES.contactMethods, {
      filterByFormula: clientFormula,
      slug,
    }),
    listOptionalAirtableRecords(AIRTABLE_TABLES.services, {
      filterByFormula: clientFormula,
      slug,
    }),
    listOptionalAirtableRecords(AIRTABLE_TABLES.testimonials, {
      filterByFormula: clientFormula,
      slug,
    }),
    listOptionalAirtableRecords(AIRTABLE_TABLES.brands, {
      filterByFormula: clientFormula,
      slug,
    }),
  ]);

  return {
    sectionRecords: sortRecords(sectionRecords),
    heroVariantRecords: sortRecords(heroVariantRecords),
    clubRegionRecords: sortRecords(clubRegionRecords),
    galleryImageRecords: sortRecords(galleryImageRecords),
    videoRecords: sortRecords(videoRecords),
    spotifyPlaylistRecords: sortRecords(spotifyPlaylistRecords),
    contactMethodRecords: sortRecords(contactMethodRecords),
    serviceRecords: sortRecords(serviceRecords),
    testimonialRecords: sortRecords(testimonialRecords),
    brandRecords: sortRecords(brandRecords),
  };
}

function mergeClientScalars(
  client: ClientConfig,
  fields: Record<string, unknown>
) {
  client.slug = getString(fields, "slug")?.toLowerCase() ?? client.slug;
  client.domain = getString(fields, "domain") ?? client.domain;
  client.vercelSubdomain =
    getString(fields, "vercelSubdomain") ?? client.vercelSubdomain;
  client.name = getString(fields, "name") ?? client.name;
  client.tagline = getString(fields, "tagline") ?? client.tagline;
  client.city = getString(fields, "city") ?? client.city;
  client.country = getString(fields, "country") ?? client.country;
  client.category = getString(fields, "category") ?? client.category;
  client.description = getString(fields, "description") ?? client.description;
  client.longBio = getString(fields, "longBio") ?? client.longBio;
  client.heroImage =
    getString(fields, "heroImage") ??
    getAttachmentUrl(fields, "heroImageFile") ??
    client.heroImage;
  client.bookingEmail =
    getString(fields, "bookingEmail") ?? client.bookingEmail;

  const defaultTheme = getString(fields, "defaultTheme");
  const defaultVariant = getString(fields, "defaultVariant");

  client.defaultTheme = (defaultTheme as TemplateId) ?? client.defaultTheme;
  client.defaultVariant =
    (defaultVariant as TemplateVariantId) ?? client.defaultVariant;

  client.socials.instagram =
    getString(fields, "instagram", "instagramUrl") ?? client.socials.instagram;
  client.socials.soundCloud =
    getString(fields, "soundCloud", "soundCloudUrl") ?? client.socials.soundCloud;
  client.socials.tikTok =
    getString(fields, "tikTok", "tiktok", "tikTokUrl") ?? client.socials.tikTok;
  client.socials.spotify =
    getString(fields, "spotify", "spotifyUrl") ?? client.socials.spotify;
  client.socials.website =
    getString(fields, "website", "websiteUrl") ?? client.socials.website;

  client.contact.email =
    getString(fields, "contactEmail", "email") ?? client.contact.email;
  client.contact.phone =
    getString(fields, "contactPhone", "phone") ?? client.contact.phone;
  client.contact.city = getString(fields, "contactCity") ?? client.contact.city;
  client.contact.country =
    getString(fields, "contactCountry") ?? client.contact.country;

  client.seo.title = getString(fields, "seoTitle") ?? client.seo.title;
  client.seo.description =
    getString(fields, "seoDescription") ?? client.seo.description;
  client.seo.ogImage =
    getString(fields, "seoOgImage") ??
    getAttachmentUrl(fields, "seoOgImageFile") ??
    client.seo.ogImage;
  client.seo.keywords =
    getStringArray(fields, "seoKeywords") ?? client.seo.keywords;
}

function mergePressKitDefaults(
  pressKit: PressKitConfig,
  fields: Record<string, unknown>,
  client: ClientConfig
) {
  pressKit.metadata.title =
    getString(fields, "metadataTitle", "seoTitle") ??
    pressKit.metadata.title;
  pressKit.metadata.description =
    getString(fields, "metadataDescription", "seoDescription") ??
    pressKit.metadata.description;
  pressKit.artist.name = getString(fields, "artistName", "name") ?? client.name;
  pressKit.artist.stageLabel =
    getString(fields, "artistStageLabel", "tagline") ?? pressKit.artist.stageLabel;
  pressKit.artist.logo.src =
    getString(fields, "artistLogoSrc") ??
    getAttachmentUrl(fields, "artistLogoFile") ??
    pressKit.artist.logo.src;
  pressKit.artist.logo.alt =
    getString(fields, "artistLogoAlt") ?? pressKit.artist.logo.alt;
}

function applySectionOverrides(
  pressKit: PressKitConfig,
  sectionRecords: AirtableRecord[]
) {
  for (const record of sectionRecords) {
    const sectionKey = getString(record.fields, "sectionKey")?.toLowerCase();

    if (!sectionKey) {
      continue;
    }

    if (sectionKey === "about") {
      pressKit.about.eyebrow =
        getString(record.fields, "eyebrow") ?? pressKit.about.eyebrow;
      pressKit.about.title =
        getString(record.fields, "title") ?? pressKit.about.title;
      pressKit.about.signatureLabel =
        getString(record.fields, "signatureLabel") ??
        pressKit.about.signatureLabel;
      pressKit.about.signatureQuote =
        getString(record.fields, "signatureQuote") ??
        pressKit.about.signatureQuote;
      pressKit.about.supportingText =
        getString(record.fields, "supportingText") ??
        pressKit.about.supportingText;
      pressKit.about.paragraphs =
        getStringArray(record.fields, "paragraphs") ?? pressKit.about.paragraphs;
      pressKit.about.tags =
        getStringArray(record.fields, "tags") ?? pressKit.about.tags;
    }

    if (sectionKey === "clubs") {
      pressKit.clubs.eyebrow =
        getString(record.fields, "eyebrow") ?? pressKit.clubs.eyebrow;
      pressKit.clubs.title =
        getString(record.fields, "title") ?? pressKit.clubs.title;
      pressKit.clubs.description =
        getString(record.fields, "description") ?? pressKit.clubs.description;
    }

    if (sectionKey === "sound") {
      pressKit.sound.eyebrow =
        getString(record.fields, "eyebrow") ?? pressKit.sound.eyebrow;
      pressKit.sound.title =
        getString(record.fields, "title") ?? pressKit.sound.title;
      pressKit.sound.paragraphs =
        getStringArray(record.fields, "paragraphs") ?? pressKit.sound.paragraphs;
      pressKit.sound.embedTitle =
        getString(record.fields, "embedTitle") ?? pressKit.sound.embedTitle;
      pressKit.sound.embedUrl =
        getString(record.fields, "embedUrl") ?? pressKit.sound.embedUrl;
      pressKit.sound.cta.label =
        getString(record.fields, "ctaLabel") ?? pressKit.sound.cta.label;
      pressKit.sound.cta.href =
        getString(record.fields, "ctaHref") ?? pressKit.sound.cta.href;
      pressKit.sound.cta.variant =
        (getString(record.fields, "ctaVariant") as CtaLink["variant"]) ??
        pressKit.sound.cta.variant;
      pressKit.sound.cta.external =
        getBoolean(record.fields, "ctaExternal") ?? pressKit.sound.cta.external;
    }

    if (sectionKey === "videos") {
      pressKit.videos.eyebrow =
        getString(record.fields, "eyebrow") ?? pressKit.videos.eyebrow;
      pressKit.videos.title =
        getString(record.fields, "title") ?? pressKit.videos.title;
      pressKit.videos.description =
        getString(record.fields, "description") ?? pressKit.videos.description;
    }

    if (sectionKey === "spotify") {
      pressKit.spotify.eyebrow =
        getString(record.fields, "eyebrow") ?? pressKit.spotify.eyebrow;
      pressKit.spotify.title =
        getString(record.fields, "title") ?? pressKit.spotify.title;
      pressKit.spotify.description =
        getString(record.fields, "description") ?? pressKit.spotify.description;
      pressKit.spotify.badgeLabel =
        getString(record.fields, "badgeLabel") ?? pressKit.spotify.badgeLabel;
    }

    if (sectionKey === "brands") {
      pressKit.brands.eyebrow =
        getString(record.fields, "eyebrow") ?? pressKit.brands.eyebrow;
      pressKit.brands.title =
        getString(record.fields, "title") ?? pressKit.brands.title;
      pressKit.brands.intro =
        getString(record.fields, "intro") ?? pressKit.brands.intro;
      pressKit.brands.supportingText =
        getString(record.fields, "supportingText") ??
        pressKit.brands.supportingText;
      pressKit.brands.itemLabel =
        getString(record.fields, "itemLabel") ?? pressKit.brands.itemLabel;
      pressKit.brands.categories =
        getStringArray(record.fields, "categories") ??
        pressKit.brands.categories;
      pressKit.brands.fit.eyebrow =
        getString(record.fields, "fitEyebrow") ?? pressKit.brands.fit.eyebrow;
      pressKit.brands.fit.title =
        getString(record.fields, "fitTitle") ?? pressKit.brands.fit.title;
      pressKit.brands.fit.points =
        getStringArray(record.fields, "fitPoints") ??
        pressKit.brands.fit.points;
    }

    if (sectionKey === "contact") {
      pressKit.contact.eyebrow =
        getString(record.fields, "eyebrow") ?? pressKit.contact.eyebrow;
      pressKit.contact.title =
        getString(record.fields, "title") ?? pressKit.contact.title;
      pressKit.contact.description =
        getString(record.fields, "description") ?? pressKit.contact.description;
    }

    if (sectionKey === "gallery") {
      pressKit.gallery.eyebrow =
        getString(record.fields, "eyebrow") ?? pressKit.gallery.eyebrow;
      pressKit.gallery.title =
        getString(record.fields, "title") ?? pressKit.gallery.title;
      pressKit.gallery.description =
        getString(record.fields, "description") ?? pressKit.gallery.description;
      pressKit.gallery.homepageTitle =
        getString(record.fields, "homepageTitle") ??
        pressKit.gallery.homepageTitle;
      pressKit.gallery.homepageCtaLabel =
        getString(record.fields, "homepageCtaLabel") ??
        pressKit.gallery.homepageCtaLabel;
    }
  }
}

function applyHeroVariantOverrides(
  pressKit: PressKitConfig,
  heroVariantRecords: AirtableRecord[]
) {
  for (const record of heroVariantRecords) {
    const variantId = getString(record.fields, "variant")?.toLowerCase() as
      | keyof PressKitConfig["heroVariants"]
      | undefined;

    if (!variantId || !pressKit.heroVariants[variantId]) {
      continue;
    }

    const variant = pressKit.heroVariants[variantId];
    variant.eyebrow =
      getString(record.fields, "eyebrow") ?? variant.eyebrow;
    variant.title = getString(record.fields, "title") ?? variant.title;
    variant.accent = getString(record.fields, "accent") ?? variant.accent;
    variant.description =
      getString(record.fields, "description") ?? variant.description;
    variant.image.src =
      getString(record.fields, "imageSrc") ??
      getAttachmentUrl(record.fields, "imageFile") ??
      variant.image.src;
    variant.image.alt =
      getString(record.fields, "imageAlt") ?? variant.image.alt;
    variant.image.badge =
      getString(record.fields, "imageBadge") ?? variant.image.badge;
    variant.image.caption =
      getString(record.fields, "imageCaption") ?? variant.image.caption;
    variant.footerNote =
      getString(record.fields, "footerNote") ?? variant.footerNote;

    const ctas = getJsonValue<CtaLink[]>(record.fields, "ctasJson");
    const stats = getJsonValue<StatItem[]>(record.fields, "statsJson");
    const mediaCard = getJsonValue<NonNullable<typeof variant.mediaCard>>(
      record.fields,
      "mediaCardJson"
    );

    if (ctas?.length) {
      variant.ctas = ctas;
    }

    if (stats?.length) {
      variant.stats = stats;
    }

    if (mediaCard) {
      variant.mediaCard = mediaCard;
    }

    if (variant.mediaCard) {
      variant.mediaCard.imageSrc =
        getAttachmentUrl(record.fields, "mediaCardImageFile") ??
        variant.mediaCard.imageSrc;
    }
  }
}

function toGalleryImages(records: AirtableRecord[]): GalleryImage[] {
  const images = records
    .map((record) => {
      const src =
        getAttachmentUrl(record.fields, "imageFile") ??
        getString(record.fields, "src");
      const alt = getString(record.fields, "alt");

      if (!src || !alt) {
        return null;
      }

      return {
        src,
        alt,
        size: getString(record.fields, "size"),
        position: getString(record.fields, "position"),
        previewScale: getNumber(record.fields, "previewScale"),
        previewOffsetY: getString(record.fields, "previewOffsetY"),
      } satisfies GalleryImage;
    })
    .filter((item) => item !== null);

  return images;
}

function toVideos(records: AirtableRecord[]): VideoItem[] {
  return records
    .map((record) => {
      const videoSource = getString(record.fields, "videoSource", "source")?.toLowerCase();
      const src =
        (videoSource === "airtable"
          ? getAttachmentUrl(record.fields, "videoFile")
          : undefined) ??
        getString(record.fields, "src") ??
        getAttachmentUrl(record.fields, "videoFile");
      const poster =
        getString(record.fields, "poster") ??
        getAttachmentUrl(record.fields, "posterFile");
      const title = getString(record.fields, "title");

      if (!src || !poster || !title) {
        return null;
      }

      return {
        id:
          getString(record.fields, "id") ??
          getString(record.fields, "slug") ??
          record.id,
        title,
        description: getString(record.fields, "description") ?? "",
        src,
        poster,
      } satisfies VideoItem;
    })
    .filter((item): item is VideoItem => Boolean(item));
}

function toSpotifyPlaylists(records: AirtableRecord[]): SpotifyPlaylist[] {
  return records
    .map((record) => {
      const title = getString(record.fields, "title");
      const embedUrl = getString(record.fields, "embedUrl");

      if (!title || !embedUrl) {
        return null;
      }

      return {
        id: getString(record.fields, "id") ?? record.id,
        title,
        embedUrl,
      } satisfies SpotifyPlaylist;
    })
    .filter((item): item is SpotifyPlaylist => Boolean(item));
}

function toContactMethods(records: AirtableRecord[]): ContactMethod[] {
  const methods = records
    .map((record) => {
      const label = getString(record.fields, "label");
      const value = getString(record.fields, "value");
      const href = getString(record.fields, "href");
      const icon = getString(record.fields, "icon") as ContactMethod["icon"] | undefined;

      if (!label || !value || !href || !icon) {
        return null;
      }

      return {
        label,
        value,
        href,
        icon,
        external: getBoolean(record.fields, "external"),
      } satisfies ContactMethod;
    })
    .filter((item) => item !== null);

  return methods;
}

function toServices(records: AirtableRecord[]): ClientService[] {
  return records
    .map((record) => {
      const title = getString(record.fields, "title");
      const description = getString(record.fields, "description");

      if (!title || !description) {
        return null;
      }

      return { title, description } satisfies ClientService;
    })
    .filter((item): item is ClientService => Boolean(item));
}

function toTestimonials(records: AirtableRecord[]): ClientTestimonial[] {
  const testimonials = records
    .map((record) => {
      const quote = getString(record.fields, "quote");
      const author = getString(record.fields, "author");

      if (!quote || !author) {
        return null;
      }

      return {
        quote,
        author,
        role: getString(record.fields, "role"),
      } satisfies ClientTestimonial;
    })
    .filter((item) => item !== null);

  return testimonials;
}

function applyClubRegions(pressKit: PressKitConfig, records: AirtableRecord[]) {
  const regions = records
    .map((record) => {
      const title = getString(record.fields, "title");
      const icon = getString(record.fields, "icon") as
        | "map-pin"
        | "globe"
        | undefined;
      const items = getStringArray(record.fields, "items");

      if (!title || !icon || !items?.length) {
        return null;
      }

      return { title, icon, items };
    })
    .filter(
      (
        item
      ): item is {
        title: string;
        icon: "map-pin" | "globe";
        items: string[];
      } => Boolean(item)
    );

  if (regions.length > 0) {
    pressKit.clubs.regions = regions;
  }
}

function applyBrands(pressKit: PressKitConfig, records: AirtableRecord[]) {
  const items = records
    .map((record) => getString(record.fields, "label", "name", "title"))
    .filter((item): item is string => Boolean(item));

  if (items.length > 0) {
    pressKit.brands.items = items;
  }
}

function createClientTemplate(slug: string): ClientConfig {
  const localClient = getLocalClientBySlug(slug);
  const fallbackClient = getLocalClients()[0];
  const sourceClient = localClient ?? fallbackClient;
  const client = structuredClone(sourceClient);

  client.slug = slug;
  client.defaultTheme = client.defaultTheme ?? defaultTemplateId;
  client.defaultVariant = client.defaultVariant ?? defaultTemplateVariantId;

  return client;
}

async function getAirtableClientBySlugUncached(
  slug: string
): Promise<ClientConfig | null> {
  if (!slug || !isAirtableConfigured()) {
    return null;
  }

  const normalizedSlug = slug.toLowerCase();
  const clientRecords = await listAirtableRecords(AIRTABLE_TABLES.clients, {
    filterByFormula: formulaEquals("slug", normalizedSlug),
    slug: normalizedSlug,
  });

  const clientRecord = sortRecords(clientRecords)[0];

  if (!clientRecord) {
    return null;
  }

  const client = createClientTemplate(normalizedSlug);
  mergeClientScalars(client, clientRecord.fields);
  mergePressKitDefaults(client.pressKit, clientRecord.fields, client);

  const childRecords = await getAirtableChildRecords(normalizedSlug);

  applySectionOverrides(client.pressKit, childRecords.sectionRecords);
  applyHeroVariantOverrides(client.pressKit, childRecords.heroVariantRecords);
  applyClubRegions(client.pressKit, childRecords.clubRegionRecords);
  applyBrands(client.pressKit, childRecords.brandRecords);

  const galleryImages = toGalleryImages(childRecords.galleryImageRecords);
  const videos = toVideos(childRecords.videoRecords);
  const spotifyPlaylists = toSpotifyPlaylists(
    childRecords.spotifyPlaylistRecords
  );
  const contactMethods = toContactMethods(childRecords.contactMethodRecords);
  const services = toServices(childRecords.serviceRecords);
  const testimonials = toTestimonials(childRecords.testimonialRecords);

  if (galleryImages.length > 0) {
    client.gallery = galleryImages;
    client.pressKit.gallery.images = galleryImages;
  }

  if (videos.length > 0) {
    client.pressKit.videos.items = videos;
  }

  if (spotifyPlaylists.length > 0) {
    client.pressKit.spotify.playlists = spotifyPlaylists;
  }

  if (contactMethods.length > 0) {
    client.pressKit.contact.methods = contactMethods;
  }

  if (services.length > 0) {
    client.services = services;
  }

  if (testimonials.length > 0) {
    client.testimonials = testimonials;
  }

  client.longBio = client.pressKit.about.paragraphs.join(" ");
  client.description = client.pressKit.metadata.description;
  client.seo.title = client.pressKit.metadata.title;
  client.seo.description = client.pressKit.metadata.description;
  client.name = client.pressKit.artist.name;
  client.tagline = client.pressKit.artist.stageLabel;

  return client;
}

export async function getAirtableClientBySlug(slug?: string | null) {
  if (!slug) {
    return null;
  }

  try {
    return await getAirtableClientBySlugUncached(slug.toLowerCase());
  } catch (error) {
    console.error(`Failed to load Airtable client "${slug}"`, error);
    return null;
  }
}

export async function getAirtableClientByHost(hostname?: string | null) {
  if (!hostname || !isAirtableConfigured()) {
    return null;
  }

  try {
    const clientIndex = await getAirtableClientIndex();
    const match = clientIndex.find((entry) => {
      return (
        matchesHostname(hostname, entry.domain) ||
        matchesHostname(hostname, entry.vercelSubdomain)
      );
    });

    return match ? getAirtableClientBySlug(match.slug) : null;
  } catch (error) {
    console.error(`Failed to resolve Airtable client for host "${hostname}"`, error);
    return null;
  }
}

export function getAirtableRevalidateSlugFromRequestBody(
  body: unknown
): string | null {
  if (!isRecordObject(body)) {
    return null;
  }

  const record = isRecordObject(body.record) ? body.record : null;
  const recordFields =
    record && isRecordObject(record.fields) ? record.fields : null;

  const slug =
    normalizeString(body.slug) ||
    normalizeString(body.clientSlug) ||
    normalizeString(body.client) ||
    normalizeString(recordFields?.slug) ||
    normalizeString(recordFields?.clientSlug);

  return slug ? slug.toLowerCase() : null;
}
