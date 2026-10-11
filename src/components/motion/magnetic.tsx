'use client';

import { useRef, useState } from 'react';
import { useCalmMotion } from '@/lib/use-calm-motion';
import { m } from 'framer-motion';
import { cn } from '@/lib/cn';

/**
 * Wraps an interactive element and gives it a gentle magnetic pull toward
 * the cursor. Disabled under reduced-motion and on touch devices.
 */
export function Magnetic({
  children,
  className,
  strength = 0.3,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const calm = useCalmMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  if (calm) {
    return <div className={className}>{children}</div>;
  }

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setOffset({
      x: (e.clientX - rect.left - rect.width / 2) * strength,
      y: (e.clientY - rect.top - rect.height / 2) * strength,
    });
  }

  function handleLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <m.div
      ref={ref}
      data-cursor="magnetic"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.4 }}
      className={cn('inline-block will-change-transform', className)}
    >
      {children}
    </m.div>
  );
}
