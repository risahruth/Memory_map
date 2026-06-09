"use client";

import {
    MapContainer,
    TileLayer,
    Marker,
    useMapEvents,
} from "react-leaflet";

import { useState } from "react";

type Props = {
    onLocationSelect: (
        lat: number,
        lng: number
    ) => void;
};

function MapClickHandler({
    onLocationSelect,
}: Props) {
    const [position, setPosition] =
        useState<[number, number] | null>(
            null
        );

    useMapEvents({
        click(e) {
            const lat = e.latlng.lat;
            const lng = e.latlng.lng;

            setPosition([lat, lng]);

            onLocationSelect(lat, lng);
        },
    });

    return position ? (
        <Marker position={position} />
    ) : null;
}

export default function LocationPicker({
    onLocationSelect,
}: Props) {
    return (
        <MapContainer
            center={[13.0827, 80.2707]}
            zoom={10}
            style={{
                height: "400px",
                width: "100%",
            }}
        >
            <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MapClickHandler
                onLocationSelect={
                    onLocationSelect
                }
            />
        </MapContainer>
    );
}