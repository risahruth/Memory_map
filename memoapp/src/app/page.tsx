import Navbar from "@/frontend/components/Navbar";
import Link from "next/link";

export default function HomePage() {
    return (
        <main>
            <Navbar />

            <section className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

                <p className="mb-4 rounded-full bg-pink-100 px-4 py-2 text-sm text-pink-500">
                    your digital scrapbook 🌸
                </p>

                <h1 className="max-w-4xl font-[family-name:var(--font-playfair)] text-5xl font-bold leading-tight text-stone-800 md:text-7xl">
                    Turn moments into
                    <span className="text-violet-500"> living maps</span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-500 md:text-xl">
                    Capture memories, places, stories, playlists, sunsets,
                    friendships, and tiny moments that deserve to stay alive forever.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

                    <Link
                        href="/signup"
                        className="rounded-full bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 px-8 py-4 text-lg font-medium text-white shadow-xl transition duration-300 hover:scale-105 hover:shadow-2xl">
                        Start Mapping 
                    </Link>

                    <button className="rounded-full border border-stone-300 bg-white px-8 py-4 text-lg font-medium transition hover:bg-stone-100">
                         Explore Memories
                    </button>
                </div>
            </section>
        </main>
    );
}