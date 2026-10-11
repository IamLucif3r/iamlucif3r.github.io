import { WorkHero } from '@/components/work/hero';
import { Impact } from '@/components/work/impact';
import { CaseStudies } from '@/components/work/case-studies';
import { Expertise } from '@/components/work/expertise';
import { Experience } from '@/components/work/experience';
import { Writing } from '@/components/work/writing';
import { WorkContact } from '@/components/work/contact';
import { ContinueInLab, LabTeaser } from '@/components/work/lab-teaser';

export default function HomePage() {
  return (
    <>
      <WorkHero />
      <Impact />
      <CaseStudies />
      <Expertise />
      <Experience />
      <Writing />
      <WorkContact />
      <LabTeaser />
      <ContinueInLab />
    </>
  );
}
