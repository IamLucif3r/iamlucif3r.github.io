import { siteConfig } from '@/config/site';
import { labIdentity } from '@/content/lab/identity';
import { getResearchArticles } from '@/lib/research-content';

export const dynamic = 'force-static';

function escape(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** RSS 2.0 feed of lab notes, generated at build time. */
export function GET() {
  const notes = getResearchArticles();
  const items = notes
    .map((note) => {
      const url = `${siteConfig.url}/lab/notes/${note.slug}/`;
      return `    <item>
      <title>${escape(note.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(note.date).toUTCString()}</pubDate>
      <category>${escape(note.categoryLabel)}</category>
      <description>${escape(note.summary)}</description>
      <content:encoded><![CDATA[${note.bodyHtml.replace(/]]>/g, ']]]]><![CDATA[>')}]]></content:encoded>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>The Lab — ${escape(labIdentity.handle)}</title>
    <link>${siteConfig.url}/lab/</link>
    <atom:link href="${siteConfig.url}/lab/feed.xml" rel="self" type="application/rss+xml" />
    <description>${escape(labIdentity.standfirst)}</description>
    <language>en</language>
    ${notes[0] ? `<lastBuildDate>${new Date(notes[0].date).toUTCString()}</lastBuildDate>` : ''}
${items}
  </channel>
</rss>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
