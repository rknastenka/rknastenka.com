'use client';
import { useState, useEffect } from 'react';

// Global audio instance to persist across component mounts/unmounts
let globalAudio = null;
let globalIsPlaying = false;
let listeners = new Set();

const audioManager = {
    getAudio() {
        if (!globalAudio) {
            globalAudio = new Audio('/music/Togetherless.mp3');
            globalAudio.addEventListener('ended', () => {
                globalIsPlaying = false;
                this.notifyListeners();
            });
            globalAudio.addEventListener('pause', () => {
                globalIsPlaying = false;
                this.notifyListeners();
            });
            globalAudio.addEventListener('play', () => {
                globalIsPlaying = true;
                this.notifyListeners();
            });
        }
        return globalAudio;
    },
    
    isPlaying() {
        return globalIsPlaying;
    },
    
    play() {
        const audio = this.getAudio();
        return audio.play().catch(error => {
            console.error('Error playing audio:', error);
        });
    },
    
    pause() {
        const audio = this.getAudio();
        audio.pause();
    },
    
    toggle() {
        if (this.isPlaying()) {
            this.pause();
        } else {
            this.play();
        }
    },
    
    addListener(callback) {
        listeners.add(callback);
    },
    
    removeListener(callback) {
        listeners.delete(callback);
    },
    
    notifyListeners() {
        listeners.forEach(callback => callback(globalIsPlaying));
    }
};

export default function Footer() {
    const [isPlaying, setIsPlaying] = useState(audioManager.isPlaying());

    useEffect(() => {
        // Sync with global state on mount
        setIsPlaying(audioManager.isPlaying());
        
        // Listen for state changes
        const handleStateChange = (playing) => {
            setIsPlaying(playing);
        };
        
        audioManager.addListener(handleStateChange);
        
        return () => {
            audioManager.removeListener(handleStateChange);
        };
    }, []);

    const toggleMusic = () => {
        audioManager.toggle();
    };

    return (
        <footer className="max-w-3xl py-2 text-sm mt-6 mx-auto w-full lg:mb-6 mb-4">
            <div className="mb-2 border-b-2 pt-2 w-full"></div>
            {/* moretocome@2025 */}
            <p 
                className="text-left text-xs underline pl-6 lg:pl-0 cursor-pointer hover:text-blue-600 transition-colors" 
                onClick={toggleMusic}
            >
                {isPlaying ? 'good taste right :)' : 'music?'}
            </p>
        </footer>
    );
}
