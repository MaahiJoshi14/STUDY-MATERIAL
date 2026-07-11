const fs = require('fs');
const path = require('path');

const BASE = 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech';

// Helper to build URL
function url(cycle, subject, folder, filename) {
  return `${BASE}/${cycle}/${subject}/${folder}/${encodeURIComponent(filename)}`;
}

function pdf(title, cycle, subject, folder, filename) {
  const ext = filename.split('.').pop().toLowerCase();
  const type = ext === 'pdf' ? 'pdf' : (ext === 'pptx' || ext === 'ppt') ? 'pdf' : 'pdf';
  return `{ title: '${title.replace(/'/g, "\\'")}', url: '${url(cycle, subject, folder, filename)}', type: '${type}' }`;
}

// ── PHYSICS CYCLE SUBJECTS ──────────────────────────────────────────────────

const physicsSubjects = [
  {
    id: 'engineering-physics',
    name: 'Engineering Physics',
    shortName: 'Eng. Physics',
    emoji: '⚛️',
    code: 'PH-101',
    description: 'Classical mechanics, optics, wave phenomena, and quantum fundamentals.',
    studyMaterials: [],
    pyqs: [],
  },
  {
    id: 'computational-mathematics',
    name: 'Computational Mathematics',
    shortName: 'Comp. Math',
    emoji: '📐',
    code: 'MA-101',
    description: 'Calculus, matrices, and differential equation modeling.',
    studyMaterials: [
      ['1. QUESTION BANK_MODULE-01_SOLUTION.pdf', '1. QUESTION BANK_MODULE-01_SOLUTION'],
      ['2. MAS1002_Course Handout (12.09.2024).pdf', '2. MAS1002_Course Handout (12.09.2024)'],
      ['2. QUESTION BANK_MODULE-02_SOLUTION.pdf', '2. QUESTION BANK_MODULE-02_SOLUTION'],
      ['3. Question Bank_Solution_Module_3.pdf', '3. Question Bank_Solution_Module_3'],
      ['CM_ Module-6_Notes&Solved_PYQs.pdf', 'CM_ Module-6_Notes&Solved_PYQs'],
      ['Module 1 (updated).pdf', 'Module 1 (updated)'],
      ['Module 2 (updated).pdf', 'Module 2 (updated)'],
      ['Module 3 (updated).pdf', 'Module 3 (updated)'],
      ['Module 4 (updated).pdf', 'Module 4 (updated)'],
      ['Module 5 (updated).pdf', 'Module 5 (updated)'],
      ['Module 6 (updated).pdf', 'Module 6 (updated)'],
    ],
    pyqs: [
      ['CM_ETE_Sem-I_2024-25.pdf', 'CM_ETE_Sem-I_2024-25'],
      ['CM_ETE_Sem-I_2025-26_QuestionsWithSolution.pdf', 'CM_ETE_Sem-I_2025-26 (Questions With Solution)'],
      ['CM_MTE_Re-sess_Sem-II_2025-26.pdf', 'CM_MTE_Re-sess_Sem-II_2025-26'],
      ['CM_MTE_Re-sess_Sem-I_2025-26.pdf', 'CM_MTE_Re-sess_Sem-I_2025-26'],
      ['CM_MTE_Sem-II_2025-26.pdf', 'CM_MTE_Sem-II_2025-26'],
      ['CM_MTE_Sem-I_2024-25.pdf', 'CM_MTE_Sem-I_2024-25'],
      ['CM_MTE_Sem-I_2025-26.pdf', 'CM_MTE_Sem-I_2025-26'],
      ['MA1002 ETE 2023-24 Sem-1 .pdf', 'MA1002 ETE 2023-24 Sem-1'],
      ['MA1002 ETE 2023-24 Sem-2 .pdf', 'MA1002 ETE 2023-24 Sem-2'],
      ['MAS1002 Solution ETE Set 3 (May 2025).pdf', 'MAS1002 Solution ETE Set 3 (May 2025)'],
      ['MTE QP_MA1002_Sem-2_2023-2024.pdf', 'MTE QP_MA1002_Sem-2_2023-2024'],
      ['Solution MTE MAS1002 sem 1 2025.pdf', 'Solution MTE MAS1002 sem 1 2025'],
      ['Solution-MAS1002-Dec 2024.pdf', 'Solution-MAS1002-Dec 2024'],
    ],
  },
  {
    id: 'psuc',
    name: 'PSUC',
    shortName: 'PSUC',
    emoji: '💻',
    code: 'CS-101',
    description: 'C programming, logic building, and basic algorithm design.',
    studyMaterials: [],
    pyqs: [],
  },
  {
    id: 'wellness-community-service',
    name: 'Wellness & Community Service',
    shortName: 'WCS',
    emoji: '🌿',
    code: 'HS-101',
    description: 'Physical wellness, community engagement, and holistic development.',
    studyMaterials: [],
    pyqs: [],
  },
  {
    id: 'environmental-science',
    name: 'Environmental Science',
    shortName: 'EVS',
    emoji: '🌍',
    code: 'ES-101',
    description: 'Environmental science, ecology, and sustainability principles.',
    studyMaterials: [],
    pyqs: [],
  },
  {
    id: 'biology-for-engineers',
    name: 'Biology for Engineers',
    shortName: 'Bio. for Eng.',
    emoji: '🧬',
    code: 'BS-101',
    description: 'Biochemistry, genetics, and biomedical fundamentals.',
    studyMaterials: [],
    pyqs: [],
  },
  {
    id: 'internet-of-things',
    name: 'Internet of Things',
    shortName: 'IoT',
    emoji: '📡',
    code: 'CS-102',
    description: 'IoT architecture, sensors, embedded systems, and data visualization.',
    studyMaterials: [],
    pyqs: [],
  },
  {
    id: 'engineering-material-mechanics',
    name: 'Engineering Material & Mechanics',
    shortName: 'Eng. Materials',
    emoji: '⚙️',
    code: 'ME-101',
    description: 'Properties of materials, stress, strain, and thermodynamics basics.',
    studyMaterials: [],
    pyqs: [],
  },
  {
    id: 'data-visualization',
    name: 'Data Visualization',
    shortName: 'Data Viz',
    emoji: '📊',
    code: 'CS-103',
    description: 'Charts, data storytelling, and visual analytics tools.',
    studyMaterials: [],
    pyqs: [],
  },
  {
    id: 'fundamentals-data-structures',
    name: 'Fundamentals of Data Structures',
    shortName: 'Data Structures',
    emoji: '🗃️',
    code: 'CS-104',
    description: 'Arrays, linked lists, stacks, queues, trees, and graphs.',
    studyMaterials: [],
    pyqs: [],
  },
  {
    id: 'electrical-technology',
    name: 'Electrical Technology',
    shortName: 'Elec. Tech',
    emoji: '⚡',
    code: 'EE-101',
    description: 'Circuits, electromagnetism, and power systems fundamentals.',
    studyMaterials: [],
    pyqs: [],
  },
  {
    id: 'applied-mathematics',
    name: 'Applied Mathematics',
    shortName: 'App. Maths',
    emoji: '🔢',
    code: 'MA-102',
    description: 'Calculus, sequences, series, and analytical geometry.',
    studyMaterials: [],
    pyqs: [],
  },
];

