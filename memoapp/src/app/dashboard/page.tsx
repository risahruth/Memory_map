import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import AddMemoryCard from "@/frontend/components/AddMemoryCard";
import MemoryCard from "@/frontend/components/MemoryCard";
import Navbar from "@/frontend/components/Navbar";

export default async function DashboardPage() {

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

   return (
    <>
        <Navbar isAuthenticated />

        <main className="min-h-screen bg-[#fdf6f0] px-6 py-10">
        <div className="mx-auto text-center max-w-7xl">
            <h1 className="text-4xl font-bold text-[#DD8374]">
                My Memories 
            </h1>

            <p className="mt-2 text-stone-600">
                A scrapbook of places, moments, and stories.
            </p>

            {memories.length === 0 ? (
                <div className="mt-10">
                    <div className="max-w-sm">
                        <AddMemoryCard />
                    </div>

                    <p className="mt-6 text-stone-500">
                        📸 Your scrapbook is still blank.
                    </p>

                    <p className="text-stone-400">
                        The first memory is usually the hardest one to choose.
                    </p>
                </div>
            ) : (
                <div
                    className="
                    mt-10
                    grid
                    grid-cols-1
                    gap-6
                    md:grid-cols-2
                    lg:grid-cols-3
                "
                >
                    <AddMemoryCard />

                    {memories.map((memory) => (
                        <MemoryCard
                            key={memory.id}
                            title={memory.title}
                            description={memory.description}
                            imageUrl={memory.imageUrl ?? undefined}
                            locationName={
                                memory.locationName ?? undefined
                            }
                            createdAt={
                                memory.createdAt.toISOString()
                            }
                        />
                    ))}
                </div>
            )}
        </div>
        </main>
    </>
);
}
