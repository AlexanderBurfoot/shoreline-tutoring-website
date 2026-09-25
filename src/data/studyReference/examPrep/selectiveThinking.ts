/**
 * Selective High School Placement Test: thinking skills.
 *
 * The reasoning question types in the paper, and the method each one rewards.
 */
import type { StudyEntry } from '../types';

export const selectiveThinkingEntries: StudyEntry[] = [
    {
        id: 'sel-thinking-syllogism',
        subject: 'selective-high-school',
        question: 'How do I handle "if all A are B" questions?',
        aliases: ['all a are b', 'syllogism', 'logical deduction from statements'],
        answer:
            'Treat the statements as absolutely true, even if they are silly, and test each option against them. If ' +
            'all cats are animals, it does not follow that all animals are cats. Reversing a statement is the trap in ' +
            'almost every one of these.',
    },
    {
        id: 'sel-thinking-necessary-sufficient',
        subject: 'selective-high-school',
        question: 'What is the difference between a necessary and a sufficient condition?',
        aliases: ['necessary condition', 'sufficient condition', 'only if versus if'],
        answer:
            'A necessary condition must be present but may not be enough on its own; a sufficient condition ' +
            'guarantees the result. Rain is sufficient for wet ground but not necessary, since a sprinkler would do ' +
            'it.',
    },
    {
        id: 'sel-thinking-cannot-be-concluded',
        subject: 'selective-high-school',
        question: 'How do I answer "which cannot be concluded" questions?',
        aliases: ['cannot be concluded', 'not supported by the passage', 'unsupported option'],
        answer:
            'Look for the option that adds information the passage never gave, even if it sounds sensible. Words such ' +
            'as always, never, only and most are usually where the overreach hides.',
    },
    {
        id: 'sel-thinking-numerical-reasoning',
        subject: 'selective-high-school',
        question: 'How do I solve thinking skills questions with numbers in them?',
        aliases: ['numerical thinking skills', 'work out the missing number', 'reasoning with figures'],
        answer:
            'Set out what you know in a small table or list rather than holding it in your head, then test each ' +
            'option. These questions reward organisation more than arithmetic speed.',
    },
    {
        id: 'sel-thinking-ordering',
        subject: 'selective-high-school',
        question: 'How do I answer questions about ordering or ranking?',
        aliases: ['ordering puzzle', 'who finished first', 'ranking from clues'],
        answer:
            'Draw a line and place the fixed facts first, then fit the relative clues around them. Clues such as ' +
            '"immediately before" pin two items together, so they can be moved as a block.',
    },
    {
        id: 'sel-thinking-seating',
        subject: 'selective-high-school',
        question: 'How do I solve seating and arrangement puzzles?',
        aliases: ['seating arrangement', 'around a table puzzle', 'who sits where'],
        answer:
            'Sketch the arrangement, mark the one certain position, then work outward. For a round table, remember ' +
            'that left and right depend on which way people face, which is usually the whole point of the question.',
    },
    {
        id: 'sel-thinking-true-statements',
        subject: 'selective-high-school',
        question: 'How do I choose which statement must be true?',
        aliases: ['must be true', 'which statement follows', 'guaranteed conclusion'],
        answer:
            'Test each option by asking whether you could imagine a situation fitting all the clues where it is ' +
            'false. If you can, it does not have to be true. Only one option survives that test.',
    },
    {
        id: 'sel-thinking-counting-problems',
        subject: 'selective-high-school',
        question: 'How do I count possibilities systematically?',
        aliases: ['counting possibilities', 'how many combinations', 'listing without missing any'],
        answer:
            'Fix one choice, list everything that follows from it, then move to the next. Working alphabetically or ' +
            'numerically means you can see where you are up to and never repeat or skip a case.',
    },
    {
        id: 'sel-thinking-percentages-traps',
        subject: 'selective-high-school',
        question: 'What are the common traps in reasoning about percentages?',
        aliases: ['percentage trap', 'percentage of a different total', 'comparing percentages'],
        answer:
            'A larger percentage of a smaller group can be fewer people than a smaller percentage of a larger one. ' +
            'Always ask what the percentage is a percentage of before comparing two of them.',
    },
    {
        id: 'sel-thinking-cause-correlation',
        subject: 'selective-high-school',
        question: 'Why is "they happened together" not proof of cause?',
        aliases: ['correlation is not causation', 'two things happening together', 'other explanation'],
        answer:
            'Because a third factor may cause both, or the order may be reversed. Ice cream sales and sunburn rise ' +
            'together, but neither causes the other: hot weather causes both.',
    },
    {
        id: 'sel-thinking-sample-problems',
        subject: 'selective-high-school',
        question: 'Why does the sample matter in an argument?',
        aliases: ['unrepresentative sample', 'small sample argument', 'who was surveyed'],
        answer:
            'A conclusion about everyone drawn from an unusual or tiny group does not hold. Asking members of a gym ' +
            'how often people exercise will not describe the population, however many are asked.',
    },
    {
        id: 'sel-thinking-analogy',
        subject: 'selective-high-school',
        question: 'How do I answer analogy questions?',
        aliases: ['analogy question', 'is to as is to', 'relationship between words'],
        answer:
            'Name the relationship in a short sentence before looking at the options, then apply that exact sentence ' +
            'to each. Being part of, being a type of and being the opposite of are the three most common ' +
            'relationships.',
    },
    {
        id: 'sel-thinking-codes',
        subject: 'selective-high-school',
        question: 'How do I crack a code or sequence question?',
        aliases: ['letter code', 'cracking a pattern', 'letters shifted'],
        answer:
            'Check the position of each letter in the alphabet and look for a constant shift, then for shifts that ' +
            'alternate. Write the alphabet out with numbers underneath before you start; the time is repaid.',
    },
    {
        id: 'sel-thinking-spatial',
        subject: 'selective-high-school',
        question: 'How do I handle rotation and folding questions?',
        aliases: ['spatial reasoning', 'rotated shape', 'paper folding question'],
        answer:
            'Track one distinctive feature through the movement rather than the whole shape, and eliminate options ' +
            'where that feature ends up impossible. Rotating the page physically is allowed and faster than imagining ' +
            'it.',
    },
    {
        id: 'sel-thinking-elimination',
        subject: 'selective-high-school',
        question: 'What do I do when I cannot see the answer?',
        aliases: ['elimination strategy', 'narrowing the options', 'best guess strategy'],
        answer:
            'Eliminate the options you can disprove, then choose between what remains. There is no penalty for a ' +
            'wrong answer, so never leave one blank, and mark it to revisit if time allows.',
    },
    {
        id: 'sel-thinking-assumption-gap',
        subject: 'selective-high-school',
        question: 'How do I find the unstated step in an argument?',
        aliases: ['missing link in reasoning', 'gap in an argument'],
        answer:
            'Compare what the evidence says with what the conclusion claims, and name what would have to be true to ' +
            'bridge them. The answer is usually a statement so obvious it went unsaid.',
    },
    {
        id: 'sel-thinking-conflicting-info',
        subject: 'selective-high-school',
        question: 'What do I do when two clues seem to contradict?',
        aliases: ['contradictory clues', 'clues that conflict', 'rereading a clue'],
        answer:
            'Reread both: one is almost always narrower than you first took it to be, such as applying to only one ' +
            'day or one person. A genuine contradiction in these tests usually means you added an assumption.',
    },
    {
        id: 'sel-thinking-diagram-reasoning',
        subject: 'selective-high-school',
        question: 'When is a diagram worth the time in a reasoning question?',
        aliases: ['drawing a diagram', 'sketching the problem', 'visualising a puzzle'],
        answer:
            'Whenever the question describes positions, order, overlap or movement. A rough sketch takes fifteen ' +
            'seconds and prevents the kind of error that no amount of rechecking in your head will catch.',
    },
    {
        id: 'sel-best-supported',
        subject: 'selective-high-school',
        question: 'How do I answer a "best supported by the passage" question?',
        aliases: ['best supported by the passage', 'which statement is supported', 'strongest support question'],
        answer:
            'Test each option against the text and ask what you could point to. The right answer needs no assumption ' +
            'beyond what is written, while the wrong ones need one extra step that sounds reasonable but is not ' +
            'stated.',
    },
    {
        id: 'sel-matrix-pattern',
        subject: 'selective-high-school',
        question: 'How do I answer a matrix or grid pattern question?',
        aliases: ['matrix pattern question', 'grid pattern reasoning', 'which shape completes the grid'],
        answer:
            'Read across the rows first, then down the columns, and name the change in words: rotating, adding an ' +
            'element, shading alternately. Apply the row rule and the column rule separately to the missing cell, ' +
            'then find the option that satisfies both.',
    },
];
