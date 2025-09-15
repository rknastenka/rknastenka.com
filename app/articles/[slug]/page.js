import { notFound } from 'next/navigation';
import { articles } from '../data';

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

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
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className="text-[clamp(1.6rem,5vw,2.25rem)] font-extrabold !text-[var(--aColor)] mb-2">
        {article.title}
      </h1>
      <div className="text-gray-500 text-sm mb-6">{article.date}</div>

      {article.content?.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </article>
  );
}
