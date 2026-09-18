"use client";
import { useId, useState } from 'react';
import { trackEvent } from '../lib/analytics';
import {
    VENUE_ADDRESS,
    VENUE_MAP_EMBED_URL,
    VENUE_MAP_URL,
    VENUE_WALKING_ROUTES,
} from '../data/groupClassLaunch';

const ArrowIcon = () => (
    <svg className="icon-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

const PinIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const WalkingIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="13" cy="4" r="2" />
        <path d="M9 21l2-6 3 3v3" />
        <path d="M11 15l1-5-3 2-2-1" />
        <path d="M12 10l3 3 3 1" />
    </svg>
);

/** The live map and walking directions, shown once the visitor opens them. */
const MapPanel = () => (
    <>
        <iframe
            className="facilities__map-frame"
            src={VENUE_MAP_EMBED_URL}
            title={`Map of Shoreline Tutoring at ${VENUE_ADDRESS}`}
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
        />
        <div className="facilities__walking">
            {VENUE_WALKING_ROUTES.map((route) => (
                <a key={route.label} className="facilities__walking-link" href={route.url} target="_blank" rel="noopener noreferrer">
                    <WalkingIcon />
                    {route.label}
                </a>
            ))}
        </div>
    </>
);

/**
 * The venue address, with a map that opens beneath it on request. The map is
 * loaded only on the first open, so visitors who never ask for it download
 * nothing from Google Maps; after that it stays loaded, so closing and
 * reopening is instant.
 */
const VenueMap = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const panelId = useId();

    const toggleMap = () => {
        if (!isOpen && !hasLoaded) {
            setHasLoaded(true);
            trackEvent('venue_map_opened');
        }
        setIsOpen(!isOpen);
    };

    return (
        <div className={`facilities__venue ${isOpen ? 'facilities__venue--open' : ''}`}>
            <div className="facilities__address">
                <span className="facilities__address-icon" aria-hidden="true">
                    <PinIcon />
                </span>
                <span className="facilities__address-text">
                    <span className="facilities__address-label">Saturday group classes are held at</span>
                    <strong className="facilities__address-line">{VENUE_ADDRESS}</strong>
                </span>
                <div className="facilities__address-actions">
                    <button
                        type="button"
                        className="facilities__map-toggle"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={toggleMap}
                    >
                        {isOpen ? 'Hide map' : 'Show map'}
                    </button>
                    <a className="facilities__address-cta" href={VENUE_MAP_URL} target="_blank" rel="noopener noreferrer">
                        Open in Google Maps
                        <ArrowIcon />
                    </a>
                </div>
            </div>
            {/* Always in the page so the open and close can animate; inert while
                closed so its links cannot be reached by keyboard. */}
            <div id={panelId} className="facilities__map-panel" inert={!isOpen}>
                <div className="facilities__map-inner">
                    {hasLoaded && <MapPanel />}
                </div>
            </div>
        </div>
    );
};

export default VenueMap;
