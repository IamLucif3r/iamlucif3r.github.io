export default function AboutPage() {
  return (
    <div className="content-wrap static-page">
      <header className="collection-header">
        <p className="eyebrow">About This Headquarters</p>
        <h1>Research is treated as infrastructure.</h1>
        <p>
          This platform is designed for permanence: ideas move from observation to experiment to publication, and relationships are
          preserved over time.
        </p>
      </header>

      <section className="prose-block">
        <h2>Method</h2>
        <p>
          Every entry is stored in git with structured metadata and linked entities. Technologies map to projects, projects map to
          talks, and talks map back to foundational research.
        </p>
        <h2>Scope</h2>
        <p>
          The scope includes protocol behavior, identity systems, infrastructure assumptions, and the predictive signals that precede
          system failure.
        </p>
      </section>
    </div>
  );
}
