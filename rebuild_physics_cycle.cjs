/**
 * rebuild_physics_cycle.cjs
 * Rebuilds the physics-cycle section of studyMaterial.ts using ONLY verified ImageKit URLs.
 * Also fixes the chemistry-cycle applied-mathematics studyMaterials (currently empty).
 */

const fs = require('fs');

// ── VERIFIED PHYSICS CYCLE URLs from all_urls_from_steps.txt ──────────────
// Only these 2 subjects have real data on ImageKit
const PHYSICS_CYCLE_DATA = {
  'applied-mathematics-1': {
    studyMaterials: [
      { title: 'Applied Maths 1 — All Units', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/applied-mathematics-1/study-material/Applied%20Maths%201%20%E2%80%94%20All%20Units.pdf', type: 'pdf' },
    ],
    pyqs: [
      { title: 'End Semester 2023', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/applied-mathematics-1/pyqs/End%20Semester%202023.pdf', type: 'pdf' },
      { title: 'End Semester 2024', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/applied-mathematics-1/pyqs/End%20Semester%202024.pdf', type: 'pdf' },
    ],
  },
  'computational-mathematics': {
    studyMaterials: [
      { title: '1. Question Bank Module-01 Solution', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/1.%20QUESTION%20BANK_MODULE-01_SOLUTION.pdf', type: 'pdf' },
      { title: '2. MAS1002 Course Handout (12.09.2024)', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/2.%20MAS1002_Course%20Handout%20(12.09.2024).pdf', type: 'pdf' },
      { title: '2. Question Bank Module-02 Solution', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/2.%20QUESTION%20BANK_MODULE-02_SOLUTION.pdf', type: 'pdf' },
      { title: '3. Question Bank Module-3 Solution', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/3.%20Question%20Bank_Solution_Module_3.pdf', type: 'pdf' },
      { title: 'CM Module-6 Notes & Solved PYQs', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/CM_%20Module-6_Notes%26Solved_PYQs.pdf', type: 'pdf' },
      { title: 'Module 1 (Updated)', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/Module%201%20(updated).pdf', type: 'pdf' },
      { title: 'Module 2 (Updated)', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/Module%202%20(updated).pdf', type: 'pdf' },
      { title: 'Module 3 (Updated)', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/Module%203%20(updated).pdf', type: 'pdf' },
      { title: 'Module 4 (Updated)', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/Module%204%20(updated).pdf', type: 'pdf' },
      { title: 'Module 5 (Updated)', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/Module%205%20(updated).pdf', type: 'pdf' },
      { title: 'Module 6 (Updated)', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/Module%206%20(updated).pdf', type: 'pdf' },
    ],
    pyqs: [
      { title: 'CM ETE Sem-I 2024-25', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/CM_ETE_Sem-I_2024-25.pdf', type: 'pdf' },
      { title: 'CM ETE Sem-I 2025-26 (Questions With Solution)', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/CM_ETE_Sem-I_2025-26_QuestionsWithSolution.pdf', type: 'pdf' },
      { title: 'CM MTE Re-sess Sem-II 2025-26', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/CM_MTE_Re-sess_Sem-II_2025-26.pdf', type: 'pdf' },
      { title: 'CM MTE Re-sess Sem-I 2025-26', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/CM_MTE_Re-sess_Sem-I_2025-26.pdf', type: 'pdf' },
      { title: 'CM MTE Sem-II 2025-26', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/CM_MTE_Sem-II_2025-26.pdf', type: 'pdf' },
      { title: 'CM MTE Sem-I 2024-25', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/CM_MTE_Sem-I_2024-25.pdf', type: 'pdf' },
      { title: 'CM MTE Sem-I 2025-26', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/CM_MTE_Sem-I_2025-26.pdf', type: 'pdf' },
      { title: 'MA1002 ETE 2023-24 Sem-1', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/MA1002%20ETE%202023-24%20Sem-1%20.pdf', type: 'pdf' },
      { title: 'MA1002 ETE 2023-24 Sem-2', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/MA1002%20ETE%202023-24%20Sem-2%20.pdf', type: 'pdf' },
      { title: 'MAS1002 Solution ETE Set 3 (May 2025)', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/MAS1002%20Solution%20ETE%20Set%203%20(May%202025).pdf', type: 'pdf' },
      { title: 'MTE QP MA1002 Sem-2 2023-2024', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/MTE%20QP_MA1002_Sem-2_2023-2024.pdf', type: 'pdf' },
      { title: 'Solution MTE MAS1002 Sem 1 2025', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/Solution%20MTE%20MAS1002%20sem%201%202025.pdf', type: 'pdf' },
      { title: 'Solution MAS1002 Dec 2024', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/Solution-MAS1002-Dec%202024.pdf', type: 'pdf' },
    ],
  },
};

function entries(arr) {
  return arr.map(e => `      { title: ${JSON.stringify(e.title)}, url: ${JSON.stringify(e.url)}, type: '${e.type}' },`).join('\n');
}

function makeSubject(id, name, shortName, emoji, code, desc, smData, pyqData) {
  const sm = smData || [];
  const pq = pyqData || [];
  return `    {
      id: '${id}',
      name: '${name}',
      shortName: '${shortName}',
      emoji: '${emoji}',
      code: '${code}',
      description: '${desc}',
      resourceCount: ${sm.length + pq.length},
      studyMaterials: [
${sm.length ? entries(sm) : ''}
      ],
      pyqs: [
${pq.length ? entries(pq) : ''}
      ],
      ytResources: [],
    }`;
}

const NEW_PHYSICS_CYCLE = `  {
    id: 'physics-cycle',
    name: 'Physics Cycle',
    emoji: '🔬',
    color: '#4f46e5',
    gradient: 'from-indigo-500 to-blue-600',
    description: 'Engineering Physics, Computational Mathematics, PSUC, WCS, EVS, Biology for Engineers, IoT, and more.',
    subjectPreview: '12 Subjects',
    subjects: [
${makeSubject('engineering-physics', 'Engineering Physics', 'Eng. Physics', '⚛️', 'PH-101',
  'Classical mechanics, optics, wave phenomena, and quantum fundamentals.', [], [])},
${makeSubject('computational-mathematics', 'Computational Mathematics', 'Comp. Math', '📐', 'MA-101',
  'Calculus, matrices, and differential equation modeling.',
  PHYSICS_CYCLE_DATA['computational-mathematics'].studyMaterials,
  PHYSICS_CYCLE_DATA['computational-mathematics'].pyqs)},
${makeSubject('psuc', 'PSUC', 'PSUC', '💻', 'CS-101',
  'C programming, logic building, and basic algorithm design.', [], [])},
${makeSubject('wellness-community-service', 'Wellness & Community Service', 'WCS', '🌿', 'HS-101',
  'Physical wellness, community engagement, and holistic development.', [], [])},
${makeSubject('environmental-science', 'Environmental Science', 'EVS', '🌍', 'ES-101',
  'Environmental science, ecology, and sustainability principles.', [], [])},
${makeSubject('biology-for-engineers', 'Biology for Engineers', 'Bio. for Eng.', '🧬', 'BS-101',
  'Biochemistry, genetics, and biomedical fundamentals.', [], [])},
${makeSubject('internet-of-things', 'Internet of Things', 'IoT', '📡', 'CS-102',
  'IoT architecture, sensors, embedded systems, and data visualization.', [], [])},
${makeSubject('engineering-material-mechanics', 'Engineering Material & Mechanics', 'Eng. Materials', '⚙️', 'ME-101',
  'Properties of materials, stress, strain, and thermodynamics basics.', [], [])},
${makeSubject('data-visualization', 'Data Visualization', 'Data Viz', '📊', 'CS-103',
  'Charts, data storytelling, and visual analytics tools.', [], [])},
${makeSubject('fundamentals-data-structures', 'Fundamentals of Data Structures', 'Data Structures', '🗃️', 'CS-104',
  'Arrays, linked lists, stacks, queues, trees, and graphs.', [], [])},
${makeSubject('electrical-technology', 'Electrical Technology', 'Elec. Tech', '⚡', 'EE-101',
  'Circuits, electromagnetism, and power systems fundamentals.', [], [])},
${makeSubject('applied-mathematics-1', 'Applied Mathematics 1', 'App. Maths 1', '🔢', 'MA-103',
  'Calculus, sequences, series, and analytical geometry.',
  PHYSICS_CYCLE_DATA['applied-mathematics-1'].studyMaterials,
  PHYSICS_CYCLE_DATA['applied-mathematics-1'].pyqs)},
    ],
  }`;

console.log('Reading studyMaterial.ts...');
const content = fs.readFileSync('src/data/studyMaterial.ts', 'utf8');

// Find start of physics-cycle object (the "  {" before id: 'physics-cycle')
// and end (the "  {" before id: 'chemistry-cycle')
const physStart = content.indexOf("  {\n    id: 'physics-cycle'");
const physStart2 = content.indexOf("  {\r\n    id: 'physics-cycle'");
const chemStart = content.indexOf("  {\n    id: 'chemistry-cycle'");
const chemStart2 = content.indexOf("  {\r\n    id: 'chemistry-cycle'");

const ps = physStart >= 0 ? physStart : physStart2;
const cs = chemStart >= 0 ? chemStart : chemStart2;

console.log('physics-cycle block starts at:', ps);
console.log('chemistry-cycle block starts at:', cs);

if (ps < 0 || cs < 0) {
  console.error('Could not locate cycle blocks!');
  process.exit(1);
}

const before = content.substring(0, ps);
const after = content.substring(cs);

const newContent = before + NEW_PHYSICS_CYCLE + '\n  ,\n  ' + after;

// Wait, let's be careful about the separator
// The format should be:
// [...,  { id: 'physics-cycle', ... }, { id: 'chemistry-cycle', ... },  ...]

// Actually let's just replace between ps and cs exactly
const newContent2 = before + NEW_PHYSICS_CYCLE + ',\n  ' + after;

fs.writeFileSync('src/data/studyMaterial.ts', newContent2, 'utf8');
console.log('Done! New file size:', newContent2.length, 'bytes');
