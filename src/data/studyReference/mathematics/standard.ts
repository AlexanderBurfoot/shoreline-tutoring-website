/**
 * Mathematics Standard, Years 11 and 12.
 *
 * The topics Standard carries that Advanced does not: networks, scale and
 * measurement in context, and the financial and statistical work that makes up
 * most of the course.
 */
import type { StudyEntry } from '../types';

export const mathematicsStandardEntries: StudyEntry[] = [
    {
        id: 'maths-std-networks',
        subject: 'mathematics',
        question: 'What is a network diagram?',
        aliases: ['network diagram', 'vertices edges', 'graph theory', 'connected graph', 'degree of a vertex'],
        answer:
            'A network is vertices joined by edges, used for maps, schedules and flows. ' +
            'The degree of a vertex is how many edges meet it. ' +
            'A path visits edges without repeating a vertex; a connected network has a route between every pair.',
    },
    {
        id: 'maths-std-minimum-spanning-tree',
        subject: 'mathematics',
        question: 'What is a minimum spanning tree?',
        aliases: ['minimum spanning tree', 'prims algorithm', 'kruskals algorithm', 'shortest network'],
        answer:
            'A tree that connects every vertex with no cycles, at the lowest total weight. ' +
            'Prim’s algorithm grows outward from a vertex, always adding the cheapest edge to a new vertex. ' +
            'Kruskal’s adds the cheapest edge anywhere, skipping any that would form a cycle.',
    },
    {
        id: 'maths-std-critical-path',
        subject: 'mathematics',
        question: 'How does critical path analysis work?',
        aliases: ['critical path', 'float time', 'earliest start time', 'project scheduling', 'forward backward scanning'],
        answer:
            'Forward scanning gives the earliest start times, backward scanning the latest. ' +
            'Float is the difference, so an activity with zero float sits on the critical path and cannot be delayed ' +
            'without delaying the project. The critical path is the longest path through the network.',
    },
    {
        id: 'maths-std-flow-networks',
        subject: 'mathematics',
        question: 'How do I find the maximum flow in a network?',
        aliases: ['maximum flow', 'minimum cut', 'flow capacity', 'network flow'],
        answer:
            'The maximum flow equals the minimum cut: the smallest total capacity of edges that, if removed, would ' +
            'separate the source from the sink. Check a cut by making sure every path crosses it exactly once.',
    },
    {
        id: 'maths-std-scale-plans',
        subject: 'mathematics',
        question: 'How do I work with scale drawings and plans?',
        aliases: ['scale drawing', 'floor plan', 'scale factor length', 'site plan', 'elevation view'],
        answer:
            'A scale of 1:100 means one unit on the plan is a hundred in reality. ' +
            'Convert on the drawing first, then apply the scale. ' +
            'For areas, the scale factor squares, so a 1:100 plan represents areas ten thousand times larger.',
    },
    {
        id: 'maths-std-trapezoidal-area',
        subject: 'mathematics',
        question: 'How do I estimate an irregular area?',
        aliases: ['trapezoidal rule area', 'irregular block', 'offset survey', 'estimating area'],
        answer:
            'Use the trapezoidal rule: A ≈ (h/2)(first + last + 2 × each middle measurement), where h is the spacing. ' +
            'More strips give a better estimate. It is the usual method for a block of land measured by offsets from ' +
            'a straight line.',
    },
    {
        id: 'maths-std-depreciation',
        subject: 'mathematics',
        question: 'How do I calculate depreciation?',
        aliases: ['depreciation', 'straight line depreciation', 'declining balance', 'salvage value', 'book value'],
        answer:
            'Straight line: S = V₀ − Dn, losing the same amount each year. ' +
            'Declining balance: S = V₀(1 − r)ⁿ, losing a percentage of what is left. ' +
            'Declining balance drops faster early, which usually matches how an asset really loses value.',
    },
    {
        id: 'maths-std-taxation',
        subject: 'mathematics',
        question: 'How does income tax work?',
        aliases: ['income tax', 'tax brackets', 'medicare levy', 'taxable income', 'paye'],
        answer:
            'Tax is charged in brackets: each slice of income is taxed at its own rate, not all of it at the top rate. ' +
            'Taxable income is gross income less allowable deductions, and the Medicare levy is added on top. ' +
            'Net pay is what remains after tax and other deductions.',
    },
    {
        id: 'maths-std-normal-applications',
        subject: 'mathematics',
        question: 'How do I use the normal distribution in context?',
        aliases: ['z score standard', 'normal distribution application', 'comparing scores', 'standardised test score'],
        answer:
            'Convert a value to a z-score with z = (x − μ)/σ, then use the 68, 95 and 99.7 per cent rule or a table. ' +
            'Z-scores also compare results from different tests, since they put both on the same scale of standard ' +
            'deviations from the mean.',
    },
    {
        id: 'maths-std-data-displays',
        subject: 'mathematics',
        question: 'Which data display should I use?',
        aliases: ['histogram', 'dot plot', 'stem and leaf', 'pareto chart', 'data display'],
        answer:
            'Dot plots and stem-and-leaf keep the individual values and suit small sets. ' +
            'Histograms group continuous data into classes. Box plots compare spread across groups. ' +
            'Describe shape as symmetric, skewed or bimodal, then centre and spread.',
    },
    {
        id: 'maths-std-simple-interest',
        subject: 'mathematics',
        question: 'What is simple interest?',
        aliases: ['simple interest', 'i = prn', 'flat rate interest', 'simple vs compound'],
        answer:
            'I = Prn, where r is the rate per period as a decimal and n the number of periods. ' +
            'The interest is the same every period, so the balance grows in a straight line, while compound interest ' +
            'curves upward because it earns interest on interest.',
    },
    {
        id: 'maths-std-shares',
        subject: 'mathematics',
        question: 'How do shares and dividends work?',
        aliases: ['shares', 'dividend', 'dividend yield', 'price to earnings ratio', 'share price'],
        answer:
            'A dividend is the payment per share. ' +
            'Dividend yield = dividend per share ÷ market price × 100, which lets you compare shares at different ' +
            'prices. The price-to-earnings ratio is market price ÷ earnings per share.',
    },
    {
        id: 'maths-std-credit-cards',
        subject: 'mathematics',
        question: 'How is credit card interest calculated?',
        aliases: ['credit card', 'interest free period', 'daily interest rate', 'minimum payment', 'credit card statement'],
        answer:
            'Daily rate = annual rate ÷ 365, charged on the balance for each day it is owed. ' +
            'An interest-free period applies only if the full balance is paid by the due date; otherwise interest ' +
            'usually runs from the purchase date. Paying the minimum keeps the debt alive for years.',
    },
    {
        id: 'maths-std-wages',
        subject: 'mathematics',
        question: 'How do I calculate wages, overtime and leave loading?',
        aliases: ['wages', 'overtime', 'time and a half', 'leave loading', 'commission', 'piecework', 'gross and net pay'],
        answer:
            'Overtime is usually time-and-a-half or double time on the normal hourly rate. ' +
            'Annual leave loading is an extra 17.5% of normal pay for the leave period. ' +
            'Commission is a percentage of sales and piecework pays per item. ' +
            'Gross pay is before deductions; net pay is what lands in the account.',
    },
    {
        id: 'maths-std-budget-bills',
        subject: 'mathematics',
        question: 'How do I read a household bill or build a budget?',
        aliases: ['household bill', 'electricity bill', 'supply charge', 'budget', 'fixed and variable costs', 'gst'],
        answer:
            'A utility bill is usage × tariff, plus a fixed daily supply charge, plus GST. ' +
            'GST is 10% added, so it is one eleventh of a GST-inclusive price and the pre-GST amount is the total ' +
            'divided by 1.1. A budget balances income against fixed and variable expenses.',
    },
    {
        id: 'maths-std-time-zones',
        subject: 'mathematics',
        question: 'How do I work out time differences between places?',
        aliases: ['time zones', 'utc', 'local time', 'international date line', 'daylight saving', 'flight arrival time'],
        answer:
            'Each time zone is an offset from UTC, and 15° of longitude is one hour. ' +
            'Add the offset going east and subtract going west, then adjust for daylight saving and for crossing the ' +
            'international date line, which changes the date by a day.',
    },
    {
        id: 'maths-std-blood-alcohol',
        subject: 'mathematics',
        question: 'How is blood alcohol content calculated?',
        aliases: ['blood alcohol content', 'bac', 'standard drinks', 'time to zero bac'],
        answer:
            'BAC formulas use the number of standard drinks N, hours of drinking H, and body mass M, with different ' +
            'constants for males and females, as given in the question. ' +
            'BAC falls by about 0.015 per hour, so time to zero is BAC ÷ 0.015.',
    },
    {
        id: 'maths-std-medication-fuel',
        subject: 'mathematics',
        question: 'How do I calculate medication dosage and fuel consumption?',
        aliases: ['medication dosage', 'dosage formula', 'fuel consumption', 'litres per 100 km', 'stopping distance'],
        answer:
            'Dosage rules scale an adult dose by age or mass, as the question states. ' +
            'Fuel consumption is litres per 100 km, so fuel used = consumption × distance ÷ 100. ' +
            'Stopping distance is reaction distance plus braking distance, and braking distance grows with the ' +
            'square of the speed.',
    },
    {
        id: 'maths-std-limits-accuracy',
        subject: 'mathematics',
        question: 'What are limits of accuracy and percentage error?',
        aliases: ['limits of accuracy', 'percentage error', 'measurement error', 'upper and lower bound'],
        answer:
            'A measurement is accurate to plus or minus half the smallest unit on the instrument, giving upper and ' +
            'lower bounds. ' +
            'Absolute error is that half unit, and percentage error is absolute error ÷ measurement × 100.',
    },
    {
        id: 'maths-std-network-walks',
        subject: 'mathematics',
        question: 'What are walks, paths and circuits in a network?',
        aliases: ['eulerian', 'hamiltonian', 'walk path circuit', 'degree of vertex', 'adjacency matrix', 'traversable'],
        answer:
            'A walk moves along edges; a path repeats no vertex; a circuit returns to its start. ' +
            'A network has an Eulerian circuit, using every edge once, when every vertex has even degree, and an ' +
            'Eulerian trail when exactly two are odd. A Hamiltonian path visits every vertex once instead.',
    },
    {
        id: 'maths-std-shortest-path',
        subject: 'mathematics',
        question: 'How do I find the shortest path through a network?',
        aliases: ['shortest path', 'least cost route', 'dijkstra', 'shortest route network'],
        answer:
            'Label each vertex with the smallest total weight to reach it, working outward from the start and ' +
            'updating a label whenever a cheaper route appears. ' +
            'The answer is the final label at the destination. It is a different question from the minimum spanning ' +
            'tree, which connects every vertex instead.',
    },
    {
        id: 'maths-std-break-even',
        subject: 'mathematics',
        question: 'How does break-even analysis work?',
        aliases: ['break even', 'cost and revenue', 'profit equation', 'break even point', 'simultaneous model'],
        answer:
            'Cost is usually fixed cost plus variable cost per unit; revenue is price per unit times units. ' +
            'The break-even point is where the two lines meet, so solve them simultaneously. ' +
            'Profit is revenue minus cost, negative to the left of that point.',
    },
    {
        id: 'maths-std-variation',
        subject: 'mathematics',
        question: 'What are direct and inverse variation?',
        aliases: ['direct variation', 'inverse variation', 'proportional', 'y = kx', 'constant of proportionality'],
        answer:
            'Direct variation is y = kx, a straight line through the origin: double x and y doubles. ' +
            'Inverse variation is y = k/x, a hyperbola: double x and y halves. ' +
            'Find k by substituting one known pair, then use it for the rest.',
    },
    {
        id: 'maths-std-sampling-methods',
        subject: 'mathematics',
        question: 'What are the sampling methods?',
        aliases: ['sampling methods', 'random sample', 'stratified sample', 'systematic sample', 'bias', 'self selected'],
        answer:
            'Random gives everyone an equal chance; systematic takes every nth item; stratified samples each subgroup ' +
            'in proportion; self-selected relies on volunteers and is the most prone to bias. ' +
            'A biased sample does not represent the population, however large it is.',
    },
    {
        id: 'maths-std-capture-recapture',
        subject: 'mathematics',
        question: 'How does capture-recapture estimate a population?',
        aliases: ['capture recapture', 'estimating a population', 'tagged animals'],
        answer:
            'Population ≈ (first catch × second catch) ÷ number recaptured with tags. ' +
            'It assumes the tagged animals mix back through the population, none are born, die or move, and tagging ' +
            'does not change their chance of being caught.',
    },
    {
        id: 'maths-std-cumulative-frequency',
        subject: 'mathematics',
        question: 'How do I use a cumulative frequency graph?',
        aliases: ['cumulative frequency', 'ogive', 'median from a graph', 'cumulative frequency polygon'],
        answer:
            'Plot running totals against the upper end of each class and join the points. ' +
            'Read the median at half the total frequency, and the quartiles at a quarter and three quarters. ' +
            'A percentile is the value below which that percentage of the data falls.',
    },
    {
        id: 'maths-std-surface-area',
        subject: 'mathematics',
        question: 'What are the surface area formulas?',
        aliases: ['surface area formulas', 'surface area of a cylinder', 'surface area of a cone', 'composite solid', 'slant height'],
        answer:
            'Cylinder 2πr² + 2πrh, cone πr² + πrl with l the slant height, sphere 4πr². ' +
            'For a composite solid, add the exposed faces only and leave out any surface where two solids join.',
    },
    {
        id: 'maths-std-lat-long',
        subject: 'mathematics',
        question: 'How do I calculate distances using latitude and longitude?',
        aliases: ['latitude longitude', 'nautical mile', 'great circle distance', 'angular distance'],
        answer:
            'One minute of arc along a great circle is one nautical mile, so the distance between two points on the ' +
            'same meridian is the difference in latitude in minutes. ' +
            'Longitude also gives time: 15° is one hour.',
    },
    {
        id: 'maths-std-unit-conversion',
        subject: 'mathematics',
        question: 'How do I convert between metric units reliably?',
        aliases: ['converting metric units', 'unit conversion method', 'squared and cubed unit conversion'],
        answer:
            'Multiply going to smaller units and divide going to larger ones. For areas the factor is squared and for ' +
            'volumes cubed, so 1 m² is 10,000 cm², not 100.',
    },
    {
        id: 'maths-std-rates',
        subject: 'mathematics',
        question: 'How do I convert a rate into different units?',
        aliases: ['working with rates', 'rate per unit', 'converting a rate'],
        answer:
            'A rate compares two quantities with different units, so keep the units in the working. To convert, ' +
            'multiply by a fraction equal to one: 72 km/h times 1000 m per km divided by 3600 s per hour gives 20 ' +
            'm/s.',
    },
    {
        id: 'maths-std-percentage-increase-decrease',
        subject: 'mathematics',
        question: 'How do I find the original amount after a percentage change?',
        aliases: ['reverse percentage', 'original price before discount', 'working backwards from a percentage'],
        answer:
            'Divide rather than multiply. If a price after a 20% discount is $64, that is 80% of the original, so the ' +
            'original is 64 ÷ 0.8 = $80. Subtracting 20% of $64 gives the wrong answer.',
    },
    {
        id: 'maths-std-gst',
        subject: 'mathematics',
        question: 'How do I calculate GST?',
        aliases: ['gst calculation', 'adding ten per cent', 'removing gst from a total'],
        answer:
            'To add GST, multiply by 1.1. To find the GST inside a total, divide by 11. To find the pre-GST price, ' +
            'divide by 1.1. Subtracting 10% from the total is a common and costly error.',
    },
    {
        id: 'maths-std-budget-planning',
        subject: 'mathematics',
        question: 'How do I plan a budget that balances?',
        aliases: ['balancing a budget', 'fixed and variable expenses', 'surplus and deficit household'],
        answer:
            'List income after tax, then separate fixed expenses such as rent from variable ones such as food. Income ' +
            'minus expenses is the surplus, and a deficit means either income must rise or a variable expense must ' +
            'fall.',
    },
    {
        id: 'maths-std-loan-repayments',
        subject: 'mathematics',
        question: 'How do I work with a loan repayment table?',
        aliases: ['loan repayment table', 'reducing balance loan', 'interest and principal portions'],
        answer:
            'Each repayment covers the interest on the current balance first, and the remainder reduces the ' +
            'principal. Interest for the period is the balance times the monthly rate, so the interest portion falls ' +
            'as the balance does.',
    },
    {
        id: 'maths-std-future-value',
        subject: 'mathematics',
        question: 'What is the difference between future value and present value?',
        aliases: ['future value', 'present value', 'annuity value'],
        answer:
            'Future value is what a series of payments grows to; present value is the single amount now that is ' +
            'equivalent to them. Both use the same interest rate, and a table or formula converts between them.',
    },
    {
        id: 'maths-std-inflation-effect',
        subject: 'mathematics',
        question: 'How does inflation affect a calculation?',
        aliases: ['inflation effect on money', 'adjusting for inflation over years', 'real value of savings'],
        answer:
            'Prices rise compound, so an amount today is multiplied by (1 + rate)ⁿ to give the equivalent later ' +
            'amount. Savings earning less than inflation lose real value even though the balance grows.',
    },
    {
        id: 'maths-std-choosing-a-graph',
        subject: 'mathematics',
        question: 'Which graph suits which kind of data?',
        aliases: ['choosing a graph type', 'when to use a histogram', 'box plot or column graph'],
        answer:
            'Column graphs and Pareto charts for categories, histograms and box plots for continuous data, line ' +
            'graphs for change over time, scatterplots for two numeric variables, and a divided bar or sector graph ' +
            'for parts of a whole.',
    },
    {
        id: 'maths-std-percentiles',
        subject: 'mathematics',
        question: 'What does a percentile mean?',
        aliases: ['quartile as a percentile', 'what percentile am i in', 'percentile'],
        answer:
            'The value below which that percentage of the data falls, so the 80th percentile has 80% of results ' +
            'beneath it. The median is the 50th percentile and the quartiles are the 25th and 75th, which is how a ' +
            'rank is reported without giving the raw mark.',
    },
    {
        id: 'maths-std-histogram-vs-bar',
        subject: 'mathematics',
        question: 'What is the difference between a histogram and a bar graph?',
        aliases: ['histogram versus bar graph', 'continuous data display', 'no gaps in a histogram'],
        answer:
            'A histogram shows continuous data in intervals, so the columns touch and the horizontal axis is a number ' +
            'line. A bar graph shows separate categories, so the bars have gaps and could be reordered without losing ' +
            'meaning.',
    },
    {
        id: 'maths-std-interpreting-error',
        subject: 'mathematics',
        question: 'What does limit of accuracy mean in practice?',
        aliases: ['limit of accuracy', 'plus or minus half a unit', 'absolute error'],
        answer:
            'A measurement to the nearest unit could be up to half a unit either way, so 34 cm to the nearest ' +
            'centimetre means between 33.5 and 34.5. That range then carries into any calculation using it.',
    },
    {
        id: 'maths-std-similar-figures-application',
        subject: 'mathematics',
        question: 'How do I use similar triangles to find a height I cannot measure?',
        aliases: ['finding a height with similar triangles', 'shadow method', 'indirect measurement'],
        answer:
            'Set up two similar triangles, usually using shadows or a mirror, then equate the ratios of matching ' +
            'sides. The unknown height is the only value left, so one multiplication finishes it.',
    },
    {
        id: 'maths-std-non-right-angle-choice',
        subject: 'mathematics',
        question: 'Which rule do I use in a triangle without a right angle?',
        aliases: ['non right angled triangle', 'sine or cosine rule choice', 'area of a triangle with sine'],
        answer:
            'Use the cosine rule when you have three sides, or two sides and the angle between them. Use the sine ' +
            'rule when you have a side and its opposite angle. For the area with two sides and the included angle, ' +
            'use ½ab sin C.',
    },
    {
        id: 'maths-std-ambiguous-case',
        subject: 'mathematics',
        question: 'What is the ambiguous case of the sine rule?',
        aliases: ['ambiguous case', 'two possible angles', 'obtuse alternative in the sine rule'],
        answer:
            'When finding an angle with the sine rule, both an acute and an obtuse angle share the same sine, so ' +
            'check whether the obtuse option still leaves a valid triangle with an angle sum under 180 degrees.',
    },
];
