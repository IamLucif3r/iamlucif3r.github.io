'use client';

import { useRef } from 'react';
import { useCalmMotion } from '@/lib/use-calm-motion';
import { m, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/cn';

/**
 * A tasteful 3D hover tilt for cards and the portrait. Tracks the cursor
 * position within the element and maps it to a small rotation. Disabled
 * under reduced-motion and on touch devices.
 */
export function Tilt({
  children,
  className,
  max = 7,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const calm = useCalmMotion();
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), {
    stiffness: 200,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), {
    stiffness: 200,
    damping: 22,
  });

  if (calm) {
    return <div className={className}>{children}</div>;
  }

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <m.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={cn('will-change-transform', className)}
    >
      {children}
    </m.div>
  );
}
