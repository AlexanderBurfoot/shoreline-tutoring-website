/**
 * Chemistry: practical technique and investigation design.
 *
 * How the standard procedures are carried out, why each step is there, and what
 * makes a chemistry investigation valid.
 */
import type { StudyEntry } from '../types';

export const chemistryPracticalEntries: StudyEntry[] = [
    {
        id: 'chem-precipitation-practical',
        subject: 'chemistry',
        question: 'How do I plan a gravimetric precipitation experiment?',
        aliases: ['gravimetric practical', 'filtering and drying a precipitate'],
        answer:
            'Precipitate with a slight excess, filter, wash the residue to remove soluble ions, then dry to constant ' +
            'mass. Washing matters: trapped ions raise the mass and inflate the result.',
    },
    {
        id: 'chem-flame-test-method',
        subject: 'chemistry',
        question: 'How is a flame test carried out?',
        aliases: ['flame test method', 'nichrome wire', 'cleaning the wire between tests'],
        answer:
            'Clean the wire in acid and heat it until no colour shows, dip it in the sample and hold it in the ' +
            'hottest part of the flame. Sodium contamination masks everything, which is why cleaning between samples ' +
            'is essential.',
    },
    {
        id: 'chem-distillation-setup',
        subject: 'chemistry',
        question: 'How is a distillation set up?',
        aliases: ['distillation setup', 'thermometer position in distillation', 'condenser water flow'],
        answer:
            'The thermometer bulb sits level with the side arm so it reads the vapour, not the liquid, and cooling ' +
            'water enters at the low end of the condenser so it runs counter to the vapour. Never seal the apparatus.',
    },
    {
        id: 'chem-reflux-purpose',
        subject: 'chemistry',
        question: 'Why is a reaction refluxed?',
        aliases: ['purpose of reflux', 'heating without losing vapour', 'vertical condenser'],
        answer:
            'To heat a volatile mixture for a long time without losing it: vapour rises, condenses in the vertical ' +
            'condenser and returns. It raises the rate without reducing the amount of reactant present.',
    },
    {
        id: 'chem-recrystallisation',
        subject: 'chemistry',
        question: 'How does recrystallisation purify a solid?',
        aliases: ['recrystallisation', 'purifying a solid', 'hot and cold solubility'],
        answer:
            'Dissolve the solid in the minimum hot solvent, then cool slowly. The desired compound crystallises as ' +
            'its solubility falls while the impurities, present in smaller amounts, stay dissolved. Filtering cold ' +
            'and washing with cold solvent keeps the yield pure.',
    },
    {
        id: 'chem-separating-funnel-use',
        subject: 'chemistry',
        question: 'When is a separating funnel used?',
        aliases: ['separating funnel', 'immiscible liquids', 'extracting into a solvent'],
        answer:
            'To separate immiscible liquids, or to extract a compound into a solvent it prefers. Let the layers ' +
            'settle fully, and remember the denser layer is drained from the bottom while the other is poured from ' +
            'the top.',
    },
    {
        id: 'chem-percentage-yield-practical',
        subject: 'chemistry',
        question: 'Why is the actual yield always below the theoretical yield?',
        aliases: ['why yield is less than expected', 'losses in a practical', 'side reactions and transfer losses'],
        answer:
            'Product is lost on glassware and in filtration, some reactant forms side products, the reaction may ' +
            'reach equilibrium before completion, and purification removes some product with the impurities.',
    },
    {
        id: 'chem-titration-rinsing',
        subject: 'chemistry',
        question: 'What should each piece of glassware be rinsed with?',
        aliases: ['rinsing glassware', 'rinsing the burette with titrant', 'rinsing the pipette'],
        answer:
            'Rinse the burette and pipette with the solution they will hold, so residual water does not dilute it. ' +
            'Rinse the conical flask with distilled water only, since extra water there does not change the moles ' +
            'being titrated.',
    },
    {
        id: 'chem-indicator-colour-changes',
        subject: 'chemistry',
        question: 'What colours do the common indicators show?',
        aliases: ['indicator colours', 'phenolphthalein colour', 'methyl orange colour'],
        answer:
            'Phenolphthalein is colourless in acid and pink above about pH 8.3. Methyl orange is red in acid and ' +
            'yellow above about pH 4.4. Bromothymol blue runs yellow to blue around neutral. Choose one that changes ' +
            'within the vertical part of the curve.',
    },
    {
        id: 'chem-electrode-setup',
        subject: 'chemistry',
        question: 'How is a galvanic cell set up in the lab?',
        aliases: ['galvanic cell setup', 'salt bridge', 'electrode and electrolyte pairing'],
        answer:
            'Each metal sits in a solution of its own ions, joined by a salt bridge that lets ions move to keep both ' +
            'solutions neutral, with a voltmeter between the electrodes. Without the bridge, charge builds and the ' +
            'current stops immediately.',
    },
    {
        id: 'chem-conductivity-testing',
        subject: 'chemistry',
        question: 'How do I test whether a substance conducts?',
        aliases: ['conductivity test', 'testing a solid and a solution', 'electrolyte test'],
        answer:
            'Test the solid and then the solution or melt. Ionic substances conduct when molten or dissolved but not ' +
            'as solids; metals conduct in both states; covalent molecular substances conduct in neither, which is how ' +
            'the three are distinguished.',
    },
    {
        id: 'chem-safety-organic-specific',
        subject: 'chemistry',
        question: 'What are the particular hazards in organic chemistry?',
        aliases: ['organic chemistry hazards', 'flammable solvent', 'fume cupboard use'],
        answer:
            'Most organic solvents are highly flammable and many are toxic or irritant, so use a heating mantle ' +
            'rather than an open flame and work in a fume cupboard. Concentrated sulfuric acid used in esterification ' +
            'and dehydration causes severe burns.',
    },
    {
        id: 'chem-waste-disposal',
        subject: 'chemistry',
        question: 'How should chemical waste be disposed of?',
        aliases: ['chemical waste disposal', 'neutralising before disposal', 'heavy metal waste'],
        answer:
            'Neutralise acids and bases before they go to the drain with plenty of water, and collect organic ' +
            'solvents and heavy metal solutions in labelled containers for proper disposal. Nothing containing heavy ' +
            'metals should reach the sewer.',
    },
    {
        id: 'chem-designing-an-investigation',
        subject: 'chemistry',
        question: 'How do I design a valid chemistry investigation?',
        aliases: ['designing a chemistry investigation', 'controlled variables in chemistry', 'independent variable chemistry'],
        answer:
            'Change one variable, measure one, and hold the rest constant, including temperature, concentration, ' +
            'surface area and the mass of catalyst. Repeat for reliability, and state how each controlled variable ' +
            'was actually kept constant rather than listing it.',
    },
    {
        id: 'chem-measuring-rate-practically',
        subject: 'chemistry',
        question: 'Which method should I use to measure a reaction rate?',
        aliases: ['choosing a method to measure rate', 'gas syringe or mass loss', 'colour change timing'],
        answer:
            'Match the method to what changes: a gas syringe or inverted measuring cylinder for a gas, a balance for ' +
            'mass loss, a colorimeter for a colour change, and timing to a fixed endpoint for a precipitate. ' +
            'Continuous methods give a full curve.',
    },
];
