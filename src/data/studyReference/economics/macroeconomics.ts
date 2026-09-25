/**
 * Economics: aggregate demand and supply, policy and distribution.
 *
 * The components of demand, the limits of each policy tool, inequality and
 * sustainability.
 */
import type { StudyEntry } from '../types';

export const economicsMacroEntries: StudyEntry[] = [
    {
        id: 'econ-aggregate-demand',
        subject: 'economics',
        question: 'What makes up aggregate demand?',
        aliases: ['aggregate demand', 'components of demand', 'c plus i plus g plus x minus m'],
        answer:
            'Consumption, investment, government spending and net exports. Consumption is the largest and most ' +
            'stable, investment the most volatile, which is why swings in investment drive much of the cycle.',
    },
    {
        id: 'econ-aggregate-supply',
        subject: 'economics',
        question: 'What determines aggregate supply?',
        aliases: ['aggregate supply', 'productive capacity', 'supply side of the economy'],
        answer:
            'The quantity and quality of resources, technology, productivity, and the cost of inputs. It sets the ' +
            'ceiling on what demand can buy without inflation, which is why supply-side reform matters for sustained ' +
            'growth.',
    },
    {
        id: 'econ-output-gap',
        subject: 'economics',
        question: 'What is an output gap?',
        aliases: ['output gap', 'spare capacity', 'operating above capacity'],
        answer:
            'The difference between actual output and what the economy could produce at full employment. A negative ' +
            'gap means spare capacity and unemployment; a positive gap means the economy is straining and inflation ' +
            'accelerates.',
    },
    {
        id: 'econ-leakages-injections',
        subject: 'economics',
        question: 'What are leakages and injections?',
        aliases: ['leakages and injections', 'savings taxation imports', 'investment government exports'],
        answer:
            'Leakages are savings, taxation and imports, which remove spending from the circular flow. Injections are ' +
            'investment, government spending and exports. When they are equal the economy is in equilibrium; when ' +
            'injections exceed leakages it expands.',
    },
    {
        id: 'econ-consumption-function',
        subject: 'economics',
        question: 'What determines how much households spend?',
        aliases: ['determinants of consumption', 'household spending', 'disposable income and spending'],
        answer:
            'Disposable income above all, then wealth, interest rates, expectations and confidence. The marginal ' +
            'propensity to consume is the fraction of an extra dollar that is spent, and it drives the size of the ' +
            'multiplier.',
    },
    {
        id: 'econ-investment-determinants',
        subject: 'economics',
        question: 'What drives business investment?',
        aliases: ['determinants of investment', 'business expectations', 'cost of capital'],
        answer:
            'Expected returns, the cost of borrowing, business confidence, capacity utilisation and tax treatment. ' +
            'Because it depends on expectations about the future, investment is the most volatile component of ' +
            'demand.',
    },
    {
        id: 'econ-government-budget-components',
        subject: 'economics',
        question: 'What is in the federal budget?',
        aliases: ['federal budget components', 'government revenue sources', 'main areas of government spending'],
        answer:
            'Revenue comes mostly from personal income tax, company tax and the GST. The largest spending areas are ' +
            'social security, health, education and defence, with interest on debt growing when deficits persist.',
    },
    {
        id: 'econ-fiscal-stance',
        subject: 'economics',
        question: 'What does the stance of fiscal policy mean?',
        aliases: ['fiscal stance', 'expansionary or contractionary budget', 'discretionary change'],
        answer:
            'Whether the budget is adding to or subtracting from demand, judged by the change in the structural ' +
            'balance rather than by whether it is in deficit. A shrinking deficit is contractionary even while the ' +
            'budget remains in deficit.',
    },
    {
        id: 'econ-monetary-policy-limits',
        subject: 'economics',
        question: 'What are the limits of monetary policy?',
        aliases: ['limits of monetary policy', 'blunt instrument', 'monetary policy affects everyone'],
        answer:
            'It is a blunt instrument: one rate applies to the whole economy, so it cannot target a region or ' +
            'industry. It works with long lags, it is weak when confidence is low, and it has little room when rates ' +
            'are already near zero.',
    },
    {
        id: 'econ-quantitative-easing',
        subject: 'economics',
        question: 'What is quantitative easing?',
        aliases: ['quantitative easing', 'central bank buying bonds'],
        answer:
            'A central bank buying government bonds and other assets to push longer-term interest rates down and add ' +
            'liquidity once the cash rate is already near zero. It supports asset prices, which raises questions ' +
            'about its distributional effects.',
    },
    {
        id: 'econ-exchange-rate-policy',
        subject: 'economics',
        question: 'Can the exchange rate be used as a policy tool?',
        aliases: ['exchange rate policy', 'intervention in the currency market', 'dirty float'],
        answer:
            'In a floating system it adjusts on its own and acts as an automatic stabiliser. A central bank can ' +
            'intervene to smooth disorderly movements, but sustained attempts to hold a rate against market pressure ' +
            'are expensive and usually fail.',
    },
    {
        id: 'econ-external-stability',
        subject: 'economics',
        question: 'What does external stability mean?',
        aliases: ['external stability', 'sustainable current account', 'foreign debt sustainability'],
        answer:
            'An external position that can be sustained without a crisis: a current account deficit that is financed ' +
            'on reasonable terms, foreign liabilities that grow no faster than the capacity to service them, and a ' +
            'stable exchange rate.',
    },
    {
        id: 'econ-distribution-of-income',
        subject: 'economics',
        question: 'What causes inequality in income and wealth?',
        aliases: ['causes of inequality', 'wealth inequality'],
        answer:
            'Differences in skills, education, employment, hours, capital ownership and inheritance, amplified by ' +
            'asset price growth. Wealth is distributed far more unequally than income, and housing is the largest ' +
            'single component in Australia.',
    },
    {
        id: 'econ-redistribution-policies',
        subject: 'economics',
        question: 'How do governments redistribute income?',
        aliases: ['redistribution', 'progressive tax and transfers', 'social wage'],
        answer:
            'Progressive income tax, means-tested transfer payments, and the social wage of services such as health ' +
            'and education provided free or cheaply. Transfers and services do more of the work than the tax scale ' +
            'alone.',
    },
    {
        id: 'econ-equity-versus-efficiency',
        subject: 'economics',
        question: 'Why do equity and efficiency conflict?',
        aliases: ['equity versus efficiency', 'trade off in policy', 'incentives and redistribution'],
        answer:
            'Redistribution requires taxes and transfers that can weaken incentives to work, save and invest, while ' +
            'leaving markets alone concentrates gains. Policy chooses a point on that trade-off rather than escaping ' +
            'it, though some measures improve both.',
    },
    {
        id: 'econ-intergenerational-issues',
        subject: 'economics',
        question: 'What economic problems does an ageing population create?',
        aliases: ['ageing population', 'intergenerational report', 'dependency ratio'],
        answer:
            'A rising dependency ratio means fewer workers supporting more retirees, so tax revenue grows slowly ' +
            'while health, aged care and pension spending rise. Responses include superannuation, participation ' +
            'policy, skilled migration and productivity growth.',
    },
    {
        id: 'econ-sustainability-tradeoffs',
        subject: 'economics',
        question: 'How does economic growth conflict with sustainability?',
        aliases: ['growth versus environment', 'sustainable growth trade off', 'intergenerational equity environment'],
        answer:
            'Growth measured as output can deplete resources and raise emissions, imposing costs on future ' +
            'generations that GDP does not record. Ecologically sustainable development means meeting present needs ' +
            'without removing that capacity.',
    },
    {
        id: 'econ-climate-policy-economics',
        subject: 'economics',
        question: 'How do economists approach climate change?',
        aliases: ['economics of climate change', 'carbon price versus subsidy', 'cost of abatement'],
        answer:
            'As the largest negative externality, best addressed by pricing emissions so the cost appears in ' +
            'decisions, supplemented by regulation and support for new technology. Delay raises the eventual cost, ' +
            'which is the central finding of the major reviews.',
    },
    {
        id: 'econ-policy-evaluation',
        subject: 'economics',
        question: 'How do I evaluate an economic policy in an answer?',
        aliases: ['evaluating a policy', 'assessing effectiveness of policy', 'policy evaluation structure'],
        answer:
            'State the objective, explain the mechanism, give evidence of the outcome, then name the limitation or ' +
            'side effect and the trade-off accepted. An answer that only describes the policy has not evaluated it.',
    },
    {
        id: 'econ-using-statistics-in-answers',
        subject: 'economics',
        question: 'How should I use statistics in an economics answer?',
        aliases: ['using statistics in economics', 'quoting data in an essay', 'trends rather than single figures'],
        answer:
            'Quote a figure and a direction with a period attached, then explain what it shows. Two or three ' +
            'well-used statistics beat a paragraph of numbers, and a trend over time is more useful than a single ' +
            'value.',
    },
];
