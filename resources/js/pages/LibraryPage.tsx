import {
  Search,
  LayoutGrid,
  List,
  Heart,
  Star,
  Play,
  Monitor,
  Gamepad2,
  Cloud,
  Download,
  Flame,
} from "lucide-react";

import { useState } from "react";

const games = [
  {
    title: "Resident Evil 4",
    genre: "Action • Horror",
    rating: 4.9,
    installed: 85,
    size: "50 GB",
    platform: ["windows", "controller", "cloud"],
    image: "/images/re4.jpg",
    trending: true,
  },
  {
    title: "Cyberpunk 2077",
    genre: "Open World RPG",
    rating: 4.8,
    installed: 72,
    size: "70 GB",
    platform: ["windows", "controller"],
    image: "/images/cyberpunk.jpg",
    trending: false,
  },
  {
    title: "Ghost of Tsushima",
    genre: "Action Adventure",
    rating: 4.9,
    installed: 95,
    size: "65 GB",
    platform: ["windows", "cloud"],
    image: "/images/ghost.jpg",
    trending: true,
  },
  {
    title: "God of War",
    genre: "Adventure",
    rating: 5.0,
    installed: 61,
    size: "90 GB",
    platform: ["windows"],
    image: "/images/gow.jpg",
    trending: false,
  },
];


