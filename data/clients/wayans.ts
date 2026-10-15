import type { PressKitConfig } from "@/data/config";
import type { ClientConfig } from "@/data/clients/types";

const soundCloudUrl = "https://on.soundcloud.com/SF5EzbfoILUMNoD6DP";
const soundCloudEmbedUrl =
  "https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F1690531214&color=%23c8a448&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false";
const instagramUrl = "https://www.instagram.com/wayansboy";
const bookingEmail = "wayans.pro@gmail.com";
const whatsappUrl = "https://wa.me/33633863568";

const heroImage = "/wayans/photos/hero-pic-retouche.jpeg";
const heroPosition = "center 20%";

const heroCtas: PressKitConfig["heroVariants"]["impact"]["ctas"] = [
  { label: "Booker WAYANS", href: "#contact", variant: "primary" },
  {
    label: "Écouter Wayans",
    href: soundCloudUrl,
    variant: "secondary",
    external: true,
  },
];

const heroStats: PressKitConfig["heroVariants"]["impact"]["stats"] = [
  { value: "30+", label: "Dates en 2026" },
  { value: "60K+", label: "Vues Instagram / 3 mois" },
  { value: "2022", label: "Début sur scène" },
  { value: "PARIS", label: "Base" },
];

const wayansPressKitFr: PressKitConfig = {
  metadata: {
    title: "DJ Wayans Press Kit | Afro, Amapiano, Dancehall & Hip-Hop RnB à Paris",
    description:
      "DJ Wayans, DJ parisien depuis 2022 : Afro, Amapiano, Dancehall, Zouk, Hip-Hop RnB et open format pour clubs, marques et événements. Nike Mercurial Tour, Soft Szn (Malte). Booking.",
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
    name: "DJ Wayans",
    stageLabel: "DJ • Paris • Afro, Amapiano, Dancehall & Hip-Hop RnB",
    logo: {
      src: "",
      alt: "DJ Wayans",
    },
  },
  navigation: {
    items: [
      { label: "À propos", href: "#about" },
      { label: "Références", href: "#clubs" },
      { label: "Galerie", href: "#gallery" },
      { label: "Vidéos", href: "#videos" },
      { label: "Son", href: "#sound" },
      { label: "Contact", href: "#contact" },
    ],
    cta: {
      label: "Booker WAYANS",
      href: "#contact",
      variant: "primary",
    },
  },
  heroSocials: [
    { label: "Instagram", href: instagramUrl, icon: "instagram", iconOnly: true },
    { label: "SoundCloud", href: soundCloudUrl, icon: "soundcloud", iconOnly: true },
  ],
  heroVariants: {
    impact: {
      eyebrow: "",
      title: "WAYANS",
      accent: "AFROBEAT, URBAN FR\n& RNB",
      layout: "showcase",
      fullScreen: true,
      hideDesktopRightFade: true,
      description: "",
      image: {
        src: heroImage,
        alt: "Portrait en noir et blanc de DJ Wayans, de profil",
        badge: "DJ Wayans • Paris",
        caption: "L'énergie se partage, le DJ la renvoie",
        position: heroPosition,
      },
      ctas: heroCtas,
      stats: heroStats,
    },
    interactive: {
      eyebrow: "",
      title: "WAYANS",
      accent: "AFROBEAT, URBAN FR\n& RNB",
      layout: "interactive",
      description: "",
      image: {
        src: heroImage,
        alt: "Portrait en noir et blanc de DJ Wayans, de profil",
        badge: "DJ Wayans • Paris",
        caption: "Chaque public est différent, chaque set aussi",
        position: heroPosition,
      },
      ctas: heroCtas,
      stats: heroStats,
    },
    showcase: {
      eyebrow: "",
      title: "WAYANS",
      accent: "AFROBEAT, URBAN FR\n& RNB",
      layout: "showcase",
      contentClassName: "pt-[42vh]! md:pt-16! lg:pt-32!",
      description: "",
      image: {
        src: heroImage,
        alt: "Portrait en noir et blanc de DJ Wayans, de profil",
        badge: "DJ Wayans • Paris",
        caption: "Basé à Paris, disponible en Europe",
        position: heroPosition,
      },
      ctas: heroCtas,
      stats: heroStats,
      footerNote: "Défiler pour explorer",
    },
  },
  about: {
    eyebrow: "À propos",
    title: "Le DJ ne dirige pas,\nil échange",
    signatureLabel: "Philosophie",
    signatureQuote:
      "Le mix est un échange d'énergie entre le public et le DJ. Le but est de la renvoyer, en l'appliquant.",
    supportingText:
      "Passion, travail, professionnalisme : polyvalence et envie de toujours proposer quelque chose de nouveau.",
    tags: [
      "Afro",
      "Amapiano",
      "Dancehall",
      "Shatta",
      "Zouk",
      "Kompa",
      "Hip-Hop",
      "RnB",
      "Open Format",
    ],
    paragraphs: [
      "Basé à Paris, DJ Wayans construit son nom depuis 2022 : d'abord dans des cadres intimistes, des événements privés et des nuits underground, puis sur des scènes plus grandes et des activations de marque. En quatre ans, il est passé de la lecture de petites salles à l'animation de foules de plus de 300 personnes lors d'événements institutionnels, de partenariats de marque et de soirées club à travers la ville.",
      "Son univers a évolué avec lui. Une affinité profonde pour l'Afrobeats et le RnB s'est élargie à une palette plus texturée : Afro House, Dancehall, French Urban, façonnée par les salles qu'il a jouées et les publics qu'il a étudiés. Chaque set est différent, parce que chaque public est différent.",
      "Sa philosophie tient en une conviction : le DJ ne dirige pas, il échange. Il lit l'énergie de la salle, la transforme et la renvoie amplifiée. Sur scène, cela se traduit par une présence concentrée, précise et entièrement engagée, que ce soit derrière une platine sur un rooftop parisien ou au pied de la tour Eiffel pour une campagne Nike.",
    ],
  },
  clubs: {
    eyebrow: "Références",
    title: "Clubs, marques et scènes.",
    description:
      "Des soirées parisiennes aux activations de marque, de Clermont-Ferrand au Ghana et à Malte.",
    regions: [
      {
        title: "Marques",
        icon: "globe",
        items: [
          "Nike Mercurial Tour — DJ officiel, Paris (tour Eiffel), Angers, Toulouse",
        ],
      },
      {
        title: "Clubs, lieux et soirées",
        icon: "map-pin",
        items: [
          "Wanderlust — Paris 12e",
          "Central Chapelle",
          "Le Bateau Phare",
          "La Rotonde",
          "211",
          "Folie Pigalle",
          "F.M.R",
          "Rimshot — Clermont-Ferrand",
          "Kalyhouse",
          "Afrikashine",
          "RnbShine",
          "Don Party",
          "Esengo",
          "WataVibe",
          "Love & Bowl",
          "H.E.C MBA Africa Club",
          "A.N.M",
          "Reemix Therapy",
          "Feelings",
        ],
      },
      {
        title: "International",
        icon: "globe",
        items: ["Purple Pub — Ghana", "Soft Szn — Malte"],
      },
      {
        title: "Formats",
        icon: "globe",
        items: [
          "Clubs",
          "Soirées privées",
          "Mariages",
          "Festivals",
          "Radio / live stream",
        ],
      },
    ],
  },
  sound: {
    eyebrow: "Son",
    title: "À l'écoute.",
    paragraphs: [
      "Afro, Amapiano, Dancehall, Shatta, Zouk, Kompa, Hip-Hop et RnB : une sélection pensée pour faire circuler le public d'une couleur à l'autre.",
      "Retrouvez les mixes de DJ Wayans sur SoundCloud.",
    ],
    cta: {
      label: "Écouter sur SoundCloud",
      href: soundCloudUrl,
      external: true,
    },
    embedTitle: "DJ Wayans sur SoundCloud",
    embedUrl: soundCloudEmbedUrl,
  },
  videos: {
    eyebrow: "Vidéos",
    title: "Son univers en images.",
    description: "Des extraits live pour découvrir DJ Wayans en situation.",
    items: [
      {
        id: "wayans-video-1",
        title: "Extrait live 01",
        description: "Un moment de set filmé en live.",
        src: "/wayans/videos/video-1.mp4",
        poster: "/wayans/videos/video-1-poster.jpg",
      },
      {
        id: "wayans-video-2",
        title: "Extrait live 02",
        description: "Un extrait de performance au contact du public.",
        src: "/wayans/videos/video-2.mp4",
        poster: "/wayans/videos/video-2-poster.jpg",
      },
      {
        id: "wayans-video-3",
        title: "Extrait live 03",
        description: "Une séquence vidéo de plus de l'univers live de DJ Wayans.",
        src: "/wayans/videos/video-3.mp4",
        poster: "/wayans/videos/video-3-poster.jpg",
      },
    ],
  },
  spotify: {
    eyebrow: "Spotify",
    title: "Spotify",
    description: "",
    playlists: [],
    badgeLabel: "Playlist",
  },
  brands: {
    eyebrow: "Marques",
    title: "Marques et partenaires.",
    intro: "",
    supportingText: "",
    categories: [],
    itemLabel: "Marque",
    items: [],
    fit: {
      eyebrow: "",
      title: "",
      points: [],
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Booking et demandes.",
    description:
      "Pour une date en club, un événement de marque, un mariage, un festival ou une soirée privée : DJ Wayans gère lui-même son booking.",
    methods: [
      {
        label: "Email",
        value: bookingEmail,
        href: `mailto:${bookingEmail}`,
        icon: "mail",
      },
      {
        label: "WhatsApp",
        value: "+33 6 33 86 35 68",
        href: whatsappUrl,
        icon: "whatsapp",
        external: true,
      },
      {
        label: "Instagram",
        value: "@wayansboy",
        href: instagramUrl,
        icon: "instagram",
        external: true,
      },
    ],
  },
  gallery: {
    eyebrow: "Galerie",
    title: "Galerie",
    description: "Portraits et moments de scène de DJ Wayans.",
    homepageTitle: "Univers visuel",
    homepageCtaLabel: "Ouvrir la galerie",
    images: [
      { src: "/wayans/photos/gallery-1.jpeg", alt: "DJ Wayans aux platines, casque sur les oreilles", size: "md:col-span-2" },
      { src: "/wayans/photos/gallery-8.jpeg", alt: "DJ Wayans aux platines sous une lumière rouge, au Bateau Phare" },
      { src: "/wayans/photos/gallery-16.jpeg", alt: "DJ Wayans en set, bonnet blanc et maillot, lumière rouge" },
      { src: "/wayans/photos/gallery-12.jpeg", alt: "DJ Wayans en set lors de la soirée Love & Bowl" },
      { src: "/wayans/photos/gallery-13.jpeg", alt: "DJ Wayans en set, son nom projeté sur l'écran de scène" },
      { src: "/wayans/photos/gallery-7.jpeg", alt: "DJ Wayans et un invité devant la tour Eiffel, Nike Mercurial Tour" },
      { src: "/wayans/photos/hero-pic-retouche.jpeg", alt: "Portrait noir et blanc de DJ Wayans, de profil" },
      { src: "/wayans/photos/gallery-4.jpeg", alt: "Portrait noir et blanc de DJ Wayans, de profil, yeux fermés" },
      { src: "/wayans/photos/gallery-5.jpeg", alt: "Portrait noir et blanc de DJ Wayans, de profil, tête baissée" },
      { src: "/wayans/photos/gallery-10.jpeg", alt: "DJ Wayans assis sur un tabouret, portrait noir et blanc" },
      { src: "/wayans/photos/gallery-2.jpeg", alt: "DJ Wayans debout contre un mur, portrait noir et blanc" },
      { src: "/wayans/photos/gallery-3.jpeg", alt: "Portrait noir et blanc de DJ Wayans, effet de flou de mouvement" },
      { src: "/wayans/photos/gallery-9.jpeg", alt: "DJ Wayans de face, pull tapisserie" },
      { src: "/wayans/photos/gallery-11.jpeg", alt: "DJ Wayans assis sur un tabouret, pull tapisserie" },
      { src: "/wayans/photos/IMG_9834.jpeg", alt: "DJ Wayans assis, portrait en pied" },
      { src: "/wayans/photos/gallery-14.jpeg", alt: "Portrait de DJ Wayans en chemise brune, lumière chaude" },
      { src: "/wayans/photos/gallery-15.jpeg", alt: "Portrait de DJ Wayans en pull rayé jaune dans un bar" },
    ],
  },
};

const heroCtasEn: PressKitConfig["heroVariants"]["impact"]["ctas"] = [
  { label: "Book WAYANS", href: "#contact", variant: "primary" },
  {
    label: "Listen to Wayans",
    href: soundCloudUrl,
    variant: "secondary",
    external: true,
  },
];

const heroStatsEn: PressKitConfig["heroVariants"]["impact"]["stats"] = [
  { value: "30+", label: "Dates in 2026" },
  { value: "60K+", label: "Instagram views / 3 months" },
  { value: "2022", label: "On stage since" },
  { value: "PARIS", label: "Base" },
];

const heroImageAltEn = "Black and white profile portrait of DJ Wayans";

const galleryAltEn: Record<string, string> = {
  "gallery-1": "DJ Wayans at the decks, headphones on",
  "gallery-8": "DJ Wayans at the decks under red light, at Le Bateau Phare",
  "gallery-16": "DJ Wayans playing, white cap and jersey, red light",
  "gallery-12": "DJ Wayans playing at the Love & Bowl night",
  "gallery-13": "DJ Wayans playing, his name projected on the stage screen",
  "gallery-7": "DJ Wayans and a guest in front of the Eiffel Tower, Nike Mercurial Tour",
  "hero-pic-retouche": "Black and white profile portrait of DJ Wayans",
  "gallery-4": "Black and white profile portrait of DJ Wayans, eyes closed",
  "gallery-5": "Black and white profile portrait of DJ Wayans, head down",
  "gallery-10": "DJ Wayans seated on a stool, black and white portrait",
  "gallery-2": "DJ Wayans standing against a wall, black and white portrait",
  "gallery-3": "Black and white portrait of DJ Wayans with a motion-blur effect",
  "gallery-9": "DJ Wayans facing the camera, tapestry sweater",
  "gallery-11": "DJ Wayans seated on a stool, tapestry sweater",
  IMG_9834: "DJ Wayans seated, full-length portrait",
  "gallery-14": "Portrait of DJ Wayans in a brown shirt, warm light",
  "gallery-15": "Portrait of DJ Wayans in a yellow striped sweater at a bar",
};

const wayansPressKitEn: PressKitConfig = {
  ...wayansPressKitFr,
  metadata: {
    title: "DJ Wayans Press Kit | Afro, Amapiano, Dancehall & Hip-Hop RnB in Paris",
    description:
      "DJ Wayans, Paris-based DJ since 2022: Afro, Amapiano, Dancehall, Zouk, Hip-Hop RnB and open format for clubs, brands and events. Nike Mercurial Tour, Soft Szn (Malta). Booking.",
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
      { label: "References", href: "#clubs" },
      { label: "Gallery", href: "#gallery" },
      { label: "Videos", href: "#videos" },
      { label: "Sound", href: "#sound" },
      { label: "Contact", href: "#contact" },
    ],
    cta: { label: "Book WAYANS", href: "#contact", variant: "primary" },
  },
  heroVariants: {
    impact: {
      ...wayansPressKitFr.heroVariants.impact,
      image: {
        ...wayansPressKitFr.heroVariants.impact.image,
        alt: heroImageAltEn,
        badge: "DJ Wayans • Paris",
        caption: "Energy is shared, the DJ sends it back",
      },
      ctas: heroCtasEn,
      stats: heroStatsEn,
    },
    interactive: {
      ...wayansPressKitFr.heroVariants.interactive,
      image: {
        ...wayansPressKitFr.heroVariants.interactive.image,
        alt: heroImageAltEn,
        badge: "DJ Wayans • Paris",
        caption: "Every crowd is different, so is every set",
      },
      ctas: heroCtasEn,
      stats: heroStatsEn,
    },
    showcase: {
      ...wayansPressKitFr.heroVariants.showcase,
      image: {
        ...wayansPressKitFr.heroVariants.showcase.image,
        alt: heroImageAltEn,
        badge: "DJ Wayans • Paris",
        caption: "Based in Paris, available across Europe",
      },
      ctas: heroCtasEn,
      stats: heroStatsEn,
      footerNote: "Scroll to explore",
    },
  },
  about: {
    ...wayansPressKitFr.about,
    eyebrow: "About",
    title: "The DJ does not lead,\nhe exchanges",
    signatureLabel: "Philosophy",
    signatureQuote:
      "A mix is an exchange of energy between the crowd and the DJ. The goal is to send it back, put into practice.",
    supportingText:
      "Passion, hard work, professionalism: versatility and a constant drive to bring something new.",
    paragraphs: [
      "Based in Paris, DJ Wayans has been building his name since 2022, first in intimate settings, private events and underground nights, gradually moving into larger stages and brand activations. In four years, he has gone from reading small rooms to commanding crowds of 300+ at institutional events, brand partnerships and club nights across the city.",
      "His sound has evolved with him. What started as a deep affinity for Afrobeats and RnB has expanded into a more textured palette, Afro House, Dancehall, French Urban, shaped by the rooms he has played and the crowds he has studied. Each set is different, because each crowd is different.",
      "His philosophy rests on a single conviction: the DJ does not lead, he exchanges. He reads the energy of the room, transforms it, and sends it back amplified. On stage, that translates into a presence that is focused, deliberate and locked in, whether behind a rooftop booth in Paris or at the foot of the Eiffel Tower for a Nike campaign.",
    ],
  },
  clubs: {
    eyebrow: "References",
    title: "Clubs, brands and stages.",
    description:
      "From Paris nights to brand activations, from Clermont-Ferrand to Ghana and Malta.",
    regions: [
      {
        title: "Brands",
        icon: "globe",
        items: [
          "Nike Mercurial Tour — official DJ, Paris (Eiffel Tower), Angers, Toulouse",
        ],
      },
      {
        title: "Clubs, venues and nights",
        icon: "map-pin",
        items: [
          "Wanderlust — Paris 12th",
          "Central Chapelle",
          "Le Bateau Phare",
          "La Rotonde",
          "211",
          "Folie Pigalle",
          "F.M.R",
          "Rimshot — Clermont-Ferrand",
          "Kalyhouse",
          "Afrikashine",
          "RnbShine",
          "Don Party",
          "Esengo",
          "WataVibe",
          "Love & Bowl",
          "H.E.C MBA Africa Club",
          "A.N.M",
          "Reemix Therapy",
          "Feelings",
        ],
      },
      {
        title: "International",
        icon: "globe",
        items: ["Purple Pub — Ghana", "Soft Szn — Malta"],
      },
      {
        title: "Formats",
        icon: "globe",
        items: [
          "Clubs",
          "Private parties",
          "Weddings",
          "Festivals",
          "Radio / live stream",
        ],
      },
    ],
  },
  sound: {
    ...wayansPressKitFr.sound,
    eyebrow: "Sound",
    title: "Listen in.",
    paragraphs: [
      "Afro, Amapiano, Dancehall, Shatta, Zouk, Kompa, Hip-Hop and RnB: a selection designed to move the crowd from one colour to the next.",
      "Find DJ Wayans' mixes on SoundCloud.",
    ],
    cta: {
      label: "Listen on SoundCloud",
      href: soundCloudUrl,
      external: true,
    },
    embedTitle: "DJ Wayans on SoundCloud",
  },
  videos: {
    eyebrow: "Videos",
    title: "His world in images.",
    description: "Live excerpts to discover DJ Wayans in action.",
    items: [
      {
        id: "wayans-video-1",
        title: "Live excerpt 01",
        description: "A moment of a set, filmed live.",
        src: "/wayans/videos/video-1.mp4",
        poster: "/wayans/videos/video-1-poster.jpg",
      },
      {
        id: "wayans-video-2",
        title: "Live excerpt 02",
        description: "A performance excerpt in close contact with the crowd.",
        src: "/wayans/videos/video-2.mp4",
        poster: "/wayans/videos/video-2-poster.jpg",
      },
      {
        id: "wayans-video-3",
        title: "Live excerpt 03",
        description: "Another sequence from DJ Wayans' live world.",
        src: "/wayans/videos/video-3.mp4",
        poster: "/wayans/videos/video-3-poster.jpg",
      },
    ],
  },
  brands: {
    ...wayansPressKitFr.brands,
    eyebrow: "Brands",
    title: "Brands and partners.",
    itemLabel: "Brand",
  },
  contact: {
    ...wayansPressKitFr.contact,
    eyebrow: "Contact",
    title: "Booking and enquiries.",
    description:
      "For a club date, a brand event, a wedding, a festival or a private party: DJ Wayans handles his own booking.",
  },
  gallery: {
    ...wayansPressKitFr.gallery,
    eyebrow: "Gallery",
    title: "Gallery",
    description: "Portraits and stage moments of DJ Wayans.",
    homepageTitle: "Visual universe",
    homepageCtaLabel: "Open the gallery",
    images: wayansPressKitFr.gallery.images.map((image) => {
      const key = image.src.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "";
      return { ...image, alt: galleryAltEn[key] ?? image.alt };
    }),
  },
  footer: {
    availabilityText:
      "Available for clubs, festivals, private events and brand activations.",
    navigationLabel: "Navigation",
    socialLabel: "Socials",
    bookingLabel: "Booking",
    languageLabel: "Language",
    fullGalleryLabel: "Full gallery",
    allVideosLabel: "All videos",
  },
};

