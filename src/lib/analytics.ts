/**
 * Thin wrapper over the Google Tag Manager data layer.
 *
 * GTM is loaded in the root layout, but the queue is created here as well so
 * events pushed before the container finishes loading are not lost, and so
 * pushes are harmless if GTM is blocked entirely.
 */

interface DataLayerWindow extends Window {
    dataLayer?: Record<string, unknown>[];
}

export function trackEvent(event: string, payload: Record<string, unknown> = {}): void {
    if (typeof window === 'undefined') return;
    try {
        const target = window as DataLayerWindow;
        target.dataLayer = target.dataLayer ?? [];
        target.dataLayer.push({ event, ...payload });
    } catch {
        // Analytics must never break the page.
    }
}

/** Google Ads account tag, loaded in the root layout. */
export const GOOGLE_ADS_ID = 'AW-18035092381';

/**
 * Conversion label from the Google Ads conversion action, e.g. 'AbCdEfGhIj'.
 * Until it is set the account tag still loads, so remarketing works, but no
 * conversion is reported.
 */
export const GOOGLE_ADS_CONVERSION_LABEL = '';

interface GtagWindow extends Window {
    gtag?: (...args: unknown[]) => void;
}

/**
 * Reports a completed enquiry to Google Ads. Called from the form rather than
 * from /thank-you, so a visitor who bookmarks that page cannot inflate the count.
 */
export function trackAdsConversion(): void {
    if (typeof window === 'undefined' || !GOOGLE_ADS_CONVERSION_LABEL) return;
    try {
        (window as GtagWindow).gtag?.('event', 'conversion', {
            send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
        });
    } catch {
        // Analytics must never break the page.
    }
}
