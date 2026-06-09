"use client";

import {
    MapContainer,
    TileLayer,
} from "react-leaflet";

export default function MemoryMap() {
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
        </MapContainer>
    );
}