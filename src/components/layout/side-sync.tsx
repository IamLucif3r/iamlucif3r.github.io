'use client';

import { useEffect } from 'react';
import type { Side } from '@/config/site';

/**
 * The head script sets the theme on full page loads. This covers client-side
 * navigations that cross sides (e.g. from the command palette).
 */
export function SideSync({ side }: { side: Side }) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', side === 'lab');
    root.dataset.side = side;
  }, [side]);

  return null;
}
