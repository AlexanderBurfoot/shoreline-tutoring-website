/**
 * schema.org structured data, shared so every page describes the business the
 * same way. Rendered through the JsonLd component.
 */
import { truncateForMeta, toIsoDate } from './metadata';
import { CONTACT_EMAIL, CONTACT_PHONE_E164, SITE_URL } from './site';
import { VENUE_POSTAL_ADDRESS } from '../data/groupClassLaunch';
import type { BlogPost } from '../data/blogData';

/** Google truncates an article headline in rich results beyond this length. */
const HEADLINE_MAX_LENGTH = 110;

const absolute = (path: string) => (path.startsWith('http') ? path : `${SITE_URL}${path}`);

/**
 * The square logo Google shows beside the site, and its pixel size so the
 * proportions are declared rather than guessed at.
 *
 * This is deliberately not /Shoreline-Logo.png, the mark used on the site
 * itself. That file is 1966x1289, and Google fits the organisation logo into a
 * square slot, so it arrived squashed horizontally. It is also transparent, and
 * the colour stored underneath the transparency is a dark green, so flattening
 * the alpha turned the surround black. The file here is the same artwork at its
 * own proportions on an opaque navy square, which both problems disappear into.
 */
const LOGO_PATH = '/Shoreline-Logo-Google.png';
const LOGO_SIZE = 1024;

/** The business itself, for search results and map listings. */
export const ORGANIZATION_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Shoreline Tutoring',
    url: SITE_URL,
    logo: `${SITE_URL}${LOGO_PATH}`,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE_E164,
    address: VENUE_POSTAL_ADDRESS,
};

/** The same organisation as a nested reference, without repeating the details. */
const PUBLISHER = {
    '@type': 'Organization',
    name: ORGANIZATION_SCHEMA.name,
    url: SITE_URL,
    logo: {
        '@type': 'ImageObject',
        url: ORGANIZATION_SCHEMA.logo,
        width: LOGO_SIZE,
        height: LOGO_SIZE,
    },
};

/**
 * One article, so search engines can show its headline, date and image rather
 * than treating the page as untyped text.
 */
export function articleSchema(post: BlogPost) {
    const url = `${SITE_URL}/resources/${post.slug}`;
    const published = toIsoDate(post.date);

    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        url,
        headline: truncateForMeta(post.title, HEADLINE_MAX_LENGTH),
        description: truncateForMeta(post.excerpt),
        image: absolute(post.imageUrl),
        articleSection: post.category,
        author: { '@type': 'Organization', name: post.author, url: SITE_URL },
        publisher: PUBLISHER,
        // Posts are not revised individually, so the two dates match.
        ...(published ? { datePublished: published, dateModified: published } : {}),
    };
}

/**
 * The trail to the current page, which search results show in place of a bare
 * URL. Positions are 1-based, and the last item is the page itself.
 */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: trail.map((step, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: step.name,
            item: absolute(step.path),
        })),
    };
}
