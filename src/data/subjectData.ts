export interface SubjectStat {
    label: string;
    value: string;
}

export interface SubjectTestimonial {
    quote: string;
    name: string;
    result: string;
}

export interface SessionStep {
    duration: string;
    title: string;
    description: string;
}

export interface SubjectData {
    slug: string;
    icon: string;
    title: string;
    shortDescription: string;
    level: string;
    heroTagline: string;
    stats: SubjectStat[];
    overview: string[];
    topicsCovered: string[];
    whatYouLearn: string[];
    examTips: string[];
    whyUs: string[];
    testimonial: SubjectTestimonial;
    sessionStructure: SessionStep[];
    ctaText: string;
}

export const subjects: SubjectData[] = [
    // ─── Row 1 (English + Mathematics) ───
    {
        slug: 'english',
        icon: '📖',
        title: 'English',
        shortDescription: 'From close analysis to persuasive writing, we build the analytical habits that push students from Band 5 to Band 6.',
        level: 'Years 7–12',
        heroTagline: 'We don\'t just teach what a text means, we teach how to analyse it.',
        stats: [
            { label: 'Advanced, Standard & Extension', value: 'All Levels' },
            { label: 'Tailored to Each Student', value: '1-on-1' },
            { label: 'NSW Syllabus Aligned', value: '100%' },
        ],
        overview: [
            'English is the subject where strong analytical habits make the biggest difference. Most students can identify a technique, but very few can construct a precise, sustained argument about how language creates meaning. That\'s the gap we close.',
            'Every session is focused on building real analytical fluency, not just rehearsing quotes. We work through your set texts, practise timed essay writing, and give detailed feedback so your responses improve in the ways the marking guidelines actually reward, to improve from Band 4 descriptions to Band 6 arguments.',
        ],
        topicsCovered: [
            'Close analysis of unseen and set texts',
            'Essay structure and sustained argumentation',
            'Module A: Textual Conversations and comparative analysis',
            'Module B: Critical Study of Literature',
            'Module C: The Craft of Writing',
            'Common Module: Texts and Human Experiences',
            'Persuasive and analytical writing techniques',
            'Multimodal and visual text analysis',
        ],
        whatYouLearn: [
            'How to construct a clear, arguable thesis before you start writing',
            'Analysing language choices instead of just naming techniques',
            'Writing comparative essays that integrate rather than alternate',
            'Responding to unseen texts with confidence under time pressure',
            'Getting the most from your set texts through close rereading',
        ],
        examTips: [
            'Write your thesis before anything else. It is vital you know your argument',
            'Quote selectively and analyse deeply. One strong quote beats three weak ones',
            'Answer the specific question asked. Adapt your prepared material, don\'t just recite it',
            'For Module A: always focus on what the comparison reveals, not just what each text contains',
        ],
        whyUs: [
            'We focus on genuine analytical thinking, not memorisation of responses',
            'Our tutors give detailed written feedback on every practice essay',
            'We tailor sessions to your specific set texts and modules',
            'Students consistently tell us their essays feel sharper and more confident',
        ],
        testimonial: {
            quote: 'My tutor got me to read my own essay back and gently asked \'so what\'s your actual argument here?\' That\'s when I realised I was dumping quotes without a proper argument. Shoreline taught me how to build sustained analysis for Paper 1 unseen texts where you can\'t just fall back on memorised notes.',
            name: 'Priya S.',
            result: 'Band 4 → Band 6 in HSC English Advanced',
        },
        sessionStructure: [
            { duration: '10 min', title: 'Text Discussion', description: 'Explore a key passage or idea from the set text, focusing on how language works' },
            { duration: '25 min', title: 'Essay Writing Practice', description: 'Write a timed paragraph or essay plan using HSC-style questions' },
            { duration: '15 min', title: 'Feedback & Analysis', description: 'Detailed review of the writing, argument strength, evidence use, and language precision' },
            { duration: '10 min', title: 'Wrap-Up & Tasks', description: 'Identify the one thing to work on, and set a targeted writing task for next session' },
        ],
        ctaText: 'Ready to write clear, well-structured English essays that effectively explain your ideas?',
    },
    {
        slug: 'mathematics',
        icon: '📐',
        title: 'Mathematics',
        shortDescription: 'From Year 7 foundations to HSC Extension 1, we build real understanding, not just memorisation.',
        level: 'Years 7–12',
        heroTagline: 'We don\'t just teach formulas, we build the thinking behind them.',
        stats: [
            { label: 'Covers Standard, Advanced & Ext 1', value: 'All Levels' },
            { label: 'Tailored to Each Student', value: '1-on-1' },
            { label: 'NSW Syllabus Aligned', value: '100%' },
        ],
        overview: [
            'Maths is the subject where our tutoring makes the biggest impact. We\'ve helped students go from struggling with basic algebra to confidently tackling Extension 1 problems, and it all starts with understanding, not memorisation.',
            'Every lesson is mapped to the NSW syllabus and tailored to where you\'re at right now. Whether you need to lock in foundations or push for a Band 6, we meet you where you are and build from there. We use past HSC questions heavily so you\'re never surprised on exam day.',
        ],
        topicsCovered: [
            'Algebra and equations: linear, quadratic, and polynomial',
            'Trigonometry and its real-world applications',
            'Calculus: differentiation and integration',
            'Statistics, probability, and data analysis',
            'Financial mathematics',
            'Proof by mathematical induction',
            'Vectors and complex numbers (Extension 1)',
            'Combinatorics and binomial theorem',
        ],
        whatYouLearn: [
            'How to break apart multi-step problems without panicking',
            'Exam technique: maximising marks with clear working',
            'When to use which formula and why it works',
            'Writing rigorous proofs that examiners actually reward',
            'Time management strategies for the HSC exam',
        ],
        examTips: [
            'Always show your working: even partial marks count',
            '"Hence" means use your previous answer; "otherwise" means start fresh',
            'Practise past papers under timed conditions every week',
            'Double-check units and rounding before moving on',
        ],
        whyUs: [
            'We\'ve tutored students across Standard, Advanced, and Extension 1',
            'Our lessons adapt based on what you find difficult, not a fixed schedule',
            'We send detailed notes after every session so nothing gets lost',
            'Students tell us maths is the subject they improve fastest in',
        ],
        testimonial: {
            quote: 'My Shoreline tutor quickly figured out it wasn\'t understanding holding me back, it was poor working out. Once we tightened up how I approach trigonometry equations and calculus optimisation problems, the silly mistakes just stopped.',
            name: 'James L.',
            result: 'Band 4 → Band 6 in HSC Advanced Maths',
        },
        sessionStructure: [
            { duration: '10 min', title: 'Concept Review', description: 'Quick recap of the topic and identify any gaps from last session' },
            { duration: '25 min', title: 'Guided Practice', description: 'Work through problems together with step-by-step explanation' },
            { duration: '20 min', title: 'Exam-Style Questions', description: 'Attempt past HSC questions independently with guidance' },
            { duration: '5 min', title: 'Wrap-Up & Notes', description: 'Summarise key takeaways and set targeted homework' },
        ],
        ctaText: 'Ready to feel confident in maths?',
    },
    // ─── Row 2 (Physics + Chemistry) ───
    {
        slug: 'physics',
        icon: '⚛️',
        title: 'Physics',
        shortDescription: 'Build real understanding of mechanics, waves, and modern physics, then nail the HSC.',
        level: 'Years 11–12',
        heroTagline: 'Physics isn\'t about memorising equations, it\'s about understanding how things work.',
        stats: [
            { label: 'Real HSC Question Practice', value: 'Every Session' },
            { label: 'Tailored to Each Student', value: '1-on-1' },
            { label: 'Session Notes Included', value: 'Always' },
        ],
        overview: [
            'Physics is one of the most rewarding HSC subjects, but it demands both deep understanding and mathematical precision. We help students build genuine intuition for how forces, energy, and fields behave, then translate that into the kind of structured answers that score top marks.',
            'Every session is problem-driven. We work through real HSC questions together, breaking down exactly what examiners want to see. If there\'s a concept that isn\'t clicking, we find a new way to explain it until it does.',
        ],
        topicsCovered: [
            'Kinematics and dynamics: motion and forces',
            'Energy, work, power, and momentum',
            'Waves, sound, and thermodynamics',
            'Electricity, circuits, and magnetism',
            'Electromagnetic spectrum and light behaviour',
            'Modern physics: quantum theory and special relativity',
            'Depth study and practical investigation skills',
        ],
        whatYouLearn: [
            'How to draw and use free-body diagrams properly',
            'Translating word problems into equations step by step',
            'Writing structured qualitative responses (PEEC method)',
            'Connecting abstract theory to real-world situations',
            'Smashing practical exam questions with confidence',
        ],
        examTips: [
            'Define variables and show formula substitution clearly',
            'Use PEEC for qualitative Qs: Point, Evidence, Explain, Conclude',
            'Always sketch a diagram: even if the question doesn\'t ask for one',
            'Revise depth studies thoroughly: t come up',
        ],
        whyUs: [
            'We focus on building intuition, not just drilling equations',
            'Our tutors explain concepts multiple ways until they click',
            'We work through HSC-level questions from day one',
            'Students consistently tell us physics "finally makes sense"',
        ],
        testimonial: {
            quote: 'I\'d read the textbook so many times but terms like Faraday\'s law, Lenz\'s law and induced EMF would never stick. My Shoreline tutor explained what\'s physically happening inside a circuit and suddenly electromagnetism went from impossible to the topic I\'m most confident in.',
            name: 'Anika R.',
            result: 'Went from 65% to 91 in HSC Physics',
        },
        sessionStructure: [
            { duration: '10 min', title: 'Concept Deep-Dive', description: 'Visual explanation of the core physics concept with real-world examples' },
            { duration: '25 min', title: 'Problem Solving', description: 'Work through calculations and diagrams with guided support' },
            { duration: '15 min', title: 'HSC Question Practice', description: 'Tackle past HSC questions, both quantitative and qualitative' },
            { duration: '10 min', title: 'Review & Summary', description: 'Recap key formulas, common traps, and set practice tasks' },
        ],
        ctaText: 'Want physics to finally make sense?',
    },
    // ─── Row 2 (3) ───
    {
        slug: 'chemistry',
        icon: '🧪',
        title: 'Chemistry',
        shortDescription: 'From moles to organic reactions, we make every concept clear, memorable, and exam-ready.',
        level: 'Years 11–12',
        heroTagline: 'We turn confusing reactions into clear, logical steps you can actually remember.',
        stats: [
            { label: 'Modules 1–8 Covered', value: 'Full Syllabus' },
            { label: 'Tailored to Each Student', value: '1-on-1' },
            { label: 'Session Notes Included', value: 'Always' },
        ],
        overview: [
            'Chemistry sits right at the intersection of understanding and calculation. The students who do best aren\'t the ones who memorise the most, they\'re the ones who understand why reactions happen. That\'s exactly what we focus on.',
            'We work through every module systematically, giving extra attention to the areas students find hardest: mole calculations, equilibrium, and organic chemistry. Our sessions always include exam-style practice so you\'re building confidence and technique at the same time.',
        ],
        topicsCovered: [
            'Properties and structure of matter',
            'Quantitative chemistry: moles and stoichiometry',
            'Reactive chemistry and reaction predictions',
            'Equilibrium and acid-base reactions',
            'Organic chemistry and polymer structures',
            'Environmental monitoring and analysis',
            'Practical investigations and first-hand data',
        ],
        whatYouLearn: [
            'Systematic approaches to balancing any equation',
            'Mole calculation shortcuts and common traps to avoid',
            'How to write extended responses that earn full marks',
            'Designing practical investigations like a scientist',
            'Memory techniques for organic reaction pathways',
        ],
        examTips: [
            'Always include state symbols: examiners look for them',
            'Name-drop Le Chatelier\'s principle explicitly in equilibrium questions',
            'Make mole calculations second nature through daily practice',
            'Link every practical to its relevant theory in your answers',
        ],
        whyUs: [
            'We break down the hardest topics until they\'re genuinely simple',
            'Our tutors have deep chemistry knowledge and real exam expertise',
            'We provide structured revision notes you can actually use',
            'Students regularly jump 2+ bands after working with us',
        ],
        testimonial: {
            quote: 'I was completely lost with mole calculations and organic chemistry. Shoreline broke everything down so clearly. I went from struggling to actually enjoying chem.',
            name: 'Sophie T.',
            result: 'Band 3 → Band 5 in HSC Chemistry',
        },
        sessionStructure: [
            { duration: '10 min', title: 'Module Check-In', description: 'Review where we\'re up to in the syllabus and address any questions' },
            { duration: '25 min', title: 'Concept & Calculation', description: 'Master the theory with worked examples and practice calculations' },
            { duration: '15 min', title: 'Exam Practice', description: 'Work through HSC-style short answer and extended response questions' },
            { duration: '10 min', title: 'Notes & Next Steps', description: 'Receive session notes and targeted revision tasks' },
        ],
        ctaText: 'Ready to master chemistry?',
    },
    {
        slug: 'economics',
        icon: '📊',
        title: 'Economics',
        shortDescription: 'Sharpen your economic thinking and write essays that actually earn top marks.',
        level: 'Years 11–12',
        heroTagline: 'Economics is about thinking clearly and writing persuasively, we make sure to teach you both.',
        stats: [
            { label: 'Essay Technique Focus', value: 'Every Session' },
            { label: 'Current Data & Statistics', value: 'Up to Date' },
            { label: 'HSC Marking Criteria Used', value: '100%' },
        ],
        overview: [
            'Economics is unique because it rewards students who can think analytically and write with structure. You can\'t bluff your way through an economics essay; you need to actually understand the concepts, use data, and build balanced arguments.',
            'That\'s what our tutoring focuses on. We build your understanding of macro and micro frameworks, then work intensively on essay technique, because that\'s where most marks are won and lost. Every session uses real HSC questions so you\'re always preparing at the level that counts.',
        ],
        topicsCovered: [
            'Introduction to economics and the market system',
            'Consumer and business behaviour',
            'Labour markets and income distribution',
            'The global economy, trade, and globalisation',
            'Government fiscal and monetary policy',
            'Australia\'s macroeconomic performance',
            'Current economic issues and contemporary case studies',
        ],
        whatYouLearn: [
            'How to structure economics essays that earn full marks',
            'Drawing and interpreting economic diagrams with precision',
            'Evaluating government policies from multiple perspectives',
            'Using current Australian statistics and data in your answers',
            'Timing your exam responses to cover all questions properly',
        ],
        examTips: [
            'Always define key terms in the first sentence of your response',
            'Include diagrams proactively, don\'t wait to be asked',
            'Use recent Australian statistics (GDP, unemployment, CPI)',
            'For "evaluate" questions, present both sides, then give a clear conclusion',
        ],
        whyUs: [
            'We teach essay structure as a specific, learnable skill',
            'Our tutors stay across current economic data and policy changes',
            'We practise with real HSC marking criteria so you know exactly what earns marks',
            'Students often see their biggest essay improvement in economics',
        ],
        testimonial: {
            quote: 'My economics essays went from 12/20 to consistently scoring 18+. Shoreline taught me a framework that works for any question and completely changed my approach.',
            name: 'Daniel K.',
            result: '12/20 → 18/20 average essay marks',
        },
        sessionStructure: [
            { duration: '10 min', title: 'Current Affairs Brief', description: 'Review recent economic news and data to use in essays' },
            { duration: '25 min', title: 'Theory & Diagrams', description: 'Build understanding of economic models with clear explanations' },
            { duration: '20 min', title: 'Essay Practice', description: 'Plan and write essay paragraphs using HSC marking criteria' },
            { duration: '5 min', title: 'Feedback & Focus', description: 'Review essay strengths, identify improvements, and set tasks' },
        ],
        ctaText: 'Want to write economics essays that actually score?',
    },
    {
        slug: 'business-studies',
        icon: '💼',
        title: 'Business Studies',
        shortDescription: 'Think strategically, write with authority, and back everything with real case studies.',
        level: 'Years 11–12',
        heroTagline: 'We teach you to think like a business strategist and write like one too.',
        stats: [
            { label: 'Case Study Driven', value: 'Every Lesson' },
            { label: 'Tailored to Each Student', value: '1-on-1' },
            { label: 'HSC Marking Criteria Used', value: '100%' },
        ],
        overview: [
            'Business Studies is one of those subjects where the students who do best aren\'t just memorising definitions, they\'re applying theory to real companies and making it their own. That\'s the approach we take in every session.',
            'We help you build a library of versatile case studies, develop structured essay technique, and learn to analyse business decisions critically. The result? Answers that sound like they\'re written by someone who actually understands business, not just someone who read the textbook.',
        ],
        topicsCovered: [
            'Nature of business and management structures',
            'Business planning and establishment',
            'Marketing strategy, including digital and social media',
            'Finance and financial management',
            'Operations management and quality systems',
            'Human resources and workforce management',
            'Business case studies and contemporary issues',
        ],
        whatYouLearn: [
            'Building a library of 3–4 case studies you can use for any question',
            'Structured essay and short-answer technique that earns marks',
            'Linking theory to real business decisions with specific examples',
            'Financial ratio analysis and practical interpretation',
            'Critical thinking about business strategies and their outcomes',
        ],
        examTips: [
            'Prepare 3–4 versatile case studies you know inside out',
            'Use precise business terminology, examiners do notice',
            'Don\'t just retell your case study, integrate theory throughout',
            '"Assess" is different from "describe", answer the verb',
        ],
        whyUs: [
            'We help you build case study knowledge that actually works in exams',
            'Our sessions focus on application, not just memorisation',
            'We practise essay technique using real HSC marking criteria',
            'Students tell us business studies "clicked" after working with us',
        ],
        testimonial: {
            quote: 'I never knew how to use case studies properly until Shoreline showed me. My essays went from generic to really specific, my teacher noticed the difference straight away.',
            name: 'Mia W.',
            result: 'Ranked 28th → 6th in her cohort',
        },
        sessionStructure: [
            { duration: '10 min', title: 'Case Study Review', description: 'Build and refine your case study knowledge with real examples' },
            { duration: '25 min', title: 'Theory & Application', description: 'Connect syllabus concepts to real business scenarios' },
            { duration: '20 min', title: 'Essay & Response Practice', description: 'Write structured responses using HSC marking criteria' },
            { duration: '5 min', title: 'Summary & Tasks', description: 'Key takeaways, revision targets, and homework' },
        ],
        ctaText: 'Ready to think like a strategist?',
    },
    {
        slug: 'commerce',
        icon: '🏷️',
        title: 'Commerce',
        shortDescription: 'Build real-world understanding of business, economics, and financial literacy, the foundation for HSC success in Years 11–12.',
        level: 'Years 7–10',
        heroTagline: 'We build the business foundations that make Years 11–12 Business Studies and Economics feel easy.',
        stats: [
            { label: 'Years 7–10 Syllabus Aligned', value: '100%' },
            { label: 'Tailored to Each Student', value: '1-on-1' },
            { label: 'Prepares for HSC Subjects', value: 'Always' },
        ],
        overview: [
            'Commerce in Years 7–10 is where students first develop genuine understanding of how businesses, markets, and economies work. The students who engage deeply with Commerce at this stage consistently find HSC Business Studies and Economics far more accessible, because the core concepts are already familiar.',
            'Our Commerce sessions are mapped to the NSW Stage 4 and Stage 5 syllabus. We focus on building real conceptual understanding alongside the research and communication skills that Commerce assessments reward. Whether a student needs to improve their results or get ahead of the class, we tailor every lesson to where they are.',
        ],
        topicsCovered: [
            'Business structures: sole trader, partnership, private company, public company',
            'Consumer rights and financial decision-making',
            'Work, employment, and career pathways',
            'The economy: markets, supply, demand, and trade',
            'Marketing and promotion in the real world',
            'Financial planning, budgeting, and saving',
            'Rights and responsibilities: legal and ethical considerations',
            'Research skills and structured written responses',
        ],
        whatYouLearn: [
            'How to apply business and economic concepts to real-world examples',
            'Structuring clear, well-supported written responses',
            'Understanding the role of government, businesses, and consumers',
            'Reading and interpreting data: graphs, statistics, and financial information',
            'Building the conceptual fluency that makes senior Commerce subjects much easier',
        ],
        examTips: [
            'Define key terms in your first sentence as Commerce rewards precise language',
            'Always link theory to a real example, even a simple one',
            'For extended responses: plan your structure before you write',
            'Review your syllabus dot points as assessments almost always stick to them',
        ],
        whyUs: [
            'We make abstract concepts concrete with real-world examples students actually find interesting',
            'Our lessons are designed to build understanding, not just prepare for the next test',
            'Students who study Commerce with us are noticeably more confident starting Year 11',
            'We tailor sessions to each student\'s school\'s specific assessment tasks and syllabus focus',
        ],
        testimonial: {
            quote: 'I used to find Commerce really dry and confusing and I didn\'t get why any of it mattered. Shoreline made it relevant and actually interesting. My marks improved a lot and I now understand what I\'m learning.',
            name: 'Ethan B.',
            result: 'Moved from C to A in Year 9 Commerce',
        },
        sessionStructure: [
            { duration: '10 min', title: 'Concept Check', description: 'Review recent class topics and identify any gaps in understanding' },
            { duration: '25 min', title: 'Concept Building', description: 'Explore the key Commerce idea with real-world examples and discussion' },
            { duration: '20 min', title: 'Response Practice', description: 'Apply concepts in structured short-answer and extended writing tasks' },
            { duration: '5 min', title: 'Summary & Tasks', description: 'Review what was covered and set a targeted homework activity' },
        ],
        ctaText: 'Build the foundations for Years 7–10 Commerce subjects.',
    },
    // ─── Row 4 (Test Prep) ───
    {
        slug: 'selective-high-school',
        icon: '🏫',
        title: 'Selective High School Exam',
        shortDescription: 'Targeted preparation for the Selective High School Placement Test. Build skills, not just speed.',
        level: 'Year 6 Entry',
        heroTagline: 'We prepare students for selective with genuine skill-building, not just test drilling.',
        stats: [
            { label: 'Reading, Maths, Thinking & Writing', value: 'All Areas' },
            { label: 'Tailored to Each Student', value: '1-on-1' },
            { label: 'Regular Parent Updates', value: 'Always' },
        ],
        overview: [
            'The Selective High School Placement Test is one of the most competitive exams in NSW. It tests reading, mathematical reasoning, thinking skills, and writing and it requires more than just practice papers. Students need to develop real critical thinking abilities.',
            'Our selective prep program focuses on building the underlying skills: logical reasoning, reading comprehension, and problem-solving. This is so our students can handle any question type, even the ones they haven\'t seen before.',
        ],
        topicsCovered: [
            'Reading comprehension: inference, vocabulary, and deep analysis',
            'Mathematical reasoning: number, algebra, space, and data',
            'Thinking skills: abstract, logical, and spatial reasoning',
            'Writing: persuasive, narrative, and expository styles',
            'Test strategy and time management techniques',
            'Full-length practice tests under real exam conditions',
        ],
        whatYouLearn: [
            'How to approach unfamiliar question types with confidence',
            'Elimination strategies for multiple-choice questions',
            'Time management across different test sections',
            'Advanced reading techniques beyond the standard curriculum',
            'Mathematical problem-solving at above-grade level',
        ],
        examTips: [
            'Don\'t spend too long on one question, flag it and come back',
            'For reading: skim the passage first, then read questions before re-reading',
            'In thinking skills: look for patterns, sequences, and spatial rotations',
            'Do regular timed practice: speed and accuracy matter equally',
        ],
        whyUs: [
            'We focus on genuine skill development, not rote drilling',
            'Our program adapts to each student\'s individual strengths and gaps',
            'We make sessions engaging, students actually enjoy preparing',
            'Parents appreciate our honest, realistic progress feedback',
        ],
        testimonial: {
            quote: 'My daughter was nervous about the test but Shoreline made preparation feel manageable. She got an offer from her first-choice school and actually enjoyed the process.',
            name: 'Parent of Lily M.',
            result: 'Received offer from first-choice selective school',
        },
        sessionStructure: [
            { duration: '10 min', title: 'Warm-Up Challenge', description: 'Quick-fire reasoning puzzles to get thinking sharp' },
            { duration: '25 min', title: 'Skill Building', description: 'Focused practice on reading, maths, or thinking skills' },
            { duration: '15 min', title: 'Timed Practice', description: 'Work through test-style questions under realistic time pressure' },
            { duration: '10 min', title: 'Review & Strategy', description: 'Go over answers, discuss strategies, and set goals' },
        ],
        ctaText: 'Preparing for the Selective test?',
    },
    {
        slug: 'oc-prep',
        icon: '🌟',
        title: 'Opportunity Classes Exam',
        shortDescription: 'Fun, focused preparation for the Opportunity Classes test, building confidence and thinking skills.',
        level: 'Year 4 Entry',
        heroTagline: 'We help young learners build the thinking skills and confidence to succeed.',
        stats: [
            { label: 'Designed for Young Learners', value: 'Age-Appropriate' },
            { label: 'Skill-Building, Not Drilling', value: 'Our Approach' },
            { label: 'Regular Parent Updates', value: 'Always' },
        ],
        overview: [
            'The Opportunity Classes (OC) test assesses Year 4 students in reading, mathematical reasoning, and thinking skills. It\'s a big test for a young child, and our approach is specifically designed for this age group, structured but engaging, challenging but encouraging.',
            'We don\'t believe in overwhelming young students with endless worksheets. Instead, we build genuine reasoning abilities and reading comprehension through varied, interesting activities. When test day comes, your child will feel prepared, confident, and ready. Definitely not stressed and burnt out.',
        ],
        topicsCovered: [
            'Reading comprehension: literal, inferential, and evaluative',
            'Mathematical reasoning: patterns, operations, and problem solving',
            'Thinking skills: verbal, numerical, and abstract reasoning',
            'Vocabulary building and word knowledge',
            'Practice tests with guided review and feedback',
            'Confidence-building strategies for young learners',
        ],
        whatYouLearn: [
            'How to read questions carefully and spot what\'s really being asked',
            'Logical reasoning and pattern recognition strategies',
            'Building speed without sacrificing accuracy',
            'Vocabulary expansion through context and word families',
            'Staying calm and focused during test conditions',
        ],
        examTips: [
            'Read every answer option before choosing, make sure to never rush',
            'For maths: draw diagrams and use scratch paper for working',
            'In thinking skills: look for the "odd one out" or the pattern rule',
            'Get plenty of sleep the night before and eat a good breakfast',
        ],
        whyUs: [
            'Our sessions are designed specifically for younger learners',
            'We keep things engaging because learning should feel like an adventure',
            'We give parents regular, honest feedback on progress',
            'Students leave every session feeling more confident',
        ],
        testimonial: {
            quote: 'Our son actually looks forward to his sessions and that says everything. He got into OC and we really believe Shoreline made the difference.',
            name: 'Parent of Ryan C.',
            result: 'Received OC placement offer',
        },
        sessionStructure: [
            { duration: '5 min', title: 'Fun Warm-Up', description: 'Engaging puzzle or word game to get focused and motivated' },
            { duration: '20 min', title: 'Guided Learning', description: 'Build skills through interactive activities and discussion' },
            { duration: '15 min', title: 'Practice Questions', description: 'Work through age-appropriate test-style questions' },
            { duration: '5 min', title: 'Stars & Goals', description: 'Celebrate progress and set a fun practice goal for the week' },
        ],
        ctaText: 'Getting your child ready for OC?',
    },
    {
        slug: 'naplan',
        icon: '📝',
        title: 'NAPLAN Preparation',
        shortDescription: 'Structured preparation across all four NAPLAN domains: Reading, Writing, Numeracy, and Language Conventions.',
        level: 'Years 3, 5, 7 & 9',
        heroTagline: 'We build the skills behind the scores so your child walks in confident and prepared.',
        stats: [
            { label: 'All Four NAPLAN Domains', value: 'Full Coverage' },
            { label: 'Tailored to Each Student', value: '1-on-1' },
            { label: 'Online Format Preparation', value: 'Included' },
        ],
        overview: [
            'NAPLAN is a national assessment that tests students in Reading, Writing, Numeracy, and Language Conventions at key year levels. While schools cover the curriculum, many students benefit from targeted preparation that strengthens their weak areas and builds exam confidence.',
            'Our NAPLAN program isn\'t about cramming or drilling worksheets. We identify exactly where each student needs support, whether it\'s comprehension strategies, writing structure, or specific numeracy gaps, and work on building genuine skills. Because NAPLAN is now fully online, we also help students practise with the digital format so there are no surprises on test day.',
        ],
        topicsCovered: [
            'Reading: comprehension, inference, vocabulary in context, and text analysis',
            'Writing: narrative and persuasive writing with structure, vocabulary, and grammar',
            'Numeracy: number, measurement, geometry, statistics, and problem-solving',
            'Language Conventions: spelling, grammar, and punctuation',
            'Online test navigation and digital format familiarity',
            'Timed practice under realistic exam conditions',
        ],
        whatYouLearn: [
            'How to decode reading questions and find evidence in the text',
            'Writing techniques that score highly, strong introductions, paragraphing, and descriptive language',
            'Numeracy problem-solving strategies across all question types',
            'Grammar and spelling patterns that frequently appear in NAPLAN',
            'Time management across each test domain',
        ],
        examTips: [
            'For reading: read the questions first, then scan the passage for answers',
            'In writing: spend 3–5 minutes planning before you start, structure matters',
            'For numeracy: show all working and double-check units and operations',
            'Language conventions: read each sentence aloud in your head to catch errors',
        ],
        whyUs: [
            'We cover all four NAPLAN domains with tailored lesson plans',
            'Our tutors understand the marking criteria and what earns top scores',
            'We use age-appropriate methods for each year level: Years 3 and 5 are taught differently to Years 7 and 9',
            'Parents receive clear progress updates after every session',
        ],
        testimonial: {
            quote: 'Our daughter went from being anxious about NAPLAN to feeling really prepared. Her reading and writing scores improved significantly, and she actually felt calm on test day.',
            name: 'Parent of Amelia R.',
            result: 'Moved from Developing to Strong in Reading & Writing',
        },
        sessionStructure: [
            { duration: '10 min', title: 'Check-In & Goals', description: 'Review progress and set focus areas for the session' },
            { duration: '30 min', title: 'Skill Building', description: 'Targeted practice on the student\'s weakest NAPLAN domain' },
            { duration: '15 min', title: 'Timed Practice', description: 'Complete NAPLAN-style questions under realistic conditions' },
            { duration: '5 min', title: 'Review & Homework', description: 'Discuss answers, correct mistakes, and set practice for the week' },
        ],
        ctaText: 'Want your child to feel confident for NAPLAN?',
    },
];

export function getSubjectBySlug(slug: string): SubjectData | undefined {
    return subjects.find((s) => s.slug === slug);
}

