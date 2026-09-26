/**
 * Business: operations.
 */
import type { StudyEntry } from '../types';

export const businessOperationsEntries: StudyEntry[] = [
    {
        id: 'bus-operations',
        subject: 'business-studies',
        question: 'What does the operations function involve?',
        aliases: ['operations management', 'quality management', 'supply chain'],
        answer:
            'Operations is the transformation of inputs into outputs, with the four Vs of volume, variety, variation ' +
            'in demand and visibility. Strategies include supply chain management, outsourcing, technology and ' +
            'quality management through control, assurance and improvement.',
    },
    {
        id: 'bus-operations-processes',
        subject: 'business-studies',
        question: 'What are inputs, processes and outputs in operations?',
        aliases: ['inputs processes outputs', 'transformed and transforming resources', 'transformation process'],
        answer:
            'Inputs are the resources: transformed resources such as materials, information and customers, and ' +
            'transforming resources such as staff and facilities. ' +
            'Processes convert them, and outputs are the goods or services delivered, with feedback used to improve the ' +
            'next cycle.',
    },
    {
        id: 'bus-goods-versus-services',
        subject: 'business-studies',
        question: 'How does producing a service differ from producing a good?',
        aliases: ['goods versus services', 'intangible output', 'service cannot be stored'],
        answer:
            'A service is intangible, cannot be stored, and is usually produced with the customer present, so quality ' +
            'depends on the interaction itself. ' +
            'Standardising it is harder, which is why service businesses invest heavily in training and procedures.',
    },
    {
        id: 'bus-operations-strategies',
        subject: 'business-studies',
        question: 'What are the main operations strategies?',
        aliases: ['operations strategies', 'performance objectives', 'new product design', 'supply chain management'],
        answer:
            'Set performance objectives for quality, speed, dependability, flexibility, cost and customisation, then ' +
            'pursue them through product design, supply chain management, technology, inventory systems, quality ' +
            'management, overcoming resistance to change, and global sourcing.',
    },
    {
        id: 'bus-lean-production',
        subject: 'business-studies',
        question: 'What is lean production?',
        aliases: ['lean production', 'eliminating waste'],
        answer:
            'Producing with the least waste of materials, time and effort. ' +
            'Just in time delivery cuts inventory holding, continuous improvement tackles small inefficiencies ' +
            'constantly, and standardised work makes problems visible. ' +
            'It lowers cost but leaves little buffer when supply is disrupted.',
    },
    {
        id: 'bus-outsourcing',
        subject: 'business-studies',
        question: 'Why do businesses outsource?',
        aliases: ['outsourcing', 'contracting out', 'offshoring production', 'focus on core business'],
        answer:
            'To use a specialist provider at lower cost, convert fixed costs into variable ones, and concentrate on ' +
            'what the business does best. ' +
            'The risks are loss of control over quality, dependence on one supplier, and damage to reputation if the ' +
            'provider behaves badly.',
    },
    {
        id: 'bus-technology-in-operations',
        subject: 'business-studies',
        question: 'How is technology used in operations?',
        aliases: ['technology in operations', 'computer aided design', 'robotics in manufacturing', 'automated processes'],
        answer:
            'Design software shortens development, robotics and automation raise consistency and volume, and integrated ' +
            'systems track inventory and orders in real time. ' +
            'The gains are speed and quality; the costs are capital outlay, retraining and vulnerability when systems ' +
            'fail.',
    },
    {
        id: 'bus-capacity-management',
        subject: 'business-studies',
        question: 'How do businesses manage capacity?',
        aliases: ['capacity management', 'bottleneck', 'seasonal demand', 'idle capacity'],
        answer:
            'By matching output ability to demand: casual staffing, extra shifts, subcontracting at peak, and building ' +
            'inventory ahead of a season. ' +
            'Capacity is set by the bottleneck, so widening anything else changes nothing until the bottleneck is ' +
            'addressed.',
    },
    {
        id: 'bus-operations-ethics',
        subject: 'business-studies',
        question: 'What ethical and legal issues arise in operations?',
        aliases: ['ethical sourcing', 'environmental sustainability of operations', 'supplier conditions'],
        answer:
            'Working conditions in the supply chain, environmental impact and waste, product safety, and honest ' +
            'labelling of origin or content. ' +
            'Work health and safety law applies regardless of where the pressure for speed comes from, and a supplier ' +
            'scandal becomes the brand scandal.',
    },
];
