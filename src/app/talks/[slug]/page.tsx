import { EntryLayout, getEntryStaticParams } from '@/components/entry-layout';

export function generateStaticParams() {
  return getEntryStaticParams('talks');
}

export default async function TalkEntryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <EntryLayout collection="talks" slug={slug} />;
}