// ── CHEMISTRY CYCLE SUBJECTS ────────────────────────────────────────────────

const chemistrySubjects = [
  {
    id: 'applied-mathematics',
    name: 'Applied Mathematics',
    shortName: 'App. Maths',
    emoji: '🔢',
    code: 'MA-103',
    description: 'Integral calculus, differential equations, and matrix algebra.',
    studyMaterials: [
      ['Applied Mathematics Unit 1.pdf', 'Applied Mathematics Unit 1'],
      ['Applied Mathematics Unit 2.pdf', 'Applied Mathematics Unit 2'],
      ['Applied Mathematics Unit 3.pdf', 'Applied Mathematics Unit 3'],
      ['Applied Mathematics Unit 4.pdf', 'Applied Mathematics Unit 4'],
      ['BMA1002 - Course Handout 2024-25.pdf', 'BMA1002 - Course Handout 2024-25'],
      ['Course Handout BMA1002.pdf', 'Course Handout BMA1002'],
      ['Handwritten Notes - Differential Calculus (Unit 1 & 2).pdf', 'Handwritten Notes - Differential Calculus (Unit 1 & 2)'],
      ['Handwritten Notes - Integral Calculus (Unit 3 & 4).pdf', 'Handwritten Notes - Integral Calculus (Unit 3 & 4)'],
      ['Handwritten Notes - Linear Algebra.pdf', 'Handwritten Notes - Linear Algebra'],
      ['Hints and Solutions Question Bank Module 1.pdf', 'Hints and Solutions Question Bank Module 1'],
      ['Hints and Solutions Question Bank Module 2.pdf', 'Hints and Solutions Question Bank Module 2'],
      ['Hints and Solutions Question Bank Module 3.pdf', 'Hints and Solutions Question Bank Module 3'],
      ['Hints and Solutions Question Bank Module 4.pdf', 'Hints and Solutions Question Bank Module 4'],
      ['Handwritten Notes - Differential Equations (Unit 5 & 6).pdf', 'Handwritten Notes - Differential Equations (Unit 5 & 6)'],
    ],
    pyqs: [
      ['AM-1_ETE_MakeupFEB2025.pdf', 'AM-1_ETE_MakeupFEB2025'],
      ['AM-1_ETE_Sem-I_2024-25.pdf', 'AM-1_ETE_Sem-I_2024-25'],
      ['AM-1_MTE_Sem-I_2024-25.pdf', 'AM-1_MTE_Sem-I_2024-25'],
      ['BMA1002-ETE-Sem-II-2025-26.pdf', 'BMA1002-ETE-Sem-II-2025-26'],
      ['BMA1002-MTE-Sem-II-2025-26.pdf', 'BMA1002-MTE-Sem-II-2025-26'],
      ['MA1001 2023-24 ETE Sem-1 .pdf', 'MA1001 2023-24 ETE Sem-1'],
      ['MA1001 2023-24 ETE Sem-2 .pdf', 'MA1001 2023-24 ETE Sem-2'],
      ['MA1001 2023-24 MTE Sem-1 .pdf', 'MA1001 2023-24 MTE Sem-1'],
      ['MA1001 2023-24 MTE Sem-2 .pdf', 'MA1001 2023-24 MTE Sem-2'],
      ['Solution BMA1002 Dec 2024.pdf', 'Solution BMA1002 Dec 2024'],
      ['Solution BMA1002 May 2025.pdf', 'Solution BMA1002 May 2025'],
      ['Solution MA1001 ETE 2024-25.pdf', 'Solution MA1001 ETE 2024-25'],
      ['Solution MA1001 MTE Dec 2024.pdf', 'Solution MA1001 MTE Dec 2024'],
      ['Solution MA1001 MTE May 2025.pdf', 'Solution MA1001 MTE May 2025'],
    ],
  },
  {
    id: 'basic-mechanical-engineering',
    name: 'Basic Mechanical Engineering',
    shortName: 'Basic Mech.',
    emoji: '🔩',
    code: 'ME-102',
    description: 'Mechanics, thermodynamics, and machine drawing basics.',
    studyMaterials: [
      ['2nd Law  Of Thermodymc.pptx', '2nd Law Of Thermodynamics'],
      ['2nd Law SLOT Problems.pdf', '2nd Law SLOT Problems'],
      ['BME LECTURE 4 and 5.pdf', 'BME Lecture 4 and 5'],
      ['BME LECTURE-1&2.pdf', 'BME Lecture 1 & 2'],
      ['BME LECTURE-3.pdf', 'BME Lecture 3'],
      ['BME LECTURE-4.pdf', 'BME Lecture 4'],
      ['Casting & Lathe BME.pdf', 'Casting & Lathe BME'],
      ['Casting (New).pdf', 'Casting (New)'],
      ['FLOT.pptx', 'FLOT'],
      ['IC Engines BME.pdf', 'IC Engines BME'],
      ['IC Engines Vol 1.pdf', 'IC Engines Vol 1'],
      ['IC Engines Vol 2.pdf', 'IC Engines Vol 2'],
      ['Lathe.pdf', 'Lathe'],
      ['Lecture 1&2.pptx', 'Lecture 1 & 2'],
      ['Lecture 3.pptx', 'Lecture 3'],
      ['Lecture 6.pdf', 'Lecture 6'],
      ['Non-Traditional Machining Methods.pdf', 'Non-Traditional Machining Methods'],
      ['Power Transmission BME.pdf', 'Power Transmission BME'],
      ['RAC Ppt.pdf', 'RAC PPT'],
      ['Rapid_Prototyping.pdf', 'Rapid Prototyping'],
      ['Refrigeration RAC.pptx', 'Refrigeration RAC'],
      ['SECOND  Law  Of Thermodymc.pptx', 'Second Law Of Thermodynamics'],
      ['Steady Flow Energy Equation.pdf', 'Steady Flow Energy Equation'],
      ['Thermodynamics BME.pdf', 'Thermodynamics BME'],
    ],
    pyqs: [
      ['BME_ETE_Sem-I_2025-26.pdf', 'BME_ETE_Sem-I_2025-26'],
      ['BME_Make-up_Sem-I_2025-26.pdf', 'BME_Make-up_Sem-I_2025-26'],
      ['BME_MTE_Re-sess_Sem-II_2025-26.pdf', 'BME_MTE_Re-sess_Sem-II_2025-26'],
      ['BME_MTE_Re-sess_Sem-I_2025-26.pdf', 'BME_MTE_Re-sess_Sem-I_2025-26'],
      ['BME_MTE_Sem-II_2025-26.pdf', 'BME_MTE_Sem-II_2025-26'],
      ['BME1001 ETE 2023-24 Sem-1 .pdf', 'BME1001 ETE 2023-24 Sem-1'],
      ['BME1001 ETE 2023-24 Sem-2 .pdf', 'BME1001 ETE 2023-24 Sem-2'],
      ['BME1001 MTE 2023-24 Sem-1 .pdf', 'BME1001 MTE 2023-24 Sem-1'],
      ['BME1001 MTE 2023-24 Sem-2 .pdf', 'BME1001 MTE 2023-24 Sem-2'],
      ['BME1001-ETE-Sem-I-2024-25.pdf', 'BME1001-ETE-Sem-I-2024-25'],
      ['BME1001-ETE-Sem-I-2025-26.pdf', 'BME1001-ETE-Sem-I-2025-26'],
      ['BME1001-MTE-Sem-I-2024-25.pdf', 'BME1001-MTE-Sem-I-2024-25'],
      ['BME1001-MTE-Sem-I-2025-26.pdf', 'BME1001-MTE-Sem-I-2025-26'],
      ['BME1001-MTE-Sem-I-2025-26_Solution Set-1.pdf', 'BME1001-MTE-Sem-I-2025-26_Solution Set-1'],
    ],
  },
  {
    id: 'calculus-and-matrices',
    name: 'Calculus and Matrices',
    shortName: 'Calc & Matrices',
    emoji: '∫',
    code: 'MA-104',
    description: 'Integral calculus, matrix algebra, and linear transformations.',
    studyMaterials: [
      ['0.MAS1001_Calculus & Matrices_Course Handout.pdf', '0.MAS1001 Calculus & Matrices Course Handout'],
      ['1_cayley hamilton theorem + exam questions.pdf', '1 Cayley Hamilton Theorem + Exam Questions'],
      ['1_rank of matrix.pdf', '1 Rank of Matrix'],
      ['3_soln of simultaneous linear eqn.pdf', '3 Solution of Simultaneous Linear Eqn'],
      ['4_Curvature CAM_merged.pdf', '4 Curvature CAM Merged'],
      ['5_Partial Differentiation.pdf', '5 Partial Differentiation'],
      ['6_partial differentiation Question Bank.pdf', '6 Partial Differentiation Question Bank'],
      ['Change_of_Order.pdf', 'Change of Order'],
      ['Double and Tripple Integration_notes.pdf', 'Double and Triple Integration Notes'],
      ['integrating factor .pdf', 'Integrating Factor'],
      ['Maxima Minima_Notes.pdf', 'Maxima Minima Notes'],
      ['surface integral.pdf', 'Surface Integral'],
      ['TRIPLE_INTEGRATION.pdf', 'Triple Integration'],
    ],
    pyqs: [
      ['BMA1001 - MTE - Solution Set 1 - Dec 2024.pdf', 'BMA1001 MTE Solution Set 1 Dec 2024'],
      ['BMA1001 ETE-Sem-I-2025-26.pdf', 'BMA1001 ETE-Sem-I-2025-26'],
      ['BMA1001 MTE-Sem-I-2024-25.pdf', 'BMA1001 MTE-Sem-I-2024-25'],
      ['BMA1001 MTE-Sem-I-2025-26.pdf', 'BMA1001 MTE-Sem-I-2025-26'],
      ['ETE 2023-24 Sem-1 - BMA1001.pdf', 'ETE 2023-24 Sem-1 BMA1001'],
      ['ETE 2023-24 Sem-2 - BMA1001.pdf', 'ETE 2023-24 Sem-2 BMA1001'],
      ['MTE 2023-24 Sem-1 - BMA1001.pdf', 'MTE 2023-24 Sem-1 BMA1001'],
      ['MTE 2023-24 Sem-2 - BMA1001.pdf', 'MTE 2023-24 Sem-2 BMA1001'],
      ['Solution - BMA1001 - ETE 2025-26.pdf', 'Solution BMA1001 ETE 2025-26'],
      ['Solution - BMA1001 - ETE Sem-1 2024-25.pdf', 'Solution BMA1001 ETE Sem-1 2024-25'],
      ['Solution - BMA1001 - MTE Sem-1 2024-25.pdf', 'Solution BMA1001 MTE Sem-1 2024-25'],
    ],
  },
  {
    id: 'communication-skills',
    name: 'Communication Skills',
    shortName: 'Comm. Skills',
    emoji: '🗣️',
    code: 'HS-102',
    description: 'Technical writing, presentation, and professional English.',
    studyMaterials: [],
    pyqs: [],
  },
  {
    id: 'data-visualization',
    name: 'Data Visualization',
    shortName: 'Data Viz',
    emoji: '📈',
    code: 'CS-105',
    description: 'Charts, data storytelling, and visual analytics tools.',
    studyMaterials: [],
    pyqs: [],
  },
  {
    id: 'digital-systems',
    name: 'Digital Systems',
    shortName: 'Digital Systems',
    emoji: '🔲',
    code: 'EC-101',
    description: 'Boolean algebra, logic gates, flip-flops, and digital circuits.',
    studyMaterials: [],
    pyqs: [],
  },
  {
    id: 'electrical-and-electronic-systems',
    name: 'Electrical & Electronic Systems',
    shortName: 'EES',
    emoji: '⚡',
    code: 'EE-102',
    description: 'Circuits, electromagnetism, and electronic system fundamentals.',
    studyMaterials: [],
    pyqs: [],
  },
  {
    id: 'electronic-circuits',
    name: 'Electronic Circuits',
    shortName: 'Electronics',
    emoji: '🔋',
    code: 'EC-102',
    description: 'Diodes, transistors, amplifiers, and basic analog circuits.',
    studyMaterials: [],
    pyqs: [],
  },
  {
    id: 'engineering-chemistry',
    name: 'Engineering Chemistry',
    shortName: 'Eng. Chemistry',
    emoji: '⚗️',
    code: 'CH-101',
    description: 'Electrochemistry, polymers, corrosion, and spectroscopy.',
    studyMaterials: [],
    pyqs: [],
  },
  {
    id: 'engineering-graphics',
    name: 'Engineering Graphics',
    shortName: 'Eng. Graphics',
    emoji: '📏',
    code: 'ME-103',
    description: 'Technical drawing, CAD, and engineering visualization.',
    studyMaterials: [],
    pyqs: [],
  },
  {
    id: 'fundamentals-data-structures',
    name: 'Fundamentals of Data Structures',
    shortName: 'Data Structures',
    emoji: '🗃️',
    code: 'CS-106',
    description: 'Arrays, linked lists, stacks, queues, trees, and graphs.',
    studyMaterials: [],
    pyqs: [],
  },
  {
    id: 'manufracturing-products',
    name: 'Manufacturing Products',
    shortName: 'Mfg. Products',
    emoji: '🏭',
    code: 'ME-104',
    description: 'Casting, welding, machining, and production engineering.',
    studyMaterials: [],
    pyqs: [],
  },
  {
    id: 'psuc',
    name: 'PSUC',
    shortName: 'PSUC',
    emoji: '💻',
    code: 'CS-107',
    description: 'C programming, logic building, and basic algorithm design.',
    studyMaterials: [
      ['Case Study Problems.pdf', 'Case Study Problems'],
      ['CS1001_Course Handout.pdf', 'CS1001 Course Handout'],
      ['CSES1001 - Course Handout.pdf', 'CSES1001 Course Handout'],
      ['Flow Chart & Pseudo code.pdf', 'Flow Chart & Pseudo code'],
      ['Flowcharts PPT.pdf', 'Flowcharts PPT'],
      ['Introduction to Computer.pptx', 'Introduction to Computer'],
      ['Programming in C - Theory Notes.pdf', 'Programming in C - Theory Notes'],
      ['Question Bank Module 1.pdf', 'Question Bank Module 1'],
      ['Question Bank Module 2.pdf', 'Question Bank Module 2'],
      ['Question Bank Module 3.pdf', 'Question Bank Module 3'],
      ['Question Bank Module 4.pdf', 'Question Bank Module 4'],
      ['Question Bank Module 5.pdf', 'Question Bank Module 5'],
      ['Question Bank Module 6.pdf', 'Question Bank Module 6'],
      ['CSES1001-Lecture Slides-Module-1.pdf', 'CSES1001 Lecture Slides Module 1'],
      ['CSES1001-Lecture Slides-Module-2.pdf', 'CSES1001 Lecture Slides Module 2'],
      ['CSES1001-Lecture Slides-Module-3.pdf', 'CSES1001 Lecture Slides Module 3'],
      ['CSES1001-Lecture Slides-Module-4.pdf', 'CSES1001 Lecture Slides Module 4'],
      ['CSES1001-Lecture Slides-Module-5.pdf', 'CSES1001 Lecture Slides Module 5'],
      ['CSES1001-Lecture Slides-Module-6.pdf', 'CSES1001 Lecture Slides Module 6'],
    ],
    pyqs: [
      ['CSES1001 ETE Solution Dec 2024 Set-1.pdf', 'CSES1001 ETE Solution Dec 2024 Set-1'],
      ['CSES1001 ETE-Sem-I-2024-25.pdf', 'CSES1001 ETE-Sem-I-2024-25'],
      ['CSES1001 ETE-Sem-I-2025-26.pdf', 'CSES1001 ETE-Sem-I-2025-26'],
      ['CSES1001 MTE Solution Dec 2024 Set-1.pdf', 'CSES1001 MTE Solution Dec 2024 Set-1'],
      ['CSES1001 MTE Solution May 2025 Set-1.pdf', 'CSES1001 MTE Solution May 2025 Set-1'],
      ['CSES1001 MTE-Sem-I-2024-25.pdf', 'CSES1001 MTE-Sem-I-2024-25'],
      ['CSES1001 MTE-Sem-I-2025-26.pdf', 'CSES1001 MTE-Sem-I-2025-26'],
      ['CS1001 ETE 2023-24 Sem-1.pdf', 'CS1001 ETE 2023-24 Sem-1'],
      ['CS1001 ETE 2023-24 Sem-2.pdf', 'CS1001 ETE 2023-24 Sem-2'],
      ['CS1001 MTE 2023-24 Sem-1.pdf', 'CS1001 MTE 2023-24 Sem-1'],
      ['CS1001 MTE 2023-24 Sem-2.pdf', 'CS1001 MTE 2023-24 Sem-2'],
    ],
  },
  {
    id: 'technical-writing-clinic',
    name: 'Technical Writing Clinic',
    shortName: 'Tech Writing',
    emoji: '✍️',
    code: 'HS-103',
    description: 'Academic writing, report formatting, and professional communication.',
    studyMaterials: [],
    pyqs: [],
  },
  {
    id: 'universal-human-values',
    name: 'Universal Human Values',
    shortName: 'UHV',
    emoji: '🌍',
    code: 'HS-104',
    description: 'Ethics, human values, and professional responsibility.',
    studyMaterials: [
      ['UHV Module 2.pdf', 'UHV Module 2'],
      ['UHV Module 3.pdf', 'UHV Module 3'],
      ['UHV Module 4.pdf', 'UHV Module 4'],
      ['UHV Module-1 Notes by Dr. B.K.Panda.pdf', 'UHV Module-1 Notes by Dr. B.K.Panda'],
      ['UHV- Course Handout (2024-2025).pdf', 'UHV Course Handout (2024-2025)'],
      ['UHV-Module-1.pdf', 'UHV-Module-1'],
      ['UHV-Module-5.pdf', 'UHV-Module-5'],
    ],
    pyqs: [
      ['UHV-ETE-Sem-1-2023-24.pdf', 'UHV-ETE-Sem-1-2023-24'],
      ['UHV-ETE-Sem-1-2024-25.pdf', 'UHV-ETE-Sem-1-2024-25'],
      ['UHV-ETE-Sem-1-2025-26.pdf', 'UHV-ETE-Sem-1-2025-26'],
      ['UHV-MTE-Sem-1-2023-24.pdf', 'UHV-MTE-Sem-1-2023-24'],
      ['UHV-MTE-Sem-1-2024-25.pdf', 'UHV-MTE-Sem-1-2024-25'],
      ['UHV-MTE-Sem-1-2025-26.pdf', 'UHV-MTE-Sem-1-2025-26'],
      ['UHV_ETE_Sem-I_2024-25.pdf', 'UHV_ETE_Sem-I_2024-25'],
      ['UHV_MTE_Sem-I_2024-25.pdf', 'UHV_MTE_Sem-I_2024-25'],
    ],
  },
];

