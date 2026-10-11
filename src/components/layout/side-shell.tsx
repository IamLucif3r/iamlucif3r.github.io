import type { Side } from '@/config/site';
import { Nav } from '@/components/layout/nav';
import { Footer } from '@/components/layout/footer';
import { SideSync } from '@/components/layout/side-sync';
import { ScrollToTop } from '@/components/ui/scroll-to-top';

/**
 * Page chrome for one side of the site. The `dark` wrapper makes the lab
 * render dark straight from the static HTML; SideSync keeps <html> in step.
 */
export function SideShell({
  side,
  children,
  backdrop,
}: {
  side: Side;
  children: React.ReactNode;
  /** Fixed decorative layer behind the page (the lab's starfield). */
  backdrop?: React.ReactNode;
}) {
  return (
    <div className={side === 'lab' ? 'dark' : undefined} data-side={side}>
      <SideSync side={side} />
      {backdrop}
      <Nav side={side} />
      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <Footer side={side} />
      <ScrollToTop />
    </div>
  );
}
