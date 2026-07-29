export interface NavItem {
  label: string;
  href: string;
  /** Marks the single primary call to action. */
  cta?: boolean;
}

/** Anchor links into the homepage narrative, in page order. */
export const navItems: NavItem[] = [
  { label: 'Work', href: '/#work' },
  { label: 'Writing', href: '/#writing' },
  { label: 'Speaking', href: '/#speaking' },
  { label: 'About', href: '/#about' },
  { label: 'Résumé', href: '/cv' },
  { label: 'Contact', href: '/#contact', cta: true },
];
