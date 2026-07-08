import { Head } from "@inertiajs/react";
import { dashboard } from "@/routes";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import {
    Search,
    Bell,
    UserCircle2,
    Play,
    Heart,
    Star,
} from "lucide-react";

const popularGames = [
    {
        title: "Resident Evil 4",
        image: "/images/re4.jpg",
        rating: "9.6",
    },
    {
        title: "Elden Ring",
        image: "/images/elden.jpg",
        rating: "9.7",
    },
    {
        title: "Cyberpunk 2077",
        image: "/images/cyberpunk.jpg",
        rating: "9.2",
    },
    {
        title: "God of War",
        image: "/images/gow.jpg",
        rating: "9.4",
    },
    {
        title: "Devil May Cry 3",
        image: "/images/dmc3.jpg",
        rating: "9.8",
    },
];

export default function Dashboard() {

    const games = [
        {
            title: "Resident Evil 4",
            genre: "Action Horror",
            rating: "9.6",
            image: "/images/re4.jpg",
        },
        {
            title: "Elden Ring",
            genre: "RPG",
            rating: "9.7",
            image: "/images/elden.jpg",
        },
        {
            title: "Cyberpunk 2077",
            genre: "Open World",
            rating: "9.2",
            image: "/images/cyberpunk.jpg",
        },
        {
            title: "God of War",
            genre: "Adventure",
            rating: "9.4",
            image: "/images/gow.jpg",
        },
        {
            title: "Devil May Cry 3",
            genre: "Hack & Slash",
            rating: "9.8",
            image: "/images/dmc3.jpg",
        },
    ];

    const popularGames = [
        {
            title: "Devil May Cry 5",
            hours: "186 Hours",
            progress: "92%",
        },
        {
            title: "Resident Evil 4",
            hours: "120 Hours",
            progress: "84%",
        },
        {
            title: "Cyberpunk 2077",
            hours: "95 Hours",
            progress: "76%",
        },
    ];

    const stats = [
        {
            title: "Games",
            value: "248",
        },
        {
            title: "Favorites",
            value: "38",
        },
        {
            title: "Completed",
            value: "71%",
        },
    ];

    const recentlyPlayed = [
        {
            title: "Devil May Cry 5",
            time: "2 Hours Ago",
            percent: "92%",
        },
        {
            title: "Resident Evil 4",
            time: "Yesterday",
            percent: "84%",
        },
        {
            title: "Cyberpunk 2077",
            time: "3 Days Ago",
            percent: "76%",
        },
    ];

    const latestNews = [
        "🔥 GTA VI Official Trailer Released",
        "🎮 Black Myth Wukong Wins GOTY",
        "⚔️ Elden Ring DLC Coming Soon",
    ];


    const data = [
        { name: "Completed", value: 71 },
        { name: "Remaining", value: 29 },
    ];

    return (
        <>
            <Head title="Dashboard" />

            <div className="min-h-screen bg-[#0b0b0f] text-white p-6">

                {/* TOPBAR */}
                <div className="flex items-center justify-between mb-8">

                    <div>
                        <h1 className="text-3xl font-bold text-red-500">
                            VYXIAN
                        </h1>

                        <p className="text-gray-400 text-sm">
                            Ultimate Game Collection
                        </p>
                    </div>

                    <div className="flex items-center gap-4">

                        <div className="flex items-center bg-[#18181d] rounded-xl px-4 py-2 w-96">

                            <Search
                                size={18}
                                className="text-gray-500"
                            />

                            <input
                                type="text"
                                placeholder="Search games..."
                                className="ml-3 w-full bg-transparent outline-none"
                            />

                        </div>

                        <Bell className="text-gray-400 cursor-pointer hover:text-red-500 transition" />

                        <UserCircle2
                            size={36}
                            className="text-red-500 cursor-pointer"
                        />

                    </div>

                </div>

                {/* HERO */}

                <div
                    className="relative overflow-hidden rounded-3xl h-[560px] border border-white/10"
                    style={{
                        backgroundImage: "url('/images/dmc-wallpaper.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >

                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

                    <div className="relative grid h-full grid-cols-12">

                        {/* LEFT */}

                        <div className="col-span-8 flex flex-col justify-center px-16">

                            <span className="uppercase tracking-[6px] text-red-500 font-bold">
                                VYXIAN LIBRARY
                            </span>

                            <h1 className="mt-4 text-8xl font-black">
                                VYXIAN
                            </h1>

                            <h2 className="text-7xl font-black text-red-600">
                                LIBRARY
                            </h2>

                            <p className="mt-6 max-w-xl text-gray-300 leading-8">

                                Your Ultimate Game Collection.
                                Explore, Collect and Play every game
                                in one place.

                            </p>

                            <div className="mt-10 flex gap-4">

                                <button className="rounded-xl bg-red-600 px-8 py-4 hover:bg-red-700">

                                    Browse Collection

                                </button>

                                <button className="rounded-xl border border-white/20 px-8 py-4 hover:bg-white/10">

                                    Surprise Me

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="mt-10 grid grid-cols-12 gap-6">

                    {/* LEFT */}

                    <div className="col-span-9">

                        {/* Trending */}

                        {/* ================= TRENDING GAMES ================= */}

                        <div className="mt-8">

                            <div className="mb-5 flex items-center justify-between">

                                <h2 className="text-2xl font-bold text-white">
                                    🔥 Trending Games
                                </h2>

                                <button className="text-red-500 hover:text-red-400">
                                    View All →
                                </button>

                            </div>

                            <div className="grid grid-cols-5 gap-5">

                                {[
                                    {
                                        title: "Resident Evil 4",
                                        genre: "Action • Horror",
                                        image: "/images/re4.jpg",
                                    },
                                    {
                                        title: "Elden Ring",
                                        genre: "RPG",
                                        image: "/images/elden.jpg",
                                    },
                                    {
                                        title: "Cyberpunk 2077",
                                        genre: "Open World",
                                        image: "/images/cyberpunk.jpg",
                                    },
                                    {
                                        title: "God of War",
                                        genre: "Adventure",
                                        image: "/images/gow.jpg",
                                    },
                                    {
                                        title: "Devil May Cry 3",
                                        genre: "Hack & Slash",
                                        image: "/images/dmc3.jpg",
                                    },
                                ].map((game) => (

                                    <div
                                        key={game.title}
                                        className="group overflow-hidden rounded-2xl border border-white/10 bg-[#17171d] transition duration-300 hover:-translate-y-2 hover:border-red-500"
                                    >

                                        <img
                                            src={game.image}
                                            className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                                        />

                                        <div className="p-4">

                                            <h3 className="font-bold text-white">
                                                {game.title}
                                            </h3>

                                            <p className="mt-1 text-sm text-gray-400">
                                                {game.genre}
                                            </p>

                                            <button className="mt-4 w-full rounded-lg bg-red-600 py-2 text-sm font-semibold hover:bg-red-700">

                                                Play

                                            </button>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>

                        {/* Recently */}

                        {/* Recently Played */}

                        <div className="mt-8 rounded-2xl border border-white/10 bg-[#17171d] p-6">

                            <div className="mb-5 flex items-center justify-between">

                                <h2 className="text-2xl font-bold">
                                    🕹 Recently Played
                                </h2>

                                <button className="text-sm text-red-500 hover:text-red-400">
                                    View All
                                </button>

                            </div>

                            <div className="space-y-4">

                                {[
                                    {
                                        title: "Devil May Cry 3",
                                        image: "/images/dmc3.jpg",
                                        played: "2 Hours Ago",
                                        hours: "186 Hours",
                                    },
                                    {
                                        title: "Resident Evil 4",
                                        image: "/images/re4.jpg",
                                        played: "Yesterday",
                                        hours: "120 Hours",
                                    },
                                    {
                                        title: "Cyberpunk 2077",
                                        image: "/images/cyberpunk.jpg",
                                        played: "3 Days Ago",
                                        hours: "95 Hours",
                                    },
                                ].map((game) => (

                                    <div
                                        key={game.title}
                                        className="flex items-center gap-4 rounded-xl bg-[#202028] p-3 transition hover:bg-[#2b2b35]"
                                    >

                                        <img
                                            src={game.image}
                                            className="h-16 w-12 rounded-lg object-cover"
                                        />

                                        <div className="flex-1">

                                            <h3 className="font-semibold">
                                                {game.title}
                                            </h3>

                                            <p className="text-xs text-gray-400">
                                                Last Played • {game.played}
                                            </p>

                                            <p className="mt-1 text-xs text-red-500">
                                                {game.hours}
                                            </p>

                                        </div>

                                        <button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold transition hover:bg-red-700">

                                            Resume

                                        </button>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>



                    {/* RIGHT */}

                    <div className="col-span-3 space-y-6">

                        {/* RIGHT */}

                        <div className="col-span-4 flex items-center justify-center">

                            <div className="w-56 rounded-3xl border border-white/10 bg-black/50 p-4 shadow-2xl backdrop-blur-xl">

                                <div className="mb-3 flex items-center justify-between">

                                    <h3 className="text-xs font-bold uppercase tracking-[3px] text-red-500">
                                        ⭐ Favorite
                                    </h3>

                                    <span className="text-sm text-gray-300">
                                        9.8
                                    </span>

                                </div>

                                <img
                                    src="/images/dmc-cover.jpg"
                                    className="h-60 w-full rounded-2xl object-cover"
                                />

                                <h2 className="mt-4 text-xl font-bold">
                                    Devil May Cry 3
                                </h2>

                                <p className="mt-1 text-sm text-gray-400">
                                    Hack & Slash
                                </p>

                                <div className="mt-4 h-2 rounded-full bg-white/10">

                                    <div className="h-full w-[92%] rounded-full bg-red-600" />

                                </div>

                                <button className="mt-5 w-full rounded-xl bg-red-600 py-2.5 font-semibold transition hover:bg-red-700 hover:scale-[1.02]">

                                    Play Now

                                </button>

                            </div>

                        </div>

                        {/* Popular */}

                        {/* RIGHT */}

                        <div className="col-span-4 flex items-center justify-center">

                            <div className="w-[300px] rounded-3xl bg-[#15151b]/90 border border-white/10 p-5 backdrop-blur-xl">

                                <div className="mb-5 flex items-center justify-between">

                                    <h2 className="text-lg font-bold">
                                        🔥 Popular This Week
                                    </h2>

                                    <span className="text-xs text-gray-400">
                                        TOP 5
                                    </span>

                                </div>

                                {[
                                    {
                                        title: "Devil May Cry 3",
                                        image: "/images/dmc3.jpg",
                                        rating: "9.8",
                                    },
                                    {
                                        title: "Resident Evil 4",
                                        image: "/images/re4.jpg",
                                        rating: "9.6",
                                    },
                                    {
                                        title: "Elden Ring",
                                        image: "/images/elden.jpg",
                                        rating: "9.7",
                                    },
                                    {
                                        title: "Cyberpunk 2077",
                                        image: "/images/cyberpunk.jpg",
                                        rating: "9.4",
                                    },
                                ].map((game, index) => (

                                    <div
                                        key={game.title}
                                        className="mb-3 flex items-center gap-3 rounded-xl p-2 transition hover:bg-[#22222b]"
                                    >

                                        <span className="w-6 text-center font-bold text-red-500">
                                            #{index + 1}
                                        </span>

                                        <img
                                            src={game.image}
                                            className="h-12 w-12 rounded-lg object-cover"
                                        />

                                        <div className="flex-1">

                                            <h3 className="text-sm font-semibold">
                                                {game.title}
                                            </h3>

                                            <p className="text-xs text-gray-400">
                                                ⭐ {game.rating}
                                            </p>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>


                        {/* Statistics */}

                        <div className="rounded-2xl border border-white/10 bg-[#17171d] p-6">
                            <div className="mb-5 flex items-center justify-between">
                                <h2 className="text-xl font-bold">📊 Statistics</h2>
                                <span className="text-xs text-gray-500">2026</span>
                            </div>

                            <div className="flex justify-center">
                                <div className="relative h-52 w-52">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={data}
                                                dataKey="value"
                                                innerRadius={60}
                                                outerRadius={80}
                                                startAngle={90}
                                                endAngle={-270}
                                            >
                                                <Cell fill="#22c55e" />
                                                <Cell fill="#2b2b34" />
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>

                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-3xl font-bold">71%</span>
                                        <span className="text-sm text-gray-500">Completed</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span>Total Games</span>
                                    <span className="text-red-500">248</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Favorites</span>
                                    <span className="text-yellow-400">38</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Wishlist</span>
                                    <span className="text-blue-400">24</span>
                                </div>
                            </div>
                        </div>
                        {/* News */}

                        <div className="rounded-2xl bg-[#17171d] p-6">

                            <div className="mb-5 flex items-center justify-between">

                                <h2 className="text-xl font-bold">
                                    🎯 Continue Playing
                                </h2>

                                <button className="text-sm text-red-500 hover:text-red-400">
                                    View All
                                </button>

                            </div>

                            <div className="space-y-4">

                                {[
                                    {
                                        title: "Devil May Cry 3",
                                        image: "/images/dmc3.jpg",
                                        progress: "92%",
                                    },
                                    {
                                        title: "Resident Evil 4",
                                        image: "/images/re4.jpg",
                                        progress: "84%",
                                    },
                                    {
                                        title: "Cyberpunk 2077",
                                        image: "/images/cyberpunk.jpg",
                                        progress: "76%",
                                    },
                                ].map((game) => (

                                    <div
                                        key={game.title}
                                        className="flex items-center gap-3 rounded-xl bg-[#202028] p-3 transition hover:bg-[#2b2b35]"
                                    >

                                        <img
                                            src={game.image}
                                            className="h-14 w-14 rounded-lg object-cover"
                                        />

                                        <div className="flex-1">

                                            <h3 className="font-semibold">
                                                {game.title}
                                            </h3>

                                            <p className="text-xs text-gray-400">
                                                Progress {game.progress}
                                            </p>

                                            <div className="mt-2 h-2 rounded-full bg-[#34343d]">

                                                <div
                                                    className="h-full rounded-full bg-red-600"
                                                    style={{ width: game.progress }}
                                                />

                                            </div>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>


            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: "Dashboard",
            href: dashboard(),
        },
    ],
};