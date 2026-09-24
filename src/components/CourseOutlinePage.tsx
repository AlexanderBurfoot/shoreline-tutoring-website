import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import CTA from './CTA';
import { ArrowIcon, FormatHero, SectionList, type PageSection } from './FormatPage';
import './FormatPage.css';
import './CourseOutlinePage.css';
import { groupClassesPage, groupHeroFacts, type FormatPageContent } from '../data/formatPages';
import {
    GROUP_FORMAT,
    TERM_LABEL,
    TERM_LAST_LESSON_LONG,
    TERM_SESSIONS,
    FIRST_LESSON_DATE_LONG,
    TRIAL_OFFER,
} from '../data/groupClassLaunch';
import {
    COURSES_WITH_OUTLINES,
    COURSE_PLAN_SECTION_ID,
    courseOutlinePath,
    lessonDates,
    type CourseLesson,
    type CourseWithOutline,
    type LaterTerm,
} from '../data/courseOutlines';
import { LESSON_STAGES, LESSON_STRUCTURE_SUMMARY } from '../data/courseOutlines/lessonStructure';

/** Where the enquiry form sits on every page (see CTA). */
const ENQUIRY_HREF = '#contact';

/** Consecutive lessons on the same syllabus topic, shown under one heading. */
interface TopicBlock {
    topic: string;
    /** Position of the block's first lesson in the term, counting from 0. */
    firstIndex: number;
    lessons: CourseLesson[];
}

const groupByTopic = (lessons: CourseLesson[]): TopicBlock[] =>
    lessons.reduce<TopicBlock[]>((blocks, lesson, index) => {
        const current = blocks[blocks.length - 1];
        if (current && current.topic === lesson.topic) {
            current.lessons.push(lesson);
        } else {
            blocks.push({ topic: lesson.topic, firstIndex: index, lessons: [lesson] });
        }
        return blocks;
    }, []);

/** "Lesson 4" or "Lessons 4–6". */
const lessonRangeLabel = ({ firstIndex, lessons }: TopicBlock) => {
    const first = firstIndex + 1;
    const last = firstIndex + lessons.length;
    return first === last ? `Lesson ${first}` : `Lessons ${first}–${last}`;
};

const LessonCard = ({ lesson, index }: { lesson: CourseLesson; index: number }) => {
    const dates = lessonDates(index);
    return (
        <li className="course-lesson">
            <div className="course-lesson__meta">
                <span className="course-lesson__number">Lesson {index + 1}</span>
                <span className="course-lesson__dates">
                    {dates.inPerson} in person
                    <br />
                    {dates.online} online
                </span>
            </div>
            <div className="course-lesson__body">
                <h4 className="course-lesson__title">{lesson.title}</h4>
                <ul className="course-lesson__refs" aria-label="Syllabus references">
                    {lesson.syllabusRefs.map((ref) => (
                        <li key={ref} className="course-lesson__ref">{ref}</li>
                    ))}
                </ul>
                <ul className="course-lesson__points">
                    {lesson.points.map((point) => (
                        <li key={point}>{point}</li>
                    ))}
                </ul>
                <p className="course-lesson__skill">
                    <strong>Key skill:</strong> {lesson.keySkill}
                </p>
            </div>
        </li>
    );
};

const TermPlan = ({ lessons }: { lessons: CourseLesson[] }) => (
    <div className="course-plan">
        {groupByTopic(lessons).map((block) => (
            <ScrollReveal key={block.firstIndex} width="100%">
                <section className="course-plan__block" aria-label={block.topic}>
                    <header className="course-plan__header">
                        <span className="course-plan__range">{lessonRangeLabel(block)}</span>
                        <h3 className="course-plan__topic">{block.topic}</h3>
                    </header>
                    <ol className="course-plan__lessons">
                        {block.lessons.map((lesson, offset) => (
                            <LessonCard
                                key={lesson.title}
                                lesson={lesson}
                                index={block.firstIndex + offset}
                            />
                        ))}
                    </ol>
                </section>
            </ScrollReveal>
        ))}
    </div>
);

