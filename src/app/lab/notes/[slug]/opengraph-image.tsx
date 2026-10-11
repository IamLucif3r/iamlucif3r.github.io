import { getResearchArticle, getResearchArticles } from '@/lib/research-content';
import { ogCard, ogSize } from '@/lib/og';

export const alt = 'Lab note';
export const size = ogSize;
export const contentType = 'image/png';
export const dynamic = 'force-static';

export function generateStaticParams() {
  return getResearchArticles().map((note) => ({ slug: note.slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const found = getResearchArticle((await params).slug);
  return ogCard({
    side: 'lab',
    kicker: found ? `IamLucif3r · ${found.note.categoryLabel}` : 'IamLucif3r · The Lab',
    title: found?.note.title ?? 'Lab note',
    footer: 'anmolsinghyadav.com/lab',
  });
}
