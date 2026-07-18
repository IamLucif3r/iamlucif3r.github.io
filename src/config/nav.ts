export interface NavItem {
  label: string;
  href: string;
  /** Marks the single primary call to action. */
  cta?: boolean;
}

export const navItems: NavItem[] = [
  { label: 'Résumé', href: '/cv' },
  { label: 'Get in touch', href: 'mailto:sanmol016@gmail.com', cta: true },
];
