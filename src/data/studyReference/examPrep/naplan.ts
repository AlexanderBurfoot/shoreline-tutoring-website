/**
 * NAPLAN.
 *
 * Reading, writing, language conventions and numeracy across Years 3, 5, 7
 * and 9.
 */
import type { StudyEntry } from '../types';

export const naplanEntries: StudyEntry[] = [
    {
        id: 'naplan-structure',
        subject: 'naplan',
        question: 'What does NAPLAN test?',
        aliases: ['naplan', 'naplan structure', 'naplan year 3 5 7 9', 'naplan bands', 'naplan online'],
        answer:
            'Reading, writing, language conventions covering spelling, grammar and punctuation, and numeracy, in ' +
            'Years 3, 5, 7 and 9. ' +
            'It is adaptive online, so questions get harder or easier as a student answers. ' +
            'Results report against national proficiency levels.',
    },
    {
        id: 'naplan-writing-rubric',
        subject: 'naplan',
        question: 'How is the NAPLAN writing task marked?',
        aliases: ['naplan writing', 'writing rubric', 'narrative or persuasive', 'naplan writing criteria'],
        answer:
            'Ten criteria, including audience, text structure, ideas, vocabulary, cohesion, paragraphing, sentence ' +
            'structure, punctuation and spelling. ' +
            'The prompt may ask for a narrative or a persuasive piece. ' +
            'Structure and punctuation carry real weight, so planning pays more than extra length.',
    },
    {
        id: 'naplan-numeracy',
        subject: 'naplan',
        question: 'How do I prepare for NAPLAN numeracy?',
        aliases: ['naplan numeracy', 'numeracy practice', 'mental strategies', 'naplan maths'],
        answer:
            'Most marks come from number sense: fractions, decimals, percentages and multiplication facts. ' +
            'Practise reading graphs and tables, and interpreting worded problems into an operation. ' +
            'Mental strategies matter, since a calculator is not available for every section.',
    },
    {
        id: 'naplan-fractions',
        subject: 'naplan',
        question: 'How are fractions tested in NAPLAN?',
        aliases: ['naplan fractions', 'fractions year 5', 'fraction of a group', 'equivalent fractions naplan'],
        answer:
            'Usually as a fraction of a quantity, equivalent fractions, or placing fractions on a number line. ' +
            'Find a fraction of an amount by dividing by the denominator and multiplying by the numerator. ' +
            'To compare fractions, convert them to the same denominator or to decimals.',
    },
    {
        id: 'naplan-decimals-percentages',
        subject: 'naplan',
        question: 'What decimal and percentage skills does NAPLAN test?',
        aliases: ['naplan decimals', 'naplan percentages', 'percentage of an amount test', 'ordering decimals'],
        answer:
            'Ordering decimals, rounding, and finding simple percentages such as 10%, 25% and 50%. ' +
            'Ten per cent is found by dividing by ten, and other percentages build from that. ' +
            'When ordering decimals, line up the decimal points rather than comparing lengths.',
    },
    {
        id: 'naplan-place-value',
        subject: 'naplan',
        question: 'What is place value and why does it matter?',
        aliases: ['place value', 'thousands hundreds tens', 'expanded notation', 'reading large numbers'],
        answer:
            'Each digit\u2019s value depends on its position: in 4,507 the 4 means four thousand. ' +
            'Expanded notation writes that out as a sum. ' +
            'Place value underpins rounding, decimal ordering and column arithmetic, which is why it appears in ' +
            'every year level.',
    },
    {
        id: 'naplan-word-problems',
        subject: 'naplan',
        question: 'How do I tackle a NAPLAN word problem?',
        aliases: ['naplan word problem', 'which operation', 'multi step problem', 'reading a maths question'],
        answer:
            'Read to the end before starting, underline the numbers and the question, and decide which operation the ' +
            'situation calls for. ' +
            'Multi-step problems need the first answer before the second step, so write it down. ' +
            'Check the answer is sensible in size and has the right unit.',
    },
    {
        id: 'naplan-measurement',
        subject: 'naplan',
        question: 'What measurement is tested in NAPLAN?',
        aliases: ['naplan measurement', 'converting units', 'perimeter area test', 'reading scales', 'volume year 7'],
        answer:
            'Converting between millimetres, centimetres, metres and kilometres, grams and kilograms, millilitres and ' +
            'litres; reading scales and thermometers; and finding perimeter, area and volume of simple shapes. ' +
            'Conversions move by factors of ten, so check whether the answer should be larger or smaller.',
    },
    {
        id: 'naplan-geometry-shapes',
        subject: 'naplan',
        question: 'What geometry appears in NAPLAN?',
        aliases: ['naplan geometry', 'naming shapes', 'angles test', 'coordinates', 'symmetry test'],
        answer:
            'Naming 2D and 3D shapes and their properties, symmetry, angles and turns, coordinates on a grid, and ' +
            'transformations. ' +
            'Questions often show a net and ask which solid it folds into, or a shape after a flip or turn.',
    },
    {
        id: 'naplan-data-graphs',
        subject: 'naplan',
        question: 'How do I read graphs and tables in NAPLAN?',
        aliases: ['naplan data', 'reading a graph test', 'column graph', 'pie chart reading', 'tally'],
        answer:
            'Read the title and axis labels first, then check the scale, since each gridline may be worth more than ' +
            'one. ' +
            'For a two-part question, find each value separately before comparing. ' +
            'Pie charts show proportions, so the answer often needs a fraction of a total.',
    },
    {
        id: 'naplan-chance',
        subject: 'naplan',
        question: 'How is chance tested in NAPLAN?',
        aliases: ['naplan chance', 'probability primary', 'likely unlikely', 'spinner probability'],
        answer:
            'In the early years with words such as certain, likely, unlikely and impossible; later as fractions of ' +
            'the total outcomes. ' +
            'For a spinner or a bag of counters, the probability is the favourable outcomes over the total, and all ' +
            'the probabilities add to one.',
    },
    {
        id: 'naplan-patterns-algebra',
        subject: 'naplan',
        question: 'What patterns and algebra does NAPLAN test?',
        aliases: ['naplan patterns', 'number pattern', 'rule for a pattern', 'missing number', 'algebra year 7'],
        answer:
            'Continuing a pattern, finding the rule, and filling a missing number in a sentence such as 4 × □ = 28. ' +
            'Look at the difference between consecutive terms first; if it is constant the rule is add or subtract, ' +
            'and if it multiplies each time the rule is a factor.',
    },
    {
        id: 'naplan-mental-strategies',
        subject: 'naplan',
        question: 'What mental strategies help in NAPLAN numeracy?',
        aliases: ['mental maths', 'quick strategies', 'doubling halving', 'compensation strategy', 'times tables'],
        answer:
            'Break numbers apart: 8 × 25 is easier as 8 × 100 ÷ 4. ' +
            'Double and halve for multiplication, round then adjust for addition, and use known facts to reach ' +
            'unknown ones. ' +
            'Fluent times tables save more time than any other single skill.',
    },
    {
        id: 'naplan-reading-comprehension',
        subject: 'naplan',
        question: 'How do I answer NAPLAN reading questions?',
        aliases: ['naplan reading', 'comprehension strategy test', 'finding evidence', 'inference question naplan'],
        answer:
            'Read the question first so you know what to look for, then find the part of the text that answers it. ' +
            'Literal questions have the answer stated; inference questions need you to combine clues. ' +
            'Eliminate options that are true in the world but not said in the text.',
    },
    {
        id: 'naplan-text-types',
        subject: 'naplan',
        question: 'What text types appear in NAPLAN reading?',
        aliases: ['naplan text types', 'narrative text', 'information report', 'persuasive text', 'procedure'],
        answer:
            'Narratives that tell a story, information reports that describe, persuasive texts that argue, procedures ' +
            'that instruct, and explanations that say how something works. ' +
            'Knowing the type tells you what to expect: a report gives facts under headings, a narrative builds ' +
            'towards a problem and its resolution.',
    },
    {
        id: 'naplan-spelling',
        subject: 'naplan',
        question: 'How is spelling tested in NAPLAN?',
        aliases: ['naplan spelling', 'spelling rules', 'proofreading spelling', 'common misspellings'],
        answer:
            'You identify and correct misspelt words in sentences. ' +
            'Most errors come from a handful of patterns: doubling before adding -ing, changing y to i before -es, ' +
            'and homophones such as their, there and they\u2019re. ' +
            'Read the word aloud in your head, then check the pattern rather than the look.',
    },
    {
        id: 'naplan-grammar',
        subject: 'naplan',
        question: 'What grammar does NAPLAN test?',
        aliases: ['naplan grammar', 'parts of speech', 'noun verb adjective', 'subject verb agreement', 'tense'],
        answer:
            'Parts of speech, subject-verb agreement, consistent tense, pronouns, and clause structure. ' +
            'A common question gives four versions of a sentence and asks which is correct, so check the verb ' +
            'against its subject and the tense against the rest of the sentence.',
    },
    {
        id: 'naplan-punctuation',
        subject: 'naplan',
        question: 'What punctuation is tested in NAPLAN?',
        aliases: ['naplan punctuation', 'commas', 'apostrophes test', 'speech marks', 'capital letters'],
        answer:
            'Capital letters and full stops, commas in lists and after openers, apostrophes for contraction and ' +
            'possession, quotation marks for speech, and question and exclamation marks. ' +
            'Apostrophes cause the most errors: they never make a plural.',
    },
    {
        id: 'naplan-narrative-writing',
        subject: 'naplan',
        question: 'How do I write a NAPLAN narrative?',
        aliases: ['naplan narrative', 'story writing test', 'orientation complication resolution', 'story structure naplan'],
        answer:
            'Plan for two minutes: orientation to set character and place, a complication, then a resolution. ' +
            'Keep it to one problem, since a short story handled well scores better than a long one that rambles. ' +
            'Use paragraphs, vary sentence length, and spend the last two minutes checking punctuation.',
    },
    {
        id: 'naplan-persuasive-writing',
        subject: 'naplan',
        question: 'How do I write a NAPLAN persuasive text?',
        aliases: ['naplan persuasive', 'exposition structure', 'arguments paragraph', 'persuasive devices primary'],
        answer:
            'State your position in the first sentence, give three reasons in separate paragraphs with an example ' +
            'each, then restate the position with force. ' +
            'Use persuasive devices such as rhetorical questions, emotive words and the rule of three, but keep the ' +
            'structure clear, since markers score that heavily.',
    },
    {
        id: 'naplan-editing-time',
        subject: 'naplan',
        question: 'How should I spend the time in the NAPLAN writing task?',
        aliases: ['naplan writing time', 'planning time writing', 'editing naplan', '40 minutes writing'],
        answer:
            'Roughly five minutes planning, thirty writing and five checking. ' +
            'The check is worth real marks: look for missing capitals and full stops, apostrophes, and a paragraph ' +
            'that has run too long. ' +
            'A finished piece always beats a better-written unfinished one.',
    },
    {
        id: 'naplan-adaptive-test',
        subject: 'naplan',
        question: 'What does it mean that NAPLAN is adaptive?',
        aliases: ['adaptive test', 'harder questions', 'tailored test', 'how naplan works'],
        answer:
            'The test adjusts as you answer: get questions right and the next set is harder, which lets it measure a ' +
            'wide range accurately. ' +
            'Harder questions are a sign you are doing well, not a sign of trouble, and you cannot usually go back ' +
            'once a section moves on.',
    },
    {
        id: 'naplan-results',
        subject: 'naplan',
        question: 'How should I read NAPLAN results?',
        aliases: ['naplan results', 'proficiency levels', 'national minimum standard', 'what naplan means'],
        answer:
            'Results report against proficiency levels for the year group, showing whether a student is exceeding, ' +
            'strong, developing or needs additional support. ' +
            'They are a snapshot on one day, useful for spotting a gap early, not a judgement of ability.',
    },
];
