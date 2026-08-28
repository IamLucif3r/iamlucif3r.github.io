import { Hero } from '@/components/sections/hero';
import { Proof } from '@/components/sections/proof';
import { Capabilities } from '@/components/sections/capabilities';
import { Work } from '@/components/sections/work';
import { Writing } from '@/components/sections/writing';
import { Speaking } from '@/components/sections/speaking';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { ResearchArticles } from '@/components/sections/research/articles';
import { ResearchToolshed } from '@/components/sections/research/scratch';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Platform site — the polished front. */}
      <div className="dark:hidden">
        <Proof />
        <Capabilities />
        <Work />
        <Writing />
        <Speaking />
        <About />
      </div>

      {/* Research notebook — a separate space, shown in research mode only. */}
      <div className="hidden dark:block">
        <ResearchArticles />
        <ResearchToolshed />
      </div>

      <Contact />
    </>
  );
}
