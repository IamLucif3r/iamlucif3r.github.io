'use client';

import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import type { Metric } from '@/types';
import { metrics, proofClose } from '@/content/metrics';
import { Container } from '@/components/ui/container';

/**
 * The proof centerpiece. A tall scroll region with a sticky stage: as the
 * visitor scrolls, metrics fade through one at a time. Uses native scroll
 * (no scroll-jacking). Under reduced-motion, renders as stacked static beats.
 */
export function PinnedProof() {
  const reduce = useReducedMotion();

  if (reduce) {
    return <StaticProof />;
  }

  return <PinnedStage />;
}

function PinnedStage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const count = metrics.length;

  return (
    <div ref={ref} style={{ height: `${count * 100}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-bg-inset">
        <Container className="relative">
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-8">
            <ProofProgress progress={scrollYProgress} count={count} />
          </div>
          <div className="relative mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center text-center">
            {metrics.map((metric, i) => (
              <Beat
                key={metric.value}
                metric={metric}
                index={i}
                count={count}
                progress={scrollYProgress}
                isLast={i === count - 1}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

function Beat({
  metric,
  index,
  count,
  progress,
  isLast,
}: {
  metric: Metric;
  index: number;
  count: number;
  progress: MotionValue<number>;
  isLast: boolean;
}) {
  const seg = 1 / count;
  const start = index * seg;
  const end = start + seg;
  const fade = seg * 0.28;

  // First beat should be visible immediately; last should hold to the end.
  const inPoints = index === 0 ? [start, start] : [start, start + fade];
  const outPoints = isLast ? [end, end] : [end - fade, end];

  const opacity = useTransform(
    progress,
    [inPoints[0], inPoints[1], outPoints[0], outPoints[1]],
    [index === 0 ? 1 : 0, 1, 1, isLast ? 1 : 0],
  );
  const y = useTransform(
    progress,
    [inPoints[0], inPoints[1], outPoints[0], outPoints[1]],
    [index === 0 ? 0 : 24, 0, 0, isLast ? 0 : -24],
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col items-center justify-center gap-6"
    >
      <p className="tabular font-mono text-metric font-medium text-ink-primary">
        {metric.value}
      </p>
      <span aria-hidden className="h-[2px] w-12 bg-accent" />
      <p className="font-mono text-kicker uppercase text-ink-tertiary">{metric.unit}</p>
      <p className="max-w-xl text-balance font-sans text-body-l text-ink-secondary">
        {metric.context}
      </p>
      {isLast && (
        <p className="mt-4 font-serif text-body-l italic text-ink-secondary">
          {proofClose}
        </p>
      )}
    </motion.div>
  );
}

function ProofProgress({
  progress,
  count,
}: {
  progress: MotionValue<number>;
  count: number;
}) {
  return (
    <div className="mx-auto flex max-w-3xl justify-center gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <Tick key={i} index={i} count={count} progress={progress} />
      ))}
    </div>
  );
}

function Tick({
  index,
  count,
  progress,
}: {
  index: number;
  count: number;
  progress: MotionValue<number>;
}) {
  const seg = 1 / count;
  const opacity = useTransform(
    progress,
    [index * seg, index * seg + 0.001, (index + 1) * seg],
    [0.25, 1, 1],
  );
  return <motion.span style={{ opacity }} className="h-px w-8 bg-accent" />;
}

/** Reduced-motion fallback: every metric shown as a clear static block. */
function StaticProof() {
  return (
    <div className="bg-bg-inset py-section">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col gap-16 text-center">
          {metrics.map((metric) => (
            <div key={metric.value} className="flex flex-col items-center gap-4">
              <p className="tabular font-mono text-metric font-medium text-ink-primary">
                {metric.value}
              </p>
              <span aria-hidden className="h-[2px] w-12 bg-accent" />
              <p className="font-mono text-kicker uppercase text-ink-tertiary">
                {metric.unit}
              </p>
              <p className="max-w-xl text-balance font-sans text-body-l text-ink-secondary">
                {metric.context}
              </p>
            </div>
          ))}
          <p className="font-serif text-body-l italic text-ink-secondary">{proofClose}</p>
        </div>
      </Container>
    </div>
  );
}
