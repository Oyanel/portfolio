import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(import.meta.dirname, "styles")],
    },
    images: {
        remotePatterns: [new URL("https://therence.net/**")],
    },
};

export default nextConfig;
