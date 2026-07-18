type TocProps = {
  headings: Array<{ id: string; text: string; level: number }>;
};

export function Toc({ headings }: TocProps) {
  if (headings.length === 0) {
    return null;
  }

  return (
    <aside className="toc" aria-label="Table of contents">
      <p>Contents</p>
      <ol>
        {headings.map((heading) => (
          <li key={heading.id} data-level={heading.level}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ol>
    </aside>
  );
}
