/**
 * Worked examples: Mathematics Standard.
 *
 * Networks, statistics and the applied calculations this course is built on,
 * each solved with the numbers shown and checked. Written by hand and shown
 * exactly as written, so the assistant never calculates anything.
 */
import type { StudyEntry } from '../types';

export const workedExampleMathsStandardEntries: StudyEntry[] = [
    {
        id: 'maths-example-minimum-spanning-tree',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a minimum spanning tree?',
        aliases: ['worked example minimum spanning tree', 'example of connecting all vertices cheaply', 'spanning tree example'],
        answer:
            'Five towns must be connected by cable. Take the cheapest edge, then the next cheapest that does not ' +
            'complete a loop, and stop when every town is joined. Five vertices always need exactly four edges, so if ' +
            'the chosen edges are 4, 5, 7 and 9 km, the total is 4 + 5 + 7 + 9 = 25 km.',
    },
    {
        id: 'maths-example-shortest-path-network',
        subject: 'mathematics',
        question: 'Can you show me a worked example of finding a shortest path?',
        aliases: ['worked example shortest path', 'example of the quickest route through a network', 'shortest route example'],
        answer:
            'Label the start 0, then work outwards writing beside each vertex the smallest running total to reach it, ' +
            'replacing a label whenever a shorter route appears. If the routes into the finish total 18 and 15, the ' +
            'shortest path is 15. Trace the labels backwards to name the actual route.',
    },
    {
        id: 'maths-example-critical-path',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a critical path?',
        aliases: ['worked example critical path', 'example of the minimum project time', 'critical path analysis example'],
        answer:
            'Work forwards through the activity chart writing the earliest start time for each task, and the finish ' +
            'time is the largest total at the end. If the longest chain is 6 + 4 + 7 + 3 = 20 days, the project takes ' +
            '20 days. Those tasks form the critical path, and none of them can slip.',
    },
    {
        id: 'maths-example-float-time',
        subject: 'mathematics',
        question: 'Can you show me a worked example of float time?',
        aliases: ['worked example float time', 'example of slack in a project', 'how long a task can be delayed example'],
        answer:
            'A task has an earliest start of day 5, takes 3 days, and must finish by day 12. The float is 12 − 5 − 3 = ' +
            '4 days, so it can be delayed four days without affecting the project. Tasks on the critical path have ' +
            'zero float, which is the definition of being critical.',
    },
    {
        id: 'maths-example-network-degree',
        subject: 'mathematics',
        question: 'Can you show me a worked example of counting edges from degrees?',
        aliases: ['worked example degree of a vertex', 'example of counting edges in a network', 'sum of degrees example'],
        answer:
            'A network has vertices of degree 3, 3, 4, 2 and 2. The degrees add to 14, and every edge is counted twice, ' +
            'so there are 14 ÷ 2 = 7 edges. An odd total would be impossible, which is a useful check on a drawing.',
    },
    {
        id: 'maths-example-eulerian-path',
        subject: 'mathematics',
        question: 'Can you show me a worked example of deciding whether a network can be traversed?',
        aliases: ['worked example traversable network', 'example of an eulerian path', 'can you walk every edge once example'],
        answer:
            'Count the vertices of odd degree. A network with none can be walked covering every edge once and ending ' +
            'where you started. Exactly two odd vertices means it can be done but must start at one and end at the ' +
            'other. Four odd vertices means it cannot be done at all.',
    },
    {
        id: 'maths-example-reading-a-box-plot',
        subject: 'mathematics',
        question: 'Can you show me a worked example of reading a box plot?',
        aliases: ['worked example reading a box plot', 'example of interquartile range from a box plot', 'five number summary from a box plot example'],
        answer:
            'A box plot shows 12, 18, 22, 27 and 40. The median is 22, the interquartile range is 27 − 18 = 9 and the ' +
            'range is 40 − 12 = 28. The long right whisker says the data is positively skewed, with the mean above the ' +
            'median.',
    },
    {
        id: 'maths-example-outlier-test',
        subject: 'mathematics',
        question: 'Can you show me a worked example of testing for an outlier?',
        aliases: ['worked example testing for an outlier', 'example of the 1.5 times iqr rule', 'outlier boundary example'],
        answer:
            'Quartiles are 18 and 27, so the interquartile range is 9 and 1.5 times it is 13.5. The boundaries are 18 − ' +
            '13.5 = 4.5 and 27 + 13.5 = 40.5. A value of 44 lies outside, so it is an outlier; 40 does not.',
    },
    {
        id: 'maths-example-comparing-two-box-plots',
        subject: 'mathematics',
        question: 'Can you show me a worked example of comparing two box plots?',
        aliases: ['worked example comparing two box plots', 'example of comparing two data sets', 'which group performed better example'],
        answer:
            'Group A has median 22 with an interquartile range of 9; group B has median 25 with a range of 22. B scored ' +
            'higher on average but far less consistently. A comparison needs a statement about centre and one about ' +
            'spread, since either alone is half an answer.',
    },
    {
        id: 'maths-example-standard-deviation-meaning',
        subject: 'mathematics',
        question: 'Can you show me a worked example of interpreting a standard deviation?',
        aliases: ['worked example interpreting standard deviation', 'example of what standard deviation tells you', 'comparing spread with standard deviation example'],
        answer:
            'Two classes both average 65, with standard deviations 4 and 12. In the first, most marks sit between 61 ' +
            'and 69; in the second they spread from about 53 to 77. Same mean, very different experience, which is why ' +
            'a mean is never reported alone.',
    },
    {
        id: 'maths-example-grouped-data-mean',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a mean from grouped data?',
        aliases: ['worked example mean from grouped data', 'example of using class centres', 'mean from a grouped frequency table example'],
        answer:
            'Classes 0 to 10 and 10 to 20 have frequencies 6 and 14. Use the class centres 5 and 15: 5 × 6 = 30 and 15 ' +
            '× 14 = 210, giving 240. Divide by the total frequency: 240 ÷ 20 = 12. The answer is an estimate, because ' +
            'the original values are lost.',
    },
    {
        id: 'maths-example-cumulative-frequency',
        subject: 'mathematics',
        question: 'Can you show me a worked example of reading a cumulative frequency graph?',
        aliases: ['worked example cumulative frequency graph', 'example of finding a median from an ogive', 'reading quartiles from a curve example'],
        answer:
            'With 80 values, read across from 40 on the vertical axis to find the median, from 20 for the lower ' +
            'quartile and from 60 for the upper. If those readings are 24, 18 and 31, the interquartile range is 31 − ' +
            '18 = 13. Use half, a quarter and three quarters of the total, never of the values.',
    },
    {
        id: 'maths-example-scatterplot-description',
        subject: 'mathematics',
        question: 'Can you show me a worked example of describing a scatterplot?',
        aliases: ['worked example describing a scatterplot', 'example of describing an association', 'scatterplot description example'],
        answer:
            'Points fall from upper left to lower right in a fairly tight band, with one point well above the rest. ' +
            'Describe form, direction, strength and outliers: roughly linear, negative, moderately strong, with one ' +
            'outlier. All four are expected, and most answers omit form.',
    },
    {
        id: 'maths-example-interpolation',
        subject: 'mathematics',
        question: 'Can you show me a worked example of interpolation and extrapolation?',
        aliases: ['worked example interpolation and extrapolation', 'example of predicting inside and outside the data', 'reliability of a prediction example'],
        answer:
            'Data covers x from 10 to 40. A prediction at x = 25 is interpolation and is reasonably reliable. A ' +
            'prediction at x = 60 is extrapolation, which assumes the trend continues past everything observed, so it ' +
            'should be reported as unreliable even when the arithmetic is right.',
    },
    {
        id: 'maths-example-two-way-table-probability',
        subject: 'mathematics',
        question: 'Can you show me a worked example of probability from a two way table?',
        aliases: ['worked example two way table probability', 'example of reading a two way table', 'conditional probability from a table example'],
        answer:
            'Of 200 people, 120 are adults and 48 of those wear glasses. The chance a randomly chosen person is a ' +
            'glasses-wearing adult is 48 ÷ 200 = 0.24. The chance an adult wears glasses is 48 ÷ 120 = 0.40, because ' +
            'the condition changes the total you divide by.',
    },
    {
        id: 'maths-example-relative-frequency-expected',
        subject: 'mathematics',
        question: 'Can you show me a worked example of an expected number from a probability?',
        aliases: ['worked example expected number', 'example of how many times to expect an outcome', 'expected frequency example'],
        answer:
            'A machine faults with probability 0.03. Across 1200 items the expected number of faults is 1200 × 0.03 = ' +
            '36. Observing 42 is not evidence the probability is wrong, since variation around an expected value is ' +
            'normal.',
    },
    {
        id: 'maths-example-gst-inclusive',
        subject: 'mathematics',
        question: 'Can you show me a worked example of removing GST from a price?',
        aliases: ['worked example removing gst', 'example of finding the price before gst', 'gst included in the price example'],
        answer:
            'A price of $88 includes 10% GST, so it represents 110% of the pre-tax price. Divide rather than subtract ' +
            '10%: 88 ÷ 1.1 = $80, and the GST is $8. Taking 10% off $88 would give $79.20, which is the usual mistake.',
    },
    {
        id: 'maths-example-income-tax',
        subject: 'mathematics',
        question: 'Can you show me a worked example of income tax from a table?',
        aliases: ['worked example income tax from a table', 'example of using a tax bracket table', 'tax payable example'],
        answer:
            'A bracket charges $5092 plus 32.5c for each dollar over $45,000. On an income of $70,000 the excess is ' +
            '25,000, so the extra tax is 25000 × 0.325 = $8125, and the total is 5092 + 8125 = $13,217. The rate ' +
            'applies only to the amount above the threshold.',
    },
    {
        id: 'maths-example-pay-with-overtime',
        subject: 'mathematics',
        question: 'Can you show me a worked example of pay with overtime?',
        aliases: ['worked example pay with overtime', 'example of time and a half', 'overtime pay calculation example'],
        answer:
            'A worker earns $24 an hour for 38 hours, then 6 hours at time and a half. The normal pay is 38 × 24 = ' +
            '$912. Overtime is paid at 24 × 1.5 = $36 an hour, so 6 × 36 = $216. The total is 912 + 216 = $1128.',
    },
    {
        id: 'maths-example-commission',
        subject: 'mathematics',
        question: 'Can you show me a worked example of commission?',
        aliases: ['worked example commission', 'example of retainer plus commission', 'commission on sales example'],
        answer:
            'A salesperson receives $600 plus 4% of sales above $10,000. On sales of $45,000 the commissionable amount ' +
            'is 35,000, so the commission is 35000 × 0.04 = $1400 and the pay is 600 + 1400 = $2000. Only the amount ' +
            'above the threshold attracts commission.',
    },
    {
        id: 'maths-example-currency-conversion',
        subject: 'mathematics',
        question: 'Can you show me a worked example of converting currency with a fee?',
        aliases: ['worked example currency conversion with a fee', 'example of exchanging money', 'conversion fee example'],
        answer:
            'Exchange A$500 at 0.62 US dollars with a 2% fee. The fee is 500 × 0.02 = $10, leaving $490 to convert, ' +
            'and 490 × 0.62 = US$303.80. Take the fee in the currency it is charged in before converting.',
    },
    {
        id: 'maths-example-fuel-consumption',
        subject: 'mathematics',
        question: 'Can you show me a worked example of fuel consumption?',
        aliases: ['worked example fuel consumption', 'example of litres per 100 kilometres', 'fuel cost for a trip example'],
        answer:
            'A car uses 42 litres over 480 km. Consumption is 42 ÷ 480 × 100 = 8.75 litres per 100 km. A 700 km trip ' +
            'then needs 8.75 × 7 = 61.25 litres, which at $1.90 a litre costs about $116.',
    },
    {
        id: 'maths-example-heart-rate-formula',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a target heart rate?',
        aliases: ['worked example target heart rate', 'example of a heart rate formula', 'maximum heart rate calculation example'],
        answer:
            'Maximum heart rate is estimated as 220 minus age, so at 16 it is 220 − 16 = 204 beats per minute. A ' +
            'training zone of 70% to 85% runs from 204 × 0.7 = 143 to 204 × 0.85 = 173 beats per minute.',
    },
    {
        id: 'maths-example-medication-dosage-weight',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a dosage based on body mass?',
        aliases: ['worked example dosage from body mass', 'example of medication per kilogram', 'dose per kg example'],
        answer:
            'A medicine is given at 12 mg per kilogram per day in three doses, to a 25 kg child. The daily amount is 12 ' +
            '× 25 = 300 mg, so each dose is 300 ÷ 3 = 100 mg. Work out the daily total before dividing into doses.',
    },
    {
        id: 'maths-example-body-surface-area',
        subject: 'mathematics',
        question: 'Can you show me a worked example of substituting into an applied formula?',
        aliases: ['worked example substituting into an applied formula', 'example of a formula with a square root', 'applied formula substitution example'],
        answer:
            'A formula gives A as the square root of (h × m ÷ 3600), with height 170 cm and mass 62 kg. The product is ' +
            '170 × 62 = 10,540, and dividing by 3600 gives 2.93. The square root of 2.93 is 1.71, so A is 1.71. Work ' +
            'inside the root first, then take the root once.',
    },
    {
        id: 'maths-example-scale-plan-area',
        subject: 'mathematics',
        question: 'Can you show me a worked example of finding an area from a scale plan?',
        aliases: ['worked example area from a scale plan', 'example of floor area from a plan', 'scale plan area example'],
        answer:
            'A plan at 1:100 shows a room 6 cm by 4.5 cm. Real lengths are 6 m by 4.5 m, so the area is 6 × 4.5 = 27 ' +
            'm². Convert the lengths first, then multiply: converting the area directly would need the scale squared, ' +
            'which is where errors come from.',
    },
    {
        id: 'maths-example-paint-coverage',
        subject: 'mathematics',
        question: 'Can you show me a worked example of working out how much material to buy?',
        aliases: ['worked example how much material to buy', 'example of paint coverage', 'how many tins or bags example'],
        answer:
            'Walls total 58 m² and a tin covers 16 m². Dividing gives 58 ÷ 16 = 3.625 tins, so 4 tins must be bought. ' +
            'Always round up when buying whole units, and add for a second coat if the question mentions one.',
    },
    {
        id: 'maths-example-capacity-of-a-tank',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the capacity of a tank in litres?',
        aliases: ['worked example capacity in litres', 'example of converting cubic metres to litres', 'tank capacity example'],
        answer:
            'A tank is 2 m by 1.5 m by 1.2 m. The volume is 2 × 1.5 × 1.2 = 3.6 m³. Since 1 m³ holds 1000 litres, the ' +
            'capacity is 3600 litres. For a cylinder use the circular area times the height, then convert the same way.',
    },
    {
        id: 'maths-example-trigonometry-elevation',
        subject: 'mathematics',
        question: 'Can you show me a worked example of an angle of elevation?',
        aliases: ['worked example angle of elevation', 'example of finding a height with trigonometry', 'elevation angle example'],
        answer:
            'From 30 m away, a tower has an angle of elevation of 38°. The height is 30 × tan 38° = 30 × 0.781 = 23.4 ' +
            'm. Add the eye height if the question gives one, since the angle is measured from the observer rather ' +
            'than the ground.',
    },
    {
        id: 'maths-example-bearings-return',
        subject: 'mathematics',
        question: 'Can you show me a worked example of a back bearing?',
        aliases: ['worked example back bearing', 'example of the bearing of the return journey', 'reverse bearing example'],
        answer:
            'A ship sails on a bearing of 062°. The return bearing is 062 + 180 = 242°. Where the first bearing is ' +
            'above 180°, subtract instead: a bearing of 215° returns on 215 − 180 = 035°. Keep three figures, as ' +
            'bearings always do.',
    },
    {
        id: 'maths-example-non-right-triangle-area',
        subject: 'mathematics',
        question: 'Can you show me a worked example of the area of a block of land?',
        aliases: ['worked example area of a block of land', 'example of area with two sides and an angle', 'land area from a survey example'],
        answer:
            'A triangular block has sides 40 m and 55 m with 68° between them. The area is half the product times the ' +
            'sine: 40 × 55 = 2200, then 2200 × 0.927 = 2039, and half of that is 1020 m². The angle must sit between ' +
            'the two named sides.',
    },
    {
        id: 'maths-example-simpsons-rule-area',
        subject: 'mathematics',
        question: 'Can you show me a worked example of estimating an irregular area?',
        aliases: ['worked example estimating an irregular area', 'example of an area with offsets', 'irregular block area example'],
        answer:
            'A block has width measurements 8, 14 and 10 m taken at equal spacings of 12 m. Treating it as two ' +
            'trapezia, the first is (8 + 14) ÷ 2 × 12 = 132 m² and the second is (14 + 10) ÷ 2 × 12 = 144 m², giving ' +
            '276 m². More offsets give a closer estimate.',
    },
];
