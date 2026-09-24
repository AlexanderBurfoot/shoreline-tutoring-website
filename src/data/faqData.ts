/**
 * The questions parents ask before getting started, shown on the home page and
 * used as the answer bank for the chat assistant.
 *
 * Shared so the page and the assistant cannot drift apart: an answer edited
 * here changes both.
 */

export interface FaqEntry {
    /** Stable name, so reordering the list cannot change what the chat topics point at. */
    id: string;
    question: string;
    answer: string;
}

export const faqs: FaqEntry[] = [
    {
        id: 'free-trial',
        question: 'How does the free trial lesson work?',
        answer: 'Your first lesson is completely free with no obligation. We use it to understand your child\'s current level, identify specific areas for improvement, and show you exactly how our tutoring approach works. After the session, we\'ll provide honest feedback and a recommended learning plan.',
    },
    {
        id: 'subjects-and-years',
        question: 'What subjects and year levels do you cover?',
        answer: 'We offer one-on-one tutoring in English, Mathematics, Physics, Chemistry, Biology, Economics and Business Studies for Years 7 to 12 (including HSC), and weekly small-group classes for Year 12 maths, physics, chemistry and biology. We also provide targeted preparation programs for Selective High School entry, Opportunity Classes (OC), and NAPLAN across all tested year levels.',
    },
    {
        id: 'online-or-in-person',
        question: 'Are lessons online or in person?',
        answer: 'One-on-one tutoring happens at your home or live online, whichever suits you, and the price is the same either way. Our Year 12 small-group classes run both ways too: in person at 558 Pacific Highway, St Leonards on Saturdays, or live online on Sundays.',
    },
    {
        id: 'session-length',
        question: 'How long is each session?',
        answer: 'Each session length is tailored to the individual student. Factors including age, subject complexity, concentration, and how the student is progressing on the day, all shape how long each lesson is. Breaks can also be built into longer sessions to keep energy and concentration at their best. For students preparing for major exams, we can arrange extended or more frequent sessions as needed.',
    },
    {
        id: 'how-often',
        question: 'How often should my child have tutoring?',
        answer: 'We recommend at least once a week to build consistent momentum and keep concepts fresh between school lessons. That said, frequency is flexible, some students prefer with a single session per week, while others thrive from more regular tutoring. We\'ll work with you to find a rhythm that suits your child\'s schedule and goals, and be flexible especially around exam periods.',
    },
    {
        id: 'homework-and-notes',
        question: 'Do you provide homework and notes after each session?',
        answer: 'Yes! After every session, your child receives notes summarising what was covered, along with targeted homework and practice questions. This ensures nothing is forgotten and gives students structured material to revise between sessions.',
    },
    {
        id: 'progress-updates',
        question: 'How do I track my child\'s progress?',
        answer: 'We keep parents informed every step of the way through a dedicated WhatsApp group that includes the student, parents, tutor, and tutor\'s assistant. You\'ll receive regular updates covering topics completed, areas of improvement, and upcoming focus areas, and we always welcome questions between sessions!',
    },
    {
        id: 'hourly-vs-bundle',
        question: 'What is the difference between per-hour and bundle pricing?',
        answer: 'Our 20 Lesson Bundle offers a 10% discounted rate compared to per-hour pricing, it is ideal for students committed to consistent improvement over a term. Per-hour pricing gives you flexibility if you prefer to book on a session-by-session basis. Visit our Pricing page for full details.',
    },
];
