'use client';

import { useState } from 'react';
import Image from 'next/image';

const CharacterWidget = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    const quotes = [
        "Hey there! Welcome to my little corner of the internet :>",
        "Hope you're having a wonderful day! ",
        "Thanks for stopping by! Feel free to explore around ",
        "HI HI HI, smile pretty!!! ",
        "Don't forget to check out my projects and articles! ",
        "You seem like a really cool person!"
    ];

    const playClickSound = () => {
        // Create a cute click sound using Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            // Create a cute "pop" sound
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
            
            oscillator.type = 'sine';
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.15);
        } catch {
            // Fallback: just continue without sound if Web Audio API is not supported
            console.log('Audio not supported');
        }
    };

    const toggleExpanded = () => {
        // Play sound effect
        playClickSound();
        
        if (!isExpanded) {
            // When expanding, show next quote
            setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
        }
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            {/* Character Widget - Bottom Right Corner */}
            <div 
                className={`fixed bottom-4 right-4 z-50 transition-all duration-300 cursor-pointer ${
                    isExpanded ? 'transform scale-100' : 'hover:transform hover:scale-105'
                }`}
                onClick={toggleExpanded}
            >
                <div className="relative">
                    {/* Character Image */}
                    <div className={`transition-all duration-300 ${
                        isExpanded ? 'w-32 h-32' : 'w-20 h-20'
                    }`}>
                        <Image
                            src="/char.png"
                            alt="Character"
                            width={128}
                            height={128}
                            className="w-full h-full object-contain drop-shadow-lg"
                            priority
                        />
                    </div>

                    {/* Quote Bubble - Shows when expanded */}
                    {isExpanded && (
                        <div className="absolute bottom-full right-0 mb-2 animate-in slide-in-from-bottom-2 duration-300">
                            <div className="relative bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-4 rounded-lg shadow-lg max-w-sm w-80 border border-gray-200 dark:border-gray-700">
                                <p className="text-sm font-medium leading-relaxed">
                                    {quotes[currentQuoteIndex]}
                                </p>
                                {/* Speech bubble arrow */}
                                <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800"></div>
                            </div>
                        </div>
                    )}

                    {/* Floating animation indicator when not expanded */}
                    {!isExpanded && (
                        <div className="absolute -top-1 -right-0.5 w-2 h-2 bg-blue-500 rounded-full "></div>
                    )}
                </div>
            </div>

            {/* Backdrop overlay when expanded (optional, for mobile) */}
            {isExpanded && (
                <div 
                    className="fixed inset-0 z-40 bg-black bg-opacity-20 md:hidden"
                    onClick={toggleExpanded}
                />
            )}
        </>
    );
};

export default CharacterWidget;