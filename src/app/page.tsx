import { Hero } from '@/components/sections/hero';
import { Lens } from '@/components/sections/lens';
import { Proof } from '@/components/sections/proof';
import { Work } from '@/components/sections/work';
import { Signal } from '@/components/sections/signal';
import { Invitation } from '@/components/sections/invitation';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Lens />
      <Proof />
      <Work />
      <Signal />
      <Invitation />
    </>
  );
}
