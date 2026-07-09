$filePath = 'c:\Users\Admin\study-material\src\data\studyMaterial.ts'
$content = Get-Content $filePath -Raw -Encoding UTF8

$startIdx = $content.IndexOf("  {`r`n    id: 'physics-cycle'")
if ($startIdx -eq -1) {
    $startIdx = $content.IndexOf("  {`n    id: 'physics-cycle'")
}

$endPattern = "  {`r`n    id: 'chemistry-cycle'"
$endIdx = $content.IndexOf($endPattern, $startIdx)
if ($endIdx -eq -1) {
    $endPattern = "  {`n    id: 'chemistry-cycle'"
    $endIdx = $content.IndexOf($endPattern, $startIdx)
}

$beforeBlock = $content.Substring(0, $startIdx)
$afterBlock = $content.Substring($endIdx)

$physicsBlock = @'
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
          { title: 'Module 1 — Wave Optics Notes', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/Module%201%20%E2%80%94%20Wave%20Optics%20Notes.pdf', type: 'pdf' },
          { title: 'Module 2 — Quantum Mechanics', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/Module%202%20%E2%80%94%20Quantum%20Mechanics.pdf', type: 'pdf' },
          { title: 'Module 3 — Semiconductors', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/Module%203%20%E2%80%94%20Semiconductors.pdf', type: 'pdf' },
          { title: 'Complete Textbook (H.K. Malik)', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/Complete%20Textbook%20(H.K.%20Malik).pdf', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Term 2024', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/pyqs/End%20Term%202024.pdf', type: 'pdf' },
          { title: 'Sessional 1 — 2023', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/pyqs/Sessional%201%20%E2%80%94%202023.pdf', type: 'pdf' },
          { title: 'End Semester 2023', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/pyqs/End%20Semester%202023.pdf', type: 'pdf' },
          { title: 'End Semester 2022', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/pyqs/End%20Semester%202022.pdf', type: 'pdf' },
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
          { title: 'Unit 1 — Matrices & Linear Algebra', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/Unit%201%20%E2%80%94%20Matrices%20%26%20Linear%20Algebra.pdf', type: 'pdf' },
          { title: 'Unit 2 — Differential Equations', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/Unit%202%20%E2%80%94%20Differential%20Equations.pdf', type: 'pdf' },
          { title: 'Unit 3 — Numerical Methods', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/Unit%203%20%E2%80%94%20Numerical%20Methods.pdf', type: 'pdf' },
          { title: 'Formula Sheet — Complete', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/Formula%20Sheet%20%E2%80%94%20Complete.pdf', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/End%20Semester%202024.pdf', type: 'pdf' },
          { title: 'Sessional 2 — 2023', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/Sessional%202%20%E2%80%94%202023.pdf', type: 'pdf' },
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
          { title: 'PSUC Complete Notes', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/study-material/PSUC%20Complete%20Notes.pdf', type: 'pdf' },
          { title: 'Unit Wise Study Material', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/study-material/Unit%20Wise%20Study%20Material.pdf', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2023', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/pyqs/End%20Semester%202023.pdf', type: 'pdf' },
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
          { title: 'WCS Notes — All Units', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/wcs/study-material/WCS%20Notes%20%E2%80%94%20All%20Units.pdf', type: 'pdf' },
        ],
        pyqs: [
          { title: 'Sessional 1 — 2024', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/wcs/pyqs/Sessional%201%20%E2%80%94%202024.pdf', type: 'pdf' },
          { title: 'End Semester 2023', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/wcs/pyqs/End%20Semester%202023.pdf', type: 'pdf' },
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
          { title: 'EVS — Environment & Ecology Notes', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/evs/study-material/EVS%20%E2%80%94%20Environment%20%26%20Ecology%20Notes.pdf', type: 'pdf' },
          { title: 'Important Q&A Compilation', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/evs/study-material/Important%20Q%26A%20Compilation.pdf', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/evs/pyqs/End%20Semester%202024.pdf', type: 'pdf' },
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
          { title: 'Cell Biology & Genetics Notes', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/biology-for-engineers/study-material/Cell%20Biology%20%26%20Genetics%20Notes.pdf', type: 'pdf' },
          { title: 'Biotechnology Module', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/biology-for-engineers/study-material/Biotechnology%20Module.pdf', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2023', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/biology-for-engineers/pyqs/End%20Semester%202023.pdf', type: 'pdf' },
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
          { title: 'MATLAB Basics — Complete Guide', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/matlab/study-material/MATLAB%20Basics%20%E2%80%94%20Complete%20Guide.pdf', type: 'pdf' },
          { title: 'Lab Programs — All Experiments', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/matlab/study-material/Lab%20Programs%20%E2%80%94%20All%20Experiments.pdf', type: 'pdf' },
        ],
        pyqs: [
          { title: 'Lab Viva Questions 2023', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/matlab/pyqs/Lab%20Viva%20Questions%202023.pdf', type: 'pdf' },
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
          { title: 'Stress & Strain — Unit 1', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-materials-mechanics/study-material/Stress%20%26%20Strain%20%E2%80%94%20Unit%201.pdf', type: 'pdf' },
          { title: 'Thermodynamics Basics', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-materials-mechanics/study-material/Thermodynamics%20Basics.pdf', type: 'pdf' },
        ],
        pyqs: [
          { title: 'Sessional 1 & 2 — 2024', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-materials-mechanics/pyqs/Sessional%201%20%26%202%20%E2%80%94%202024.pdf', type: 'pdf' },
          { title: 'End Semester 2023', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-materials-mechanics/pyqs/End%20Semester%202023.pdf', type: 'pdf' },
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
          { title: 'Data Visualization Using Python', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/data-visualization/study-material/Data%20Visualization%20Using%20Python.pdf', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/data-visualization/pyqs/End%20Semester%202024.pdf', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Data Visualization with Python', url: 'https://youtube.com/watch?v=a9UrKTVEeZA', channelName: 'Corey Schafer', thumbnailId: 'a9UrKTVEeZA' },
        ],
      },
      {
        id: 'fundamentals-data-structures',
        name: 'Fundamentals of Data Structures',
        shortName: 'Data Structures',
        emoji: '🗂️',
        code: 'CS-103',
        description: 'Arrays, linked lists, stacks, queues, trees, and graphs.',
        resourceCount: 28,
        studyMaterials: [
          { title: 'Complete DSA Notes', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/study-material/Complete%20DSA%20Notes.pdf', type: 'pdf' },
          { title: 'Algorithm Complexity Guide', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/study-material/Algorithm%20Complexity%20Guide.pdf', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/pyqs/End%20Semester%202024.pdf', type: 'pdf' },
          { title: 'Sessional 2 — 2023', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/pyqs/Sessional%202%20%E2%80%94%202023.pdf', type: 'pdf' },
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
          { title: 'Electrical Technology Notes', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/electrical-technology/study-material/Electrical%20Technology%20Notes.pdf', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/electrical-technology/pyqs/End%20Semester%202024.pdf', type: 'pdf' },
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
          { title: 'Applied Maths 1 — All Units', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/applied-mathematics-1/study-material/Applied%20Maths%201%20%E2%80%94%20All%20Units.pdf', type: 'pdf' },
        ],
        pyqs: [
          { title: 'End Semester 2024', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/applied-mathematics-1/pyqs/End%20Semester%202024.pdf', type: 'pdf' },
          { title: 'End Semester 2023', url: 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/applied-mathematics-1/pyqs/End%20Semester%202023.pdf', type: 'pdf' },
        ],
        ytResources: [
          { title: 'Applied Mathematics for Engineers', url: 'https://youtube.com/watch?v=dQw4w9WgXcQ', channelName: 'NPTEL', thumbnailId: 'dQw4w9WgXcQ' },
        ],
      },
    ],
'@

$newContent = $beforeBlock + $physicsBlock + $afterBlock
[System.IO.File]::WriteAllText($filePath, $newContent, [System.Text.Encoding]::UTF8)
Write-Host "Done! New file length: $($newContent.Length)"
