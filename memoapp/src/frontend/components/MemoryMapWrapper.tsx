"use client";

import dynamic from "next/dynamic";

const MemoryMap = dynamic(
  () => import("./MemoryMap"),
  {
    ssr: false,
  }
);

export default function MemoryMapWrapper() {
  return <MemoryMap />;
}