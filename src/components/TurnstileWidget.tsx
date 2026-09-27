"use client";
import { useEffect, useRef } from 'react';

/**
 * Cloudflare Turnstile, which checks that a person is filling in the enquiry
 * form. In "interaction-only" mode it stays invisible for almost everyone and
 * only shows a checkbox when Cloudflare is unsure.
 *
 * Set NEXT_PUBLIC_TURNSTILE_SITE_KEY to turn it on; unset, nothing loads and
 * the form works exactly as before. The server half is src/lib/turnstile.ts.
 */
const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

interface TurnstileApi {
    render: (container: HTMLElement, options: Record<string, unknown>) => string;
    remove: (widgetId: string) => void;
}

declare global {
    interface Window {
        turnstile?: TurnstileApi;
    }
}

/** Loaded once per visit, however many forms render the widget. */
let scriptLoading: Promise<void> | null = null;

function loadScript(): Promise<void> {
    scriptLoading ??= new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = SCRIPT_SRC;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Turnstile script failed to load'));
        document.head.appendChild(script);
    });
    return scriptLoading;
}

interface TurnstileWidgetProps {
    /** Receives a fresh token, or null when the last one expired or errored. Must be stable. */
    onToken: (token: string | null) => void;
}

const TurnstileWidget = ({ onToken }: TurnstileWidgetProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!SITE_KEY) return;
        let widgetId: string | undefined;
        let cancelled = false;

        loadScript()
            .then(() => {
                if (cancelled || !containerRef.current || !window.turnstile) return;
                widgetId = window.turnstile.render(containerRef.current, {
                    sitekey: SITE_KEY,
                    appearance: 'interaction-only',
                    callback: (token: string) => onToken(token),
                    'expired-callback': () => onToken(null),
                    'error-callback': () => onToken(null),
                });
            })
            // Blocked by an extension or a network: the enquiry still goes
            // through, just marked unverified on the server.
            .catch(() => onToken(null));

        return () => {
            cancelled = true;
            if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
        };
    }, [onToken]);

    if (!SITE_KEY) return null;
    return <div ref={containerRef} className="cta__turnstile" />;
};

export default TurnstileWidget;
