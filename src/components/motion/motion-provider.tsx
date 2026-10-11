'use client';

import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';

/**
 * Loads only the animation features the site uses. Components use `m.*`
 * instead of `motion.*`; `strict` catches any full `motion` import.
 * `reducedMotion="user"` drops transform animations for reduced-motion users
 * without changing the rendered markup (so hydration always matches).
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
