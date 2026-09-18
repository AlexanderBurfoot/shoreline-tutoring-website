/**
 * Lets a booking button choose the enquiry form's learning format as it jumps
 * the visitor down to the form on the same page. A window event rather than a
 * URL parameter, so the click stays an ordinary in-page jump and the address
 * bar stays clean.
 */
const ENQUIRY_FORMAT_EVENT = 'shoreline:enquiry-format';

export function requestEnquiryFormat(format: string) {
    window.dispatchEvent(new CustomEvent<string>(ENQUIRY_FORMAT_EVENT, { detail: format }));
}

/** Calls the handler with each requested format. Returns the unsubscribe function. */
export function onEnquiryFormatRequest(handler: (format: string) => void): () => void {
    const listener = (event: Event) => handler((event as CustomEvent<string>).detail);
    window.addEventListener(ENQUIRY_FORMAT_EVENT, listener);
    return () => window.removeEventListener(ENQUIRY_FORMAT_EVENT, listener);
}
