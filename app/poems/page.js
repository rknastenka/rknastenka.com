export const metadata = {
  title: 'Poems - Creative Expressions',
  description: 'A collection of poems and creative expressions by Nastenka. Explore heartfelt verses and poetic thoughts.',
  openGraph: {
    title: 'Poems - Nastenka\'s Creative Expressions',
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
        <div className="mb-12 p-6 bg-gray-50 rounded-lg">
          <h3 className=" underline text-lg font-semibold mb-4 text-gray-700">Poetry Archive</h3>
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
            <div className="whitespace-pre-line poems-text leading-relaxed">
              {poem.content}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}