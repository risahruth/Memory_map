import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";

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
        <div className="p-10">
            <h1 className="text-4xl font-bold">
                Welcome to MemoryMap Dashboard 🌸
            </h1>
        </div>
    );
}