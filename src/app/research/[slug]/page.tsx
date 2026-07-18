import { EntryLayout, getEntryStaticParams } from '@/components/entry-layout';

export function generateStaticParams() {
  return getEntryStaticParams('research');
}

export default async function ResearchEntryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <EntryLayout collection="research" slug={slug} />;
}
