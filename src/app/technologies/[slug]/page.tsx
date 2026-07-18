import { EntryLayout, getEntryStaticParams } from '@/components/entry-layout';

export function generateStaticParams() {
  return getEntryStaticParams('technologies');
}

export default async function TechnologyEntryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <EntryLayout collection="technologies" slug={slug} />;
}
