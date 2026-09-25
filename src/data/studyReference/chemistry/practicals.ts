/**
 * Chemistry: the standard investigations, and what each is for.
 *
 * The method in outline, the variables that must be controlled, and the error that
 * most often explains a disappointing result.
 */
import type { StudyEntry } from '../types';

export const chemistryPracticalInvestigationEntries: StudyEntry[] = [
    {
        id: 'chem-prac-identify-ions',
        subject: 'chemistry',
        question: 'How does the experiment to identify unknown ions work?',
        aliases: ['identifying unknown ions practical', 'ion identification experiment', 'precipitation test practical'],
        answer:
            'Divide the unknown into portions and add one reagent to each in a set order, narrowing the possibilities ' +
            'by what precipitates and its colour. Flame tests support the cations. The control is a known solution ' +
            'run alongside, since a faint precipitate is only meaningful by comparison.',
    },
    {
        id: 'chem-prac-vinegar-titration',
        subject: 'chemistry',
        question: 'How do I find the concentration of acetic acid in vinegar?',
        aliases: ['vinegar titration practical', 'acetic acid in vinegar experiment', 'titrating vinegar'],
        answer:
            'Dilute a measured aliquot of vinegar, then titrate against standardised sodium hydroxide with ' +
            'phenolphthalein, since the equivalence point is above pH 7 for a weak acid and strong base. Diluting ' +
            'first brings the titre into the useful 10 to 30 mL range.',
    },
    {
        id: 'chem-prac-standardising',
        subject: 'chemistry',
        question: 'How do I standardise a sodium hydroxide solution?',
        aliases: ['standardising sodium hydroxide', 'primary standard titration', 'why naoh must be standardised'],
        answer:
            'Titrate it against a weighed primary standard such as oxalic acid, which can be measured accurately. ' +
            'Sodium hydroxide cannot be a primary standard because it absorbs water and carbon dioxide from the air, ' +
            'so its concentration must be found rather than assumed.',
    },
    {
        id: 'chem-prac-water-of-crystallisation',
        subject: 'chemistry',
        question: 'How do I find the water of crystallisation experimentally?',
        aliases: ['water of crystallisation practical', 'heating a hydrated salt experiment', 'finding x in a hydrate'],
        answer:
            'Weigh a crucible, add the hydrated salt and weigh again, heat gently, cool in a desiccator and reweigh, ' +
            'repeating until the mass is constant. The mass lost is water. Heating too strongly can decompose the ' +
            'salt, which shows up as a value of x that is too high.',
    },
    {
        id: 'chem-prac-neutralisation-enthalpy',
        subject: 'chemistry',
        question: 'How do I measure the enthalpy of neutralisation?',
        aliases: ['enthalpy of neutralisation practical', 'measuring heat of neutralisation', 'calorimetry with acid and base'],
        answer:
            'Mix measured volumes of acid and base of known concentration in an insulated cup, recording the ' +
            'temperature before and at the maximum. Use q = mcΔT with the combined mass, then divide by the moles of ' +
            'water formed. Heat lost to the cup makes the result low.',
    },
    {
        id: 'chem-prac-rate-concentration',
        subject: 'chemistry',
        question: 'How do I investigate rate against concentration?',
        aliases: ['rate versus concentration practical', 'sodium thiosulfate clock reaction', 'disappearing cross experiment'],
        answer:
            'React sodium thiosulfate with acid at several concentrations, timing how long the sulfur precipitate ' +
            'takes to obscure a mark beneath the flask. Rate is one over that time. Temperature, total volume and the ' +
            'mark itself must be held constant.',
    },
    {
        id: 'chem-prac-rate-temperature',
        subject: 'chemistry',
        question: 'How do I investigate rate against temperature?',
        aliases: ['rate versus temperature practical', 'temperature and reaction rate experiment', 'water bath rate experiment'],
        answer:
            'Run the same reaction at several temperatures using water baths, timing to a fixed endpoint. Allow the ' +
            'reactants to reach the bath temperature before mixing, and record the actual temperature rather than the ' +
            'bath setting, since the two differ.',
    },
    {
        id: 'chem-prac-galvanic-cell',
        subject: 'chemistry',
        question: 'How do I measure the voltage of a galvanic cell?',
        aliases: ['galvanic cell practical', 'measuring cell potential experiment', 'building a cell in the lab'],
        answer:
            'Place each metal in a solution of its own ions, join them with a salt bridge and connect a voltmeter. ' +
            'Compare the reading with the value predicted from standard potentials, and account for the difference: ' +
            'concentrations are rarely exactly one molar and electrodes are rarely clean.',
    },
    {
        id: 'chem-prac-esterification',
        subject: 'chemistry',
        question: 'How is an ester prepared in the laboratory?',
        aliases: ['esterification practical', 'making an ester experiment', 'reflux an ester'],
        answer:
            'Heat the alcohol and carboxylic acid under reflux with a little concentrated sulfuric acid, then ' +
            'separate the ester with a separating funnel and wash it with carbonate solution to remove remaining ' +
            'acid. The yield is limited because the reaction reaches equilibrium.',
    },
    {
        id: 'chem-prac-saponification',
        subject: 'chemistry',
        question: 'How is soap made in the laboratory?',
        aliases: ['soap making practical', 'saponification experiment', 'making soap from oil'],
        answer:
            'Heat a fat or oil with concentrated sodium hydroxide, then salt out the soap by adding brine, which ' +
            'lowers its solubility so it separates. Test the product by shaking it with water and with hard water, ' +
            'where a scum forms.',
    },
    {
        id: 'chem-prac-chromatography',
        subject: 'chemistry',
        question: 'How does a chromatography experiment work?',
        aliases: ['chromatography practical', 'separating pigments experiment', 'rf value experiment'],
        answer:
            'Spot the mixture near the base of the paper, stand it in solvent below the spot, and let the solvent ' +
            'rise. Measure each spot and the solvent front from the origin to find Rf. The lid stays on so the ' +
            'atmosphere stays saturated.',
    },
    {
        id: 'chem-prac-calibration-curve',
        subject: 'chemistry',
        question: 'How do I build and use a calibration curve?',
        aliases: ['calibration curve practical', 'colorimeter experiment', 'standards for a calibration curve'],
        answer:
            'Measure absorbance for several standards of known concentration, plot absorbance against concentration ' +
            'and draw the line of best fit, then read the unknown from it. A sample above the linear range must be ' +
            'diluted and the factor applied afterwards.',
    },
    {
        id: 'chem-spreadsheet-for-data',
        subject: 'chemistry',
        question: 'How do I use a spreadsheet for experimental data?',
        aliases: ['spreadsheet for science data', 'using excel for a depth study', 'plotting data in a spreadsheet'],
        answer:
            'Put raw readings in columns, calculate derived quantities in their own column with a formula rather than ' +
            'by hand, then chart the two columns you want to relate and add a trendline with its equation displayed. ' +
            'Keep the raw data untouched so a mistake in processing can be undone.',
    },
];
