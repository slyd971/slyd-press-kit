"use client";
import { useState } from "react";
import { Play, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Instagram,
  Mail,
  Phone,
  Music2,
  Globe2,
  MapPin,
  ArrowUpRight,
  Disc3,
} from "lucide-react";
const liveVideos = [
  {
    id: "01",
    title: "Crowd Energy",
    tag: "Club Moment",
    duration: "0:18",
    videoSrc: "/press-kit/videos/live-crowd.mp4",
    poster: "/press-kit/live/live-crowd.jpg",
    size: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: "02",
    title: "DJ Performance",
    tag: "Open Format",
    duration: "0:14",
    videoSrc: "/press-kit/videos/live-dj.mp4",
    poster: "/press-kit/live/live-dj.jpg",
    size: "lg:col-span-1",
  },
  {
    id: "03",
    title: "Premium Atmosphere",
    tag: "Brand Event",
    duration: "0:16",
    videoSrc: "/press-kit/videos/live-premium.mp4",
    poster: "/press-kit/live/live-premium.jpg",
    size: "lg:col-span-1",
  },
];
const photos = [
  {
    src: "/press-kit/2025-12-29-22-31-08-761.jpg",
    alt: "Sly'D behind the decks",
    size: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/press-kit/20250719_192423.jpg",
    alt: "Studio portrait",
    size: "md:col-span-1",
  },
  {
    src: "/press-kit/1000019881.jpg",
    alt: "Urban portrait",
    size: "md:col-span-1",
  },
  {
    src: "/press-kit/DSC01685.JPG",
    alt: "Live performance",
    size: "md:col-span-2",
  },
];

const france = [
  "Wanderlust",
  "Palais Maillot",
  "Deflower",
  "Mix Club",
  "Chez Régine",
  "Gypsy Twister",
  "Grey Club",
  "Café Barge",
];

const international = [
  "Singapore",
  "Manchester",
  "Zagreb",
  "Sion",
  "Berlin",
  "Miami",
];

