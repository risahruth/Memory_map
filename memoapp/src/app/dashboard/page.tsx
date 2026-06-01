import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import MemoryForm
from "@/frontend/components/MemoryForm";

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

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#fdf6f0] px-6 py-10">
            <div className="w-full max-w-2xl text-center">
                <h1 className="text-4xl font-bold text-violet-500">
                    Welcome to MemoryMap 
                </h1>

                <p className="mt-2 text-stone-600">
                   Capture little moments before they fade.
                </p>

                <MemoryForm />
            </div>
        </div>
    );
}
