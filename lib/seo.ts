import type { Metadata, MetadataRoute } from "next";
import type { ClientConfig } from "@/data/clients/types";
import { getCanonicalUrl, getPrimaryHostname } from "@/lib/domains";

export function buildClientMetadata(
  client: ClientConfig,
  path = "/",
  overrides?: Partial<{
    title: string;
    description: string;
    image: string;
    keywords: string[];
    imageAlt: string;
  }>
): Metadata {
  const title = overrides?.title ?? client.seo.title;
  const description = overrides?.description ?? client.seo.description;
  const image = overrides?.image ?? client.seo.ogImage;
  const keywords = overrides?.keywords ?? client.seo.keywords;
  const imageAlt =
    overrides?.imageAlt ?? `Aperçu du dossier de presse de ${client.name}`;
  const canonicalUrl = getCanonicalUrl(client, path);
  const imageUrl = new URL(image, canonicalUrl).toString();
  const instagramHandle = client.socials.instagram
    ?.replace(/\/+$/, "")
    .split("/")
    .pop();

  return {
    metadataBase: new URL(`https://${getPrimaryHostname(client)}`),
    applicationName: client.name,
    title,
    description,
    keywords,
    authors: [{ name: client.name, url: canonicalUrl }],
    creator: client.name,
    publisher: client.name,
    category: client.category,
    other: {
      "music:musician": client.name,
      "profile:username": client.slug,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: client.name,
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: instagramHandle ? `@${instagramHandle}` : undefined,
      images: [imageUrl],
    },
  };
}

export function buildClientSitemapEntries(
  client: ClientConfig
): MetadataRoute.Sitemap {
  const now = new Date();
  const galleryImages = [...new Set(client.gallery.map((image) => image.src))].map(
    (src) => new URL(src, getCanonicalUrl(client)).toString()
  );

  return [
    {
      url: getCanonicalUrl(client),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      images: [new URL(client.seo.ogImage, getCanonicalUrl(client)).toString()],
    },
    {
      url: getCanonicalUrl(client, "/gallery"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: galleryImages,
    },
  ];
}

export function buildSiteJsonLd(client: ClientConfig) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${getCanonicalUrl(client)}#artist`,
      name: client.name,
      alternateName: client.slug,
      jobTitle: client.category,
      description: client.description,
      url: getCanonicalUrl(client),
      image: new URL(client.heroImage, getCanonicalUrl(client)).toString(),
      email: client.bookingEmail,
      telephone: client.contact.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: client.city,
        addressCountry: client.country,
      },
      sameAs: Object.values(client.socials).filter(Boolean),
      knowsAbout: client.services.map((service) => service.title),
      award: client.seo.keywords.filter((keyword) => keyword.includes("DMC")),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${getCanonicalUrl(client)}#website`,
      url: getCanonicalUrl(client),
      name: client.name,
      inLanguage: "fr-FR",
      description: client.description,
      publisher: {
        "@id": `${getCanonicalUrl(client)}#artist`,
      },
    },
  ];
}

export function buildGalleryJsonLd(client: ClientConfig) {
  const firstImage = client.gallery[0];

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${getCanonicalUrl(client, "/gallery")}#webpage`,
    url: getCanonicalUrl(client, "/gallery"),
    name: `${client.name} Galerie`,
    description: client.pressKit.gallery.description,
    isPartOf: {
      "@id": `${getCanonicalUrl(client)}#website`,
    },
    about: {
      "@id": `${getCanonicalUrl(client)}#artist`,
    },
    primaryImageOfPage: firstImage
      ? new URL(firstImage.src, getCanonicalUrl(client)).toString()
      : undefined,
  };
}
