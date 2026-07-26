/**
 * Renders one or more JSON-LD nodes into a script tag. Server component — the
 * markup ships in the initial HTML so crawlers see it without executing JS.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const json = JSON.stringify(data);
  return (
    <script
      type="application/ld+json"
      // Content is our own structured data, not user input.
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
