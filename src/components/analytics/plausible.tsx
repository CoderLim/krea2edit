// Plausible / Pageview-compatible tracker. Rendered as a native <script> so
// the tag lands in SSR HTML (visible in View Source + crawlers).
// Matches: <script defer data-domain="..." src="..."></script>
export function Plausible({
  domain,
  src = 'https://plausible.io/js/script.js',
}: {
  domain?: string;
  src?: string;
}) {
  if (!src) return null;

  return (
    <script
      id="plausible-loader"
      defer
      data-domain={domain || undefined}
      src={src}
    />
  );
}
