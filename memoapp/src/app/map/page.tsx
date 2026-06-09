import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import MemoryMapWrapper
from "@/frontend/components/MemoryMapWrapper";
import Navbar from "@/frontend/components/Navbar";

export default async function MapPage() {
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
    <div>
    <Navbar isAuthenticated={true} />
    <main className="min-h-screen p-8">
      <MemoryMapWrapper />
    </main>
    </div>
  );
}
