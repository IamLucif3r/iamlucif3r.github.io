#!/usr/bin/env node
/**
 * Scaffold a research article as markdown.
 *   pnpm article "Kata Containers notes" --category cloud-containers
 * Then edit the file, commit, and push — the site rebuilds from these files.
 */
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const categoryIdx = args.indexOf('--category');
const category = categoryIdx !== -1 ? args[categoryIdx + 1] : undefined;
const title = args
  .filter((a, i) => a !== '--category' && i !== categoryIdx + 1)
  .join(' ')
  .trim();

const VALID_CATEGORIES = [
  'infrastructure',
  'cloud-containers',
  'ai-security',
  'offensive-security',
  'scripts-tools',
];

if (!title || !category || !VALID_CATEGORIES.includes(category)) {
  console.error('Usage: pnpm article "Title" --category <' + VALID_CATEGORIES.join('|') + '>');
  process.exit(1);
}

const date = new Date().toISOString().slice(0, 10);
const slug = title
  .toLowerCase()
  .replace(/[^\da-z]+/g, '-')
  .replace(/^-+|-+$/g, '')
  .slice(0, 48);

const dir = path.join(process.cwd(), 'content', 'research', category);
const file = path.join(dir, `${date}-${slug}.md`);

const frontmatter = `---\ntitle: ${title}\ndate: ${date}\nsummary:\n---\n\n`;

fs.mkdirSync(dir, { recursive: true });
if (fs.existsSync(file)) {
  console.error(`Already exists: ${path.relative(process.cwd(), file)}`);
  process.exit(1);
}
fs.writeFileSync(file, frontmatter);
console.log(`Created ${path.relative(process.cwd(), file)} — edit the body and commit.`);
