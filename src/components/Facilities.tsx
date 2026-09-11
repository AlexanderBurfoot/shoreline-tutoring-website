import ScrollReveal from './ScrollReveal';
import FacilitiesShowcase from './FacilitiesShowcase';
import './Facilities.css';
import { VENUE_ADDRESS } from '../data/groupClassLaunch';

/**
 * Homepage band for the St Leonards premises. Sits between "what we teach" and
 * the student testimonials, so the page runs: what, where, and then proof.
 */
const Facilities = () => (
    <section className="facilities section" id="facilities">
        <div className="container">
            <ScrollReveal width="100%">
                <div className="facilities__header">
                    <span className="section-eyebrow">Where We Teach</span>
                    <h2 className="facilities__title">
                        Our <span className="gold-text">St Leonards</span> rooms
                    </h2>
                    <p className="facilities__subtitle">
                        Our Saturday small-group classes run from a proper teaching space at {VENUE_ADDRESS},
                        a short walk from the station. Prefer to learn from home?
                        Every class runs live online too.
                    </p>
                </div>
            </ScrollReveal>

            <FacilitiesShowcase />
        </div>
    </section>
);

export default Facilities;
