/**
 * Spelling, grammar and usage: the rules students are marked on.
 *
 * One rule per entry, with the case it is usually got wrong in. These are the
 * questions asked while editing rather than while studying a text, which is why
 * they sit apart from the analysis entries.
 */
import type { StudyEntry } from '../types';

export const englishConventionEntries: StudyEntry[] = [
    {
        id: 'eng-rule-ie-ei',
        subject: 'english',
        question: 'When do I use i before e?',
        aliases: ['i before e', 'i before e except after c', 'ie or ei spelling rule'],
        answer:
            'The old rhyme holds only for words where the pair sounds like "ee": believe, thief, ceiling, receive. It ' +
            'fails whenever the sound is different, as in eight, weigh, height and their, and it fails outright in ' +
            'seize, weird, species and science. Treat it as a hint, not a law.',
    },
    {
        id: 'eng-rule-doubling-consonants',
        subject: 'english',
        question: 'When do I double a consonant before adding ing or ed?',
        aliases: ['doubling a consonant before ing', 'when to double the last letter', 'running or runing'],
        answer:
            'Double the final consonant when a one-syllable word ends in a single vowel then a single consonant: run ' +
            'becomes running, stop becomes stopped. In longer words, double only when the stress falls on the last ' +
            'syllable: begin becomes beginning, but visit becomes visiting. Words ending in l double in Australian ' +
            'spelling, so travel becomes travelling.',
    },
    {
        id: 'eng-rule-dropping-e',
        subject: 'english',
        question: 'When do I drop the e before adding a suffix?',
        aliases: ['dropping the silent e', 'hoping or hopeing', 'e before a suffix rule'],
        answer:
            'Drop the e when the suffix starts with a vowel: hope becomes hoping, use becomes usable. Keep it when the ' +
            'suffix starts with a consonant: hope becomes hopeful. Keep it too where dropping it would change a soft c ' +
            'or g, as in noticeable and manageable.',
    },
    {
        id: 'eng-rule-y-to-i',
        subject: 'english',
        question: 'When does y change to i in a suffix?',
        aliases: ['changing y to i', 'happier or happyer', 'y to i before a suffix'],
        answer:
            'Change y to i when a consonant comes before it: happy becomes happier, carry becomes carried. Keep the y ' +
            'when a vowel comes before it, as in played and enjoying, and always keep it before ing, which is why it ' +
            'is carrying and not carriing.',
    },
    {
        id: 'eng-rule-affect-effect',
        subject: 'english',
        question: 'What is the difference between affect and effect?',
        aliases: ['affect or effect', 'affect versus effect', 'when to use effect'],
        answer:
            'Affect is almost always the verb, meaning to influence: the drought affected yields. Effect is almost ' +
            'always the noun, meaning the result: the effect on yields was severe. If you can put "the" in front, you ' +
            'want effect. Effect is a verb only in the phrase to effect change.',
    },
    {
        id: 'eng-rule-fewer-less',
        subject: 'english',
        question: 'When do I use fewer and when less?',
        aliases: ['fewer or less', 'fewer versus less', 'less people or fewer people'],
        answer:
            'Fewer counts separate things: fewer students, fewer errors. Less measures an amount that is not counted in ' +
            'units: less water, less time, less confidence. The test is whether you could put a number in front, ' +
            'which is why it is fewer people but less rain.',
    },
    {
        id: 'eng-rule-who-whom',
        subject: 'english',
        question: 'When do I use who and when whom?',
        aliases: ['who or whom', 'who versus whom', 'when to write whom'],
        answer:
            'Who does the action; whom receives it. Answer the clause with he or him: if him fits, use whom, since both ' +
            'end in m. The student who wrote the essay, but the student whom the teacher praised. In speech who is ' +
            'accepted almost everywhere, though formal writing still expects whom after a preposition.',
    },
    {
        id: 'eng-rule-dangling-modifier',
        subject: 'english',
        question: 'What is a dangling modifier?',
        aliases: ['dangling modifier', 'misplaced modifier', 'hanging participle'],
        answer:
            'An opening phrase that describes nothing in the sentence. "Walking to school, the rain started" makes the ' +
            'rain the walker. Fix it by naming the subject: "As I walked to school, the rain started." Whatever the ' +
            'phrase describes must be the subject of the clause that follows.',
    },
    {
        id: 'eng-rule-comma-splice',
        subject: 'english',
        question: 'What is a comma splice?',
        aliases: ['comma splice', 'joining two sentences with a comma', 'run on sentence with a comma'],
        answer:
            'Two complete sentences joined by nothing but a comma: "The exam was long, many students ran out of time." ' +
            'Fix it four ways: a full stop, a semicolon, a joining word such as and or so, or a subordinating word ' +
            'such as because. A comma alone is never strong enough.',
    },
    {
        id: 'eng-rule-semicolon-in-a-list',
        subject: 'english',
        question: 'How do I punctuate a list that already contains commas?',
        aliases: ['semicolons in a list', 'list with commas inside it', 'punctuating a complicated list'],
        answer:
            'Use semicolons between the items so the internal commas stay readable: the panel included Ruiz, a ' +
            'chemist; Okafor, an engineer; and Lam, a statistician. Mixing commas at both levels leaves the reader ' +
            'unable to tell where one item ends.',
    },
    {
        id: 'eng-rule-serial-comma',
        subject: 'english',
        question: 'Do I need a comma before and in a list?',
        aliases: ['comma before and in a list', 'serial comma', 'oxford comma'],
        answer:
            'Australian usage generally leaves it out: bread, milk and eggs. Put it in where its absence creates a ' +
            'misreading, as in "to my parents, Orwell and Austen", which without it appears to name your parents. ' +
            'Whichever you choose, be consistent across a piece.',
    },
    {
        id: 'eng-rule-split-infinitive',
        subject: 'english',
        question: 'What is a split infinitive and does it matter?',
        aliases: ['split infinitive', 'is it wrong to split an infinitive', 'putting a word between to and the verb'],
        answer:
            'An adverb placed between to and the verb: to boldly go. It has never been an error in English, and ' +
            'avoiding it can distort a sentence. Move the adverb only when the sentence reads better for it, which is ' +
            'a judgement about rhythm rather than a rule.',
    },
    {
        id: 'eng-rule-parallel-structure',
        subject: 'english',
        question: 'What is parallel structure in a sentence?',
        aliases: ['parallel structure', 'parallelism in writing', 'matching grammatical forms in a list'],
        answer:
            'Items joined in a list or a pair must take the same grammatical form. Faulty: she enjoys reading, to ' +
            'swim and long walks. Parallel: she enjoys reading, swimming and walking. Read the stem into each item in ' +
            'turn, and any item that does not fit breaks the parallel.',
    },
    {
        id: 'eng-rule-subjunctive',
        subject: 'english',
        question: 'When do I write if I were rather than if I was?',
        aliases: ['if i were or if i was', 'subjunctive mood', 'were instead of was'],
        answer:
            'Use were for something contrary to fact or purely hypothetical: if I were in charge, I would change it. ' +
            'Use was for something that may actually have happened: if he was at the meeting, he heard it. The ' +
            'difference is whether you are supposing or wondering.',
    },
    {
        id: 'eng-rule-that-which',
        subject: 'english',
        question: 'What is a defining clause and a non defining clause?',
        aliases: ['that or which', 'that versus which', 'defining and non defining clauses'],
        answer:
            'That introduces information the sentence needs: the essay that won the prize. Which, after a comma, adds ' +
            'information the sentence could do without: the essay, which ran to ten pages, won the prize. If removing ' +
            'the clause changes which thing you mean, use that and no comma.',
    },
    {
        id: 'eng-rule-there-is-there-are',
        subject: 'english',
        question: 'Do I write there is or there are before a plural noun?',
        aliases: ['there is or there are', 'there are three reasons', 'agreement after there'],
        answer:
            'The verb agrees with what follows, not with there: there is one reason, there are three reasons. Because '
            + 'the subject comes after the verb, the ear often settles on is regardless, which is why this slips past '
            + 'in a first draft.',
    },
    {
        id: 'eng-rule-tense-consistency',
        subject: 'english',
        question: 'Which tense should I use when writing about a text?',
        aliases: ['tense when writing about a text', 'literary present tense', 'which tense for an essay'],
        answer:
            'Write about what a text does in the present: Orwell argues, the narrator withholds. Use the past only for ' +
            'events in the author’s life or in history: Orwell wrote the novel in 1948. Slipping between the two ' +
            'inside a paragraph is the most common tense error in essays.',
    },
    {
        id: 'eng-rule-pronoun-agreement',
        subject: 'english',
        question: 'How do I make pronouns agree with what they refer to?',
        aliases: ['pronoun agreement', 'singular they', 'each student their or his'],
        answer:
            'A pronoun matches the number of the noun it stands for: the students collected their results. With a ' +
            'singular noun of unknown gender, singular they is now standard and preferred: each student brought their ' +
            'own calculator. Avoid he or she repeated through a paragraph, which reads badly.',
    },
    {
        id: 'eng-rule-double-negative',
        subject: 'english',
        question: 'What is wrong with a double negative?',
        aliases: ['double negative', 'cant get no', 'two negatives in a sentence'],
        answer:
            'In standard written English two negatives cancel, so "I did not see nothing" states that you saw ' +
            'something. Write "I saw nothing" or "I did not see anything". In some dialects the doubling intensifies ' +
            'instead, which is a feature of that dialect rather than an error, but examinations expect the standard ' +
            'form.',
    },
    {
        id: 'eng-rule-i-me-myself',
        subject: 'english',
        question: 'Why is between you and I incorrect grammar?',
        aliases: ['between you and i or me', 'when to use myself', 'me or i at the end of a sentence'],
        answer:
            'Between you and me. After a preposition the form is me, however formal you and I sounds. Test it by '
            + 'dropping the other person, since nobody says between I. Myself is only for reflexive use, as in I hurt '
            + 'myself, never as a polite substitute for me.',
    },
    {
        id: 'eng-rule-redundancy',
        subject: 'english',
        question: 'How do I spot redundant words in my writing?',
        aliases: ['redundant words', 'tautology in writing', 'cutting repeated meaning'],
        answer:
            'Look for pairs where one word already contains the other: past history, future plans, added bonus, ' +
            'absolutely essential, in my personal opinion. Cut the word that adds nothing. Under exam pressure these ' +
            'padding phrases multiply, and removing them buys space for an extra point.',
    },
    {
        id: 'eng-rule-cliche',
        subject: 'english',
        question: 'Why should I avoid clichés?',
        aliases: ['avoiding cliches', 'why cliches are marked down', 'overused phrases in writing'],
        answer:
            'A cliché tells the marker that the phrase came ready made rather than from thought: at the end of the ' +
            'day, in today’s society, since the dawn of time. The repair is to say the specific thing the cliché ' +
            'stood in for, which is usually shorter and always more convincing.',
    },
    {
        id: 'eng-rule-its-versus-it-is',
        subject: 'english',
        question: 'Does its need an apostrophe when showing possession?',
        aliases: ['its or it is', 'apostrophe in its', 'possessive its'],
        answer:
            'Its shows possession and takes no apostrophe: the dog wagged its tail. The form with an apostrophe is ' +
            'short for it is or it has: it is raining. Expand it in your head: if "it is" does not fit, no apostrophe ' +
            'belongs there.',
    },
    {
        id: 'eng-rule-their-there-theyre',
        subject: 'english',
        question: 'Which spelling is which among their, there and they are?',
        aliases: ['their there theyre', 'there or their', 'homophone their there'],
        answer:
            'Their shows possession: their books. There points to a place or opens a statement: there on the table; ' +
            'there is a problem. The contracted form stands for they are. Each is spelled correctly, so a spellchecker ' +
            'will not catch the wrong one.',
    },
    {
        id: 'eng-rule-your-youre',
        subject: 'english',
        question: 'How do I choose between your and the contraction you are?',
        aliases: ['your or youre', 'youre versus your', 'apostrophe in youre'],
        answer:
            'Your shows possession: your essay. The contracted form with an apostrophe means you are: you are late. ' +
            'Read the sentence with you are in place, and if it makes sense the apostrophe form is the right one.',
    },
    {
        id: 'eng-rule-then-than',
        subject: 'english',
        question: 'What is the difference between then and than?',
        aliases: ['then or than', 'than versus then', 'bigger then or bigger than'],
        answer:
            'Than compares: taller than her brother. Then places in time or sequence: we ate, then we left. Comparison ' +
            'takes the a, which is a useful way to remember it, since than and compare both contain one.',
    },
    {
        id: 'eng-rule-practice-practise',
        subject: 'english',
        question: 'Is it practice or practise?',
        aliases: ['practice or practise', 'practise with an s', 'licence or license'],
        answer:
            'In Australian spelling, practice is the noun and practise the verb: she went to practice, she practises ' +
            'daily. The same split applies to licence and license, and advice and advise. The noun takes c, the verb ' +
            'takes s.',
    },
    {
        id: 'eng-rule-principal-principle',
        subject: 'english',
        question: 'What is the difference between principal and principle?',
        aliases: ['principal or principle', 'principle versus principal', 'school principal spelling'],
        answer:
            'Principal means chief or the head of a school, and is also the original sum of a loan. Principle means a ' +
            'rule or belief. The school principal is your pal, which is the usual mnemonic, and a matter of principle ' +
            'is a rule.',
    },
    {
        id: 'eng-rule-stationary-stationery',
        subject: 'english',
        question: 'Is it stationary or stationery?',
        aliases: ['stationary or stationery', 'stationery with an e', 'standing still spelling'],
        answer:
            'Stationary with an a means not moving. Stationery with an e means paper and pens. Remember that ' +
            'stationery and envelope both take an e, which is the standard way of keeping them apart.',
    },
    {
        id: 'eng-rule-complement-compliment',
        subject: 'english',
        question: 'What is the difference between complement and compliment?',
        aliases: ['complement or compliment', 'compliment versus complement', 'completes or praises'],
        answer:
            'Complement completes something: the sauce complements the fish. Compliment is praise: she complimented ' +
            'his work. Complement and complete share the e in the middle, which is the easiest way to hold them ' +
            'apart.',
    },
    {
        id: 'eng-rule-imply-infer',
        subject: 'english',
        question: 'What is the difference between imply and infer?',
        aliases: ['imply or infer', 'infer versus imply', 'who implies and who infers'],
        answer:
            'A speaker or text implies; a reader or listener infers. The passage implies that the narrator is afraid, ' +
            'and from it we infer that she has been there before. The one who puts the meaning in implies, the one who ' +
            'takes it out infers.',
    },
    {
        id: 'eng-rule-among-between',
        subject: 'english',
        question: 'When do I use between and when among?',
        aliases: ['between or among', 'among versus between', 'between three things'],
        answer:
            'Between is for items considered individually, even when there are more than two: a treaty between five ' +
            'nations. Among is for a group considered collectively: shared among the class. The old rule limiting ' +
            'between to two things has never matched real usage.',
    },
    {
        id: 'eng-rule-farther-further',
        subject: 'english',
        question: 'What is the difference between farther and further?',
        aliases: ['farther or further', 'further versus farther', 'distance or degree'],
        answer:
            'Farther refers to physical distance: farther down the road. Further refers to degree or addition: further ' +
            'research, further from the truth. Australian usage increasingly prefers further for both, but farther is ' +
            'never wrong for distance.',
    },
    {
        id: 'eng-rule-lie-lay',
        subject: 'english',
        question: 'What is the difference between lie and lay?',
        aliases: ['lie or lay', 'lay versus lie', 'laid or lain'],
        answer:
            'You lie down yourself; you lay something else down. The confusion comes from the past tense: lie becomes ' +
            'lay and then lain, while lay becomes laid. So yesterday she lay on the couch, but yesterday she laid the ' +
            'book on the table.',
    },
    {
        id: 'eng-rule-bring-take',
        subject: 'english',
        question: 'What is the difference between bring and take?',
        aliases: ['bring or take', 'take versus bring', 'bring it here or take it there'],
        answer:
            'Bring moves something towards the speaker; take moves it away. Bring your notes to class if you are the ' +
            'one in class, take your notes to class if you are not. The choice depends on where the speaker stands, ' +
            'not on the object.',
    },
    {
        id: 'eng-rule-apostrophe-plurals',
        subject: 'english',
        question: 'Do plurals ever take an apostrophe?',
        aliases: ['apostrophe in a plural', 'plural with an apostrophe', 'grocers apostrophe'],
        answer:
            'Almost never. Write DVDs, 1990s and MPs with no apostrophe, since nothing is owned and nothing is left ' +
            'out. The apostrophe marks possession or a missing letter only. Decades and acronyms are the places this ' +
            'error appears most.',
    },
    {
        id: 'eng-rule-possessive-names-ending-s',
        subject: 'english',
        question: 'How do I show possession for a name ending in s?',
        aliases: ['possessive of a name ending in s', 'james or jamess', 'apostrophe after a name ending in s'],
        answer:
            'Both forms are accepted: James’s book or James’ book. Choose by whether you would say the extra ' +
            'syllable aloud, and then be consistent. For a plural already ending in s, the apostrophe goes after it: ' +
            'the students’ results.',
    },
    {
        id: 'eng-rule-capitalisation',
        subject: 'english',
        question: 'What needs a capital letter?',
        aliases: ['capital letters rules', 'when to capitalise', 'capitalising titles and subjects'],
        answer:
            'Capitalise the names of specific people, places, organisations, days, months, languages and nationalities, ' +
            'and the first word of a sentence. Subjects take a capital only when they are a language or a named ' +
            'course: she studies English and mathematics, but she studies Mathematics Advanced.',
    },
    {
        id: 'eng-rule-numbers-in-writing',
        subject: 'english',
        question: 'Do I write numbers as words or figures?',
        aliases: ['numbers as words or figures', 'writing numbers in an essay', 'spelling out numbers'],
        answer:
            'Spell out numbers under ten and any number that starts a sentence; use figures for larger numbers, ' +
            'measurements, percentages and dates. Keep one style within a comparison, so write 8 of the 12 rather ' +
            'than eight of the 12.',
    },
    {
        id: 'eng-rule-quotation-marks-titles',
        subject: 'english',
        question: 'Do titles go in quotation marks or italics?',
        aliases: ['titles in italics or quotation marks', 'how to write a book title', 'formatting a poem title'],
        answer:
            'Italicise the titles of whole works: novels, plays, films, albums and newspapers. Put quotation marks ' +
            'around parts of works: poems, short stories, chapters, articles and songs. Where you cannot italicise, ' +
            'underlining stands in for it.',
    },
    {
        id: 'eng-rule-punctuation-with-quotations',
        subject: 'english',
        question: 'Does punctuation go inside or outside quotation marks?',
        aliases: ['punctuation inside or outside quotation marks', 'full stop with a quote', 'comma before a quotation mark'],
        answer:
            'Put it inside when it belongs to the quoted words, and outside when it belongs to your sentence. She ' +
            'asked, "Are you ready?" but: he called it a "failure". Australian practice follows the logic of the ' +
            'sentence rather than placing everything inside.',
    },
    {
        id: 'eng-rule-ellipsis-and-square-brackets',
        subject: 'english',
        question: 'How do I show that I have changed a quotation?',
        aliases: ['ellipsis in a quotation', 'square brackets in a quote', 'changing a quote to fit'],
        answer:
            'Three spaced dots show words removed, and square brackets show words you have added or altered: "the ' +
            'narrator [Winston] refuses". Never edit a quotation so the change alters its sense, since that is ' +
            'misrepresentation rather than trimming.',
    },
    {
        id: 'eng-rule-brackets-versus-commas',
        subject: 'english',
        question: 'When do I use brackets rather than commas?',
        aliases: ['brackets or commas', 'parentheses versus commas', 'setting off an aside'],
        answer:
            'All three of commas, brackets and paired dashes set an aside apart, and they differ in emphasis. Commas ' +
            'keep it in the flow, brackets play it down, and dashes make it stand out. Whichever you choose, both ' +
            'marks must be present, and the sentence must read correctly with the aside removed.',
    },
    {
        id: 'eng-rule-hyphen-compound',
        subject: 'english',
        question: 'When do I hyphenate two words?',
        aliases: ['when to use a hyphen', 'hyphenating a compound adjective', 'well known or well-known'],
        answer:
            'Hyphenate two words acting as one adjective before a noun: a well-known author, a five-minute break. ' +
            'Drop the hyphen when they come after the noun: the author is well known. Hyphens also prevent ' +
            'misreading, which is why a re-formed group differs from a reformed one.',
    },
    {
        id: 'eng-rule-sentence-fragment-for-effect',
        subject: 'english',
        question: 'Can I use a sentence fragment on purpose?',
        aliases: ['fragment for effect', 'deliberate sentence fragment', 'incomplete sentence for emphasis'],
        answer:
            'Yes, in creative and discursive writing, where a fragment can land a beat: "Then silence." Use it rarely ' +
            'and never in an analytical essay, where a marker cannot tell a chosen fragment from a mistake. The ' +
            'surrounding sentences must be correct for the choice to read as deliberate.',
    },
    {
        id: 'eng-rule-starting-with-and',
        subject: 'english',
        question: 'Can I start a sentence with and or but?',
        aliases: ['starting a sentence with and', 'beginning with but', 'is it wrong to start with because'],
        answer:
            'Yes. Good writers have always done it, and it can sharpen a contrast. Because is also fine at the start ' +
            'so long as the sentence completes the thought: "Because the data was incomplete, the conclusion was ' +
            'provisional." The old prohibitions were teaching shortcuts, not grammar.',
    },
    {
        id: 'eng-rule-possessive-of-time',
        subject: 'english',
        question: 'Does two weeks notice need an apostrophe?',
        aliases: ['apostrophe in two weeks notice', 'possessive with a time period', 'a days work apostrophe'],
        answer:
            'Yes: two weeks’ notice, a day’s work, three years’ experience. The time period owns the thing '
            + 'that follows, so the apostrophe goes after the s in a plural and before it in a singular. Leaving it '
            + 'out is among the most common errors in job applications.',
    },
    {
        id: 'eng-rule-collective-nouns',
        subject: 'english',
        question: 'Is a team singular or plural?',
        aliases: ['is the team is or are', 'collective noun agreement', 'group singular or plural'],
        answer:
            'Treat a collective noun as singular when the group acts as one, and plural when the members act '
            + 'separately: the committee has decided, but the committee are divided. Australian usage leans singular '
            + 'for organisations, so the company is rather than the company are.',
    },
    {
        id: 'eng-rule-paragraph-opening-variety',
        subject: 'english',
        question: 'How do I stop every sentence starting the same way?',
        aliases: ['sentences all starting the same', 'varying sentence openings', 'repetitive sentence starts'],
        answer:
            'Read only the first three words of each sentence down the page. If they repeat, recast some: begin with a ' +
            'subordinate clause, a prepositional phrase or the technique itself rather than always with the author or ' +
            'the text. Variety in openings does more for rhythm than variety in vocabulary.',
    },
    {
        id: 'eng-rule-signposting-words',
        subject: 'english',
        question: 'Which linking words actually help an argument?',
        aliases: ['linking words that work', 'better connectives', 'useful signposting words'],
        answer:
            'Prefer words that name a relationship: because, although, since, whereas, consequently. Avoid words that ' +
            'only count: firstly, secondly, moreover, in addition. Counting tells the reader where they are; naming ' +
            'the relationship tells them why the next point follows.',
    },
    {
        id: 'eng-rule-proofreading-method',
        subject: 'english',
        question: 'How do I proofread my own work properly?',
        aliases: ['how to proofread', 'proofreading my own writing', 'checking work for errors'],
        answer:
            'Read it aloud, which catches missing words and clumsy rhythm that the eye skips. Then read backwards ' +
            'sentence by sentence for spelling, since meaning no longer carries you along. Check one thing at a time ' +
            'rather than everything at once.',
    },
    {
        id: 'eng-rule-spellcheck-limits',
        subject: 'english',
        question: 'Why does a spellchecker miss my mistakes?',
        aliases: ['why spellcheck misses errors', 'spellchecker limitations', 'errors a spellchecker cannot find'],
        answer:
            'It compares words against a dictionary, so any correctly spelled word passes even in the wrong place: ' +
            'their for there, form for from, quite for quiet. It also cannot judge whether a sentence says what you ' +
            'meant. It is a first pass, never the last one.',
    },
    {
        id: 'eng-rule-australian-spelling',
        subject: 'english',
        question: 'Should I use Australian or American spelling?',
        aliases: ['australian or american spelling', 'colour or color', 'ise or ize endings'],
        answer:
            'Use Australian spelling: colour, centre, realise, organisation, defence, programme for a plan of events ' +
            'and program for software. Set the document language so autocorrect does not quietly Americanise it. ' +
            'Consistency matters as much as the choice.',
    },
    {
        id: 'eng-rule-word-choice-register',
        subject: 'english',
        question: 'How formal should my vocabulary be?',
        aliases: ['how formal should my writing be', 'choosing formal words', 'using long words in an essay'],
        answer:
            'Choose the most precise word, not the longest. Utilise says nothing that use does not; elucidate is worse ' +
            'than explain unless you mean something narrower. Formality comes from structure and precision, and a ' +
            'thesaurus word used slightly wrongly costs more than a plain one used correctly.',
    },
];
