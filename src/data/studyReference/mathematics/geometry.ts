/**
 * Mathematics: geometry, Years 7 to 10.
 *
 * Angles, shapes, transformations and the reasoning used to justify them.
 */
import type { StudyEntry } from '../types';

export const mathematicsGeometryEntries: StudyEntry[] = [
    {
        id: 'maths-angle-rules',
        subject: 'mathematics',
        question: 'What are the angle rules?',
        aliases: ['angle rules', 'angles on a line', 'vertically opposite', 'angles at a point', 'complementary supplementary'],
        answer:
            'Angles on a straight line add to 180°, angles at a point to 360°, and vertically opposite angles are ' +
            'equal. ' +
            'Complementary angles add to 90° and supplementary to 180°. ' +
            'Quote the rule by name when giving a reason, since the reason carries the mark.',
    },
    {
        id: 'maths-parallel-lines-angles',
        subject: 'mathematics',
        question: 'What are the parallel line angle rules?',
        aliases: ['parallel lines angles', 'alternate angles', 'corresponding angles', 'co interior', 'transversal'],
        answer:
            'With a transversal across parallel lines, corresponding angles are equal, alternate angles are equal, ' +
            'and co-interior angles add to 180°. ' +
            'The shapes help: F for corresponding, Z for alternate, C for co-interior.',
    },
    {
        id: 'maths-triangle-angles',
        subject: 'mathematics',
        question: 'What are the angle rules for triangles and polygons?',
        aliases: ['angle sum of a triangle', 'polygon angle sum', 'interior angles', 'isosceles angles'],
        answer:
            'A triangle\u2019s angles add to 180°, and an exterior angle equals the sum of the two opposite interior ' +
            'ones. ' +
            'An isosceles triangle has two equal angles opposite its two equal sides. ' +
            'A polygon with n sides has an interior angle sum of (n − 2) × 180°, and exterior angles always total ' +
            '360°.',
    },
    {
        id: 'maths-quadrilaterals',
        subject: 'mathematics',
        question: 'What are the properties of the quadrilaterals?',
        aliases: ['quadrilateral properties', 'parallelogram', 'rhombus', 'trapezium', 'kite properties'],
        answer:
            'A parallelogram has two pairs of parallel sides, equal opposite sides and angles, and diagonals that ' +
            'bisect each other. ' +
            'A rhombus adds four equal sides and perpendicular diagonals; a rectangle adds right angles; a square has ' +
            'both. A trapezium has one pair of parallel sides, a kite two pairs of adjacent equal sides.',
    },
    {
        id: 'maths-transformations-geometry',
        subject: 'mathematics',
        question: 'What are translations, reflections and rotations?',
        aliases: ['translation', 'reflection', 'rotation', 'transformation geometry', 'congruent transformation'],
        answer:
            'A translation slides a shape, a reflection flips it across a line, and a rotation turns it about a ' +
            'point through an angle. ' +
            'All three keep the shape and size, so the image is congruent. ' +
            'An enlargement changes size by a scale factor, giving a similar shape.',
    },
    {
        id: 'maths-symmetry',
        subject: 'mathematics',
        question: 'What is line and rotational symmetry?',
        aliases: ['symmetry', 'line of symmetry', 'rotational symmetry', 'order of symmetry'],
        answer:
            'A line of symmetry divides a shape into mirror halves. ' +
            'Rotational symmetry means the shape looks the same after a turn of less than a full circle, and the ' +
            'order is how many times that happens in one full turn. ' +
            'A square has four lines and order four.',
    },
    {
        id: 'maths-nets-solids',
        subject: 'mathematics',
        question: 'What are nets and cross-sections?',
        aliases: ['net of a solid', 'cross section', '3d shapes', 'faces edges vertices', 'euler'],
        answer:
            'A net is the flat shape that folds into a solid, and it is how surface area is usually found: add the ' +
            'areas of the faces. ' +
            'A cross-section is the face you would see if the solid were sliced; for a prism it is the same all the ' +
            'way along, which is why its volume is cross-section times length.',
    },
    {
        id: 'maths-perimeter-composite',
        subject: 'mathematics',
        question: 'How do I find the perimeter and area of a composite shape?',
        aliases: ['composite shape', 'compound area', 'perimeter of an l shape', 'adding areas', 'subtracting areas'],
        answer:
            'Split the shape into rectangles, triangles and parts of circles, find each area, then add, or subtract ' +
            'a cut-out piece. ' +
            'For perimeter, go around the outside and count only the edges you would walk along, not the internal ' +
            'lines you drew.',
    },
    {
        id: 'maths-trapezium-area',
        subject: 'mathematics',
        question: 'What is the area of a trapezium and a parallelogram?',
        aliases: ['area of a trapezium', 'area of a parallelogram', 'area of a rhombus', 'area of a kite'],
        answer:
            'Parallelogram: base × perpendicular height. ' +
            'Trapezium: ½(a + b) × h, the average of the parallel sides times the distance between them. ' +
            'Rhombus and kite: half the product of the diagonals.',
    },
    {
        id: 'maths-geometric-reasoning',
        subject: 'mathematics',
        question: 'How do I write a geometric proof?',
        aliases: ['geometric reasoning', 'proof geometry', 'giving reasons', 'congruence proof', 'two column proof'],
        answer:
            'Work one step at a time, and after each statement give the reason in brackets, naming the rule such as ' +
            'alternate angles or SAS. ' +
            'Use only what is given or already proved. ' +
            'Finish by stating what you set out to show, since the last line is the conclusion, not just the last ' +
            'calculation.',
    },
    {
        id: 'maths-congruence-tests',
        subject: 'mathematics',
        question: 'What are the congruence tests?',
        aliases: ['congruence tests', 'sss sas asa rhs', 'proving triangles congruent'],
        answer:
            'SSS, SAS, AAS and RHS. Name the test and then match the sides and angles in the same order in both ' +
            'triangles, since the order is what makes the proof valid.',
    },
    {
        id: 'maths-similarity-tests',
        subject: 'mathematics',
        question: 'What are the similarity tests and how do I use the ratio?',
        aliases: ['similarity tests', 'equiangular triangles', 'ratio of sides in similar figures'],
        answer:
            'Equiangular, sides in proportion, or two sides in proportion with the included angle equal. Once ' +
            'similar, all matching lengths share one ratio, areas share its square, and volumes its cube.',
    },
    {
        id: 'maths-circle-geometry',
        subject: 'mathematics',
        question: 'What are the circle geometry results?',
        aliases: ['circle geometry', 'angle at the centre', 'angles in the same segment', 'cyclic quadrilateral', 'chord', 'tangent and radius'],
        answer:
            'The angle at the centre is twice the angle at the circumference on the same arc, angles in the same ' +
            'segment are equal, an angle in a semicircle is a right angle, opposite angles of a cyclic quadrilateral ' +
            'sum to 180, and a tangent meets the radius at a right angle.',
    },
    {
        id: 'maths-pythagoras-applications',
        subject: 'mathematics',
        question: 'Where do I use Pythagoras beyond a plain triangle?',
        aliases: ['pythagoras applications', 'diagonal of a rectangle', 'is it a right angle'],
        answer:
            'To find a diagonal, to check whether a triangle is right-angled by testing whether a² + b² = c², and to ' +
            'find distances on a grid, which is where the distance formula comes from.',
    },
    {
        id: 'maths-area-of-sector-segment',
        subject: 'mathematics',
        question: 'How do I find the area of a segment?',
        aliases: ['area of a segment', 'sector minus triangle', 'segment of a circle'],
        answer:
            'Find the sector area, then subtract the triangle formed by the two radii and the chord. The triangle ' +
            'area is ½ab sin C with both sides equal to the radius, so it is ½r² sin θ.',
    },
    {
        id: 'maths-surface-area-composite',
        subject: 'mathematics',
        question: 'How do I find the surface area of a composite solid?',
        aliases: ['surface area of a composite solid', 'adding surfaces together', 'hidden faces'],
        answer:
            'Break it into the standard solids and add the exposed surfaces only, leaving out the faces where the ' +
            'parts join. Sketching the net of each piece makes the hidden faces obvious.',
    },
    {
        id: 'maths-volume-composite',
        subject: 'mathematics',
        question: 'How do I find the volume of a composite solid?',
        aliases: ['volume of a composite solid', 'adding volumes', 'volume of a shape with a hole'],
        answer:
            'Split the solid into standard shapes and add the volumes, or take the volume of the enclosing shape and ' +
            'subtract the part removed. Check that every measurement is in the same unit before multiplying.',
    },
    {
        id: 'maths-scale-factor-area-volume',
        subject: 'mathematics',
        question: 'What happens to area and volume when lengths are scaled?',
        aliases: ['scale factor for area', 'scale factor for volume', 'doubling the dimensions'],
        answer:
            'If lengths are multiplied by k, areas are multiplied by k² and volumes by k³. Doubling every dimension ' +
            'gives four times the surface area and eight times the volume, which is why large animals are not simply ' +
            'scaled up small ones.',
    },
    {
        id: 'maths-exterior-angles',
        subject: 'mathematics',
        question: 'What is the exterior angle of a polygon?',
        aliases: ['exterior angle', 'exterior angles sum to 360', 'exterior angle of a triangle'],
        answer:
            'The exterior angles of any convex polygon sum to 360 degrees, so each exterior angle of a regular ' +
            'polygon is 360 divided by the number of sides. In a triangle, an exterior angle equals the sum of the ' +
            'two interior opposite angles.',
    },
    {
        id: 'maths-coordinate-geometry-proof',
        subject: 'mathematics',
        question: 'How do I prove a shape is a particular quadrilateral using coordinates?',
        aliases: ['coordinate geometry proof', 'proving a parallelogram with coordinates', 'using gradients and distances'],
        answer:
            'Use gradients to show sides are parallel or perpendicular, and the distance formula to show sides are ' +
            'equal. State which property you are proving first, then show exactly the facts that property requires.',
    },
];
