/**
 * Mathematics: calculus, Years 11 and 12.
 *
 * Differentiation, curve analysis, integration and motion, shared by
 * Advanced and Extension.
 */
import type { StudyEntry } from '../types';

export const mathematicsCalculusEntries: StudyEntry[] = [
    {
        id: 'maths-differentiation-rules',
        subject: 'mathematics',
        question: 'What are the differentiation rules?',
        aliases: ['power rule', 'product rule', 'quotient rule', 'chain rule', 'how to differentiate'],
        answer:
            'Power rule: d/dx(xⁿ) = nxⁿ⁻¹. Product rule: (uv)′ = u′v + uv′. Quotient rule: (u/v)′ = (u′v − uv′)/v². ' +
            'Chain rule: dy/dx = dy/du × du/dx, for a function inside another function.',
    },
    {
        id: 'maths-standard-derivatives',
        subject: 'mathematics',
        question: 'What are the derivatives of e^x, ln x and the trig functions?',
        aliases: ['derivative of e^x', 'derivative of ln x', 'derivative of sin', 'standard derivatives'],
        answer:
            'd/dx(eˣ) = eˣ, d/dx(ln x) = 1/x, d/dx(sin x) = cos x, d/dx(cos x) = −sin x, and d/dx(tan x) = sec²x. ' +
            'These assume x is in radians, which is why calculus questions almost always use radians.',
    },
    {
        id: 'maths-integration-rules',
        subject: 'mathematics',
        question: 'What are the basic integration rules?',
        aliases: ['integrate', 'integration rules', 'antiderivative', 'integral of 1/x'],
        answer:
            '∫xⁿ dx = xⁿ⁺¹/(n + 1) + c, for n ≠ −1. For n = −1, ∫(1/x) dx = ln|x| + c. ' +
            'Also ∫eˣ dx = eˣ + c, ∫sin x dx = −cos x + c and ∫cos x dx = sin x + c. Never forget the + c.',
    },
    {
        id: 'maths-definite-integral',
        subject: 'mathematics',
        question: 'What does a definite integral find?',
        aliases: ['definite integral', 'area under a curve'],
        answer:
            'A definite integral finds the signed area between a curve and the x-axis: ∫ from a to b of f(x) dx = F(b) − F(a). ' +
            'Area below the axis counts as negative, so split the integral at any x-intercept when you want total area.',
    },
    {
        id: 'maths-rates-of-change',
        subject: 'mathematics',
        question: 'How do I use calculus for rates of change?',
        aliases: [
            'rates of change', 'related rates', 'motion calculus',
            'rate of change of volume', 'chain rule rates', 'filling a tank',
        ],
        answer:
            'The derivative is the instantaneous rate of change. In motion, differentiating displacement gives ' +
            'velocity and differentiating again gives acceleration; integrating reverses it. ' +
            'For related rates, link the quantities in one equation, differentiate every term with respect to time, ' +
            'and substitute the known rate only at the end.',
    },
    {
        id: 'maths-stationary-points',
        subject: 'mathematics',
        question: 'How do I find and classify stationary points?',
        aliases: ['stationary points', 'maximum minimum', 'turning point', 'classify stationary points'],
        answer:
            'Solve f′(x) = 0 for the stationary points. The second derivative classifies them: f″(x) < 0 is a maximum, ' +
            'f″(x) > 0 is a minimum. Where f″(x) = 0 and concavity changes, there is a point of inflection.',
    },
    {
        id: 'maths-optimisation',
        subject: 'mathematics',
        question: 'How do I solve an optimisation problem?',
        aliases: ['optimisation', 'maximum volume', 'minimum surface area', 'maxima and minima problems'],
        answer:
            'Write the quantity to optimise as one equation, use the constraint to reduce it to a single variable, ' +
            'then differentiate and solve for zero. Test that it is the maximum or minimum you want, and check the ' +
            'answer makes sense in the context, including the domain.',
    },
    {
        id: 'maths-integration-applications',
        subject: 'mathematics',
        question: 'What can integration be used for?',
        aliases: ['applications of integration', 'volumes of revolution', 'trapezoidal rule', 'approximating an integral'],
        answer:
            'Area between two curves is the integral of the upper minus the lower. ' +
            'A volume of revolution about the x-axis is π∫y² dx. ' +
            'When a function cannot be integrated exactly, approximate with the trapezoidal rule or Simpson\u2019s rule.',
    },
    {
        id: 'maths-motion-line',
        subject: 'mathematics',
        question: 'How do I answer motion in a straight line questions?',
        aliases: ['motion in a straight line', 'displacement velocity acceleration', 'at rest', 'initially', 'change of direction'],
        answer:
            'Displacement x, velocity v = dx/dt, acceleration a = dv/dt. ' +
            '"At rest" means v = 0, "initially" means t = 0, and the object changes direction where v changes sign. ' +
            'Distance travelled is not displacement: split the journey at every turning point and add the parts.',
    },
    {
        id: 'maths-concavity',
        subject: 'mathematics',
        question: 'What is concavity and a point of inflection?',
        aliases: ['concavity', 'point of inflection', 'second derivative test', 'concave up', 'horizontal inflection'],
        answer:
            'f″(x) > 0 is concave up, f″(x) < 0 is concave down. ' +
            'A point of inflection is where concavity changes, so f″(x) = 0 AND the sign changes across it. ' +
            'A stationary point of inflection also has f′(x) = 0, which is why the second derivative test is ' +
            'inconclusive there.',
    },
    {
        id: 'maths-tangent-normal',
        subject: 'mathematics',
        question: 'How do I find the tangent and normal to a curve?',
        aliases: ['tangent to a curve', 'normal to a curve', 'gradient at a point', 'equation of a tangent'],
        answer:
            'The gradient of the tangent at x = a is f′(a). ' +
            'The normal is perpendicular, so its gradient is −1/f′(a). ' +
            'Use point-gradient form y − y₁ = m(x − x₁) with the point on the curve, which you get by substituting ' +
            'into the original function, not the derivative.',
    },
    {
        id: 'maths-first-principles',
        subject: 'mathematics',
        question: 'How do I differentiate from first principles?',
        aliases: ['first principles', 'limit definition of derivative', 'f(x+h) - f(x) over h', 'differentiation from first principles'],
        answer:
            'f′(x) = limit as h → 0 of [f(x + h) − f(x)]/h. ' +
            'Expand the numerator, cancel the h that divides through, then let h → 0. ' +
            'Marks go for writing the limit statement each line, not just the final derivative.',
    },
    {
        id: 'maths-area-between-curves',
        subject: 'mathematics',
        question: 'How do I find the area between two curves?',
        aliases: ['area between curves', 'upper minus lower', 'area enclosed', 'region between graphs'],
        answer:
            'Integrate the upper curve minus the lower one across the region: ∫(top − bottom) dx. ' +
            'Find the intersections first, and split the integral wherever the curves swap over. ' +
            'For a region bounded on the sides rather than above and below, integrate with respect to y instead.',
    },
    {
        id: 'maths-derivative-meaning',
        subject: 'mathematics',
        question: 'What does the derivative actually mean?',
        aliases: ['meaning of the derivative', 'gradient function', 'rate of change meaning', 'what is differentiation'],
        answer:
            'The derivative is the gradient of the curve at a point, which is also the instantaneous rate of change ' +
            'of y with respect to x. ' +
            'Where it is positive the curve rises, where negative it falls, and where zero the curve is momentarily ' +
            'flat.',
    },
    {
        id: 'maths-second-derivative-meaning',
        subject: 'mathematics',
        question: 'What does the second derivative tell me?',
        aliases: ['second derivative meaning', 'rate of change of gradient', 'acceleration from displacement', 'concave meaning'],
        answer:
            'It is the rate at which the gradient itself changes, so it describes the bend of the curve. ' +
            'Positive means concave up, negative concave down. ' +
            'In motion, differentiating displacement twice gives acceleration.',
    },
    {
        id: 'maths-integration-meaning',
        subject: 'mathematics',
        question: 'What does integration mean?',
        aliases: ['meaning of integration', 'antiderivative meaning', 'accumulation', 'reverse of differentiation'],
        answer:
            'Integration reverses differentiation, recovering a function from its rate of change, which is why the ' +
            'constant of integration appears: many functions share a derivative. ' +
            'A definite integral accumulates the quantity over an interval, which is why it gives area, distance ' +
            'travelled or total change.',
    },
    {
        id: 'maths-calculus-in-context',
        subject: 'mathematics',
        question: 'How do I answer a calculus question set in context?',
        aliases: ['calculus in context', 'interpreting a derivative', 'units of a derivative', 'practical calculus'],
        answer:
            'Ask what the derivative means in the units of the question: dollars per item, litres per minute, metres ' +
            'per second. ' +
            'Setting it to zero finds a maximum or minimum of the real quantity, so check whether that point makes ' +
            'sense in the context before quoting it.',
    },
];
