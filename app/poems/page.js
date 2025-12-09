export const metadata = {
  title: 'Poetry',
  description: 'A collection of poems and creative expressions by Nastenka.',
  openGraph: {
    title: 'Poetry',
    description: 'A collection of poems and creative expressions by Nastenka.',
    images: ['/website-preview.png'],
  },
};

import Link from 'next/link';
import { poems } from './data';

export default function Poems() {
  return (
    <>
      <section className=" space-y-8">


        {/* Table of contents */}
        <div className="mb-12 p-6 bg-pot rounded-lg">
          <h3 className=" underline text-lg font-semibold mb-4">Poetry Archive</h3>
          <div className="space-y-2">
            {poems.map((poem) => (
              <Link 
                key={`toc-${poem.slug}`}
                href={`#${poem.slug}`} 
                className="block text-[var(--aColor)] hover:opacity-80 transition-opacity text-sm lg:text-base"
              >
                {poem.title}
              </Link>
            ))}
          </div>
        </div>

        {poems.map((poem) => (
          <article key={poem.slug} id={poem.slug} className="text-center border-b border-gray-200 pb-6 last:border-b-0">
            <Link href={`#${poem.slug}`} className="block">
              <h2 className="text-[1.2rem] lg:text-[1.4rem] leading-[1.1] font-extrabold !text-[var(--aColor)] mb-1 hover:opacity-80 transition-opacity">
                [ {poem.title} ]
              </h2>
            </Link>
            <div className="text-gray-500 text-[0.95rem] mb-4">{poem.date}</div>
            <div className="whitespace-pre-line poems-text leading-relaxed text-xs md:text-md lg:text-base">
              {poem.content}
            </div>
          </article>
        ))}

                {/* Back to top link */}
        <div className="text-center pt-4">
          <Link 
            href="#" 
            className="text-[var(--aColor)] hover:opacity-80 transition-opacity text-sm underline"
          >
            Back To Top
          </Link>
        </div>
        
        {/* Footer disclaimer */}
        <div className=" ">
          <p className="text-xs leading-relaxed border-t border p-2 border-black">
            <strong>DISCLAIMER:</strong> poetry is art, and sometimes it reflects my own raw emotions, while other times it’s inspired by the feelings or stories of others. Some pieces might sound a bit heavy or dark, but don’t worry, it’s just art, nothing more.          </p>
        </div>
        


      </section>
    </>
  );
}