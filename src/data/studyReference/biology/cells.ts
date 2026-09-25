/**
 * Biology Module 1: Cells as the Basis of Life.
 *
 * Cell structure, transport across membranes, enzymes and cellular energy.
 */
import type { StudyEntry } from '../types';

export const biologyCellsEntries: StudyEntry[] = [
    {
        id: 'bio-enzymes',
        subject: 'biology',
        question: 'How do enzymes work?',
        aliases: ['enzymes', 'active site', 'denature', 'substrate', 'optimum temperature'],
        answer:
            'An enzyme is a protein catalyst whose active site fits a specific substrate, lowering the activation ' +
            'energy. Rate rises with temperature until the shape breaks down and the enzyme denatures. ' +
            'Each enzyme has an optimum temperature and pH.',
    },
    {
        id: 'bio-photosynthesis-respiration',
        subject: 'biology',
        question: 'What are photosynthesis and respiration?',
        aliases: ['photosynthesis', 'respiration', 'aerobic respiration', 'glucose equation'],
        answer:
            'Photosynthesis: 6CO₂ + 6H₂O + light energy makes C₆H₁₂O₆ + 6O₂, in chloroplasts. ' +
            'Aerobic respiration reverses it in mitochondria, releasing energy as ATP. ' +
            'Anaerobic respiration releases far less energy and produces lactic acid or ethanol.',
    },
    {
        id: 'bio-cell-structure',
        subject: 'biology',
        question: 'What do the parts of a cell do?',
        aliases: ['cell organelles', 'mitochondria', 'ribosome', 'prokaryote eukaryote', 'cell membrane'],
        answer:
            'The nucleus holds DNA, mitochondria release energy as ATP, ribosomes build proteins, and the membrane ' +
            'controls what enters and leaves. Plant cells add a cell wall, chloroplasts and a large vacuole. ' +
            'Prokaryotes, such as bacteria, have no nucleus or membrane-bound organelles.',
    },
    {
        id: 'bio-transport-membrane',
        subject: 'biology',
        question: 'How do substances move in and out of cells?',
        aliases: ['diffusion', 'active transport', 'facilitated diffusion', 'concentration gradient'],
        answer:
            'Diffusion moves particles down a concentration gradient, and osmosis is that for water across a ' +
            'partially permeable membrane. Facilitated diffusion uses a protein channel but no energy. ' +
            'Active transport moves substances against the gradient and costs ATP.',
    },
    {
        id: 'bio-cell-theory',
        subject: 'biology',
        question: 'What is cell theory?',
        aliases: ['cell theory', 'all living things are made of cells', 'schleiden schwann', 'microscopy history'],
        answer:
            'All living things are made of one or more cells, the cell is the basic unit of structure and function, ' +
            'and all cells come from pre-existing cells. ' +
            'Improved microscopes drove each step, which is why the theory arrived only after lenses were good enough.',
    },
    {
        id: 'bio-microscopy',
        subject: 'biology',
        question: 'How do light and electron microscopes differ?',
        aliases: ['light microscope', 'electron microscope', 'magnification', 'resolution', 'tem sem'],
        answer:
            'A light microscope magnifies to about 1500 times and can view living material. ' +
            'Electron microscopes reach far higher resolution but need dead, prepared specimens: transmission for ' +
            'internal detail, scanning for surface images. ' +
            'Total magnification is the eyepiece times the objective.',
    },
    {
        id: 'bio-prokaryote-eukaryote',
        subject: 'biology',
        question: 'What is the difference between prokaryotic and eukaryotic cells?',
        aliases: ['prokaryote', 'eukaryote', 'bacteria cell', 'membrane bound organelles', 'nucleoid'],
        answer:
            'Prokaryotes have no nucleus and no membrane-bound organelles; their DNA sits free as a loop, often with ' +
            'plasmids, and they are small. ' +
            'Eukaryotes keep DNA in a nucleus and use compartments such as mitochondria and the endoplasmic ' +
            'reticulum, which lets them specialise.',
    },
    {
        id: 'bio-plant-animal-cells',
        subject: 'biology',
        question: 'How do plant and animal cells differ?',
        aliases: ['plant vs animal cell', 'cell wall', 'chloroplast', 'vacuole', 'turgor'],
        answer:
            'Plant cells add a cellulose cell wall, chloroplasts for photosynthesis, and a large central vacuole. ' +
            'Water entering that vacuole presses the membrane against the wall, making the cell turgid, which is how ' +
            'non-woody plants stay upright. Animal cells have none of the three.',
    },
    {
        id: 'bio-surface-area-volume',
        subject: 'biology',
        question: 'Why does surface area to volume ratio limit cell size?',
        aliases: ['surface area to volume ratio', 'why cells are small', 'diffusion distance cell', 'sa:v'],
        answer:
            'Volume grows faster than surface area, so a large cell has proportionally less membrane to supply it and ' +
            'a longer distance for materials to diffuse. ' +
            'Beyond a certain size exchange cannot keep up, which is why cells stay small and divide instead of ' +
            'simply growing.',
    },
    {
        id: 'bio-osmosis-detail',
        subject: 'biology',
        question: 'How does osmosis affect cells?',
        aliases: ['osmosis', 'hypertonic', 'hypotonic', 'isotonic', 'plasmolysis', 'lysis'],
        answer:
            'Water moves across a partially permeable membrane towards the more concentrated solution. ' +
            'In a hypotonic solution an animal cell swells and may burst, while a plant cell becomes turgid. ' +
            'In a hypertonic one an animal cell shrivels and a plant cell plasmolyses as the membrane pulls from the ' +
            'wall.',
    },
    {
        id: 'bio-enzyme-factors',
        subject: 'biology',
        question: 'What affects the rate of an enzyme reaction?',
        aliases: ['enzyme rate', 'enzyme temperature', 'enzyme ph', 'substrate concentration', 'denaturation'],
        answer:
            'Rate rises with temperature until the enzyme denatures and the active site loses its shape, so the graph ' +
            'peaks then falls sharply. ' +
            'Each enzyme has an optimum pH for the same reason. ' +
            'Rate rises with substrate concentration until every active site is occupied, then levels off.',
    },
    {
        id: 'bio-enzyme-models',
        subject: 'biology',
        question: 'What are the lock and key and induced fit models?',
        aliases: ['lock and key', 'induced fit', 'enzyme specificity', 'active site shape', 'inhibitor'],
        answer:
            'Lock and key says the substrate fits an active site of matching shape. ' +
            'Induced fit refines it: the active site moulds slightly around the substrate as it binds, which explains ' +
            'why enzymes can act on closely related substrates. ' +
            'A competitive inhibitor blocks the site; a non-competitive one changes its shape from elsewhere.',
    },
    {
        id: 'bio-atp',
        subject: 'biology',
        question: 'What is ATP and why does it matter?',
        aliases: ['atp', 'adenosine triphosphate', 'energy currency', 'adp', 'atp cycle'],
        answer:
            'ATP is the cell\u2019s energy currency. Breaking the bond to its third phosphate releases usable energy ' +
            'and leaves ADP, which respiration then recharges. ' +
            'Cells hold only a small amount at a time, so it is recycled constantly rather than stored.',
    },
    {
        id: 'bio-anaerobic-respiration',
        subject: 'biology',
        question: 'What is anaerobic respiration?',
        aliases: ['anaerobic respiration', 'lactic acid', 'fermentation biology', 'oxygen debt', 'yeast'],
        answer:
            'Respiration without oxygen. In animals glucose becomes lactic acid, which builds up during hard ' +
            'exercise; in yeast and plants it becomes ethanol and carbon dioxide. ' +
            'It releases far less energy per glucose than aerobic respiration, since the molecule is not fully broken ' +
            'down.',
    },
    {
        id: 'bio-photosynthesis-factors',
        subject: 'biology',
        question: 'What limits the rate of photosynthesis?',
        aliases: ['limiting factor photosynthesis', 'light intensity', 'carbon dioxide concentration', 'chlorophyll', 'photosynthesis rate'],
        answer:
            'Light intensity, carbon dioxide concentration and temperature. ' +
            'Rate rises with each until another becomes limiting, which is why the graph plateaus. ' +
            'Temperature differs: too high and the enzymes denature, so the rate falls rather than levelling off.',
    },
    {
        id: 'bio-cell-specialisation',
        subject: 'biology',
        question: 'How do cells become specialised?',
        aliases: ['specialised cells', 'differentiation', 'stem cells', 'cell types', 'gene expression cells'],
        answer:
            'Every cell carries the same DNA but expresses different genes, which gives it a different shape and set ' +
            'of proteins. ' +
            'Stem cells are unspecialised and can become other types: embryonic ones can become almost anything, ' +
            'adult ones only a limited range.',
    },
    {
        id: 'bio-organelles-detail',
        subject: 'biology',
        question: 'What do the endoplasmic reticulum and Golgi do?',
        aliases: ['endoplasmic reticulum', 'golgi', 'lysosome', 'vesicle', 'protein processing'],
        answer:
            'Rough endoplasmic reticulum carries ribosomes and folds newly made proteins; smooth ER makes lipids. ' +
            'The Golgi modifies, packages and labels those products into vesicles for delivery. ' +
            'Lysosomes hold digestive enzymes that break down waste and worn-out organelles.',
    },
    {
        id: 'bio-cell-membrane-structure',
        subject: 'biology',
        question: 'What is the fluid mosaic model?',
        aliases: ['fluid mosaic', 'phospholipid bilayer', 'membrane proteins', 'selectively permeable', 'cholesterol membrane'],
        answer:
            'The membrane is a double layer of phospholipids with water-attracting heads out and water-repelling ' +
            'tails in, studded with proteins that can drift within it. ' +
            'Small non-polar molecules pass straight through; ions and large polar molecules need protein channels ' +
            'or pumps, which is what makes it selectively permeable.',
    },
    {
        id: 'bio-endocytosis',
        subject: 'biology',
        question: 'What are endocytosis and exocytosis?',
        aliases: ['endocytosis', 'exocytosis', 'phagocytosis', 'bulk transport', 'vesicle transport'],
        answer:
            'Endocytosis engulfs material by folding the membrane inwards to form a vesicle, which is how phagocytes ' +
            'take in pathogens. ' +
            'Exocytosis is the reverse, fusing a vesicle with the membrane to release its contents. ' +
            'Both move large quantities and both cost energy.',
    },
    {
        id: 'bio-mitosis-stages',
        subject: 'biology',
        question: 'What happens at each stage of mitosis?',
        aliases: ['mitosis stages', 'prophase', 'metaphase', 'anaphase', 'telophase', 'cell cycle'],
        answer:
            'Prophase: chromosomes condense and the nuclear membrane breaks down. ' +
            'Metaphase: they line up at the equator. ' +
            'Anaphase: sister chromatids are pulled apart. ' +
            'Telophase and cytokinesis: nuclei re-form and the cell splits. ' +
            'Interphase before it is when DNA is copied and the cell grows.',
    },
];
