/**
 * Chemistry: the calculation types and the method each one follows.
 *
 * Stoichiometry, concentration, equilibrium, thermochemistry and gases, set out
 * as the steps to work through rather than formulas to recall.
 */
import type { StudyEntry } from '../types';

export const chemistryCalculationEntries: StudyEntry[] = [
    {
        id: 'chem-stoichiometry-method',
        subject: 'chemistry',
        question: 'What is the general method for a stoichiometry question?',
        aliases: ['stoichiometry method', 'mole ratio steps', 'how to start a calculation question'],
        answer:
            'Write the balanced equation, convert the known quantity to moles, apply the mole ratio from the ' +
            'coefficients, then convert to what is asked. Nearly every calculation in the course is that one path ' +
            'with a different first and last step.',
    },
    {
        id: 'chem-mass-to-mass',
        subject: 'chemistry',
        question: 'How do I go from a mass of reactant to a mass of product?',
        aliases: ['mass to mass calculation', 'how much product from a mass', 'grams to grams'],
        answer:
            'Divide the mass by the molar mass for moles, multiply by the ratio of coefficients, then multiply by the ' +
            'molar mass of the product. Keep the substances labelled at each step, since the two molar masses are ' +
            'easy to swap.',
    },
    {
        id: 'chem-concentration-to-moles',
        subject: 'chemistry',
        question: 'How do I find moles from a concentration and a volume?',
        aliases: ['moles from concentration', 'n = cv', 'volume in litres'],
        answer:
            'n = cV, with the volume in litres. A 25.00 mL aliquot is 0.02500 L, so forgetting to convert from ' +
            'millilitres scales the answer by a thousand, which is the single most common calculation error.',
    },
    {
        id: 'chem-percentage-purity',
        subject: 'chemistry',
        question: 'How do I calculate percentage purity?',
        aliases: ['percentage purity', 'impure sample calculation', 'purity of a sample'],
        answer:
            'Work out the mass of the pure substance from the reaction, then divide by the total mass of the sample ' +
            'and multiply by 100. The impurity is assumed not to react, which is what makes the calculation possible.',
    },
    {
        id: 'chem-excess-reagent',
        subject: 'chemistry',
        question: 'How do I find how much of the excess reagent is left?',
        aliases: ['excess reagent remaining', 'how much is left over', 'leftover reactant'],
        answer:
            'Find the limiting reagent, work out how many moles of the other one it consumes, then subtract that from ' +
            'what was added. Convert back to mass or volume at the end.',
    },
    {
        id: 'chem-empirical-to-molecular',
        subject: 'chemistry',
        question: 'How do I get from CH2O to C6H12O6?',
        aliases: ['molecular formula from empirical', 'multiple of the empirical formula', 'using the molar mass'],
        answer:
            'Divide the molar mass of the compound by the mass of the empirical formula unit; the whole number you ' +
            'get is the multiplier for every subscript. CH₂O with a molar mass of 180 gives C₆H₁₂O₆.',
    },
    {
        id: 'chem-combustion-analysis',
        subject: 'chemistry',
        question: 'How do I find a formula from combustion data?',
        aliases: ['combustion analysis', 'carbon dioxide and water produced', 'formula from combustion'],
        answer:
            'All the carbon appears in the carbon dioxide and all the hydrogen in the water, so convert each to moles ' +
            'of the element. Any remaining mass is oxygen. Then reduce the mole ratio to the simplest whole numbers.',
    },
    {
        id: 'chem-titration-standardising',
        subject: 'chemistry',
        question: 'How do I use a standard solution to find an unknown concentration?',
        aliases: ['standardising a solution', 'finding an unknown concentration', 'titration calculation steps'],
        answer:
            'Moles of the standard equal concentration times volume; apply the mole ratio to get moles of the unknown ' +
            'in the aliquot; divide by the aliquot volume for its concentration. Use the average of concordant ' +
            'titres, not all of them.',
    },
    {
        id: 'chem-heating-curve',
        subject: 'chemistry',
        question: 'What does a heating curve show?',
        aliases: ['heating curve', 'plateau on a heating curve', 'melting and boiling plateaus'],
        answer:
            'Temperature against time as a solid is heated. The sloping sections are the substance warming, and the ' +
            'flat sections are melting and boiling, where the energy goes into breaking forces between particles ' +
            'rather than raising temperature.',
    },
    {
        id: 'chem-atom-economy',
        subject: 'chemistry',
        question: 'How do I calculate atom economy?',
        aliases: ['atom economy calculation', 'mass of desired product over total', 'why atom economy matters'],
        answer:
            'Divide the molar mass of the desired product by the total molar mass of all products, then multiply by ' +
            '100. It is fixed by the equation you choose, so unlike yield it cannot be improved by better technique, ' +
            'only by a different reaction.',
    },
    {
        id: 'chem-two-solution-stoichiometry',
        subject: 'chemistry',
        question: 'How do I handle a reaction between two solutions?',
        aliases: ['reaction between two solutions', 'both reactants in solution', 'which solution is limiting'],
        answer:
            'Find the moles in each from n = cV, then compare them against the coefficients to see which is limiting. ' +
            'The product amount follows from the limiting one, and the final volume for any concentration is the two ' +
            'volumes added together.',
    },
    {
        id: 'chem-keq-units',
        subject: 'chemistry',
        question: 'Does the equilibrium constant have units?',
        aliases: ['units of keq', 'why k has no units', 'expressing an equilibrium constant'],
        answer:
            'By convention it is written without units, because each concentration is compared with a standard. What ' +
            'matters is stating the temperature, since K changes with it, and using concentrations in mol L⁻¹ ' +
            'throughout.',
    },
    {
        id: 'chem-solubility-product-calculation',
        subject: 'chemistry',
        question: 'How do I find molar solubility from a solubility product?',
        aliases: ['molar solubility calculation', 'solubility from the product', 'cubing for solubility'],
        answer:
            'Write the dissolution equation, let the solubility be s, express each ion concentration in terms of s ' +
            'including its coefficient, then substitute. For a salt giving two of one ion, Ksp = 4s³, so remember to ' +
            'cube rather than square.',
    },
    {
        id: 'chem-enthalpy-calculation',
        subject: 'chemistry',
        question: 'How do I calculate enthalpy change from calorimetry data?',
        aliases: ['enthalpy from calorimetry', 'calculating delta h from a temperature rise', 'heat released per mole'],
        answer:
            'Use q = mcΔT with the mass of the solution, then divide by the moles of the limiting reactant and change ' +
            'the sign, since heat released means a negative ΔH. Give the answer per mole in kJ mol⁻¹.',
    },
    {
        id: 'chem-hess-calculation',
        subject: 'chemistry',
        question: 'How do I work through a Hess law calculation?',
        aliases: ['hess law calculation', 'combining equations', 'reversing and scaling equations'],
        answer:
            'Arrange the given equations so they add to the target: reverse one and change the sign of its ΔH, or ' +
            'multiply one and multiply its ΔH by the same factor. Cancel species appearing on both sides, then add ' +
            'the enthalpies.',
    },
    {
        id: 'chem-cell-potential-calculation',
        subject: 'chemistry',
        question: 'How do I calculate the cell potential?',
        aliases: ['calculating cell potential', 'cathode minus anode', 'e cell calculation'],
        answer:
            'Subtract the standard potential of the half-cell being oxidised from that of the half-cell being ' +
            'reduced. Do not multiply the potentials when you multiply the half-equations to balance electrons, since ' +
            'potential is not an extensive quantity.',
    },
    {
        id: 'chem-gas-law-calculation',
        subject: 'chemistry',
        question: 'How do I choose between the gas law equations?',
        aliases: ['which gas law to use', 'combined gas law', 'ideal gas equation choice'],
        answer:
            'If the amount of gas is fixed and conditions change, use the combined law and cancel what stays ' +
            'constant. If you need an amount in moles, use PV = nRT with pressure in kilopascals, volume in litres ' +
            'and temperature in kelvin.',
    },
    {
        id: 'chem-kelvin-conversion',
        subject: 'chemistry',
        question: 'Why must temperature be in kelvin?',
        aliases: ['kelvin conversion', 'why not celsius in gas laws', 'absolute temperature'],
        answer:
            'Because the gas laws describe proportionality to absolute temperature, and a scale with an arbitrary ' +
            'zero breaks that: doubling from 10 to 20 degrees Celsius does not double the kinetic energy. Add 273 to ' +
            'convert.',
    },
    {
        id: 'chem-error-in-calculations',
        subject: 'chemistry',
        question: 'What are the most common calculation mistakes?',
        aliases: ['common calculation errors', 'millilitres instead of litres', 'forgetting the mole ratio'],
        answer:
            'Volumes left in millilitres, the mole ratio ignored, the wrong molar mass used, rounding too early, and ' +
            'answers given without units or with the wrong sign for an enthalpy. Estimating the answer first catches ' +
            'most of them.',
    },
    {
        id: 'chem-limiting-check',
        subject: 'chemistry',
        question: 'How do I know which reagent is limiting?',
        aliases: ['finding the limiting reagent', 'which reactant runs out', 'dividing moles by coefficient'],
        answer:
            'Divide the moles of each reactant by its coefficient; the smallest value is the limiting one. Comparing ' +
            'masses or raw mole counts without dividing by the coefficient gives the wrong answer whenever the ratio ' +
            'is not one to one.',
    },
];
