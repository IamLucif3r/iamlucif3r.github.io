import { KnowledgeCard } from '@/components/knowledge-card';
import { Collection, getCollection } from '@/lib/content';
import { titleFromSlug } from '@/lib/format';

type CollectionPageProps = {
  collection: Collection;
  title: string;
  description: string;
};

export function CollectionPage({ collection, title, description }: CollectionPageProps) {
  const entries = getCollection(collection);

  return (
    <div className="content-wrap collection-page">
      <header className="collection-header">
        <p className="eyebrow">{titleFromSlug(collection)}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>

      <div className="grid cols-3">
        {entries.map((entry) => (
          <KnowledgeCard
            key={entry.slug}
            href={`/${collection}/${entry.slug}`}
            title={entry.frontmatter.title}
            summary={entry.frontmatter.summary}
            date={entry.frontmatter.date}
            meta={entry.frontmatter.conference ?? entry.frontmatter.status}
            related={[
              ...(entry.frontmatter.technologies ?? []),
              ...(entry.frontmatter.projects ?? []),
              ...(entry.frontmatter.talks ?? []),
              ...(entry.frontmatter.research ?? [])
            ]}
          />
        ))}
      </div>
    </div>
  );
}
