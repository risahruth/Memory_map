import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 border-b border-stone-200 bg-[#f8ede3]/80 backdrop-blur-md">

            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* logo */}
                <Link href="/">
                    <h1 className="cursor-pointer font-[family-name:var(--font-playfair)] text-3xl font-bold text-violet-500 transition hover:scale-105">
                        MemoryMap
                    </h1>
                </Link>

                {/* nav links */}
                <div className="hidden items-center gap-6 text-sm font-medium text-stone-600 md:flex">

                    <button className="transition hover:text-pink-500">
                        Explore
                    </button>

                    <button className="transition hover:text-sky-500">
                        Timeline
                    </button>

                    <button className="transition hover:text-emerald-500">
                        Friends
                    </button>

                </div>

                {/* auth buttons */}
                <div className="flex items-center gap-3">

                    <Link
                        href="/signup"
                        className="rounded-full border border-stone-300 bg-white px-5 py-2 text-sm font-medium text-stone-700 shadow-sm transition hover:scale-105 hover:bg-stone-100"
                    >
                        Signup
                    </Link>

                    <button className="rounded-full bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 px-5 py-2 text-sm font-medium text-white shadow-lg transition hover:scale-105 hover:shadow-xl">
                        Login
                    </button>

                </div>

            </div>
        </nav>
    );
}