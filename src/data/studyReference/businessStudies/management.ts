/**
 * Business Studies: management, planning and strategy.
 *
 * How decisions are made and organised, and the ethical and risk questions
 * that come with them.
 */
import type { StudyEntry } from '../types';

export const businessManagementEntries: StudyEntry[] = [
    {
        id: 'bus-management-functions',
        subject: 'business-studies',
        question: 'What are the functions of management?',
        aliases: ['functions of management', 'what management involves', 'organising', 'controlling', 'leading a team'],
        answer:
            'Planning what to do, organising resources and people, leading and motivating, and controlling by ' +
            'measuring against the plan and correcting. The four are continuous rather than sequential, since ' +
            'controlling feeds back into planning.',
    },
    {
        id: 'bus-strategic-vs-operational',
        subject: 'business-studies',
        question: 'What is the difference between strategic, tactical and operational planning?',
        aliases: ['tactical planning', 'operational planning'],
        answer:
            'Strategic planning sets the long-term direction, usually three to five years, tactical planning covers ' +
            'one to two years and allocates resources, and operational planning covers day to day activity. Each ' +
            'level must serve the one above it.',
    },
    {
        id: 'bus-decision-making-process',
        subject: 'business-studies',
        question: 'What are the steps in business decision making?',
        aliases: ['decision making process', 'steps in a decision', 'evaluating alternatives'],
        answer:
            'Identify the problem, gather information, generate alternatives, evaluate them against criteria, choose, ' +
            'implement, then review the outcome. Skipping the review is what turns a poor decision into a repeated ' +
            'one.',
    },
    {
        id: 'bus-management-hierarchy',
        subject: 'business-studies',
        question: 'What are the levels of management?',
        aliases: ['middle management', 'flat and tall structures'],
        answer:
            'Senior management sets direction, middle management translates it into plans, and frontline supervisors ' +
            'run daily operations. Flattening the hierarchy speeds communication and cuts cost but widens each ' +
            'manager span of control.',
    },
    {
        id: 'bus-organisational-structures',
        subject: 'business-studies',
        question: 'What are the main organisational structures?',
        aliases: ['organisational structure', 'functional structure', 'divisional structure', 'matrix structure'],
        answer:
            'Functional groups by specialisation, divisional by product or region, and matrix crosses the two so ' +
            'staff report to both a function and a project. Matrix structures suit complex work but create competing ' +
            'demands.',
    },
    {
        id: 'bus-leadership-styles',
        subject: 'business-studies',
        question: 'How do leadership styles differ from management styles?',
        aliases: ['leadership styles', 'transformational leadership', 'transactional leadership'],
        answer:
            'Management styles describe how authority is exercised; leadership styles describe how people are ' +
            'influenced. Transactional leadership trades reward for performance, while transformational leadership ' +
            'changes what people want to achieve.',
    },
    {
        id: 'bus-communication-in-business',
        subject: 'business-studies',
        question: 'Why does communication fail in a business?',
        aliases: ['business communication', 'communication barriers', 'upward and downward communication'],
        answer:
            'Too many layers, jargon, no feedback channel, and messages that travel down but not up. The most common ' +
            'failure is announcing a decision rather than consulting before it, which guarantees resistance ' +
            'afterwards.',
    },
    {
        id: 'bus-innovation',
        subject: 'business-studies',
        question: 'Why do established businesses struggle to innovate?',
        aliases: ['innovation in business', 'disruption', 'why incumbents fail to change'],
        answer:
            'Their systems, staff and customers are built around the existing product, so the new one looks smaller ' +
            'and less profitable at first. By the time it is clearly better, a newer entrant has the lead.',
    },
    {
        id: 'bus-risk-management-process',
        subject: 'business-studies',
        question: 'How do businesses manage risk?',
        aliases: ['risk management process', 'identifying business risk', 'transferring risk'],
        answer:
            'Identify risks, assess likelihood and impact, then avoid, reduce, transfer through insurance or ' +
            'contract, or accept them knowingly. A register that is written once and never reviewed manages nothing.',
    },
    {
        id: 'bus-ethical-decision-framework',
        subject: 'business-studies',
        question: 'How do I work through an ethical business dilemma?',
        aliases: ['ethical dilemma in business', 'weighing stakeholder interests', 'ethical framework'],
        answer:
            'Identify who is affected and how, what the law requires, what the business has promised, and which ' +
            'option could be defended publicly. Naming the cost of the ethical choice is what makes the answer ' +
            'credible.',
    },
    {
        id: 'bus-triple-bottom-line',
        subject: 'business-studies',
        question: 'What is the triple bottom line?',
        aliases: ['triple bottom line', 'people planet profit', 'reporting beyond profit'],
        answer:
            'Reporting financial, social and environmental performance together, on the argument that a business ' +
            'depends on all three. The difficulty is measurement: social and environmental results resist a single ' +
            'comparable number.',
    },
    {
        id: 'bus-sustainability-in-business',
        subject: 'business-studies',
        question: 'Why do businesses pursue environmental sustainability?',
        aliases: ['business sustainability', 'reducing emissions in business', 'green credentials'],
        answer:
            'Regulation and carbon costs, energy savings, customer and investor expectations, staff recruitment, and ' +
            'supply security as resources become scarcer. Reputation is the fastest moving of these and the hardest ' +
            'to repair.',
    },
    {
        id: 'bus-franchise-vs-independent',
        subject: 'business-studies',
        question: 'Should a new business buy a franchise or start independently?',
        aliases: ['franchise or independent business', 'buying an existing business', 'starting from scratch'],
        answer:
            'A franchise brings a proven system, brand and training at the cost of fees and autonomy. An existing ' +
            'business brings customers and records but may carry hidden problems. Starting from scratch gives full ' +
            'control and the highest risk.',
    },
    {
        id: 'bus-business-name-and-registration',
        subject: 'business-studies',
        question: 'What does a new business have to register?',
        aliases: ['registering a business', 'abn', 'business name registration', 'gst registration'],
        answer:
            'An Australian Business Number, a business name if it differs from the owner name, GST registration once ' +
            'turnover reaches the threshold, and any licence the industry requires. A company must also be registered ' +
            'with ASIC.',
    },
    {
        id: 'bus-exit-strategies',
        subject: 'business-studies',
        question: 'How do owners exit a business?',
        aliases: ['exit strategy', 'selling a business', 'succession planning'],
        answer:
            'Sale, passing it to family, a management buyout, listing it publicly, or winding it up. Planning the ' +
            'exit years ahead raises the price, because a business that depends on the owner being there is worth ' +
            'less.',
    },
];
