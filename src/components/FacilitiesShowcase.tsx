import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import './FacilitiesShowcase.css';
import VenueMap from './VenueMap';
import { FACILITY_HIGHLIGHTS, FACILITY_IMAGES } from '../data/groupClassLaunch';

/**
 * The St Leonards premises: address and map, what the space offers, and photographs.
 *
 * Rendered inside a section supplied by the caller, so it can sit in the
 * format pages' alternating section shell and in a standalone homepage band
 * without duplicating the markup.
 */
const FacilitiesShowcase = () => (
    <>
        <ScrollReveal width="100%">
            <VenueMap />
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