const wayansBaseClient = {
  domain: "wayans.presskit.fr",
  vercelSubdomain: "wayans.vercel.app",
  name: "DJ Wayans",
  city: "Paris",
  country: "France",
  heroImage,
  socials: {
    instagram: instagramUrl,
    soundCloud: soundCloudUrl,
  },
  contact: {
    email: bookingEmail,
    phone: "+33633863568",
    city: "Paris",
    country: "France",
  },
  testimonials: [],
  bookingEmail,
  defaultTheme: "gold",
  defaultVariant: "impact",
} satisfies Partial<ClientConfig>;

const wayansKeywords = [
  "DJ Wayans",
  "DJ Paris",
  "DJ afro Paris",
  "DJ Amapiano",
  "DJ Dancehall",
  "DJ Hip-Hop RnB",
  "DJ open format",
  "DJ mariage Paris",
  "booking DJ Paris",
  "DJ press kit",
];

export const wayansEnClient: ClientConfig = {
  ...wayansBaseClient,
  slug: "wayans-en",
  tagline: "DJ • Paris • Afro, Amapiano, Dancehall & Hip-Hop RnB",
  category: "Afro / Amapiano / Dancehall / Hip-Hop RnB DJ",
  description:
    "Paris-based DJ since 2022, DJ Wayans plays Afro, Amapiano, Dancehall, Zouk and Hip-Hop RnB for clubs, brands and events.",
  longBio: wayansPressKitEn.about.paragraphs.join(" "),
  gallery: wayansPressKitEn.gallery.images,
  services: [
    {
      title: "Clubs",
      description: "Afro, amapiano, dancehall and hip-hop RnB sets for dancefloors in Paris and across Europe.",
    },
    {
      title: "Brand events",
      description: "Brand activations and partnerships, including the Nike Mercurial Tour.",
    },
    {
      title: "Private events",
      description: "Private parties, weddings, festivals and radio / live stream.",
    },
  ],
  seo: {
    title: wayansPressKitEn.metadata.title,
    description: wayansPressKitEn.metadata.description,
    keywords: wayansKeywords,
    ogImage: "/opengraph-image",
    canonical: "https://wayans.presskit.fr/",
  },
  pressKit: wayansPressKitEn,
  hideFromSwitcher: true,
  languageSwitch: [
    { label: "FR", href: "/", clientSlug: "wayans" },
    { label: "EN", href: "/en", active: true },
  ],
};

