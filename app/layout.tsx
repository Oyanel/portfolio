import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer/Footer";
import "@/styles/sass/global.scss";
import { Navigation } from "@/components/Navigation/Navigation";
import { Providers } from "@/context/Providers";

export const metadata: Metadata = {
    title: "Therence BRUNE Portfolio",
    description: "This is Therence's website",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Navigation />
                    <main>
                        {children}
                        <Footer />
                    </main>
                </Providers>
            </body>
        </html>
    );
}
