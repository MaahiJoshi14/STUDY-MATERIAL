const fs = require('fs');

const questionsData = {
  // --- PHYSICS CYCLE ---
  'engineering-physics': [
    { id: 'ep1', topic: 'Quantum Mechanics', year: 'ETE Sem-I 2024-25', marks: 6, frequency: 'most', text: 'Which experiment directly proves the wave nature of electrons?', options: ['Photoelectric Effect', 'Davisson-Germer Experiment', 'Blackbody Radiation', 'Compton Scattering'], correct: 1, explanation: 'The Davisson-Germer Experiment (1927) demonstrated electron diffraction on a Nickel crystal, confirming de Broglie\'s hypothesis.' },
    { id: 'ep2', topic: 'Laser Technology', year: 'MTE 2023-24', marks: 4, frequency: 'moderate', text: 'What condition is necessary for laser action to occur?', options: ['Thermal Equilibrium', 'Population Inversion', 'High Temperature', 'Ground State Dominance'], correct: 1, explanation: 'Population inversion — having more atoms in excited state than ground state — is essential for stimulated emission to dominate.' },
    { id: 'ep3', topic: 'Wave Optics', year: 'ETE 2023-24', marks: 4, frequency: 'can-be', text: 'In Young\'s double slit experiment, fringe width β is proportional to:', options: ['d/λD', 'λD/d', 'λd/D', 'D/λd'], correct: 1, explanation: 'Fringe width β = λD/d, where λ is wavelength, D is screen distance, and d is slit separation.' },
    { id: 'ep4', topic: 'Maxwell Equations', year: 'ETE Sem-I 2024-25', marks: 8, frequency: 'most', text: 'Which Maxwell Equation represents the non-existence of isolated magnetic poles (magnetic monopoles)?', options: ['Gauss Law for Electricity', 'Gauss Law for Magnetism', 'Faradays Law', 'Ampere-Maxwell Law'], correct: 1, explanation: 'Gauss Law for Magnetism states ∇·B = 0, which implies that the total magnetic flux through a closed surface is zero (no monopoles).' }
  ],
  'computational-mathematics': [
    { id: 'cm1', topic: 'Linear Algebra', year: 'ETE Sem-I 2024-25', marks: 6, frequency: 'most', text: 'If A is a 3×3 matrix with eigenvalues 1, 2, and -1, what is Trace(A)?', options: ['2', '3', '6', '-2'], correct: 0, explanation: 'Trace of a matrix is equal to the sum of its eigenvalues: 1 + 2 + (-1) = 2.' },
    { id: 'cm2', topic: 'Numerical Methods', year: 'MTE 2024-25', marks: 4, frequency: 'moderate', text: 'Which iterative method has a quadratic rate of convergence?', options: ['Bisection Method', 'Regula-Falsi Method', 'Newton-Raphson Method', 'Secant Method'], correct: 2, explanation: 'Newton-Raphson has order of convergence = 2 (quadratic), making it the fastest among standard root-finding methods.' },
    { id: 'cm3', topic: 'Differential Equations', year: 'ETE 2023-24', marks: 8, frequency: 'most', text: 'Which of the following is the Integrating Factor (I.F.) for the linear differential equation dy/dx + P(x)y = Q(x)?', options: ['e^(∫ P dx)', 'e^(∫ Q dx)', '∫ P dx', 'e^(-∫ P dx)'], correct: 0, explanation: 'The Integrating Factor is defined as e to the power of the integral of P(x) dx.' }
  ],
  'psuc': [
    { id: 'psuc1', topic: 'Pointers & Memory', year: 'ETE Sem-I 2024-25', marks: 10, frequency: 'most', text: 'What is sizeof(char*) on a 64-bit system?', options: ['1', '4', '8', 'Compiler dependent'], correct: 2, explanation: 'On 64-bit architectures, all pointers occupy 8 bytes of memory regardless of their data type.' },
    { id: 'psuc2', topic: 'Control Flows', year: 'MTE 2024-25', marks: 6, frequency: 'moderate', text: 'Which data structure follows the Last In First Out (LIFO) order?', options: ['Queue', 'Stack', 'Binary Search Tree', 'Singly Linked List'], correct: 1, explanation: 'A stack follows LIFO — elements are pushed and popped from the same end (top).' },
    { id: 'psuc3', topic: 'Variables & Scope', year: 'ETE 2023-24', marks: 4, frequency: 'can-be', text: 'What is the default initial value of a static variable in C?', options: ['Garbage value', '0', '1', 'Null'], correct: 1, explanation: 'Static variables are allocated in the BSS segment and initialized to zero by default.' }
  ],
  'wellness-community-service': [
    { id: 'wcs1', topic: 'Physical Health', year: 'MTE 2024-25', marks: 4, frequency: 'most', text: 'What is considered the normal range of Body Mass Index (BMI) for healthy adults?', options: ['15.0 - 18.4', '18.5 - 24.9', '25.0 - 29.9', 'Over 30.0'], correct: 1, explanation: 'A BMI between 18.5 and 24.9 is considered normal/healthy according to the WHO.' }
  ],
  'environmental-science': [
    { id: 'evs1', topic: 'Ecosystems', year: 'ETE Sem-I 2024-25', marks: 6, frequency: 'most', text: 'Which of the following is a primary producer in an ecosystem?', options: ['Herbivores', 'Carnivores', 'Green plants', 'Decomposers'], correct: 2, explanation: 'Green plants convert solar energy into chemical energy via photosynthesis, serving as primary producers.' }
  ],
  'biology-for-engineers': [
    { id: 'bio1', topic: 'Biomolecules', year: 'ETE 2023-24', marks: 6, frequency: 'most', text: 'Which biomolecule is the primary genetic material in cells?', options: ['RNA', 'DNA', 'Proteins', 'Lipids'], correct: 1, explanation: 'Deoxyribonucleic acid (DNA) stores genetic codes in living organisms.' }
  ],
  'internet-of-things': [
    { id: 'iot1', topic: 'IoT Architecture', year: 'ETE Sem-I 2024-25', marks: 6, frequency: 'most', text: 'Which protocol is lightweight and widely used for IoT message queueing?', options: ['HTTP', 'FTP', 'MQTT', 'SMTP'], correct: 2, explanation: 'MQTT (Message Queuing Telemetry Transport) is a lightweight publish-subscribe protocol designed for resource-constrained devices.' }
  ],
  'engineering-material-mechanics': [
    { id: 'emm1', topic: 'Material Strength', year: 'MTE 2023-24', marks: 6, frequency: 'most', text: 'What does the Hooke\'s Law relate?', options: ['Stress and Strain', 'Force and Velocity', 'Mass and Acceleration', 'Pressure and Volume'], correct: 0, explanation: 'Hooke\'s Law states that stress is directly proportional to strain within the elastic limit.' }
  ],
  'data-visualization': [
    { id: 'dv1', topic: 'Visualizations', year: 'MTE 2024-25', marks: 4, frequency: 'most', text: 'Which chart type is best for showing parts of a whole?', options: ['Bar Chart', 'Line Chart', 'Pie Chart', 'Scatter Plot'], correct: 2, explanation: 'Pie charts represent percentages of a total, showing parts of a whole effectively.' }
  ],
  'fundamentals-data-structures': [
    { id: 'fds1', topic: 'Sorting Algorithms', year: 'ETE Sem-I 2024-25', marks: 8, frequency: 'most', text: 'What is the average time complexity of QuickSort?', options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'], correct: 1, explanation: 'QuickSort runs in O(n log n) average time complexity but can degrade to O(n^2) in the worst case.' }
  ],
  'electrical-technology': [
    { id: 'et1', topic: 'AC Circuits', year: 'ETE 2023-24', marks: 6, frequency: 'most', text: 'The power factor of a purely resistive circuit is:', options: ['0', '0.5', '1', 'Infinite'], correct: 2, explanation: 'In a purely resistive circuit, voltage and current are in phase, so the power factor (cos φ) is 1 (unity).' }
  ],
  'applied-mathematics': [
    { id: 'am1', topic: 'Calculus', year: 'ETE Sem-I 2024-25', marks: 8, frequency: 'most', text: 'What is the limit of sin(x)/x as x approaches 0?', options: ['0', '1', 'Undefined', 'Infinity'], correct: 1, explanation: 'According to L\'Hopital\'s rule or standard trigonometric limits, lim (x->0) sin(x)/x = 1.' }
  ],

  // --- CHEMISTRY CYCLE ONLY (not already covered) ---
  'basic-mechanical-engineering': [
    { id: 'bme1', topic: 'Thermodynamics', year: 'ETE Sem-I 2024-25', marks: 6, frequency: 'most', text: 'Which thermodynamic cycle is the most efficient ideal cycle?', options: ['Otto Cycle', 'Diesel Cycle', 'Rankine Cycle', 'Carnot Cycle'], correct: 3, explanation: 'The Carnot cycle sets the maximum theoretical efficiency limit for heat engines operating between two temperatures.' }
  ],
  'calculus-and-matrices': [
    { id: 'cam1', topic: 'Matrices', year: 'MTE 2023-24', marks: 4, frequency: 'most', text: 'If a matrix A is symmetric, then:', options: ['A = -A', 'A = A^T', 'A is singular', 'A is identity'], correct: 1, explanation: 'A symmetric matrix is equal to its own transpose (A = A^T).' }
  ],
  'universal-human-values': [
    { id: 'uhv1', topic: 'Human Values', year: 'MTE 2024-25', marks: 4, frequency: 'most', text: 'What is the natural acceptance in human relationships?', options: ['Dominance', 'Trust and Respect', 'Mistrust', 'Dependency'], correct: 1, explanation: 'Trust and respect are naturally accepted values in human relationships according to UHV guidelines.' }
  ],
  'technical-writing-clinic': [
    { id: 'tw1', topic: 'Technical Writing', year: 'ETE 2023-24', marks: 6, frequency: 'most', text: 'A technical report should be written in which style?', options: ['Objective and Passive', 'Subjective and Emotional', 'Casual and Conversational', 'Informal and Cryptic'], correct: 0, explanation: 'Technical writing prioritizes clarity, objectivity, and precise passive/third-person delivery.' }
  ],
  'manufracturing-products': [
    { id: 'mp1', topic: 'Workshop Tools', year: 'MTE 2023-24', marks: 6, frequency: 'most', text: 'Which process joins metals by melting a filler metal with a lower melting point?', options: ['Welding', 'Soldering', 'Forging', 'Casting'], correct: 1, explanation: 'Soldering joins metals below 450°C using a filler material like solder.' }
  ],
  'engineering-graphics': [
    { id: 'eg1', topic: 'Projection', year: 'ETE Sem-I 2024-25', marks: 8, frequency: 'most', text: 'In first-angle projection, the front view is placed:', options: ['Above top view', 'Below top view', 'Left of side view', 'Right of side view'], correct: 0, explanation: 'In first-angle projection, the object is placed between observer and plane, so front view is above top view.' }
  ],
  'engineering-chemistry': [
    { id: 'ec1', topic: 'Water Treatment', year: 'MTE 2024-25', marks: 6, frequency: 'most', text: 'Which chemical is commonly used to remove temporary hardness of water?', options: ['Lime', 'Alum', 'Soda Ash', 'Chlorine'], correct: 0, explanation: 'Lime (calcium hydroxide) precipitates temporary hardness as calcium carbonate.' }
  ],
  'electronic-circuits': [
    { id: 'elc1', topic: 'Diodes', year: 'ETE 2023-24', marks: 6, frequency: 'most', text: 'Which region of a transistor must be heavily doped?', options: ['Emitter', 'Base', 'Collector', 'Gate'], correct: 0, explanation: 'The Emitter is heavily doped to inject a large number of charge carriers into the base.' }
  ],
  'electrical-and-electronic-systems': [
    { id: 'ees1', topic: 'AC Fundamentals', year: 'MTE 2024-25', marks: 4, frequency: 'most', text: 'What is the RMS value of a sinusoidal wave with peak voltage Vp?', options: ['Vp / 2', 'Vp / √2', 'Vp * √2', '2 * Vp'], correct: 1, explanation: 'The Root Mean Square (RMS) value of a pure sine wave is Vp / √2 ≈ 0.707 Vp.' }
  ],
  'digital-systems': [
    { id: 'ds1', topic: 'Logic Gates', year: 'ETE Sem-I 2024-25', marks: 6, frequency: 'most', text: 'Simplify: A + A\'B', options: ['A + B', 'A', 'B', 'A\'B'], correct: 0, explanation: 'By absorption law: A + A\'B = A + B.' }
  ],
  'communication-skills': [
    { id: 'cs1', topic: 'Communication', year: 'MTE 2024-25', marks: 4, frequency: 'most', text: 'Which barrier is caused by differences in language or vocabulary?', options: ['Physical Barrier', 'Semantic Barrier', 'Psychological Barrier', 'Organizational Barrier'], correct: 1, explanation: 'Semantic barriers arise due to language differences, symbols, or word interpretations.' }
  ]
};

// Load current studyMaterial.ts content
let content = fs.readFileSync('src/data/studyMaterial.ts', 'utf8');

// Find start of QUESTIONS_DB
const dbIdx = content.indexOf('export const QUESTIONS_DB: Record<string, Question[]>');
if (dbIdx === -1) {
  console.error('Could not find QUESTIONS_DB in studyMaterial.ts');
  process.exit(1);
}

// Generate new QUESTIONS_DB string
const newDbString = `export const QUESTIONS_DB: Record<string, Question[]> = ${JSON.stringify(questionsData, null, 2)};`;

const beforePart = content.substring(0, dbIdx);
const updatedContent = beforePart + newDbString + '\n';

fs.writeFileSync('src/data/studyMaterial.ts', updatedContent, 'utf8');
console.log('Successfully populated QUESTIONS_DB for ALL first-year subjects!');
