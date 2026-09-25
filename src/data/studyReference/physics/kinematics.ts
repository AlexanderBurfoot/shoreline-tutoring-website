/**
 * Physics Module 1: Kinematics.
 *
 * Describing motion: displacement, velocity, acceleration and the graphs that
 * represent them.
 */
import type { StudyEntry } from '../types';

export const physicsKinematicsEntries: StudyEntry[] = [
    {
        id: 'phys-suvat',
        subject: 'physics',
        question: 'What are the equations of motion?',
        aliases: ['suvat', 'equations of motion', 'kinematics equations', 'constant acceleration', 'falling object', 'how fast something falls', 'acceleration due to gravity'],
        answer:
            'For constant acceleration: v = u + at, s = ut + ½at², v² = u² + 2as, and s = ½(u + v)t. ' +
            'Here u is the initial velocity, v the final velocity, a the acceleration and s the displacement. ' +
            'Pick the equation that leaves out the quantity you neither know nor want.',
    },
    {
        id: 'phys-vectors-scalars',
        subject: 'physics',
        question: 'What is the difference between a vector and a scalar?',
        aliases: ['vector scalar', 'displacement vs distance', 'speed vs velocity', 'resultant vector'],
        answer:
            'A scalar has size only, such as distance, speed, mass or energy. A vector has size and direction, such ' +
            'as displacement, velocity, acceleration and force. Add vectors head to tail, or by components, and the ' +
            'resultant is the single vector with the same effect.',
    },
    {
        id: 'phys-graphing-data',
        subject: 'physics',
        question: 'How do I use a gradient to find a physical constant?',
        aliases: ['line of best fit', 'gradient of a graph', 'linearising data', 'straight line graph physics', 'plotting results'],
        answer:
            'Rearrange the relationship into the form y = mx + b, so the quantity you want becomes the gradient. ' +
            'Plot the measured pairs, draw the line of best fit, and take the gradient from the line, not from two ' +
            'data points. The gradient carries units, and they should match what you expect.',
    },
    {
        id: 'phys-motion-graphs',
        subject: 'physics',
        question: 'How do I read a motion graph?',
        aliases: ['motion graph', 'displacement time graph', 'velocity time graph', 'area under a graph'],
        answer:
            'On a displacement-time graph the gradient is velocity. On a velocity-time graph the gradient is ' +
            'acceleration and the area underneath is displacement. ' +
            'A straight line means constant, a curve means changing. Area below the axis counts as negative ' +
            'displacement, so it cancels rather than adds.',
    },
    {
        id: 'phys-distance-displacement',
        subject: 'physics',
        question: 'What is the difference between distance and displacement?',
        aliases: ['distance vs displacement', 'average speed', 'scalar quantity motion'],
        answer:
            'Distance is the total path travelled, a scalar. Displacement is the straight line from start to finish ' +
            'with a direction, a vector. ' +
            'Average speed is distance over time; average velocity is displacement over time. ' +
            'A return journey has zero displacement and zero average velocity, but plenty of distance.',
    },
    {
        id: 'phys-relative-velocity',
        subject: 'physics',
        question: 'How do I calculate relative velocity?',
        aliases: ['relative velocity', 'velocity relative to', 'closing speed', 'boat crossing a river', 'wind and aircraft'],
        answer:
            'The velocity of A relative to B is v(A) − v(B), which is a vector subtraction: reverse B and add. ' +
            'For a boat crossing a river, add the boat\u2019s velocity in still water to the current to get the path ' +
            'over the ground.',
    },
    {
        id: 'phys-vector-components',
        subject: 'physics',
        question: 'How do I resolve a vector into components?',
        aliases: ['resolving vectors', 'vector components', 'horizontal and vertical components', 'adding vectors', 'resultant'],
        answer:
            'The component along an axis is the magnitude times the cosine of the angle to that axis, and the ' +
            'perpendicular one uses sine. ' +
            'Add vectors by adding their components separately, then rebuild the resultant with Pythagoras for the ' +
            'size and tan⁻¹ for the direction.',
    },
    {
        id: 'phys-acceleration-meaning',
        subject: 'physics',
        question: 'What does acceleration actually mean?',
        aliases: ['what is acceleration', 'negative acceleration', 'deceleration', 'change in velocity', 'slowing down'],
        answer:
            'Acceleration is the rate of change of velocity, in m s⁻², and it is a vector. ' +
            'Negative acceleration does not always mean slowing down: it means acceleration in the negative ' +
            'direction. An object slows only when acceleration opposes its velocity.',
    },
    {
        id: 'phys-average-instantaneous',
        subject: 'physics',
        question: 'What is the difference between average and instantaneous velocity?',
        aliases: ['average velocity', 'instantaneous velocity', 'velocity at a moment', 'tangent to a curve motion'],
        answer:
            'Average velocity is total displacement over total time, a single figure for the whole journey. ' +
            'Instantaneous velocity is the velocity at one moment, found as the gradient of the tangent to a ' +
            'displacement-time graph at that point.',
    },
    {
        id: 'phys-free-fall',
        subject: 'physics',
        question: 'How do I solve a free fall problem?',
        aliases: ['free fall', 'dropped object', 'thrown upwards', 'g = 9.8', 'falling from a height'],
        answer:
            'Take down as negative or positive consistently, then use the equations of motion with a = 9.8 m s⁻². ' +
            'An object thrown up has zero velocity at the top but still accelerates downward. ' +
            'Time up equals time down for a symmetric flight, and it returns at the same speed it left.',
    },
    {
        id: 'phys-displacement-vectors',
        subject: 'physics',
        question: 'How do I add displacements in two dimensions?',
        aliases: ['adding displacements', 'total displacement', 'journey legs', 'resultant displacement'],
        answer:
            'Add the legs head to tail, or add their components and rebuild. ' +
            'Distance travelled is the sum of the leg lengths; displacement is the single arrow from start to finish, ' +
            'usually shorter. Quote a direction with it, often as a bearing.',
    },
    {
        id: 'phys-graph-conversions',
        subject: 'physics',
        question: 'How do I convert between motion graphs?',
        aliases: ['converting motion graphs', 'from velocity to acceleration graph', 'sketching the derivative graph'],
        answer:
            'The gradient of one graph becomes the height of the next: displacement to velocity to acceleration. ' +
            'Going back the other way, the area under a graph becomes the height of the previous one. ' +
            'A straight sloping line therefore becomes a horizontal line, and a curve becomes a slope.',
    },
    {
        id: 'phys-equations-choosing',
        subject: 'physics',
        question: 'Which equation of motion should I use?',
        aliases: ['choosing a suvat equation', 'which formula motion', 'listing known values'],
        answer:
            'List what you know and what you want, then pick the equation that leaves out the quantity you neither ' +
            'have nor need. ' +
            'If time is missing, use v² = u² + 2as. ' +
            'If the final velocity is missing, use s = ut + ½at². Writing the list first prevents most mistakes.',
    },
];
