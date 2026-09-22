/**
 * Canonical origin for the public site.
 *
 * Used as Next.js `metadataBase` so route segments can declare canonical and
 * Open Graph URLs as relative paths, and as the base for sitemap entries.
 * No trailing slash, because paths are appended directly.
 */
export const SITE_URL = 'https://shorelinetutoring.com.au';

/** Contact phone: international form for tel: links and structured data, local form for display. */
export const CONTACT_PHONE_E164 = '+61452360688';
export const CONTACT_PHONE_DISPLAY = '0452 360 688';

export const CONTACT_EMAIL = 'contact@shorelinetutoring.com.au';

/** The index page above every subject page. */
export const SUBJECTS_PATH = '/subjects';

/** The privacy policy, linked from the footer. */
export const PRIVACY_PATH = '/privacy';

/**
 * The picture messaging apps and social sites show when a link to the site is
 * shared. PNG rather than the site's WebP images: WhatsApp and some other apps
 * will not render a WebP link preview. Its dimensions are declared so apps can
 * reserve the right space before it loads.
 */
export const SHARE_IMAGE = {
    url: '/share-image.png',
    width: 1920,
    height: 1080,
    alt: 'Shoreline Tutoring',
};
