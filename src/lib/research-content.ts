import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';
import type { ResearchArticle } from '@/types';

/**
 * Build-time content loader for the research notebook. Reads flat
 * `key: value` frontmatter + markdown body from content/research/<category>
 * and renders the body to HTML. Logging a new entry is just dropping a new
 * .md file. Runs during static export.
 */

const CONTENT_ROOT = path.join(process.cwd(), 'content');
const RESEARCH_DIR = path.join(CONTENT_ROOT, 'research');

/** Folder name under content/research -> display label. Add a folder + a line here for a new category. */
const CATEGORY_LABELS: Record<string, string> = {
  infrastructure: 'Infrastructure',
  'cloud-containers': 'Cloud & Containers',
  'ai-security': 'AI Security',
  'offensive-security': 'Offensive Security',
  'scripts-tools': 'Scripts & Tools',
};

marked.setOptions({ gfm: true, breaks: false });

/** Copies content/research/assets/* to public/research-assets/* so Markdown images are servable. */
function syncResearchAssets(): void {
  const src = path.join(RESEARCH_DIR, 'assets');
  if (!fs.existsSync(src)) return;
  const dest = path.join(process.cwd(), 'public', 'research-assets');
  fs.rmSync(dest, { recursive: true, force: true });
  fs.mkdirSync(dest, { recursive: true });
  for (const file of fs.readdirSync(src)) {
    if (file === 'README.md') continue;
    fs.copyFileSync(path.join(src, file), path.join(dest, file));
  }
}
syncResearchAssets();

interface ParsedFile {
  data: Record<string, string>;
  body: string;
}

function parseFrontmatter(raw: string): ParsedFile {
  const match = /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, body: raw.trim() };

  const [, frontmatter, body] = match;
  const data: Record<string, string> = {};
  for (const line of frontmatter.split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (key) data[key] = value;
  }
  return { data, body: body.trim() };
}

interface ParsedArticleFile extends ParsedFile {
  slug: string;
}

function readCategoryFiles(category: string): ParsedArticleFile[] {
  const full = path.join(RESEARCH_DIR, category);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({
      slug: file.replace(/\.md$/, ''),
      ...parseFrontmatter(fs.readFileSync(path.join(full, file), 'utf8')),
    }));
}

/** First paragraph of the body, used as a teaser when no `summary` is set. */
function firstParagraph(body: string): string {
  return body.split(/\n\s*\n/)[0]?.replace(/\s+/g, ' ').trim() ?? '';
}

/** Rewrites `assets/foo.png` refs to the copied, publicly servable location. */
function toHtml(body: string): string {
  const html = marked.parse(body, { async: false }) as string;
  return html.replace(/(src=["'])assets\//g, '$1/research-assets/');
}

export function getResearchArticles(): ResearchArticle[] {
  return Object.keys(CATEGORY_LABELS)
    .flatMap((category) =>
      readCategoryFiles(category).map(({ slug, data, body }) => ({
        category,
        categoryLabel: CATEGORY_LABELS[category],
        slug,
        title: data.title ?? 'Untitled',
        date: data.date ?? '',
        summary: data.summary || firstParagraph(body),
        bodyHtml: toHtml(body),
        href: data.href || undefined,
        hrefLabel: data.hrefLabel || undefined,
      })),
    )
    .sort((a, b) => b.date.localeCompare(a.date));
}
