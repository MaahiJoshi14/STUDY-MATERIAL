Created At: 2026-07-08T10:39:02Z
Completed At: 2026-07-08T10:39:02Z
File Path: `file:///c:/Users/Admin/study-material/src/data/studyMaterial.ts`
Total Lines: 2110
Total Bytes: 159811
Showing lines 1 to 150
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
1: // ============================================================
2: // MUJ BTech Study Material — Central Data Source
3: // ============================================================
4: 
5: export interface ResourceLink {
6:   title: string;
7:   url: string;
8:   type: 'pdf' | 'ppt' | 'pptx' | 'doc' | 'docx' | 'xls' | 'xlsx' | 'other';
9: }
10: 
11: export interface YouTubeResource {
12:   title: string;
13:   url: string;
14:   channelName: string;
15:   thumbnailId?: string;
16: }
17: 
18: export interface Subject {
19:   id: string;
20:   name: string;
21:   shortName: string;
22:   emoji: string;
23:   code: string;
24:   description: string;
25:   resourceCount: number;
26:   studyMaterials: ResourceLink[];
27:   pyqs: ResourceLink[];
28:   ytResources: YouTubeResource[];
29: }
30: 
31: export interface Cycle {
32:   id: string;
33:   name: string;
34:   emoji: string;
35:   color: string;
36:   gradient: string;
37:   description: string;
38:   subjectPreview: string;
39:   subjects: Subject[];
40: }
41: 
42: export interface Branch {
  description: string;
  subjects: Subject[];
}

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// YEAR 1 â€” CYCLES
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const year1Cycles: Cycle[] = [
  {
    id: 'physics-cycle',
    name: 'Physics Cycle',
    emoji: 'ðŸ”¬',
    color: '#4f46e5',
    gradient: 'from-indigo-500 to-blue-600',
    description: 'Eng. Physics, Computational Mathematics, PSUC, WCS, EVS, Biology for Engineers, and MATLAB.',
    subjectPreview: '12 Subjects',
    subjects: [
      {
        id: 'engineering-physics',
        name: 'Engineering Physics',
        shortName: 'Eng. Physics',
        emoji: 'âš›ï¸',
        code: 'EP-101',
        description: 'Classical mechanics, optics, and quantum fundamentals.',
        resourceCount: 42,
        studyMaterials: [
          { title: 'Module 1 â€” Wave Optics Notes', url: 'https://drive.google.com/drive/folders/1example_physics_notes', type: 'pdf' },
          { title: 'Module 2 â€” Quantum Mechanics', url: 'https://drive.google.com/drive/folders/1example_physics_qm', type: 'pdf' },
          { title: 'Module 3 â€” Semiconductors', url: 'https://drive.google.com/drive/folders/1example_physics_semi', type: 'pdf' },
          { title: 'Complete Textbook (H.K. Malik)', url: 'https://drive.google.com/file/d/1example_physics_book', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Term 2024', url: 'https://drive.google.com/file/d/1example_physics_pyq24e', type: 'pdf' },
          { title: 'Sessional 1 â€” 2023', url: 'https://drive.google.com/file/d/1example_physics_pyq23s1', type: 'pdf' },
          { title: 'End Semester 2023', url: 'https://drive.google.com/file/d/1example_physics_pyq23e', type: 'pdf' },
          { title: 'End Semester 2022', url: 'https://drive.google.com/file/d/1example_physics_pyq22e', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Engineering Physics Full Course', url: 'https://youtube.com/watch?v=6GG6T0YHFEY', channelName: 'NPTEL', thumbnailId: '6GG6T0YHFEY' },
          { title: 'Wave Optics â€” Complete Chapter', url: 'https://youtube.com/watch?v=Iuv6hY6zsd0', channelName: 'Physics Wallah', thumbnailId: 'Iuv6hY6zsd0' },
        ],
      },
      {
        id: 'computational-mathematics',
        name: 'Computational Mathematics',
        shortName: 'Comp. Mathematics',
        emoji: 'ðŸ“',
        code: 'MA-101',
        description: 'Calculus, matrices, and differential equation modeling.',
        resourceCount: 38,
        studyMaterials: [
          { title: 'Unit 1 â€” Matrices & Linear Algebra', url: 'https://drive.google.com/file/d/1example_cm_u1', type: 'pdf' },
          { title: 'Unit 2 â€” Differential Equations', url: 'https://drive.google.com/file/d/1example_cm_u2', type: 'pdf' },
          { title: 'Unit 3 â€” Numerical Methods', url: 'https://drive.google.com/file/d/1example_cm_u3', type: 'pdf' },
          { title: 'Formula Sheet â€” Complete', url: 'https://drive.google.com/file/d/1example_cm_formula', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_cm_pyq24', type: 'pdf' },
          { title: 'Sessional 2 â€” 2023', url: 'https://drive.google.com/file/d/1example_cm_pyq23s2', type: 'pdf' },
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
        emoji: 'ðŸ’»',
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
        emoji: 'ðŸ”§',
        code: 'ES-101',
        description: 'Workshop practice, manufacturing, and basic fabrication.',
        resourceCount: 24,
        studyMaterials: [
          { title: 'WCS Notes â€” All Units', url: 'https://drive.google.com/file/d/1example_wcs_notes', type: 'pdf' },
        ],
        pyqs: [
          { title: 'Sessional 1 â€” 2024', url: 'https://drive.google.com/file/d/1example_wcs_pyq24', type: 'pdf' },
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
        emoji: 'ðŸŒ¿',
        code: 'HS-101',
        description: 'Environmental science, ecology, and sustainability.',
        resourceCount: 18,
        studyMaterials: [
          { title: 'EVS â€” Environment & Ecology Notes', url: 'https://drive.google.com/file/d/1example_evs_notes', type: 'pdf' },
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
        emoji: 'ðŸ§¬',
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
          { title: 'Biology for Engineers â€” NPTEL', url: 'https://youtube.com/watch?v=H3bfBQI_OeQ', channelName: 'NPTEL', thumbnailId: 'H3bfBQI_OeQ' },
        ],
      },
      {
        id: 'matlab',
        name: 'MATLAB',
        shortName: 'MATLAB',
        emoji: 'ðŸ“Š',
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
        emoji: 'ðŸ—ƒï¸',
        code: 'CS-103',
        description: 'Arrays, linked lists, stacks, queues, trees, and graphs.',
        resourceCount: 28,
        studyMaterials: [
          { title: 'Complete DSA Notes', url: 'https://drive.google.com/file/d/1example_fds_notes', type: 'pdf' },
          { title: 'Algorithm Complexity Guide', url: 'https://drive.google.com/file/d/1example_fds_algo', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_fds_pyq24', type: 'pdf' },
          { title: 'Sessional 2 â€” 2023', url: 'https://drive.google.com/file/d/1example_fds_pyq23', type: 'pdf' },
        ],
        ytResources: [
          { title: 'DSA in C++ Complete Course', url: 'https://youtube.com/watch?v=8hly31xKli0', channelName: 'freeCodeCamp', thumbnailId: '8hly31xKli0' },
        ],
      },
      {
        id: 'electrical-technology',
        name: 'Electrical Technology',
        shortName: 'Elec. Tech',
        emoji: 'âš¡',
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
        emoji: 'ðŸ”¢',
        code: 'MA-103',
        description: 'Calculus, sequences, series, and analytical geometry.',
        resourceCount: 33,
        studyMaterials: [
          { title: 'Applied Maths 1 â€” All Units', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/applied-mathematics-1/study-material/Applied%20Maths%201%20%E2%80%94%20All%20Units.pdf', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/applied-mathematics-1/pyqs/End%20Semester%202024.pdf', type: 'pdf' },
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
    emoji: 'ðŸ§ª',
    color: '#0891b2',
    gradient: 'from-cyan-500 to-teal-600',
    description: 'Eng. Chemistry, Basic Mechanical, Calculus, Graphics, Electronics, and Manufacturing Process.',
    subjectPreview: '10 Subjects',
    subjects: [
      {
        id: 'basic-mechanical-engineering',
        name: 'Basic Mechanical Engineering',
        shortName: 'Basic Mechanical',
        emoji: 'ðŸ”©',
        code: 'ME-102',
        description: 'Mechanics, thermodynamics, and machine drawing basics.',
        resourceCount: 29,
        studyMaterials: [
          { title: 'Basic ME â€” Complete Notes', url: 'https://drive.google.com/file/d/1example_bme_notes', type: 'pdf' },
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
        emoji: 'âˆ«',
        code: 'MA-104',
        description: 'Integral calculus, matrix algebra, and linear transformations.',
        resourceCount: 34,
        studyMaterials: [
          { title: 'Calculus & Matrices â€” Full Notes', url: 'https://drive.google.com/file/d/1example_cm2_notes', type: 'pdf' },
          { title: 'Practice Problems Set', url: 'https://drive.google.com/file/d/1example_cm2_problems', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_cm2_pyq24', type: 'pdf' },
          { title: 'End Semester 2023', url: 'https://drive.google.com/file/d/1example_cm2_pyq23', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Calculus Full Course â€” MIT', url: 'https://youtube.com/watch?v=HfACrKJ_Y2w', channelName: 'MIT OpenCourseWare', thumbnailId: 'HfACrKJ_Y2w' },
        ],
      },
      {
        id: 'communication-skills',
        name: 'Communication Skills',
        shortName: 'Comm. Skills',
        emoji: 'ðŸ—£ï¸',
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
        emoji: 'ðŸ”²',
        code: 'EC-101',
        description: 'Boolean algebra, logic gates, flip-flops, and digital circuits.',
        resourceCount: 41,
        studyMaterials: [
          { title: 'Digital Systems â€” Full Notes', url: 'https://drive.google.com/file/d/1example_ds_notes', type: 'pdf' },
          { title: 'Boolean Algebra Practice', url: 'https://drive.google.com/file/d/1example_ds_bool', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_ds_pyq24', type: 'pdf' },
          { title: 'End Semester 2023', url: 'https://drive.google.com/file/d/1example_ds_pyq23', type: 'pdf' },
          { title: 'Sessional 2 â€” 2023', url: 'https://drive.google.com/file/d/1example_ds_pyq23s2', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Digital Systems Full Course', url: 'https://youtube.com/watch?v=M0mx8S05v60', channelName: 'Neso Academy', thumbnailId: 'M0mx8S05v60' },
        ],
      },
      {
        id: 'engineering-graphics',
        name: 'Engineering Graphics',
        shortName: 'Eng. Graphics',
        emoji: 'ðŸ“',
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
        emoji: 'ðŸ”‹',
        code: 'EC-102',
        description: 'Diodes, transistors, amplifiers, and basic analog circuits.',
        resourceCount: 35,
        studyMaterials: [
          { title: 'Electronics Circuits â€” Full Notes', url: 'https://drive.google.com/file/d/1example_ec_notes', type: 'pdf' },
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
        emoji: 'âš—ï¸',
        code: 'CH-101',
        description: 'Electrochemistry, polymers, corrosion, and spectroscopy.',
        resourceCount: 30,
        studyMaterials: [
          { title: 'Engineering Chemistry â€” All Units', url: 'https://drive.google.com/file/d/1example_ech_notes', type: 'pdf' },
          { title: 'Important Numericals Guide', url: 'https://drive.google.com/file/d/1example_ech_num', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://drive.google.com/file/d/1example_ech_pyq24', type: 'pdf' },
          { title: 'End Semester 2023', url: 'https://drive.google.com/file/d/1example_ech_pyq23', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Engineering Chemistry â€” NPTEL', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'NPTEL', thumbnailId: 'dQw4w9WgXcQ' },
        ],
      },
      {
        id: 'manufacturing-process',
        name: 'Manufacturing Process',
        shortName: 'Mfg. Process',
        emoji: 'ðŸ­',
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
        emoji: 'ðŸ–¥ï¸',
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
        emoji: 'ðŸŒ',
        code: 'HS-103',
        description: 'Ethics, human values, and professional responsibility.',
        resourceCount: 14,
        studyMaterials: [
          { title: 'UHV â€” Complete Notes', url: 'https://drive.google.com/file/d/1example_uhv_notes', type: 'pdf' },
        ],
        emoji: 'ðŸ–¥ï¸',
        code: 'CS-104',
        description: 'Algorithms, programming logic, and computational thinking.',
        resourceCount: 32,
        studyMaterials: [
          { title: 'PSUC Notes', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/study-material/PSUC%20Notes.pdf', type: 'pdf' },
        ],
        pyqs: [
          { title: 'PSUC_ETE_Sem-I_2024-25', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/pyqs/PSUC_ETE_Sem-I_2024-25.pdf', type: 'pdf' },
          { title: 'PSUC_MTE_Sem-I_2024-25', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/pyqs/PSUC_MTE_Sem-I_2024-25.pdf', type: 'pdf' },
        ],
        ytResources: [
          { title: 'C Programming Full Course', url: 'https://youtube.com/watch?v=KJgsSFOSQv0', channelName: 'freeCodeCamp', thumbnailId: 'KJgsSFOSQv0' },
        ],
      },
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
  // Theory - list of keywords user must mention
  keywords?: string[];
  // Numerical - formula/expected answer hint
  formula?: string;
  explanation: string;
  /** Frequency category */
  frequency: 'most' | 'moderate' | 'can-be';
}

export const QUESTIONS_DB: Record<string, Question[]> = {
  'engineering-physics': [
    {
      id: 'ep1', topic: 'Quantum Mechanics', year: 'End-Term 2024', marks: 8,
      type: 'mcq', frequency: 'most',
      text: 'Which experiment directly proves the wave nature of electrons?',
      options: ['Photoelectric Effect', 'Davisson-Germer Experiment', 'Blackbody Radiation', 'Compton Scattering'],
      correct: 1,
      explanation: 'The Davisson-Germer Experiment (1927) demonstrated electron diffraction on a Nickel crystal, confirming de Broglie\'s hypothesis.'
    },
    {
      id: 'ep2', topic: 'Laser Technology', year: 'Mid-Term 2023', marks: 6,
      type: 'theory', frequency: 'most',
      text: 'Explain the principle of LASER with the concept of population inversion and stimulated emission.',
      options: [], correct: -1,
      keywords: ['population inversion', 'stimulated emission', 'metastable state', 'coherent', 'monochromatic', 'pumping'],
      explanation: 'LASER works on stimulated emission. Population inversion is achieved via pumping. Stimulated emission produces coherent, monochromatic light.'
    },
    {
      id: 'ep3', topic: 'Wave Optics', year: 'End-Term 2023', marks: 6,
      type: 'mcq', frequency: 'most',
      text: 'In Young\'s double slit experiment, fringe width beta is proportional to:',
      options: ['d/lambdaD', 'lambdaD/d', 'lambdad/D', 'D/lambdad'],
      correct: 1,
      explanation: 'Fringe width beta = lambdaD/d, where lambda is wavelength, D is screen distance, and d is slit separation.'
    },
    {
      id: 'ep4', topic: 'Superconductivity', year: 'End-Term 2024', marks: 5,
      type: 'theory', frequency: 'moderate',
      text: 'What is the Meissner effect? How does it distinguish a superconductor from a perfect conductor?',
      options: [], correct: -1,
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


}

export const QUESTIONS_DB: Record<string, TopicCategory[]> = {
  'engineering-physics': [
    {
      name: 'Quantum Mechanics',
      questions: [
        {
          id: 'ep1', topic: 'Quantum Mechanics', yearsAppeared: ['2022', '2023', '2024'],
          marksRange: '4-6', frequency: 3,
          type: 'theory',
          text: 'Explain the Davisson-Germer Experiment and how it proves the wave nature of electrons.',
          keywords: ['electron diffraction', 'Nickel crystal', 'de Broglie hypothesis', 'wave-particle duality'],
          correctAnswer: 'The Davisson-Germer Experiment demonstrated that electrons undergo diffraction when scattered from a Nickel crystal, confirming de Broglie\'s hypothesis.',
          points: 6
        },
        {
          id: 'ep2', topic: 'Quantum Mechanics', yearsAppeared: ['2023', '2024'],
          marksRange: '4-5', frequency: 2,
          type: 'numerical',
          text: 'Calculate the de Broglie wavelength of an electron accelerated through a potential difference of 100 V.',
          formula: 'λ = h / √(2meV)',
          formulaExplanation: {
            'λ': 'de Broglie wavelength',
            'h': 'Planck\'s constant (6.626 × 10⁻³⁴ J·s)',
            'm': 'mass of electron (9.1 × 10⁻³¹ kg)',
            'e': 'charge of electron (1.6 × 10⁻¹⁹ C)',
            'V': 'potential difference'
          },
          correctAnswer: 'λ ≈ 1.23 Å',
          points: 5
        }
      ]
    },
    {
      name: 'Laser Technology',
      questions: [
        {
          id: 'ep3', topic: 'Laser Technology', yearsAppeared: ['2021', '2023', '2024'],
          marksRange: '4-6', frequency: 3,
          type: 'theory',
          text: 'What is population inversion and why is it essential for laser action?',
          keywords: ['population inversion', 'stimulated emission', 'excited state', 'ground state', 'laser'],
          correctAnswer: 'Population inversion is a state where more atoms are in an excited state than in the ground state, essential for laser action.',
          points: 6
        }
      ]
    },
    {
      name: 'Wave Optics',
      questions: [
        {
          id: 'ep4', topic: 'Wave Optics', yearsAppeared: ['2022', '2024'],
          marksRange: '4-6', frequency: 2,
          type: 'numerical',
          text: 'In Young\'s double slit experiment, calculate the fringe width if λ=600 nm, D=1 m, d=1 mm.',
          formula: 'β = λD / d',
          formulaExplanation: {
            'β': 'fringe width',
            'λ': 'wavelength of light',
            'D': 'distance between slits and screen',
            'd': 'distance between slits'
          },
          correctAnswer: 'β = 0.6 mm',
          points: 6
        }
      ]
    }
  ],
  'computational-mathematics': [
    {
      name: 'Linear Algebra',
      questions: [
        {
          id: 'cm1', topic: 'Linear Algebra', yearsAppeared: ['2022', '2023', '2024'],
          marksRange: '4-6', frequency: 3,
          type: 'theory',
          text: 'Define Trace of a matrix and find the trace of a matrix with eigenvalues 1, 2, -1.',
          keywords: ['trace', 'sum of eigenvalues', 'diagonal elements'],
          correctAnswer: 'Trace is the sum of diagonal elements. For eigenvalues 1,2,-1, trace = 1+2+(-1)=2.',
          points: 6
        },
        {
          id: 'cm2', topic: 'Linear Algebra', yearsAppeared: ['2023', '2024'],
          marksRange: '4-5', frequency: 2,
          type: 'numerical',
          text: 'Find the determinant of a 2x2 matrix [[1, 2], [3, 4]]',
          formula: 'det = ad - bc',
          formulaExplanation: {
            'a': 'element at (1,1)',
            'b': 'element at (1,2)',
            'c': 'element at (2,1)',
            'd': 'element at (2,2)'
          },
          correctAnswer: 'det = (1)(4)-(2)(3) = -2',
          points: 5
        }
      ]
    },
    {
      name: 'Numerical Methods',
      questions: [
        {
          id: 'cm3', topic: 'Numerical Methods', yearsAppeared: ['2021', '2023', '2024'],
          marksRange: '4-6', frequency: 3,
          type: 'theory',
          text: 'Explain why Newton-Raphson method has a quadratic rate of convergence.',
          keywords: ['quadratic convergence', 'Newton-Raphson', 'Taylor series', 'derivative'],
          correctAnswer: 'Newton-Raphson uses the first derivative leading to quadratic convergence.',
          points: 6
        }
      ]
    }
  ],
  'psuc': [
    {
      name: 'Pointers & Memory',
      questions: [
        {
          id: 'ps1', topic: 'Pointers & Memory', yearsAppeared: ['2022', '2023', '2024'],
          marksRange: '4-10', frequency: 3,
          type: 'theory',
          text: 'What is the size of a char pointer on a 64-bit system and why?',
          keywords: ['pointer', '64-bit', '8 bytes', 'memory address'],
          correctAnswer: 'On 64-bit systems, all pointer types are 8 bytes to store 64-bit addresses.',
          points: 10
        }
      ]
    },
    {
      name: 'Data Structures',
      questions: [
        {
          id: 'ps2', topic: 'Data Structures', yearsAppeared: ['2022', '2023', '2024'],
          marksRange: '4-6', frequency: 3,
          type: 'theory',
          text: 'Explain the Last In First Out (LIFO) principle with an example.',
          keywords: ['LIFO', 'stack', 'push', 'pop'],
          correctAnswer: 'LIFO means last element added is first removed, like stacking plates.',
          points: 6
        }
      ]
    }
  ],
  'digital-systems': [
    {
      name: 'Boolean Algebra',
      questions: [
        {
          id: 'ds1', topic: 'Boolean Algebra', yearsAppeared: ['2022', '2023', '2024'],
          marksRange: '4-6', frequency: 3,
          type: 'numerical',
          text: 'Simplify the Boolean expression: A + A\'B',
          formula: 'A + A\'B = A + B',
          formulaExplanation: {
            'A': 'Boolean variable',
            'A\'': 'complement of A'
          },
          correctAnswer: 'Using absorption law, A + A\'B = A + B',
          points: 6
        }
      ]
    }
  ],
  'aiml-machine-learning': [
    {
      name: 'Supervised Learning',
      questions: [
        {
          id: 'ml1', topic: 'Supervised Learning', yearsAppeared: ['2022', '2023', '2024'],
          marksRange: '4-6', frequency: 3,
          type: 'theory',
          text: 'Explain Linear Regression and what it minimizes.',
          keywords: ['linear regression', 'mean squared error', 'ordinary least squares'],
          correctAnswer: 'Linear Regression models relationships between variables and minimizes mean squared error.',
          points: 6
        },
        {
          id: 'ml2', topic: 'Supervised Learning', yearsAppeared: ['2023', '2024'],
          marksRange: '4-5', frequency: 2,
          type: 'theory',
          text: 'What does the Softmax function output and why is it used?',
          keywords: ['Softmax', 'probability distribution', 'classification'],
          correctAnswer: 'Softmax outputs a probability distribution over classes summing to 1.',
          points: 5
        }
      ]
    }
  ]
};
