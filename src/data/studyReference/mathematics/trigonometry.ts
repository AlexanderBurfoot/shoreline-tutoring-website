/**
 * Mathematics: trigonometry, Years 9 to 12.
 *
 * Ratios and rules for triangles, bearings and elevation, radian measure,
 * identities and the trigonometric graphs.
 */
import type { StudyEntry } from '../types';

export const mathematicsTrigonometryEntries: StudyEntry[] = [
    {
        id: 'maths-sine-rule',
        subject: 'mathematics',
        question: 'What is the sine rule?',
        aliases: ['sine rule', 'law of sines', 'sin rule'],
        answer:
            'a / sin A = b / sin B = c / sin C. Use it when you have a side with its opposite angle. ' +
            'Watch for the ambiguous case: an obtuse answer may also fit when you are finding an angle.',
    },
    {
        id: 'maths-cosine-rule',
        subject: 'mathematics',
        question: 'What is the cosine rule?',
        aliases: ['cosine rule', 'law of cosines', 'cos rule'],
        answer:
            'c² = a² + b² − 2ab cos C. Use it for two sides and the angle between them, or for three sides when ' +
            'you want an angle, rearranged as cos C = (a² + b² − c²) / 2ab.',
    },
    {
        id: 'maths-exact-values',
        subject: 'mathematics',
        question: 'What are the exact trigonometric values?',
        aliases: ['exact values', 'sin 30', 'cos 45', 'tan 60', 'special triangles', 'surd values'],
        answer:
            'sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3. sin 45° = cos 45° = 1/√2, tan 45° = 1. ' +
            'sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3. They come from the half-equilateral and the isosceles right triangle.',
    },
    {
        id: 'maths-trig-identities',
        subject: 'mathematics',
        question: 'What are the trigonometric identities?',
        aliases: ['trig identities', 'pythagorean identity', 'sin squared plus cos squared', 'identity list'],
        answer:
            'sin²θ + cos²θ = 1, tan θ = sin θ / cos θ, and dividing the first by cos²θ gives 1 + tan²θ = sec²θ. ' +
            'Double angles: sin 2θ = 2 sin θ cos θ and cos 2θ = cos²θ − sin²θ = 1 − 2sin²θ.',
    },
    {
        id: 'maths-trig-graphs',
        subject: 'mathematics',
        question: 'What do the sine and cosine graphs look like?',
        aliases: ['trig graphs', 'sine curve', 'cosine curve', 'tan graph', 'period of sin'],
        answer:
            'For y = a sin(bx), the amplitude is |a| and the period is 2π/b radians. ' +
            'Sine starts at zero, cosine starts at its maximum, and tan repeats every π with asymptotes. ' +
            'Radians convert with π = 180°, so one radian is about 57.3°.',
    },
    {
        id: 'maths-radians-arc-sector',
        subject: 'mathematics',
        question: 'What are the arc length and sector area formulas?',
        aliases: ['radians', 'arc length', 'sector area', 'segment area', 'degrees to radians'],
        answer:
            'With θ in radians, arc length l = rθ and sector area A = ½r²θ. ' +
            'A segment is the sector minus the triangle: A = ½r²(θ − sin θ). ' +
            'Convert with π radians = 180°, and check your calculator is in the right mode.',
    },
    {
        id: 'maths-trig-equations',
        subject: 'mathematics',
        question: 'How do I solve a trigonometric equation?',
        aliases: ['solving trig equations', 'astc', 'related angle', 'general solution', 'trig equation in a domain'],
        answer:
            'Find the related acute angle from the positive value, then use ASTC to place every solution in the given ' +
            'domain: All, Sine, Tangent, Cosine positive in quadrants one to four. ' +
            'Check whether the domain is in degrees or radians, and watch for a double angle, which doubles the ' +
            'number of solutions.',
    },
    {
        id: 'maths-bearings',
        subject: 'mathematics',
        question: 'How do bearings work?',
        aliases: ['bearings', 'true bearing', 'compass bearing', 'three figure bearing', 'back bearing', 'navigation'],
        answer:
            'A true bearing is measured clockwise from north as three digits, such as 035° or 210°. ' +
            'A compass bearing is written from north or south, such as N35°E. ' +
            'The back bearing is 180° more, or less if that exceeds 360°. ' +
            'Sketch the north line at every point before using the sine or cosine rule.',
    },
    {
        id: 'maths-elevation-depression',
        subject: 'mathematics',
        question: 'What are angles of elevation and depression?',
        aliases: ['angle of elevation', 'angle of depression', 'looking up angle', 'height of a tower'],
        answer:
            'Both are measured from the horizontal: elevation looking up, depression looking down. ' +
            'They are equal between the same two points, since the horizontals are parallel, which is the step most ' +
            'often missed. Draw the horizontal at the observer before labelling anything.',
    },
    {
        id: 'maths-which-trig-rule',
        subject: 'mathematics',
        question: 'Which trigonometric rule should I use?',
        aliases: ['which rule', 'sine rule or cosine rule', 'sine or cosine rule', 'choosing a trig rule', 'non right angled triangle'],
        answer:
            'Right-angled triangle: SOH CAH TOA. ' +
            'Non-right-angled with a side opposite a known angle: sine rule. ' +
            'Two sides and the angle between them, or three sides: cosine rule. ' +
            'For area, use ½ab sin C when you have two sides and the included angle.',
    },
    {
        id: 'maths-reciprocal-trig',
        subject: 'mathematics',
        question: 'What are sec, cosec and cot?',
        aliases: ['secant', 'cosecant', 'cotangent', 'sec cosec cot', 'reciprocal trig ratios'],
        answer:
            'They are the reciprocals: sec θ = 1/cos θ, cosec θ = 1/sin θ, cot θ = 1/tan θ. ' +
            'Note that sec pairs with cos, not sin, which is the usual slip. ' +
            'They appear in the identities 1 + tan²θ = sec²θ and 1 + cot²θ = cosec²θ.',
    },
    {
        id: 'maths-trig-transformations',
        subject: 'mathematics',
        question: 'How do I sketch y = a sin(bx + c) + d?',
        aliases: ['amplitude period phase', 'amplitude and period', 'phase shift', 'vertical shift trig', 'transforming a sine curve', 'sketching trig graphs'],
        answer:
            'a is the amplitude, the distance from the centre line to a peak. ' +
            'The period is 2π/b in radians or 360°/b in degrees. ' +
            'c shifts the curve horizontally by −c/b, and d moves the centre line to y = d. ' +
            'Mark the centre line first, then one full period, then fill in the shape.',
    },
    {
        id: 'maths-unit-circle',
        subject: 'mathematics',
        question: 'How does the unit circle work?',
        aliases: ['unit circle', 'astc', 'quadrants trig', 'related acute angle', 'sign of sin cos tan'],
        answer:
            'On a circle of radius 1, the coordinates of a point at angle θ are (cos θ, sin θ). ' +
            'ASTC gives which ratios are positive: All in the first quadrant, Sine in the second, Tangent in the ' +
            'third, Cosine in the fourth. ' +
            'Find the related acute angle first, then apply the sign for the quadrant.',
    },
    {
        id: 'maths-degrees-minutes',
        subject: 'mathematics',
        question: 'How do I convert degrees, minutes and seconds?',
        aliases: ['degrees minutes seconds', 'dms', 'converting angles', 'decimal degrees'],
        answer:
            'One degree is 60 minutes and one minute is 60 seconds. ' +
            'To convert to decimal degrees, divide the minutes by 60 and the seconds by 3600, then add. ' +
            'Round only at the end, and check whether the question wants the answer to the nearest minute.',
    },
    {
        id: 'maths-trig-identity-proofs',
        subject: 'mathematics',
        question: 'How do I prove a trigonometric identity?',
        aliases: ['prove an identity', 'trig identity proof', 'lhs rhs', 'proving trig'],
        answer:
            'Work on one side only, usually the messier one, until it equals the other. ' +
            'Convert everything to sin and cos, put fractions over a common denominator, and look for ' +
            'sin²θ + cos²θ = 1 to substitute. ' +
            'Never move terms across, since that assumes the identity you are trying to prove.',
    },
    {
        id: 'maths-trig-finding-sides',
        subject: 'mathematics',
        question: 'How do I find a missing side with trigonometry?',
        aliases: ['finding a side', 'trig missing side', 'using sin cos tan', 'labelling a triangle'],
        answer:
            'Label the sides relative to the angle you know: opposite, adjacent and hypotenuse. ' +
            'Choose the ratio that uses the side you know and the side you want, write the equation, then rearrange. ' +
            'Keep the calculator in degrees unless the question uses radians.',
    },
    {
        id: 'maths-trig-finding-angles',
        subject: 'mathematics',
        question: 'How do I find a missing angle with trigonometry?',
        aliases: ['finding an angle', 'inverse sin', 'sin inverse button', 'angle from two sides'],
        answer:
            'Write the ratio of the two sides you know, then apply the inverse function: sin⁻¹, cos⁻¹ or tan⁻¹. ' +
            'The calculator gives the acute answer; in a non-right triangle with the sine rule, check whether an ' +
            'obtuse angle also fits.',
    },
    {
        id: 'maths-area-sector-applications',
        subject: 'mathematics',
        question: 'How do I find arc length and sector area in degrees?',
        aliases: ['arc length degrees', 'sector area degrees', 'fraction of a circle', 'pizza slice area'],
        answer:
            'Take the fraction of the full turn the angle represents, θ/360, then multiply by the circumference for ' +
            'arc length or by the area for sector area. ' +
            'In radians the shortcuts are l = rθ and A = ½r²θ, which is why senior courses switch to radians.',
    },
];
