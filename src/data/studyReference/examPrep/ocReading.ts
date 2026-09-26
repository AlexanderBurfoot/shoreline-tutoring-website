/**
 * Opportunity Class Placement Test: reading and reasoning question types.
 *
 * Shape, data and chance questions, and each kind of comprehension question.
 */
import type { StudyEntry } from '../types';

export const ocReadingEntries: StudyEntry[] = [
    {
        id: 'oc-area-and-perimeter-oc',
        subject: 'oc-prep',
        question: 'How do I tell area and perimeter apart?',
        aliases: ['area or perimeter oc', 'distance around or space inside', 'which one does the question want'],
        answer:
            'Perimeter is the distance around the edge, in units of length; area is the space inside, in squares. ' +
            'Fencing a yard needs perimeter, turfing it needs area, and the question always tells you which situation ' +
            'it is.',
    },
    {
        id: 'oc-volume-oc',
        subject: 'oc-prep',
        question: 'How do I find the volume of a box?',
        aliases: ['volume of a box oc', 'length width height', 'cubic centimetres oc'],
        answer:
            'Multiply length by width by height, with all three in the same unit, and give the answer in cubic units. ' +
            'For a shape built from cubes, count one layer and multiply by the number of layers.',
    },
    {
        id: 'oc-shape-properties-oc',
        subject: 'oc-prep',
        question: 'How do I identify a shape from its properties?',
        aliases: ['identifying a shape oc', 'properties of shapes oc', 'sides and angles of a shape'],
        answer:
            'Count the sides, then look for equal sides, parallel sides and right angles. A shape can belong to more ' +
            'than one group, so a square is also a rectangle and a rhombus.',
    },
    {
        id: 'oc-3d-objects-oc',
        subject: 'oc-prep',
        question: 'How do I describe a three-dimensional object?',
        aliases: ['3d objects oc', 'faces edges vertices oc', 'naming a solid'],
        answer:
            'Count its faces, edges and vertices, and check whether it has a uniform cross-section. A cube has 6 ' +
            'faces, 12 edges and 8 vertices, and a pyramid narrows to a point while a prism does not.',
    },
    {
        id: 'oc-nets-oc',
        subject: 'oc-prep',
        question: 'How do I tell what a net will fold into?',
        aliases: ['nets oc', 'folding a net oc', 'which net makes the box'],
        answer:
            'Choose one face as the base and track where the others land as they fold up. Opposite faces of a cube ' +
            'are never joined in the net, so a net with two of the same pattern adjacent will not work.',
    },
    {
        id: 'oc-angles-oc-detail',
        subject: 'oc-prep',
        question: 'How do I compare angles without measuring?',
        aliases: ['comparing angles oc', 'bigger than a right angle', 'estimating an angle oc'],
        answer:
            'Compare with the corner of a page, which is a right angle. Smaller is acute, larger is obtuse, a ' +
            'straight line is two right angles, and a full turn is four.',
    },
    {
        id: 'oc-data-collection-oc',
        subject: 'oc-prep',
        question: 'How is data collected and recorded?',
        aliases: ['collecting data oc', 'tally marks oc', 'frequency table oc'],
        answer:
            'Tally in groups of five as you count, then total each row into a frequency table. The table is easier to ' +
            'read than the tallies, and it is what a graph is drawn from.',
    },
    {
        id: 'oc-tables-reading-oc',
        subject: 'oc-prep',
        question: 'How do I find information in a table?',
        aliases: ['reading a table oc', 'finding a value in a table oc', 'rows and columns oc'],
        answer:
            'Read the heading of every row and column before looking at the numbers, then find the one cell the ' +
            'question needs. Check for a totals row before adding a column yourself.',
    },
    {
        id: 'oc-data-comparison-oc',
        subject: 'oc-prep',
        question: 'How do I compare two sets of results?',
        aliases: ['comparing results oc', 'which group did better oc', 'comparing two graphs oc'],
        answer:
            'Compare the same measure for both, usually the typical value, and then the spread. A group can have a ' +
            'larger total simply because it has more members, so compare averages rather than totals.',
    },
    {
        id: 'oc-chance-language-oc',
        subject: 'oc-prep',
        question: 'How do I describe how likely something is?',
        aliases: ['chance words oc', 'likely or unlikely oc', 'certain and impossible oc'],
        answer:
            'From impossible, through unlikely, even chance and likely, to certain. Equally likely means the outcomes ' +
            'are the same size, not just that there are two of them.',
    },
    {
        id: 'oc-fair-game-oc',
        subject: 'oc-prep',
        question: 'What makes a game fair?',
        aliases: ['fair game', 'is the game fair oc', 'equal chance of winning'],
        answer:
            'Every player has the same chance of winning. A spinner with unequal sections or a rule that gives one ' +
            'player two ways to win is unfair, even if each player has the same number of turns.',
    },
    {
        id: 'oc-patterns-number-oc',
        subject: 'oc-prep',
        question: 'How do I continue a number pattern?',
        aliases: ['continuing a number pattern oc', 'next number oc', 'differences in a pattern oc'],
        answer:
            'Find the difference between terms and check it stays the same. If it changes, look for doubling, ' +
            'halving, or a pattern in the differences themselves. Say the rule aloud before applying it.',
    },
    {
        id: 'oc-order-of-operations-oc',
        subject: 'oc-prep',
        question: 'Which part of a calculation comes first?',
        aliases: ['order of operations oc', 'brackets first oc', 'which operation first oc'],
        answer:
            'Brackets first, then multiplication and division working left to right, then addition and subtraction ' +
            'left to right. Multiplication does not always beat division: whichever is further left goes first.',
    },
    {
        id: 'oc-word-problems-multi-oc',
        subject: 'oc-prep',
        question: 'How do I handle a word problem with several steps?',
        aliases: ['multi step word problem oc', 'several steps in a problem oc', 'writing down each step'],
        answer:
            'Write down the result of each step with a short label so you do not lose it. Most questions that look ' +
            'hard are two straightforward steps hidden in one sentence.',
    },
    {
        id: 'oc-guess-check-oc',
        subject: 'oc-prep',
        question: 'When should I try numbers and adjust?',
        aliases: ['guess and check oc', 'trying a number oc', 'trial and improvement oc'],
        answer:
            'When the question gives a total and a relationship, such as two numbers that add to 30 with a difference ' +
            'of 6. Start with a sensible guess, see which way you are out, and adjust; two or three tries usually ' +
            'finds it.',
    },
    {
        id: 'oc-reading-main-point-oc',
        subject: 'oc-prep',
        question: 'How do I find the main point of a passage?',
        aliases: ['main point oc', 'what the passage is about oc', 'best title oc'],
        answer:
            'Ask what nearly every sentence relates to, rather than what the most interesting sentence says. A good ' +
            'check is whether your answer would work as a title for the whole passage.',
    },
    {
        id: 'oc-reading-locate-detail-oc',
        subject: 'oc-prep',
        question: 'How do I find a specific detail quickly?',
        aliases: ['finding a detail oc', 'scanning a passage oc', 'where is the answer oc'],
        answer:
            'Take an unusual word from the question and scan for it or a word meaning the same thing. The answer is ' +
            'usually in that sentence or the next, so you rarely need to reread the whole passage.',
    },
    {
        id: 'oc-reading-inference-oc',
        subject: 'oc-prep',
        question: 'How do I answer a question the passage does not state directly?',
        aliases: ['inference oc', 'reading between the lines oc', 'implied answer oc'],
        answer:
            'Find the line that hints at it and choose the option that goes one small step beyond what is written. If ' +
            'you cannot point to the words that support it, it is a guess rather than an inference.',
    },
    {
        id: 'oc-reading-narrator-oc',
        subject: 'oc-prep',
        question: 'Who is telling the story?',
        aliases: ['who is telling the story', 'narrator oc', 'first person story oc'],
        answer:
            'Look for I and me, which mean a character is telling it, or he and she, which mean someone outside is. ' +
            'It matters because a character telling their own story only knows their own side of it.',
    },
    {
        id: 'oc-reading-compare-characters-oc',
        subject: 'oc-prep',
        question: 'How do I compare two characters?',
        aliases: ['comparing two characters', 'how are the characters different', 'similar and different characters'],
        answer:
            'Find one thing they share and one thing that separates them, each supported by something they do or say. ' +
            'What a character does under pressure separates them faster than how they are described.',
    },
    {
        id: 'oc-reading-summary-oc',
        subject: 'oc-prep',
        question: 'How do I choose the best summary?',
        aliases: ['best summary', 'choosing a summary oc', 'summary of a passage'],
        answer:
            'The best summary covers the whole passage without adding anything. Reject options that are true of only ' +
            'one paragraph, and reject any that include a detail the passage never mentioned.',
    },
    {
        id: 'oc-reading-tone-oc',
        subject: 'oc-prep',
        question: 'How do I tell how the writer feels about something?',
        aliases: ['how the writer feels', 'tone of a passage oc', 'writer attitude oc'],
        answer:
            'Look at the words they chose where a plain one would have done: a cramped room rather than a small room. ' +
            'Those choices carry the feeling, even when the writer never says it directly.',
    },
    {
        id: 'oc-reading-headings-oc',
        subject: 'oc-prep',
        question: 'How do headings and captions help me?',
        aliases: ['headings and captions oc', 'using headings to find an answer', 'caption under a picture'],
        answer:
            'They tell you where to look, so you can go straight to the section a question is about. A caption often ' +
            'carries a fact that appears nowhere else, which is why it is worth reading rather than skipping.',
    },
    {
        id: 'oc-reading-audience-oc',
        subject: 'oc-prep',
        question: 'Who is a text written for?',
        aliases: ['who is the text for', 'audience of a text oc', 'intended reader oc'],
        answer:
            'Look at the difficulty of the words, the examples used and where the text would appear. A notice in a ' +
            'library and an article in a science magazine are written for different readers, which shapes everything ' +
            'in them.',
    },
    {
        id: 'oc-reading-poetry-features-oc',
        subject: 'oc-prep',
        question: 'What should I look for in a poem?',
        aliases: ['what to look for in a poem oc', 'rhyme and repetition oc', 'poem features oc'],
        answer:
            'What it is about in one sentence, then the rhyme, repetition, word choice and shape, and how those make ' +
            'you feel. Poems say a lot in few words, so individual words matter more than in prose.',
    },
    {
        id: 'oc-reading-comparing-oc',
        subject: 'oc-prep',
        question: 'How do I answer a question about two passages?',
        aliases: ['two passages oc', 'comparing texts oc', 'both texts oc'],
        answer:
            'Work out what each one says on its own in a few words, then look for where they agree and where they ' +
            'differ. Most questions reward one clear difference rather than a list of them.',
    },
    {
        id: 'oc-reading-not-in-the-text',
        subject: 'oc-prep',
        question: 'What if an option sounds right but is not in the passage?',
        aliases: ['not stated in the passage', 'option not in the text', 'true but not mentioned'],
        answer:
            'Then it is wrong, however sensible it is. These questions test what the passage says, not what you know, ' +
            'so every answer must be something you can point to in the text.',
    },
    {
        id: 'oc-reading-instructions-oc',
        subject: 'oc-prep',
        question: 'How do I answer questions about instructions?',
        aliases: ['instructions oc', 'steps in order oc', 'procedure text oc'],
        answer:
            'Check the order of the steps, the equipment listed and any warning. Questions often ask what would go ' +
            'wrong if a step were skipped or done out of order.',
    },
    {
        id: 'oc-reading-information-oc',
        subject: 'oc-prep',
        question: 'How do I find facts in an information text?',
        aliases: ['information text oc', 'using headings oc', 'finding facts oc'],
        answer:
            'Use the headings to go straight to the right section rather than reading from the start. Captions, ' +
            'labels and bold words usually carry the facts the questions ask about.',
    },
    {
        id: 'oc-vocabulary-growth-oc',
        subject: 'oc-prep',
        question: 'How do I build vocabulary before the test?',
        aliases: ['building vocabulary oc', 'learning words oc', 'vocabulary practice oc'],
        answer:
            'Read widely and write down any word you meet more than once, with the sentence you found it in. Learning ' +
            'a word inside a sentence means you remember how to use it, not only what it means.',
    },
];
