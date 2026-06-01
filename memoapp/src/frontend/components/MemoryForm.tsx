"use client";

import { useState } from "react";

export default function MemoryForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [locationName, setLocationName] = useState("");
    const [visibility, setVisibility] = useState("PRIVATE");
    const [toastMessage, setToastMessage] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState("");

    async function handleSubmit(
        e: React.FormEvent
    ) {
        e.preventDefault();

        try {
            let imageUrl = "";
            if (image) {

                const formData = new FormData();

                formData.append(
                    "file",
                    image
                );

                formData.append(
                    "upload_preset",
                    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
                );

                const cloudinaryResponse =
                    await fetch(
                        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
                        {
                            method: "POST",
                            body: formData,
                        }
                    );

                const cloudinaryData =
                    await cloudinaryResponse.json();

                imageUrl =
                    cloudinaryData.secure_url;
            }
            const response = await fetch(
                "/api/memories",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify({
                        title,
                        description,
                        locationName,
                        visibility,
                        imageUrl,
                    }),
                }
            );

            const data =
                await response.json();

            setToastMessage(data.message);
            window.setTimeout(() => {
                setToastMessage("");
            }, 2200);
            setTitle("");
            setDescription("");
            setLocationName("");
            setVisibility("PRIVATE");
            setImage(null);
            setPreviewUrl("");

        } catch (error) {

            console.log(error);

            alert(
                "Failed to create memory"
            );
        }
    }


    return (
        <div>
            {toastMessage && (
                <div className="fixed right-6 top-6 z-50 rounded-2xl border border-emerald-200 bg-white px-5 py-3 text-sm font-medium text-emerald-700 shadow-lg">
                    {"\u2713"} {toastMessage}
                </div>
            )}
            <div className="mb-6 inline-block rounded-full bg-pink-100 px-4 py-2 text-sm text-pink-500">
                 create a new memory
            </div>
            <form
                onSubmit={handleSubmit}
                className="mt-10 max-w-2xl rounded-3xl border border-stone-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm space-y-5"
            >

            <input
                type="text"
                placeholder="Memory title"
                value={title}
                onChange={(e) =>
                    setTitle(e.target.value)
                }
                className="
                   w-full
                   rounded-2xl
                   border border-stone-200
                   bg-rose-50
                   px-4
                   py-3
                   text-stone-700
                   placeholder:text-stone-400
                   outline-none
                   focus:border-violet-300
                   "
            />

            <textarea
                placeholder="Describe your memory..."
                value={description}
                onChange={(e) =>
                    setDescription(
                        e.target.value
                    )
                }
                className="
                    min-h-[140px]
                    w-full
                    rounded-2xl
                    border border-stone-200
                    bg-rose-50
                    px-4
                    py-3
                    text-stone-700
                    placeholder:text-stone-400
                    outline-none
                    focus:border-violet-300
                "
            />

            <input
                type="text"
                placeholder="Location"
                value={locationName}
                onChange={(e) =>
                    setLocationName(
                        e.target.value
                    )
                }
                className="
                        w-full
                        rounded-2xl
                        border border-stone-200
                        bg-rose-50
                        px-4
                        py-3
                        text-stone-700
                        placeholder:text-stone-400
                        outline-none
                        focus:border-violet-300
                    "
            />
            <input
                type="file"
                accept="image/*"
                onChange={(e) => {

                    const file = e.target.files?.[0];

                    if (!file) return;

                    setImage(file);

                    setPreviewUrl(
                        URL.createObjectURL(file)
                    );
                }}
                className="
                    w-full
                    rounded-2xl
                    border border-stone-200
                    bg-rose-50
                    px-4
                    py-3
                "
            />
            {
                previewUrl && (
                    <img
                        src={previewUrl}
                        alt="preview"
                        className="
                            h-64
                            w-full
                            rounded-2xl
                            object-cover
                        "
                    />
                )
            }

            <select
                value={visibility}
                onChange={(e) =>
                    setVisibility(
                        e.target.value
                    )
                }
                className="
                    w-full
                    rounded-2xl
                    border border-stone-200
                    bg-rose-50
                    px-4
                    py-3
                    text-stone-700
                    outline-none
                    focus:border-violet-300
                "
            >
                <option value="PRIVATE">
                    Private
                </option>

                <option value="FRIENDS">
                    Friends
                </option>

                <option value="PUBLIC">
                    Public
                </option>

            </select>

            <button
                type="submit"
                className="
                    w-full
                    rounded-2xl
                    bg-gradient-to-r
                    from-violet-400
                    to-pink-400
                    px-5
                    py-3
                    font-medium
                    text-white
                    transition
                    hover:scale-[1.01]
                "
            >
                Save Memory
            </button>

        </form>
        </div>
    );
}