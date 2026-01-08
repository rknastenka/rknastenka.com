import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: 'Projects',
  description: 'Discover my modest projects',
  openGraph: {
    title: 'Projects',
    images: ['/main.jpg'],
  },
};


export default function Projects() {
  return (
    <div className="leading-relaxed tracking-wide text-xs lg:text-[1rem]">

           {/* Projects Container */}
            <div className="space-y-6">

                {/* JSYP project */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-center">
                    <div className="md:col-span-3 space-y-3">
                        <a href="https://jsyp.jordan.ieee.org" target="_blank" rel="noopener noreferrer" className="text-[var(--aColor)] font-semibold text-[1rem] visited:!text-blue-500 transition-colors duration-200">[JSYP 10th Edition Congress]</a>
                        <p className="text-sm text-gray-400 dark:text-gray-500">
                           A modern interactive website built with [three.js x shaders x gsap x lenis x react] for the IEEE Jordan Section Young Professionals Congress 2025, with the theme "IOT meets LEGO".
                        </p>
                    </div>
                    <div className="md:col-span-1">
                        <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 h-full">
                           <Image 
                             src="/projects/jsyp-prev.gif" 
                             alt="IEEE JSYP CONGRESS WEBSITE" 
                             width={400} 
                             height={300}
                             className="max-w-full h-auto object-contain"
                             loading="lazy"
                             unoptimized
                           />
                        </div>
                    </div>
                </div>

                
                {/* JVF project */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-center">
                    <div className="md:col-span-3 space-y-3">
                        <a href="#" rel="noopener noreferrer" className="text-[var(--aColor)] font-semibold text-[1rem] visited:!text-blue-500 transition-colors duration-200">[JVF Management System]</a>
                        <p className="text-sm text-gray-400 dark:text-gray-500">
                    A full stack e-registration hierarchical system and admin panel for the Jordan Volleyball Federation built with [React x AntDesign x PHP] to manage clubs, players, seasons, age groups, requests/approvals, document attachments, ID card printing, and club statements.                            
                        </p>
                    </div>
                    <div className="md:col-span-1">
                      <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 h-full">
                           <Image 
                             src="/projects/jvf-prev.gif" 
                             alt="JVF MANAGEMENT SYSTEM" 
                             width={400} 
                             height={300}
                             className="max-w-full h-auto object-contain"
                             loading="lazy"
                             unoptimized
                           />
                     </div>
                    </div>
                </div>
                
               {/* RAWI project */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-center">
                    <div className="md:col-span-3 space-y-3">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-[var(--aColor)] font-semibold text-[1rem] visited:!text-blue-500 transition-colors duration-200">[RAWI Ai story Maker]</a>
                        <p className="text-sm text-gray-400 dark:text-gray-500">
                          A web application built with [Next.js x TailwindCSS x Python] that utilizes multiple APIs to personalize kids' stories based on their face and name.
                        </p>
                    </div>
                    <div className="md:col-span-1">
                        <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 h-full">
                           <Image 
                             src="/projects/rawi-prev.gif" 
                             alt="RAWI AI STORY MAKER" 
                             width={400} 
                             height={300}
                             className="max-w-full h-auto object-contain"
                             loading="lazy"
                             unoptimized
                           />
                        </div>
                    </div>
                </div>

                {/* TopOnTop project */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-center">
                    <div className="md:col-span-3 space-y-3">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-[var(--aColor)] font-semibold text-[1rem] visited:!text-blue-500 transition-colors duration-200">[E-commerce Shopify Template]</a>
                        <p className="text-sm text-gray-400 dark:text-gray-500">
                          A modern, responsive e-commerce shopify template built with [Shopify x Liquid x TailwindCSS] for a fictional gym sport clothes brand "TopOnTop".
                        </p>
                    </div>
                    <div className="md:col-span-1">
                        <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 h-full">
                           <Image 
                             src="/projects/topontop-prev.gif" 
                             alt="TOPONTOP E-COMMERCE TEMPLATE" 
                             width={400} 
                             height={300}
                             className="max-w-full h-auto object-contain"
                             loading="lazy"
                             unoptimized
                           />
                        </div>
                    </div>
                </div>    

                {/* Daily Philosophy project */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-center">
                    <div className="md:col-span-3 space-y-3">
                        <div className="flex items-center gap-2">
                            <a href="https://dailyphilosophy.rknastenka.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--aColor)] font-semibold text-[1rem] visited:!text-blue-500 transition-colors duration-200">[Daily Philosophy]</a>
                            <a href="https://github.com/rknastenka/dailyphilosophy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                        <p className="text-sm text-gray-400 dark:text-gray-500">
                            Recent Research has proven that using AI to think, and write limits your brain capabilities, and that's what
                            this project was built for. New question is raised daily for you to reflect on and write your own thoughts without any AI assistance within 24hours of posting it.
                        </p>
                    </div>
                    <div className="md:col-span-1">
                        <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 h-full">
                           <Image 
                             src="/projects/dp-prev.png" 
                             alt="Daily Philosophy website preview" 
                             width={400} 
                             height={300}
                             className="max-w-full h-auto object-contain"
                             loading="lazy"
                           />
                        </div>
                    </div>
                </div>    

                {/* Camino project */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-center">
                    <div className="md:col-span-3 space-y-3">
                        <div className="flex items-center gap-2">
                            <a href="https://camino.rknastenka.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--aColor)] font-semibold text-[1rem] visited:!text-blue-500 transition-colors duration-200">[Camino]</a>
                            <a href="https://github.com/rknastenka/camino" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                        <p className="text-sm text-gray-400 dark:text-gray-500">
                           Minimal website to track your daily habits and productive hours with a full year preview as well.
                           i used to track these on paper earlier on but i figured i must build a digital version as well.
                           i'm confident a lot of people would find this useful too.
                           </p>
                           </div>
                    <div className="md:col-span-1">
                        <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 h-full">
                           <Image 
                             src="/projects/camino-prev.png" 
                             alt="Camino website preview" 
                             width={400} 
                             height={300}
                             className="max-w-full h-auto object-contain"
                             loading="lazy"
                           />
                        </div>
                    </div>
                    
                </div>    

                {/* Notepad project */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-center">
                    <div className="md:col-span-3 space-y-3">
                        <div className="flex items-center gap-2">
                            <a href="https://notepad.rknastenka.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--aColor)] font-semibold text-[1rem] visited:!text-blue-500 transition-colors duration-200">[Notepad]</a>
                            <a href="https://github.com/rknastenka/notepad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                        <p className="text-sm text-gray-400 dark:text-gray-500">
                        When I study, I keep only one tab open; my slides tab. Sometimes
                        I get an idea during a focus session, and I normally write it
                        down in a paper notebook, but when I’m out, I reach for a digital option.
                        The problem is, most note-taking apps are too distracting.
                        So I built this zero-distractions notepad for myself and for anyone who might benefit from it.
                           </p>
                           </div>
                    <div className="md:col-span-1">
                        <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 h-full">
                           <Image 
                             src="/projects/notepad-prev.jpeg" 
                             alt="NotePad preview" 
                             width={400} 
                             height={300}
                             className="max-w-full h-auto object-contain"
                             loading="lazy"
                           />
                        </div>
                    </div>
                    
                </div>    


                {/* Notepad project */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-center">
                    <div className="md:col-span-3 space-y-3">
                        <div className="flex items-center gap-2">
                            <a href="https://justarchive.rknastenka.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--aColor)] font-semibold text-[1rem] visited:!text-blue-500 transition-colors duration-200">[Just Archive]</a>
                            <a href="https://github.com/rknastenka/just-archive" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                        <p className="text-sm text-gray-400 dark:text-gray-500">
                         Jordan University of Science and Technology archive.
                         This is only the front-end part of the project, the back-end is still under development.
                         <br />
                         <i><strong> coming soon!</strong></i>
                           </p>
                           </div>
                    <div className="md:col-span-1">
                        <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 h-full">
                           <Image 
                             src="/projects/just-archive-prev.jpeg" 
                             alt="Just Archive preview" 
                             width={400} 
                             height={300}
                             className="max-w-full h-auto object-contain"
                             loading="lazy"
                           />
                        </div>
                    </div>
                    
                </div>    
            </div>

  

    </div>
  );
}