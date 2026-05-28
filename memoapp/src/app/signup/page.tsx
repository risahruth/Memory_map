"use client";

import { useState } from "react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error);
        setLoading(false);
        return;
      }

      setMessage(data.message);

      setFormData({
        name: "",
        username: "",
        email: "",
        password: "",
      });

      setLoading(false);

    } catch (error) {
      console.log(error);
      setMessage("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fdf6f0] px-6 py-12 text-stone-700">

      {/* dreamy background blobs */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl animate-pulse" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-100 blur-3xl animate-pulse" />

      {/* floating postcard */}
      <div className="absolute left-10 top-20 hidden rotate-[-10deg] rounded-3xl border border-stone-200 bg-white/70 p-4 shadow-xl backdrop-blur md:block">
        <p className="text-sm text-pink-500">
          📍 Kyoto Memory
        </p>
        <p className="mt-2 text-xs text-stone-500">
          spring rain, warm coffee,
          tiny alleyways.
        </p>
      </div>

      {/* floating map card */}
      <div className="absolute bottom-20 right-10 hidden rotate-[8deg] rounded-3xl border border-stone-200 bg-white/70 p-4 shadow-xl backdrop-blur lg:block">
        <p className="text-sm text-sky-400">
          ✈️ Memory pinned
        </p>
        <p className="mt-2 text-xs text-stone-500">
          every place keeps a story.
        </p>
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between gap-16">

        {/* left content */}
        <div className="hidden flex-1 lg:block">

          <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <p className="text-sm text-stone-600">
              collecting moments, not just photos
            </p>
          </div>

          <h1 className="mt-8 text-6xl font-black leading-tight tracking-tight text-stone-800">
            Your memories
            <span className="block bg-gradient-to-r from-violet-500 via-pink-400 to-amber-400 bg-clip-text text-transparent">
              deserve a map.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-stone-500">
            MemoryMap turns moments into places.
            Save memories, pin locations, create little
            digital postcards, and build a scrapbook
            of your life across the world.
          </p>

          <div className="mt-10 flex gap-5">

            <div className="rounded-3xl border border-stone-200 bg-white/80 p-5 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl">
              <p className="text-2xl">📸</p>
              <p className="mt-3 font-semibold text-violet-500">
                Visual memories
              </p>
              <p className="mt-1 text-sm text-stone-500">
                photos + stories + locations
              </p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white/80 p-5 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl">
              <p className="text-2xl">🗺️</p>
              <p className="mt-3 font-semibold text-pink-500">
                Travel scrapbook
              </p>
              <p className="mt-1 text-sm text-stone-500">
                every pin tells a story
              </p>
            </div>

          </div>
        </div>

        {/* signup card */}
        <div className="w-full max-w-md">

          <div className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">

            {/* card glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-100/40 via-pink-100/20 to-amber-100/40" />

            <div className="relative z-10">

              <div className="mb-8 text-center">
                <h2 className="text-4xl font-black tracking-tight text-stone-800">
                  Create account 
                </h2>

                <p className="mt-3 text-stone-500">
                  begin your digital scrapbook journey
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <div>
                  <label className="mb-2 block text-sm font-medium text-stone-600">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Risah Ruth"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-stone-200 bg-white/70 px-4 py-3 outline-none transition focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-stone-600">
                    Username
                  </label>

                  <input
                    type="text"
                    name="username"
                    placeholder="@risah"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-stone-200 bg-white/70 px-4 py-3 outline-none transition focus:border-pink-300 focus:ring-4 focus:ring-pink-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-stone-600">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="hello@memorymap.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-stone-200 bg-white/70 px-4 py-3 outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-stone-600">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-stone-200 bg-white/70 px-4 py-3 outline-none transition focus:border-amber-300 focus:ring-4 focus:ring-amber-100"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-violet-500 via-pink-400 to-amber-400 px-4 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:shadow-2xl"
                >
                  <span className="relative z-10">
                    {loading ? "Creating account..." : "Start your journey ✨"}
                  </span>

                  <div className="absolute inset-0 translate-y-full bg-white/20 transition duration-500 group-hover:translate-y-0" />
                </button>

                {message && (
                  <div className="rounded-2xl border border-stone-200 bg-rose-50 px-4 py-3 text-center text-sm text-stone-600 shadow-sm">
                    {message}
                  </div>
                )}

              </form>

              <div className="mt-8 flex items-center justify-center gap-2 text-sm text-stone-500">
                <span>already collecting memories?</span>

                <button className="font-semibold text-violet-500 transition hover:text-pink-500">
                  login
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}