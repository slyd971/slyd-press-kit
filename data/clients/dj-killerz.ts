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

const pressKitPdfUrl = "/dj-killerz/presskit/DJ_KillerZ_Press_Kit_FR.pdf";
const pressKitPdfUrlEn = "/dj-killerz/presskit/DJ_KillerZ_Press_Kit_EN.pdf";

const g = (n: number) => `/dj-killerz/gallery/killerz-${String(n).padStart(2, "0")}.jpeg`;

const killerzArtists = [
  { name: "Vybz Kartel", image: "/dj-killerz/artists/vybz-kartel.jpg" },
  { name: "Gims", image: "/dj-killerz/artists/gims.jpg" },
  { name: "Dadju", image: "/dj-killerz/artists/dadju.jpg" },
  { name: "Koffee", image: "/dj-killerz/artists/koffee.jpg" },
  { name: "Franglish", image: "/dj-killerz/artists/franglish.jpg" },
  { name: "Shenseea", image: "/dj-killerz/artists/shenseea.jpg" },
  { name: "Gazo", image: "/dj-killerz/artists/gazo.jpg" },
  { name: "Konshens", image: "/dj-killerz/artists/konshens.jpg" },
  { name: "La Fouine", image: "/dj-killerz/artists/la-fouine.jpg", zoom: 1.45, position: "center top" },
  { name: "Ne-Yo", image: "/dj-killerz/artists/ne-yo.jpg" },
  { name: "Aidonia", image: "/dj-killerz/artists/aidonia.jpg" },
  { name: "Macka Diamond", image: "/dj-killerz/artists/macka-diamond.jpg" },
  { name: "Aya Nakamura", image: "/dj-killerz/artists/aya-nakamura.jpg" },
  { name: "Niska", image: "/dj-killerz/artists/niska.jpg" },
];

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
    stageLabel: "International DJ & Producer",
    showStageLabelOnMobile: true,
    logo: {
      src: "/dj-killerz/logo/dj-killerz-logo-white.png",
      alt: "DJ KillerZ",
      scale: 100,
    },
  },
  navigation: {
    items: [
      { label: "À propos", href: "#about" },
      { label: "Scènes", href: "#clubs" },
      { label: "Tournée", href: "#tour" },
      { label: "Galerie", href: "#gallery" },
      { label: "Vidéos", href: "#youtube" },
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
      eyebrow: "",
      title: "KILLERZ",
      accent: "International DJ & Producer",
      description: "",
      layout: "showcase",
      fullScreen: true,
      lightBackdrop: "#d3dadc",
      animateStats: true,
      hideDesktopRightFade: true,
      image: {
        src: heroImage,
        alt: "Portrait de DJ KillerZ, lunettes teintées et chaînes",
        badge: "DJ KillerZ",
        caption: "Martinique · Paris · international",
        position: heroPosition,
        shiftX: "14%",
      },
      ctas: [
        { label: "Booker", href: "#contact", variant: "primary" },
        { label: "Voir vidéos", href: "#youtube", variant: "secondary" },
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
      eyebrow: "",
      title: "KILLERZ",
      accent: "International DJ & Producer",
      description: "",
      layout: "interactive",
      image: {
        src: heroImage,
        alt: "DJ KillerZ en portrait",
        badge: "DJ KillerZ",
        caption: "DJ sets · shows · production",
        position: heroPosition,
        shiftX: "14%",
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
      eyebrow: "",
      title: "KILLERZ",
      accent: "International DJ & Producer",
      description: "",
      layout: "showcase",
      fullScreen: true,
      lightBackdrop: "#d3dadc",
      animateStats: true,
      hideDesktopRightFade: true,
      image: {
        src: heroImage,
        alt: "DJ KillerZ visuel presse",
        badge: "DJ KillerZ",
        caption: "Faire rayonner la Martinique",
        position: heroPosition,
        shiftX: "14%",
      },
      ctas: [
        { label: "Contact", href: "#contact", variant: "primary" },
        { label: "Voir photos", href: "#gallery", variant: "secondary" },
      ],
      stats: [
        { value: "23 000", label: "Stade Pierre-Aliker" },
        { value: "2016", label: "DJ officiel de Kalash" },
        { value: "5M+", label: "Vues « Comptine Pour Pussy »" },
        { value: "17", label: "Pays et territoires" },
      ],
      proofline: "Une signature caribéenne sur les plus grandes scènes.",
    },
  },
  about: {
    eyebrow: "À propos",
    title: "Showman caribéen,\ninternational performer",
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
    image: {
      src: g(14),
      alt: "DJ KillerZ en bob léopard et veste à bandes sur fond blanc",
      position: "center 38%",
      mobilePosition: "center 25%",
    },
    regions: [
      {
        title: "Scènes clés",
        icon: "map-pin",
        items: [
          "Stade Pierre-Aliker (Dillon)",
          "Yardland Festival (main stage)",
          "Accor Arena (Bercy)",
          "Olympia",
          "La Cigale",
          "Hippodrome de Vincennes",
          "Golden Karibbean",
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
        title: "Pays et territoires",
        icon: "globe",
        display: "flags",
        flagsPath: "/dj-killerz/flags",
        items: [
          "🇫🇷 France",
          "🇪🇸 Espagne",
          "🇨🇭 Suisse",
          "🇭🇺 Hongrie",
          "🇺🇸 États-Unis",
          "🇧🇪 Belgique",
          "🇨🇦 Canada",
          "🇬🇧 Angleterre",
          "🇩🇪 Allemagne",
          "🇵🇹 Portugal",
          "🇲🇶 Martinique",
          "🇬🇵 Guadeloupe",
          "🇬🇫 Guyane",
          "🇱🇨 Sainte-Lucie",
          "🇲🇫 Saint-Martin",
          "🇧🇱 Saint-Barthélemy",
          "🇧🇧 Barbade",
        ],
      },
    ],
  },
  tour: {
    eyebrow: "Tournée",
    title: "Tournée & scènes clés",
    items: [
      {
        title: "Stade Pierre-Aliker",
        date: "14 août 2024",
        venue: "Dillon · Martinique",
        href: "https://www.instagram.com/p/C_LRkG_uPGJ/",
        images: [{ src: "/dj-killerz/tour/kalash-dillon-2024.jpg", alt: "Affiche du concert de Kalash au Stade Pierre-Aliker, 14 août 2024" }],
        groups: [{ points: ["23 000 personnes", "Performance aux côtés de Kalash"] }],
      },
      {
        title: "Yardland Festival 2026",
        date: "Samedi 4 juillet 2026",
        venue: "Main stage · Caribbean World Show by DJ KillerZ · Paris",
        href: "https://www.instagram.com/p/DaY6-NpiKZq/?img_index=1",
        images: [{ src: "/dj-killerz/tour/yardland-lineup-2026.jpg", alt: "Affiche du Caribbean World Show by DJ KillerZ, Yardland Festival 2026" }],
        groups: [
          {
            points: [
              "Création et direction artistique du show, produit par Live Nation",
              "Conception du storytelling",
              "Sélection des artistes invités",
            ],
          },
        ],
      },
      {
        title: "Full Joy Tour 2025",
        date: "Mars 2025",
        venue: "Kalash · Paris",
        href: "https://www.instagram.com/p/DHZkPToI2i7/",
        images: [{ src: "/dj-killerz/tour/kalash-full-joy-tour-2025.jpg", alt: "Affiche du Full Joy Tour de Kalash, Accor Arena, Olympia et La Cigale" }],
        groups: [
          {
            title: "Accor Arena (Paris) · 15 mars",
            points: ["Première partie et performance aux côtés de Kalash"],
          },
          {
            title: "Olympia (Paris) · 20 mars",
            points: ["Première partie et performance avec Kalash"],
          },
          {
            title: "La Cigale (Paris) · 22 mars",
            points: ["Écriture du show", "Première partie", "Show complet solo sans musicien"],
          },
        ],
      },
      {
        title: "Kalash · Paris La Défense Arena",
        date: "12 juin 2026",
        href: "https://www.instagram.com/p/DZaWvPfFCF9/",
        images: [{ src: "/dj-killerz/tour/kalash-la-defense-arena-2026.jpg", alt: "Affiche du concert de Kalash à Paris La Défense Arena, 12 juin 2026" }],
        groups: [
          {
            points: [
              "Première partie du concert de Kalash",
              "Co-écriture du show",
              "Création de la tracklist",
              "Réalisation de l'introduction, des remixes et des versions inédites du concert",
            ],
          },
        ],
      },
      {
        title: "Vybz Kartel · The Worl' Boss Tour",
        date: "10 juillet 2025",
        venue: "Accor Arena · Paris",
        href: "https://www.instagram.com/p/DL-DHSouvZa/",
        images: [{ src: "/dj-killerz/tour/vybz-kartel-accor-arena-2025.jpg", alt: "Affiche du concert de Vybz Kartel à l'Accor Arena, 10 juillet 2025" }],
        groups: [{ points: ["Première partie du concert de Vybz Kartel"] }],
      },
    ],
  },
  collaborations: {
    eyebrow: "Collaborations",
    title: "Collaborations artistes",
    artists: killerzArtists,
    image: {
      src: g(4),
      alt: "DJ KillerZ assis sur un canapé orange, parka verte",
      position: "center 60%",
    },
  },
  sound: {
    eyebrow: "",
    title: "",
    paragraphs: [],
    cta: {
      label: "",
      href: "",
    },
    embedTitle: "",
    embedUrl: "",
  },
  videos: {
    eyebrow: "Vidéos",
    title: "DJ KillerZ\nen images.",
    description: "",
    items: [],
  },
  youtube: {
    mobileSlider: true,
    eyebrow: "YouTube",
    title: "DJ KILLERZ en vidéo.",
    description:
      "Une interview récente et deux aftermovies des concerts de Kalash.",
    items: [
      {
        id: "dj-killerz-youtube-1",
        source: "youtube",
        title: "Interview — DJ KillerZ",
        description: "",
        embedUrl: "https://www.youtube.com/embed/kVLzv8MrQ5s",
      },
      {
        id: "dj-killerz-youtube-2",
        source: "youtube",
        title: "Aftermovie — Kalash, Stade Pierre-Aliker 2024",
        description: "",
        embedUrl: "https://www.youtube.com/embed/w2KjGLSmWOk",
      },
      {
        id: "dj-killerz-youtube-3",
        source: "youtube",
        title: "Aftermovie — La Cigale, Paris 2025",
        description: "",
        embedUrl: "https://www.youtube.com/embed/IAZy2VMSJwk",
      },
    ],
    cta: {
      label: "Chaîne YouTube",
      href: youtubeUrl,
      external: true,
      variant: "secondary",
    },
  },
  spotify: {
    eyebrow: "Spotify",
    title: "Sorties & collaborations.",
    description:
      "53 000 auditeurs mensuels et plus de 2 millions d'écoutes sur « Comptine Pour Pussy ».",
    playlists: [
      {
        id: "dj-killerz-spotify",
        title: "DJ KillerZ sur Spotify",
        embedUrl: spotifyEmbedUrl,
        height: 520,
      },
    ],
    badgeLabel: "DJ KillerZ",
    sideImage: {
      src: g(10),
      alt: "DJ KillerZ en bob léopard, veste à bandes",
      position: "center 20%",
    },
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
  rider: {
    mobileAccordion: true,
    eyebrow: "Rider",
    title: "Setup\ntechnique & VHR",
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
    image: {
      src: g(20),
      alt: "DJ KillerZ, lunettes noires, mains au col",
      position: "center 15%",
    },
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
      { src: g(16), alt: "DJ KillerZ en doudoune rouge, bras croisés", position: "center 2%" },
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
  footer: {
    availabilityText:
      "Disponible pour concerts, festivals, soirées club et événements privés.",
    pressKitPdf: {
      label: "Télécharger le press kit (PDF)",
      href: pressKitPdfUrl,
    },
  },
};

const enGalleryAlts: Record<number, string> = {
  21: "DJ KillerZ, black shirt, hands at the collar",
  12: "DJ KillerZ in a black T-shirt, looking up",
  16: "DJ KillerZ in a red puffer vest, arms crossed",
  17: "DJ KillerZ in a club, red light",
  18: "DJ KillerZ facing the camera, club atmosphere",
  20: "DJ KillerZ in a black jacket and chain",
  1: "DJ KillerZ in a hooded jacket",
  2: "DJ KillerZ in a green parka",
  10: "DJ KillerZ in a leopard bucket hat, striped jacket",
};

const enHeroStats: PressKitConfig["heroVariants"]["impact"]["stats"] = [
  { value: "23 000", label: "Stade Pierre-Aliker" },
  { value: "2016", label: "Official DJ of Kalash" },
  { value: "5M+", label: "Views on “Comptine Pour Pussy”" },
  { value: "17", label: "Countries & territories" },
];

const djKillerzPressKitEn: PressKitConfig = {
  ...djKillerzPressKit,
  metadata: {
    title: "DJ KillerZ | Official press kit",
    description:
      "DJ KillerZ, Martinican DJ and Kalash's official DJ since 2016: Olympia, Bercy, Stade Pierre-Aliker in front of 23,000 people, Full Joy Tour 2025, Yardland Festival 2026. Booking.",
  },
  ui: {
    openMenuLabel: "Open menu",
    closeMenuLabel: "Close menu",
    galleryViewLabel: "View",
    galleryDownloadLabel: "Download",
    galleryCloseLabel: "Close gallery",
    galleryPreviousLabel: "Previous image",
    galleryNextLabel: "Next image",
  },
  navigation: {
    items: [
      { label: "About", href: "#about" },
      { label: "Stages", href: "#clubs" },
      { label: "Tour", href: "#tour" },
      { label: "Gallery", href: "#gallery" },
      { label: "Videos", href: "#youtube" },
      { label: "Spotify", href: "#spotify" },
      { label: "Rider", href: "#rider" },
    ],
    cta: { label: "Book", href: "#contact", variant: "primary" },
  },
  heroVariants: {
    impact: {
      ...djKillerzPressKit.heroVariants.impact,
      image: {
        ...djKillerzPressKit.heroVariants.impact.image,
        alt: "Portrait of DJ KillerZ, tinted glasses and chains",
        caption: "Martinique · Paris · international",
      },
      ctas: [
        { label: "Book", href: "#contact", variant: "primary" },
        { label: "Watch videos", href: "#youtube", variant: "secondary" },
      ],
      stats: enHeroStats,
      proofline: "Olympia · Accor Arena · Yardland Festival 2026",
    },
    interactive: {
      ...djKillerzPressKit.heroVariants.interactive,
      image: {
        ...djKillerzPressKit.heroVariants.interactive.image,
        alt: "DJ KillerZ portrait",
        caption: "DJ sets · shows · production",
      },
      ctas: [
        { label: "Gallery", href: "#gallery", variant: "primary" },
        { label: "Spotify", href: "#spotify", variant: "secondary" },
      ],
      stats: [
        { value: "2009", label: "A must in the Antilles" },
        { value: "2×", label: "Best Martinican DJ" },
        { value: "2 000+", label: "Golden Karibbean" },
        { value: "KALASH", label: "Full Joy Tour 2025" },
      ],
      proofline: "Martinique · Paris · London · New York · Budapest",
    },
    showcase: {
      ...djKillerzPressKit.heroVariants.showcase,
      image: {
        ...djKillerzPressKit.heroVariants.showcase.image,
        alt: "DJ KillerZ press photo",
        caption: "Making Martinique shine",
      },
      ctas: [
        { label: "Contact", href: "#contact", variant: "primary" },
        { label: "See photos", href: "#gallery", variant: "secondary" },
      ],
      stats: enHeroStats,
      proofline: "A Caribbean signature on the biggest stages.",
    },
  },
  about: {
    ...djKillerzPressKit.about,
    eyebrow: "About",
    title: "Caribbean showman,\ninternational performer",
    signatureQuote:
      "Joy, love and good vibes: a philosophy that earned him the nickname “bad vibes killer”.",
    supportingText:
      "Making Martinique shine and sharing his passion for music with the whole world.",
    paragraphs: [
      "Originally from Martinique, DJ KillerZ is now recognised as one of the most influential Antillean DJs of his generation. A true showman with an eclectic style, he stands out for his ability to connect instantly with every audience, spreading joy, love and good vibes through his sets.",
      "Officially launched into deejaying in the mid-2000s, he became a must in the Antilles from 2009, before taking his sound to Europe and abroad. From Paris to Budapest, via London, Montreal, New York, Barcelona or Saint-Barthélemy, he plays one prestigious stage, club, festival and event after another.",
      "Kalash's official DJ since 2016, he joins him on his biggest stages: the Olympia in 2017, Bercy in 2022, Stade Pierre-Aliker in Dillon in August 2024 in front of more than 23,000 people, then the Full Joy Tour 2025, including the Accor Arena, the Olympia and La Cigale. On 12 June 2026 he opens Kalash's concert in Paris and takes part in designing the show: co-writing, creating the tracklist, producing the intro, the remixes and the unreleased versions.",
      "As a producer, he also made his mark with “Comptine Pour Pussy”, featuring Kalash: more than 5 million views on YouTube and 2 million streams on Spotify.",
      "Voted Best Martinican DJ two years in a row, he has built a career on hard work, passion and reinvention. After two solo shows at the Hippodrome de Vincennes in 2022 and 2023 and his Golden Karibbean festival (more than 2,000 people), he dreams up the “Caribbean World Show by DJ KillerZ” for the Yardland Festival in 2026. Produced by Live Nation, this main-stage show is entirely conceived by DJ KillerZ, from the storytelling to the choice of guest artists.",
    ],
  },
  clubs: {
    eyebrow: "Stages",
    title: "From the Antilles\nto the biggest venues.",
    description:
      "Concerts, tours, festivals and opening sets: a career built alongside Kalash and on international stages.",
    image: {
      src: g(14),
      alt: "DJ KillerZ in a leopard bucket hat and striped jacket against a white background",
      position: "center 38%",
      mobilePosition: "center 25%",
    },
    regions: [
      {
        title: "Key stages",
        icon: "map-pin",
        items: [
          "Stade Pierre-Aliker (Dillon)",
          "Yardland Festival (main stage)",
          "Accor Arena (Bercy)",
          "Olympia",
          "La Cigale",
          "Hippodrome de Vincennes",
          "Golden Karibbean",
        ],
      },
      {
        title: "Summer 2025 festivals",
        icon: "globe",
        items: [
          "Afro Dom Festival — Paris",
          "Baccha Festival — Martinique",
          "Solidays — Paris",
          "Printemps de Bourges",
          "Les Déferlantes — Le Barcarès",
          "Eurockéennes — Belfort",
          "Dour Festival — Belgium",
          "Hypnotize Festival — Lyon",
          "Marsatac — Marseille",
          "Paléo Festival — Switzerland",
        ],
      },
      {
        title: "Countries & territories",
        icon: "globe",
        display: "flags",
        flagsPath: "/dj-killerz/flags",
        items: [
          "🇫🇷 France",
          "🇪🇸 Spain",
          "🇨🇭 Switzerland",
          "🇭🇺 Hungary",
          "🇺🇸 United States",
          "🇧🇪 Belgium",
          "🇨🇦 Canada",
          "🇬🇧 England",
          "🇩🇪 Germany",
          "🇵🇹 Portugal",
          "🇲🇶 Martinique",
          "🇬🇵 Guadeloupe",
          "🇬🇫 French Guiana",
          "🇱🇨 Saint Lucia",
          "🇲🇫 Saint-Martin",
          "🇧🇱 Saint-Barthélemy",
          "🇧🇧 Barbados",
        ],
      },
    ],
  },
  tour: {
    eyebrow: "Tour",
    title: "Tour & key stages",
    linkLabel: "View the post",
    items: [
      {
        ...djKillerzPressKit.tour!.items[0],
        date: "14 August 2024",
        images: [{ ...djKillerzPressKit.tour!.items[0].images[0], alt: "Poster of Kalash's concert at Stade Pierre-Aliker, 14 August 2024" }],
        groups: [{ points: ["23,000 people", "Performance alongside Kalash"] }],
      },
      {
        ...djKillerzPressKit.tour!.items[1],
        date: "Saturday 4 July 2026",
        venue: "Main stage · Caribbean World Show by DJ KillerZ · Paris",
        images: [{ ...djKillerzPressKit.tour!.items[1].images[0], alt: "Poster of the Caribbean World Show by DJ KillerZ, Yardland Festival 2026" }],
        groups: [
          {
            points: [
              "Creation and artistic direction of the show, produced by Live Nation",
              "Storytelling design",
              "Selection of the guest artists",
            ],
          },
        ],
      },
      {
        ...djKillerzPressKit.tour!.items[2],
        date: "March 2025",
        images: [{ ...djKillerzPressKit.tour!.items[2].images[0], alt: "Poster of Kalash's Full Joy Tour, Accor Arena, Olympia and La Cigale" }],
        groups: [
          {
            title: "Accor Arena (Paris) · 15 March",
            points: ["Opening set and performance alongside Kalash"],
          },
          {
            title: "Olympia (Paris) · 20 March",
            points: ["Opening set and performance with Kalash"],
          },
          {
            title: "La Cigale (Paris) · 22 March",
            points: ["Show writing", "Opening set", "Full solo show without musicians"],
          },
        ],
      },
      {
        ...djKillerzPressKit.tour!.items[3],
        date: "12 June 2026",
        images: [{ ...djKillerzPressKit.tour!.items[3].images[0], alt: "Poster of Kalash's concert at Paris La Défense Arena, 12 June 2026" }],
        groups: [
          {
            points: [
              "Opening set of Kalash's concert",
              "Show co-writing",
              "Tracklist creation",
              "Production of the intro, remixes and unreleased versions of the concert",
            ],
          },
        ],
      },
      {
        ...djKillerzPressKit.tour!.items[4],
        date: "10 July 2025",
        images: [{ ...djKillerzPressKit.tour!.items[4].images[0], alt: "Poster of Vybz Kartel's concert at Accor Arena, 10 July 2025" }],
        groups: [{ points: ["Opening set of Vybz Kartel's concert"] }],
      },
    ],
  },
  collaborations: {
    eyebrow: "Collaborations",
    title: "Artist collaborations",
    artists: killerzArtists,
    image: {
      src: g(4),
      alt: "DJ KillerZ seated on an orange sofa, green parka",
      position: "center 60%",
    },
  },
  videos: {
    ...djKillerzPressKit.videos,
    eyebrow: "Videos",
    title: "DJ KillerZ\nin pictures.",
  },
  youtube: {
    ...djKillerzPressKit.youtube!,
    title: "DJ KILLERZ on video.",
    description: "A recent interview and two aftermovies of Kalash's concerts.",
    items: djKillerzPressKit.youtube!.items.map((item, index) => ({
      ...item,
      title: [
        "Interview — DJ KillerZ",
        "Aftermovie — Kalash, Stade Pierre-Aliker 2024",
        "Aftermovie — La Cigale, Paris 2025",
      ][index],
    })),
    cta: { ...djKillerzPressKit.youtube!.cta, label: "YouTube channel" },
  },
  spotify: {
    ...djKillerzPressKit.spotify,
    title: "Releases & collaborations.",
    description:
      "53,000 monthly listeners and more than 2 million streams on “Comptine Pour Pussy”.",
    playlists: [
      { ...djKillerzPressKit.spotify.playlists[0], title: "DJ KillerZ on Spotify" },
    ],
    sideImage: {
      ...djKillerzPressKit.spotify.sideImage!,
      alt: enGalleryAlts[10],
    },
  },
  rider: {
    mobileAccordion: true,
    eyebrow: "Rider",
    title: "Technical setup\n& hospitality",
    groups: [
      {
        title: "Decks",
        items: ["2 × Pioneer CDJ-2000 or 2 × Pioneer CDJ-3000"],
      },
      {
        title: "Mixer",
        items: ["Pioneer DJM-S9 or DJM-S11", "or Pioneer REV7"],
      },
      {
        title: "Other",
        items: ["1 laptop stand", "1 wireless microphone"],
      },
      {
        title: "Travel",
        items: [
          "International: 2 return plane tickets from Paris (CDG or ORY), premium economy or business class for flights over 4 h",
          "France: 1 or 2 first-class return train tickets from Paris, changeable and refundable",
          "Driver for round trips between the airport / station and the venue",
          "Full travel details (times, e-tickets) 5 days before the show",
        ],
      },
      {
        title: "Accommodation",
        items: [
          "1 double room, 3- or 4-star hotel minimum, close to the venue",
          "Free Wi-Fi, gym access, breakfast included",
          "Late check-out if leaving the next morning",
        ],
      },
      {
        title: "Hospitality",
        items: [
          "1 pack of mineral water (still and sparkling)",
          "1 assortment of fresh fruit",
        ],
      },
    ],
  },
  contact: {
    ...djKillerzPressKit.contact,
    eyebrow: "Contact",
    title: "Booking & enquiries.",
    description:
      "For a concert, a festival, a club night or a private event: get in touch with DJ KillerZ's booking team.",
    image: {
      ...djKillerzPressKit.contact.image!,
      alt: "DJ KillerZ, dark glasses, hands at the collar",
    },
  },
  gallery: {
    ...djKillerzPressKit.gallery,
    eyebrow: "Gallery",
    title: "Portraits & visual universe.",
    description: "A selection of DJ KillerZ press portraits.",
    homepageTitle: "Visual universe",
    homepageCtaLabel: "Open the gallery",
    images: djKillerzPressKit.gallery.images.map((image) => {
      const n = Number(image.src.match(/killerz-(\d+)\./)?.[1]);
      return { ...image, alt: enGalleryAlts[n] ?? "DJ KillerZ, press portrait" };
    }),
  },
  footer: {
    availabilityText:
      "Available for concerts, festivals, club nights and private events.",
    navigationLabel: "Navigation",
    socialLabel: "Socials",
    bookingLabel: "Booking",
    languageLabel: "Language",
    fullGalleryLabel: "Full gallery",
    allVideosLabel: "All videos",
    pressKitPdf: {
      label: "Download the press kit (PDF)",
      href: pressKitPdfUrlEn,
    },
  },
};

const djKillerzBaseClient = {
  domain: "djkillerz.presskit.fr",
  vercelSubdomain: "dj-killerz.vercel.app",
  name: "DJ KillerZ",
  tagline: "International DJ & Producer",
  city: "Fort-de-France",
  country: "Martinique",
  heroImage,
  socials: {
    instagram: instagramUrl,
    spotify: spotifyUrl,
  },
  contact: {
    email: bookingEmail,
    country: "Martinique",
  },
  testimonials: [],
  bookingEmail,
  defaultTheme: "monochrome",
  defaultVariant: "showcase",
} satisfies Partial<ClientConfig>;

const djKillerzKeywords = [
  "DJ KillerZ",
  "DJ Martinique",
  "DJ Kalash",
  "DJ antillais",
  "Comptine Pour Pussy",
  "Caribbean World Show",
  "Golden Karibbean",
  "booking DJ",
  "press kit DJ",
];

export const djKillerzEnClient: ClientConfig = {
  ...djKillerzBaseClient,
  slug: "dj-killerz-en",
  category: "DJ / producer / Caribbean showman",
  description: djKillerzPressKitEn.metadata.description,
  longBio: djKillerzPressKitEn.about.paragraphs.join(" "),
  gallery: djKillerzPressKitEn.gallery.images,
  services: [
    {
      title: "Concerts & opening sets",
      description:
        "Kalash's official DJ: Olympia, Bercy, Stade Pierre-Aliker, Full Joy Tour.",
    },
    {
      title: "Festivals & shows",
      description:
        "Festival sets and tailor-made shows such as the Yardland Festival's Caribbean World Show.",
    },
    {
      title: "Clubs & events",
      description:
        "Eclectic dancehall, afro, rap and Caribbean sets for every audience.",
    },
  ],
  seo: {
    title: djKillerzPressKitEn.metadata.title,
    description: djKillerzPressKitEn.metadata.description,
    keywords: djKillerzKeywords,
    ogImage: "/dj-killerz/seo/og-djkillerz-2.jpg",
    favicon: "/dj-killerz/favicon/favicon.ico",
  },
  pressKit: djKillerzPressKitEn,
  hideFromSwitcher: true,
  languageSwitch: [
    { label: "FR", href: "/?client=dj-killerz", clientSlug: "dj-killerz" },
    { label: "EN", href: "/en?client=dj-killerz", active: true },
  ],
};

export const djKillerzClient: ClientConfig = {
  ...djKillerzBaseClient,
  slug: "dj-killerz",
  category: "DJ / producteur / showman caribéen",
  description: djKillerzPressKit.metadata.description,
  longBio: djKillerzPressKit.about.paragraphs.join(" "),
  gallery: djKillerzPressKit.gallery.images,
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
  seo: {
    title: djKillerzPressKit.metadata.title,
    description: djKillerzPressKit.metadata.description,
    keywords: djKillerzKeywords,
    ogImage: "/dj-killerz/seo/og-djkillerz-2.jpg",
    favicon: "/dj-killerz/favicon/favicon.ico",
  },
  pressKit: djKillerzPressKit,
  languageSwitch: [
    { label: "FR", href: "/?client=dj-killerz", active: true },
    { label: "EN", href: "/en?client=dj-killerz", clientSlug: "dj-killerz-en" },
  ],
};
