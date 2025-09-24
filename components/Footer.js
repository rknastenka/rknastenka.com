'use client';
import { useState, useRef } from 'react';

export default function Footer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const toggleMusic = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio('/music/Togetherless.mp3');
            audioRef.current.addEventListener('ended', () => {
                setIsPlaying(false);
            });
        }

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play().catch(error => {
                console.error('Error playing audio:', error);
            });
            setIsPlaying(true);
        }
    };

    return (
        <footer className="max-w-2xl py-2 text-sm mt-6 mx-auto w-full lg:mb-6 mb-4">
            <div className="mb-2 border-b-2 pt-2 w-full"></div>
            {/* moretocome@2025 */}
            <p 
                className="text-left text-xs underline pl-6 lg:pl-0 cursor-pointer hover:text-blue-600 transition-colors" 
                onClick={toggleMusic}
            >
                {isPlaying ? 'good tatse right' : 'music?'}
            </p>
        </footer>
    );
}
