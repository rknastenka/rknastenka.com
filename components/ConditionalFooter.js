'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function ConditionalFooter() {
    const pathname = usePathname();
    
    // Hide footer on articles pages
    if (pathname.startsWith('/articles')) {
        return null;
    }

    
    return <Footer />;
}