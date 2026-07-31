/** Google truncates meta descriptions in results at roughly this length. */
export const META_DESCRIPTION_MAX_LENGTH = 160;

/**
 * Collapse whitespace and trim `text` to a length search engines will display
 * in full, cutting at a word boundary rather than mid-word.
 *
 * Source copy (blog excerpts, subject blurbs) is written for the page, not for
 * search results, so it is routinely longer than the display limit.
 */
export function truncateForMeta(
    text: string,
    maxLength: number = META_DESCRIPTION_MAX_LENGTH,
): string {
    const collapsed = text.replace(/\s+/g, ' ').trim();
    if (collapsed.length <= maxLength) {
        return collapsed;
    }

    // Reserve one character for the ellipsis.
    const cutoff = collapsed.slice(0, maxLength - 1);
    const lastSpace = cutoff.lastIndexOf(' ');
    const trimmed = lastSpace > 0 ? cutoff.slice(0, lastSpace) : cutoff;

    return `${trimmed.replace(/[,;:.\s]+$/, '')}…`;
}

/**
 * Convert a human-readable post date (e.g. "March 19, 2025") to the ISO 8601
 * string Open Graph's `article:published_time` expects. Returns undefined for
 * unparseable input so the tag is omitted rather than emitted malformed.
 */
export function toIsoDate(date: string): string | undefined {
    const parsed = new Date(date);
    return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString();
}
