import MemoryForm from "@/frontend/components/MemoryForm";

export default function NewMemoryPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#fdf6f0] px-6 py-10">
            <div className="w-full max-w-2xl">
                <h1 className="text-center text-4xl font-bold text-violet-500">
                    Create a Memory 🌸
                </h1>

                <p className="mt-2 text-center text-stone-600">
                    Capture a moment before it becomes a story.
                </p>

                <MemoryForm />
            </div>
        </div>
    );
}