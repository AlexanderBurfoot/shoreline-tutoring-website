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
        aliases: ['suvat', 'equations of motion', 'kinematics equations', 'falling object', 'how fast something falls', 'acceleration due to gravity'],
        answer:
            'For constant acceleration: v = u + at, s = ut + ½at², v² = u² + 2as, and s = ½(u + v)t. ' +
            'Here u is the initial velocity, v the final velocity, a the acceleration and s the displacement. ' +
            'Pick the equation that leaves out the quantity you neither know nor want.',
    },
    {
        id: 'phys-vectors-scalars',
        subject: 'physics',
        question: 'What is the difference between a vector and a scalar?',
        aliases: ['vector scalar', 'displacement vs distance', 'resultant vector'],
        answer:
            'A scalar has size only, such as distance, speed, mass or energy. A vector has size and direction, such ' +
            'as displacement, velocity, acceleration and force. Add vectors head to tail, or by components, and the ' +
            'resultant is the single vector with the same effect.',
    },
    {
        id: 'phys-graphing-data',
        subject: 'physics',
        question: 'How do I use a gradient to find a physical constant?',
        aliases: ['gradient of a graph', 'linearising data', 'straight line graph physics', 'plotting results'],
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
        aliases: ['distance vs displacement', 'scalar quantity motion'],
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
    {
        id: 'phys-speed-vs-velocity',
        subject: 'physics',
        question: 'What is the difference between speed and velocity?',
        aliases: ['speed vs velocity', 'average speed', 'is velocity a vector'],
        answer:
            'Speed is a scalar, the rate of covering distance. ' +
            'Velocity is a vector, the rate of change of displacement, so it carries a direction. ' +
            'A car going round a roundabout at a steady 30 km/h has constant speed but changing velocity.',
    },
    {
        id: 'phys-area-under-graph',
        subject: 'physics',
        question: 'What does the area under a motion graph tell me?',
        aliases: ['area under a velocity time graph', 'area under an acceleration graph', 'displacement from a graph'],
        answer:
            'The area under a velocity-time graph is the displacement, and under an acceleration-time graph it is the ' +
            'change in velocity. ' +
            'Area below the axis counts as negative, so it subtracts from the total, which is how a return journey ' +
            'gives zero displacement.',
    },
    {
        id: 'phys-sign-conventions',
        subject: 'physics',
        question: 'How do I choose which direction is positive?',
        aliases: ['sign convention', 'is deceleration negative', 'choosing a positive direction'],
        answer:
            'Choose either direction as positive, state it, then stay with it for every quantity in the question. ' +
            'Negative acceleration does not always mean slowing: it means acceleration in the negative direction, so ' +
            'an object moving the negative way is speeding up.',
    },
    {
        id: 'phys-thrown-upward',
        subject: 'physics',
        question: 'What happens at the top of a ball thrown upward?',
        aliases: ['ball thrown up', 'velocity at the highest point', 'time up equals time down'],
        answer:
            'Velocity is momentarily zero but acceleration is still 9.8 m s⁻² downward, which is why the ball does not ' +
            'stay there. ' +
            'Ignoring air resistance, the flight is symmetric: the time up equals the time down, and it returns at the ' +
            'same speed it left.',
    },
    {
        id: 'phys-stopping-distance',
        subject: 'physics',
        question: 'What affects the stopping distance of a car?',
        aliases: ['stopping distance', 'braking distance', 'reaction time distance', 'thinking distance'],
        answer:
            'Stopping distance is thinking distance plus braking distance. ' +
            'Thinking distance grows in proportion to speed, but braking distance grows with the square of it, since ' +
            'the kinetic energy to remove is ½mv². ' +
            'Doubling the speed roughly quadruples the braking distance.',
    },
    {
        id: 'phys-uniform-acceleration-meaning',
        subject: 'physics',
        question: 'What does uniform acceleration mean?',
        aliases: ['uniform acceleration', 'constant acceleration', 'non uniform acceleration'],
        answer:
            'The velocity changes by the same amount each second, so the velocity-time graph is a straight line. ' +
            'The equations of motion only apply in this case. ' +
            'If acceleration itself changes, the graph curves and you need gradients and areas instead of the formulas.',
    },
    {
        id: 'phys-tangent-gradient',
        subject: 'physics',
        question: 'How do I find instantaneous velocity from a curved graph?',
        aliases: ['tangent to a curve', 'gradient of a tangent', 'instantaneous value from a curve'],
        answer:
            'Draw a tangent touching the curve at that point, extend it well past the curve, then take the rise over ' +
            'run using two widely separated points on the tangent. ' +
            'Using points close together magnifies the error in reading them.',
    },
    {
        id: 'phys-frame-of-reference',
        subject: 'physics',
        question: 'What is a frame of reference?',
        aliases: ['frame of reference', 'inertial frame', 'observer in motion'],
        answer:
            'The viewpoint from which motion is measured. ' +
            'A passenger sees a dropped coin fall straight down; someone on the platform sees it follow a curve. ' +
            'Both are right. ' +
            'An inertial frame is one that is not accelerating, and the laws of motion take their simple form only in ' +
            'such a frame.',
    },
    {
        id: 'phys-vector-subtraction',
        subject: 'physics',
        question: 'How do I subtract vectors?',
        aliases: ['vector subtraction', 'change in velocity vector', 'reversing a vector', 'delta v'],
        answer:
            'Reverse the vector being subtracted, then add. ' +
            'Change in velocity is final minus initial, so a ball bouncing straight back off a wall at the same speed ' +
            'has a change in velocity of 2v, not zero, which is why the wall exerts a force.',
    },
    {
        id: 'phys-free-fall-graphs',
        subject: 'physics',
        question: 'What do the graphs of a falling object look like?',
        aliases: ['graphs of free fall', 'parabolic displacement graph', 'shape of a gravity graph'],
        answer:
            'Acceleration is a horizontal line at 9.8 m s⁻². ' +
            'Velocity is a straight line with that gradient. ' +
            'Displacement curves upward as a parabola, since it depends on t². ' +
            'Each graph is the gradient of the one below it and the area of the one above.',
    },
    {
        id: 'phys-projectile-from-a-cliff',
        subject: 'physics',
        question: 'How do I handle a projectile fired horizontally from a height?',
        aliases: ['fired horizontally from a height', 'projectile off a cliff', 'initial vertical velocity zero'],
        answer:
            'The initial vertical velocity is zero, so the fall time comes from the height alone. Horizontal range is ' +
            'then the launch speed times that time. The two directions never mix except through the shared time.',
    },
    {
        id: 'phys-relative-velocity-2d',
        subject: 'physics',
        question: 'How do I find a relative velocity in two dimensions?',
        aliases: ['relative velocity in two dimensions', 'plane in a crosswind'],
        answer:
            'Subtract the vectors: the velocity of A relative to B is the velocity of A minus that of B. For a boat ' +
            'crossing a river, add the boat and current vectors head to tail, and the resultant gives both the speed ' +
            'and the drift angle.',
    },
    {
        id: 'phys-average-velocity-vs-speed',
        subject: 'physics',
        question: 'Can average speed and average velocity differ?',
        aliases: ['average speed versus average velocity', 'round trip average', 'zero average velocity'],
        answer:
            'Yes, and often greatly. A runner completing a lap has a substantial average speed but zero average ' +
            'velocity, because displacement is zero while distance is not.',
    },
    {
        id: 'phys-acceleration-from-graph',
        subject: 'physics',
        question: 'How do I find acceleration from a graph?',
        aliases: ['acceleration from a graph', 'gradient of a velocity graph', 'curved velocity graph'],
        answer:
            'Take the gradient of the velocity-time graph. If that graph is curved, the acceleration is changing, so ' +
            'draw a tangent at the instant in question and take its gradient instead.',
    },
    {
        id: 'phys-motion-in-two-dimensions',
        subject: 'physics',
        question: 'Why can two-dimensional motion be split up?',
        aliases: ['splitting two dimensional motion', 'independence of perpendicular components', 'components of motion'],
        answer:
            'Because perpendicular components are independent: a force along one axis changes only that component. ' +
            'This is why a horizontally launched ball and a dropped ball reach the ground together.',
    },
    {
        id: 'phys-galilean-relativity',
        subject: 'physics',
        question: 'What is Galilean relativity?',
        aliases: ['galilean relativity', 'classical addition of velocities', 'no preferred frame'],
        answer:
            'The laws of mechanics are the same in every inertial frame, and velocities simply add. It works well at ' +
            'ordinary speeds and fails for light, which is what special relativity was built to resolve.',
    },
    {
        id: 'phys-significant-motion-graph-areas',
        subject: 'physics',
        question: 'What if a velocity-time graph goes below the axis?',
        aliases: ['velocity graph below the axis', 'negative area on a graph', 'returning to the start'],
        answer:
            'The object is moving in the negative direction, so that area is negative displacement. For total ' +
            'distance, add the magnitudes of the areas; for displacement, let them cancel.',
    },
];
