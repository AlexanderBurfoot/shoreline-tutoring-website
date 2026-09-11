/**
 * Renders schema.org structured data for search engines. `<` is escaped so a
 * value that happens to contain "</script>" cannot close the tag early.
 */
const JsonLd = ({ data }: { data: Record<string, unknown> }) => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
);

export default JsonLd;
