'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

type CursorState = 'default' | 'pointer' | 'text' | 'magnetic';

const SIZES: Record<CursorState, { w: number; h: number }> = {
  default: { w: 10, h: 10 },
  pointer: { w: 40, h: 40 },
  magnetic: { w: 52, h: 52 },
  text: { w: 3, h: 22 },
};

/**
 * A subtle, intelligent custom cursor — desktop (fine pointer) only.
 * Reads a `data-cursor` attribute on hovered elements to switch state;
 * falls back to tag-based heuristics. No-op under reduced-motion.
 */
export function Cursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState<CursorState>('default');
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 600, damping: 45, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 600, damping: 45, mass: 0.4 });

  useEffect(() => {
    if (reduce) return;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    setEnabled(true);
    document.documentElement.classList.add('cursor-none');

    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as HTMLElement)?.closest?.(
        '[data-cursor], a, button, input, textarea',
      );
      if (!target) {
        setState('default');
        return;
      }
      const explicit = target.getAttribute('data-cursor') as CursorState | null;
      if (explicit) {
        setState(explicit);
        return;
      }
      const tag = target.tagName.toLowerCase();
      setState(tag === 'input' || tag === 'textarea' ? 'text' : 'pointer');
    }

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.documentElement.classList.remove('cursor-none');
    };
  }, [reduce, x, y]);

  if (!enabled || reduce) return null;

  const size = SIZES[state];

  return (
    <motion.div
      aria-hidden
      style={{ translateX: springX, translateY: springY }}
      className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
    >
      <motion.span
        animate={{ width: size.w, height: size.h }}
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
        className="block rounded-full bg-white"
      />
    </motion.div>
  );
}
