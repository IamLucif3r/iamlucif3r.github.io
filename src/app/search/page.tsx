import { SearchShell } from '@/components/search-shell';

export default function SearchPage() {
  return (
    <div className="content-wrap static-page">
      <header className="collection-header">
        <p className="eyebrow">Knowledge Search</p>
        <h1>Search relationships, not just pages.</h1>
        <p>
          Query research, technologies, projects and talks in one place. Results are generated from static content using Pagefind.
        </p>
      </header>
      <SearchShell />
    </div>
  );
}
