export const metadata = {
  title: 'Poems - Creative Expressions',
  description: 'A collection of poems and creative expressions by Nastenka. Explore heartfelt verses and poetic thoughts.',
  openGraph: {
    title: 'Poems - Nastenka\'s Creative Expressions',
    description: 'A collection of poems and creative expressions by Nastenka.',
    images: ['/website-preview.png'],
  },
};

import { poems } from './data';

export default function Poems() {
  return (
    <>
      <section className="text-center space-y-8">
        <div className="mb-8">
          <h4 className=" text-sm lg:text-[1.1rem] font-bold mb-4">-all got all but only some chose some, as the devil was once an angel-</h4>
        </div>

        {poems.map((poem) => (
          <article key={poem.slug} className=" border-b border-gray-200 pb-6 last:border-b-0">
            <h2 className="text-[1.2rem] lg:text-[1.4rem] leading-[1.1] font-extrabold !text-[var(--aColor)] mb-1">
              {poem.title}
            </h2>
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