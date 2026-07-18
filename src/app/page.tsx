import Link from 'next/link';

import { KnowledgeCard } from '@/components/knowledge-card';
import { getCollection, getLatestWork } from '@/lib/content';

export default function HomePage() {
  const research = getCollection('research').slice(0, 3);
  const technologies = getCollection('technologies').slice(0, 6);
  const projects = getCollection('projects').slice(0, 3);
  const talks = getCollection('talks').slice(0, 3);
  const latest = getLatestWork(6);

  return (
    <div className="content-wrap homepage">
      <section className="hero">
        <p className="eyebrow">Cybersecurity Research Headquarters</p>
        <h1>I study why computing abstractions eventually fail and how we can predict those failures before they happen.</h1>
        <p>
          Long-horizon research connecting systems behavior, identity boundaries, protocol design and operational evidence.
          This is a knowledge graph of ongoing investigation, not a chronological feed.
        </p>
        <div className="hero-actions">
          <Link href="/research" className="button-primary">
            Explore Research
          </Link>
          <Link href="/search" className="button-muted">
            Open Knowledge Search
          </Link>
        </div>
      </section>

      <section>
        <div className="section-head">
          <h2>Research</h2>
          <Link href="/research">View all</Link>
        </div>
        <div className="grid cols-3">
          {research.map((entry) => (
            <KnowledgeCard
              key={entry.slug}
              href={`/research/${entry.slug}`}
              title={entry.frontmatter.title}
              summary={entry.frontmatter.summary}
              date={entry.frontmatter.date}
              related={entry.frontmatter.technologies}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="section-head">
          <h2>Technology Atlas</h2>
          <Link href="/technologies">Browse atlas</Link>
        </div>
        <div className="atlas-grid">
          {technologies.map((entry) => (
            <Link key={entry.slug} href={`/technologies/${entry.slug}`} className="atlas-tile">
              <span>{entry.frontmatter.title}</span>
              <small>{entry.frontmatter.summary}</small>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="section-head">
          <h2>Projects</h2>
          <Link href="/projects">View all</Link>
        </div>
        <div className="grid cols-3">
          {projects.map((entry) => (
            <KnowledgeCard
              key={entry.slug}
              href={`/projects/${entry.slug}`}
              title={entry.frontmatter.title}
              summary={entry.frontmatter.summary}
              date={entry.frontmatter.date}
              related={entry.frontmatter.technologies}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="section-head">
          <h2>Talks</h2>
          <Link href="/talks">View all</Link>
        </div>
        <div className="grid cols-3">
          {talks.map((entry) => (
            <KnowledgeCard
              key={entry.slug}
              href={`/talks/${entry.slug}`}
              title={entry.frontmatter.title}
              summary={entry.frontmatter.summary}
              date={entry.frontmatter.date}
              meta={entry.frontmatter.conference}
              related={entry.frontmatter.research}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="section-head">
          <h2>Latest Work</h2>
          <Link href="/search">Search everything</Link>
        </div>
        <div className="grid cols-3">
          {latest.map((entry) => (
            <KnowledgeCard
              key={`${entry.collection}-${entry.slug}`}
              href={`/${entry.collection}/${entry.slug}`}
              title={entry.frontmatter.title}
              summary={entry.frontmatter.summary}
              date={entry.frontmatter.date}
              meta={entry.collection}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
