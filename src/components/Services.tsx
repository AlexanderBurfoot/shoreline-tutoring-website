import './Services.css';
import ScrollReveal from './ScrollReveal';
import SubjectGrid from './SubjectGrid';
import { GROUP_SCOPE_SUMMARY } from '../data/groupClassLaunch';

const Services = () => (
    <section className="services section" id="services">
        <div className="container">
            <ScrollReveal width="100%">
                <div className="services__header">
                    <span className="section-eyebrow">What We Teach</span>
                    <h2 className="section-title">Subject <span className="gold-text">Expertise</span></h2>
                    <p className="section-subtitle">
                        Every lesson is mapped to the NSW syllabus and tailored to you. All of
                        these are available one-on-one; small-group classes currently run for{' '}
                        {GROUP_SCOPE_SUMMARY}.
                    </p>
                </div>
            </ScrollReveal>

            <SubjectGrid />
        </div>
    </section>
);

export default Services;
