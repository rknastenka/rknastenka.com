'use client';

import { useState, useRef, useEffect } from 'react';

const SideVideos = ({ side = 'left' }) => {
    const videos = ['1.mp4', '2.mp4', '3.mp4'];
    const [hoveredVideo, setHoveredVideo] = useState(null);
    const videoRefs = useRef({});

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

    return (
        <div className={`fixed top-0 ${side === 'left' ? 'left-4' : 'right-4'} h-screen w-80 z-0 pointer-events-auto`}>
            <div className="h-full flex flex-col justify-center space-y-8">
                {videos.map((video) => (
                    <div
                        key={video}
                        className=" relative w-80 h-52 cursor-pointer"
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