function buildSubjectBlock(subject, cycleId) {
  const smLines = subject.studyMaterials.map(([file, title]) => {
    const encodedFile = encodeURIComponent(file);
    const u = `${BASE}/${cycleId}/${subject.id}/study-material/${encodedFile}`;
    const ext = file.split('.').pop().toLowerCase();
    const type = (ext === 'pptx' || ext === 'ppt') ? 'pdf' : 'pdf';
    return `      { title: '${title.replace(/'/g, "\\'")}', url: '${u}', type: '${type}' }`;
  }).join(',\n');
  
  const pyqLines = subject.pyqs.map(([file, title]) => {
    const encodedFile = encodeURIComponent(file);
    const u = `${BASE}/${cycleId}/${subject.id}/pyqs/${encodedFile}`;
    return `      { title: '${title.replace(/'/g, "\\'")}', url: '${u}', type: 'pdf' }`;
  }).join(',\n');

  const totalResources = subject.studyMaterials.length + subject.pyqs.length;

  return `    {
      id: '${subject.id}',
      name: '${subject.name.replace(/'/g, "\\'")}',
      shortName: '${subject.shortName.replace(/'/g, "\\'")}',
      emoji: '${subject.emoji}',
      code: '${subject.code}',
      description: '${subject.description.replace(/'/g, "\\'")}',
      resourceCount: ${totalResources},
      studyMaterials: [
${smLines}
      ],
      pyqs: [
${pyqLines}
      ],
      ytResources: [],
    }`;
}

