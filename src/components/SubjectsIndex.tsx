import Link from 'next/link';
import './SubjectsIndex.css';
import ScrollReveal from './ScrollReveal';
import SubjectGrid from './SubjectGrid';
import CTA from './CTA';
import { GROUP_CLASSES_PATH, GROUP_SCOPE_SUMMARY, ONE_ON_ONE_PATH } from '../data/groupClassLaunch';

/**
 * The page every subject page sits under: one card per subject, plus the
 * enquiry form. It gives the subject pages a real parent for their breadcrumb
 * trail and their "Back to subjects" link.
 */
const SubjectsIndex = () => (
    <main className="subjects-page">
        <section className="subjects-hero">
            <div className="container subjects-hero__content">
                <span className="section-eyebrow">What We Teach</span>
                <h1 className="subjects-hero__title">
                    Subject <span className="gold-text">Expertise</span>
                </h1>
                <p className="subjects-hero__subtitle">
                    Every subject we teach, mapped to the NSW syllabus and tailored to the student
                    in front of us. Choose a subject to see what we cover and how we teach it.
                </p>
            </div>
        </section>

        <section className="subjects-list">
            <div className="container">
                <SubjectGrid />

                <ScrollReveal width="100%">
                    <p className="subjects-list__note">
                        All of these are available{' '}
                        <Link href={ONE_ON_ONE_PATH} className="section-subtitle__link">one-on-one</Link>.{' '}
                        <Link href={GROUP_CLASSES_PATH} className="section-subtitle__link">Small-group classes</Link>{' '}
                        currently run for {GROUP_SCOPE_SUMMARY}.
                    </p>
                </ScrollReveal>
            </div>
        </section>

        <CTA />
    </main>
);

export default SubjectsIndex;
