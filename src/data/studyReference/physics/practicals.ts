/**
 * Physics: the standard investigations, and what each measures.
 *
 * Including which graph to plot, since most of these experiments are assessed on
 * the gradient rather than a single reading.
 */
import type { StudyEntry } from '../types';

export const physicsPracticalInvestigationEntries: StudyEntry[] = [
    {
        id: 'phys-prac-pendulum',
        subject: 'physics',
        question: 'How do I measure g using a pendulum?',
        aliases: ['pendulum practical', 'measuring g with a pendulum', 'finding gravity experiment'],
        answer:
            'Time twenty swings for several lengths and divide to get the period, then plot T² against length. The ' +
            'gradient is 4π²/g, so g is 4π² divided by the gradient. Keep the swing small, under about ten degrees, ' +
            'or the formula no longer holds.',
    },
    {
        id: 'phys-prac-acceleration',
        subject: 'physics',
        question: 'How do I measure acceleration in the laboratory?',
        aliases: ['measuring acceleration practical', 'ticker timer experiment', 'light gate acceleration'],
        answer:
            'Use light gates or a ticker timer to record position against time as a trolley runs down a ramp, then ' +
            'find the gradient of the velocity-time graph. Compensate for friction by tilting the ramp until the ' +
            'trolley moves at constant velocity before adding the accelerating force.',
    },
    {
        id: 'phys-prac-projectile',
        subject: 'physics',
        question: 'How do I investigate projectile range against angle?',
        aliases: ['projectile practical', 'range versus angle experiment', 'launch angle investigation'],
        answer:
            'Fire a projectile at the same speed across a range of angles and measure the horizontal distance, ' +
            'repeating at each angle. The maximum should fall near 45 degrees for a level landing, and complementary ' +
            'angles should give similar ranges, which is a useful check.',
    },
    {
        id: 'phys-prac-hookes-law',
        subject: 'physics',
        question: 'How do I find the spring constant?',
        aliases: ['hookes law practical', 'spring constant experiment', 'force versus extension'],
        answer:
            'Add known masses and measure the extension each time, then plot force against extension. The gradient is ' +
            'the spring constant, and the energy stored is the area beneath. Stop before the graph curves, which ' +
            'marks the elastic limit.',
    },
    {
        id: 'phys-prac-specific-heat',
        subject: 'physics',
        question: 'How do I measure specific heat capacity?',
        aliases: ['specific heat practical', 'method of mixtures', 'measuring heat capacity of a metal'],
        answer:
            'Heat a metal block in boiling water, transfer it quickly to a known mass of cooler water and record the ' +
            'highest temperature reached. The heat lost by the metal equals the heat gained by the water, so c for ' +
            'the metal follows. Transfer losses make the result low.',
    },
    {
        id: 'phys-prac-ohms-law',
        subject: 'physics',
        question: 'How do I verify Ohm law?',
        aliases: ['ohms law practical', 'verifying ohms law experiment', 'current versus voltage experiment'],
        answer:
            'Vary the supply and record current against voltage for a resistor, then plot them. A straight line ' +
            'through the origin confirms proportionality and the gradient is the conductance. Repeat with a filament ' +
            'lamp, which curves as it heats, to show a non-ohmic conductor.',
    },
    {
        id: 'phys-prac-resistivity',
        subject: 'physics',
        question: 'How do I measure the resistivity of a wire?',
        aliases: ['resistivity practical', 'measuring resistivity of a wire', 'resistance versus length experiment'],
        answer:
            'Measure resistance against length for the same wire and plot them. Since R = ρL/A, the gradient is ρ ' +
            'divided by the cross-sectional area, so measure the diameter with a micrometer in several places and ' +
            'average it. Keep the current low so the wire does not heat.',
    },
    {
        id: 'phys-prac-refractive-index',
        subject: 'physics',
        question: 'How do I measure the refractive index of glass?',
        aliases: ['refractive index practical', 'measuring refractive index experiment', 'snell law experiment'],
        answer:
            'Trace rays entering a glass block at several angles, measure the angles of incidence and refraction, ' +
            'then plot sin i against sin r. The gradient is the refractive index. Marking the block outline and using ' +
            'a sharp pencil are what keep the angles accurate.',
    },
    {
        id: 'phys-prac-focal-length',
        subject: 'physics',
        question: 'How do I find the focal length of a lens?',
        aliases: ['focal length practical', 'measuring focal length experiment', 'lens experiment'],
        answer:
            'Form a sharp image of an illuminated object on a screen for several object distances, recording u and v ' +
            'each time, then use 1/f = 1/u + 1/v or plot 1/v against 1/u, where both intercepts give 1/f. Judging ' +
            'sharpness is the main uncertainty.',
    },
    {
        id: 'phys-prac-standing-waves',
        subject: 'physics',
        question: 'How do I investigate standing waves on a string?',
        aliases: ['standing waves practical', 'string vibration experiment', 'frequency versus tension'],
        answer:
            'Drive a string with a vibrator and vary the tension with hanging masses, recording the frequency that ' +
            'produces a clear standing wave at each. Since the wave speed depends on the square root of tension, ' +
            'plotting frequency against the square root of tension gives a straight line.',
    },
    {
        id: 'phys-prac-inverse-square',
        subject: 'physics',
        question: 'How do I verify the inverse square law for light?',
        aliases: ['inverse square law practical', 'light intensity versus distance', 'intensity experiment'],
        answer:
            'Measure intensity with a light meter at several distances from a small lamp, then plot intensity against ' +
            'one over distance squared. A straight line confirms the relationship. Work in a darkened room and ' +
            'subtract the background reading.',
    },
    {
        id: 'phys-prac-half-life-model',
        subject: 'physics',
        question: 'How can half-life be modelled with dice?',
        aliases: ['half life model practical', 'dice decay simulation', 'modelling radioactive decay'],
        answer:
            'Roll a large number of dice, remove every six as decayed, and repeat, recording how many remain each ' +
            'throw. The count falls exponentially with a half-life of about 3.8 throws. It models the randomness of ' +
            'decay, which is why individual nuclei cannot be predicted.',
    },
];
