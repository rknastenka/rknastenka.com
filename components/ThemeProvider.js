"use client";

import { useEffect } from 'react';

export default function ThemeProvider() {
    useEffect(() => {
        // This runs after hydration, so it's safe to access localStorage
        const saved = localStorage.getItem('theme');
        const shouldDark = saved ? saved === 'dark' : true;
        
        // Apply theme class
        document.documentElement.classList.remove('dark', 'light');
        if (shouldDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.add('light');
        }
    }, []);

    return null; // This component doesn't render anything
}