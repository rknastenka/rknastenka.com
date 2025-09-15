"use client";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const root = document.documentElement;
    const saved = localStorage.getItem('theme');
  // Default to dark when no saved preference
  const shouldDark = saved ? saved === 'dark' : true;

    // Remove all theme classes first
    root.classList.remove('dark', 'light');

    // Add the appropriate class
    if (shouldDark) {
      root.classList.add('dark');
    } else {
      root.classList.add('light');
    }

    setIsDark(shouldDark);
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
      <div className="max-w-2xl mx-auto px-6 pt-4 lg:pt-8 sm:px-0 border-b border-zinc-700">
        <div className="flex h-24 items-center justify-between w-full">
          {/* Left: avatar + name + nav */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Avatar */}
            <img
              src="/pic2.jpg"
              alt="Avatar"
              width={70}
              height={70}
              title={isDark ? 'Switch to light' : 'Switch to dark'}
              onClick={toggleTheme}
              className="h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18 object-cover cursor-pointer select-none transition-opacity hover:opacity-90 focus:opacity-90 outline-none"
            />

            <div className="flex flex-col justify-between h-12 sm:h-14">
              {/* Name */}
              <div className="-mb-1 text-2xl sm:text-3xl lg:text-4xl font-medium leading-none font-headings">
                Bana Tawalbeh
              </div>
              
            {/* Navigation under name */}
            <nav className="flex items-center gap-2 sm:gap-3 text-xs leading-none font-bold">
            <Link href="https://github.com/itzbana" target="_blank" >GitHub</Link>
            <Link href="mailto:banabilalt@gmail.com" >Email</Link>
            <Link href="#" target="_blank" >Resume</Link>
            </nav>


            </div>
            
          </div>

          {/* Right: Links */}
          <nav className="flex flex-col gap-1 text-xs sm:text-sm leading-none">
                <Link href="/" >[About]</Link>
                <Link href="/projects" >[Projects]</Link>
                <Link href="/articles" >[Articles]</Link>
                <Link href="#" >[Links]</Link>
          </nav>

        </div>
      </div>
    </header>
  );
}

/*
  Notes:
  - Place your 72×72 avatar image at /public/avatar.png (or change the src).
  - The serif heading mimics the screenshot's typographic weight; adjust Tailwind font families
    in tailwind.config.js if you want a specific font.
  - Links, spacing, and subtle borders are tuned to match the reference look.
*/
