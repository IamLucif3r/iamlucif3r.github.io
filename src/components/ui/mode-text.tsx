import type { ReactNode } from 'react';

export function ModeText({
  platform,
  research,
}: {
  platform: ReactNode;
  research: ReactNode;
}) {
  return (
    <>
      <span className="dark:hidden">{platform}</span>
      <span className="hidden dark:inline">{research}</span>
    </>
  );
}
