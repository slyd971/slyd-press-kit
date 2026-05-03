import type { PressKitConfig } from "@/data/config";
import type { ClientConfig } from "@/data/clients/types";

const soundCloudUrl =
  "https://soundcloud.com/silver-dj-305204022?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";
const soundCloudEmbedUrl =
  "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/silver-dj-305204022&color=%2319b46b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";
const instagramUrl = "https://www.instagram.com/slvr_dj/";
const tikTokUrl = "https://www.tiktok.com/@slvr_dj";
const youtubeChannelUrl =
  "https://www.youtube.com/channel/UCuH8Wy4BwCt_vGExn_xZEVA?app=desktop";
const bookingEmail = "silverdj225booking@gmail.com";
const bookingPhone = "(+225) 07 87 87 97 80";
const bookingWhatsapp = "https://wa.me/2250101535174";
const heroImage = "/silver-dj/gallery/optimized/gallery-silver1.jpg";
const spotifyUrl =
  "https://open.spotify.com/playlist/37i9dQZF1E4yYwPTq3OA1m?utm_source=generator&theme=0";
const appleMusicUrl =
  "https://podcasts.apple.com/ci/podcast/silver-dj-slvr-dj/id1755049366";

const silverDjPressKit: PressKitConfig = {
  metadata: {
    title:
      "Silver DJ | Press kit officiel, champion DMC West Africa",
    description:
      "Press kit officiel de Silver DJ, DJ producteur ivoirien basé à Abidjan, triple champion DMC West Africa, vice-champion DMC World 2024 et 3e DMC World 2025.",
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
    name: "Silver DJ",
    stageLabel: "DJ producteur • Abidjan & international",
    logo: {
      src: "/silver-dj/logo/logo-silverdj.PNG",
      alt: "Logo Silver DJ",
    },
  },
  navigation: {
    items: [
      { label: "À propos", href: "#about" },
      { label: "Expérience", href: "#clubs" },
      { label: "Galerie", href: "#gallery" },
      { label: "Vidéos", href: "#videos" },
      { label: "SoundCloud", href: "#sound" },
      { label: "Spotify", href: "#spotify" },
    ],
    cta: {
      label: "Booking",
      href: "#contact",
      variant: "primary",
    },
  },
  heroSocials: [
    { label: "Instagram", href: instagramUrl, icon: "instagram" },
    { label: "TikTok", href: tikTokUrl, icon: "tiktok" },
    { label: "YouTube", href: youtubeChannelUrl, icon: "youtube" },
    { label: "Spotify", href: spotifyUrl, icon: "spotify" },
    { label: "SoundCloud", href: soundCloudUrl, icon: "soundcloud" },
    { label: "Apple Music", href: appleMusicUrl, icon: "apple-music" },
  ],
  heroVariants: {
    impact: {
      eyebrow: "Open format • Abidjan",
      title: "SILVER",
      accent: "DJ",
      description:
        "Triple champion DMC West Africa, vice-champion DMC World Paris 2024 et 3e mondial à Tokyo 2025, Silver DJ mêle technique, show et énergie afro-internationale.",
      layout: "impact",
      image: {
        src: heroImage,
        alt: "Visuel principal de Silver DJ",
        badge: "Silver DJ",
        caption: "Champion DMC West Africa",
      },
      ctas: [
        { label: "Booking", href: "#contact", variant: "primary" },
        { label: "Voir vidéos", href: "#videos", variant: "secondary" },
      ],
      stats: [
        { value: "3X", label: "Champion DMC West Africa" },
        { value: "VICE-CHAMP.", label: "DMC World Paris 2024" },
        { value: "3E", label: "DMC World Tokyo 2025" },
        { value: "BEST INTL DJ", label: "Guinness Ghana DJ Awards" },
      ],
      proofline:
        "Abidjan · Casablanca · Lyon · Congo · Tokyo · Paris",
    },
    interactive: {
      eyebrow: "Expérience live • Abidjan",
      title: "SILVER",
      accent: "DJ",
      description:
        "Des clubs d'Abidjan aux compétitions DMC, Silver DJ construit des sets techniques, festifs et mémorables, portés par une vraie lecture du public.",
      layout: "interactive",
      image: {
        src: heroImage,
        alt: "Visuel live de Silver DJ",
        badge: "Silver DJ",
        caption: "Compétition · club · festivals",
      },
      ctas: [
        { label: "Booking", href: "#contact", variant: "primary" },
        { label: "Voir vidéos", href: "#videos", variant: "secondary" },
      ],
      stats: [
        { value: "26K+", label: "TikTok" },
        { value: "13K+", label: "Instagram" },
        { value: "12K+", label: "YouTube" },
        { value: "20+", label: "Mix & remixes" },
      ],
      proofline:
        "Clubs · Événements privés · Dates internationales",
    },
    showcase: {
      eyebrow: "DJ open format • Abidjan",
      title: "SILVER",
      accent: "DJ",
      description:
        "Né à Bouaké et formé à la DJ School d'Abidjan, Silver DJ s'impose comme une référence du deejaying africain par sa précision, sa créativité et son énergie scénique.",
      layout: "showcase",
      image: {
        src: heroImage,
        alt: "Visuel de performance de Silver DJ",
        badge: "Silver DJ",
        caption: "Abidjan vers l'international",
      },
      ctas: [
        { label: "Booking", href: "#contact", variant: "primary" },
        { label: "Voir vidéos", href: "#videos", variant: "secondary" },
      ],
      stats: [
        { value: "2024", label: "Champion DMC West Africa" },
        { value: "2025", label: "Champion DMC West Africa" },
        { value: "2026", label: "Champion DMC West Africa" },
        { value: "2024", label: "Best International DJ" },
      ],
      proofline:
        "Clubs · Événements privés · Dates internationales",
      footerNote: "Une énergie pensée pour les publics qui veulent vivre le moment.",
    },
  },
  about: {
    eyebrow: "À propos",
    title: "Une référence\ndu deejaying africain.",
    signatureLabel: "Signature",
    signatureQuote:
      "Une technique de compétition, une énergie contagieuse et une capacité rare à lire la foule.",
    supportingText:
      "Son parcours relie Bouaké, Abidjan, Paris, Tokyo, Casablanca et les grandes scènes d'Afrique de l'Ouest.",
    tags: [
      "Champion DMC",
      "Turntablism",
      "Afro",
      "Hip-Hop",
      "Dancehall",
      "House",
      "Soca",
      "Trap",
    ],
    paragraphs: [
      "Né à Bouaké le 04 septembre 2001, Silver DJ, alias Coulibaly Siaka, est un DJ ivoirien marqué par une passion profonde pour la musique, la performance scénique et la culture du deejaying.",
      "Issu de la première promotion de la DJ School à Abidjan, il fait ses premiers pas en compétition en 2021 lors de la Battle DJ Highlander, qu'il remporte brillamment. Cette victoire l'installe rapidement dans le milieu professionnel abidjanais.",
      "De 2021 à 2024, il devient DJ résident au Felah, un lieu emblématique de la jeunesse abidjanaise. Il y affine son identité, sa technique et sa présence, avant de confirmer son rayonnement avec les titres de champion DMC West Africa 2024, 2025 et 2026.",
      "Vice-champion DMC World 2024 à Paris, 3e DMC World 2025 à Tokyo et Best International DJ aux Guinness Ghana DJ Awards 2024, Silver DJ continue d'élargir son influence entre clubs, festivals, médias, institutions et scènes internationales.",
    ],
  },
  clubs: {
    eyebrow: "Expérience",
    title: "Des grandes scènes,\nun impact international.",
    description:
      "Silver DJ navigue entre résidences club, festivals, compétitions mondiales, événements institutionnels et tournées internationales avec une même exigence: transformer chaque prestation en expérience mémorable.",
    regions: [
      {
        title: "Scènes & festivals",
        icon: "map-pin",
        items: [
          "Concert Didi B - Stade Felix Houphouet-Boigny",
          "Happy Run - 50K pers",
          "Ivo Chella - 20K+ pers",
          "Mother Africa Festival - 40K+ pers",
          "Festival des Grillades",
          "King of Rap",
          "Drink It",
          "BKE Chill Festival",
        ],
      },
      {
        title: "International",
        icon: "globe",
        items: [
          "DMC World Paris 2024",
          "DMC World Tokyo 2025",
          "Casablanca - Joker Club",
          "Casablanca - Morocco Mall Fan Zone",
          "AfroChill Lyon",
          "Nikki Beach Congo",
          "La Bagatelle Pointe-Noire",
          "Le Zanzi Club Congo",
        ],
      },
      {
        title: "Clubs & lieux premium",
        icon: "map-pin",
        items: [
          "Bloom Abidjan",
          "Le Felah",
          "The Jungle",
          "Skinny Abidjan",
          "The Jarules",
          "Novotel Abidjan",
          "Pullman Abidjan",
          "Movenpick Abidjan",
        ],
      },
      {
        title: "Institutions & médias",
        icon: "globe",
        items: [
          "Banque Africaine de Développement",
          "Ambassade de France en Côte d'Ivoire",
          "Ministere de la Culture et de la Francophonie",
          "Trace FM CI",
          "RTI",
          "Hit Radio / Vibe Radio",
          "Flow 225",
          "Life TV - Willy à Midi",
        ],
      },
    ],
  },
  sound: {
    eyebrow: "Son",
    title: "À l'écoute.",
    paragraphs: [
      "Silver DJ mélange avec fluidité les sonorités africaines et internationales: hip-hop, dancehall, house, funk, soca, trap, drill et afro house.",
      "Sa signature repose sur les scratches, mashups, toneplay et transitions complexes, mais aussi sur sa capacité à raconter une histoire et créer une connexion festive avec le public.",
      "Ses contenus regroupent performances live, remixes, mashups, mixtapes et séries audio comme Monkey's Piano Mix ou Home Session, avec plus de 20 mixes et remixes disponibles.",
    ],
    cta: {
      label: "Écouter sur SoundCloud",
      href: soundCloudUrl,
      external: true,
    },
    embedTitle: "Player SoundCloud de Silver DJ",
    embedUrl: soundCloudEmbedUrl,
  },
  videos: {
    eyebrow: "Vidéos",
    title: "Performances live,\nmixtapes et mashups.",
    description:
      "Les extraits montrent toute l'énergie de Silver DJ: shows live, remixes, mashups et performances captées au plus près du public.",
    items: [
      {
        id: "silver-dj-video-2",
        title: "Extrait live 02",
        description: "",
        src: "/silver-dj/videos/videos-silverdj-2.mp4",
        poster: "/silver-dj/videos/videos-silverdj-2-poster.jpg",
      },
      {
        id: "silver-dj-video-3",
        title: "Extrait live 03",
        description: "",
        src: "/silver-dj/videos/videos-silverdj-3.mp4",
        poster: "/silver-dj/videos/videos-silverdj-3-poster.jpg",
      },
      {
        id: "silver-dj-video-5",
        title: "Extrait live 05",
        description: "",
        src: "/silver-dj/videos/videos-silverdj-5.mp4",
        poster: "/silver-dj/videos/videos-silverdj-5-poster.jpg",
      },
      {
        id: "silver-dj-video-6",
        title: "Extrait live 06",
        description: "",
        src: "/silver-dj/videos/videos-silverdj-6.mp4",
        poster: "/silver-dj/videos/videos-silverdj-6-poster.jpg",
      },
      {
        id: "silver-dj-video-8",
        title: "Extrait live 08",
        description: "",
        src: "/silver-dj/videos/videos-silverdj-8.mp4",
        poster: "/silver-dj/videos/videos-silverdj-8-poster.jpg",
      },
      {
        id: "silver-dj-video-9",
        title: "Extrait live 09",
        description: "",
        src: "/silver-dj/videos/videos-silverdj-9.mp4",
        poster: "/silver-dj/videos/videos-silverdj-9-poster.jpg",
      },
      {
        id: "silver-dj-video-10",
        title: "Extrait live 10",
        description: "",
        src: "/silver-dj/videos/videos-silverdj-10.mp4",
        poster: "/silver-dj/videos/videos-silverdj-10-poster.jpg",
      },
    ],
  },
  spotify: {
    eyebrow: "Spotify",
    title: "Silver Radio",
    description:
      "Mixes, remixes et sélections club signés Silver DJ — disponibles en streaming.",
    playlists: [
      {
        id: "silver-radio",
        title: "Mix & sélections Silver DJ",
        embedUrl:
          "https://open.spotify.com/embed/playlist/37i9dQZF1E4yYwPTq3OA1m?utm_source=generator&theme=0",
      },
    ],
    badgeLabel: "Sélection Silver DJ",
  },
  brands: {
    eyebrow: "Partenaires",
    title: "Marques, institutions\net lieux d'excellence.",
    intro:
      "Silver DJ est sollicité par des marques, institutions, hôtels, clubs et événements majeurs qui misent sur une présence artistique à la hauteur de leur image.",
    supportingText:
      "Desperados, Heineken, Martini, la BAD, l'Ambassade de France, Novotel, Pullman ou Movenpick font partie des environnements où son énergie scénique rencontre des exigences premium.",
    categories: [
      "Institutions",
      "Hôtels & resorts",
      "Clubs",
      "Festivals",
      "Médias",
      "Boissons",
    ],
    itemLabel: "Références",
    items: [
      "Desperados CI",
      "Heineken CI",
      "Martini",
      "Banque Africaine de Développement",
      "Ambassade de France en Côte d'Ivoire",
      "Novotel Abidjan",
      "Pullman Abidjan",
      "Movenpick Abidjan",
      "Palm Resort Assinie",
      "DJ School Abidjan",
      "Key Agency",
      "Trace FM CI",
      "RTI",
      "Hit Radio",
    ],
    fit: {
      eyebrow: "Pourquoi Silver DJ",
      title: "Palmarès, présence et fiabilité scénique.",
      points: [
        "Triple champion DMC West Africa 2024, 2025 et 2026",
        "Vice-champion DMC World 2024 et 3e DMC World 2025",
        "Une expérience confirmée sur clubs, festivals, institutions et événements sold out",
      ],
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Booking.",
    description:
      "Pour vos soirées, festivals, événements privés ou institutionnels — Silver DJ est disponible depuis Abidjan, en Côte d'Ivoire et à l'international.",
    methods: [
      {
        label: "Email",
        value: bookingEmail,
        href: `mailto:${bookingEmail}`,
        icon: "mail",
        external: false,
      },
      {
        label: "WhatsApp",
        value: "(+225) 01 01 53 51 74",
        href: bookingWhatsapp,
        icon: "whatsapp",
        external: true,
      },
      {
        label: "Téléphone",
        value: bookingPhone,
        href: "tel:+2250787879780",
        icon: "phone",
        external: false,
      },
      {
        label: "Instagram",
        value: "@slvr_dj",
        href: instagramUrl,
        icon: "instagram",
        external: true,
      },
    ],
  },
  gallery: {
    eyebrow: "Galerie",
    title: "Scène & platines.",
    description:
      "Une sélection d'images entre scène, compétition et moments live pour illustrer l'univers Silver DJ.",
    homepageTitle: "Univers visuel",
    homepageCtaLabel: "Ouvrir la galerie",
    images: [
      {
        src: "/silver-dj/gallery/optimized/gallery-silver1.jpg",
        alt: "Silver DJ en portrait scénique",
        size: "md:col-span-2",
        position: "center 20%",
      },
      {
        src: "/silver-dj/gallery/optimized/gallery-silver13.jpg",
        alt: "Silver DJ en live grand format",
        position: "center 35%",
      },
      {
        src: "/silver-dj/gallery/silverdj-bloom-1.jpg",
        alt: "Silver DJ en live au Bloom",
        position: "center 18%",
      },
      {
        src: "/silver-dj/gallery/optimized/gallery-silver2.jpg",
        alt: "Silver DJ en performance live",
        position: "center 18%",
      },
      {
        src: "/silver-dj/gallery/optimized/gallery-silver3.jpg",
        alt: "Silver DJ derrière les platines",
        position: "center 20%",
      },
      {
        src: "/silver-dj/gallery/optimized/gallery-silver3-1.jpeg",
        alt: "Silver DJ en performance",
        position: "center 20%",
      },
      {
        src: "/silver-dj/gallery/optimized/gallery-silver4.jpg",
        alt: "Silver DJ pendant un show",
        position: "center 18%",
      },
      {
        src: "/silver-dj/gallery/optimized/gallery-silver5.jpg",
        alt: "Silver DJ en moment live",
        size: "md:col-span-2",
        position: "center 22%",
      },
      {
        src: "/silver-dj/gallery/optimized/gallery-silver6.jpg",
        alt: "Portrait événementiel de Silver DJ",
        position: "center 18%",
      },
      {
        src: "/silver-dj/gallery/optimized/gallery-silver7.jpg",
        alt: "Silver DJ sur scène",
        position: "center 18%",
      },
      {
        src: "/silver-dj/gallery/optimized/gallery-silver8.jpg",
        alt: "Visuel Silver DJ",
        position: "center",
      },
      {
        src: "/silver-dj/gallery/optimized/gallery-silver9.jpg",
        alt: "Silver DJ sélection visuelle",
        position: "center",
      },
      {
        src: "/silver-dj/gallery/optimized/gallery-silver10.jpg",
        alt: "Silver DJ en portrait",
        position: "center 18%",
      },
      {
        src: "/silver-dj/gallery/optimized/gallery-silver11.jpg",
        alt: "Silver DJ en compétition",
        position: "center 20%",
      },
      {
        src: "/silver-dj/gallery/optimized/gallery-silver14.jpg",
        alt: "Silver DJ sur une scène internationale",
        size: "md:col-span-2",
        position: "center 35%",
      },
      {
        src: "/silver-dj/gallery/optimized/gallery-silver15.jpg",
        alt: "Silver DJ face au public",
        size: "md:col-span-2",
        position: "center 22%",
      },
      {
        src: "/silver-dj/gallery/silverdj-BSFS-1.jpg",
        alt: "Portrait live de Silver DJ",
      },
      {
        src: "/silver-dj/gallery/silverdj-champion-2.jpg",
        alt: "Silver DJ moment victoire",
        size: "md:col-span-2",
      },
      {
        src: "/silver-dj/gallery/silverdj-bloom-2.jpg",
        alt: "Public du Bloom avec Silver DJ",
      },
      {
        src: "/silver-dj/gallery/silverdj-champion-3.jpg",
        alt: "Silver DJ en coulisses",
      },
    ],
  },
};

export const silverDjClient: ClientConfig = {
  slug: "silver-dj",
  domain: "silver-dj.presskit.fr",
  vercelSubdomain: "silver-dj.vercel.app",
  domainAliases: [
    "silver-dj-slyd971s-projects.vercel.app",
    "silver-dj-git-main-slyd971s-projects.vercel.app",
  ],
  name: "Silver DJ",
  tagline: "DJ producteur • Abidjan & international",
  city: "Abidjan",
  country: "Côte d'Ivoire",
  category: "DJ producteur / champion DMC / open format international",
  description: silverDjPressKit.metadata.description,
  longBio: silverDjPressKit.about.paragraphs.join(" "),
  heroImage,
  gallery: silverDjPressKit.gallery.images,
  socials: {
    instagram: instagramUrl,
    soundCloud: soundCloudUrl,
    tikTok: tikTokUrl,
    spotify: spotifyUrl,
    website: youtubeChannelUrl,
  },
  contact: {
    email: bookingEmail,
    phone: bookingPhone,
    city: "Abidjan",
    country: "Côte d'Ivoire",
  },
  services: [
    {
      title: "Soirées club",
      description:
        "Sets techniques et festifs pour clubs, résidences, dancefloors premium et nuits sold out.",
    },
    {
      title: "Festivals & institutions",
      description:
        "Performances adaptées aux grands événements, festivals, institutions et activations à forte visibilité.",
    },
    {
      title: "Événements privés & internationaux",
      description:
        "Une approche flexible pour événements privés, hôtels, showcases et dates hors Côte d'Ivoire.",
    },
  ],
  testimonials: [],
  bookingEmail,
  seo: {
    title: silverDjPressKit.metadata.title,
    description: silverDjPressKit.metadata.description,
    keywords: [
      "Silver DJ",
      "DJ Abidjan",
      "Champion DMC West Africa",
      "DMC World Paris 2024",
      "DMC World Tokyo 2025",
      "DJ DMC Côte d'Ivoire",
      "DJ festivals Afrique",
      "DJ ivoirien",
      "dossier de presse DJ",
      "réservation DJ Abidjan",
      "booking DJ Côte d'Ivoire",
    ],
    ogImage: "/opengraph-image",
  },
  defaultTheme: "green",
  defaultVariant: "impact",
  pressKit: silverDjPressKit,
};
