import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';
import readingTime from 'reading-time';

export const collections = ['research', 'technologies', 'projects', 'talks'] as const;

export type Collection = (typeof collections)[number];

export type EntryFrontmatter = {
  title: string;
  summary: string;
  date?: string;
  updated?: string;
  status?: string;
  technologies?: string[];
  projects?: string[];
  talks?: string[];
  research?: string[];
  references?: string[];
  evidence?: string[];
  location?: string;
  conference?: string;
};

export type Entry = {
  collection: Collection;
  slug: string;
  frontmatter: EntryFrontmatter;
  content: string;
  readingTime: string;
  headings: Array<{ id: string; text: string; level: number }>;
};

const contentRoot = path.join(process.cwd(), 'content');

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function readCollectionDir(collection: Collection): string {
  const dir = path.join(contentRoot, collection);
  if (!fs.existsSync(dir)) {
    return dir;
  }
  return dir;
}

function extractHeadings(raw: string): Array<{ id: string; text: string; level: number }> {
  const headingRegex = /^(##|###)\s+(.+)$/gm;
  const headings: Array<{ id: string; text: string; level: number }> = [];
  let match: RegExpExecArray | null = headingRegex.exec(raw);

  while (match) {
    const level = match[1] === '##' ? 2 : 3;
    const text = match[2].trim();
    headings.push({ id: slugify(text), text, level });
    match = headingRegex.exec(raw);
  }

  return headings;
}

function toEntry(collection: Collection, filePath: string): Entry {
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const slug = path.basename(filePath, '.mdx');

  return {
    collection,
    slug,
    frontmatter: data as EntryFrontmatter,
    content,
    readingTime: readingTime(content).text,
    headings: extractHeadings(content)
  };
}

export function getCollection(collection: Collection): Entry[] {
  const dir = readCollectionDir(collection);
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => path.join(dir, file));

  return files
    .map((filePath) => toEntry(collection, filePath))
    .sort((a, b) => {
      const aDate = a.frontmatter.date ? Date.parse(a.frontmatter.date) : 0;
      const bDate = b.frontmatter.date ? Date.parse(b.frontmatter.date) : 0;
      return bDate - aDate;
    });
}

export function getEntry(collection: Collection, slug: string): Entry | undefined {
  return getCollection(collection).find((entry) => entry.slug === slug);
}

export function getRelatedEntries(entry: Entry): Entry[] {
  const slugs = new Set<string>([
    ...(entry.frontmatter.technologies ?? []),
    ...(entry.frontmatter.projects ?? []),
    ...(entry.frontmatter.talks ?? []),
    ...(entry.frontmatter.research ?? [])
  ]);

  const allEntries = collections.flatMap((collection) => getCollection(collection));

  return allEntries.filter((candidate) => candidate.slug !== entry.slug && slugs.has(candidate.slug));
}

export function getLatestWork(limit = 6): Entry[] {
  return collections
    .flatMap((collection) => getCollection(collection))
    .sort((a, b) => {
      const aDate = a.frontmatter.date ? Date.parse(a.frontmatter.date) : 0;
      const bDate = b.frontmatter.date ? Date.parse(b.frontmatter.date) : 0;
      return bDate - aDate;
    })
    .slice(0, limit);
}
