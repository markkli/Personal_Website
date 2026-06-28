/**
 * Persistent, faint aurora that sits fixed behind every section.
 * The hero renders its own brighter aurora scene on top of this; once you
 * scroll past the hero, this keeps a subtle living glow under the whole site.
 * Sections use translucent backgrounds so this bleeds through faintly.
 */
export default function AuroraBackground() {
  return (
    <div className="site-aurora" aria-hidden>
      <div className="glow glow-a" />
      <div className="glow glow-b" />
      <div className="glow glow-c" />
    </div>
  );
}
