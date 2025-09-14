export const metadata = {
  title: 'Articles',
  description: 'Short notes and writings',
};

import { articles } from './data';

export default function Articles() {
  return (
    <>
      <section className="space-y-6">
        {articles.map((a) => (
          <article key={a.slug}>
            <a
              className="block text-[clamp(1.25rem,4vw,1.5rem)] leading-[1.1] font-extrabold !text-[var(--aColor)] mb-1"
              href={`/articles/${a.slug}`}
            >
              {a.title}
            </a>
            <div className="text-gray-500 text-[0.95rem]">{a.date}</div>
          </article>
        ))}
      </section>

    </>
  );
}
