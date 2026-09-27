/**
 * Named study techniques and the tasks that are not exams.
 *
 * A second file of cross-subject advice, kept separate from src/data/studySkills
 * only because that one reached the length a file should stay under. Same shape,
 * same rule: written by hand and sent exactly as written.
 */
import type { StudySkillEntry } from './studySkills';

export const studyHabitEntries: StudySkillEntry[] = [
    {
        id: 'skill-spaced-repetition',
        question: 'What is spaced repetition?',
        aliases: [
            'spaced repetition',
            'spacing out study',
            'spaced practice',
            'how often should I review content',
        ],
        answer:
            'Reviewing material at widening gaps rather than all at once: a day later, then three days, '
            + 'then a week, then a fortnight. Each review just as the memory starts to fade is what makes '
            + 'it durable, so four short sessions across a fortnight beat one long session the night '
            + 'before. It pairs with testing yourself rather than rereading.',
    },
    {
        id: 'skill-note-taking-systems',
        question: 'What note-taking system should I use, such as Cornell notes?',
        aliases: [
            'cornell notes',
            'note taking systems',
            'how should I lay out my notes',
            'best way to take notes',
        ],
        answer:
            'Cornell notes split the page into a wide column for notes, a narrow left margin for questions '
            + 'about them, and a strip at the bottom for a summary written afterwards. The system matters '
            + 'less than the two habits any good one forces: writing in your own words, and turning the '
            + 'content into questions you can later test yourself on. Notes you never answer questions '
            + 'from are decoration.',
    },
    {
        id: 'skill-multiple-choice-senior',
        question: 'How do I get better at multiple choice questions?',
        aliases: [
            'multiple choice technique',
            'getting better at multiple choice',
            'how to answer multiple choice',
            'multiple choice strategy hsc',
        ],
        answer:
            'Work out the answer before reading the options where you can, so a plausible distractor cannot '
            + 'steer you. Then eliminate rather than select: rule out what is definitely wrong and say why. '
            + 'Watch for except and not in the stem, do the arithmetic rather than eyeballing it, and mark '
            + 'and move on after a minute. Reviewing the ones you guessed matters more than the ones you knew.',
    },
    {
        id: 'skill-group-assessment',
        question: 'How do I handle a group assessment task?',
        aliases: [
            'group assessment task',
            'group assignment',
            'working in a group for marks',
            'group project at school',
        ],
        answer:
            'Split the work by section, agree the deadlines in writing, and set them a week before the real '
            + 'one so a missing part is recoverable. Keep your own contribution identifiable, since marking '
            + 'usually allows for individual work, and tell the teacher early if a member has stopped '
            + 'contributing rather than after the task is marked. Covering for someone silently costs you '
            + 'the marks, not them.',
    },
    {
        id: 'skill-depth-study',
        question: 'What is a depth study in science?',
        aliases: [
            'depth study',
            'what a depth study is',
            'science depth study requirement',
            'depth study hours',
        ],
        answer:
            'An extended piece of scientific investigation that NESA requires in each of Physics, Chemistry '
            + 'and Biology, in both Year 11 and Year 12, taking a minimum number of indicative hours. It can '
            + 'be a practical investigation, a secondary-sourced investigation, a model or a research task, '
            + 'and it is assessed by the school rather than in the HSC examination. The mark usually rests on '
            + 'the quality of the question asked and the validity of the method, not on the volume produced.',
    },
    {
        id: 'skill-reading-a-periodic-table',
        question: 'How do I read a periodic table?',
        aliases: [
            'reading the periodic table',
            'how to use a periodic table',
            'what the numbers on the periodic table mean',
            'periodic table layout',
        ],
        answer:
            'Each box gives the atomic number, which is the proton count and the identity of the element, the '
            + 'symbol, and the relative atomic mass, which is the weighted average over the isotopes. Columns '
            + 'are groups and share valence electron count, so they behave alike. Rows are periods and share '
            + 'the outer shell being filled. Metals sit to the left, non-metals to the upper right, and the '
            + 'exam copy is on the data sheet, so the skill is reading it rather than recalling it.',
    },
];
