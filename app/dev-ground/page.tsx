"use client";

import dynamic from "next/dynamic";

const ClientSideGame = dynamic(() => import("@/features/Game/App"), { ssr: false });

export default function DevGround() {
    return <ClientSideGame />;
}
