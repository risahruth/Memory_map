"use client";

import Link from "next/link";
import { useState } from "react";

type NavbarProps = {
    isAuthenticated?: boolean;
};

export default function Navbar({
    isAuthenticated = false,
}: NavbarProps) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 border-b border-stone-200 bg-[#7F675B]/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link href={isAuthenticated ? "/dashboard" : "/"}>
                    <h1 className="cursor-pointer font-[family-name:var(--font-playfair)] text-2xl font-bold text-#8B4513-500 transition hover:scale-105">
                        MemoryMap
                    </h1>
                </Link>

                {/* Private Links */}
                {isAuthenticated && (
                    <div className="hidden items-center gap-6 text-sm font-medium text-stone-800 md:flex">

                        <Link
                            href="/dashboard"
                            className="transition hover:text-violet-500"
                        >
                            Dashboard
                        </Link>

                        <Link
                            href="/timeline"
                            className="transition hover:text-pink-500"
                        >
                            Timeline
                        </Link>

                        <Link
                            href="/explore"
                            className="transition hover:text-sky-500"
                        >
                            Explore
                        </Link>

                        <Link
                            href="/friends"
                            className="transition hover:text-emerald-500"
                        >
                            Friends
                        </Link>

                    </div>
                )}

                {/* Right Side */}
                {!isAuthenticated ? (
                    <div className="flex items-center gap-3">

                        <Link
                            href="/signup"
                            className="
                                rounded-full
                                border
                                border-stone-300
                                bg-white
                                px-5
                                py-2
                                text-sm
                                font-medium
                                text-stone-700
                                shadow-sm
                                transition
                                hover:scale-105
                            "
                        >
                            Signup
                        </Link>

                        <Link
                            href="/login"
                            className="
                                rounded-full
                                bg-gradient-to-r
                                from-violet-400
                                via-pink-400
                                to-amber-400
                                px-5
                                py-2
                                text-sm
                                font-medium
                                text-white
                                shadow-lg
                                transition
                                hover:scale-105
                            "
                        >
                            Login
                        </Link>

                    </div>
                ) : (
                    <div className="relative">

                        <button
                            onClick={() =>
                                setIsOpen(!isOpen)
                            }
                            className="
                                rounded-full
                                border
                                border-stone-300
                                bg-white
                                px-5
                                py-2
                                text-sm
                                font-medium
                                text-stone-700
                                shadow-sm
                                transition
                                hover:scale-105
                            "
                        >
                             Profile ▼
                        </button>

                        {isOpen && (
                            <div
                                className="
                                    absolute
                                    right-0
                                    mt-2
                                    w-48
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-stone-200
                                    bg-white
                                    shadow-xl
                                "
                            >
                                <button
                                    className="
                                        block
                                        w-full
                                        px-4
                                        py-3
                                        text-left
                                        text-sm
                                        text-stone-700
                                        transition
                                        hover:bg-stone-100
                                    "
                                >
                                     Profile
                                </button>

                                <button
                                    className="
                                        block
                                        w-full
                                        px-4
                                        py-3
                                        text-left
                                        text-sm
                                        text-stone-700
                                        transition
                                        hover:bg-stone-100
                                    "
                                >
                                    Settings
                                </button>

                                <hr />

                                <button
                                    className="
                                        block
                                        w-full
                                        px-4
                                        py-3
                                        text-left
                                        text-sm
                                        text-red-500
                                        transition
                                        hover:bg-red-50
                                    "
                                >
                                     Logout
                                </button>

                            </div>
                        )}

                    </div>
                )}

            </div>
        </nav>
    );
}