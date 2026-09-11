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
