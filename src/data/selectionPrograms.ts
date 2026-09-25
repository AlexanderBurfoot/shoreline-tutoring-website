/**
 * Selective entry, scholarships, acceleration and competitions.
 *
 * These span primary and secondary years rather than belonging to one course, and
 * anything a school or provider sets says to check with them rather than stating a
 * detail that will age.
 */
export interface SelectionProgramEntry {
    id: string;
    question: string;
    aliases: string[];
    answer: string;
}

export const selectionProgramEntries: SelectionProgramEntry[] = [
    {
        id: 'prog-year-7-selective-entry',
        question: 'How does entry to a selective high school work?',
        aliases: ['year 7 selective entry', 'entry to a selective school', 'getting into a selective high school'],
        answer:
            'The main pathway is the Selective High School Placement Test sat in Year 6 for Year 7 '
            + 'entry, with places offered by score against each school. Entry in later years is '
            + 'possible where a place opens, applied for directly through the department, and is much '
            + 'less common.',
    },
    {
        id: 'prog-high-potential',
        question: 'What is the High Potential and Gifted Education policy?',
        aliases: ['high potential program', 'gifted education policy', 'high potential and gifted'],
        answer:
            'A NSW policy requiring every public school to identify high potential students and '
            + 'provide for them in class, through extension, grouping or acceleration. It applies in '
            + 'every school rather than only selective ones, so it is worth asking what a particular '
            + 'school actually does.',
    },
    {
        id: 'prog-acceleration',
        question: 'What is subject acceleration?',
        aliases: ['subject acceleration', 'accelerating a subject', 'doing a subject a year early'],
        answer:
            'Studying a course a year or more ahead of the normal cohort, most often mathematics, and '
            + 'sitting its HSC examination early. The mark can be held and counted later. It suits '
            + 'genuine readiness rather than enthusiasm alone, since the pace assumes the earlier '
            + 'content is secure.',
    },
    {
        id: 'prog-scholarship-exams',
        question: 'What is a scholarship exam?',
        aliases: ['scholarship exam', 'private school scholarship test', 'acer scholarship test'],
        answer:
            'A test used by many independent schools to award academic scholarships, usually sat in '
            + 'Year 6 for Year 7 entry and run by an external provider such as ACER or Edutest. Papers '
            + 'typically cover written expression, reading comprehension, mathematics and abstract '
            + 'reasoning, with each school setting its own weighting.',
    },
    {
        id: 'prog-competitions',
        question: 'What competitions can a student enter, and are they worth it?',
        aliases: ['competitions', 'australian mathematics competition', 'icas', 'science olympiad'],
        answer:
            'The Australian Mathematics Competition, ICAS assessments, the Australian Science '
            + 'Olympiads and various writing and coding competitions. They contribute nothing to the '
            + 'ATAR, and they are worth entering for the stretch, the unfamiliar problems and, for a '
            + 'few students, the training programs that follow.',
    },
    {
        id: 'prog-olympiad-pathway',
        question: 'How do the science and mathematics olympiads work?',
        aliases: ['science olympiad pathway', 'mathematics olympiad', 'olympiad training school'],
        answer:
            'Students sit a qualifying examination, strong performers are invited to a residential '
            + 'training program, and a small team is selected for the international competition. The '
            + 'problems sit well beyond school courses, so the value for most entrants is the exposure '
            + 'rather than selection.',
    },
];
