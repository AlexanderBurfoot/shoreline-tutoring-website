/**
 * How each HSC written paper is put together.
 *
 * Knowing the shape of the paper is what makes a timing plan possible, so these
 * give the sections and the marks. NESA publishes the specifications per
 * syllabus and they change when a syllabus changes, so every answer says to
 * confirm the current year rather than treating these figures as permanent. The
 * Mathematics courses are in the first cycle of the 2024 syllabuses, where that
 * warning carries the most weight.
 */
import type { StudyEntry } from './types';

export const examStructureEntries: StudyEntry[] = [
    {
        id: 'maths-exam-structure-advanced',
        subject: 'mathematics',
        question: 'What is the structure of the Mathematics Advanced HSC exam?',
        aliases: [
            'mathematics advanced exam structure',
            'maths advanced exam',
            'maths advanced hsc paper',
            'how long is the maths advanced exam',
            'advanced maths exam sections',
        ],
        answer:
            'Three hours for 100 marks, plus reading time. Section I is ten multiple choice worth one mark each. '
            + 'Section II is free response worth 90 marks, running roughly in order of difficulty, with the later '
            + 'parts of each question carrying the harder work. Check the current specifications on the NESA site, '
            + 'because the 2024 syllabus is still in its first cycle.',
    },
    {
        id: 'maths-exam-structure-standard',
        subject: 'mathematics',
        question: 'What is the structure of the Mathematics Standard 2 HSC exam?',
        aliases: [
            'mathematics standard 2 exam structure',
            'maths standard hsc paper',
            'how long is the maths standard exam',
            'standard 2 exam sections',
        ],
        answer:
            'Two and a half hours for 100 marks, plus reading time. Section I is fifteen multiple choice worth one '
            + 'mark each and Section II is free response worth 85 marks. A formulae sheet and reference sheet are '
            + 'provided, so the marks are for choosing and using the right formula, not recalling it. Confirm the '
            + 'current specifications with NESA.',
    },
    {
        id: 'maths-exam-structure-extension-1',
        subject: 'mathematics',
        question: 'What is the structure of the Mathematics Extension 1 HSC exam?',
        aliases: [
            'extension 1 exam structure',
            'maths extension 1 paper',
            'how long is the extension 1 exam',
            'ext 1 exam sections',
        ],
        answer:
            'Two hours for 70 marks, plus reading time. Section I is ten multiple choice worth one mark each and '
            + 'Section II is free response worth 60 marks. Fewer marks over less time means about the same minutes '
            + 'per mark as Advanced, so the paper is not slower, only shorter. Confirm the current specifications '
            + 'with NESA.',
    },
    {
        id: 'maths-exam-structure-extension-2',
        subject: 'mathematics',
        question: 'What is the structure of the Mathematics Extension 2 HSC exam?',
        aliases: [
            'extension 2 exam structure',
            'maths extension 2 paper',
            'how long is the extension 2 exam',
            'ext 2 exam sections',
        ],
        answer:
            'Three hours for 100 marks, plus reading time. Section I is ten multiple choice and Section II is free '
            + 'response worth 90 marks. Extension 2 questions more often need a method chosen rather than applied, so '
            + 'time spent deciding on an approach before writing is time well spent. Confirm the current '
            + 'specifications with NESA.',
    },
    {
        id: 'phys-exam-structure',
        subject: 'physics',
        question: 'What is the structure of the Physics HSC exam?',
        aliases: [
            'physics exam structure',
            'physics hsc paper',
            'how long is the physics exam',
            'physics exam sections',
        ],
        answer:
            'Three hours for 100 marks, plus reading time. Section I has Part A, twenty multiple choice worth twenty '
            + 'marks, and Part B, short and extended answer worth 55 marks, drawn from the whole course. Section II '
            + 'is 25 marks on Module 8, The Nature of Light, in longer responses. Confirm the current specifications '
            + 'with NESA.',
    },
    {
        id: 'chem-exam-structure',
        subject: 'chemistry',
        question: 'What is the structure of the Chemistry HSC exam?',
        aliases: [
            'chemistry exam structure',
            'chemistry hsc paper',
            'how long is the chemistry exam',
            'chemistry exam sections',
        ],
        answer:
            'Three hours for 100 marks, plus reading time. Section I has Part A, twenty multiple choice worth twenty '
            + 'marks, and Part B, short and extended answer worth 55 marks. Section II is 25 marks on Module 8, '
            + 'Applying Chemical Ideas, which is where qualitative and quantitative analysis is examined at length. '
            + 'Confirm the current specifications with NESA.',
    },
    {
        id: 'bio-exam-structure',
        subject: 'biology',
        question: 'What is the structure of the Biology HSC exam?',
        aliases: [
            'biology exam structure',
            'biology hsc paper',
            'how long is the biology exam',
            'biology exam sections',
        ],
        answer:
            'Three hours for 100 marks, plus reading time. Section I has Part A, twenty multiple choice worth twenty '
            + 'marks, and Part B, short and extended answer worth 55 marks. Section II is 25 marks on Module 8, '
            + 'Non-infectious Disease and Disorders. Confirm the current specifications with NESA.',
    },
    {
        id: 'eng-exam-paper-1',
        subject: 'english',
        question: 'What is in English Paper 1?',
        aliases: [
            'english paper 1',
            'paper 1 structure english',
            'texts and human experiences exam',
            'how long is english paper 1',
        ],
        answer:
            'Ninety minutes for 40 marks, plus reading time, and it covers the Common Module, Texts and Human '
            + 'Experiences. Section I gives unseen texts to respond to for twenty marks across several questions of '
            + 'different sizes. Section II is one twenty mark response on the prescribed text, usually with a '
            + 'related text or a stipulated focus. Confirm the current specifications with NESA.',
    },
    {
        id: 'eng-exam-paper-2',
        subject: 'english',
        question: 'What is in English Paper 2?',
        aliases: [
            'english paper 2',
            'paper 2 structure english',
            'three modules exam',
            'how long is english paper 2',
        ],
        answer:
            'Two hours for 60 marks, plus reading time, split into three twenty mark sections, one per module, each '
            + 'answered in about forty minutes. For Advanced that is Textual Conversations, Critical Study of '
            + 'Literature and The Craft of Writing; for Standard it is Language Identity and Culture, Close Study of '
            + 'Literature and The Craft of Writing. Confirm the current specifications with NESA.',
    },
    {
        id: 'econ-exam-structure',
        subject: 'economics',
        question: 'What is the structure of the Economics HSC exam?',
        aliases: [
            'economics exam structure',
            'economics hsc paper',
            'how long is the economics exam',
            'economics exam sections',
        ],
        answer:
            'Three hours for 100 marks, plus reading time. Section I is twenty multiple choice worth twenty marks. '
            + 'Section II is short answer worth 40 marks, often with stimulus. Sections III and IV are extended '
            + 'responses worth twenty marks each, the last usually from a choice. Confirm the current specifications '
            + 'with NESA.',
    },
    {
        id: 'bus-exam-structure',
        subject: 'business-studies',
        question: 'What is the structure of the Business Studies HSC exam?',
        aliases: [
            'business studies exam structure',
            'business studies hsc paper',
            'how long is the business studies exam',
            'business exam sections',
        ],
        answer:
            'Three hours for 100 marks, plus reading time. Section I is twenty multiple choice worth twenty marks. '
            + 'Section II is short answer worth 40 marks. Section III is worth twenty marks and asks for a business '
            + 'report, so the form matters as well as the content. Section IV is a twenty mark extended response, '
            + 'usually from a choice of two. Confirm the current specifications with NESA.',
    },
];