export default function LibraryPage() {

  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredGames = games.filter((game) => {

    const matchGenre =
      selectedGenre === "All" ||
      game.genre.toLowerCase().includes(selectedGenre.toLowerCase());

    const matchSearch =
      game.title.toLowerCase().includes(search.toLowerCase());

    return matchGenre && matchSearch;

  });

  return (

    <div className="relative z-10 flex h-full gap-6 w-full">

      <div className="absolute left-20 top-20 h-80 w-80 rounded-full bg-red-600/10 blur-[150px]" />

      <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-red-500/10 blur-[180px]" />


      <div className="relative flex h-full gap-6 overflow-hidden bg-[#0d0d0d] p-6">

        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-red-600/10 blur-[150px]" />

        <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-red-500/10 blur-[150px]" />

        {/* ================= LEFT ================= */}

        <div className="flex-1">

          {/* Header */}

          <div className="flex items-start justify-between">

            <div>

              <div className="flex items-center gap-3">

                <h1 className="text-3xl font-bold tracking-wide text-white">
                  MY LIBRARY
                </h1>

                <span className="text-sm text-zinc-500">
                  456 Games
                </span>

              </div>

            </div>

            <div className="flex items-center gap-3">

              {/* Search */}

              <div className="flex items-center rounded-xl border border-white/5 bg-[#171717] px-4 py-3">

                <Search
                  className="mr-3 text-zinc-500"
                  size={18}
                />

                <input
                  type="text"
                  placeholder="Search games..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-56 bg-transparent text-white outline-none placeholder:text-zinc-500"
                />

              </div>

              {/* Grid */}

              <button
                onClick={() => setViewMode("grid")}
                className={`rounded-xl p-3 ${viewMode === "grid"
                  ? "bg-red-600"
                  : "bg-[#171717]"
                  }`}
              >

                <LayoutGrid />

              </button>

              <button
                onClick={() => setViewMode("list")}
                className={`rounded-xl p-3 ${viewMode === "list"
                  ? "bg-red-600"
                  : "bg-[#171717]"
                  }`}
              >

                <List />

              </button>

            </div>

          </div>

          {/* Filter */}

          <div className="mt-8 flex flex-wrap gap-3">

            {[
              "All",
              "Action",
              "RPG",
              "Adventure",
              "Horror",
              "FPS",
            ].map((genre) => (

              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`rounded-xl px-5 py-2 transition ${selectedGenre === genre
                  ? "bg-red-600 text-white"
                  : "bg-[#171717] text-zinc-400 hover:bg-[#222]"
                  }`}
              >
                {genre}
              </button>

            ))}

          </div>

          {/* ================= HERO ================= */}

          <div className="relative mt-8 overflow-hidden rounded-3xl border border-white/5 bg-[#171717]">

            {/* Background */}

            <img
              src="/images/cyberpunk-banner.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-30"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/80 to-transparent" />

            <div className="relative z-10 flex items-center justify-between p-10">

              <div className="max-w-xl">

                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold">

                  <Flame size={16} />

                  Trending

                </div>

                <h1 className="text-5xl font-bold">

                  Cyberpunk 2077

                </h1>

                <p className="mt-3 text-zinc-400">

                  Open World RPG

                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                  <div className="flex items-center gap-2 rounded-xl bg-[#202020] px-4 py-2">

                    <Star className="fill-yellow-400 text-yellow-400" size={16} />

                    4.8

                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-[#202020] px-4 py-2">

                    <Monitor size={16} />

                    Windows

                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-[#202020] px-4 py-2">

                    <Gamepad2 size={16} />

                    Controller

                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-[#202020] px-4 py-2">

                    <Cloud size={16} />

                    Cloud Save

                  </div>

                </div>

                <div className="mt-10 flex gap-4">

                  <button className="flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-500">


                    <Play
                      className="duration-300 group-hover:translate-x-1"
                    />

                    Play Now

                  </button>

                  <button className="rounded-xl border border-white/10 bg-[#202020] p-3 transition transition-all duration-300 hover:scale-110 hover:bg-red-600 active:scale-90">

                    <Heart />

                  </button>

                </div>

              </div>

            </div>

          </div>

          <div className="mt-6 grid grid-cols-4 gap-5">

            <div className="rounded-2xl border border-white/5 bg-[#171717] p-5">
              <p className="text-sm text-zinc-500">Total Games</p>
              <h1 className="mt-3 text-4xl font-bold">456</h1>
            </div>

            <div className="rounded-2xl border border-white/5 bg-[#171717] p-5">
              <p className="text-sm text-zinc-500">Installed</p>
              <h1 className="mt-3 text-4xl font-bold">128</h1>
            </div>

            <div className="rounded-2xl border border-white/5 bg-[#171717] p-5">
              <p className="text-sm text-zinc-500">Hours Played</p>
              <h1 className="mt-3 text-4xl font-bold">2,148</h1>
            </div>

            <div className="rounded-2xl border border-white/5 bg-[#171717] p-5">
              <p className="text-sm text-zinc-500">Achievements</p>
              <h1 className="mt-3 text-4xl font-bold">893</h1>
            </div>

          </div>

          <h2 className="mt-10 mb-5 text-2xl font-bold">
            Continue Playing
          </h2>

          <div className="grid grid-cols-3 gap-5">


            {/* isi 3 card */}

          </div>

          {/* Game Grid nanti di sini */}

          <div className={`mt-8 gap-6 ${viewMode === "grid"
            ? "grid grid-cols-4"
            : "flex flex-col"
            }`}>

            {filteredGames.map((game) => (

              <div
                key={game.title}
                className="group overflow-hidden rounded-3xl border border-white/5 bg-[#171717] transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40 hover:shadow-[0_0_40px_rgba(239,68,68,.25)]"
              >

                {/* IMAGE */}

                <div className="relative overflow-hidden">

                  <img
                    src={game.image}
                    className="h-72 w-full object-cover duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent" />

                  {game.trending && (

                    <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-red-600 px-3 py-1 text-xs">

                      <Flame size={14} />

                      Trending

                    </div>

                  )}

                  <button className="absolute right-3 top-3 rounded-full bg-black/60 p-2 backdrop-blur hover:bg-red-600">

                    <Heart size={16} />

                  </button>

                </div>

                {/* CONTENT */}

                <div className="space-y-4 p-5">

                  <div>

                    <h2 className="font-bold text-lg">

                      {game.title}

                    </h2>

                    <p className="text-sm text-zinc-500">

                      {game.genre}

                    </p>

                  </div>

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-1">

                      <Star
                        size={15}
                        className="fill-yellow-400 text-yellow-400"
                      />

                      {game.rating}

                    </div>

                    <span className="text-sm text-zinc-500">

                      {game.size}

                    </span>

                  </div>

                  {/* INSTALL */}

                  <div>

                    <div className="mb-2 flex justify-between text-xs text-zinc-500">

                      <span>Installed</span>

                      <span>{game.installed}%</span>

                    </div>

                    <div className="h-2 rounded-full bg-zinc-800">

                      <div
                        style={{ width: `${game.installed}%` }}
                        className="h-full rounded-full bg-red-500"
                      />

                    </div>

                  </div>

                  {/* PLATFORM */}

                  <div className="flex items-center justify-between">

                    <div className="flex gap-3">

                      <Monitor size={17} />

                      <Gamepad2 size={17} />

                      <Cloud size={17} />

                    </div>

                    <Download
                      size={17}
                      className="text-zinc-500"
                    />

                  </div>

                  <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-semibold duration-300 hover:bg-red-500">

                    <Play size={18} />

                    Play Game

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* ================= RIGHT PANEL ================= */}

        <div className="w-[320px] space-y-6">

          {/* ================= Wishlist ================= */}

          <div className="rounded-2xl border border-white/5 bg-[#171717] p-5">

            <div className="mb-5 flex items-center justify-between">

              <h2 className="font-semibold text-white">
                Wishlist
              </h2>

              <button className="text-sm text-red-500 hover:text-red-400">
                View All
              </button>

            </div>

            {[
              {
                title: "Cyberpunk 2077",
                genre: "Open World RPG",
                image: "/images/cyberpunk.jpg",
              },
              {
                title: "Ghost of Tsushima",
                genre: "Action",
                image: "/images/ghost.jpg",
              },
              {
                title: "Black Myth Wukong",
                genre: "Adventure",
                image: "/images/wukong.jpg",
              },
            ].map((game) => (
              <div
                key={game.title}
                className="mb-4 flex items-center gap-3 rounded-xl p-2 transition hover:bg-[#202020]"
              >

                <img
                  src={game.image}
                  className="h-16 w-12 rounded-lg object-cover"
                />

                <div className="flex-1">

                  <h3 className="text-sm font-semibold text-white">

                    {game.title}

                  </h3>

                  <p className="text-xs text-zinc-500">

                    {game.genre}

                  </p>

                </div>

                <Heart
                  size={18}
                  className="fill-red-500 text-red-500"
                />

              </div>
            ))}

          </div>

          {/* ================= Achievement ================= */}

          <div className="rounded-2xl border border-white/5 bg-[#171717] p-5">

            <h2 className="mb-5 font-semibold text-white">

              Achievements

            </h2>

            <div className="rounded-xl bg-[#111] p-4">

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="font-medium">

                    Horror Master

                  </h3>

                  <p className="text-xs text-zinc-500">

                    Complete every horror game

                  </p>

                </div>

                🏆

              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-zinc-800">

                <div className="h-full w-[82%] rounded-full bg-red-500" />

              </div>

              <p className="mt-3 text-xs text-zinc-500">

                41 / 50 Completed

              </p>

            </div>

          </div>

          {/* ================= Storage ================= */}

          <div className="rounded-2xl border border-white/5 bg-[#171717] p-5">

            <h2 className="mb-5 font-semibold">

              Storage

            </h2>

            <div className="h-3 overflow-hidden rounded-full bg-zinc-800">

              <div className="h-full w-[68%] rounded-full bg-red-500" />

            </div>

            <p className="mt-3 text-sm text-zinc-400">

              684 GB / 1 TB Used

            </p>

          </div>

        </div>

      </div>

    </div >
  );
}