import Link from "next/link";

export const metadata = {
  title: 'Projects',
  description: 'Discover Nastenka\'s projects',
  openGraph: {
    title: 'Projects - Nastenka\'s Creative Works',
    description: 'Discover Nastenka\'s projects and creative solutions. Learn about the process of turning ideas into action.',
    images: ['/website-preview.png'],
  },
};


export default function Projects() {
  return (
    <div className="leading-relaxed tracking-wide text-xs lg:text-[1rem]">

           {/* Projects Container */}
            <div className="space-y-6">

                {/* JSYP project */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 items-start">
                    {/* Left column - Text content (larger) */}
                    <div className="lg:col-span-3 space-y-3">
                        <a href="https://jsyp.jordan.ieee.org" target="_blank" rel="noopener noreferrer" className="text-[var(--aColor)] font-semibold text-[1rem] visited:!text-blue-500 transition-colors duration-200">[JSYP 10th Edition Congress]</a>
                        <p className="text-sm text-gray-400 dark:text-gray-500">
                           A modern interactive website built with [three.js x shaders x gsap x lenis x react] for the IEEE Jordan Section Young Professionals Congress 2025, with the theme "IOT meets LEGO".
                            
                        </p>
                    </div>
                    {/* Right column - Image (smaller) */}
                    <div className="lg:col-span-1">
                        <div className="w-45 h-24 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
                           <img src="/projects/jsyp-prev.gif" alt="IEEE JSYP CONGRESS WEBSITE" className="max-w-full max-h-full object-contain"/>
                        </div>
                    </div>
                </div>

                
                {/* JVF project */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 items-start">
                    {/* Left column - Text content (larger) */}
                    <div className="lg:col-span-3 space-y-3">
                        <a href="#" rel="noopener noreferrer" className="text-[var(--aColor)] font-semibold text-[1rem] visited:!text-blue-500 transition-colors duration-200">[JVF Management System]</a>
                        <p className="text-sm text-gray-400 dark:text-gray-500">
                    A full stack e-registration hierarchical system and admin panel for the Jordan Volleyball Federation built with [React x AntDesign x PHP] to manage clubs, players, seasons, age groups, requests/approvals, document attachments, ID card printing, and club statements.                            
                        </p>
                    </div>
                    {/* Right column - Image (smaller) */}
                    <div className="lg:col-span-1">
                        <div className="w-45 h-24 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
                           <img src="/projects/jvf-img.png" alt="JVF MANAGEMENT SYSTEM" className="max-w-full max-h-full object-contain"/>
                        </div>
                    </div>
                </div>
                
               {/* RAWI project */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 items-start">
                    {/* Left column - Text content (larger) */}
                    <div className="lg:col-span-3 space-y-3">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-[var(--aColor)] font-semibold text-[1rem] visited:!text-blue-500 transition-colors duration-200">[RAWI Ai story Maker]</a>
                        <p className="text-sm text-gray-400 dark:text-gray-500">
                          A web application built with [Next.js x TailwindCSS x Python] that utilizes multiple APIs to personalize kids' stories based on their face and name.
                        </p>
                    </div>
                    {/* Right column - Image (smaller) */}
                    <div className="lg:col-span-1">
                        <div className="w-45 h-24 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
                           <img src="/projects/rawi-prev.gif" alt="RAWI AI STORY MAKER" className="max-w-full max-h-full object-contain"/>
                        </div>
                    </div>
                </div>

                {/* TopOnTop project */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 items-start">
                    {/* Left column - Text content (larger) */}
                    <div className="lg:col-span-3 space-y-3">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-[var(--aColor)] font-semibold text-[1rem] visited:!text-blue-500 transition-colors duration-200">[E-commerce Shopify Template]</a>
                        <p className="text-sm text-gray-400 dark:text-gray-500">
                          A modern, responsive e-commerce template built with [Shopify x Liquid x TailwindCSS] for a fictional brand "TopOnTop", featuring a clean design, intuitive navigation, and seamless shopping experience.
                        </p>
                    </div>
                    {/* Right column - Image (smaller) */}
                    <div className="lg:col-span-1">
                        <div className="w-45 h-24 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
                           <img src="/projects/topontop-prev.gif" alt="TOPONTOP E-COMMERCE TEMPLATE" className="max-w-full max-h-full object-contain"/>
                        </div>
                    </div>
                </div>       
            </div>

  

    </div>
  );
}