import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import { ReadingProgress } from '@/components/reading-progress';
import { Toc } from '@/components/toc';
import { Collection, Entry, getCollection, getEntry, getRelatedEntries } from '@/lib/content';
import { formatDate, titleFromSlug } from '@/lib/format';

type EntryLayoutProps = {
  collection: Collection;
  slug: string;
};

export function EntryLayout({ collection, slug }: EntryLayoutProps) {
  const entry = getEntry(collection, slug);
  if (!entry) {
    notFound();
  }

  const entries = getCollection(collection);
  const index = entries.findIndex((item) => item.slug === slug);
  const previous = index >= 0 ? entries[index + 1] : undefined;
  const next = index > 0 ? entries[index - 1] : undefined;
  const related = getRelatedEntries(entry);

  return (
    <div className="content-wrap entry-page">
      <ReadingProgress />
      <header className="entry-header">
        <p className="entry-kicker">{titleFromSlug(collection)}</p>
        <h1>{entry.frontmatter.title}</h1>
        <p>{entry.frontmatter.summary}</p>
        <div className="entry-meta">
          <span>{formatDate(entry.frontmatter.date)}</span>
          <span>{entry.readingTime}</span>
          {entry.frontmatter.updated ? <span>Updated {formatDate(entry.frontmatter.updated)}</span> : null}
        </div>
      </header>

      <div className="entry-layout">
        <article className="entry-content">
          <MDXRemote
            source={entry.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: 'append', properties: { className: ['anchor'] } }]
                ]
              }
            }}
          />

          {entry.frontmatter.evidence && entry.frontmatter.evidence.length > 0 ? (
            <section>
              <h2>Evidence</h2>
              <ul>
                {entry.frontmatter.evidence.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {entry.frontmatter.references && entry.frontmatter.references.length > 0 ? (
            <section>
              <h2>References</h2>
              <ul>
                {entry.frontmatter.references.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="pager">
            {previous ? (
              <Link href={`/${collection}/${previous.slug}`}>
                <small>Previous</small>
                <span>{previous.frontmatter.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/${collection}/${next.slug}`}>
                <small>Next</small>
                <span>{next.frontmatter.title}</span>
              </Link>
            ) : (
              <span />
            )}
          </section>
        </article>

        <div>
          <Toc headings={entry.headings} />
          <aside className="related-panel" aria-label="Related entries">
            <p>Connected work</p>
            <ul>
              {related.slice(0, 8).map((item) => (
                <li key={`${item.collection}-${item.slug}`}>
                  <Link href={`/${item.collection}/${item.slug}`}>
                    <span>{item.frontmatter.title}</span>
                    <small>{titleFromSlug(item.collection)}</small>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}

export function getEntryStaticParams(collection: Collection): Array<{ slug: string }> {
  return getCollection(collection).map((entry: Entry) => ({ slug: entry.slug }));
}
