import { SideShell } from '@/components/layout/side-shell';

/** The work side: light, professional, recruiter-first. */
export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <SideShell side="work">{children}</SideShell>;
}
