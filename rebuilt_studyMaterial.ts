// ============================================================
// MUJ BTech Study Material — Central Data Source
// ============================================================
Total Lines: 2110
export interface ResourceLink {
title: string;
url: string;
type: 'drive' | 'pdf' | 'doc' | 'slides';
}
--- FOUND IMAGEKIT IN STEP 1036 ---
export interface YouTubeResource {
title: string;
url: string;
channelName: string;
thumbnailId?: string;
}
{"step_index":1622,"source":"MODEL","type":"RUN_COMMAND","status":"DONE","created_at":"2026-07-09T12:02:16Z","content":"Created At: 2026-07-09T12:02:16Z\nCompleted At: 2026-07-09T12:02:34Z\n\n\t\t\t\tThe command completed successfully.\n\t\t\t\tOutput:\n\t\t\t\t.Line : The term '.Line' is not recognized as the name of a cmdlet, function, script file, or operable program. Check \r\nthe spelling of the name, or if a path was included, verify that the path is correct and try again.\r\nAt line:1 cha
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
        id: 'computational-mathematics',
          { title: '1. QUESTION BANK_MODULE-01_SOLUTION', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/1.%20QUESTION%20BANK_MODULE-01_SOLUTION.pdf', type: 'pdf' },
          { title: '2. MAS1002_Course Handout (12.09.2024)', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/2.%20MAS1002_Course%20Handout%20(12.09.2024).pdf', type: 'pdf' },
          { title: '2. QUESTION BANK_MODULE-02_SOLUTION', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/2.%20QUESTION%20BANK_MODULE-02_SOLUTION.pdf', type: 'pdf' },
          { title: '3. Question Bank_Solution_Module_3', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/3.%20Question%20Bank_Solution_Module_3.pdf', type: 'pdf' },
          { title: 'CM_ Module-6_Notes&Solved_PYQs', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/CM_%20Module-6_Notes&Solved_PYQs.pdf', type: 'pdf' },
          { title: 'Module 1 (updated)', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/Module%201%20(updated).pdf', type: 'pdf' },
          { title: 'Module 2 (updated)', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/Module%202%20(updated).pdf', type: 'pdf' },
          { title: 'Module 3 (updated)', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/Module%203%20(updated).pdf', type: 'pdf' },
          { title: 'Module 4 (updated)', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/Module%204%20(updated).pdf', type: 'pdf' },
          { title: 'Module 5 (updated)', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/Module%205%20(updated).pdf', type: 'pdf' },
          { title: 'Module 6 (updated)', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/Module%206%20(updated).pdf', type: 'pdf' },
          { title: 'CM_ETE_Sem-I_2024-25', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/CM_ETE_Sem-I_2024-25.pdf', type: 'pdf' },
          { title: 'CM_ETE_Sem-I_2025-26_QuestionsWithSolution', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/CM_ETE_Sem-I_2025-26_QuestionsWithSolution.pdf', type: 'pdf' },
          { title: 'CM_MTE_Re-sess_Sem-II_2025-26', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/CM_MTE_Re-sess_Sem-II_2025-26.pdf', type: 'pdf' },
          { title: 'CM_MTE_Re-sess_Sem-I_2025-26', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/CM_MTE_Re-sess_Sem-I_2025-26.pdf', type: 'pdf' },
          { title: 'CM_MTE_Sem-II_2025-26', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/CM_MTE_Sem-II_2025-26.pdf', type: 'pdf' },
          { title: 'CM_MTE_Sem-I_2024-25', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/CM_MTE_Sem-I_2024-25.pdf', type: 'pdf' },
          { title: 'CM_MTE_Sem-I_2025-26', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/CM_MTE_Sem-I_2025-26.pdf', type: 'pdf' },
          { title: 'ETE_Sem-I_2024-25Solution& Marking scheme', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/ETE_Sem-I_2024-25Solution&%20Marking%20scheme.pdf', type: 'pdf' },
          { title: 'MA1002 ETE 2023-24 Sem-1 ', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/MA1002%20ETE%202023-24%20Sem-1%20.pdf', type: 'pdf' },
          { title: 'MA1002 ETE 2023-24 Sem-2 ', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/MA1002%20ETE%202023-24%20Sem-2%20.pdf', type: 'pdf' },
          { title: 'MAS1002 Solution ETE Set 3 (May 2025)', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/MAS1002%20Solution%20ETE%20Set%203%20(May%202025).pdf', type: 'pdf' },
          { title: 'MTE QP_MA1002_Sem-2_2023-2024', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/MTE%20QP_MA1002_Sem-2_2023-2024.pdf', type: 'pdf' },
          { title: 'Solution MTE MAS1002 sem 1 2025', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/Solution%20MTE%20MAS1002%20sem%201%202025.pdf', type: 'pdf' },
          { title: 'Solution-MAS1002-Dec 2024', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/Solution-MAS1002-Dec%202024.pdf', type: 'pdf' },
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





  'computational-mathematics': [
