"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [randomPfp, setRandomPfp] = useState('');
  const [isHydrated, setIsHydrated] = useState(false);
  const pathname = usePathname();

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const saved = localStorage.getItem('theme');
    // Default to dark when no saved preference
    const shouldDark = saved ? saved === 'dark' : true;
    
    // Sync the state with what was already applied in layout
    setIsDark(shouldDark);
  }, []);

  // Set random profile picture after hydration
  useEffect(() => {
    setIsHydrated(true);
    const randomNum = Math.floor(Math.random() * 21) + 1;
    setRandomPfp(`/pfp/${randomNum}.jpg`);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newIsDark = !isDark;

    // Remove all theme classes first
    root.classList.remove('dark', 'light');

    // Add the appropriate class with !important styles to override browser forcing
    if (newIsDark) {
      root.classList.add('dark');
    } else {
      root.classList.add('light');
    }

    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    setIsDark(newIsDark);
  };
  return (
    <header className="w-full backdrop-blur-sm">
      <div className="max-w-3xl mx-auto px-6 pt-4 lg:pt-8 sm:px-0 border-b-2">
        <div className="flex h-24 items-center justify-between w-full">
          {/* Left: avatar + name + nav */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Avatar */}
            {isHydrated && (
              <img
                src={randomPfp}
                alt="Avatar"
                width={70}
                height={70}
                title={isDark ? 'Switch to light' : 'Switch to dark'}
                onClick={toggleTheme}
                className="border  h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18 object-cover cursor-pointer select-none transition-opacity hover:opacity-90 focus:opacity-90 outline-none"
              />
            )}

            <div className="flex flex-col justify-between h-12 sm:h-14">
              {/* Name */}
              <div className="-mb-1 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-none font-headings ">
                <Link href="/" > Bana Tawalbeh </Link>
              </div>

            {/* Navigation under name */}
            <nav className="flex items-center gap-2 sm:gap-3 text-xs leading-none font-bold ">
            <Link href="https://github.com/rknastenka" target="_blank" >GitHub</Link>
            <Link href="mailto:rknastenka@gmail.com" >Email</Link>
            <Link href="/hello" >Resume</Link>
            </nav>

            </div>

          </div>

          {/* Right: Links */}
          <nav className="flex flex-col gap-1 text-xs sm:text-sm leading-none">
                <Link href="/" className={`hover:text-white hover:bg-black ${pathname === "/" ? "font-bold " : ""}`}>[About]</Link>
                <Link href="/projects" className={`hover:text-white hover:bg-black ${pathname === "/projects" ? "font-bold " : ""}`}>[Projects]</Link>
                <Link href="/articles" className={`hover:text-white hover:bg-black ${pathname.startsWith("/articles")  ? "font-bold " : ""}`}>[Articles]</Link>
                <Link href="/gallery"  className={`hover:text-white hover:bg-black ${pathname===("/gallery")  ? "font-bold " : ""}`}>[Gallery]</Link>
          </nav>

        </div>
      </div>
    </header>
  );
}