const spotifyPlaylists = [
  {
    id: "01",
    title: "SLY'D RNB Playlist",
    embedUrl:
      "https://open.spotify.com/embed/playlist/5ET5SEt2lhtNVE1qzukYnc?utm_source=generator&theme=0",
  },
  {
    id: "02",
    title: "SLY'D Turn up Playlist",
    embedUrl:
      "https://open.spotify.com/embed/playlist/0cxc2fz6YHM3LXh4uxDuiS?utm_source=generator&theme=0",
  },
  {
    id: "03",
    title: "SLY'D Rap & Trap FR Playlist",
    embedUrl:
      "https://open.spotify.com/embed/playlist/1zz1Uo5vfJKrUAlxEp5zJ7?utm_source=generator&theme=0",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function SpotifyEmbedCard({
  title,
  embedUrl,
}: {
  title: string;
  embedUrl: string;
}) {
  return (
    <div className="group w-full rounded-[1.25rem] border border-white/10 bg-[#0b0b0d] p-2 md:rounded-[1.6rem] md:p-4">
      <div className="mb-2 flex items-center justify-between gap-2 md:mb-3 md:gap-3">
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/60 md:text-[11px] md:tracking-[0.28em]">
          {title}
        </p>

        <div className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/50 md:px-2.5 md:text-[9px] md:tracking-[0.22em]">
          Spotify
        </div>
      </div>

      <div className="overflow-hidden rounded-[1rem] border border-white/10 bg-[#121212]">
        <iframe
          title={title}
          src={embedUrl}
          width="100%"
          height="320"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="block w-full md:h-[352px]"
        />
      </div>
    </div>
  );
}

export default function Home() {
    const showLiveSection = false; // 👈 toggle ici
    const [activeVideo, setActiveVideo] = useState<null | {
    title: string;
    videoSrc: string;
  }>(null);
  return (
    <main className="bg-[#050505] text-white selection:bg-[#B51F24] selection:text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[78px] max-w-[1720px] items-center justify-between px-4 md:h-[88px] md:px-10">
          <div className="flex min-w-0 items-center gap-3 md:gap-5">
            <Link href="#home" className="shrink-0">
              <div className="flex h-9 w-[110px] items-center overflow-hidden md:h-11 md:w-[140px]">
                <img
                  src="/press-kit/logo-slyd.png"
                  alt="Sly'D logo"
                  className="h-[175%] w-auto max-w-none shrink-0 object-contain object-left md:h-[185%]"
                />
              </div>
            </Link>

            <div className="hidden whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.34em] text-white/48 xl:block">
              International DJ • Producer 
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-8 xl:gap-10">
            <nav className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.30em] text-white/78 lg:flex xl:gap-10">
              <a href="#about" className="transition hover:text-white">
                About
              </a>
              <a href="#clubs" className="transition hover:text-white">
                Clubs
              </a>
              <a href="#sound" className="transition hover:text-white">
                Sound
              </a>
      {showLiveSection && (
  <a href="#live" className="transition hover:text-white">
    Live
  </a>
)}
              <a href="#gallery" className="transition hover:text-white">
                Gallery
              </a>
              <a href="#spotify" className="transition hover:text-white">
                Spotify
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </nav>

            <a
              href="#contact"
              className="rounded-full bg-[#D9252A] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#e32d32] md:px-7 md:py-3 md:text-xs md:tracking-[0.24em]"
            >
              Booking
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="scroll-mt-24 relative isolate overflow-hidden pt-24 md:pt-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(181,31,36,0.28),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(181,31,36,0.14),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:34px_34px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#200204]/25 via-transparent to-[#050505]" />

        <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-8 px-4 pb-6 md:grid-cols-[1.02fr_0.98fr] md:gap-10 md:px-6 md:pb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.12 }}
            className="relative order-1 md:order-2"
          >
            <div className="absolute -left-8 top-12 h-32 w-32 rounded-full bg-[#D9252A]/25 blur-3xl" />
            <div className="absolute -right-6 bottom-8 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5 p-2.5 shadow-2xl shadow-black/40 backdrop-blur-sm md:rounded-[2rem] md:p-3">
              <img
                src="/press-kit/2025-12-29-22-31-08-761.jpg"
                alt="Sly'D hero visual"
                className="h-[48svh] w-full rounded-[1.2rem] object-cover object-center md:h-[76svh] md:rounded-[1.4rem]"
              />

              <div className="absolute inset-0 rounded-[1.6rem] bg-gradient-to-t from-black/55 via-transparent to-transparent md:rounded-[2rem]" />

              <div className="absolute inset-x-4 bottom-4 rounded-[1.1rem] border border-white/10 bg-black/50 p-4 backdrop-blur-md md:inset-x-8 md:bottom-8 md:rounded-[1.5rem] md:p-5">
                <div className="text-[9px] uppercase tracking-[0.22em] text-[#ff7a7e] md:text-[11px] md:tracking-[0.28em]">
                  DJ • Producer • Curator
                </div>
                <div className="mt-2 text-lg font-black uppercase leading-tight md:text-3xl">
                  Paris to international stages
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            transition={{ duration: 0.75 }}
            className="relative z-10 order-2 md:order-1"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/70 backdrop-blur-sm md:mb-5 md:px-4 md:py-2 md:text-[11px] md:tracking-[0.28em]">
              <Disc3 className="h-3 w-3 text-[#B51F24] md:h-3.5 md:w-3.5" />
              Press kit cinematic experience
            </div>

            <h1 className="max-w-4xl text-[2.45rem] font-black uppercase leading-[0.92] tracking-tight sm:text-5xl md:text-7xl xl:text-[7rem]">
              DJ SLY&apos;D
              <span className="block text-[#D9252A]">THE ECLECTIC</span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/72 md:mt-6 md:text-lg md:leading-7">
              Hip-hop, RnB, afro, baile funk, future beats and club-ready
              transitions. A premium open-format identity designed for nightlife,
              lifestyle events and high-energy bookings.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5 md:mt-8 md:gap-3">
              <a
                href="#contact"
                className="rounded-full bg-[#D9252A] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[#e32d32] md:px-7 md:py-3 md:text-sm md:tracking-[0.22em]"
              >
                Book now
              </a>

              <Link
                href="/gallery"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/30 hover:bg-white/10 md:px-7 md:py-3 md:text-sm md:tracking-[0.22em]"
              >
                Open gallery
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 md:mt-12 md:gap-4 md:grid-cols-4">
              <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm md:rounded-[1.8rem] md:p-5">
                <div className="text-xl font-black uppercase leading-none text-[#D9252A] md:text-3xl">
                  20+
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/50 md:mt-3 md:text-sm md:tracking-[0.22em]">
                  Years of career
                </div>
              </div>

              <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm md:rounded-[1.8rem] md:p-5">
                <div className="text-xl font-black uppercase leading-none text-[#D9252A] md:text-3xl">
                  FR + INTL
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/50 md:mt-3 md:text-sm md:tracking-[0.22em]">
                  Bookings
                </div>
              </div>

              <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm md:rounded-[1.4rem] md:p-5">
                <div className="text-[1rem] font-black uppercase leading-[1.02] text-[#D9252A] text-left md:text-2xl">
                  OPEN
                  <br />
                  FORMAT
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/50 md:mt-3 md:text-sm md:tracking-[0.22em]">
                  Signature sound
                </div>
              </div>

              <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm md:rounded-[1.8rem] md:p-5">
                <div className="text-xl font-black uppercase leading-none text-[#D9252A] md:text-3xl">
                  150+
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/50 md:mt-3 md:text-sm md:tracking-[0.22em]">
                  Bookings in 2025
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-24 relative overflow-hidden px-4 py-14 md:px-6 md:py-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(181,31,36,0.10),transparent_25%),radial-gradient(circle_at_80%_90%,rgba(255,255,255,0.03),transparent_20%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D9252A] md:mb-6 md:text-xs md:tracking-[0.35em]">
            About
          </div>

          <div className="grid gap-8 md:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
            <div className="relative">
              <div className="absolute left-0 top-2 h-full w-[2px] bg-gradient-to-b from-[#D9252A] via-[#D9252A]/30 to-transparent" />

              <div className="pl-4 md:pl-6">
                <h2 className="text-3xl font-black uppercase leading-[0.95] sm:text-4xl md:text-6xl md:leading-[0.92]">
                  More than a DJ.
                  <br />
                  A cultural signal.
                </h2>

                <div className="mt-7 md:mt-10">
                  <div className="mb-2 text-[9px] uppercase tracking-[0.26em] text-white/30 md:mb-3 md:text-[10px] md:tracking-[0.35em]">
                    Signature
                  </div>

                  <p className="text-lg font-semibold leading-[1.35] text-white sm:text-xl md:text-3xl md:leading-[1.4]">
                    “My only goal is to surprise people.”
                  </p>

                  <div className="mt-3 h-px w-16 bg-[#D9252A] md:mt-4 md:w-20" />
                </div>

                <p className="mt-6 max-w-md text-sm leading-6 text-white/58 md:mt-8 md:text-lg md:leading-8">
                  A sound built between nightlife, culture and premium
                  environments, designed to connect instantly with the crowd
                  while fitting seamlessly into brand-driven experiences.
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5 md:mt-8 md:gap-3">
                  {[
                    "Open Format",
                    "Hip-Hop",
                    "RnB",
                    "Afro",
                    "Baile Funk",
                    "Future Beat",
                    "UKG",
                  ].map((tag) => (
                    <div
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-white/60 md:px-4 md:py-2 md:text-[11px] md:tracking-[0.28em]"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm md:rounded-[2rem] md:p-10">
              <div className="space-y-4 text-sm leading-6 text-white/72 md:space-y-6 md:text-lg md:leading-8">
                <p>
                  DJ SLY&apos;D is a Paris-based DJ with over 17 years of
                  experience, known for delivering high-energy, crowd-driven
                  performances built on a strong open-format identity.
                </p>

                <p>
                  His sound moves naturally between hip-hop, RnB, afrobeat,
                  baile funk and future sounds, blending genres with precision
                  and instinct to create seamless transitions and maintain
                  constant energy on the dancefloor.
                </p>

                <p>
                  From Paris nightlife to international stages, SLY&apos;D has
                  built a profile at the intersection of club culture, lifestyle
                  events and premium brand experiences.
                </p>

                <p>
                  Each set is designed as a journey — reading the room, building
                  tension and delivering impact at the right moment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLUBS */}
      <section
        id="clubs"
        className="scroll-mt-24 bg-[#0a0a0a] px-4 py-14 md:px-6 md:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-4xl md:mb-14">
            <h2 className="text-3xl font-black md:text-5xl">CLUB JOURNEY</h2>
            <p className="mt-4 text-sm leading-6 text-white/62 md:mt-5 md:text-lg md:leading-8">
              From Paris nightlife staples to international bookings,
              SLY&apos;D has built a route shaped by dancefloors, crowd
              connection and versatile open-format energy. His journey moves
              across club institutions, lifestyle venues and global stages where
              adaptability and musical identity matter just as much as
              performance.
            </p>
          </div>

          <div className="grid gap-8 md:gap-16 md:grid-cols-2">
            <div>
              <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold md:mb-6 md:text-3xl">
                <MapPin className="h-5 w-5 text-[#D9252A] md:h-6 md:w-6" />
                France
              </h3>

              <div className="grid grid-cols-2 gap-3 text-sm text-gray-300 md:gap-4 md:text-base">
                {france.map((club) => (
                  <div
                    key={club}
                    className="rounded-lg border border-white/10 p-2.5 md:p-3"
                  >
                    {club}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold md:mb-6 md:text-3xl">
                <Globe2 className="h-5 w-5 text-[#D9252A] md:h-6 md:w-6" />
                International
              </h3>

              <div className="grid grid-cols-2 gap-3 text-sm text-gray-300 md:gap-4 md:text-base">
                {international.map((club) => (
                  <div
                    key={club}
                    className="rounded-lg border border-white/10 p-2.5 md:p-3"
                  >
                    {club}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
{/* LIVE VIDEOS */}
{showLiveSection && (
<section
  id="live"
  className="scroll-mt-24 relative overflow-hidden bg-[#070707] px-4 py-14 md:px-6 md:py-24"
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(181,31,36,0.12),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.03),transparent_22%)]" />

  <div className="relative mx-auto max-w-7xl">
    <div className="mb-8 grid gap-5 md:mb-12 md:gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
      <div>
        <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D9252A] md:mb-4 md:text-xs md:tracking-[0.35em]">
          Live
        </div>

        <h2 className="max-w-4xl text-3xl font-black uppercase leading-[0.95] md:text-5xl xl:text-6xl">
          See the energy
          <br />
          in motion
        </h2>
      </div>

      <div className="max-w-xl lg:pt-2">
        <p className="text-sm leading-6 text-white/60 md:text-lg md:leading-8">
          A curated selection of live moments capturing crowd reaction,
          performance presence and the premium atmosphere behind the SLY&apos;D
          experience.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-3 lg:auto-rows-[240px]">
      {liveVideos.map((video) => (
        <button
          key={video.id}
          type="button"
          onClick={() =>
            setActiveVideo({
              title: video.title,
              videoSrc: video.videoSrc,
            })
          }
          className={`${video.size} group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 text-left transition duration-300 hover:border-[#D9252A]/40 hover:shadow-[0_0_30px_rgba(217,37,42,0.12)] md:rounded-[2rem]`}
        >
          <img
            src={video.poster}
            alt={video.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_45%)]" />

          <div className="absolute left-4 top-4 flex items-center gap-2 md:left-5 md:top-5">
            <div className="rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/75 backdrop-blur-sm md:text-[10px] md:tracking-[0.24em]">
              {video.tag}
            </div>

            <div className="rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55 backdrop-blur-sm md:text-[10px]">
              {video.duration}
            </div>
          </div>

          <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 md:inset-x-5 md:bottom-5">
            <div>
              <div className="text-lg font-black uppercase leading-tight text-white md:text-2xl">
                {video.title}
              </div>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#D9252A]/90 text-white shadow-lg shadow-black/30 transition duration-300 group-hover:scale-105 group-hover:bg-[#e32d32] md:h-14 md:w-14">
              <Play className="ml-0.5 h-5 w-5 fill-current md:h-6 md:w-6" />
            </div>
          </div>
        </button>
      ))}
    </div>
  </div>
</section>
)}
      {/* GALLERY */}
      <section
        id="gallery"
        className="scroll-mt-24 mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-32"
      >
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:mb-16 md:gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D9252A] md:mb-4 md:text-xs md:tracking-[0.35em]">
              Gallery
            </div>
            <h2 className="text-3xl font-black uppercase leading-[0.95] md:text-6xl">
              MORE THAN A DJ
            </h2>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:text-white md:text-sm md:tracking-[0.28em]"
          >
            Open full gallery <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-3 md:grid-cols-4 md:auto-rows-[220px] md:gap-4">
          {photos.map((photo) => (
            <Link
              key={photo.src}
              href="/gallery"
              className={`${photo.size} group relative block overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/5 md:rounded-[2rem]`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 md:inset-x-5 md:bottom-5 md:gap-4">
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/90 md:text-sm md:tracking-[0.24em]">
                  {photo.alt}
                </div>

                <div className="rounded-full border border-white/15 bg-black/35 p-2.5 backdrop-blur-sm md:p-3">
                  <ArrowUpRight className="h-3.5 w-3.5 text-white/85 md:h-4 md:w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SOUND */}
      <section
        id="sound"
        className="scroll-mt-24 bg-[#0a0a0a] px-4 py-14 md:px-6 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D9252A] md:text-xs md:tracking-[0.35em]">
                Sound
              </div>

              <h2 className="mt-3 text-3xl font-black uppercase leading-[0.95] md:mt-4 md:text-6xl md:leading-[0.92]">
                SLY&apos;D ON SOUNDCLOUD
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-6 text-white/65 md:mt-8 md:space-y-5 md:text-base md:leading-7">
                <p>
                  Beyond the club, SLY&apos;D extends his musical identity
                  through curated mixes, edits and live-driven selections built
                  to capture energy, tension and release.
                </p>

                <p>
                  Each set blends hip-hop, RnB, afro, baile funk and future
                  sounds into seamless transitions designed for real dancefloor
                  impact.
                </p>

                <p>
                  From warm-up moods to peak-time energy, this is where the full
                  range of the sound comes through.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3 md:mt-10">
                <a
                  href="https://soundcloud.com/dj-slyd"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#D9252A] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[#e32d32] md:px-6 md:py-3 md:text-sm md:tracking-[0.22em]"
                >
                  Explore SoundCloud
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[#D9252A]/20 blur-3xl" />
              <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-3 backdrop-blur-sm md:rounded-[2rem] md:p-4">
                <iframe
                  title="Sly'D SoundCloud Player"
                  width="100%"
                  height="260"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/dj-slyd&color=%23b51f24&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                  className="rounded-xl md:h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* SPOTIFY */}
{/* SPOTIFY */}
<section
  id="spotify"
  className="scroll-mt-24 relative overflow-hidden bg-black px-4 pb-10 pt-14 md:px-6 md:pb-16 md:pt-24"
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(29,185,84,0.09),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.03),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(29,185,84,0.05),transparent_30%)]" />

  <div className="relative mx-auto max-w-7xl">
    {/* HEADER */}
    <div className="grid gap-5 md:gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-start">
      <div>
        <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1DB954] md:mb-4 md:text-xs md:tracking-[0.4em]">
          Spotify
        </div>

        <h2 className="max-w-3xl text-[2rem] font-black uppercase leading-[0.95] tracking-tight sm:text-4xl md:text-5xl xl:text-6xl">
          Playlist Selection
        </h2>
      </div>

      <div className="max-w-xl lg:pt-2">
        <p className="text-sm leading-6 text-white/60 md:text-lg md:leading-8">
          Curated playlists that extend SLY&apos;D&apos;s musical universe
          beyond the dancefloor and give bookers, partners and media a sharper
          feel for the sound.
        </p>
      </div>
    </div>

    {/* GRID */}
    <div className="mt-6 grid grid-cols-1 gap-3 md:mt-10 md:gap-6 xl:grid-cols-3">
      {spotifyPlaylists.map((playlist) => (
        <div
          key={playlist.id}
          className="group relative w-full overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,#0b0b0d_0%,#050505_100%)] p-2.5 transition duration-300 hover:border-[#1DB954]/30 hover:shadow-[0_0_30px_rgba(29,185,84,0.08)] md:rounded-[1.7rem] md:p-4"
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(29,185,84,0.08),transparent_38%)]" />

          {/* TOP BAR */}
          <div className="relative mb-2 flex items-center justify-between gap-2 md:mb-3 md:gap-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/62 md:text-[11px] md:tracking-[0.28em]">
              {playlist.title}
            </p>

            <div className="shrink-0 rounded-full border border-[#1DB954]/35 bg-[#1DB954]/10 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#1DB954] md:px-3 md:text-[9px] md:tracking-[0.22em]">
              Spotify
            </div>
          </div>

          {/* PLAYER WRAPPER */}
          <div className="relative overflow-hidden rounded-[1rem] border border-white/10 bg-black md:rounded-[1.2rem]">
            <iframe
              title={playlist.title}
              src={playlist.embedUrl}
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="block h-[152px] w-full md:h-[352px]"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* BRANDS */}
<section
  id="brands"
  className="scroll-mt-24 relative overflow-hidden bg-black px-4 py-14 md:px-8 md:py-24"
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(181,31,36,0.14),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(181,31,36,0.06),transparent_22%)]" />
  <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:34px_34px]" />

  <div className="relative mx-auto max-w-[1200px]">
    <div className="grid gap-6 md:gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
      <div>
        <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D9252A] md:mb-4 md:text-xs md:tracking-[0.36em]">
          Collabs & Brands
        </div>

        <h2 className="max-w-2xl text-3xl font-black uppercase leading-[1.02] tracking-tight md:text-4xl xl:text-[3.4rem]">
          Brand-safe. Culture-led.
          <br />
          Premium-ready.
        </h2>
      </div>

      <div className="xl:pt-2">
        <p className="max-w-xl text-sm leading-6 text-white/70 md:text-lg md:leading-8">
          Positioned at the intersection of nightlife, culture and premium
          brand environments, SLY’D delivers experiences that translate
          seamlessly from club energy to high-end activations.
        </p>

        <p className="mt-3 max-w-xl text-sm leading-6 text-white/60 md:mt-4 md:text-lg md:leading-8">
          His ability to read the room, adapt his sound and align with brand
          identity makes him a strong fit for fashion, sportswear, media and
          lifestyle collaborations.
        </p>
      </div>
    </div>

    <div className="mt-6 flex flex-wrap gap-2 md:mt-8 md:gap-2.5">
      {["Fashion", "Sportswear", "Media", "Premium Events"].map((item) => (
        <div
          key={item}
          className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.2em] text-white/55 md:px-4 md:text-[9px] md:tracking-[0.28em]"
        >
          {item}
        </div>
      ))}
    </div>

    <div className="mt-6 grid gap-4 md:mt-8 xl:grid-cols-[1.15fr_0.85fr] items-stretch">
      
      {/* CARDS */}
      <div className="grid grid-cols-2 gap-3 md:gap-4 items-stretch">
        
        <div className="group h-full rounded-[1.2rem] border border-white/10 bg-white/[0.015] p-4 backdrop-blur-sm transition hover:border-[#D9252A]/40 hover:bg-white/[0.03] hover:shadow-[0_0_30px_rgba(217,37,42,0.12)] md:rounded-[1.4rem] md:p-5 flex flex-col justify-between">
          <div>
            <div className="text-[8px] uppercase tracking-[0.22em] text-white/35 md:text-[9px] md:tracking-[0.28em]">
              Brand / Media
            </div>
            <div className="mt-5 text-base font-black uppercase leading-tight md:mt-7 md:text-2xl">
              Dior
            </div>
          </div>
          <div className="mt-4 h-px w-[65%] bg-[#B51F24]/60 transition group-hover:w-[80%]" />
        </div>

        <div className="group h-full rounded-[1.2rem] border border-white/10 bg-white/[0.015] p-4 backdrop-blur-sm transition hover:border-[#D9252A]/40 hover:bg-white/[0.03] hover:shadow-[0_0_30px_rgba(217,37,42,0.12)] md:rounded-[1.4rem] md:p-5 flex flex-col justify-between">
          <div>
            <div className="text-[8px] uppercase tracking-[0.22em] text-white/35 md:text-[9px] md:tracking-[0.28em]">
              Brand / Media
            </div>
            <div className="mt-5 text-base font-black uppercase leading-tight md:mt-7 md:text-2xl">
              Airness
            </div>
          </div>
          <div className="mt-4 h-px w-[65%] bg-[#B51F24]/60 transition group-hover:w-[80%]" />
        </div>

        <div className="group h-full rounded-[1.2rem] border border-white/10 bg-white/[0.015] p-4 backdrop-blur-sm transition hover:border-[#D9252A]/40 hover:bg-white/[0.03] hover:shadow-[0_0_30px_rgba(217,37,42,0.12)] md:rounded-[1.4rem] md:p-5 flex flex-col justify-between">
          <div>
            <div className="text-[8px] uppercase tracking-[0.22em] text-white/35 md:text-[9px] md:tracking-[0.28em]">
              Brand / Media
            </div>
            <div className="mt-5 text-base font-black uppercase leading-tight md:mt-7 md:text-2xl">
              Foot Locker
            </div>
          </div>
          <div className="mt-4 h-px w-[65%] bg-[#B51F24]/60 transition group-hover:w-[80%]" />
        </div>

        <div className="group h-full rounded-[1.2rem] border border-white/10 bg-white/[0.015] p-4 backdrop-blur-sm transition hover:border-[#D9252A]/40 hover:bg-white/[0.03] hover:shadow-[0_0_30px_rgba(217,37,42,0.12)] md:rounded-[1.4rem] md:p-5 flex flex-col justify-between">
          <div>
            <div className="text-[8px] uppercase tracking-[0.22em] text-white/35 md:text-[9px] md:tracking-[0.28em]">
              Brand / Media
            </div>
            <div className="mt-5 text-base font-black uppercase leading-tight md:mt-7 md:text-2xl">
              Mouv&apos; Radio
            </div>
          </div>
          <div className="mt-4 h-px w-[65%] bg-[#B51F24]/60 transition group-hover:w-[80%]" />
        </div>

      </div>

      {/* RIGHT PANEL */}
      <div className="h-full rounded-[1.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(60,5,8,0.2)_0%,rgba(255,255,255,0.02)_100%)] p-5 backdrop-blur-sm md:rounded-[1.4rem] md:p-6 flex flex-col justify-between">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff676c] md:text-xs md:tracking-[0.34em]">
            Why it fits
          </div>

          <h3 className="mt-4 text-lg font-black uppercase leading-[1.2] md:mt-5 md:text-2xl">
            A strong crossover between nightlife credibility and brand elegance.
          </h3>

          <div className="mt-4 space-y-3 text-sm leading-6 text-white/60 md:mt-5 md:space-y-4">
            <p>• Curated image with premium visual identity.</p>
            <p>• Open-format sets adaptable to public and private formats.</p>
            <p>
              • Strong fit for launch parties, in-store events, media activations
              and cultural collaborations.
            </p>
            <p>
              • Able to bridge street culture, lifestyle positioning and
              elevated event atmospheres.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-24 bg-black px-4 pb-16 pt-10 md:px-6 md:pb-32 md:pt-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D9252A] md:mb-6 md:text-xs md:tracking-[0.35em]">
            Contact
          </div>

          <div className="grid gap-8 md:gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div>
              <h2 className="max-w-3xl text-3xl font-black uppercase leading-[0.95] sm:text-4xl md:text-7xl">
                Ready to move the room?
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-6 text-white/60 md:mt-8 md:text-xl md:leading-9">
                For booking inquiries, private events, club nights or branded
                experiences, contact SLY&apos;D directly.
              </p>
            </div>

            <div className="grid gap-3 md:gap-5">
              <a
                href="mailto:dj-slyd@hotmail.com"
                className="group rounded-[1.3rem] border border-white/10 bg-white/[0.02] px-4 py-4 transition hover:border-white/20 hover:bg-white/[0.05] md:rounded-[2rem] md:px-6 md:py-6"
              >
                <div className="flex items-center gap-3 md:gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3a0b0d] text-[#ff7a7e] md:h-16 md:w-16 md:rounded-2xl">
                    <Mail className="h-5 w-5 md:h-7 md:w-7" />
                  </div>

                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.24em] text-white/35 md:text-xs md:tracking-[0.35em]">
                      Mail
                    </div>
                    <div className="mt-1 break-all text-sm font-black uppercase leading-5 md:mt-2 md:text-2xl">
                      dj-slyd@hotmail.com
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="tel:+33663907888"
                className="group rounded-[1.3rem] border border-white/10 bg-white/[0.02] px-4 py-4 transition hover:border-white/20 hover:bg-white/[0.05] md:rounded-[2rem] md:px-6 md:py-6"
              >
                <div className="flex items-center gap-3 md:gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3a0b0d] text-[#ff7a7e] md:h-16 md:w-16 md:rounded-2xl">
                    <Phone className="h-5 w-5 md:h-7 md:w-7" />
                  </div>

                  <div>
                    <div className="text-[10px] uppercase tracking-[0.24em] text-white/35 md:text-xs md:tracking-[0.35em]">
                      Bookings
                    </div>
                    <div className="mt-1 text-sm font-black uppercase leading-5 md:mt-2 md:text-2xl">
                      +33 6 63 90 78 88
                    </div>
                  </div>
                </div>
              </a>

              <div className="grid gap-3 sm:grid-cols-2 md:gap-5">
                <a
                  href="https://instagram.com/djslyd"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[1.3rem] border border-white/10 bg-white/[0.02] px-4 py-4 transition hover:border-white/20 hover:bg-white/[0.05] md:rounded-[2rem] md:px-6 md:py-6"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3a0b0d] text-[#ff7a7e] md:h-14 md:w-14 md:rounded-2xl">
                      <Instagram className="h-5 w-5 md:h-6 md:w-6" />
                    </div>

                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white md:text-base md:tracking-[0.28em]">
                      Instagram
                    </div>
                  </div>
                </a>

                <a
                  href="#sound"
                  className="group rounded-[1.3rem] border border-white/10 bg-white/[0.02] px-4 py-4 transition hover:border-white/20 hover:bg-white/[0.05] md:rounded-[2rem] md:px-6 md:py-6"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3a0b0d] text-[#ff7a7e] md:h-14 md:w-14 md:rounded-2xl">
                      <Music2 className="h-5 w-5 md:h-6 md:w-6" />
                    </div>

                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white md:text-base md:tracking-[0.28em]">
                      SoundCloud
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {activeVideo && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/88 p-4 backdrop-blur-sm md:p-6">
    <div className="relative w-full max-w-5xl">
      <button
        type="button"
        onClick={() => setActiveVideo(null)}
        className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20"
        aria-label="Close video"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black shadow-2xl shadow-black/50 md:rounded-[2rem]">
        <video
          src={activeVideo.videoSrc}
          controls
          autoPlay
          playsInline
          className="block max-h-[80vh] w-full bg-black"
        />
      </div>

      <div className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
        {activeVideo.title}
      </div>
    </div>
  </div>
)}
    </main>
  );
}