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
} from "lucide-react";

const photos = [
  "/press-kit/2025-12-29-22-31-08-761.jpg",
  "/press-kit/20250719_192423.jpg",
  "/press-kit/1000019881.jpg",
  "/press-kit/DSC01685.JPG",
];

const france = [
  "Wanderlust",
  "Palais Maillot",
  "Mix Club",
  "Chez Régine",
  "Grey Club",
];

const international = [
  "Singapore",
  "Berlin",
  "Miami",
  "Manchester",
];

const brands = ["Dior", "Foot Locker", "Airness", "Mouv' Radio"];

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO SPLIT */}

      <section className="min-h-screen grid md:grid-cols-2">

        {/* LEFT */}

        <div className="flex flex-col justify-center px-10 py-20">

          <motion.div
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.8}}
          >
            <h1 className="text-6xl md:text-8xl font-black">
              DJ SLY<span className="text-red-600">'</span>D
            </h1>

            <h2 className="mt-2 text-xl uppercase tracking-[0.3em] text-gray-400">
              The Eclectic
            </h2>

            <p className="mt-6 text-gray-300 max-w-md">
              Hip-Hop • RnB • Afro • Baile Funk • Future Beats
            </p>

            <div className="flex gap-4 mt-10">
              <a
                href="#contact"
                className="bg-red-600 px-6 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-red-700"
              >
                Booking
              </a>

              <Link
                href="/gallery"
                className="border px-6 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black"
              >
                Gallery
              </Link>
            </div>
          </motion.div>

          {/* STATS */}

          <div className="mt-16 grid grid-cols-3 gap-6 text-center">

            <div>
              <h3 className="text-3xl font-bold text-red-600">17+</h3>
              <p className="text-gray-400 text-sm mt-1">Years</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-red-600">INTL</h3>
              <p className="text-gray-400 text-sm mt-1">Bookings</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-red-600">Open</h3>
              <p className="text-gray-400 text-sm mt-1">Format</p>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="relative h-[60vh] md:h-full">
          <img
            src="/press-kit/2025-12-29-22-31-08-761.jpg"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/30 to-transparent" />
        </div>

      </section>

      {/* ABOUT */}

      <section className="max-w-6xl mx-auto py-24 px-6">

        <h2 className="text-4xl font-black mb-8">
          About Me
        </h2>

        <p className="text-gray-300 leading-7 max-w-3xl">
          DJ SLY'D is a Paris-based DJ with over 17 years of experience.
          Known for his eclectic style, he blends hip-hop, RnB, afrobeat,
          baile funk and future beats to create high-energy sets.
          His ability to read the crowd and elevate the atmosphere
          makes every performance unique.
        </p>

      </section>

      {/* CLUBS */}

      <section className="bg-[#0a0a0a] py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-black mb-12">
            Club Journey
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <h3 className="text-xl mb-4 flex gap-2">
                <MapPin /> France
              </h3>

              {france.map((club)=>(
                <div key={club} className="text-gray-300 mb-2">
                  {club}
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl mb-4 flex gap-2">
                <Globe2 /> International
              </h3>

              {international.map((club)=>(
                <div key={club} className="text-gray-300 mb-2">
                  {club}
                </div>
              ))}
            </div>

          </div>

        </div>

      </section>

      {/* GALLERY */}

      <section className="max-w-7xl mx-auto py-24 px-6">

        <h2 className="text-4xl font-black mb-10">
          Captured in Motion
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {photos.map((photo)=>(
            <Link key={photo} href="/gallery">
              <img
                src={photo}
                className="rounded-xl hover:scale-105 transition"
              />
            </Link>
          ))}

        </div>

      </section>

      {/* SOUNDCLOUD */}

      <section className="bg-[#0a0a0a] py-24 px-6 text-center">

        <h2 className="text-4xl font-black mb-6">
          SLY'D on SoundCloud
        </h2>

        <p className="text-gray-400 mb-8">
          Listen to SLY'D latest mixes and edits
        </p>

        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/dj-slyd"
        />

      </section>

      {/* SPOTIFY */}

      <section className="py-24 px-6 text-center">

        <h2 className="text-4xl font-black mb-6">
          SLY'D Spotify Playlists
        </h2>

        <p className="text-gray-400 mb-12">
          Discover curated vibes from club energy to smooth sessions
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <iframe src="https://open.spotify.com/embed/playlist/5ET5SEt2lhtNVE1qzukYnc" height="352" />
          <iframe src="https://open.spotify.com/embed/playlist/0cxc2fz6YHM3LXh4uxDuiS" height="352" />
          <iframe src="https://open.spotify.com/embed/playlist/1zz1Uo5vfJKrUAlxEp5zJ7" height="352" />

        </div>

      </section>

      {/* BRANDS */}

      <section className="bg-[#0a0a0a] py-24 px-6 text-center">

        <h2 className="text-4xl font-black mb-12">
          Collaborations
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {brands.map((brand)=>(
            <div key={brand} className="border p-6 rounded-lg">
              {brand}
            </div>
          ))}

        </div>

      </section>

      {/* CONTACT */}

      <section id="contact" className="py-24 px-6 text-center">

        <h2 className="text-4xl font-black mb-10">
          Booking
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">

          <a href="mailto:dj-slyd@hotmail.com" className="border px-6 py-3 rounded-lg">
            <Mail /> Email
          </a>

          <a href="tel:+33663907888" className="border px-6 py-3 rounded-lg">
            <Phone /> Phone
          </a>

          <a href="https://instagram.com/djslyd" className="border px-6 py-3 rounded-lg">
            <Instagram /> Instagram
          </a>

        </div>

      </section>

    </main>
  );
      }  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-16 pt-12 md:px-8 md:pb-20 md:pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(181,31,36,0.18),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.05),transparent_24%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex items-start justify-between gap-6">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#B51F24]">
                Gallery
              </div>
              <h1 className="text-4xl font-black uppercase leading-none md:text-6xl">
                Captured in Motion
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 md:text-lg">
                A curated visual selection from performances, portraits and club
                moments. Click any image to open it full screen.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 md:max-w-3xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-2xl font-black text-[#B51F24]">
                {photos.length}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.22em] text-white/50">
                visuals
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-2xl font-black text-[#B51F24]">Live</div>
              <div className="mt-1 text-xs uppercase tracking-[0.22em] text-white/50">
                performance-driven
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-2xl font-black text-[#B51F24]">
                Portraits
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.22em] text-white/50">
                artist identity
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-8 md:py-14">
        <div className="grid auto-rows-[260px] grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[220px]">
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 text-left ${photo.size}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

              <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75 backdrop-blur-sm">
                {photo.tag}
              </div>

              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                    {photo.alt}
                  </div>
                </div>

                <div className="rounded-full border border-white/15 bg-black/40 p-2 backdrop-blur-sm transition group-hover:scale-105">
                  <Expand className="h-4 w-4 text-white/90" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 px-4 py-6 backdrop-blur-sm">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-full border border-white/15 bg-white/5 p-3 text-white transition hover:bg-white/10"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={showPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/5 p-3 text-white transition hover:bg-white/10"
            aria-label="Previous image"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div className="mx-auto flex max-h-full w-full max-w-6xl flex-col items-center">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/40 shadow-2xl">
              <img
                src={photos[activeIndex].src}
                alt={photos[activeIndex].alt}
                className="max-h-[78vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="mt-5 flex w-full max-w-4xl items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-[#ff7a7e]">
                  {photos[activeIndex].tag}
                </div>
                <div className="mt-2 text-lg font-bold uppercase tracking-[0.08em] text-white">
                  {photos[activeIndex].alt}
                </div>
              </div>

              <div className="text-sm uppercase tracking-[0.22em] text-white/45">
                {activeIndex + 1} / {photos.length}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/5 p-3 text-white transition hover:bg-white/10"
            aria-label="Next image"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </main>
  );
}
export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO SPLIT */}

      <section className="min-h-screen grid md:grid-cols-2">

        {/* LEFT */}

        <div className="flex flex-col justify-center px-10 py-20">

          <motion.div
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.8}}
          >
            <h1 className="text-6xl md:text-8xl font-black">
              DJ SLY<span className="text-red-600">'</span>D
            </h1>

            <h2 className="mt-2 text-xl uppercase tracking-[0.3em] text-gray-400">
              The Eclectic
            </h2>

            <p className="mt-6 text-gray-300 max-w-md">
              Hip-Hop • RnB • Afro • Baile Funk • Future Beats
            </p>

            <div className="flex gap-4 mt-10">
              <a
                href="#contact"
                className="bg-red-600 px-6 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-red-700"
              >
                Booking
              </a>

              <Link
                href="/gallery"
                className="border px-6 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black"
              >
                Gallery
              </Link>
            </div>
          </motion.div>

          {/* STATS */}

          <div className="mt-16 grid grid-cols-3 gap-6 text-center">

            <div>
              <h3 className="text-3xl font-bold text-red-600">17+</h3>
              <p className="text-gray-400 text-sm mt-1">Years</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-red-600">INTL</h3>
              <p className="text-gray-400 text-sm mt-1">Bookings</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-red-600">Open</h3>
              <p className="text-gray-400 text-sm mt-1">Format</p>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="relative h-[60vh] md:h-full">
          <img
            src="/press-kit/2025-12-29-22-31-08-761.jpg"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/30 to-transparent" />
        </div>

      </section>

      {/* ABOUT */}

      <section className="max-w-6xl mx-auto py-24 px-6">

        <h2 className="text-4xl font-black mb-8">
          About Me
        </h2>

        <p className="text-gray-300 leading-7 max-w-3xl">
          DJ SLY'D is a Paris-based DJ with over 17 years of experience.
          Known for his eclectic style, he blends hip-hop, RnB, afrobeat,
          baile funk and future beats to create high-energy sets.
          His ability to read the crowd and elevate the atmosphere
          makes every performance unique.
        </p>

      </section>

      {/* CLUBS */}

      <section className="bg-[#0a0a0a] py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-black mb-12">
            Club Journey
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <h3 className="text-xl mb-4 flex gap-2">
                <MapPin /> France
              </h3>

              {france.map((club)=>(
                <div key={club} className="text-gray-300 mb-2">
                  {club}
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl mb-4 flex gap-2">
                <Globe2 /> International
              </h3>

              {international.map((club)=>(
                <div key={club} className="text-gray-300 mb-2">
                  {club}
                </div>
              ))}
            </div>

          </div>

        </div>

      </section>

      {/* GALLERY */}

      <section className="max-w-7xl mx-auto py-24 px-6">

        <h2 className="text-4xl font-black mb-10">
          Captured in Motion
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {photos.map((photo)=>(
            <Link key={photo} href="/gallery">
              <img
                src={photo}
                className="rounded-xl hover:scale-105 transition"
              />
            </Link>
          ))}

        </div>

      </section>

      {/* SOUNDCLOUD */}

      <section className="bg-[#0a0a0a] py-24 px-6 text-center">

        <h2 className="text-4xl font-black mb-6">
          SLY'D on SoundCloud
        </h2>

        <p className="text-gray-400 mb-8">
          Listen to SLY'D latest mixes and edits
        </p>

        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/dj-slyd"
        />

      </section>

      {/* SPOTIFY */}

      <section className="py-24 px-6 text-center">

        <h2 className="text-4xl font-black mb-6">
          SLY'D Spotify Playlists
        </h2>

        <p className="text-gray-400 mb-12">
          Discover curated vibes from club energy to smooth sessions
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <iframe src="https://open.spotify.com/embed/playlist/5ET5SEt2lhtNVE1qzukYnc" height="352" />
          <iframe src="https://open.spotify.com/embed/playlist/0cxc2fz6YHM3LXh4uxDuiS" height="352" />
          <iframe src="https://open.spotify.com/embed/playlist/1zz1Uo5vfJKrUAlxEp5zJ7" height="352" />

        </div>

      </section>

      {/* BRANDS */}

      <section className="bg-[#0a0a0a] py-24 px-6 text-center">

        <h2 className="text-4xl font-black mb-12">
          Collaborations
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {brands.map((brand)=>(
            <div key={brand} className="border p-6 rounded-lg">
              {brand}
            </div>
          ))}

        </div>

      </section>

      {/* CONTACT */}

      <section id="contact" className="py-24 px-6 text-center">

        <h2 className="text-4xl font-black mb-10">
          Booking
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">

          <a href="mailto:dj-slyd@hotmail.com" className="border px-6 py-3 rounded-lg">
            <Mail /> Email
          </a>

          <a href="tel:+33663907888" className="border px-6 py-3 rounded-lg">
            <Phone /> Phone
          </a>

          <a href="https://instagram.com/djslyd" className="border px-6 py-3 rounded-lg">
            <Instagram /> Instagram
          </a>

        </div>

      </section>

    </main>
  );
}
