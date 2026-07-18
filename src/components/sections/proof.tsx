import { Container } from '@/components/ui/container';
import { Kicker } from '@/components/ui/kicker';
import { Reveal } from '@/components/motion/reveal';
import { PinnedProof } from '@/components/motion/pinned-proof';

export function Proof() {
  return (
    <section aria-label="Proof at scale">
      {/* V3 — the breath before the reveal. */}
      <div className="flex min-h-[55vh] items-center">
        <Container>
          <div className="mx-auto max-w-measure text-center">
            <Reveal>
              <Kicker className="justify-center">The seams, at scale</Kicker>
            </Reveal>
          </div>
        </Container>
      </div>

      {/* V4 — the pinned proof sequence. */}
      <PinnedProof />
    </section>
  );
}
