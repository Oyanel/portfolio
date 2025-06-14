import type { NextConfig } from 'next'
import path from "path";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(import.meta.dirname, "styles")],
    },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
    images: {
        remotePatterns: [new URL('https://therence.net/**')],
    },
}

export default nextConfig
