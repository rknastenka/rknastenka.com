"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [imageList, setImageList] = useState([]);
  
  // Generate a list of images with vintage dates
  useEffect(() => {
    const generateImageList = () => {
      const images = [];
      const totalImages = 21; // Based on the files in pfp folder
      const baseYear = 1995;
      
      // Generate dates that feel authentic for old photos
      const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
      
      for (let i = 1; i <= totalImages; i++) {
        const yearOffset = Math.floor(Math.random() * 25); // 1995-2020
        const month = months[Math.floor(Math.random() * months.length)];
        const day = Math.floor(Math.random() * 28) + 1;
        const year = baseYear + yearOffset;
        
        images.push({
          id: i,
          src: `/pfp/${i}.jpg`,
          alt: `Memory ${i}`,
          date: `${month} ${day}, ${year}`,
          rotation: (Math.random() - 0.5) * 6 // Random rotation between -3 and 3 degrees
        });
      }
      
      // Add the special mm.jpg image
      images.push({
        id: 'mm',
        src: '/pfp/mm.jpg',
        alt: 'Special Memory',
        date: 'Jul 15, 1998',
        rotation: (Math.random() - 0.5) * 6
      });
      
      return images;
    };
    
    setImageList(generateImageList());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className=" text-4xl lg:text-5xl font-bold mb-4 text-amber-900 dark:text-amber-100 font-serif">
            Memory Gallery
          </h1>
          <p className="text-xs lg:text-base text-amber-700 dark:text-amber-200 max-w-2xl mx-auto leading-relaxed">
            A collection of moments frozen in time, preserved like vintage photographs 
            from years gone by. Each memory tells a story worth remembering.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {imageList.map((image) => (
            <div
              key={image.id}
              className="photo-card group cursor-pointer"
              style={{
                transform: `rotate(${image.rotation}deg)`,
                transition: 'all 0.3s ease-in-out'
              }}
            >
              {/* Photo Card Container */}
              <div className="relative bg-white dark:bg-gray-100 p-4 shadow-xl rounded-sm border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:rotate-0">
                {/* Photo */}
                <div className="relative aspect-[4/3] mb-3 overflow-hidden bg-gray-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-sm filter sepia-[0.1] contrast-[1.1] brightness-[0.95]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  
                  {/* Vintage Photo Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-yellow-50/20 pointer-events-none"></div>
                </div>
                
                {/* Date Stamp */}
                <div className="text-center">
                  <p className="text-xs font-mono text-gray-600 dark:text-gray-700 tracking-wide uppercase">
                    {image.date}
                  </p>
                </div>
                
                {/* Photo edge wear effect */}
                <div className="absolute inset-0 rounded-sm border-2 border-gray-300/50 pointer-events-none"></div>
                
                {/* Corner tape effect */}
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-200/60 transform rotate-45 opacity-70"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <p className="text-sm text-amber-600 dark:text-amber-300 italic font-serif">
            "Every picture tells a story, every moment is a treasure."
          </p>
        </div>
      </div>

      <style jsx>{`
        .photo-card:nth-child(odd) {
          animation: float 6s ease-in-out infinite;
        }
        
        .photo-card:nth-child(even) {
          animation: float 6s ease-in-out infinite reverse;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(var(--rotation));
          }
          50% {
            transform: translateY(-5px) rotate(var(--rotation));
          }
        }
        
        .photo-card {
          --rotation: attr(style);
        }
      `}</style>
    </div>
  );
}
