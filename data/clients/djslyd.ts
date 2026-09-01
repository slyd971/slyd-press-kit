import { pressKitConfig } from "@/data/config";
import type { ClientConfig } from "@/data/clients/types";

export const djslydClient: ClientConfig = {
  slug: "djslyd",
  domain: "djslyd.presskit.fr",
  vercelSubdomain: "djslyd.vercel.app",
  name: "DJ SLY'D",
  tagline: "Open format DJ • Paris • France & international",
  city: "Paris",
  country: "France",
  category: "DJ / Press kit premium",
  description:
    "DJ et producteur open format basé à Paris, entre Hip-Hop, Afro, RnB et énergie club premium.",
  longBio: pressKitConfig.about.paragraphs.join(" "),
  heroImage: "/press-kit/2025-12-29-22-31-08-761.jpg",
  gallery: pressKitConfig.gallery.images,
  socials: {
    instagram: "https://instagram.com/djslyd",
    soundCloud: "https://soundcloud.com/dj-slyd/",
    tikTok: "https://www.tiktok.com/@djslyd/",
  },
  contact: {
    email: "dj-slyd@hotmail.com",
    phone: "+33663907888",
    city: "Paris",
    country: "France",
  },
  services: [
    {
      title: "Club nights",
      description:
        "Sets open format à forte énergie pour dancefloors, nightlife premium et événements lifestyle.",
    },
    {
      title: "Brand activations",
      description:
        "Formats musicaux calibrés pour marques, lancements, retail events et collaborations culturelles.",
    },
    {
      title: "Private bookings",
      description:
        "Performances sur mesure pour événements privés, corporate et expériences premium.",
    },
  ],
  testimonials: [
    {
      quote:
        "Une vraie lecture du public et une capacité rare à faire monter l'énergie sans perdre l'élégance du set.",
      author: "Booking Partner",
      role: "Nightlife & Events",
    },
    {
      quote:
        "Un profil parfait pour les marques qui veulent du crédible, du premium et une vraie culture musicale.",
      author: "Event Producer",
      role: "Brand Activation",
    },
  ],
  bookingEmail: "dj-slyd@hotmail.com",
  seo: {
    title: pressKitConfig.metadata.title,
    description: pressKitConfig.metadata.description,
    keywords: [
      "DJ SLY'D",
      "DJ Paris",
      "open format DJ",
      "hip-hop DJ Paris",
      "afro DJ",
      "RnB DJ",
      "club DJ",
      "DJ press kit",
      "DJ booking Paris",
      "event DJ France",
    ],
    ogImage: "/press-kit/og-share.jpg",
    favicon: "/press-kit/favicon.ico",
    canonical: "https://djslyd.presskit.fr/",
  },
  defaultTheme: "red",
  defaultVariant: "impact",
  pressKit: pressKitConfig,
};
