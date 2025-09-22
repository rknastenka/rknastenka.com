import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarGate from "@/components/NavbarGate";
import Script from 'next/script';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Nastenka",
    description: "Nastenka's personal blog",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-KCDV4R337N"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-KCDV4R337N');
                    `}
                </Script>
            </head>

            <body className={`flex min-h-screen flex-col ${geistSans.variable} ${geistMono.variable} antialiased`}>
                {/* Shows everywhere EXCEPT paths that match HIDE_NAVBAR */}
                <NavbarGate />

                <main className="max-w-2xl mx-auto lg:w-full flex-grow  px-6 sm:px-0 lg:px-0 py-8 ">
                    {children}
                </main>
            </body>
        </html>
    );
}
