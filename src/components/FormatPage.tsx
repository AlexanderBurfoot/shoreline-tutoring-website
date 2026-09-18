import type { ReactNode } from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import ParallaxScene from './ParallaxScene';
import CTA from './CTA';
import FacilitiesShowcase from './FacilitiesShowcase';
import './FormatPage.css';
import { PRICING_SECTION_ID, type FormatPageContent, type Heading, type SectionHeader } from '../data/formatPages';
import { perLessonRate } from '../data/pricingData';

/** Anchor for the attendance-options section. */
const ATTENDANCE_SECTION_ID = 'attendance-options';

/** Anchor for the course-streams section, where a format has more than one. */
const COURSES_SECTION_ID = 'courses';

/** Anchor for the facilities section. */
const FACILITIES_SECTION_ID = 'facilities';

/** The Shoreline logo and its intrinsic size, for the hero backdrop. */
const LOGO_SRC = '/ShorelineLogo.png';
const LOGO_WIDTH = 1966;
const LOGO_HEIGHT = 1289;

interface PageSection {
    id?: string;
    header: SectionHeader;
    body: ReactNode;
}

const ArrowIcon = ({ size }: { size: number }) => (
    <svg className="icon-arrow" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

const HeadingText = ({ lead, accent, trail }: Heading) => (
    <>
        {lead}
        {accent && <span className="gold-text"> {accent}</span>}
        {trail && ` ${trail}`}
    </>
);

const SectionIntro = ({ eyebrow, title, subtitle }: SectionHeader) => (
    <ScrollReveal width="100%">
        <div className="format-section__header">
            <span className="section-eyebrow">{eyebrow}</span>
            <h2 className="format-section__title">
                <HeadingText {...title} />
            </h2>
            {subtitle && <p className="format-section__subtitle">{subtitle}</p>}
        </div>
    </ScrollReveal>
);

/**
 * Backgrounds alternate by position rather than being hard-coded per section,
 * so adding or reordering a section cannot leave two of the same tone adjacent.
 */
const alternatingClass = (index: number) =>
    `format-section ${index % 2 === 1 ? 'format-section--alt' : ''} section`;

/** A run of sections, continuing the background alternation from `startIndex`. */
const SectionList = ({ sections, startIndex = 0 }: { sections: PageSection[]; startIndex?: number }) => (
    <>
        {sections.map((section, index) => (
            <section key={section.header.eyebrow} id={section.id} className={alternatingClass(startIndex + index)}>
                <div className="container">
                    <SectionIntro {...section.header} />
                    {section.body}
                </div>
            </section>
        ))}
    </>
);

/** The dark opening section of a format page. */
const FormatHero = ({ hero }: { hero: FormatPageContent['hero'] }) => {
    const { secondaryCta } = hero;
    const secondaryClass = 'btn btn-secondary';

    return (
        <ParallaxScene as="section" className="format-hero">
            <div className="format-hero__bg" aria-hidden="true"></div>
            {hero.logoBackdrop && (
                // Decorative only: the logo is already named in the header.
                <img
                    src={LOGO_SRC}
                    alt=""
                    aria-hidden="true"
                    className="format-hero__logo parallax-layer"
                    width={LOGO_WIDTH}
                    height={LOGO_HEIGHT}
                />
            )}
            <div className="container format-hero__content">
                <span className="format-hero__badge">{hero.badge}</span>
                <h1 className="format-hero__title">
                    <HeadingText {...hero.title} />
                </h1>
                <p className="format-hero__subtitle">{hero.subtitle}</p>

                <dl className="format-hero__facts">
                    {hero.facts.map((fact) => (
                        <div key={fact.label} className="format-hero__fact">
                            <dt>{fact.label}</dt>
                            <dd>{fact.value}</dd>
                        </div>
                    ))}
                </dl>

                <div className="format-hero__cta-group">
                    <Link href={hero.primaryCta.href} className="btn btn-primary btn-lg">
                        {hero.primaryCta.label}
                        <ArrowIcon size={18} />
                    </Link>
                    {/* In-page anchors stay plain links; routes use client navigation. */}
                    {secondaryCta.href.startsWith('#') ? (
                        <a href={secondaryCta.href} className={secondaryClass}>{secondaryCta.label}</a>
                    ) : (
                        <Link href={secondaryCta.href} className={secondaryClass}>{secondaryCta.label}</Link>
                    )}
                </div>

                <p className="format-hero__reassurance">{hero.reassurance}</p>
            </div>
        </ParallaxScene>
    );
};

const CourseCards = ({ items }: { items: NonNullable<FormatPageContent['courses']>['items'] }) => (
    <div className="format-courses">
        {items.map((course, index) => (
            <ScrollReveal key={course.id} width="100%" delay={index * 100}>
                <div className="format-course">
                    <span className="format-course__name">{course.shortName}</span>
                    <h3 className="format-course__title">{course.name}</h3>
                    <p className="format-course__covers">{course.covers}</p>
                </div>
            </ScrollReveal>
        ))}
    </div>
);

const AttendanceCards = ({ options }: { options: FormatPageContent['attendance']['options'] }) => (
    <div className="format-options">
        {options.map((option, index) => (
            <ScrollReveal key={option.name} width="100%" delay={index * 120}>
                <div className="format-option">
                    <span className="format-option__name">{option.name}</span>
                    <p className="format-option__tagline">{option.tagline}</p>
                    <p className="format-option__description">{option.description}</p>
                    <ul className="format-option__points">
                        {option.points.map((point) => (
                            <li key={point} className="format-option__point">
                                <span className="format-option__check" aria-hidden="true">✓</span>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </ScrollReveal>
        ))}
    </div>
);

const BenefitCards = ({ items }: { items: FormatPageContent['benefits']['items'] }) => (
    <div className="format-benefits">
        {items.map((benefit, index) => (
            <ScrollReveal key={benefit.title} width="100%" delay={index * 100}>
                <div className="format-benefit">
                    <span className="format-benefit__check" aria-hidden="true">✓</span>
                    <h3 className="format-benefit__title">{benefit.title}</h3>
                    <p className="format-benefit__description">{benefit.description}</p>
                </div>
            </ScrollReveal>
        ))}
    </div>
);

const StepList = ({ items }: { items: FormatPageContent['steps']['items'] }) => (
    <ol className="format-steps">
        {items.map((item, index) => (
            <ScrollReveal key={item.step} width="100%" delay={index * 120}>
                <li className="format-step">
                    <span className="format-step__number" aria-hidden="true">{item.step}</span>
                    <h3 className="format-step__title">{item.title}</h3>
                    <p className="format-step__description">{item.description}</p>
                </li>
            </ScrollReveal>
        ))}
    </ol>
);

const ProgramPrice = ({ program }: { program: NonNullable<FormatPageContent['pricing']['program']> }) => (
    <ScrollReveal width="100%">
        <div className="format-program">
            <span className="format-program__label">{program.label}</span>
            <div className="format-program__price">
                {program.price}
                <small>{program.caption}</small>
            </div>
            <ul className="format-program__inclusions">
                {program.inclusions.map((item) => (
                    <li key={item} className="format-program__inclusion">
                        <span className="format-program__check" aria-hidden="true">✓</span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </ScrollReveal>
);

const RateCards = ({ cards }: { cards: NonNullable<FormatPageContent['pricing']['cards']> }) => (
    <ScrollReveal width="100%">
        <div className="format-pricing">
            {cards.map((card) => (
                <div
                    key={card.label}
                    className={`format-pricing__card ${card.featured ? 'format-pricing__card--featured' : ''}`}
                >
                    <span className="format-pricing__label">{card.label}</span>
                    <p className="format-pricing__note">{card.note}</p>
                    <ul className="format-pricing__rows">
                        {card.rows.map((row) => (
                            <li key={row.yearLevel} className="format-pricing__row">
                                <span className="format-pricing__level">{row.yearLevel}</span>
                                <span className="format-pricing__price">
                                    {card.showPerLesson ? row.price : `${row.price}/hr`}
                                    {card.showPerLesson && <small>{perLessonRate(row.price)}/hr</small>}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </ScrollReveal>
);

const PricingBody = ({ pricing }: { pricing: FormatPageContent['pricing'] }) => (
    <>
        {pricing.program && <ProgramPrice program={pricing.program} />}
        {pricing.cards && <RateCards cards={pricing.cards} />}
        <p className="format-pricing__footnote">
            {pricing.footnote} <Link href="/pricing">Compare both side by side</Link>.
        </p>
    </>
);

const FaqList = ({ items }: { items: FormatPageContent['faqs']['items'] }) => (
    <div className="format-faqs">
        {items.map((faq, index) => (
            <ScrollReveal key={faq.question} width="100%" delay={index * 80}>
                <div className="format-faq">
                    <h3 className="format-faq__question">{faq.question}</h3>
                    <p className="format-faq__answer">{faq.answer}</p>
                </div>
            </ScrollReveal>
        ))}
    </div>
);

/**
 * The page ends in the enquiry form itself, headed with this format's closing
 * message and with the format already selected, so nobody has to leave the
 * page they chose in order to enquire.
 */
const EnquiryForm = ({ finalCta }: { finalCta: FormatPageContent['finalCta'] }) => (
    <CTA
        title={finalCta.title}
        description={<>{finalCta.text} {finalCta.note}</>}
        defaultFormat={finalCta.format}
    />
);

/** Courses, session options and the teaching space: the sections that open a page. */
const buildIntroSections = ({ courses, attendance, facilities }: FormatPageContent): PageSection[] => [
    ...(courses
        ? [{ id: COURSES_SECTION_ID, header: courses.header, body: <CourseCards items={courses.items} /> }]
        : []),
    { id: ATTENDANCE_SECTION_ID, header: attendance.header, body: <AttendanceCards options={attendance.options} /> },
    ...(facilities
        ? [{ id: FACILITIES_SECTION_ID, header: facilities.header, body: <FacilitiesShowcase /> }]
        : []),
];

/** Benefits, first-session steps, pricing and FAQs: the detail that follows. */
const buildDetailSections = ({ benefits, steps, pricing, faqs }: FormatPageContent): PageSection[] => [
    { header: benefits.header, body: <BenefitCards items={benefits.items} /> },
    { header: steps.header, body: <StepList items={steps.items} /> },
    { id: PRICING_SECTION_ID, header: pricing.header, body: <PricingBody pricing={pricing} /> },
    { header: faqs.header, body: <FaqList items={faqs.items} /> },
];

/**
 * The hero and opening sections of a format page. The group classes page and
 * the group-first homepage both render exactly this, so their openings are
 * identical by construction rather than kept in step by hand.
 */
export const FormatIntro = ({ content }: { content: FormatPageContent }) => (
    <>
        <FormatHero hero={content.hero} />
        <SectionList sections={buildIntroSections(content)} />
    </>
);

const FormatPage = ({ content }: { content: FormatPageContent }) => (
    <div className="format-page">
        <FormatIntro content={content} />
        <SectionList
            sections={buildDetailSections(content)}
            startIndex={buildIntroSections(content).length}
        />
        <EnquiryForm finalCta={content.finalCta} />
    </div>
);

export default FormatPage;
