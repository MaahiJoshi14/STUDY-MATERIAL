const fs = require('fs');

// Load ImageKit files list
const files = JSON.parse(fs.readFileSync('imagekit_files_list.json', 'utf8'));

// Load current studyMaterial.ts content
let content = fs.readFileSync('src/data/studyMaterial.ts', 'utf8');

// Parse imagekit files list into a structured map
// cycle_id -> subject_id -> { studyMaterials, pyqs }
const imageKitData = {
  'physics-cycle': {},
  'chemistry-cycle': {}
};

files.forEach(f => {
  const path = f.filePath;
  // Format: /1st year btech/{cycle}/{subject}/{type}/{filename}
  const parts = path.split('/').filter(Boolean);
  if (parts.length < 4) return;
  
  const root = parts[0].toLowerCase();
  if (root !== '1st year btech') return;
  
  const cycle = parts[1].toLowerCase();
  if (!imageKitData[cycle]) return;
  
  let subject = parts[2].toLowerCase();
  // Normalize subject IDs if needed
  if (subject === 'applied-mathematics-1') subject = 'applied-mathematics';
  
  const typeFolder = parts[3].toLowerCase(); // e.g. study-material, study material, pyqs, experiments, etc.
  const filename = parts.slice(4).join('/');
  
  if (!imageKitData[cycle][subject]) {
    imageKitData[cycle][subject] = { studyMaterials: [], pyqs: [] };
  }
  
  const fileExt = filename.substring(filename.lastIndexOf('.')).toLowerCase();
  let type = 'pdf';
  if (fileExt === '.pptx' || fileExt === '.ppt') type = 'pptx';
  else if (fileExt === '.docx' || fileExt === '.doc') type = 'doc';
  
  // Format title (remove extension, clean up name)
  const title = filename.replace(/\.[^.]+$/, '').replace(/%20/g, ' ').trim();
  
  const entry = {
    title,
    url: f.url,
    type
  };
  
  // Distinguish between study materials and pyqs
  if (typeFolder.includes('pyq')) {
    imageKitData[cycle][subject].pyqs.push(entry);
  } else {
    // Treat everything else (study-material, experiments, study material, notes) as study-material
    imageKitData[cycle][subject].studyMaterials.push(entry);
  }
});

// Let's print some stats
console.log('ImageKit data parsed:');
Object.keys(imageKitData).forEach(cycle => {
  console.log(`Cycle: ${cycle}`);
  Object.keys(imageKitData[cycle]).forEach(sub => {
    const data = imageKitData[cycle][sub];
    console.log(`  ${sub}: ${data.studyMaterials.length} materials, ${data.pyqs.length} PYQs`);
  });
});

