import type { Side } from '@/config/site';

export interface NavItem {
  label: string;
  href: string;
  /** Section id this item tracks for the active-state highlight. */
  sectionId?: string;
  /** Marks the single primary call to action. */
  cta?: boolean;
}

/** Work side (light): follows the homepage narrative top to bottom. */
const workNav: NavItem[] = [
  { label: 'Work', href: '/#work', sectionId: 'work' },
  { label: 'Expertise', href: '/#expertise', sectionId: 'expertise' },
  { label: 'Experience', href: '/#experience', sectionId: 'experience' },
  { label: 'Writing', href: '/#writing', sectionId: 'writing' },
  { label: 'Résumé', href: '/cv/' },
  { label: 'Contact', href: '/#contact', sectionId: 'contact', cta: true },
];

/** Lab side (dark): the after-hours notebook. */
const labNav: NavItem[] = [
  { label: 'Projects', href: '/lab/#projects', sectionId: 'projects' },
  { label: 'Notes', href: '/lab/#notes', sectionId: 'notes' },
  { label: 'Toolshed', href: '/lab/#toolshed', sectionId: 'toolshed' },
  { label: 'Signals', href: '/lab/#signals', sectionId: 'signals' },
  { label: 'Say hi', href: '/lab/#contact', sectionId: 'contact', cta: true },
];

export const navItems: Record<Side, NavItem[]> = { work: workNav, lab: labNav };
