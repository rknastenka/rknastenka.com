'use client';

import { useState, useRef, useEffect } from 'react';

const SideVideos = ({ side = 'left' }) => {
    const videos = ['1.mp4', '2.mp4', '3.mp4', '4.mp4', '5.mp4', '6.mp4'];
    // Reverse video order for right side
    const displayVideos = side === 'right' ? [...videos].reverse() : videos;
    const [hoveredVideo, setHoveredVideo] = useState(null);
    const [mounted, setMounted] = useState(false);
    const videoRefs = useRef({});

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        // Pause all videos when no video is hovered
        if (hoveredVideo === null) {
            Object.values(videoRefs.current).forEach(video => {
                if (video) {
                    video.pause();
                    video.currentTime = 0;
                }
            });
        }
    }, [hoveredVideo]);

    const handleMouseEnter = (videoName) => {
        setHoveredVideo(videoName);
        const video = videoRefs.current[videoName];
        if (video) {
            video.play();
        }
    };

    const handleMouseLeave = () => {
        setHoveredVideo(null);
    };

    // Prevent hydration mismatch by not rendering interactive states until mounted
    if (!mounted) {
        return (
            <div className={`hidden lg:block fixed top-0 ${side === 'left' ? 'left-4' : 'right-4'} h-screen w-80 z-0 pointer-events-auto overflow-hidden`}>
                <div className="h-full flex flex-col justify-start space-y-8 pt-8">
                    {displayVideos.map((video) => (
                        <div
                            key={video}
                            className="relative w-80 h-52 cursor-pointer"
                        >
                            <video
                                className="w-full h-full object-cover rounded-lg transition-opacity duration-300 opacity-0"
                                muted
                                loop
                                preload="metadata"
                                style={{ objectFit: 'cover' }}
                            >
                                <source src={`/clips/${video}`} type="video/mp4" />
                            </video>
                            <div className="absolute -inset-2 bg-transparent" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className={`hidden lg:block fixed top-0 ${side === 'left' ? 'left-4' : 'right-4'} h-screen w-80 z-0 pointer-events-auto overflow-hidden`}>
            <div className="h-full flex flex-col justify-start space-y-8 pt-8">
                {displayVideos.map((video) => (
                    <div
                        key={video}
                        className="relative w-80 h-52 cursor-pointer"
                        onMouseEnter={() => handleMouseEnter(video)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <video
                            ref={(el) => videoRefs.current[video] = el}
                            className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${
                                hoveredVideo === video ? 'opacity-80' : 'opacity-0'
                            }`}
                            muted
                            loop
                            preload="metadata"
                            style={{ objectFit: 'cover' }}
                        >
                            <source src={`/clips/${video}`} type="video/mp4" />
                        </video>
                        {/* Invisible hover area that's slightly larger */}
                        <div className="absolute -inset-2 bg-transparent" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideVideos;