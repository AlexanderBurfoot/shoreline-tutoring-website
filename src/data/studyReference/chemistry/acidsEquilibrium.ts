/**
 * Chemistry, Year 12 Modules 5 and 6.
 *
 * Equilibrium, solubility, and acid and base reactions: the largest share of
 * the Year 12 course by exam weight.
 */
import type { StudyEntry } from '../types';

export const chemistryAcidsEquilibriumEntries: StudyEntry[] = [
    {
        id: 'chem-equilibrium-constant',
        subject: 'chemistry',
        question: 'What is the equilibrium constant Keq?',
        aliases: ['keq', 'equilibrium constant', 'kc', 'k expression', 'equilibrium expression'],
        answer:
            'For aA + bB ⇌ cC + dD, Keq = [C]^c[D]^d / ([A]^a[B]^b), using equilibrium concentrations. ' +
            'A large Keq means products are favoured, a small one reactants. Pure solids and liquids are left out, ' +
            'and Keq is quoted without units.',
    },
    {
        id: 'chem-le-chatelier',
        subject: 'chemistry',
        question: 'What is Le Chatelier’s principle?',
        aliases: ['le chatelier', 'shift equilibrium', 'disturbing equilibrium', 'pressure change equilibrium'],
        answer:
            'If a system at equilibrium is disturbed, it shifts to partly oppose the change. ' +
            'Adding reactant shifts it right, raising pressure shifts it towards fewer gas particles, and raising ' +
            'temperature shifts it in the endothermic direction. Only temperature changes the value of K.',
    },
    {
        id: 'chem-ksp',
        subject: 'chemistry',
        question: 'What is Ksp?',
        aliases: ['ksp', 'solubility product', 'precipitate', 'saturated solution'],
        answer:
            'Ksp is the solubility product: the equilibrium constant for a sparingly soluble salt dissolving. ' +
            'For AgCl(s) ⇌ Ag⁺ + Cl⁻, Ksp = [Ag⁺][Cl⁻]. If the ionic product exceeds Ksp, a precipitate forms.',
    },
    {
        id: 'chem-ph',
        subject: 'chemistry',
        question: 'How do I calculate pH?',
        aliases: ['ph formula', 'hydrogen ion concentration', 'ph scale'],
        answer:
            'pH = −log₁₀[H⁺], and pOH = −log₁₀[OH⁻]. At 25°C, pH + pOH = 14. ' +
            'Each whole pH unit is a tenfold change in [H⁺], so pH 3 is ten times more acidic than pH 4.',
    },
    {
        id: 'chem-ka-kb',
        subject: 'chemistry',
        question: 'What are Ka and Kb?',
        aliases: ['ka', 'kb', 'acid dissociation constant', 'weak acid', 'pka'],
        answer:
            'Ka is the acid dissociation constant: for HA ⇌ H⁺ + A⁻, Ka = [H⁺][A⁻]/[HA]. ' +
            'A larger Ka means a stronger acid. pKa = −log₁₀Ka, so a smaller pKa is the stronger acid. ' +
            'For a conjugate pair, Ka × Kb = Kw = 1.0 × 10⁻¹⁴ at 25°C.',
    },
    {
        id: 'chem-titration',
        subject: 'chemistry',
        question: 'How does a titration calculation work?',
        aliases: ['titration', 'equivalence point', 'c1v1', 'concentration calculation'],
        answer:
            'Use n = cV to find moles of the known solution, apply the mole ratio from the balanced equation, ' +
            'then divide by the unknown volume to get its concentration. ' +
            'The equivalence point is where the moles match the ratio; the end point is where the indicator changes.',
    },
    {
        id: 'chem-buffers',
        subject: 'chemistry',
        question: 'What is a buffer?',
        aliases: ['buffer', 'buffer solution', 'conjugate pair buffer', 'blood buffer'],
        answer:
            'A buffer is a weak acid with its conjugate base, or a weak base with its conjugate acid, in similar ' +
            'amounts. Added acid reacts with the base and added base with the acid, so the pH barely moves. ' +
            'Blood is buffered by the carbonic acid and hydrogencarbonate pair.',
    },
    {
        id: 'chem-indicators',
        subject: 'chemistry',
        question: 'How do I choose an indicator?',
        aliases: ['indicator', 'phenolphthalein', 'methyl orange', 'equivalence point ph'],
        answer:
            'Choose one whose colour change spans the pH at the equivalence point. ' +
            'Strong acid with strong base is neutral there, so most indicators work. Weak acid with strong base ends ' +
            'basic, suiting phenolphthalein; strong acid with weak base ends acidic, suiting methyl orange.',
    },
    {
        id: 'chem-equilibrium-graphs',
        subject: 'chemistry',
        question: 'How do I read a concentration-time graph for equilibrium?',
        aliases: ['equilibrium graph', 'concentration time graph', 'reaching equilibrium'],
        answer:
            'Concentrations change quickly at first, then level off where the forward and reverse rates are equal. ' +
            'Equilibrium is dynamic: both reactions continue at the same rate. ' +
            'A sudden jump then a new plateau shows a disturbance and the shift that followed it.',
    },
    {
        id: 'chem-salts-hydrolysis',
        subject: 'chemistry',
        question: 'Why are some salt solutions not neutral?',
        aliases: ['salt hydrolysis', 'acidic salt', 'basic salt', 'conjugate base ph'],
        answer:
            'A salt from a strong acid and strong base is neutral. From a weak acid and strong base, the conjugate ' +
            'base reacts with water and the solution is basic; the reverse gives an acidic solution. ' +
            'Amphiprotic species, such as hydrogencarbonate, can act as either.',
    },
    {
        id: 'chem-conjugate-pairs',
        subject: 'chemistry',
        question: 'What are conjugate acid-base pairs?',
        aliases: ['conjugate pair', 'conjugate base', 'conjugate acid', 'bronsted lowry', 'proton donor acceptor'],
        answer:
            'Brønsted-Lowry defines an acid as a proton donor and a base as a proton acceptor, so every acid has a ' +
            'conjugate base differing by one proton. ' +
            'The stronger the acid, the weaker its conjugate base. Arrhenius only described H⁺ and OH⁻ in water, ' +
            'which is why Brønsted-Lowry replaced it.',
    },
    {
        id: 'chem-strong-weak-acids',
        subject: 'chemistry',
        question: 'What is the difference between a strong acid and a concentrated one?',
        aliases: ['strong vs weak acid', 'concentrated acid', 'dilute acid', 'weak acid ph'],
        answer:
            'Strength is how completely an acid ionises; concentration is how much acid is in the solution. ' +
            'A strong acid ionises essentially completely, so [H⁺] equals its concentration. ' +
            'A weak acid ionises partially, so its pH is higher than a strong acid at the same concentration.',
    },
    {
        id: 'chem-kw-poh',
        subject: 'chemistry',
        question: 'What is Kw?',
        aliases: ['kw', 'ionic product of water', 'ph plus poh', 'self ionisation'],
        answer:
            'Water self-ionises, and Kw = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25°C (298.15 K). ' +
            'So pH + pOH = 14, but only at that temperature. ' +
            'Kw rises as water heats, so questions that give you Kw at another temperature expect a neutral pH ' +
            'below 7, still neutral because the two ions remain equal.',
    },
    {
        id: 'chem-titration-curves',
        subject: 'chemistry',
        question: 'What does a titration curve show?',
        aliases: ['titration curve', 'buffer region', 'strong acid weak base curve', 'half equivalence'],
        answer:
            'pH against volume added. The steep section is the equivalence point: pH 7 only for strong acid with ' +
            'strong base, above 7 for weak acid with strong base, below 7 for strong acid with weak base. ' +
            'The flat stretch before it is the buffer region, and at half-equivalence pH = pKa.',
    },
    {
        id: 'chem-amphiprotic',
        subject: 'chemistry',
        question: 'What does amphiprotic mean?',
        aliases: ['amphiprotic', 'amphoteric', 'hydrogencarbonate', 'can act as acid or base'],
        answer:
            'An amphiprotic species can either donate or accept a proton, such as hydrogencarbonate or water. ' +
            'Amphoteric is the wider term for reacting with both acids and bases, which includes species that do so ' +
            'without proton transfer, such as aluminium oxide.',
    },
    {
        id: 'chem-reaction-quotient',
        subject: 'chemistry',
        question: 'What is the reaction quotient Q?',
        aliases: ['reaction quotient', 'q vs k', 'predicting shift', 'not at equilibrium'],
        answer:
            'Q has the same form as Keq but uses concentrations at any moment, not just at equilibrium. ' +
            'If Q < K the reaction runs forward, if Q > K it runs in reverse, and if Q = K it is already at ' +
            'equilibrium. For solubility, Q above Ksp means a precipitate forms.',
    },
    {
        id: 'chem-standard-solutions',
        subject: 'chemistry',
        question: 'What makes a good primary standard?',
        aliases: ['primary standard', 'standard solution', 'volumetric flask', 'standardisation'],
        answer:
            'It must be pure, stable in air, readily soluble, anhydrous with no water of hydration, of known ' +
            'composition, and ideally of high molar mass so weighing errors matter less. ' +
            'Anhydrous sodium carbonate, oxalic acid and potassium hydrogen phthalate are the usual choices. ' +
            'Dissolve a weighed mass and make up to the mark in a volumetric flask. ' +
            'Sodium hydroxide fails the test, since it absorbs water and carbon dioxide, so it is standardised ' +
            'against one that passes.',
    },
    {
        id: 'chem-back-titration',
        subject: 'chemistry',
        question: 'What is a back titration?',
        aliases: ['back titration', 'excess reagent titration', 'indirect titration'],
        answer:
            'React the sample with a measured excess of standard reagent, then titrate what is left over. ' +
            'Moles reacted with the sample are the difference. ' +
            'It is used when the sample is insoluble, impure or reacts too slowly to titrate directly, such as ' +
            'antacid tablets.',
    },
    {
        id: 'chem-titration-technique',
        subject: 'chemistry',
        question: 'How do I set up a titration properly?',
        aliases: ['titration technique', 'burette pipette', 'conical flask', 'titration apparatus'],
        answer:
            'Rinse the burette and pipette with the solution they will hold, so no water dilutes it. ' +
            'Rinse the conical flask with distilled water only, since extra water does not change the moles inside. ' +
            'Read the burette at the bottom of the meniscus, at eye level, and swirl while adding dropwise near the ' +
            'end point.',
    },
    {
        id: 'chem-concordant-titres',
        subject: 'chemistry',
        question: 'What are concordant titres?',
        aliases: ['concordant titres', 'average titre', 'rough titre', 'reliability titration'],
        answer:
            'Titres that agree closely, usually within 0.10 mL. ' +
            'Discard the first rough titre, keep the concordant ones and average only those. ' +
            'Repeating until titres agree is what makes the result reliable, which is a separate idea from whether ' +
            'the method is valid.',
    },
    {
        id: 'chem-polyprotic',
        subject: 'chemistry',
        question: 'How do diprotic and polyprotic acids change a calculation?',
        aliases: ['diprotic', 'polyprotic', 'sulfuric acid titration', 'two protons', 'stepwise ionisation'],
        answer:
            'A diprotic acid donates two protons, so the mole ratio with a base is not 1:1 and the titre is larger ' +
            'than for a monoprotic acid at the same concentration. ' +
            'Ionisation happens in steps, each with its own Ka, and the second is always weaker than the first.',
    },
    {
        id: 'chem-ph-after-mixing',
        subject: 'chemistry',
        question: 'How do I find the pH after mixing an acid and a base?',
        aliases: ['ph after mixing', 'excess moles', 'leftover acid', 'ph on dilution', 'neutralisation calculation'],
        answer:
            'Work in moles, not concentrations: find the moles of each, subtract to see which is in excess, then ' +
            'divide the leftover by the total combined volume to get its concentration. ' +
            'Take the log from there. Dilution alone works the same way, since the moles do not change.',
    },
    {
        id: 'chem-ice-tables',
        subject: 'chemistry',
        question: 'How do I do an equilibrium calculation?',
        aliases: ['equilibrium calculation', 'finding equilibrium concentrations'],
        answer:
            'Tabulate initial amounts, the change, and the equilibrium amounts, with the change in the ratio of the ' +
            'coefficients. Convert to concentrations before substituting into Keq. ' +
            'When Keq is very small the change is often negligible against the initial amount, which avoids a ' +
            'quadratic, but say that you assumed it.',
    },
    {
        id: 'chem-ksp-solubility',
        subject: 'chemistry',
        question: 'How do I convert between Ksp and molar solubility?',
        aliases: ['molar solubility', 'ksp to solubility', 'solubility from ksp', 'saturated concentration'],
        answer:
            'Write the dissolution equation and let the solubility be s. ' +
            'For a 1:1 salt, both ions are s, so Ksp = s². For a 1:2 salt the second ion is 2s, so Ksp = 4s³. ' +
            'Substitute and solve for s, then convert to grams per litre if the question asks.',
    },
    {
        id: 'chem-common-ion',
        subject: 'chemistry',
        question: 'What is the common ion effect?',
        aliases: ['common ion effect', 'adding a common ion', 'solubility decreases', 'precipitating more solid'],
        answer:
            'Adding an ion that is already in a solubility equilibrium shifts it towards the solid, so less dissolves. ' +
            'Ksp itself does not change, only the concentrations that satisfy it. ' +
            'It is why a salt is less soluble in a solution sharing one of its ions than in pure water.',
    },
    {
        id: 'chem-industrial-equilibrium',
        subject: 'chemistry',
        question: 'How are industrial conditions chosen for the Haber and Contact processes?',
        aliases: ['haber process', 'contact process', 'industrial compromise', 'ammonia synthesis', 'sulfur trioxide'],
        answer:
            'Both are exothermic and reduce the number of gas particles, so yield favours high pressure and low ' +
            'temperature. But a low temperature is too slow, so a moderate temperature plus a catalyst is chosen: a ' +
            'compromise between yield and rate. High pressure also costs money and containment.',
    },
    {
        id: 'chem-dynamic-equilibrium',
        subject: 'chemistry',
        question: 'What does dynamic equilibrium mean?',
        aliases: ['dynamic equilibrium', 'open and closed system', 'forward and reverse rates', 'equilibrium characteristics'],
        answer:
            'Both reactions keep going, at equal rates, so concentrations stay constant while nothing has stopped. ' +
            'It needs a closed system: in an open one a gas escapes and the reaction runs to completion instead. ' +
            'Constant colour or pressure is evidence of equilibrium, not of the reaction ending.',
    },
    {
        id: 'chem-neutralisation-enthalpy',
        subject: 'chemistry',
        question: 'What is the enthalpy of neutralisation or of dissolution?',
        aliases: ['enthalpy of neutralisation', 'heat of solution', 'dissolution enthalpy', 'calorimetry of a solution'],
        answer:
            'Both are measured by calorimetry on the solution itself, using q = mcΔT with the mass of the whole ' +
            'solution, then divided by the moles of the limiting species to give kJ mol⁻¹. ' +
            'Dissolving can be exothermic or endothermic depending on whether bond breaking or hydration wins.',
    },
    {
        id: 'chem-acid-base-definitions',
        subject: 'chemistry',
        question: 'How have definitions of acids and bases changed?',
        aliases: ['history of acid theory', 'lavoisier', 'davy', 'arrhenius definition', 'bronsted lowry history'],
        answer:
            'Lavoisier thought oxygen made an acid; Davy showed hydrogen was the common element instead. ' +
            'Arrhenius defined acids as producing H⁺ in water and bases OH⁻. ' +
            'Brønsted and Lowry generalised it to proton transfer, which covers reactions outside water and explains ' +
            'amphiprotic behaviour.',
    },
    {
        id: 'chem-ph-scale-meaning',
        subject: 'chemistry',
        question: 'What does the pH scale actually measure?',
        aliases: ['ph scale meaning', 'logarithmic scale', 'ten times more acidic', 'ph of common substances'],
        answer:
            'It measures hydrogen ion concentration on a logarithmic scale, so each unit is a tenfold change: pH 3 ' +
            'has ten times the H⁺ of pH 4 and a hundred times that of pH 5. ' +
            'Below 7 is acidic at 25°C, above is basic, and 7 is neutral only at that temperature.',
    },
    {
        id: 'chem-neutralisation-uses',
        subject: 'chemistry',
        question: 'Where is neutralisation used in everyday life?',
        aliases: ['neutralisation uses', 'antacid', 'soil ph', 'treating a sting', 'lime on soil'],
        answer:
            'Antacids neutralise excess stomach acid, agricultural lime raises the pH of acidic soil, and bases treat ' +
            'acidic stings while a weak acid treats alkaline ones. ' +
            'Wastewater is neutralised before release so it does not harm waterways.',
    },
    {
        id: 'chem-equilibrium-temperature',
        subject: 'chemistry',
        question: 'Why does only temperature change the value of K?',
        aliases: ['temperature and k', 'why k changes', 'shifting vs changing k', 'endothermic equilibrium'],
        answer:
            'Concentration and pressure changes shift the position of equilibrium, but the system returns to the same ' +
            'ratio, so K is unchanged. ' +
            'Temperature changes the rates of the forward and reverse reactions by different amounts, so the ratio ' +
            'itself changes. Heating favours the endothermic direction.',
    },
    {
        id: 'chem-volumetric-errors',
        subject: 'chemistry',
        question: 'What errors affect a titration result?',
        aliases: ['titration errors', 'overshooting the end point', 'parallax burette', 'wet conical flask', 'improving accuracy titration'],
        answer:
            'Overshooting the end point, misreading the meniscus, an air bubble in the burette tip, or a burette ' +
            'rinsed with water rather than the solution. ' +
            'Repeating until titres are concordant improves reliability; using the right indicator and careful ' +
            'technique improves accuracy.',
    },
    {
        id: 'chem-equilibrium-position',
        subject: 'chemistry',
        question: 'What does the position of equilibrium mean?',
        aliases: ['position of equilibrium', 'lies to the right', 'favouring products', 'extent of reaction'],
        answer:
            'It describes the relative amounts of reactants and products once rates are equal. ' +
            'Lying to the right means products dominate, which corresponds to a large equilibrium constant. ' +
            'Shifting the position is not the same as changing the constant: only temperature does that.',
    },
    {
        id: 'chem-acid-strength-structure',
        subject: 'chemistry',
        question: 'Why are some acids stronger than others?',
        aliases: ['why acids differ in strength', 'bond strength acid', 'stability of the conjugate base', 'electronegativity acid strength'],
        answer:
            'The easier the proton leaves and the more stable the resulting anion, the stronger the acid. ' +
            'Stability rises when the negative charge is spread over more atoms or sits next to electronegative ' +
            'ones, which is why trichloroacetic acid is far stronger than acetic acid.',
    },
    {
        id: 'chem-dilution-ph-effect',
        subject: 'chemistry',
        question: 'What happens to pH when an acid is diluted?',
        aliases: ['diluting an acid ph', 'ten fold dilution', 'ph change on dilution', 'why ph never passes 7'],
        answer:
            'A tenfold dilution of a strong acid raises the pH by one unit, since [H⁺] falls by a factor of ten. ' +
            'Dilution alone never pushes an acidic solution past neutral: it approaches pH 7 without crossing it, ' +
            'because water itself supplies ions.',
    },
    {
        id: 'chem-titration-choice-of-apparatus',
        subject: 'chemistry',
        question: 'Why is each piece of titration glassware used?',
        aliases: ['why use a pipette', 'why a burette', 'aliquot', 'accuracy of glassware'],
        answer:
            'A pipette delivers one fixed accurate volume, the aliquot. ' +
            'A burette delivers a variable volume and is read to two decimal places, which is why it holds the ' +
            'titrant. ' +
            'A volumetric flask measures one accurate volume for making a standard solution, and a conical flask is ' +
            'only a container for swirling.',
    },
    {
        id: 'chem-solubility-temperature',
        subject: 'chemistry',
        question: 'How does temperature affect solubility?',
        aliases: ['solubility curve', 'temperature and dissolving', 'gas solubility temperature', 'saturated at a temperature'],
        answer:
            'Most solids dissolve more readily as temperature rises, which a solubility curve shows. ' +
            'Gases do the opposite: they become less soluble in warm water, which is why warm rivers hold less ' +
            'dissolved oxygen and why a warm soft drink goes flat faster.',
    },
    {
        id: 'chem-poh',
        subject: 'chemistry',
        question: 'What is pOH and how does it relate to pH?',
        aliases: ['poh', 'ph plus poh equals 14', 'calculating poh'],
        answer:
            'pOH = −log₁₀[OH⁻], and at 25 °C pH + pOH = 14. ' +
            'For a base, finding [OH⁻] first and converting through pOH is usually quicker than going via [H⁺]. ' +
            'The sum is 14 only at 25 °C, since it comes from Kw.',
    },
    {
        id: 'chem-distinguishing-strong-weak',
        subject: 'chemistry',
        question: 'How can I tell a strong acid from a weak one experimentally?',
        aliases: ['distinguishing strong and weak acids', 'conductivity of an acid', 'rate of reaction with magnesium'],
        answer:
            'At the same concentration, the strong acid has the lower pH, conducts better and reacts faster with ' +
            'magnesium or carbonate, because it supplies more ions. ' +
            'Both neutralise the same volume of base, so titration volume cannot tell them apart.',
    },
    {
        id: 'chem-catalyst-and-equilibrium',
        subject: 'chemistry',
        question: 'Does a catalyst change the equilibrium yield?',
        aliases: ['catalyst and equilibrium', 'reaching equilibrium faster', 'no change in yield'],
        answer:
            'No. ' +
            'It lowers the activation energy of the forward and reverse reactions equally, so equilibrium arrives ' +
            'sooner but at the same position. ' +
            'Industrially that still matters: a faster approach means a usable rate at a lower temperature, which ' +
            'protects the yield.',
    },
    {
        id: 'chem-pressure-equilibrium',
        subject: 'chemistry',
        question: 'How does pressure affect a gaseous equilibrium?',
        aliases: ['pressure on equilibrium', 'moles of gas on each side', 'compressing an equilibrium'],
        answer:
            'Raising the pressure shifts the system towards the side with fewer moles of gas, since that reduces the ' +
            'pressure again. ' +
            'If both sides have equal moles of gas, pressure has no effect on the position at all.',
    },
    {
        id: 'chem-inert-gas-equilibrium',
        subject: 'chemistry',
        question: 'Why does adding an inert gas not shift equilibrium?',
        aliases: ['inert gas added', 'argon added to equilibrium', 'partial pressures unchanged'],
        answer:
            'At constant volume the concentrations and partial pressures of the reacting gases are unchanged, so Q ' +
            'still equals K and nothing shifts. ' +
            'The total pressure rises, but only the partial pressures of the species in the equilibrium expression ' +
            'matter.',
    },
    {
        id: 'chem-percentage-ionisation',
        subject: 'chemistry',
        question: 'What is percentage ionisation?',
        aliases: ['percentage ionisation', 'degree of ionisation', 'fraction ionised'],
        answer:
            'The fraction of the acid molecules that have donated their proton, as a percentage of those added. ' +
            'It rises on dilution, since the equilibrium shifts towards more particles, so a weak acid is more ' +
            'ionised when dilute even though its pH is higher.',
    },
    {
        id: 'chem-buffer-calculation',
        subject: 'chemistry',
        question: 'How do I calculate the pH of a buffer?',
        aliases: ['buffer ph', 'henderson hasselbalch', 'ratio of acid to conjugate base'],
        answer:
            'pH = pKa + log₁₀([base]/[acid]), so the pH depends on the ratio, not the absolute amounts. ' +
            'When the two are equal the pH equals the pKa, which is how a buffer is chosen for a target pH, and why ' +
            'diluting a buffer barely changes it.',
    },
    {
        id: 'chem-titre-size',
        subject: 'chemistry',
        question: 'What if my titre is too large or too small?',
        aliases: ['titre too large', 'titre too small', 'choosing an aliquot volume'],
        answer:
            'Aim for a titre between about 10 and 30 mL, where the reading error is a small fraction of the volume. ' +
            'If the titre overfills the burette, dilute the titrant or use a smaller aliquot; if it is only a few ' +
            'millilitres, do the reverse.',
    },
];
