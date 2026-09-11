import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import './FacilitiesShowcase.css';
import {
    FACILITY_HIGHLIGHTS,
    FACILITY_IMAGES,
    VENUE_ADDRESS,
    VENUE_MAP_URL,
} from '../data/groupClassLaunch';

/**
 * The St Leonards premises: address, what the space offers, and photographs.
 *
 * Rendered inside a section supplied by the caller, so it can sit in the
 * format pages' alternating section shell and in a standalone homepage band
 * without duplicating the markup.
 */
const FacilitiesShowcase = () => (
    <>
        <ScrollReveal width="100%">
            <a
                className="facilities__address"
                href={VENUE_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="facilities__address-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                </span>
                <span className="facilities__address-text">
                    <span className="facilities__address-label">Saturday group classes are held at</span>
                    <strong className="facilities__address-line">{VENUE_ADDRESS}</strong>
                </span>
                <span className="facilities__address-cta">
                    View on map
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </span>
            </a>
        </ScrollReveal>

        {FACILITY_IMAGES.length > 0 && (
            <div className="facilities__gallery">
                {FACILITY_IMAGES.map((image, index) => (
                    <ScrollReveal key={image.src} width="100%" delay={index * 90}>
                        <figure className="facilities__figure">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                                className="facilities__image"
                            />
                        </figure>
                    </ScrollReveal>
                ))}
            </div>
        )}

        <div className="facilities__highlights">
            {FACILITY_HIGHLIGHTS.map((highlight, index) => (
                <ScrollReveal key={highlight.title} width="100%" delay={index * 90}>
                    <div className="facilities__highlight">
                        <span className="facilities__highlight-check" aria-hidden="true">✓</span>
                        <h3 className="facilities__highlight-title">{highlight.title}</h3>
                        <p className="facilities__highlight-description">{highlight.description}</p>
                    </div>
                </ScrollReveal>
            ))}
        </div>
    </>
);

export default FacilitiesShowcase;
