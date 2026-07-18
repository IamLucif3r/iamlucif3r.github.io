import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="content-wrap footer-grid">
        <div>
          <p className="footer-heading">Research Headquarters</p>
          <p className="footer-copy">
            A long-horizon body of cybersecurity research connecting ideas, systems and field experiments.
          </p>
        </div>
        <div>
          <p className="footer-heading">Explore</p>
          <ul>
            <li>
              <Link href="/research">Research</Link>
            </li>
            <li>
              <Link href="/technologies">Technologies</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/talks">Talks</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
