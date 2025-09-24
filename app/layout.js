import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarGate from "@/components/NavbarGate";
import Script from 'next/script';
import SideVideos from "@/components/SideVideos";
import MobilePopup from "@/components/MobilePopup";

import Footer from "@/components/Footer";
import ConditionalFooter from "@/components/ConditionalFooter";

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
        icons: {
        icon: '/icon2.jpg',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* Theme script - runs immediately to prevent flash */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                try {
                                    var saved = localStorage.getItem('theme');
                                    var shouldDark = saved ? saved === 'dark' : true;
                                    var root = document.documentElement;
                                    
                                    if (shouldDark) {
                                        root.className = root.className.replace(/\\b(light)\\b/g, '') + ' dark';
                                    } else {
                                        root.className = root.className.replace(/\\b(dark)\\b/g, '') + ' light';
                                    }
                                } catch (e) {
                                    // Fallback to dark if localStorage is not available
                                    document.documentElement.className += ' dark';
                                }
                            })();
                        `,
                    }}
                />
                
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
              
                <NavbarGate />
                <MobilePopup />

                
                <SideVideos side="left" />

                {/* <SideVideos side="right" /> */}

                <main className="max-w-2xl mx-auto lg:w-full flex-grow px-6 sm:px-0 lg:px-0 py-8 relative z-10">
                    {children}

                    <ConditionalFooter /> 
                </main>
                

            </body>
        </html>
    );
}
