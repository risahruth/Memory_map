type MemoryCardProps = {
    title: string;
    description: string;
    imageUrl?: string;
    locationName?: string;
    createdAt: string;
};

export default function MemoryCard({
    title,
    description,
    imageUrl,
    locationName,
    createdAt,
}: MemoryCardProps) {
    return (
        <div
            className="
            overflow-hidden
            rounded-3xl
            bg-white
            shadow-sm
            transition
            hover:shadow-lg
        "
        >
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={title}
                    className="h-48 w-full object-cover"
                />
            )}

            <div className="p-5">
                <h2 className="text-xl font-semibold text-stone-800">
                    {title}
                </h2>

                <p className="mt-2 line-clamp-3 text-stone-600">
                    {description}
                </p>

                {locationName && (
                    <p className="mt-4 text-sm text-violet-500">
                        📍 {locationName}
                    </p>
                )}

                <p className="mt-2 text-xs text-stone-400">
                    {new Date(createdAt).toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}