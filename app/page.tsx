"use client";

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

const brands = ["Dior", "Foot Locker", "Jordan", "Mouv'"];

const spotifyPlaylists = [
  {
    id: "01",
    title: "SLY'D RNB Playlist",
    embedUrl:
      "https://open.spotify.com/embed/playlist/5ET5SEt2lhtNVE1qzukYnc?utm_source=generator",
  },
  {
    id: "02",
    title: "SLY'D Turn up Playlist",
    embedUrl:
      "https://open.spotify.com/embed/playlist/0cxc2fz6YHM3LXh4uxDuiS?utm_source=generator",
  },
  {
    id: "03",
    title: "SLY'D Rap & Trap FR Playlist",
    embedUrl:
      "https://open.spotify.com/embed/playlist/1zz1Uo5vfJKrUAlxEp5zJ7?utm_source=generator",
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
    <div className="group w-full rounded-[1.6rem] border border-white/10 bg-[#0b0b0d] p-3 transition hover:border-white/20 hover:bg-[#111] md:p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/60">
          {title}
        </p>

        <div className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/50">
          Spotify
        </div>
      </div>

      <div className="w-full overflow-hidden rounded-[1.2rem] border border-white/10 bg-[#121212]">
        <iframe
          title={title}
          src={embedUrl}
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="block w-full"
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-[#050505] text-white selection:bg-[#B51F24] selection:text-white">
     <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">
  <div className="mx-auto flex h-[88px] max-w-[1720px] items-center justify-between px-6 md:px-10">
    <div className="flex min-w-0 items-center gap-5">
      <Link href="#home" className="shrink-0">
        <div className="flex h-10 w-[128px] items-center overflow-hidden md:h-11 md:w-[140px]">
          <img
            src="/press-kit/logo-slyd.png"
            alt="Sly'D logo"
            className="h-[185%] w-auto max-w-none shrink-0 object-contain object-left"
          />
        </div>
      </Link>

      <div className="hidden whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.34em] text-white/48 xl:block">
        DJ • Producer • International Energy
      </div>
    </div>

    <div className="flex items-center gap-8 xl:gap-10">
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
        className="rounded-full bg-[#D9252A] px-7 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-[#e32d32]"
      >
        Booking
      </a>
    </div>
  </div>
</header>

      {/* HERO */}
      <section
        id="home"
        className="scroll-mt-24 relative isolate overflow-hidden pt-28 md:pt-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(181,31,36,0.28),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(181,31,36,0.14),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.04),transparent_30%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:34px_34px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#200204]/25 via-transparent to-[#050505]" />

        <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-4 pb-8 md:grid-cols-[1.02fr_0.98fr] md:px-6 md:pb-12">
          <motion.div
  initial="hidden"
  animate="show"
  variants={reveal}
  transition={{ duration: 0.75 }}
  className="relative z-10"
>
  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/70 backdrop-blur-sm">
    <Disc3 className="h-3.5 w-3.5 text-[#B51F24]" />
    Press kit cinematic experience
  </div>

  <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl xl:text-[7rem]">
    DJ SLY&apos;D
    <span className="block text-[#D9252A]">THE ECLECTIC</span>
  </h1>

  <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
    Hip-hop, RnB, afro, baile funk, future beats and club-ready
    transitions. A premium open-format identity designed for nightlife,
    lifestyle events and high-energy bookings.
  </p>

  <div className="mt-8 flex flex-wrap gap-3">
    <a
      href="#contact"
      className="rounded-full bg-[#D9252A] px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:-translate-y-0.5 hover:bg-[#e32d32]"
    >
      Book now
    </a>

    <Link
      href="/gallery"
      className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:border-white/30 hover:bg-white/10"
    >
      Open gallery
    </Link>
  </div>

  <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
    <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
      <div className="text-2xl font-black uppercase text-[#D9252A] md:text-3xl">
        20+
      </div>
      <div className="mt-3 text-sm uppercase tracking-[0.22em] text-white/50">
        Years of career
      </div>
    </div>

    <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
      <div className="text-2xl font-black uppercase text-[#D9252A] md:text-3xl">
        FR + INTL
      </div>
      <div className="mt-3 text-sm uppercase tracking-[0.22em] text-white/50">
        Bookings
      </div>
    </div>

    <div className="min-w-0 rounded-[1.8rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
  <div className="w-full text-center text-xl font-black uppercase leading-[1.05] text-[#D9252A] md:text-2xl">
    OPEN
    <br />
    FORMAT
</div>
      <div className="mt-3 text-sm uppercase tracking-[0.22em] text-white/50">
        Signature sound
      </div>
    </div>

    <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
      <div className="text-2xl font-black uppercase text-[#D9252A] md:text-3xl">
        150+
      </div>
      <div className="mt-3 text-sm uppercase tracking-[0.22em] text-white/50">
        Bookings in 2025
      </div>
    </div>
  </div>
</motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.12 }}
            className="relative"
          >
            <div className="absolute -left-8 top-12 h-32 w-32 rounded-full bg-[#D9252A]/25 blur-3xl" />
            <div className="absolute -right-6 bottom-8 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/40 backdrop-blur-sm">
              <img
                src="/press-kit/2025-12-29-22-31-08-761.jpg"
                alt="Sly'D hero visual"
                className="h-[68svh] w-full rounded-[1.4rem] object-cover object-center md:h-[76svh]"
              />

              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/55 via-transparent to-transparent" />

              <div className="absolute inset-x-8 bottom-8 rounded-[1.5rem] border border-white/10 bg-black/50 p-5 backdrop-blur-md">
                <div className="text-[11px] uppercase tracking-[0.28em] text-[#ff7a7e]">
                  DJ • Producer • Curator
                </div>
                <div className="mt-2 text-2xl font-black uppercase md:text-3xl">
                  Paris to international stages
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-24 relative overflow-hidden px-6 py-24 md:py-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(181,31,36,0.10),transparent_25%),radial-gradient(circle_at_80%_90%,rgba(255,255,255,0.03),transparent_20%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#D9252A]">
            About
          </div>

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="relative">
              <div className="absolute left-0 top-2 h-full w-[2px] bg-gradient-to-b from-[#D9252A] via-[#D9252A]/30 to-transparent" />

              <div className="pl-6">
                <h2 className="text-5xl font-black uppercase leading-[0.92] md:text-6xl">
                  More than a DJ.
                  <br />
                  A cultural signal.
                </h2>

                <div className="mt-10">
                  <div className="mb-3 text-[10px] uppercase tracking-[0.35em] text-white/30">
                    Signature
                  </div>

                  <p className="text-2xl font-semibold leading-[1.4] text-white md:text-3xl">
                    “My only goal is to surprise people.”
                  </p>

                  <div className="mt-4 h-px w-20 bg-[#D9252A]" />
                </div>

                <p className="mt-8 max-w-md text-lg leading-8 text-white/58">
                  A sound built between nightlife, culture and premium
                  environments, designed to connect instantly with the crowd
                  while fitting seamlessly into brand-driven experiences.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {["Open Format", "Hip-Hop", "RnB", "Afro", "Baile Funk","Future Beat","UKG","CARRIBEAN VIBE"].map(
                    (tag) => (
                      <div
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/60"
                      >
                        {tag}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm md:p-10">
              <div className="space-y-6 text-base leading-8 text-white/72 md:text-lg">
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
        className="scroll-mt-24 bg-[#0a0a0a] px-6 py-28 md:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-4xl">
            <h2 className="text-4xl font-black md:text-5xl">CLUB JOURNEY</h2>
            <p className="mt-5 text-lg leading-8 text-white/62">
              From Paris nightlife staples to international bookings,
              SLY&apos;D has built a route shaped by dancefloors, crowd
              connection and versatile open-format energy. His journey moves
              across club institutions, lifestyle venues and global stages where
              adaptability and musical identity matter just as much as
              performance.
            </p>
          </div>

          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h3 className="mb-6 flex items-center gap-3 text-3xl font-bold">
                <MapPin className="text-[#D9252A]" />
                France
              </h3>

              <div className="grid grid-cols-2 gap-4 text-gray-300">
                {france.map((club) => (
                  <div
                    key={club}
                    className="rounded-lg border border-white/10 p-3"
                  >
                    {club}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 flex items-center gap-3 text-3xl font-bold">
                <Globe2 className="text-[#D9252A]" />
                International
              </h3>

              <div className="grid grid-cols-2 gap-4 text-gray-300">
                {international.map((club) => (
                  <div
                    key={club}
                    className="rounded-lg border border-white/10 p-3"
                  >
                    {club}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="scroll-mt-24 mx-auto max-w-7xl px-6 py-32"
      >
        <div className="mb-16 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#D9252A]">
              Gallery
            </div>
            <h2 className="text-5xl font-black uppercase md:text-6xl">
              MORE THAN A DJ
            </h2>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/80 transition hover:text-white"
          >
            Open full gallery <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid auto-rows-[260px] grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[220px]">
          {photos.map((photo) => (
            <Link
              key={photo.src}
              href="/gallery"
              className={`${photo.size} group relative block overflow-hidden rounded-[2rem] border border-white/10 bg-white/5`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                <div className="text-sm font-medium uppercase tracking-[0.24em] text-white/90">
                  {photo.alt}
                </div>

                <div className="rounded-full border border-white/15 bg-black/35 p-3 backdrop-blur-sm">
                  <ArrowUpRight className="h-4 w-4 text-white/85" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SOUND */}
      <section
        id="sound"
        className="scroll-mt-24 bg-[#0a0a0a] px-6 py-28 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D9252A]">
                Sound
              </div>

              <h2 className="mt-4 text-5xl font-black uppercase leading-[0.92] md:text-6xl">
                SLY&apos;D ON SOUNDCLOUD
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-8 text-white/65">
                <p>
                  Beyond the club, SLY&apos;D extends his musical identity
                  through curated mixes, edits and live-driven selections built
                  to capture energy, tension and release.
                </p>

                <p>
                  Each set reflects a deep understanding of crowd dynamics,
                  blending hip-hop, RnB, afro, baile funk and future sounds into
                  seamless transitions designed for real dancefloor impact.
                </p>

                <p>
                  This is where you hear the full range of his sound — from
                  warm-up moods to peak-time energy.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="https://soundcloud.com/dj-slyd"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#D9252A] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:-translate-y-0.5 hover:bg-[#e32d32]"
                >
                  Explore SoundCloud
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[#D9252A]/20 blur-3xl" />
              <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <iframe
                  title="Sly'D SoundCloud Player"
                  width="100%"
                  height="300"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/dj-slyd&color=%23b51f24&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPOTIFY */}
      <section
        id="spotify"
        className="scroll-mt-24 relative overflow-hidden bg-black px-6 pb-12 pt-24 md:pb-16 md:pt-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-start">
            <div>
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-[#D9252A]">
                Spotify
              </div>

              <h2 className="max-w-3xl text-4xl font-black uppercase leading-[0.92] tracking-tight md:text-5xl xl:text-6xl">
                Playlist Selection
              </h2>
            </div>

            <div className="max-w-xl lg:pt-2">
              <p className="text-base leading-7 text-white/58 md:text-lg md:leading-8">
                Curated playlists that extend SLY&apos;D&apos;s musical universe
                beyond the dancefloor and give bookers, partners and media a
                sharper feel for the sound.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 xl:grid-cols-3">
            {spotifyPlaylists.map((playlist) => (
              <SpotifyEmbedCard
                key={playlist.id}
                title={playlist.title}
                embedUrl={playlist.embedUrl}
              />
            ))}
          </div>
        </div>
      </section>

    
      {/* BRANDS */}
{/* BRANDS */}
<section
  id="brands"
  className="scroll-mt-24 relative overflow-hidden bg-black px-6 py-20 md:px-8 md:py-24"
>
  {/* BACKGROUND */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(181,31,36,0.14),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(181,31,36,0.06),transparent_22%)]" />
  <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:34px_34px]" />

  <div className="relative mx-auto max-w-[1200px]">
    {/* TOP */}
    {/* TOP */}
<div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
  <div>
    <div className="mb-4 text-xs font-semibold uppercase tracking-[0.36em] text-[#D9252A]">
      Collabs & Brands
    </div>

    <h2 className="max-w-2xl text-3xl font-black uppercase leading-[1.05] tracking-tight md:text-4xl xl:text-[3.4rem]">
      Brand-safe. Culture-led.
      <br />
      Premium-ready.
    </h2>
  </div>

  <div className="xl:pt-2">
    <p className="max-w-xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
      Positioned at the intersection of nightlife, culture and premium
      brand environments, SLY’D delivers experiences that translate
      seamlessly from club energy to high-end activations.
    </p>

    <p className="mt-4 max-w-xl text-base leading-7 text-white/60 md:text-lg md:leading-8">
      His ability to read the room, adapt his sound and align with brand
      identity makes him a strong fit for fashion, sportswear, media and
      lifestyle collaborations.
    </p>
  </div>
</div>

    {/* TAGS */}
    <div className="mt-8 flex flex-wrap gap-2.5">
      {["Fashion", "Sportswear", "Media", "Premium Events"].map((item) => (
        <div
          key={item}
          className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-1.5 text-[9px] font-medium uppercase tracking-[0.28em] text-white/55"
        >
          {item}
        </div>
      ))}
    </div>

    {/* GRID */}
    <div className="mt-8 grid gap-4 xl:grid-cols-[1fr_1fr_1.15fr]">
      
      {/* LEFT */}
      <div className="grid gap-4">
        <div className="group rounded-[1.4rem] border border-white/10 bg-white/[0.015] p-5 backdrop-blur-sm transition hover:border-[#D9252A]/40 hover:bg-white/[0.03] hover:shadow-[0_0_30px_rgba(217,37,42,0.12)]">
          <div className="text-[9px] uppercase tracking-[0.28em] text-white/35">
            Brand / Media
          </div>
          <div className="mt-7 text-xl font-black uppercase md:text-2xl">
            Dior
          </div>
          <div className="mt-4 h-px w-[65%] bg-[#B51F24]/60 transition group-hover:w-[80%]" />
        </div>

        <div className="group rounded-[1.4rem] border border-white/10 bg-white/[0.015] p-5 backdrop-blur-sm transition hover:border-[#D9252A]/40 hover:bg-white/[0.03] hover:shadow-[0_0_30px_rgba(217,37,42,0.12)]">
          <div className="text-[9px] uppercase tracking-[0.28em] text-white/35">
            Brand / Media
          </div>
          <div className="mt-7 text-xl font-black uppercase md:text-2xl">
            Airness
          </div>
          <div className="mt-4 h-px w-[65%] bg-[#B51F24]/60 transition group-hover:w-[80%]" />
        </div>
      </div>

      {/* MIDDLE */}
      <div className="grid gap-4">
        <div className="group rounded-[1.4rem] border border-white/10 bg-white/[0.015] p-5 backdrop-blur-sm transition hover:border-[#D9252A]/40 hover:bg-white/[0.03] hover:shadow-[0_0_30px_rgba(217,37,42,0.12)]">
          <div className="text-[9px] uppercase tracking-[0.28em] text-white/35">
            Brand / Media
          </div>
          <div className="mt-7 text-xl font-black uppercase md:text-2xl">
            Foot Locker
          </div>
          <div className="mt-4 h-px w-[65%] bg-[#B51F24]/60 transition group-hover:w-[80%]" />
        </div>

        <div className="group rounded-[1.4rem] border border-white/10 bg-white/[0.015] p-5 backdrop-blur-sm transition hover:border-[#D9252A]/40 hover:bg-white/[0.03] hover:shadow-[0_0_30px_rgba(217,37,42,0.12)]">
          <div className="text-[9px] uppercase tracking-[0.28em] text-white/35">
            Brand / Media
          </div>
          <div className="mt-7 text-xl font-black uppercase md:text-2xl">
            Mouv&apos; Radio
          </div>
          <div className="mt-4 h-px w-[65%] bg-[#B51F24]/60 transition group-hover:w-[80%]" />
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(60,5,8,0.2)_0%,rgba(255,255,255,0.02)_100%)] p-6 backdrop-blur-sm">
        <div className="text-xs font-semibold uppercase tracking-[0.34em] text-[#ff676c]">
          Why it fits
        </div>

        <h3 className="mt-5 text-xl font-black uppercase leading-[1.2] md:text-2xl">
          A strong crossover between nightlife credibility and brand elegance.
        </h3>

        <div className="mt-5 space-y-4 text-sm leading-6 text-white/60">
          <p>• Curated image with premium visual identity.</p>
          <p>• Open-format sets adaptable to public and private formats.</p>
          <p>
            • Strong fit for launch parties, in-store events, media activations
            and cultural collaborations.
          </p>
          <p>
            • Able to bridge street culture, lifestyle positioning and elevated
            event atmospheres.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-24 bg-black px-6 pb-28 pt-12 md:pb-32 md:pt-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#D9252A]">
            Contact
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div>
              <h2 className="max-w-3xl text-5xl font-black uppercase leading-[0.95] md:text-7xl">
                Ready to move the room?
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 md:text-xl md:leading-9">
                For booking inquiries, private events, club nights or branded
                experiences, contact SLY&apos;D directly.
              </p>
            </div>

            <div className="grid gap-5">
              <a
                href="mailto:dj-slyd@hotmail.com"
                className="group rounded-[2rem] border border-white/10 bg-white/[0.02] px-6 py-6 transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3a0b0d] text-[#ff7a7e]">
                    <Mail className="h-7 w-7" />
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-[0.35em] text-white/35">
                      Mail
                    </div>
                    <div className="mt-2 break-all text-xl font-black uppercase md:text-2xl">
                      dj-slyd@hotmail.com
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="tel:+33663907888"
                className="group rounded-[2rem] border border-white/10 bg-white/[0.02] px-6 py-6 transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3a0b0d] text-[#ff7a7e]">
                    <Phone className="h-7 w-7" />
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-[0.35em] text-white/35">
                      Bookings
                    </div>
                    <div className="mt-2 text-xl font-black uppercase md:text-2xl">
                      +33 6 63 90 78 88
                    </div>
                  </div>
                </div>
              </a>

              <div className="grid gap-5 sm:grid-cols-2">
                <a
                  href="https://instagram.com/djslyd"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[2rem] border border-white/10 bg-white/[0.02] px-6 py-6 transition hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3a0b0d] text-[#ff7a7e]">
                      <Instagram className="h-6 w-6" />
                    </div>

                    <div className="text-base font-semibold uppercase tracking-[0.28em] text-white">
                      Instagram
                    </div>
                  </div>
                </a>

                <a
                  href="#sound"
                  className="group rounded-[2rem] border border-white/10 bg-white/[0.02] px-6 py-6 transition hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3a0b0d] text-[#ff7a7e]">
                      <Music2 className="h-6 w-6" />
                    </div>

                    <div className="text-base font-semibold uppercase tracking-[0.28em] text-white">
                      SoundCloud
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}