"use client";

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";

type Memory = {
    id: string;
    title: string;
    description: string;
    locationName: string | null;
    imageUrl: string | null;
    latitude: number | null;
    longitude: number | null;
};


export default function MemoryMap() {
    const [memories, setMemories] =
    useState<Memory[]>([]);
    useEffect(() => {
    fetch("/api/memories")
        .then((res) => res.json())
        .then((data) => {
            setMemories(data);
        });
    }, []);
    const memoryIcon = L.divIcon({
        html: `
        <div style="font-size:32px;">
            📍
        </div>
        `,
        className: "",
        iconSize: [32, 32],
    });
    return (
        <MapContainer
            center={[13.0827, 80.2707]}
            zoom={10}
            style={{
                height: "600px",
                width: "100%",
            }}
        >
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {memories
            .filter(
                (
                    memory
                ): memory is Memory & {
                    latitude: number;
                    longitude: number;
                } =>
                    memory.latitude !== null &&
                    memory.longitude !== null
            )
            .map((memory) => (
                <Marker
                    icon={memoryIcon}
                    key={memory.id}
                    position={[
                        memory.latitude,
                        memory.longitude,
                    ]}
                >
            <Popup>
                <div className="space-y-2">
                    <h3 className="font-bold">
                        {memory.title}
                    </h3>

                    {memory.imageUrl && (
                        <img
                            src={memory.imageUrl}
                            alt={memory.title}
                            className="
                                h-32
                                w-full
                                rounded-lg
                                object-cover
                            "
                        />
                    )}

                    <p>
                        {memory.locationName}
                    </p>
                </div>
            </Popup>
        </Marker>
))}
        </MapContainer>
    );
}