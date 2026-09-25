/**
 * English: the HSC modules.
 *
 * What each module asks for, and how a response should be shaped for it.
 */
import type { StudyEntry } from '../types';

export const englishModulesEntries: StudyEntry[] = [
    {
        id: 'eng-module-analysis',
        subject: 'english',
        question: 'What is a context, and why does it matter in analysis?',
        aliases: ['context', 'composer context', 'responder context'],
        answer:
            'Context is the circumstances a text was composed and is received in: historical, cultural, personal. ' +
            'It matters because it shapes the values in the text and how a modern responder reads them. ' +
            'In an essay, use context to explain why a choice was made, not as a paragraph of history.',
    },
    {
        id: 'eng-common-module',
        subject: 'english',
        question: 'What is the Common Module, Texts and Human Experiences, about?',
        aliases: ['common module', 'human experiences', 'paper 1 module', 'anomalies and paradoxes'],
        answer:
            'It asks how texts represent individual and collective human experiences, and what they reveal about ' +
            'human behaviour and motivation. ' +
            'Strong responses deal with the anomalies and paradoxes in those experiences rather than treating them ' +
            'as simple lessons.',
    },
    {
        id: 'eng-module-a',
        subject: 'english',
        question: 'What does Module A, Textual Conversations, require?',
        aliases: ['module a', 'textual conversations', 'resonances dissonances', 'comparative study of texts'],
        answer:
            'It compares a pair of texts and asks how the later one reshapes the earlier. ' +
            'Look for resonances, where values carry over, and dissonances, where context has shifted them. ' +
            'Every paragraph should hold both texts, not alternate between them.',
    },
    {
        id: 'eng-module-b',
        subject: 'english',
        question: 'What does Module B, Critical Study of Literature, require?',
        aliases: ['module b', 'critical study', 'personal response'],
        answer:
            'A sustained, close study of one text, arguing for its value and textual integrity: how its parts work ' +
            'as a whole. ' +
            'It expects an informed personal response, supported by close analysis rather than by other critics.',
    },
    {
        id: 'eng-module-c',
        subject: 'english',
        question: 'What does Module C, The Craft of Writing, require?',
        aliases: ['module c', 'craft of writing', 'stimulus writing', 'writing techniques', 'crafting of writing', 'craft of writing module'],
        answer:
            'You write your own imaginative, discursive or persuasive piece, often from a stimulus, then may be asked ' +
            'to reflect on your choices. ' +
            'The reflection should explain why a technique was used and what effect it was for, referring to the ' +
            'texts that influenced you.',
    },
    {
        id: 'eng-related-text',
        subject: 'english',
        question: 'How do I choose a related text?',
        aliases: ['related text', 'ort', 'own choice text', 'picking a related text'],
        answer:
            'Choose something short enough to analyse closely and different enough in form to give you something to ' +
            'say. It must genuinely fit the module concept, not merely share a topic. ' +
            'Avoid prescribed texts from the course and anything you cannot quote precisely.',
    },
    {
        id: 'eng-advanced-vs-standard',
        subject: 'english',
        question: 'What is the difference between English Advanced and Standard?',
        aliases: ['advanced vs standard english', 'which english course', 'english extension', 'eal d'],
        answer:
            'Both study a Common Module and three others, but Advanced expects closer textual analysis and more ' +
            'demanding texts, while Standard focuses on how texts work in the wider world. ' +
            'Extension 1 adds a research-driven elective for students who want more. ' +
            'The skills transfer: the difference is depth, not kind.',
    },
    {
        id: 'eng-standard-modules',
        subject: 'english',
        question: 'What are the Standard modules about?',
        aliases: ['standard module a', 'standard module b', 'standard module c', 'language identity culture', 'close study of text'],
        answer:
            'Module A, Language Identity and Culture, examines how language shapes who we are. ' +
            'Module B is a close study of one text, arguing for how it makes meaning. ' +
            'Module C is the craft of writing. ' +
            'Each still rewards technique, effect and a clear line of argument.',
    },
    {
        id: 'eng-prescribed-texts',
        subject: 'english',
        question: 'How do I study a prescribed text?',
        aliases: ['prescribed text', 'studying a novel', 'studying a play', 'text study approach'],
        answer:
            'Read once for the story, then again for craft, annotating technique and effect as you go. ' +
            'Build a table of ideas with two or three quotes each. ' +
            'Know the shape of the whole text, since module questions often ask about its structure rather than a ' +
            'single scene.',
    },
    {
        id: 'eng-thematic-concerns',
        subject: 'english',
        question: 'How do I write about themes?',
        aliases: ['themes', 'thematic concerns', 'ideas in a text', 'universal themes', 'message of a text'],
        answer:
            'A theme is not a topic but a claim: not "love" but what the text argues about love. ' +
            'Trace how that idea develops from beginning to end, and show how form and technique carry it. ' +
            'Avoid saying a composer wants to teach a lesson; say what the text explores.',
    },
    {
        id: 'eng-representation',
        subject: 'english',
        question: 'What does representation mean in English?',
        aliases: ['representation', 'how something is represented', 'perspective', 'point of view module', 'construct'],
        answer:
            'Every text presents a version of reality shaped by its composer\u2019s choices, context and purpose. ' +
            'Asking how something is represented means asking which choices created that impression and whose ' +
            'perspective is privileged or left out.',
    },
    {
        id: 'eng-responder-reading',
        subject: 'english',
        question: 'What is meant by a reading of a text?',
        aliases: ['reading of a text', 'interpretation', 'multiple readings', 'reception'],
        answer:
            'A reading is an interpretation supported by evidence, and texts sustain more than one. ' +
            'Different responders, and different eras, notice different things. ' +
            'An informed personal response means your own reading, argued from the text, not a summary of what ' +
            'critics have said.',
    },
];
