import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articles } from '../data';

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: 'Article' };
  const fallback = Array.isArray(article.content) && article.content[0]
    ? article.content[0].slice(0, 160)
    : undefined;
  return { title: article.title, description: article.summary || fallback };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return notFound();

  return (
    <>
      <Link
        href="/articles"
        className="inline-block text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 mb-2 transition-colors"
      >
        ← Back
      </Link>

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="text-[1.6rem] lg:text-[2rem] font-extrabold !text-[var(--aColor)] mb-2">
          {article.title}
        </h1>
        <div className="text-gray-500 text-sm mb-6">{article.date} · By Bana Tawalbeh</div>

        {article.content?.map((p, i) => (
          p === '' ? (
            <div key={i} className="h-4"></div>
          ) : (
            <p className="text-sm lg:text-base mb-4" key={i}>{p}</p>
          )
        ))}
      </article>
    </>
  );
}