const physicsBlocks = physicsSubjects.map(s => buildSubjectBlock(s, 'physics-cycle')).join(',\n');
const chemistryBlocks = chemistrySubjects.map(s => buildSubjectBlock(s, 'chemistry-cycle')).join(',\n');

// Now read the current studyMaterial.ts to get the parts AFTER year1Cycles
const studyMaterialPath = path.join(__dirname, 'src', 'data', 'studyMaterial.ts');
const currentContent = fs.readFileSync(studyMaterialPath, 'utf8');

// Find the start of branches
const branchesStart = currentContent.indexOf('// ────────────────────────────────────────────────────────────\r\n// BRANCHES (Year 2');
if (branchesStart === -1) {
  console.error('Could not find BRANCHES section!');
  process.exit(1);
}

const afterYear1 = currentContent.slice(branchesStart);

// Build the new year1Cycles section
const year1Section = `// ────────────────────────────────────────────────────────────
// YEAR 1 — CYCLES
// ────────────────────────────────────────────────────────────

export const year1Cycles: Cycle[] = [
  {
    id: 'physics-cycle',
    name: 'Physics Cycle',
    emoji: '🔬',
    color: '#4f46e5',
    gradient: 'from-indigo-500 to-blue-600',
    description: 'Engineering Physics, Computational Mathematics, PSUC, WCS, EVS, Biology for Engineers, IoT, and more.',
    subjectPreview: '12 Subjects',
    subjects: [
${physicsBlocks}
    ],
  },
  {
    id: 'chemistry-cycle',
    name: 'Chemistry Cycle',
    emoji: '🧪',
    color: '#0891b2',
    gradient: 'from-cyan-500 to-teal-600',
    description: 'Engineering Chemistry, Basic Mechanical, Calculus & Matrices, Digital Systems, Engineering Graphics, and more.',
    subjectPreview: '15 Subjects',
    subjects: [
${chemistryBlocks}
    ],
  },
];

`;

