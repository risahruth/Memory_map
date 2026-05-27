export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 border-b border-stone-200 bg-[#f8ede3]/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-violet-500">
                    MemoryMap
                </h1>

                <div className="hidden items-center gap-6 text-sm font-medium md:flex">
                    <button className="transition hover:text-pink-500">
                        Explore
                    </button>

                    <button className="transition hover:text-sky-500">
                        Timeline
                    </button>

                    <button className="transition hover:text-emerald-500">
                        Friends
                    </button>

                    <button className="rounded-full bg-violet-400 px-5 py-2 text-white transition hover:bg-violet-500">
                        Create Memory
                    </button>
                </div>
            </div>
        </nav>
    );
}