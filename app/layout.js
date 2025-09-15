import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarGate from "@/components/NavbarGate"; // <-- add this

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: " ⌈ ini ⌉",
    description: "Bana Tawalbeh's personal website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
            
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
