'use client';

import { usePathname } from 'next/navigation';
import SideVideos from './SideVideos';

export default function ConditionalSideVideos({ side }) {
    const pathname = usePathname();
    
    // Only show on the main page
    if (pathname !== '/') {
        return null;
    }
    
    return <SideVideos side={side} />;
}
