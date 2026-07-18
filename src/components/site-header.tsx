import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/technologies', label: 'Technologies' },
  { href: '/projects', label: 'Projects' },
  { href: '/talks', label: 'Talks' },
  { href: '/about', label: 'About' },
  { href: '/search', label: 'Search' }
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="content-wrap header-inner">
        <Link href="/" className="brand" aria-label="Research Headquarters home">
          Research HQ
        </Link>
        <nav aria-label="Primary">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
