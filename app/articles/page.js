export const metadata = {
  title: 'Articles',
  description: 'Short notes and writings',
};

import Link from 'next/link';
import { articles } from './data';

export default function Articles() {
  return (
    <>
      <section className="space-y-6">

        {articles.map((a) => (
          <article key={a.slug}>
            <Link
              className="block text-[1.2rem] lg:text-[1.5rem] leading-[1.1] font-extrabold !text-[var(--aColor)] mb-1"
              href={`/articles/${a.slug}`}
            >
              {a.title}
            </Link>
            <div className="text-gray-500 text-[0.95rem]">{a.date}</div>
          </article>
        ))}
      </section>

    </>
  );
}