// Build the header section (interfaces only)
const interfacesSection = `// ============================================================
// MUJ BTech Study Material — Central Data Source
// ============================================================

export interface ResourceLink {
  title: string;
  url: string;
  type: 'drive' | 'pdf' | 'doc' | 'slides';
}

export interface YouTubeResource {
  title: string;
  url: string;
  channelName: string;
  thumbnailId?: string;
}

export interface Subject {
  id: string;
  name: string;
  shortName: string;
  emoji: string;
  code: string;
  description: string;
  resourceCount: number;
  studyMaterials: ResourceLink[];
  pyqs: ResourceLink[];
  ytResources: YouTubeResource[];
}

export interface Cycle {
  id: string;
  name: string;
  emoji: string;
  color: string;
  gradient: string;
  description: string;
  subjectPreview: string;
  subjects: Subject[];
}

export interface Branch {
  id: string;
  name: string;
  shortName: string;
  emoji: string;
  icon: string;
  gradient: string;
  color: string;
  description: string;
  subjects: Subject[];
}

`;

const newContent = interfacesSection + year1Section + afterYear1;

fs.writeFileSync(studyMaterialPath, newContent, 'utf8');
console.log('SUCCESS: studyMaterial.ts written!');
console.log('Physics subjects:', physicsSubjects.length);
console.log('Chemistry subjects:', chemistrySubjects.length);
console.log('Total year1 subjects:', physicsSubjects.length + chemistrySubjects.length);

// Count imagekit URLs
const ikCount = (newContent.match(/ik\.imagekit\.io/g) || []).length;
console.log('ImageKit URLs in file:', ikCount);
