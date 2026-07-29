import { Hero } from '@/components/sections/hero';
import { Proof } from '@/components/sections/proof';
import { Capabilities } from '@/components/sections/capabilities';
import { Work } from '@/components/sections/work';
import { Writing } from '@/components/sections/writing';
import { Speaking } from '@/components/sections/speaking';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Proof />
      <Capabilities />
      <Work />
      <Writing />
      <Speaking />
      <About />
      <Contact />
    </>
  );
}
