// ============================================================
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

// ────────────────────────────────────────────────────────────
// YEAR 1 — CYCLES
// ────────────────────────────────────────────────────────────

export const year1Cycles: Cycle[] = [
  {
    id: 'physics-cycle',
    name: 'Physics Cycle',
    emoji: '🔬',
    color: '#4f46e5',
    gradient: 'from-indigo-500 to-blue-600',
    description: 'Eng. Physics, Computational Mathematics, PSUC, WCS, EVS, Biology for Engineers, and MATLAB.',
    subjectPreview: '12 Subjects',
    subjects: [
      {
        id: 'engineering-physics',
        name: 'Engineering Physics',
        shortName: 'Eng. Physics',
        emoji: '⚛️',
        code: 'EP-101',
        description: 'Classical mechanics, optics, and quantum fundamentals.',
        resourceCount: 42,
        studyMaterials: [
          { title: 'Module 1 — Wave Optics Notes', url: 'https://drive.google.com/drive/folders/1example_physics_notes', type: 'pdf' },
          { title: 'Module 2 — Quantum Mechanics', url: 'https://drive.google.com/drive/folders/1example_physics_qm', type: 'pdf' },
          { title: 'Module 3 — Semiconductors', url: 'https://drive.google.com/drive/folders/1example_physics_semi', type: 'pdf' },
          { title: 'Complete Textbook (H.K. Malik)', url: 'https://drive.google.com/file/d/1example_physics_book', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Term 2024', url: 'https://drive.google.com/file/d/1example_physics_pyq24e', type: 'pdf' },
          { title: 'Sessional 1 — 2023', url: 'https://drive.google.com/file/d/1example_physics_pyq23s1', type: 'pdf' },
          { title: 'End Semester 2023', url: 'https://drive.google.com/file/d/1example_physics_pyq23e', type: 'pdf' },
          { title: 'End Semester 2022', url: 'https://drive.google.com/file/d/1example_physics_pyq22e', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Engineering Physics Full Course', url: 'https://youtube.com/watch?v=6GG6T0YHFEY', channelName: 'NPTEL', thumbnailId: '6GG6T0YHFEY' },
          { title: 'Wave Optics — Complete Chapter', url: 'https://youtube.com/watch?v=Iuv6hY6zsd0', channelName: 'Physics Wallah', thumbnailId: 'Iuv6hY6zsd0' },
        ],
      },
      {
        id: 'computational-mathematics',
        name: 'Computational Mathematics',
        shortName: 'Comp. Mathematics',
        emoji: '📐',
        code: 'MA-101',
        description: 'Calculus, matrices, and differential equation modeling.',
        resourceCount: 38,
        studyMaterials: [
          { title: 'Unit 1 — Matrices & Linear Algebra', url: 'https://drive.google.com/file/d/1example_cm_u1', type: 'pdf' },
          { title: 'Unit 2 — Differential Equations', url: 'https://drive.google.com/file/d/1example_cm_u2', type: 'pdf' },
          { title: 'Unit 3 — Numerical Methods', url: 'https://drive.google.com/file/d/1example_cm_u3', type: 'pdf' },
          { title: 'Formula Sheet — Complete', url: 'https://drive.google.com/file/d/1example_cm_formula', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_cm_pyq24', type: 'pdf' },
          { title: 'Sessional 2 — 2023', url: 'https://drive.google.com/file/d/1example_cm_pyq23s2', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Numerical Methods Full Playlist', url: 'https://youtube.com/watch?v=v9bSZKLc1qY', channelName: 'NPTEL', thumbnailId: 'v9bSZKLc1qY' },
          { title: 'Differential Equations Crash Course', url: 'https://youtube.com/watch?v=p_di4Zn4wz4', channelName: '3Blue1Brown', thumbnailId: 'p_di4Zn4wz4' },
        ],
      },
      {
        id: 'psuc',
        name: 'PSUC',
        shortName: 'PSUC',
        emoji: '💻',
        code: 'CS-101',
        description: 'C programming, logic building, and basic algorithm design.',
        resourceCount: 56,
        studyMaterials: [
          { title: 'PSUC Complete Notes', url: 'https://drive.google.com/file/d/1example_psuc_notes', type: 'pdf' },
          { title: 'Unit Wise Study Material', url: 'https://drive.google.com/file/d/1example_psuc_units', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2023', url: 'https://drive.google.com/file/d/1example_psuc_pyq23', type: 'pdf' },
        ],
        ytResources: [
          { title: 'C Programming Full Course', url: 'https://youtube.com/watch?v=KJgsSFOSQv0', channelName: 'freeCodeCamp', thumbnailId: 'KJgsSFOSQv0' },
        ],
      },
      {
        id: 'wcs',
        name: 'WCS',
        shortName: 'WCS',
        emoji: '🔧',
        code: 'ES-101',
        description: 'Workshop practice, manufacturing, and basic fabrication.',
        resourceCount: 24,
        studyMaterials: [
          { title: 'WCS Notes — All Units', url: 'https://drive.google.com/file/d/1example_wcs_notes', type: 'pdf' },
        ],
        pyqs: [
          { title: 'Sessional 1 — 2024', url: 'https://drive.google.com/file/d/1example_wcs_pyq24', type: 'pdf' },
          { title: 'End Semester 2023', url: 'https://drive.google.com/file/d/1example_wcs_pyq23', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Workshop Practice Tutorials', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'Engineering Hub', thumbnailId: 'dQw4w9WgXcQ' },
        ],
      },
      {
        id: 'evs',
        name: 'EVS',
        shortName: 'EVS',
        emoji: '🌿',
        code: 'HS-101',
        description: 'Environmental science, ecology, and sustainability.',
        resourceCount: 18,
        studyMaterials: [
          { title: 'EVS — Environment & Ecology Notes', url: 'https://drive.google.com/file/d/1example_evs_notes', type: 'pdf' },
          { title: 'Important Q&A Compilation', url: 'https://drive.google.com/file/d/1example_evs_qa', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_evs_pyq24', type: 'pdf' },
        ],
        ytResources: [
          { title: 'EVS Complete Playlist', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'EduHub', thumbnailId: 'dQw4w9WgXcQ' },
        ],
      },
      {
        id: 'biology-for-engineers',
        name: 'Biology for Engineers',
        shortName: 'Bio. for Eng.',
        emoji: '🧬',
        code: 'BS-101',
        description: 'Biochemistry, genetics, and biomedical fundamentals.',
        resourceCount: 22,
        studyMaterials: [
          { title: 'Cell Biology & Genetics Notes', url: 'https://drive.google.com/file/d/1example_bio_u1', type: 'pdf' },
          { title: 'Biotechnology Module', url: 'https://drive.google.com/file/d/1example_bio_u2', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2023', url: 'https://drive.google.com/file/d/1example_bio_pyq23', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Biology for Engineers — NPTEL', url: 'https://youtube.com/watch?v=H3bfBQI_OeQ', channelName: 'NPTEL', thumbnailId: 'H3bfBQI_OeQ' },
        ],
      },
      {
        id: 'matlab',
        name: 'MATLAB',
        shortName: 'MATLAB',
        emoji: '📊',
        code: 'MA-102',
        description: 'Numerical computing, simulation, and data visualization.',
        resourceCount: 15,
        studyMaterials: [
          { title: 'MATLAB Basics — Complete Guide', url: 'https://drive.google.com/file/d/1example_matlab_notes', type: 'pdf' },
          { title: 'Lab Programs — All Experiments', url: 'https://drive.google.com/file/d/1example_matlab_lab', type: 'pdf' },
        ],
        pyqs: [
          { title: 'Lab Viva Questions 2023', url: 'https://drive.google.com/file/d/1example_matlab_viva', type: 'pdf' },
        ],
        ytResources: [
          { title: 'MATLAB for Beginners — Full Course', url: 'https://youtube.com/watch?v=nsGFdZSmrlg', channelName: 'MATLAB Official', thumbnailId: 'nsGFdZSmrlg' },
        ],
      },
      {
        id: 'engineering-materials-mechanics',
        name: 'Engineering Materials & Mechanics',
        shortName: 'Eng. Materials',
        emoji: '⚙️',
        code: 'ME-101',
        description: 'Properties of materials, stress, strain, and thermodynamics basics.',
        resourceCount: 31,
        studyMaterials: [
          { title: 'Stress & Strain — Unit 1', url: 'https://drive.google.com/file/d/1example_emm_u1', type: 'pdf' },
          { title: 'Thermodynamics Basics', url: 'https://drive.google.com/file/d/1example_emm_u2', type: 'pdf' },
        ],
        pyqs: [
          { title: 'Sessional 1 & 2 — 2024', url: 'https://drive.google.com/file/d/1example_emm_pyq24', type: 'pdf' },
          { title: 'End Semester 2023', url: 'https://drive.google.com/file/d/1example_emm_pyq23', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Engineering Mechanics Full Course', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'NPTEL', thumbnailId: 'dQw4w9WgXcQ' },
        ],
      },
      {
        id: 'data-visualization',
        name: 'Data Visualization',
        shortName: 'Data Viz',
        emoji: '📈',
        code: 'CS-102',
        description: 'Charts, data storytelling, and visual analytics tools.',
        resourceCount: 19,
        studyMaterials: [
          { title: 'Data Visualization Using Python', url: 'https://drive.google.com/file/d/1example_dv_notes', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_dv_pyq24', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Data Visualization with Python', url: 'https://youtube.com/watch?v=a9UrKTVEeZA', channelName: 'Corey Schafer', thumbnailId: 'a9UrKTVEeZA' },
        ],
      },
      {
        id: 'fundamentals-data-structures',
        name: 'Fundamentals of Data Structures',
        shortName: 'Data Structures',
        emoji: '🗃️',
        code: 'CS-103',
        description: 'Arrays, linked lists, stacks, queues, trees, and graphs.',
        resourceCount: 28,
        studyMaterials: [
          { title: 'Complete DSA Notes', url: 'https://drive.google.com/file/d/1example_fds_notes', type: 'pdf' },
          { title: 'Algorithm Complexity Guide', url: 'https://drive.google.com/file/d/1example_fds_algo', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_fds_pyq24', type: 'pdf' },
          { title: 'Sessional 2 — 2023', url: 'https://drive.google.com/file/d/1example_fds_pyq23', type: 'pdf' },
        ],
        ytResources: [
          { title: 'DSA in C++ Complete Course', url: 'https://youtube.com/watch?v=8hly31xKli0', channelName: 'freeCodeCamp', thumbnailId: '8hly31xKli0' },
        ],
      },
      {
        id: 'electrical-technology',
        name: 'Electrical Technology',
        shortName: 'Elec. Tech',
        emoji: '⚡',
        code: 'EE-101',
        description: 'Circuits, electromagnetism, and power systems fundamentals.',
        resourceCount: 26,
        studyMaterials: [
          { title: 'Electrical Technology Notes', url: 'https://drive.google.com/file/d/1example_et_notes', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_et_pyq24', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Electrical Technology Full Course', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'NPTEL', thumbnailId: 'dQw4w9WgXcQ' },
        ],
      },
      {
        id: 'applied-mathematics-1',
        name: 'Applied Mathematics 1',
        shortName: 'App. Maths 1',
        emoji: '🔢',
        code: 'MA-103',
        description: 'Calculus, sequences, series, and analytical geometry.',
        resourceCount: 33,
        studyMaterials: [
          { title: 'Applied Maths 1 — All Units', url: 'https://drive.google.com/file/d/1example_am1_notes', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_am1_pyq24', type: 'pdf' },
          { title: 'End Semester 2023', url: 'https://drive.google.com/file/d/1example_am1_pyq23', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Applied Mathematics for Engineers', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'NPTEL', thumbnailId: 'dQw4w9WgXcQ' },
        ],
      },
    ],
  },
  {
    id: 'chemistry-cycle',
    name: 'Chemistry Cycle',
    emoji: '🧪',
    color: '#0891b2',
    gradient: 'from-cyan-500 to-teal-600',
    description: 'Eng. Chemistry, Basic Mechanical, Calculus, Graphics, Electronics, and Manufacturing Process.',
    subjectPreview: '10 Subjects',
    subjects: [
      {
        id: 'basic-mechanical-engineering',
        name: 'Basic Mechanical Engineering',
        shortName: 'Basic Mechanical',
        emoji: '🔩',
        code: 'ME-102',
        description: 'Mechanics, thermodynamics, and machine drawing basics.',
        resourceCount: 29,
        studyMaterials: [
          { title: 'Basic ME — Complete Notes', url: 'https://drive.google.com/file/d/1example_bme_notes', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_bme_pyq24', type: 'pdf' },
          { title: 'End Semester 2023', url: 'https://drive.google.com/file/d/1example_bme_pyq23', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Basic Mechanical Engineering', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'NPTEL', thumbnailId: 'dQw4w9WgXcQ' },
        ],
      },
      {
        id: 'calculus-matrices',
        name: 'Calculus and Matrices',
        shortName: 'Calculus & Matrices',
        emoji: '∫',
        code: 'MA-104',
        description: 'Integral calculus, matrix algebra, and linear transformations.',
        resourceCount: 34,
        studyMaterials: [
          { title: 'Calculus & Matrices — Full Notes', url: 'https://drive.google.com/file/d/1example_cm2_notes', type: 'pdf' },
          { title: 'Practice Problems Set', url: 'https://drive.google.com/file/d/1example_cm2_problems', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_cm2_pyq24', type: 'pdf' },
          { title: 'End Semester 2023', url: 'https://drive.google.com/file/d/1example_cm2_pyq23', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Calculus Full Course — MIT', url: 'https://youtube.com/watch?v=HfACrKJ_Y2w', channelName: 'MIT OpenCourseWare', thumbnailId: 'HfACrKJ_Y2w' },
        ],
      },
      {
        id: 'communication-skills',
        name: 'Communication Skills',
        shortName: 'Comm. Skills',
        emoji: '🗣️',
        code: 'HS-102',
        description: 'Technical writing, presentation, and professional English.',
        resourceCount: 12,
        studyMaterials: [
          { title: 'Communication Skills Notes', url: 'https://drive.google.com/file/d/1example_cs_notes', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2023', url: 'https://drive.google.com/file/d/1example_cs_pyq23', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Communication Skills for Engineers', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'Lecture Hub', thumbnailId: 'dQw4w9WgXcQ' },
        ],
      },
      {
        id: 'digital-systems',
        name: 'Digital Systems',
        shortName: 'Digital Systems',
        emoji: '🔲',
        code: 'EC-101',
        description: 'Boolean algebra, logic gates, flip-flops, and digital circuits.',
        resourceCount: 41,
        studyMaterials: [
          { title: 'Digital Systems — Full Notes', url: 'https://drive.google.com/file/d/1example_ds_notes', type: 'pdf' },
          { title: 'Boolean Algebra Practice', url: 'https://drive.google.com/file/d/1example_ds_bool', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_ds_pyq24', type: 'pdf' },
          { title: 'End Semester 2023', url: 'https://drive.google.com/file/d/1example_ds_pyq23', type: 'pdf' },
          { title: 'Sessional 2 — 2023', url: 'https://drive.google.com/file/d/1example_ds_pyq23s2', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Digital Systems Full Course', url: 'https://youtube.com/watch?v=M0mx8S05v60', channelName: 'Neso Academy', thumbnailId: 'M0mx8S05v60' },
        ],
      },
      {
        id: 'engineering-graphics',
        name: 'Engineering Graphics',
        shortName: 'Eng. Graphics',
        emoji: '📏',
        code: 'ME-103',
        description: 'Technical drawing, CAD, and engineering visualization.',
        resourceCount: 21,
        studyMaterials: [
          { title: 'Engineering Graphics Notes', url: 'https://drive.google.com/file/d/1example_eg_notes', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_eg_pyq24', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Engineering Drawing Full Playlist', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'Drawing Academy', thumbnailId: 'dQw4w9WgXcQ' },
        ],
      },
      {
        id: 'electronics-circuits',
        name: 'Electronics Circuits',
        shortName: 'Electronics',
        emoji: '🔋',
        code: 'EC-102',
        description: 'Diodes, transistors, amplifiers, and basic analog circuits.',
        resourceCount: 35,
        studyMaterials: [
          { title: 'Electronics Circuits — Full Notes', url: 'https://drive.google.com/file/d/1example_ec_notes', type: 'pdf' },
          { title: 'Circuit Analysis Problems', url: 'https://drive.google.com/file/d/1example_ec_prob', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_ec_pyq24', type: 'pdf' },
          { title: 'End Semester 2023', url: 'https://drive.google.com/file/d/1example_ec_pyq23', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Electronics Engineering Full Course', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'Neso Academy', thumbnailId: 'dQw4w9WgXcQ' },
        ],
      },
      {
        id: 'engineering-chemistry',
        name: 'Engineering Chemistry',
        shortName: 'Eng. Chemistry',
        emoji: '⚗️',
        code: 'CH-101',
        description: 'Electrochemistry, polymers, corrosion, and spectroscopy.',
        resourceCount: 30,
        studyMaterials: [
          { title: 'Engineering Chemistry — All Units', url: 'https://drive.google.com/file/d/1example_ech_notes', type: 'pdf' },
          { title: 'Important Numericals Guide', url: 'https://drive.google.com/file/d/1example_ech_num', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_ech_pyq24', type: 'pdf' },
          { title: 'End Semester 2023', url: 'https://drive.google.com/file/d/1example_ech_pyq23', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Engineering Chemistry — NPTEL', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'NPTEL', thumbnailId: 'dQw4w9WgXcQ' },
        ],
      },
      {
        id: 'manufacturing-process',
        name: 'Manufacturing Process',
        shortName: 'Mfg. Process',
        emoji: '🏭',
        code: 'ME-104',
        description: 'Casting, welding, machining, and production engineering.',
        resourceCount: 25,
        studyMaterials: [
          { title: 'Manufacturing Process Notes', url: 'https://drive.google.com/file/d/1example_mp_notes', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_mp_pyq24', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Manufacturing Processes Full Course', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'NPTEL', thumbnailId: 'dQw4w9WgXcQ' },
        ],
      },
      {
        id: 'problem-solving-computers',
        name: 'Problem Solving Using Computers',
        shortName: 'Prob. Solving',
        emoji: '🖥️',
        code: 'CS-104',
        description: 'Algorithms, programming logic, and computational thinking.',
        resourceCount: 32,
        studyMaterials: [
          { title: 'PSUC / Problem Solving Notes', url: 'https://drive.google.com/file/d/1example_psc_notes', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2023', url: 'https://drive.google.com/file/d/1example_psc_pyq23', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Problem Solving Techniques', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'CS50', thumbnailId: 'dQw4w9WgXcQ' },
        ],
      },
      {
        id: 'universal-human-values',
        name: 'Universal Human Values',
        shortName: 'UHV',
        emoji: '🌍',
        code: 'HS-103',
        description: 'Ethics, human values, and professional responsibility.',
        resourceCount: 14,
        studyMaterials: [
          { title: 'UHV — Complete Notes', url: 'https://drive.google.com/file/d/1example_uhv_notes', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2023', url: 'https://drive.google.com/file/d/1example_uhv_pyq23', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Universal Human Values Lectures', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'NPTEL', thumbnailId: 'dQw4w9WgXcQ' },
        ],
      },
    ],
  },
];

// ────────────────────────────────────────────────────────────
// BRANCHES (Year 2–4)
// ────────────────────────────────────────────────────────────

export const branches: Branch[] = [
  {
    id: 'aiml',
    name: 'Artificial Intelligence & ML',
    shortName: 'AIML',
    emoji: '🤖',
    icon: 'Brain',
    gradient: 'from-purple-500 to-violet-600',
    color: '#7c3aed',
    description: 'Intelligence systems & Neural Nets',
    subjects: [
      {
        id: 'aiml-ase',
        name: 'Agile Software Engineering',
        shortName: 'Agile SE',
        emoji: '🔄',
        code: 'AI-201',
        description: 'Agile software development frameworks, methodologies, and project management.',
        resourceCount: 15,
        studyMaterials: [{ title: 'Agile Methodologies Notes', url: 'https://drive.google.com/file/d/aiml_ase_notes', type: 'pdf' }],
        pyqs: [{ title: 'End Semester 2024', url: 'https://drive.google.com/file/d/aiml_ase_pyq24', type: 'pdf' }],
        ytResources: [{ title: 'Agile Software Development Lectures', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'NPTEL', thumbnailId: 'dQw4w9WgXcQ' }]
      },
      {
        id: 'aiml-cc',
        name: 'Cloud Computing',
        shortName: 'Cloud',
        emoji: '☁️',
        code: 'AI-202',
        description: 'Virtualization, deployment models, SaaS, PaaS, IaaS, and cloud architecture.',
        resourceCount: 18,
        studyMaterials: [{ title: 'Cloud Models and Virtualization', url: 'https://drive.google.com/file/d/aiml_cc_notes', type: 'pdf' }],
        pyqs: [{ title: 'Sessional 1 2024', url: 'https://drive.google.com/file/d/aiml_cc_pyq24', type: 'pdf' }],
        ytResources: [{ title: 'Cloud Computing Playlist', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'Gate Smashers', thumbnailId: 'dQw4w9WgXcQ' }]
      },
      {
        id: 'aiml-coa',
        name: 'Computer Organization & Architecture',
        shortName: 'COA',
        emoji: '💾',
        code: 'AI-203',
        description: 'Processor organization, memory hierarchies, pipelining, and instruction sets.',
        resourceCount: 20,
        studyMaterials: [{ title: 'COA Complete Lecture Notes', url: 'https://drive.google.com/file/d/aiml_coa_notes', type: 'pdf' }],
        pyqs: [{ title: 'Mid Semester 2024', url: 'https://drive.google.com/file/d/aiml_coa_pyq24', type: 'pdf' }],
        ytResources: [{ title: 'COA Playlist — Neso Academy', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'Neso Academy', thumbnailId: 'dQw4w9WgXcQ' }]
      },
      {
        id: 'aiml-daa',
        name: 'Design and Analysis of Algorithms',
        shortName: 'DAA',
        emoji: '🧮',
        code: 'AI-204',
        description: 'Algorithm complexity, sorting, search trees, and dynamic programming.',
        resourceCount: 22,
        studyMaterials: [{ title: 'DAA Sorting & Search Guides', url: 'https://drive.google.com/file/d/aiml_daa_notes', type: 'pdf' }],
        pyqs: [{ title: 'End Semester 2024', url: 'https://drive.google.com/file/d/aiml_daa_pyq24', type: 'pdf' }],
        ytResources: [{ title: 'DAA Gate Preparation', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'Gate Smashers', thumbnailId: 'dQw4w9WgXcQ' }]
      },
      {
        id: 'aiml-dsa',
        name: 'Data Structures and Algorithms',
        shortName: 'DSA',
        emoji: '🧬',
        code: 'AI-205',
        description: 'Arrays, lists, stacks, queues, trees, graphs, and basic traversals.',
        resourceCount: 30,
        studyMaterials: [{ title: 'Complete Data Structures Booklet', url: 'https://drive.google.com/file/d/aiml_dsa_notes', type: 'pdf' }],
        pyqs: [{ title: 'End Semester 2023', url: 'https://drive.google.com/file/d/aiml_dsa_pyq23', type: 'pdf' }],
        ytResources: [{ title: 'DSA Tutorials', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'freeCodeCamp', thumbnailId: 'dQw4w9WgXcQ' }]
      },
      {
        id: 'aiml-eco',
        name: 'Economics',
        shortName: 'Economics',
        emoji: '📈',
        code: 'HS-201',
        description: 'Macroeconomics, microeconomics, and financial modeling for business systems.',
        resourceCount: 12,
        studyMaterials: [{ title: 'Engineering Economics Notes', url: 'https://drive.google.com/file/d/aiml_eco_notes', type: 'pdf' }],
        pyqs: [{ title: 'Sessional 1 2024', url: 'https://drive.google.com/file/d/aiml_eco_pyq24', type: 'pdf' }],
        ytResources: [{ title: 'Economics for Managers', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'NPTEL', thumbnailId: 'dQw4w9WgXcQ' }]
      },
      {
        id: 'aiml-mot',
        name: 'Management & Organizational Theory',
        shortName: 'MOT',
        emoji: '🏢',
        code: 'HS-202',
        description: 'Organizational structures, motivation models, and leadership theories.',
        resourceCount: 10,
        studyMaterials: [{ title: 'MOT Management Notes', url: 'https://drive.google.com/file/d/aiml_mot_notes', type: 'pdf' }],
        pyqs: [{ title: 'End Semester 2023', url: 'https://drive.google.com/file/d/aiml_mot_pyq23', type: 'pdf' }],
        ytResources: [{ title: 'Management & OB Lectures', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'NPTEL', thumbnailId: 'dQw4w9WgXcQ' }]
      },
      {
        id: 'aiml-oops',
        name: 'Object Oriented Programming Systems',
        shortName: 'OOPS',
        emoji: '⚙️',
        code: 'AI-206',
        description: 'Inheritance, polymorphism, encapsulation, and classes in C++/Java.',
        resourceCount: 25,
        studyMaterials: [{ title: 'OOPS Concepts in C++', url: 'https://drive.google.com/file/d/aiml_oops_notes', type: 'pdf' }],
        pyqs: [{ title: 'End Semester 2024', url: 'https://drive.google.com/file/d/aiml_oops_pyq24', type: 'pdf' }],
        ytResources: [{ title: 'OOPS Java Series', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'Kunals Classroom', thumbnailId: 'dQw4w9WgXcQ' }]
      },
      {
        id: 'aiml-os',
        name: 'Operating Systems',
        shortName: 'OS',
        emoji: '🔧',
        code: 'AI-207',
        description: 'Process synchronization, deadlock, scheduling, and file systems.',
        resourceCount: 24,
        studyMaterials: [{ title: 'Operating Systems Complete Guide', url: 'https://drive.google.com/file/d/aiml_os_notes', type: 'pdf' }],
        pyqs: [{ title: 'End Semester 2023', url: 'https://drive.google.com/file/d/aiml_os_pyq23', type: 'pdf' }],
        ytResources: [{ title: 'OS Gate Crash Course', url: 'https://youtube.com/watch?v=mXw9ruZaxzQ', channelName: 'Neso Academy', thumbnailId: 'mXw9ruZaxzQ' }]
      },
      {
        id: 'aiml-pai',
        name: 'Principles of Artificial Intelligence',
        shortName: 'PAI',
        emoji: '🧠',
        code: 'AI-208',
        description: 'State space search, heuristics, knowledge representation, and game playing.',
        resourceCount: 19,
        studyMaterials: [{ title: 'PAI Search Algorithms Notes', url: 'https://drive.google.com/file/d/aiml_pai_notes', type: 'pdf' }],
        pyqs: [{ title: 'Sessional 2 2024', url: 'https://drive.google.com/file/d/aiml_pai_pyq24', type: 'pdf' }],
        ytResources: [{ title: 'AI Foundations', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'NPTEL', thumbnailId: 'dQw4w9WgXcQ' }]
      },
      {
        id: 'aiml-rdbms',
        name: 'Relational Database Management Systems',
        shortName: 'RDBMS',
        emoji: '📂',
        code: 'AI-209',
        description: 'SQL, normalization, transaction processing, and concurrency control.',
        resourceCount: 22,
        studyMaterials: [{ title: 'RDBMS SQL normalizations', url: 'https://drive.google.com/file/d/aiml_rdbms_notes', type: 'pdf' }],
        pyqs: [{ title: 'End Semester 2024', url: 'https://drive.google.com/file/d/aiml_rdbms_pyq24', type: 'pdf' }],
        ytResources: [{ title: 'RDBMS Playlists', url: 'https://youtube.com/watch?v=kBdlM6hNDAE', channelName: 'Gate Smashers', thumbnailId: 'kBdlM6hNDAE' }]
      },
      {
        id: 'aiml-sepm',
        name: 'Software Engineering & Project Mgmt',
        shortName: 'SEPM',
        emoji: '📈',
        code: 'AI-210',
        description: 'Systems engineering, requirements gathering, and project scheduling.',
        resourceCount: 14,
        studyMaterials: [{ title: 'SEPM SDLC and Charts', url: 'https://drive.google.com/file/d/aiml_sepm_notes', type: 'pdf' }],
        pyqs: [{ title: 'End Semester 2023', url: 'https://drive.google.com/file/d/aiml_sepm_pyq23', type: 'pdf' }],
        ytResources: [{ title: 'SEPM tutorials', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'NPTEL', thumbnailId: 'dQw4w9WgXcQ' }]
      },
      {
        id: 'aiml-stats',
        name: 'Statistics',
        shortName: 'Stats',
        emoji: '📊',
        code: 'MA-201',
        description: 'Probability distributions, estimation, and hypothesis testing.',
        resourceCount: 16,
        studyMaterials: [{ title: 'Probability & Distributions Book', url: 'https://drive.google.com/file/d/aiml_stats_notes', type: 'pdf' }],
        pyqs: [{ title: 'End Semester 2024', url: 'https://drive.google.com/file/d/aiml_stats_pyq24', type: 'pdf' }],
        ytResources: [{ title: 'Probability and Stats for Engineers', url: 'https://youtube.com/watch?v=xxpc-HPKN28', channelName: 'StatQuest', thumbnailId: 'xxpc-HPKN28' }]
      },
      {
        id: 'aiml-acd',
        name: 'Automata and Compiler Design',
        shortName: 'ACD',
        emoji: '⚙️',
        code: 'AI-303',
        description: 'Finite automata, lexing, parsing, code generation, and optimizations.',
        resourceCount: 20,
        studyMaterials: [{ title: 'ACD Compiler Design Notes', url: 'https://drive.google.com/file/d/aiml_acd_notes', type: 'pdf' }],
        pyqs: [{ title: 'End Semester 2024', url: 'https://drive.google.com/file/d/aiml_acd_pyq24', type: 'pdf' }],
        ytResources: [{ title: 'Compiler Construction Series', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'Gate Smashers', thumbnailId: 'dQw4w9WgXcQ' }]
      },
      {
        id: 'aiml-cn',
        name: 'Computer Networks',
        shortName: 'CN',
        emoji: '🌐',
        code: 'AI-304',
        description: 'TCP/IP layers, routing algorithms, socket programming, and protocols.',
        resourceCount: 25,
        studyMaterials: [{ title: 'Computer Networks Lecture Notes', url: 'https://drive.google.com/file/d/aiml_cn_notes', type: 'pdf' }],
        pyqs: [{ title: 'End Semester 2024', url: 'https://drive.google.com/file/d/aiml_cn_pyq24', type: 'pdf' }],
        ytResources: [{ title: 'CN Full Series', url: 'https://youtube.com/watch?v=IPvYjXCsTg8', channelName: 'Gate Smashers', thumbnailId: 'IPvYjXCsTg8' }]
      },
      {
        id: 'aiml-deep-learning',
        name: 'Deep Learning',
        shortName: 'DL',
        emoji: '🔮',
        code: 'AI-302',
        description: 'Neural networks, CNNs, RNNs, and transformers.',
        resourceCount: 38,
        studyMaterials: [
          { title: 'Deep Learning — Complete Guide', url: 'https://drive.google.com/file/d/1example_dl_notes', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_dl_pyq24', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Deep Learning Specialization', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'DeepLearning.AI', thumbnailId: 'dQw4w9WgXcQ' },
        ],
      },
      {
        id: 'aiml-machine-learning',
        name: 'Machine Learning',
        shortName: 'ML',
        emoji: '🧠',
        code: 'AI-301',
        description: 'Supervised, unsupervised, and reinforcement learning algorithms.',
        resourceCount: 45,
        studyMaterials: [
          { title: 'ML Complete Notes — Andrew Ng Style', url: 'https://drive.google.com/file/d/1example_ml_notes', type: 'pdf' },
          { title: 'Algorithm Reference Sheet', url: 'https://drive.google.com/file/d/1example_ml_ref', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_ml_pyq24', type: 'pdf' },
          { title: 'End Semester 2023', url: 'https://drive.google.com/file/d/1example_ml_pyq23', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Machine Learning Full Course — Stanford', url: 'https://youtube.com/watch?v=jGwO_UgTS7I', channelName: 'Stanford', thumbnailId: 'jGwO_UgTS7I' },
        ],
      },
      {
        id: 'aiml-mte26',
        name: 'Mid-Term 26 PYQs',
        shortName: 'MTE 26',
        emoji: '📑',
        code: 'AI-305',
        description: 'Solved midterm paper collections for AI and ML disciplines.',
        resourceCount: 8,
        studyMaterials: [{ title: 'Mid-Term 2026 Complete Solved Set', url: 'https://drive.google.com/file/d/aiml_mte26_notes', type: 'pdf' }],
        pyqs: [{ title: 'MTE 2026 Question Sheets', url: 'https://drive.google.com/file/d/aiml_mte26_pyq', type: 'pdf' }],
        ytResources: []
      },
      {
        id: 'aiml-rec',
        name: 'Recommender Systems',
        shortName: 'Rec Systems',
        emoji: '📊',
        code: 'AI-306',
        description: 'Collaborative filtering, content-based recommendation, and matrix factorization.',
        resourceCount: 16,
        studyMaterials: [{ title: 'Matrix Factorization Reference Guide', url: 'https://drive.google.com/file/d/aiml_rec_notes', type: 'pdf' }],
        pyqs: [{ title: 'End Semester 2024', url: 'https://drive.google.com/file/d/aiml_rec_pyq24', type: 'pdf' }],
        ytResources: [{ title: 'Recommender Systems Course', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'Coursera', thumbnailId: 'dQw4w9WgXcQ' }]
      },
      {
        id: 'aiml-webtech',
        name: 'Web Technologies',
        shortName: 'Web Tech',
        emoji: '💻',
        code: 'AI-307',
        description: 'HTML, CSS, JavaScript, node.js, and client-server architectures.',
        resourceCount: 22,
        studyMaterials: [{ title: 'Fullstack JavaScript Booklet', url: 'https://drive.google.com/file/d/aiml_webtech_notes', type: 'pdf' }],
        pyqs: [{ title: 'End Semester 2024', url: 'https://drive.google.com/file/d/aiml_webtech_pyq24', type: 'pdf' }],
        ytResources: [{ title: 'Web Development Bootcamp', url: 'https://youtube.com/watch?v=ysEN5RaKOlA', channelName: 'freeCodeCamp', thumbnailId: 'ysEN5RaKOlA' }]
      }
    ],
  },
  {
    id: 'cse',
    name: 'Computer Science Engineering',
    shortName: 'CSE',
    emoji: '🖥️',
    icon: 'Code',
    gradient: 'from-blue-500 to-indigo-600',
    color: '#2563eb',
    description: 'Software, OS & Computation',
    subjects: [
      {
        id: 'cse-os',
        name: 'Operating Systems',
        shortName: 'OS',
        emoji: '⚙️',
        code: 'CS-301',
        description: 'Process management, memory, file systems, and scheduling.',
        resourceCount: 52,
        studyMaterials: [
          { title: 'OS Complete Notes — Galvin', url: 'https://drive.google.com/file/d/1example_os_notes', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_os_pyq24', type: 'pdf' },
          { title: 'End Semester 2023', url: 'https://drive.google.com/file/d/1example_os_pyq23', type: 'pdf' },
        ],
        ytResources: [
          { title: 'OS Full Course — Neso Academy', url: 'https://youtube.com/watch?v=mXw9ruZaxzQ', channelName: 'Neso Academy', thumbnailId: 'mXw9ruZaxzQ' },
        ],
      },
      {
        id: 'cse-dbms',
        name: 'Database Management Systems',
        shortName: 'DBMS',
        emoji: '🗄️',
        code: 'CS-302',
        description: 'Relational models, SQL, transactions, and normalization.',
        resourceCount: 44,
        studyMaterials: [
          { title: 'DBMS Full Notes', url: 'https://drive.google.com/file/d/1example_dbms_notes', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_dbms_pyq24', type: 'pdf' },
        ],
        ytResources: [
          { title: 'DBMS Full Course', url: 'https://youtube.com/watch?v=kBdlM6hNDAE', channelName: 'Gate Smashers', thumbnailId: 'kBdlM6hNDAE' },
        ],
      },
    ],
  },
  {
    id: 'cce',
    name: 'Computer & Communication Engg',
    shortName: 'CCE',
    emoji: '💻',
    icon: 'Wifi',
    gradient: 'from-teal-500 to-cyan-600',
    color: '#0891b2',
    description: 'Networks & Communication',
    subjects: [
      {
        id: 'cce-dccn',
        name: 'Data Communication & Computer Networks',
        shortName: 'Data Com & CN',
        emoji: '🌐',
        code: 'CC-201',
        description: 'Data transmission, encoding, physical layer protocols, and routing.',
        resourceCount: 22,
        studyMaterials: [{ title: 'DCCN Architecture Notes', url: 'https://drive.google.com/file/d/cce_dccn_notes', type: 'pdf' }],
        pyqs: [{ title: 'End Semester 2024', url: 'https://drive.google.com/file/d/cce_dccn_pyq24', type: 'pdf' }],
        ytResources: [{ title: 'Data Communication Playlists', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'Gate Smashers', thumbnailId: 'dQw4w9WgXcQ' }]
      },
      {
        id: 'cce-ddca',
        name: 'Digital Design & Computer Architecture',
        shortName: 'Digital Design',
        emoji: '🔌',
        code: 'CC-202',
        description: 'Logic gates, combinational logic, micro-architecture, and HDL.',
        resourceCount: 20,
        studyMaterials: [{ title: 'DDCA Gates and Registers Guide', url: 'https://drive.google.com/file/d/cce_ddca_notes', type: 'pdf' }],
        pyqs: [{ title: 'End Semester 2023', url: 'https://drive.google.com/file/d/cce_ddca_pyq23', type: 'pdf' }],
        ytResources: [{ title: 'Digital Design Basics', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'Neso Academy', thumbnailId: 'dQw4w9WgXcQ' }]
      },
      {
        id: 'cce-dsa',
        name: 'Data Structures and Algorithms',
        shortName: 'DSA',
        emoji: '🗂️',
        code: 'CC-203',
        description: 'Basic lists, hashing, search trees, and runtime complexities.',
        resourceCount: 24,
        studyMaterials: [{ title: 'DSA Complete Notes', url: 'https://drive.google.com/file/d/cce_dsa_notes', type: 'pdf' }],
        pyqs: [{ title: 'End Semester 2024', url: 'https://drive.google.com/file/d/cce_dsa_pyq24', type: 'pdf' }],
        ytResources: []
      },
      {
        id: 'cce-eco',
        name: 'Economics',
        shortName: 'Eco',
        emoji: '📊',
        code: 'HS-203',
        description: 'Engineering economics, inflation, cost analysis, and budgeting.',
        resourceCount: 12,
        studyMaterials: [{ title: 'Engineering Economics Notes', url: 'https://drive.google.com/file/d/cce_eco_notes', type: 'pdf' }],
        pyqs: [],
        ytResources: []
      },
      {
        id: 'cce-mot',
        name: 'Management & Organizational Theory',
        shortName: 'MOT',
        emoji: '🏢',
        code: 'HS-204',
        description: 'Leadership behavior, group dynamics, and conflict management.',
        resourceCount: 14,
        studyMaterials: [{ title: 'MOT OB Notes', url: 'https://drive.google.com/file/d/cce_mot_notes', type: 'pdf' }],
        pyqs: [],
        ytResources: []
      },
      {
        id: 'cce-oops',
        name: 'Object Oriented Programming',
        shortName: 'OOPS',
        emoji: '⚙️',
        code: 'CC-204',
        description: 'Classes, polymorphism, exception handling, and interfaces.',
        resourceCount: 18,
        studyMaterials: [{ title: 'OOPS Handouts', url: 'https://drive.google.com/file/d/cce_oops_notes', type: 'pdf' }],
        pyqs: [],
        ytResources: []
      },
      {
        id: 'cce-os',
        name: 'Operating Systems',
        shortName: 'OS',
        emoji: '💻',
        code: 'CC-205',
        description: 'Memory allocation, scheduling, storage design, and shell scripting.',
        resourceCount: 22,
        studyMaterials: [{ title: 'OS Galvin Notes', url: 'https://drive.google.com/file/d/cce_os_notes', type: 'pdf' }],
        pyqs: [],
        ytResources: []
      },
      {
        id: 'cce-rdbms',
        name: 'Relational Database Management Systems',
        shortName: 'RDBMS',
        emoji: '📂',
        code: 'CC-206',
        description: 'Entity-relationship models, schema design, and SQL fundamentals.',
        resourceCount: 19,
        studyMaterials: [{ title: 'RDBMS Schema & SQL Notes', url: 'https://drive.google.com/file/d/cce_rdbms_notes', type: 'pdf' }],
        pyqs: [],
        ytResources: []
      },
      {
        id: 'cce-stats',
        name: 'Statistics',
        shortName: 'Stats',
        emoji: '📈',
        code: 'MA-202',
        description: 'Random variables, distributions, and variance analysis.',
        resourceCount: 15,
        studyMaterials: [{ title: 'Stats and Probability Notes', url: 'https://drive.google.com/file/d/cce_stats_notes', type: 'pdf' }],
        pyqs: [],
        ytResources: []
      }
    ],
  },
  {
    id: 'ece',
    name: 'Electronics & Communication',
    shortName: 'ECE',
    emoji: '⚡',
    icon: 'Zap',
    gradient: 'from-yellow-500 to-orange-500',
    color: '#d97706',
    description: 'Circuits & Embedded Systems',
    subjects: [
      {
        id: 'ece-signals-systems',
        name: 'Signals & Systems',
        shortName: 'Signals & Systems',
        emoji: '📡',
        code: 'EC-301',
        description: 'Continuous/discrete time signals, Fourier transforms, and Z-transforms.',
        resourceCount: 40,
        studyMaterials: [
          { title: 'Signals & Systems Full Notes', url: 'https://drive.google.com/file/d/1example_ss_notes', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_ss_pyq24', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Signals & Systems Full Course', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'Neso Academy', thumbnailId: 'dQw4w9WgXcQ' },
        ],
      },
    ],
  },
  {
    id: 'it',
    name: 'Information Technology',
    shortName: 'IT',
    emoji: '💾',
    icon: 'Database',
    gradient: 'from-emerald-500 to-green-600',
    color: '#059669',
    description: 'Software systems & Web Tech',
    subjects: [
      {
        id: 'it-web-development',
        name: 'Web Technologies',
        shortName: 'Web Dev',
        emoji: '🌍',
        code: 'IT-301',
        description: 'HTML, CSS, JavaScript, and full-stack development fundamentals.',
        resourceCount: 36,
        studyMaterials: [
          { title: 'Web Technologies — Full Notes', url: 'https://drive.google.com/file/d/1example_wt_notes', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_wt_pyq24', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Web Development Full Course', url: 'https://youtube.com/watch?v=ysEN5RaKOlA', channelName: 'freeCodeCamp', thumbnailId: 'ysEN5RaKOlA' },
        ],
      },
    ],
  },
  {
    id: 'cyber-security',
    name: 'Cyber Security',
    shortName: 'Cyber Security',
    emoji: '🛡️',
    icon: 'Shield',
    gradient: 'from-red-500 to-rose-600',
    color: '#dc2626',
    description: 'Security, forensics & ethical hacking',
    subjects: [
      {
        id: 'cs-network-security',
        name: 'Network Security',
        shortName: 'Network Security',
        emoji: '🔐',
        code: 'CY-301',
        description: 'Cryptography, firewalls, intrusion detection, and protocols.',
        resourceCount: 33,
        studyMaterials: [
          { title: 'Network Security Full Notes', url: 'https://drive.google.com/file/d/1example_ns_notes', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_ns_pyq24', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Cybersecurity Full Course', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'freeCodeCamp', thumbnailId: 'dQw4w9WgXcQ' },
        ],
      },
    ],
  },
  {
    id: 'iot',
    name: 'Internet of Things',
    shortName: 'IoT',
    emoji: '🌐',
    icon: 'Rss',
    gradient: 'from-sky-500 to-blue-600',
    color: '#0284c7',
    description: 'Embedded systems & smart devices',
    subjects: [
      {
        id: 'iot-embedded',
        name: 'Embedded Systems',
        shortName: 'Embedded',
        emoji: '🔌',
        code: 'IO-301',
        description: 'Microcontrollers, sensors, and real-time operating systems.',
        resourceCount: 27,
        studyMaterials: [
          { title: 'Embedded Systems Notes', url: 'https://drive.google.com/file/d/1example_emb_notes', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_emb_pyq24', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Embedded Systems Full Course', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'NPTEL', thumbnailId: 'dQw4w9WgXcQ' },
        ],
      },
    ],
  },
  {
    id: 'mechanical',
    name: 'Mechanical Engineering',
    shortName: 'MECH',
    emoji: '⚙️',
    icon: 'Settings',
    gradient: 'from-slate-500 to-zinc-600',
    color: '#475569',
    description: 'Thermodynamics & Machine Design',
    subjects: [
      {
        id: 'mech-thermo',
        name: 'Thermodynamics',
        shortName: 'Thermodynamics',
        emoji: '🌡️',
        code: 'ME-301',
        description: 'Heat transfer, engines, refrigeration, and cycles.',
        resourceCount: 39,
        studyMaterials: [
          { title: 'Thermodynamics Full Notes', url: 'https://drive.google.com/file/d/1example_thermo_notes', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_thermo_pyq24', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Thermodynamics Full Course', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'NPTEL', thumbnailId: 'dQw4w9WgXcQ' },
        ],
      },
    ],
  },
  {
    id: 'mechatronics',
    name: 'Mechatronics',
    shortName: 'MECT',
    emoji: '🔧',
    icon: 'Cpu',
    gradient: 'from-amber-500 to-yellow-600',
    color: '#d97706',
    description: 'Robotics, automation & control',
    subjects: [
      {
        id: 'mect-robotics',
        name: 'Robotics & Automation',
        shortName: 'Robotics',
        emoji: '🤖',
        code: 'MT-301',
        description: 'Robot kinematics, sensors, actuators, and control systems.',
        resourceCount: 31,
        studyMaterials: [
          { title: 'Robotics Full Notes', url: 'https://drive.google.com/file/d/1example_rob_notes', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_rob_pyq24', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Robotics Engineering Course', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'NPTEL', thumbnailId: 'dQw4w9WgXcQ' },
        ],
      },
    ],
  },
  {
    id: 'automobile',
    name: 'Automobile Engineering',
    shortName: 'AUTO',
    emoji: '🚗',
    icon: 'Car',
    gradient: 'from-orange-500 to-red-500',
    color: '#ea580c',
    description: 'Vehicle systems & automotive tech',
    subjects: [
      {
        id: 'auto-vehicle-dynamics',
        name: 'Vehicle Dynamics',
        shortName: 'Vehicle Dynamics',
        emoji: '🏎️',
        code: 'AU-301',
        description: 'Suspension, braking, steering, and chassis dynamics.',
        resourceCount: 22,
        studyMaterials: [
          { title: 'Vehicle Dynamics Notes', url: 'https://drive.google.com/file/d/1example_vd_notes', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_vd_pyq24', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Automobile Engineering Course', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'NPTEL', thumbnailId: 'dQw4w9WgXcQ' },
        ],
      },
    ],
  },
  {
    id: 'dse',
    name: 'Data Science Engineering',
    shortName: 'DSE',
    emoji: '📊',
    icon: 'BarChart',
    gradient: 'from-pink-500 to-rose-500',
    color: '#e11d48',
    description: 'Data analytics & statistical models',
    subjects: [
      {
        id: 'dse-statistics',
        name: 'Statistics for Data Science',
        shortName: 'Statistics',
        emoji: '📉',
        code: 'DS-301',
        description: 'Probability, hypothesis testing, regression, and distributions.',
        resourceCount: 36,
        studyMaterials: [
          { title: 'Statistics for DS — Complete Notes', url: 'https://drive.google.com/file/d/1example_stats_notes', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_stats_pyq24', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Statistics Full Course', url: 'https://youtube.com/watch?v=xxpc-HPKN28', channelName: 'StatQuest', thumbnailId: 'xxpc-HPKN28' },
        ],
      },
    ],
  },
];

// ── Non-B.Tech Courses ──
export interface NonBtechCourse {
  id: string;
  name: string;
  emoji: string;
  years: {
    year: number;
    subjects: Subject[];
  }[];
}

export const nonBtechCourses: NonBtechCourse[] = [
  {
    id: 'bba',
    name: 'BBA',
    emoji: '💼',
    years: [
      {
        year: 1,
        subjects: [
          {
            id: 'bba-pom',
            name: 'Principles of Management',
            shortName: 'POM',
            emoji: '👔',
            code: 'BB-101',
            description: 'Core concepts of planning, organizing, leading, and controlling.',
            resourceCount: 15,
            studyMaterials: [
              { title: 'POM Unit 1-4 Complete Notes', url: 'https://drive.google.com/file/d/bba_pom_notes', type: 'pdf' }
            ],
            pyqs: [
              { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/bba_pom_pyq24', type: 'pdf' }
            ],
            ytResources: [
              { title: 'Management Concepts Playlist', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'Study MBA', thumbnailId: 'dQw4w9WgXcQ' }
            ]
          },
          {
            id: 'bba-fa',
            name: 'Financial Accounting',
            shortName: 'Accounting',
            emoji: '📊',
            code: 'BB-102',
            description: 'Double-entry bookkeeping, ledger accounts, and balance sheets.',
            resourceCount: 18,
            studyMaterials: [
              { title: 'Financial Accounting Ledger Guide', url: 'https://drive.google.com/file/d/bba_fa_notes', type: 'pdf' }
            ],
            pyqs: [
              { title: 'Sessional 1 2024', url: 'https://drive.google.com/file/d/bba_fa_pyq24', type: 'pdf' }
            ],
            ytResources: [
              { title: 'Accounting for Beginners', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'Accounting Stuff', thumbnailId: 'dQw4w9WgXcQ' }
            ]
          }
        ]
      },
      {
        year: 2,
        subjects: [
          {
            id: 'bba-ob',
            name: 'Organizational Behavior',
            shortName: 'Org. Behavior',
            emoji: '👥',
            code: 'BB-201',
            description: 'Individual and group behavior in organizations, culture, and motivation.',
            resourceCount: 12,
            studyMaterials: [
              { title: 'OB Motivation & Leadership Notes', url: 'https://drive.google.com/file/d/bba_ob_notes', type: 'pdf' }
            ],
            pyqs: [
              { title: 'End Semester 2023', url: 'https://drive.google.com/file/d/bba_ob_pyq23', type: 'pdf' }
            ],
            ytResources: [
              { title: 'Organizational Behavior Lectures', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'NPTEL', thumbnailId: 'dQw4w9WgXcQ' }
            ]
          }
        ]
      },
      {
        year: 3,
        subjects: [
          {
            id: 'bba-sm',
            name: 'Strategic Management',
            shortName: 'Strategy',
            emoji: '🎯',
            code: 'BB-301',
            description: 'Formulating and implementing business strategy, SWOT, and competitive advantage.',
            resourceCount: 20,
            studyMaterials: [
              { title: 'Strategic Analysis Frameworks', url: 'https://drive.google.com/file/d/bba_sm_notes', type: 'pdf' }
            ],
            pyqs: [
              { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/bba_sm_pyq24', type: 'pdf' }
            ],
            ytResources: [
              { title: 'Business Strategy Course', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'Harvard Business', thumbnailId: 'dQw4w9WgXcQ' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'bcom',
    name: 'B.Com',
    emoji: '📈',
    years: [
      {
        year: 1,
        subjects: [
          {
            id: 'bcom-bl',
            name: 'Business Law',
            shortName: 'Bus. Law',
            emoji: '⚖️',
            code: 'BC-101',
            description: 'Contracts, sale of goods, and partnership acts.',
            resourceCount: 14,
            studyMaterials: [
              { title: 'Indian Contract Act 1872 Notes', url: 'https://drive.google.com/file/d/bcom_bl_notes', type: 'pdf' }
            ],
            pyqs: [
              { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/bcom_bl_pyq24', type: 'pdf' }
            ],
            ytResources: [
              { title: 'Business Law Tutorials', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'Law Classes', thumbnailId: 'dQw4w9WgXcQ' }
            ]
          }
        ]
      },
      {
        year: 2,
        subjects: [
          {
            id: 'bcom-ca',
            name: 'Corporate Accounting',
            shortName: 'Corp. Accounting',
            emoji: '🏢',
            code: 'BC-201',
            description: 'Issue of shares, underwriting, and liquidation statements.',
            resourceCount: 22,
            studyMaterials: [
              { title: 'Share Capital & Debentures Notes', url: 'https://drive.google.com/file/d/bcom_ca_notes', type: 'pdf' }
            ],
            pyqs: [
              { title: 'End Semester 2023', url: 'https://drive.google.com/file/d/bcom_ca_pyq23', type: 'pdf' }
            ],
            ytResources: [
              { title: 'Corporate Accounting Course', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'Commerce Academy', thumbnailId: 'dQw4w9WgXcQ' }
            ]
          }
        ]
      },
      {
        year: 3,
        subjects: [
          {
            id: 'bcom-cost',
            name: 'Cost Accounting',
            shortName: 'Costing',
            emoji: '💰',
            code: 'BC-301',
            description: 'Material cost, labor cost, overhead allocation, and process costing.',
            resourceCount: 25,
            studyMaterials: [
              { title: 'Costing Formula & Sheet Notes', url: 'https://drive.google.com/file/d/bcom_cost_notes', type: 'pdf' }
            ],
            pyqs: [
              { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/bcom_cost_pyq24', type: 'pdf' }
            ],
            ytResources: [
              { title: 'Cost Accounting for Students', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'Costing Hub', thumbnailId: 'dQw4w9WgXcQ' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'llb',
    name: 'LLB',
    emoji: '⚖️',
    years: [
      {
        year: 1,
        subjects: [
          {
            id: 'llb-con1',
            name: 'Constitutional Law I',
            shortName: 'Con Law 1',
            emoji: '📖',
            code: 'LL-101',
            description: 'Fundamental rights, directive principles, and duties.',
            resourceCount: 30,
            studyMaterials: [
              { title: 'Part III of Indian Constitution Notes', url: 'https://drive.google.com/file/d/llb_con1_notes', type: 'pdf' }
            ],
            pyqs: [
              { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/llb_con1_pyq24', type: 'pdf' }
            ],
            ytResources: [
              { title: 'Constitutional Law Playlist', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'Law Wallah', thumbnailId: 'dQw4w9WgXcQ' }
            ]
          }
        ]
      },
      {
        year: 2,
        subjects: [
          {
            id: 'llb-crim',
            name: 'Criminal Law (IPC)',
            shortName: 'IPC',
            emoji: '🚨',
            code: 'LL-201',
            description: 'General exceptions, offences against body and property under IPC.',
            resourceCount: 28,
            studyMaterials: [
              { title: 'Indian Penal Code Complete Notes', url: 'https://drive.google.com/file/d/llb_ipc_notes', type: 'pdf' }
            ],
            pyqs: [
              { title: 'End Semester 2023', url: 'https://drive.google.com/file/d/llb_ipc_pyq23', type: 'pdf' }
            ],
            ytResources: [
              { title: 'Criminal Law Basics', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'Finology Legal', thumbnailId: 'dQw4w9WgXcQ' }
            ]
          }
        ]
      },
      {
        year: 3,
        subjects: [
          {
            id: 'llb-admin',
            name: 'Administrative Law',
            shortName: 'Admin Law',
            emoji: '🏛️',
            code: 'LL-301',
            description: 'Delegated legislation, principles of natural justice, and judicial review.',
            resourceCount: 16,
            studyMaterials: [
              { title: 'Natural Justice Principles Guide', url: 'https://drive.google.com/file/d/llb_admin_notes', type: 'pdf' }
            ],
            pyqs: [
              { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/llb_admin_pyq24', type: 'pdf' }
            ],
            ytResources: [
              { title: 'Administrative Law Course', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'Legal Edge', thumbnailId: 'dQw4w9WgXcQ' }
            ]
          }
        ]
      }
    ]
  }
];

// ── Lookup Helpers ──
export function getBranchById(id: string): Branch | undefined {
  return branches.find(b => b.id === id);
}

export function getCycleById(id: string): Cycle | undefined {
  return year1Cycles.find(c => c.id === id);
}

export function getSubjectById(id: string): Subject | undefined {
  for (const cycle of year1Cycles) {
    const found = cycle.subjects.find(s => s.id === id);
    if (found) return found;
  }
  for (const branch of branches) {
    const found = branch.subjects.find(s => s.id === id);
    if (found) return found;
  }
  for (const course of nonBtechCourses) {
    for (const yr of course.years) {
      const found = yr.subjects.find(s => s.id === id);
      if (found) return found;
    }
  }
  return undefined;
}

export function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
}

// ── Shared Questions Database for Master Arena ──
export interface Question {
  id: string;
  topic: string;
  year: string;
  marks: number;
  text: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const QUESTIONS_DB: Record<string, Question[]> = {
  'engineering-physics': [
    {
      id: 'ep1', topic: 'Quantum Mechanics', year: 'End-Term 2024', marks: 6,
      text: 'Which experiment directly proves the wave nature of electrons?',
      options: ['Photoelectric Effect', 'Davisson-Germer Experiment', 'Blackbody Radiation', 'Compton Scattering'],
      correct: 1,
      explanation: 'The Davisson-Germer Experiment (1927) demonstrated electron diffraction on a Nickel crystal, confirming de Broglie\'s hypothesis.'
    },
    {
      id: 'ep2', topic: 'Laser Technology', year: 'Mid-Term 2023', marks: 4,
      text: 'What condition is necessary for laser action to occur?',
      options: ['Thermal Equilibrium', 'Population Inversion', 'High Temperature', 'Ground State Dominance'],
      correct: 1,
      explanation: 'Population inversion — having more atoms in excited state than ground state — is essential for stimulated emission to dominate.'
    },
    {
      id: 'ep3', topic: 'Wave Optics', year: 'End-Term 2023', marks: 4,
      text: 'In Young\'s double slit experiment, fringe width β is proportional to:',
      options: ['d/λD', 'λD/d', 'λd/D', 'D/λd'],
      correct: 1,
      explanation: 'Fringe width β = λD/d, where λ is wavelength, D is screen distance, and d is slit separation.'
    },
  ],
  'computational-mathematics': [
    {
      id: 'cm1', topic: 'Linear Algebra', year: 'End-Term 2024', marks: 6,
      text: 'If A is a 3×3 matrix with eigenvalues 1, 2, and -1, what is Trace(A)?',
      options: ['2', '3', '6', '-2'],
      correct: 0,
      explanation: 'Trace = sum of eigenvalues = 1 + 2 + (-1) = 2.'
    },
    {
      id: 'cm2', topic: 'Numerical Methods', year: 'Mid-Term 2024', marks: 4,
      text: 'Which iterative method has quadratic rate of convergence?',
      options: ['Bisection Method', 'Regula-Falsi Method', 'Newton-Raphson Method', 'Secant Method'],
      correct: 2,
      explanation: 'Newton-Raphson has order of convergence = 2 (quadratic), making it the fastest among standard root-finding methods.'
    },
  ],
  'psuc': [
    {
      id: 'psuc1', topic: 'Pointers & Memory', year: 'End-Term 2023', marks: 10,
      text: 'What is sizeof(char*) on a 64-bit system?',
      options: ['1', '4', '8', 'Compiler dependent'],
      correct: 2,
      explanation: 'On 64-bit systems, all pointer types are 8 bytes regardless of what they point to.'
    },
    {
      id: 'psuc2', topic: 'Data Structures', year: 'Mid-Term 2024', marks: 6,
      text: 'Which data structure follows the Last In First Out (LIFO) order?',
      options: ['Queue', 'Stack', 'Binary Search Tree', 'Singly Linked List'],
      correct: 1,
      explanation: 'A stack follows LIFO — elements are pushed and popped from the same end (top).'
    },
  ],
  'digital-systems': [
    {
      id: 'ds1', topic: 'Boolean Algebra', year: 'End-Term 2024', marks: 6,
      text: 'Simplify the expression: A + A\'B',
      options: ['A + B', 'A', 'B', 'A\'B'],
      correct: 0,
      explanation: 'By absorption law: A + A\'B = A + B. This can be verified using truth tables or Boolean algebra identities.'
    },
  ],
  'aiml-machine-learning': [
    {
      id: 'ml1', topic: 'Supervised Learning', year: 'End-Term 2024', marks: 6,
      text: 'Which algorithm minimises mean squared error for regression?',
      options: ['k-NN', 'Decision Tree', 'Linear Regression', 'SVM'],
      correct: 2,
      explanation: 'Linear Regression directly minimises the sum of squared residuals (MSE) via the ordinary least squares formulation.'
    },
    {
      id: 'ml2', topic: 'Classification', year: 'Mid-Term 2024', marks: 4,
      text: 'What does the Softmax function output?',
      options: ['A single probability', 'A probability distribution over classes', 'Binary 0 or 1', 'The maximum value'],
      correct: 1,
      explanation: 'Softmax converts a vector of real numbers into a probability distribution where all values sum to 1.'
    },
  ],
  'cse-os': [
    {
      id: 'os1', topic: 'Process Scheduling', year: 'End-Term 2024', marks: 6,
      text: 'Which scheduling algorithm can lead to starvation?',
      options: ['FCFS', 'SJF (non-preemptive)', 'Round Robin', 'HRRN'],
      correct: 1,
      explanation: 'SJF (Shortest Job First) can cause starvation for longer processes if shorter jobs keep arriving.'
    },
    {
      id: 'os2', topic: 'Memory Management', year: 'End-Term 2023', marks: 4,
      text: 'Which page replacement algorithm is known as the optimal algorithm?',
      options: ['FIFO', 'LRU', 'Optimal (Belady\'s)', 'Clock'],
      correct: 2,
      explanation: 'Belady\'s Optimal Algorithm replaces the page that won\'t be used for the longest time in the future.'
    },
  ],
  'bba-pom': [
    {
      id: 'bbapom1', topic: 'Management Process', year: 'End-Term 2024', marks: 5,
      text: 'Who is known as the Father of Scientific Management?',
      options: ['Henri Fayol', 'F.W. Taylor', 'Max Weber', 'Peter Drucker'],
      correct: 1,
      explanation: 'F.W. Taylor developed the principles of Scientific Management focusing on shop-floor efficiency.'
    },
    {
      id: 'bbapom2', topic: 'Planning', year: 'Sessional 1 2023', marks: 5,
      text: 'SWOT Analysis stands for:',
      options: ['Strengths, Weaknesses, Options, Threats', 'Strengths, Weaknesses, Opportunities, Threats', 'Smart, Wide, Open, Tested', 'Simple, Wise, Original, Timely'],
      correct: 1,
      explanation: 'SWOT stands for Strengths, Weaknesses, Opportunities, Threats.'
    }
  ],
  'bba-fa': [
    {
      id: 'bbafa1', topic: 'Accounting Basics', year: 'End-Term 2024', marks: 6,
      text: 'Which accounting equation is correct?',
      options: ['Assets = Liabilities - Equity', 'Assets = Liabilities + Equity', 'Liabilities = Assets + Equity', 'Equity = Assets + Liabilities'],
      correct: 1,
      explanation: 'The fundamental accounting equation is Assets = Liabilities + Owners\' Equity.'
    }
  ],
  'bcom-bl': [
    {
      id: 'bcombl1', topic: 'Contract Act', year: 'End-Term 2024', marks: 6,
      text: 'An agreement enforceable by law is a:',
      options: ['Proposal', 'Promise', 'Contract', 'Acceptance'],
      correct: 2,
      explanation: 'According to Section 2(h) of the Indian Contract Act, 1872, an agreement enforceable by law is a contract.'
    }
  ],
  'llb-con1': [
    {
      id: 'llbcon1', topic: 'Fundamental Rights', year: 'End-Term 2024', marks: 8,
      text: 'Which article of the Indian Constitution is known as the Heart and Soul of the Constitution?',
      options: ['Article 14', 'Article 19', 'Article 21', 'Article 32'],
      correct: 3,
      explanation: 'Dr. B.R. Ambedkar termed Article 32 (Right to Constitutional Remedies) as the Heart and Soul of the Constitution.'
    }
  ]
};
