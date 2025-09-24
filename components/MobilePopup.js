'use client';

import { useState, useEffect } from 'react';

const MobilePopup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        
        // Check if user has already dismissed the popup
        const dismissed = localStorage.getItem('mobilePopupDismissed');
        if (dismissed) return;

        // Detect mobile/tablet devices
        const isMobile = () => {
            if (typeof window === 'undefined') return false;
            
            const userAgent = window.navigator.userAgent;
            const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
            
            // Also check screen width as backup
            const isSmallScreen = window.innerWidth <= 1024; // lg breakpoint
            
            return mobileRegex.test(userAgent) || isSmallScreen;
        };

        if (isMobile()) {
            // Small delay to ensure page has loaded
            setTimeout(() => {
                setShowPopup(true);
            }, 1000);
        }
    }, []);

    const handleDismiss = () => {
        setShowPopup(false);
        localStorage.setItem('mobilePopupDismissed', 'true');
    };

    const handleContinue = () => {
        setShowPopup(false);
        // Don't save to localStorage so it shows again on next visit
    };

    // Don't render on server or if not mounted
    if (!mounted || !showPopup) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-sm w-full p-6 text-center">
                <div className="mb-4">
                    <div className="text-4xl mb-2">💻</div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Hey there!
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        Please open your laptop for a better experience. This website has some cool interactive features that work best on desktop!
                    </p>
                </div>
                
                <div className="flex flex-col gap-2">
                    <button
                        onClick={handleContinue}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                        Continue anyway
                    </button>
                    <button
                        onClick={handleDismiss}
                        className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-xs transition-colors"
                    >
                        Don't show again
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MobilePopup;