// Subjects configuration to build year1Cycles
// We will preserve metadata (codes, descriptions, emojis) for the first year subjects
const PHYSICS_SUBJECTS_METADATA = {
  'engineering-physics': { name: 'Engineering Physics', shortName: 'Eng. Physics', emoji: '⚛️', code: 'PH-101', desc: 'Classical mechanics, optics, wave phenomena, and quantum fundamentals.' },
  'computational-mathematics': { name: 'Computational Mathematics', shortName: 'Comp. Math', emoji: '📐', code: 'MA-101', desc: 'Calculus, matrices, and differential equation modeling.' },
  'psuc': { name: 'PSUC', shortName: 'PSUC', emoji: '💻', code: 'CS-101', desc: 'C programming, logic building, and basic algorithm design.' },
  'wellness-community-service': { name: 'Wellness & Community Service', shortName: 'WCS', emoji: '🌿', code: 'HS-101', desc: 'Physical wellness, community engagement, and holistic development.' },
  'environmental-science': { name: 'Environmental Science', shortName: 'EVS', emoji: '🌍', code: 'ES-101', desc: 'Environmental science, ecology, and sustainability principles.' },
  'biology-for-engineers': { name: 'Biology for Engineers', shortName: 'Bio. for Eng.', emoji: '🧬', code: 'BS-101', desc: 'Biochemistry, genetics, and biomedical fundamentals.' },
  'internet-of-things': { name: 'Internet of Things', shortName: 'IoT', emoji: '📡', code: 'CS-102', desc: 'IoT architecture, sensors, embedded systems, and data visualization.' },
  'engineering-material-mechanics': { name: 'Engineering Material & Mechanics', shortName: 'Eng. Materials', emoji: '⚙️', code: 'ME-101', desc: 'Properties of materials, stress, strain, and thermodynamics basics.' },
  'data-visualization': { name: 'Data Visualization', shortName: 'Data Viz', emoji: '📊', code: 'CS-103', desc: 'Charts, data storytelling, and visual analytics tools.' },
  'fundamentals-data-structures': { name: 'Fundamentals of Data Structures', shortName: 'Data Structures', emoji: '🗃️', code: 'CS-104', desc: 'Arrays, linked lists, stacks, queues, trees, and graphs.' },
  'electrical-technology': { name: 'Electrical Technology', shortName: 'Elec. Tech', emoji: '⚡', code: 'EE-101', desc: 'Circuits, electromagnetism, and power systems fundamentals.' },
  'applied-mathematics': { name: 'Applied Mathematics', shortName: 'App. Maths', emoji: '🔢', code: 'MA-102', desc: 'Calculus, sequences, series, and analytical geometry.' }
};

const CHEMISTRY_SUBJECTS_METADATA = {
  'applied-mathematics': { name: 'Applied Mathematics', shortName: 'App. Maths', emoji: '🔢', code: 'MA-102', desc: 'Calculus, sequences, series, and analytical geometry.' },
  'basic-mechanical-engineering': { name: 'Basic Mechanical Engineering', shortName: 'Basic Mech.', emoji: '⚙️', code: 'ME-102', desc: 'Thermodynamics, mechanics, and basic mechanical design.' },
  'calculus-and-matrices': { name: 'Calculus & Matrices', shortName: 'Calculus', emoji: '📈', code: 'MA-103', desc: 'Calculus, matrices, and basic math tools.' },
  'psuc': { name: 'PSUC', shortName: 'PSUC', emoji: '💻', code: 'CS-101', desc: 'C programming, logic building, and basic algorithm design.' },
  'universal-human-values': { name: 'Universal Human Values', shortName: 'UHV', emoji: '🤝', code: 'HS-102', desc: 'Ethics, human values, harmony, and professional code.' },
  'technical-writing-clinic': { name: 'Technical Writing Clinic', shortName: 'Tech Writing', emoji: '📝', code: 'HS-103', desc: 'Communication skills, writing reports, and business letters.' },
  'manufracturing-products': { name: 'Manufracturing Products', shortName: 'Manufacturing', emoji: '🏭', code: 'ME-103', desc: 'Manufacturing tools, welding, workshop practices.' },
  'fundamentals-data-structures': { name: 'Fundamentals of Data Structures', shortName: 'Data Structures', emoji: '🗃️', code: 'CS-104', desc: 'Arrays, linked lists, stacks, queues, trees, and graphs.' },
  'engineering-graphics': { name: 'Engineering Graphics', shortName: 'Eng. Graphics', emoji: '🎨', code: 'ME-104', desc: 'AutoCAD, engineering drawing, projection, and drafting.' },
  'engineering-chemistry': { name: 'Engineering Chemistry', shortName: 'Eng. Chem', emoji: '🧪', code: 'CH-101', desc: 'Engineering chemistry, water treatment, fuels, polymers.' },
  'electronic-circuits': { name: 'Electronic Circuits', shortName: 'Elec. Circuits', emoji: '🔌', code: 'EC-101', desc: 'Basic electronic circuits, diodes, transistors, and rectifiers.' },
  'electrical-and-electronic-systems': { name: 'Electrical & Electronic Systems', shortName: 'E&E Systems', emoji: '⚡', code: 'EE-102', desc: 'AC/DC systems, basic electronics, machinery.' },
  'digital-systems': { name: 'Digital Systems', shortName: 'Digital Sys', emoji: '🔢', code: 'CS-105', desc: 'Boolean algebra, logic gates, flip flops, and counters.' },
  'communication-skills': { name: 'Communication Skills', shortName: 'Comm. Skills', emoji: '🗣️', code: 'HS-104', desc: 'Listening, speaking, writing, and presentation skills.' },
  'data-visualization': { name: 'Data Visualization', shortName: 'Data Viz', emoji: '📊', code: 'CS-103', desc: 'Charts, data storytelling, and visual analytics tools.' }
};

