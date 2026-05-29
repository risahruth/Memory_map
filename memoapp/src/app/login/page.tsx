"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    identifier,
                    password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.message);
                return;
            }

            alert("Welcome back 🌸");

        } catch (error) {
            console.log(error);
            alert("Something went wrong");
        }
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#fdf6f0] px-6 py-12">
            <div className="w-full max-w-md overflow-hidden rounded-[32px] border border-stone-200 bg-white/70 shadow-xl backdrop-blur-md">

                <div className="border-b border-stone-200 bg-gradient-to-r from-rose-100 via-violet-100 to-orange-100 px-8 py-10 text-center">
                    <p className="mb-3 text-sm text-stone-600">
                        welcome back to
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight text-violet-500">
                        MemoryMap
                    </h1>

                    <p className="mt-3 text-sm leading-relaxed text-stone-600">
                        revisit your moments,
                        pin your memories,
                        continue your story ✨
                    </p>
                </div>

                <form
                    onSubmit={handleLogin}
                    className="space-y-5 px-8 py-8"
                >
                    <div>
                        <label className="mb-2 block text-sm font-medium text-stone-700">
                            Email or Username
                        </label>

                        <input
                            type="text"
                            placeholder="moonlit_memo"
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                            className="w-full rounded-2xl border border-stone-200 bg-[#fffaf7] p-4 text-stone-700 outline-none transition focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-stone-700">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded-2xl border border-stone-200 bg-[#fffaf7] p-4 text-stone-700 outline-none transition focus:border-pink-300 focus:ring-4 focus:ring-pink-100"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-2xl bg-violet-500 p-4 font-medium text-white transition hover:scale-[1.01] hover:bg-violet-600"
                    >
                        Enter MemoryMap ✨
                    </button>

                    <p className="text-center text-sm text-stone-500">
                        your memories are waiting 🌸
                    </p>
                    <p className="text-center text-sm text-stone-500">
                        Don&apos;t have an account yet?{" "}
                        <Link
                            href="/signup"
                            className="font-semibold text-violet-500 transition hover:text-pink-500"
                        >
                            Create your account
                        </Link>
                    </p>
                </form>
            </div>
        </main>
    );
}
