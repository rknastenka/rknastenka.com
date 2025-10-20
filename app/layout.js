import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import NavbarGate from "@/components/NavbarGate";
import Script from 'next/script';
import SideVideos from "@/components/SideVideos";
import MobilePopup from "@/components/MobilePopup";
import CharacterWidget from "@/components/CharacterWidget";

import Footer from "@/components/Footer";
import ConditionalFooter from "@/components/ConditionalFooter";
import TimeMessage from "@/components/TimeMessage";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
});

export const metadata = {
    title: {
        default: "Nastenka",
        template: "%s | Nastenka"
    },
    description: "Welcome to Nastenka's personal blog.",
    keywords: ["Bana Tawalbeh","Nastenka","ini","personal blog", "thoughts", "writing", "introspection", "life philosophy", "self-reflection", "articles", "blog posts"],
    authors: [{ name: "Nastenka" }],
    creator: "Nastenka",
    publisher: "Nastenka",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://rknastenka.com',
        siteName: 'Nastenka',
        title: 'Nastenka - Personal Blog & Thoughts',
        description: 'Welcome to Nastenka\'s personal blog. Explore unscripted thoughts, perceptions, and notions about life, self-understanding, and random topics.',
        images: [
            {
                url: '/website-preview.png',
                width: 1200,
                height: 630,
                alt: 'Nastenka\'s Personal Blog',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Nastenka - Personal Blog & Thoughts',
        description: 'Welcome to Nastenka\'s personal blog. Explore unscripted thoughts, perceptions, and notions about life, self-understanding, and random topics.',
        images: ['/website-preview.png'],
        creator: '@nastenka',
    },
    icons: {
        icon: '/ini2.png',
        shortcut: '/ini2.png',
        apple: '/ini2.png',
    },
    manifest: '/manifest.json',
    alternates: {
        canonical: 'https://rknastenka.com',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <link rel="canonical" href="https://rknastenka.com" />
                
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

                {/* JSON-LD Structured Data */}
                <Script
                    id="structured-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Nastenka",
                            "url": "https://rknastenka.com",
                            "image": "https://rknastenka.com/ini2.png",
                            "description": "Personal blogger sharing thoughts, perceptions, and notions about life and self-understanding",
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": "https://rknastenka.com"
                            },
                            "author": {
                                "@type": "Person",
                                "name": "Nastenka"
                            },
                            "publisher": {
                                "@type": "Person",
                                "name": "Nastenka",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://rknastenka.com/ini2.png"
                                }
                            }
                        })
                    }}
                />
            </head>

            <body className={`flex min-h-screen flex-col ${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}>
              
                <NavbarGate />

                {/* <MobilePopup /> */}
                
                <SideVideos side="left" />

               {/* <SideVideos side="right" />  */}

                <main className=" max-w-3xl mx-auto lg:w-full flex-grow px-6 sm:px-0 lg:px-0 py-8 relative z-10">
                    {children}
                </main>
                
                <ConditionalFooter /> 

                {/* <CharacterWidget /> */}
                
                <TimeMessage />

            </body>
        </html>
    );
}
