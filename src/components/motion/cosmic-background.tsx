/** Full-page starfield with occasional shooting stars. Visible in research (dark) mode only. */
export function CosmicBackground() {
  return (
    <div aria-hidden className="starfield">
      <div className="starfield-glow" />
      <div className="starfield-layer starfield-layer--far" />
      <div className="starfield-layer starfield-layer--near" />
      <span className="shooting-star shooting-star--a" />
      <span className="shooting-star shooting-star--b" />
      <span className="shooting-star shooting-star--c" />
    </div>
  );
}
