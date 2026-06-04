import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

import Navbar from "@/frontend/components/Navbar";
import MemoryCard from "@/frontend/components/MemoryCard";

export default async function TimelinePage() {

    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
        redirect("/login");
    }

    const decoded = verifyToken(token);

    if (!decoded) {
        redirect("/login");
    }

    const memories = await prisma.memory.findMany({
        where: {
            userId: decoded.userId,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    const groupedMemories = memories.reduce(
    (acc, memory) => {
        const year = memory.createdAt
            .getFullYear()
            .toString();

        const month = memory.createdAt.toLocaleDateString(
            "en-US",
            {
                month: "long",
            }
        );

        if (!acc[year]) {
            acc[year] = {};
        }

        if (!acc[year][month]) {
            acc[year][month] = [];
        }

        acc[year][month].push(memory);

        return acc;
    },
    {} as Record<
        string,
        Record<string, typeof memories>
    >
);

    return (
        <>
            <Navbar isAuthenticated />

            <main className="min-h-screen bg-[#fdf6f0] px-6 py-10">
                <div className="mx-auto max-w-5xl">

                    <h1 className="text-center text-4xl font-bold text-[#DD8374]">
                        My Timeline
                    </h1>

                    <p className="mt-2 text-center text-stone-600">
                        Every memory has a place in your story.
                    </p>

                    <div className="mt-12 space-y-16">

                        {Object.entries(groupedMemories).map(
                            ([year, months]) => (
                                <section
                                    key={year}
                                    className="relative"
                                >
                                    <div className="mb-8 flex items-center gap-4">
                                        <div className="h-5 w-5 rounded-full bg-[#DD8374]" />

                                        <h2 className="text-3xl font-bold text-stone-700">
                                            {year}
                                        </h2>
                                    </div>

                                    <div className="ml-2 border-l-2 border-[#e8d8ca] pl-8 space-y-8">
                                        {Object.entries(months).map(
                                    ([month, memories]) => (
                                        <div key={month} className="space-y-8">

                                            <h3 className="text-lg font-semibold uppercase tracking-wider text-[#DD8374]">
                                                {month}
                                            </h3>

                                            {memories.map((memory) => (
                                                <div
                                                    key={memory.id}
                                                    className="relative"
                                                >
                                                    <div className="absolute -left-[41px] top-8 h-4 w-4 rounded-full bg-[#DD8374]" />

                                                    <MemoryCard
                                                        title={memory.title}
                                                        description={memory.description}
                                                        imageUrl={
                                                            memory.imageUrl ?? undefined
                                                        }
                                                        locationName={
                                                            memory.locationName ?? undefined
                                                        }
                                                        createdAt={memory.createdAt.toISOString()}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )
                                )}
                                    </div>
                                </section>
                            )
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}