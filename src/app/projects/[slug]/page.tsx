import { EntryLayout, getEntryStaticParams } from '@/components/entry-layout';

export function generateStaticParams() {
  return getEntryStaticParams('projects');
}

export default async function ProjectEntryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <EntryLayout collection="projects" slug={slug} />;
}