function buildSubjectsList(cycleId, metadataMap) {
  const subjectsList = [];
  Object.keys(metadataMap).forEach(subId => {
    const meta = metadataMap[subId];
    const ik = imageKitData[cycleId][subId] || { studyMaterials: [], pyqs: [] };
    
    // Sort study materials and pyqs by title for cleaner order
    ik.studyMaterials.sort((a, b) => a.title.localeCompare(b.title));
    ik.pyqs.sort((a, b) => a.title.localeCompare(b.title));

    subjectsList.push({
      id: subId,
      name: meta.name,
      shortName: meta.shortName,
      emoji: meta.emoji,
      code: meta.code,
      description: meta.desc,
      resourceCount: ik.studyMaterials.length + ik.pyqs.length,
      studyMaterials: ik.studyMaterials,
      pyqs: ik.pyqs,
      ytResources: []
    });
  });
  return subjectsList;
}

const newPhysicsSubjects = buildSubjectsList('physics-cycle', PHYSICS_SUBJECTS_METADATA);
const newChemistrySubjects = buildSubjectsList('chemistry-cycle', CHEMISTRY_SUBJECTS_METADATA);

// Generate year1Cycles JSON string
const year1CyclesString = `export const year1Cycles: Cycle[] = [
  {
    id: 'physics-cycle',
    name: 'Physics Cycle',
    emoji: '🔬',
    color: '#4f46e5',
    gradient: 'from-indigo-500 to-blue-600',
    description: 'Engineering Physics, Computational Mathematics, PSUC, WCS, EVS, Biology for Engineers, IoT, and more.',
    subjectPreview: '${newPhysicsSubjects.length} Subjects',
    subjects: ${JSON.stringify(newPhysicsSubjects, null, 2)}
  },
  {
    id: 'chemistry-cycle',
    name: 'Chemistry Cycle',
    emoji: '🧪',
    color: '#0891b2',
    gradient: 'from-cyan-500 to-teal-600',
    description: 'Engineering Chemistry, Basic Mechanical, Calculus & Matrices, Digital Systems, Engineering Graphics, and more.',
    subjectPreview: '${newChemistrySubjects.length} Subjects',
    subjects: ${JSON.stringify(newChemistrySubjects, null, 2)}
  }
];`;

// Find where year1Cycles starts and ends in the current file content
const startIdx = content.indexOf('export const year1Cycles');
if (startIdx === -1) {
  console.error('Could not find year1Cycles array in studyMaterial.ts');
  process.exit(1);
}

// Find where the next exported item starts (e.g. export const branches)
const nextExportIdx = content.indexOf('export const branches');
if (nextExportIdx === -1) {
  console.error('Could not find branches array in studyMaterial.ts');
  process.exit(1);
}

const beforePart = content.substring(0, startIdx);
const afterPart = content.substring(nextExportIdx);

const updatedContent = beforePart + year1CyclesString + '\n\n' + afterPart;

fs.writeFileSync('src/data/studyMaterial.ts', updatedContent, 'utf8');
console.log('Successfully updated src/data/studyMaterial.ts with all 498 real ImageKit files!');
