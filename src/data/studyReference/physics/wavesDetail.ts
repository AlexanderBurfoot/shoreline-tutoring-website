/**
 * Physics: wave behaviour in detail.
 *
 * Resonance, standing waves in strings and pipes, interference conditions and
 * the behaviour and limits of images formed by lenses and mirrors.
 */
import type { StudyEntry } from '../types';

export const physicsWavesDetailEntries: StudyEntry[] = [
    {
        id: 'phys-resonance-detail',
        subject: 'physics',
        question: 'Why does driving a system at one particular frequency build a large amplitude?',
        aliases: ['resonance', 'driving frequency', 'why a bridge can oscillate'],
        answer:
            'Driving a system at its natural frequency, so each push adds to the motion and the amplitude grows. It ' +
            'is useful in instruments and MRI, and destructive when a structure is driven at the frequency it ' +
            'naturally oscillates at.',
    },
    {
        id: 'phys-string-pitch-factors',
        subject: 'physics',
        question: 'What changes the pitch of a guitar string?',
        aliases: ['pitch of a string', 'tension and pitch', 'thicker string lower note', 'shortening a string'],
        answer:
            'Three things: shortening it, tightening it, or using a lighter string all raise the pitch. Frequency is ' +
            'proportional to the square root of the tension and inversely proportional to both the length and the ' +
            'square root of the mass per unit length.',
    },
    {
        id: 'phys-pipes-open-closed',
        subject: 'physics',
        question: 'Why do open and closed pipes sound different?',
        aliases: ['open pipe', 'closed pipe', 'end correction', 'pipe harmonics'],
        answer:
            'A closed end forces a node and an open end an antinode. An open pipe fits half a wavelength at its ' +
            'fundamental, a closed pipe a quarter, so a closed pipe of the same length sounds an octave lower and ' +
            'produces only odd harmonics.',
    },
    {
        id: 'phys-sound-speed-factors',
        subject: 'physics',
        question: 'What affects the speed of sound?',
        aliases: ['speed of sound factors', 'sound in air temperature', 'sound speed in different media'],
        answer:
            'The medium above all: sound travels far faster in solids and liquids than in air, because the particles ' +
            'are closer and the forces between them stronger. In air it rises with temperature, by roughly 0.6 m/s ' +
            'per degree.',
    },
    {
        id: 'phys-echo-and-reverberation',
        subject: 'physics',
        question: 'What is the difference between an echo and reverberation?',
        aliases: ['reverberation', 'acoustics of a room'],
        answer:
            'An echo is a distinct reflection arriving late enough to be heard separately. Reverberation is many ' +
            'overlapping reflections merging into a decaying sound, which is what soft furnishings in a hall are ' +
            'there to shorten.',
    },
    {
        id: 'phys-interference-conditions',
        subject: 'physics',
        question: 'What is needed for a stable interference pattern?',
        aliases: ['conditions for interference', 'coherent sources'],
        answer:
            'Coherent sources: the same frequency and a constant phase relationship. Constructive interference occurs ' +
            'where the path difference is a whole number of wavelengths, destructive where it is an odd number of ' +
            'half wavelengths.',
    },
    {
        id: 'phys-diffraction-conditions',
        subject: 'physics',
        question: 'When is diffraction noticeable?',
        aliases: ['when diffraction is noticeable', 'gap size and wavelength', 'why sound bends round corners'],
        answer:
            'When the gap or obstacle is comparable to the wavelength. Sound has metre-scale wavelengths so it ' +
            'spreads around a doorway; visible light has wavelengths under a micrometre, so it needs a very narrow ' +
            'slit to show the same effect.',
    },
    {
        id: 'phys-polarising-filters',
        subject: 'physics',
        question: 'What happens with two polarising filters?',
        aliases: ['two polarising filters', 'crossed polarisers', 'polarised sunglasses'],
        answer:
            'The first restricts the light to one plane, and the second passes only the component along its own axis. ' +
            'At 90 degrees almost nothing gets through, which is the standard demonstration that light is a ' +
            'transverse wave.',
    },
    {
        id: 'phys-lens-defects',
        subject: 'physics',
        question: 'What are the limits of a simple lens?',
        aliases: ['lens aberration', 'chromatic aberration', 'spherical aberration'],
        answer:
            'Chromatic aberration arises because the refractive index varies with wavelength, so colours focus at ' +
            'slightly different points. Spherical aberration arises because rays far from the axis focus closer than ' +
            'central ones.',
    },
    {
        id: 'phys-image-real-virtual',
        subject: 'physics',
        question: 'What is the difference between a real and a virtual image?',
        aliases: ['real image', 'virtual image', 'can it be projected'],
        answer:
            'A real image forms where rays actually converge, so it can be projected onto a screen and is usually ' +
            'inverted. A virtual image is where the rays appear to come from, so it cannot be projected, as with a ' +
            'plane mirror or a magnifying glass.',
    },
];
