import { LabHero } from '@/components/lab/hero';
import { Now } from '@/components/lab/now';
import { LabProjects } from '@/components/lab/projects';
import { LabContact, LabNotes, Signals, Toolshed } from '@/components/lab/sections';

export default function LabPage() {
  return (
    <>
      <LabHero />
      <Now />
      <LabProjects />
      <LabNotes />
      <Toolshed />
      <Signals />
      <LabContact />
    </>
  );
}
