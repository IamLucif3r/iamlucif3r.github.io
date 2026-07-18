import Link from 'next/link';

import { formatDate, titleFromSlug } from '@/lib/format';

type KnowledgeCardProps = {
  href: string;
  title: string;
  summary: string;
  date?: string;
  meta?: string;
  related?: string[];
};

export function KnowledgeCard({ href, title, summary, date, meta, related = [] }: KnowledgeCardProps) {
  return (
    <article className="knowledge-card">
      <div className="card-top-row">
        <p className="card-date">{formatDate(date)}</p>
        {meta ? <p className="card-meta">{meta}</p> : null}
      </div>
      <h3>
        <Link href={href}>{title}</Link>
      </h3>
      <p>{summary}</p>
      {related.length > 0 ? (
        <ul className="chip-row" aria-label="Related topics">
          {related.slice(0, 4).map((slug) => (
            <li key={slug}>{titleFromSlug(slug)}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
