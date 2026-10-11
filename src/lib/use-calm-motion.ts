'use client';

import { useEffect, useState } from 'react';

/**
 * True when pointer-following effects (tilt, magnetic pull) should be off:
 * reduced-motion users and devices without a precise hovering pointer.
 * Resolved after mount so the server and first client render always match.
 */
export function useCalmMotion() {
  const [calm, setCalm] = useState(false);
  useEffect(() => {
    setCalm(
      window.matchMedia('(prefers-reduced-motion: reduce), (hover: none), (pointer: coarse)').matches,
    );
  }, []);
  return calm;
}
