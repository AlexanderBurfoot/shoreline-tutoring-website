/**
 * Business Studies: employing and managing people.
 *
 * Planning a workforce, paying and motivating it, and the law that frames the
 * employment relationship.
 */
import type { StudyEntry } from '../types';

export const businessPeopleEntries: StudyEntry[] = [
    {
        id: 'bus-hr-planning',
        subject: 'business-studies',
        question: 'What is human resource planning?',
        aliases: ['human resource planning', 'workforce planning', 'forecasting staffing needs'],
        answer:
            'Forecasting what skills and how many staff the business will need, comparing that with the current ' +
            'workforce, then closing the gap through recruitment, training or redeployment. It is what prevents ' +
            'crisis hiring at the worst price.',
    },
    {
        id: 'bus-induction',
        subject: 'business-studies',
        question: 'Why does induction matter?',
        aliases: ['induction', 'onboarding a new employee', 'first week of a job'],
        answer:
            'A new employee decides early whether they will stay, and a poor start costs the whole recruitment ' +
            'expense again. Induction covers safety, systems, expectations and introductions, which shortens the time ' +
            'to being productive.',
    },
    {
        id: 'bus-remuneration-methods',
        subject: 'business-studies',
        question: 'What are the ways of paying employees?',
        aliases: ['remuneration methods', 'wage versus salary', 'commission and bonus', 'performance pay', 'remuneration', 'how employees are paid'],
        answer:
            'Hourly wages, annual salary, piece rates, commission, bonuses, profit sharing and share schemes, plus ' +
            'non-financial benefits. Each rewards something different, so the method shapes behaviour as much as the ' +
            'amount does.',
    },
    {
        id: 'bus-non-financial-rewards',
        subject: 'business-studies',
        question: 'What keeps people working hard once pay is fair?',
        aliases: ['non financial rewards', 'recognition at work', 'autonomy and purpose'],
        answer:
            'Recognition, autonomy, interesting work, development, flexibility, job security and a sense of purpose. ' +
            'Pay must be fair to stop being a problem, but once it is, these do more to sustain effort.',
    },
    {
        id: 'bus-workplace-flexibility',
        subject: 'business-studies',
        question: 'What are flexible working arrangements?',
        aliases: ['flexible working', 'working from home', 'job sharing', 'flexible hours'],
        answer:
            'Flexible hours, remote or hybrid work, job sharing, part-time arrangements and purchased leave. They ' +
            'widen the pool of available workers and aid retention, and they require managing by output rather than ' +
            'by presence.',
    },
    {
        id: 'bus-training-versus-development',
        subject: 'business-studies',
        question: 'What is the difference between training and development?',
        aliases: ['training versus development', 'skills for the current job', 'preparing for future roles'],
        answer:
            'Training builds the skills for the current role and is measurable in the short term. Development ' +
            'prepares people for future roles and is a longer investment, which is why it is the first thing cut and ' +
            'the most costly to lose.',
    },
    {
        id: 'bus-employee-turnover',
        subject: 'business-studies',
        question: 'Why does staff turnover matter?',
        aliases: ['staff turnover', 'cost of replacing an employee', 'retention of employees'],
        answer:
            'Replacing someone costs recruitment, induction and lost productivity, and takes knowledge out of the ' +
            'business. Some turnover is healthy, but a rate well above the industry norm usually points to management ' +
            'rather than pay.',
    },
    {
        id: 'bus-industrial-action-types',
        subject: 'business-studies',
        question: 'What forms can industrial action take?',
        aliases: ['industrial action', 'strike', 'work to rule', 'lockout'],
        answer:
            'From employees: strikes, work to rule, overtime bans and pickets. From employers: lockouts and ' +
            'stand-downs. Protected action requires a proper ballot and notice, and action outside those rules ' +
            'exposes both sides to penalty.',
    },
    {
        id: 'bus-work-health-safety-benefits',
        subject: 'business-studies',
        question: 'What does a business gain from good safety practice?',
        aliases: ['benefits of workplace safety', 'cost of an injury', 'safety culture'],
        answer:
            'Fewer injuries means lower workers compensation premiums, less lost time, better retention and no ' +
            'prosecution. The direct cost of an injury is usually smaller than the disruption, investigation and ' +
            'replacement that follow it.',
    },
    {
        id: 'bus-employment-law-basics',
        subject: 'business-studies',
        question: 'What are the key sources of Australian employment law?',
        aliases: ['employment law sources', 'fair work act', 'national employment standards', 'modern award'],
        answer:
            'The Fair Work Act, the National Employment Standards that cannot be undercut, modern awards, enterprise ' +
            'agreements, and anti-discrimination and work health and safety legislation. A contract cannot remove a ' +
            'standard.',
    },
    {
        id: 'bus-global-employment-issues',
        subject: 'business-studies',
        question: 'What employment issues does global operation create?',
        aliases: ['global employment issues', 'labour standards overseas', 'outsourced labour conditions'],
        answer:
            'Differing minimum standards, working hours and union rights; the reputational exposure of a supplier ' +
            'using child or forced labour; and the difficulty of auditing conditions at a distance. The expectation ' +
            'now is responsibility for the whole chain.',
    },
];
