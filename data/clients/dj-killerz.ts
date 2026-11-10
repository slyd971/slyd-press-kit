import type { PressKitConfig } from "@/data/config";
import type { ClientConfig } from "@/data/clients/types";

const instagramUrl = "https://www.instagram.com/djkillerz972";
const youtubeUrl = "https://youtube.com/@djkillerz972";
const spotifyUrl = "https://open.spotify.com/artist/71X7K0slYbYStlckXMurGs";
const spotifyEmbedUrl =
  "https://open.spotify.com/embed/artist/71X7K0slYbYStlckXMurGs?utm_source=generator&theme=0";
const bookingEmail = "djkillerzbooking@gmail.com";
const photoKitUrl =
  "https://drive.google.com/drive/folders/1DCqRpXANycRJMNu3JDFAd63uk915zfio?usp=sharing";

const g = (n: number) => `/dj-killerz/gallery/killerz-${String(n).padStart(2, "0")}.jpeg`;

const heroImage = g(21);
const heroPosition = "center 18%";

const djKillerzPressKit: PressKitConfig = {
  metadata: {
    title: "DJ KillerZ | Press kit officiel",
    description:
      "DJ KillerZ, DJ martiniquais et DJ officiel de Kalash depuis 2016 : Olympia, Bercy, Stade Pierre-Aliker devant 23 000 personnes, Full Joy Tour 2025, Yardland Festival 2026. Booking.",
  },
  ui: {
    openMenuLabel: "Ouvrir le menu",
    closeMenuLabel: "Fermer le menu",
    galleryViewLabel: "Voir",
    galleryDownloadLabel: "Télécharger",
    galleryCloseLabel: "Fermer la galerie",
    galleryPreviousLabel: "Image précédente",
    galleryNextLabel: "Image suivante",
  },
  artist: {
    name: "DJ KillerZ",
    stageLabel: "DJ / Producteur • Martinique & international",
    logo: {
      src: "",
      alt: "DJ KillerZ",
    },
  },
  navigation: {
    items: [
      { label: "À propos", href: "#about" },
      { label: "Scènes", href: "#clubs" },
      { label: "Galerie", href: "#gallery" },
      { label: "Vidéos", href: "#videos" },
      { label: "Spotify", href: "#spotify" },
      { label: "Rider", href: "#rider" },
    ],
    cta: {
      label: "Booker",
      href: "#contact",
      variant: "primary",
    },
  },
  heroSocials: [
    { label: "Instagram", href: instagramUrl, icon: "instagram" },
    { label: "YouTube", href: youtubeUrl, icon: "youtube" },
    { label: "Spotify", href: spotifyUrl, icon: "spotify" },
  ],
  heroVariants: {
    impact: {
      eyebrow: "DJ officiel de Kalash • Martinique",
      title: "DJ",
      accent: "KILLERZ",
      description:
        "Showman au style éclectique, DJ KillerZ connecte tous les publics, de la Martinique à l'Accor Arena, avec joie, amour et bonnes vibrations.",
      layout: "impact",
      image: {
        src: heroImage,
        alt: "Portrait de DJ KillerZ, lunettes teintées et chaînes",
        badge: "DJ KillerZ",
        caption: "Martinique · Paris · international",
        position: heroPosition,
      },
      ctas: [
        { label: "Booker", href: "#contact", variant: "primary" },
        { label: "Voir vidéos", href: "#videos", variant: "secondary" },
      ],
      stats: [
        { value: "23 000", label: "Stade Pierre-Aliker" },
        { value: "2016", label: "DJ officiel de Kalash" },
        { value: "5M+", label: "Vues « Comptine Pour Pussy »" },
        { value: "17", label: "Pays et territoires" },
      ],
      proofline: "Olympia · Accor Arena · Yardland Festival 2026",
    },
    interactive: {
      eyebrow: "Showman • Caraïbes • Scène internationale",
      title: "DJ",
      accent: "KILLERZ",
      description:
        "Deux Vincennes, un festival Golden Karibbean, le Full Joy Tour 2025 et un show signé pour la main stage du Yardland Festival.",
      layout: "interactive",
      image: {
        src: heroImage,
        alt: "DJ KillerZ en portrait",
        badge: "DJ KillerZ",
        caption: "DJ sets · shows · production",
        position: heroPosition,
      },
      ctas: [
        { label: "Galerie", href: "#gallery", variant: "primary" },
        { label: "Spotify", href: "#spotify", variant: "secondary" },
      ],
      stats: [
        { value: "2009", label: "Incontournable aux Antilles" },
        { value: "2×", label: "Meilleur DJ martiniquais" },
        { value: "2 000+", label: "Golden Karibbean" },
        { value: "KALASH", label: "Full Joy Tour 2025" },
      ],
      proofline: "Martinique · Paris · Londres · New York · Budapest",
    },
    showcase: {
      eyebrow: "Tueur de mauvaises vibes",
      title: "DJ",
      accent: "KILLERZ",
      description:
        "L'un des DJ antillais les plus influents de sa génération, entre dancehall, afro, rap et musiques caribéennes.",
      layout: "showcase",
      image: {
        src: heroImage,
        alt: "DJ KillerZ visuel presse",
        badge: "DJ KillerZ",
        caption: "Faire rayonner la Martinique",
        position: heroPosition,
      },
      ctas: [
        { label: "Contact", href: "#contact", variant: "primary" },
        { label: "Voir photos", href: "#gallery", variant: "secondary" },
      ],
      stats: [
        { value: "KALASH", label: "DJ officiel" },
        { value: "BERCY", label: "Accor Arena" },
        { value: "OLYMPIA", label: "Paris" },
        { value: "YARDLAND", label: "Main stage 2026" },
      ],
      proofline: "Une signature caribéenne sur les plus grandes scènes.",
    },
  },
  about: {
    eyebrow: "À propos",
    title: "Showman caribéen,\nscènes internationales.",
    signatureLabel: "Signature",
    signatureQuote:
      "Joie, amour et bonnes vibrations : une philosophie qui lui vaut son surnom de « tueur de mauvaises vibes ».",
    supportingText:
      "Faire rayonner la Martinique et partager sa passion pour la musique avec le monde entier.",
    tags: ["Dancehall", "Afro", "Rap FR", "Caribbean", "Open format"],
    paragraphs: [
      "Originaire de la Martinique, DJ KillerZ est aujourd'hui reconnu comme l'un des DJ antillais les plus influents de sa génération. Véritable showman au style éclectique, il se distingue par sa capacité à connecter instantanément avec tous les publics, en diffusant joie, amour et bonnes vibrations à travers ses sets.",
      "Officiellement lancé dans le deejaying au milieu des années 2000, il devient incontournable dès 2009 dans les Antilles, avant de s'exporter en Europe et à l'international. De Paris à Budapest, en passant par Londres, Montréal, New York, Barcelone ou Saint-Barthélemy, il enchaîne les scènes, clubs, festivals et événements prestigieux.",
      "DJ officiel de Kalash depuis 2016, il l'accompagne sur ses plus grandes scènes : l'Olympia en 2017, Bercy en 2022, le Stade Pierre-Aliker de Dillon en août 2024 devant plus de 23 000 personnes, puis le Full Joy Tour 2025, avec notamment l'Accor Arena, l'Olympia et La Cigale. Le 12 juin 2026, il assure la première partie du concert de Kalash à Paris et participe à la conception du show : co-écriture, création de la tracklist, réalisation de l'introduction, des remixes et des versions inédites.",
      "Côté production, il marque aussi les esprits avec « Comptine Pour Pussy », en featuring avec Kalash : plus de 5 millions de vues sur YouTube et 2 millions d'écoutes sur Spotify.",
      "Élu Meilleur DJ martiniquais deux années consécutives, il a construit une carrière fondée sur le travail, la passion et le renouvellement. Après deux shows solo à l'Hippodrome de Vincennes en 2022 et 2023 et son festival Golden Karibbean (plus de 2 000 personnes), il imagine en 2026 le « Caribbean World Show by DJ KillerZ » pour le Yardland Festival. Produit par Live Nation, ce show présenté sur la main stage est entièrement pensé par DJ KillerZ, du storytelling au choix des artistes invités.",
    ],
  },
  clubs: {
    eyebrow: "Scènes",
    title: "Des Antilles\naux plus grandes salles.",
    description:
      "Concerts, tournées, festivals et premières parties : un parcours construit aux côtés de Kalash et sur les scènes internationales.",
    regions: [
      {
        title: "Scènes clés",
        icon: "map-pin",
        items: [
          "Stade Pierre-Aliker, Dillon (Martinique) — 23 000 personnes, avec Kalash, août 2024",
          "Yardland Festival 2026, main stage — Caribbean World Show by DJ KillerZ, produit par Live Nation",
          "Accor Arena (Bercy) — première partie de Vybz Kartel, juillet 2025",
          "Kalash en concert, Paris, 12 juin 2026 — première partie, co-écriture et tracklist du show",
          "Full Joy Tour 2025 — Accor Arena, Olympia, La Cigale",
          "Olympia 2017 · Bercy 2022 avec Kalash",
          "Hippodrome de Vincennes — shows solo 2022 et 2023",
          "Golden Karibbean — festival, plus de 2 000 personnes",
        ],
      },
      {
        title: "Festivals été 2025",
        icon: "globe",
        items: [
          "Afro Dom Festival — Paris",
          "Baccha Festival — Martinique",
          "Solidays — Paris",
          "Printemps de Bourges",
          "Les Déferlantes — Le Barcarès",
          "Eurockéennes — Belfort",
          "Dour Festival — Belgique",
          "Hypnotize Festival — Lyon",
          "Marsatac — Marseille",
          "Paléo Festival — Suisse",
        ],
      },
      {
        title: "Collaborations artistes",
        icon: "globe",
        items: [
          "Vybz Kartel",
          "Gims",
          "Dadju",
          "Koffee",
          "Franglish",
          "Shenseea",
          "Gazo",
          "Konshens",
          "La Fouine",
          "Ne-Yo",
          "Aidonia",
          "Macka Diamond",
          "Aya Nakamura",
          "Niska",
        ],
      },
      {
        title: "Pays et territoires",
        icon: "globe",
        items: [
          "France",
          "Espagne",
          "Suisse",
          "Hongrie",
          "États-Unis",
          "Belgique",
          "Canada",
          "Angleterre",
          "Allemagne",
          "Portugal",
          "Martinique",
          "Guadeloupe",
          "Guyane",
          "Sainte-Lucie",
          "Saint-Martin",
          "Saint-Barthélemy",
          "Barbade",
        ],
      },
    ],
  },
  sound: {
    eyebrow: "Spotify",
    title: "Écouter\nDJ KillerZ.",
    paragraphs: [
      "Retrouvez ses sorties et collaborations sur Spotify, dont « Comptine Pour Pussy » avec Kalash.",
    ],
    cta: {
      label: "Écouter sur Spotify",
      href: spotifyUrl,
      external: true,
    },
    embedTitle: "DJ KillerZ sur Spotify",
    embedUrl: spotifyEmbedUrl,
  },
  videos: {
    eyebrow: "Vidéos",
    title: "DJ KillerZ\nen images.",
    description:
      "« Comptine Pour Pussy » avec Kalash : plus de 5 millions de vues sur YouTube.",
    items: [
      {
        id: "dj-killerz-youtube-1",
        title: "Comptine Pour Pussy — DJ KillerZ, Kalash",
        description: "Le titre viral de DJ KillerZ et Kalash.",
        source: "youtube",
        embedUrl: "https://www.youtube.com/embed/kVLzv8MrQ5s",
      },
    ],
    cta: {
      label: "Chaîne YouTube",
      href: youtubeUrl,
      external: true,
    },
  },
  spotify: {
    eyebrow: "Spotify",
    title: "Sorties & collaborations.",
    description:
      "53 000 auditeurs mensuels et plus de 2 millions d'écoutes sur « Comptine Pour Pussy ».",
    useThemeColor: true,
    playlists: [
      {
        id: "dj-killerz-spotify",
        title: "DJ KillerZ sur Spotify",
        embedUrl: spotifyEmbedUrl,
      },
    ],
    badgeLabel: "DJ KillerZ",
  },
  brands: {
    eyebrow: "",
    title: "",
    intro: "",
    supportingText: "",
    categories: [],
    itemLabel: "",
    items: [],
    fit: {
      eyebrow: "",
      title: "",
      points: [],
    },
  },
  mediaKit: {
    eyebrow: "Kit presse",
    title: "Photos et press kit.",
    description:
      "Le kit photos presse de DJ KillerZ et son press kit complet sont disponibles en téléchargement.",
    cta: {
      label: "Kit photos presse",
      href: photoKitUrl,
      variant: "primary",
      external: true,
    },
    items: [
      { icon: "photo", label: "Kit photos presse", detail: "Google Drive" },
      { icon: "document", label: "Press kit PDF", detail: "FR" },
    ],
  },
  rider: {
    eyebrow: "Rider",
    title: "Setup\ntechnique.",
    groups: [
      {
        title: "Platines",
        items: ["2 × Pioneer CDJ-2000 ou 2 × Pioneer CDJ-3000"],
      },
      {
        title: "Table de mixage",
        items: ["Pioneer DJM-S9 ou DJM-S11", "ou Pioneer REV7"],
      },
      {
        title: "Autres",
        items: ["1 support d'ordinateur", "1 micro HF"],
      },
      {
        title: "Transport",
        items: [
          "International : 2 billets avion aller-retour depuis Paris (CDG ou ORY), classe économique premium ou business si vol > 4 h",
          "France : 1 ou 2 billets SNCF 1re classe depuis Paris, modifiables et remboursables",
          "Chauffeur aller-retour aéroport / gare et lieu de la prestation",
          "Informations de transport (horaires, e-billets) 5 jours avant le show",
        ],
      },
      {
        title: "Hébergement",
        items: [
          "1 chambre double, hôtel 3 ou 4 étoiles minimum, à proximité du lieu",
          "Wi-Fi gratuit, salle de sport, petit-déjeuner inclus",
          "Check-out tardif si départ le lendemain matin",
        ],
      },
      {
        title: "Hospitalité",
        items: [
          "1 pack d'eau minérale (plate et gazeuse)",
          "1 assortiment de fruits frais",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Booking & demandes.",
    description:
      "Pour un concert, un festival, une soirée club ou un événement privé : écrivez à l'équipe de booking de DJ KillerZ.",
    methods: [
      {
        label: "Email",
        value: bookingEmail,
        href: `mailto:${bookingEmail}`,
        icon: "mail",
      },
      {
        label: "Instagram",
        value: "@djkillerz972",
        href: instagramUrl,
        icon: "instagram",
        external: true,
      },
      {
        label: "YouTube",
        value: "@djkillerz972",
        href: youtubeUrl,
        icon: "youtube",
        external: true,
      },
    ],
  },
  gallery: {
    eyebrow: "Galerie",
    title: "Portraits & univers visuel.",
    description: "Une sélection de portraits presse de DJ KillerZ.",
    homepageTitle: "Univers visuel",
    homepageCtaLabel: "Ouvrir la galerie",
    images: [
      { src: g(21), alt: "DJ KillerZ, chemise noire, mains au col", size: "md:col-span-2", position: "center 18%" },
      { src: g(12), alt: "DJ KillerZ en t-shirt noir, regard vers le haut", position: "center 15%" },
      { src: g(16), alt: "DJ KillerZ en doudoune rouge, bras croisés", position: "center 20%" },
      { src: g(17), alt: "DJ KillerZ en club, lumière rouge", position: "center 20%" },
      { src: g(18), alt: "DJ KillerZ face caméra, ambiance club", size: "md:col-span-2", position: "center 25%" },
      { src: g(20), alt: "DJ KillerZ en veste noire et collier", position: "center 15%" },
      { src: g(1), alt: "DJ KillerZ en veste à capuche", position: "center 20%" },
      { src: g(2), alt: "DJ KillerZ en parka verte", position: "center 20%" },
      { src: g(3), alt: "DJ KillerZ, portrait presse" },
      { src: g(4), alt: "DJ KillerZ, portrait presse" },
      { src: g(5), alt: "DJ KillerZ, portrait presse" },
      { src: g(6), alt: "DJ KillerZ, portrait presse" },
      { src: g(7), alt: "DJ KillerZ, portrait presse" },
      { src: g(8), alt: "DJ KillerZ, portrait presse" },
      { src: g(9), alt: "DJ KillerZ, portrait presse" },
      { src: g(10), alt: "DJ KillerZ en noir et blanc, casquette" },
      { src: g(11), alt: "DJ KillerZ, portrait presse" },
      { src: g(13), alt: "DJ KillerZ, portrait presse" },
      { src: g(14), alt: "DJ KillerZ, portrait presse" },
      { src: g(15), alt: "DJ KillerZ, portrait presse" },
      { src: g(19), alt: "DJ KillerZ, portrait presse" },
    ],
  },
};

export const djKillerzClient: ClientConfig = {
  slug: "dj-killerz",
  domain: "dj-killerz.presskit.fr",
  vercelSubdomain: "dj-killerz.vercel.app",
  name: "DJ KillerZ",
  tagline: "DJ / Producteur • Martinique & international",
  city: "Fort-de-France",
  country: "Martinique",
  category: "DJ / producteur / showman caribéen",
  description: djKillerzPressKit.metadata.description,
  longBio: djKillerzPressKit.about.paragraphs.join(" "),
  heroImage,
  gallery: djKillerzPressKit.gallery.images,
  socials: {
    instagram: instagramUrl,
    spotify: spotifyUrl,
  },
  contact: {
    email: bookingEmail,
    country: "Martinique",
  },
  services: [
    {
      title: "Concerts & premières parties",
      description:
        "DJ officiel de Kalash : Olympia, Bercy, Stade Pierre-Aliker, Full Joy Tour.",
    },
    {
      title: "Festivals & shows",
      description:
        "Sets festival, shows écrits sur mesure comme le Caribbean World Show du Yardland Festival.",
    },
    {
      title: "Clubs & événements",
      description:
        "Sets éclectiques dancehall, afro, rap et musiques caribéennes pour tous les publics.",
    },
  ],
  testimonials: [],
  bookingEmail,
  seo: {
    title: djKillerzPressKit.metadata.title,
    description: djKillerzPressKit.metadata.description,
    keywords: [
      "DJ KillerZ",
      "DJ Martinique",
      "DJ Kalash",
      "DJ antillais",
      "Comptine Pour Pussy",
      "Caribbean World Show",
      "Golden Karibbean",
      "booking DJ",
      "press kit DJ",
    ],
    ogImage: "/opengraph-image",
  },
  defaultTheme: "gold",
  defaultVariant: "impact",
  pressKit: djKillerzPressKit,
};