export const wayansClient: ClientConfig = {
  ...wayansBaseClient,
  slug: "wayans",
  tagline: "DJ • Paris • Afro, Amapiano, Dancehall & Hip-Hop RnB",
  category: "DJ afro / Amapiano / Dancehall / Hip-Hop RnB",
  description:
    "DJ parisien depuis 2022, DJ Wayans mixe Afro, Amapiano, Dancehall, Zouk et Hip-Hop RnB pour clubs, marques et événements.",
  longBio: wayansPressKitFr.about.paragraphs.join(" "),
  gallery: wayansPressKitFr.gallery.images,
  services: [
    {
      title: "Clubs",
      description: "Sets afro, amapiano, dancehall et hip-hop RnB pour dancefloors parisiens et européens.",
    },
    {
      title: "Événements de marque",
      description: "Activations et partenariats de marque, dont le Nike Mercurial Tour.",
    },
    {
      title: "Événements privés",
      description: "Soirées privées, mariages, festivals et radio / live stream.",
    },
  ],
  seo: {
    title: wayansPressKitFr.metadata.title,
    description: wayansPressKitFr.metadata.description,
    keywords: wayansKeywords,
    ogImage: "/opengraph-image",
    canonical: "https://wayans.presskit.fr/",
  },
  pressKit: wayansPressKitFr,
  languageSwitch: [
    { label: "FR", href: "/", active: true },
    { label: "EN", href: "/en", clientSlug: "wayans-en" },
  ],
};