const LessonStages = () => (
    <ol className="course-stages">
        {LESSON_STAGES.map((stage, index) => (
            <li key={stage.title} className="course-stage">
                <span className="course-stage__number" aria-hidden="true">{index + 1}</span>
                <h3 className="course-stage__title">{stage.title}</h3>
                <p className="course-stage__description">{stage.description}</p>
            </li>
        ))}
    </ol>
);

const LaterTerms = ({ terms }: { terms: LaterTerm[] }) => (
    <ol className="course-later">
        {terms.map((term) => (
            <li key={term.term} className="course-later__term">
                <span className="course-later__label">{term.term}</span>
                <p className="course-later__focus">{term.focus}</p>
            </li>
        ))}
    </ol>
);

const OtherCourses = ({ currentId }: { currentId: CourseWithOutline['id'] }) => (
    <ul className="course-others">
        {COURSES_WITH_OUTLINES.filter((course) => course.id !== currentId).map((course) => (
            <li key={course.id}>
                <Link href={courseOutlinePath(course.id)} className="course-others__link">
                    <span className="course-others__name">{course.name}</span>
                    <ArrowIcon size={16} />
                </Link>
            </li>
        ))}
    </ul>
);

const buildHero = (course: CourseWithOutline): FormatPageContent['hero'] => ({
    badge: `Year 12 · ${TERM_LABEL} course plan`,
    title: { lead: 'Year 12', accent: course.name },
    subtitle: course.outline.overview,
    /* This course's own facts: the price follows whether this class still has
       founding places, not whether any class does. */
    facts: groupHeroFacts(course.id),
    primaryCta: { href: ENQUIRY_HREF, label: 'Book a Free Lesson' },
    secondaryCta: { href: `#${COURSE_PLAN_SECTION_ID}`, label: 'See the Lesson Plan' },
    reassurance: groupClassesPage.hero.reassurance,
    logoBackdrop: true,
});

const buildSections = (course: CourseWithOutline): PageSection[] => [
    {
        id: COURSE_PLAN_SECTION_ID,
        header: {
            eyebrow: `${TERM_LABEL} · ${TERM_SESSIONS} Lessons`,
            title: { lead: 'The term,', accent: 'lesson by lesson' },
            subtitle: `${FIRST_LESSON_DATE_LONG} to ${TERM_LAST_LESSON_LONG}. ${course.outline.syllabusNote}`,
        },
        body: <TermPlan lessons={course.outline.lessons} />,
    },
    {
        header: {
            eyebrow: 'Inside Each Lesson',
            title: { lead: 'How every', accent: 'lesson', trail: 'runs' },
            subtitle: LESSON_STRUCTURE_SUMMARY,
        },
        body: <LessonStages />,
    },
    {
        header: {
            eyebrow: `After ${TERM_LABEL}`,
            title: { lead: 'The rest of', accent: 'Year 12' },
            subtitle: 'Where the course goes next, in the order schools teach it.',
        },
        body: <LaterTerms terms={course.outline.laterTerms} />,
    },
    {
        header: {
            eyebrow: 'Other Courses',
            title: { lead: 'Sitting', accent: 'more than one?' },
            subtitle: 'Every course runs as its own class, each with its own plan.',
        },
        body: <OtherCourses currentId={course.id} />,
    },
];

const CourseOutlinePage = ({ course }: { course: CourseWithOutline }) => (
    <div className="format-page">
        <FormatHero hero={buildHero(course)} />
        <SectionList sections={buildSections(course)} />
        <CTA
            title={`Join the ${course.name} class`}
            description={`${TRIAL_OFFER}. Tell us whether Saturdays in person or Sundays online suit, and we will confirm your session.`}
            defaultFormat={GROUP_FORMAT}
            defaultCourse={course.id}
        />
    </div>
);

export default CourseOutlinePage;
