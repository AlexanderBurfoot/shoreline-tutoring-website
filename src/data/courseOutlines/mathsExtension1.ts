import type { CourseOutline } from './types';

/**
 * Order follows NESA's sample Year 12 scope and sequence for Advanced and
 * Extension 1 together under the 2024 syllabus: proof by induction in weeks 1
 * to 4 and vectors in weeks 5 to 10. Vector calculus and projectile motion
 * need integration, so, as in Pearson New Senior Mathematics 4e, they wait
 * until after integral calculus in Term 1. The spare lesson gets ahead on
 * inverse trigonometric functions, which NESA's sample teaches next.
 *
 * The plan covers Extension 1 content only; students study Advanced alongside.
 */
export const mathsExtension1Outline: CourseOutline = {
    courseId: 'maths-extension-1',
    overview:
        'Proof by mathematical induction and vectors in two and three dimensions, with a head start on inverse trigonometric functions.',
    metaFocus: 'proof by induction, vectors, and inverse trigonometric functions',
    syllabusNote:
        'Follows the new NESA Mathematics Extension 1 11–12 Syllabus (2024), which this cohort is the first to sit in the 2027 HSC, in the order most schools teach it.',
    lessons: [
        {
            topic: 'Proof by mathematical induction',
            title: 'The idea of proof by induction',
            syllabusRefs: ['Year 11 review', 'ME1-12-01'],
            points: [
                'A quick review of polynomials, inverse functions and the binomial theorem',
                'What a proof by induction is: the base case, the assumption and the inductive step',
                'Why the steps together prove a statement for every positive integer',
            ],
            keySkill: 'Setting out an induction proof the way markers expect to see it.',
        },
        {
            topic: 'Proof by mathematical induction',
            title: 'Induction for sums',
            syllabusRefs: ['Proof by induction', 'ME1-12-01'],
            points: [
                'Proving formulas for the sum of a series',
                'Working with sigma notation inside a proof',
                'Managing the algebra in the k + 1 step, including fractions and powers',
            ],
            keySkill: 'Using the assumption at exactly the right point in the inductive step.',
        },
        {
            topic: 'Proof by mathematical induction',
            title: 'Induction for divisibility, and faulty proofs',
            syllabusRefs: ['Proof by induction', 'ME1-12-01'],
            points: [
                'Proving that an expression is always divisible by a given number',
                'Harder algebraic set-ups',
                'Spotting flawed proofs where one of the steps does not hold',
            ],
            keySkill: 'Rearranging an expression so the divisor appears.',
        },
        {
            topic: 'Introduction to vectors',
            title: 'What a vector is',
            syllabusRefs: ['Vectors', 'ME1-12-02'],
            points: [
                'Magnitude and direction, and how vectors differ from scalars',
                'Vector notation, position vectors and when two vectors are equal',
                'Representing vectors as directed line segments',
            ],
            keySkill: 'Moving confidently between a diagram and vector notation.',
        },
        {
            topic: 'Introduction to vectors',
            title: 'Vectors in component form',
            syllabusRefs: ['Vectors', 'ME1-12-02'],
            points: [
                'Writing vectors with i and j, as column vectors and as ordered pairs',
                'Adding and subtracting vectors with the triangle and parallelogram rules',
                'Scalar multiples, parallel vectors, magnitude and unit vectors',
            ],
            keySkill: 'Calculating with components quickly and accurately.',
        },
        {
            topic: 'Introduction to vectors',
            title: 'Vectors in three dimensions',
            syllabusRefs: ['Vectors', 'ME1-12-02'],
            points: [
                'Coordinates in three dimensions and the coordinate planes',
                'Distance and midpoint in three dimensions',
                'Vectors written with i, j and k, their magnitude and unit vectors',
            ],
            keySkill: 'Picturing a three-dimensional situation and calculating in it.',
        },
        {
            topic: 'Introduction to vectors',
            title: 'The scalar product',
            syllabusRefs: ['Vectors', 'ME1-12-02'],
            points: [
                'The scalar (dot) product in component form and in terms of the angle between vectors',
                'Finding the angle between two vectors',
                'Tests for perpendicular and parallel vectors',
            ],
            keySkill: 'Using the scalar product to find angles and test for perpendicularity.',
        },
        {
            topic: 'Introduction to vectors',
            title: 'Projections and geometric proof',
            syllabusRefs: ['Vectors', 'ME1-12-02'],
            points: [
                'The projection of one vector onto another',
                'Splitting a vector into parallel and perpendicular parts',
                'Proving geometric results, such as properties of triangles and quadrilaterals, with vectors',
            ],
            keySkill: 'Writing a clear, complete vector proof.',
        },
        {
            topic: 'Introduction to vectors',
            title: 'Vectors and motion',
            syllabusRefs: ['Vectors', 'ME1-12-02'],
            points: [
                'Position as a vector function of time',
                'Parametric equations and finding the Cartesian path',
                'Constant velocity problems, and boats and planes in a current or crosswind',
            ],
            keySkill: 'Splitting motion into horizontal and vertical components.',
        },
        {
            topic: 'Inverse trigonometric functions',
            title: 'Getting ahead: inverse trigonometric functions',
            syllabusRefs: ['Inverse trigonometric functions', 'ME1-12-03'],
            points: [
                'Restricting the domain so a trigonometric function has an inverse',
                'The graphs, domains and ranges of the inverse sine, cosine and tangent functions',
                'Exact values and the key properties of each function',
            ],
            keySkill: 'Evaluating inverse trigonometric expressions exactly.',
        },
        {
            topic: 'Term review',
            title: 'Consolidation and term test',
            syllabusRefs: ['ME1-12-01 to ME1-12-03'],
            points: [
                'Mixed HSC-style questions on proof by induction, vectors and inverse trigonometric functions, including the mistakes that cost marks most often',
                'A short test under exam conditions, marked with written feedback',
                'A plan for the summer holidays, built around the further calculus that opens Term 1',
            ],
            keySkill: 'Writing rigorous proofs under time pressure.',
        },
    ],
    laterTerms: [
        {
            term: 'Term 1, 2027',
            focus: 'Inverse trigonometric functions in full, and further calculus skills including integration by substitution. Vector motion and projectiles once integration is in place.',
        },
        {
            term: 'Term 2, 2027',
            focus: 'Further applications of calculus: related rates, volumes of solids of revolution and differential equations. The binomial distribution begins.',
        },
        {
            term: 'Term 3, 2027',
            focus: 'The sampling distribution of the mean and the central limit theorem. Then trial exams and revision for the HSC.',
        },
    ],
};
