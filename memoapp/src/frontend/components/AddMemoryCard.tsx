import Link from "next/link";

export default function AddMemoryCard() {
    return (
        <Link
            href="/memories/new"
            className="
                flex
                h-80
                flex-col
                items-center
                justify-center
                rounded-3xl
                border-2
                border-dashed
                border-violet-300
                bg-white
                shadow-sm
                transition
                hover:scale-105
                hover:border-violet-500
            "
        >
            <span className="text-6xl text-violet-400">
                +
            </span>

            <p className="mt-4 text-lg font-medium text-stone-600">
                Create Memory
            </p>
        </Link>
    );
}