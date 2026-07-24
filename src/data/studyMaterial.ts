// ============================================================
// MUJ BTech Study Material — Central Data Source
// ============================================================

export interface ResourceLink {
  title: string;
  url: string;
  type: 'drive' | 'pdf' | 'doc' | 'slides' | 'pptx';
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
    description: 'Engineering Physics, Computational Mathematics, PSUC, WCS, EVS, Biology for Engineers, IoT, and more.',
    subjectPreview: '12 Subjects',
    subjects: [
  {
    "id": "engineering-physics",
    "name": "Engineering Physics",
    "shortName": "Eng. Physics",
    "emoji": "⚛️",
    "code": "PH-101",
    "description": "Classical mechanics, optics, wave phenomena, and quantum fundamentals.",
    "resourceCount": 37,
    "studyMaterials": [
      {
        "title": "1-Interference-july-dec-2025-student-copy",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/1-Interference-july-dec-2025-student-copy.pdf?updatedAt=1783198399829",
        "type": "pdf"
      },
      {
        "title": "1-Interference-Sept-2024 (1)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/1-Interference-Sept-2024%20(1).pdf?updatedAt=1783198399579",
        "type": "pdf"
      },
      {
        "title": "2-Diffraction-Jul-Dec-2025-1",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/2-Diffraction-Jul-Dec-2025-1.pdf?updatedAt=1783198382860",
        "type": "pdf"
      },
      {
        "title": "2-Diffraction-Sept 2024-1",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/2-Diffraction-Sept%202024-1.pdf?updatedAt=1783198320937",
        "type": "pdf"
      },
      {
        "title": "3-Polarisation_2024",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/3-Polarisation_2024.pdf?updatedAt=1783198172609",
        "type": "pdf"
      },
      {
        "title": "3-Polarisation_Jul-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/3-Polarisation_Jul-25.pdf?updatedAt=1783198171904",
        "type": "pdf"
      },
      {
        "title": "4-Black Body Radiation-Sept 2024",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/4-Black%20Body%20Radiation-Sept%202024.pdf?updatedAt=1783198203116",
        "type": "pdf"
      },
      {
        "title": "4-Black Body Radiation-Sept 2025",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/4-Black%20Body%20Radiation-Sept%202025.pdf?updatedAt=1783198202649",
        "type": "pdf"
      },
      {
        "title": "5-QuantumPhysics",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/5-QuantumPhysics.pdf?updatedAt=1783198266235",
        "type": "pdf"
      },
      {
        "title": "5-QuantumPhysics-Sept 2024",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/5-QuantumPhysics-Sept%202024.pdf?updatedAt=1783198266253",
        "type": "pdf"
      },
      {
        "title": "6-EP_Quantum Mechanics",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/6-EP_Quantum%20Mechanics.pdf?updatedAt=1783198274942",
        "type": "pdf"
      },
      {
        "title": "6-Quantum-Particle",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/6-Quantum-Particle.pdf?updatedAt=1783198243034",
        "type": "pdf"
      },
      {
        "title": "6-Quantum-Particle_2024",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/6-Quantum-Particle_2024.pdf?updatedAt=1783198242863",
        "type": "pdf"
      },
      {
        "title": "7-EP_Quantum Mechanics_2024",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/7-EP_Quantum%20Mechanics_2024.pdf?updatedAt=1783198275022",
        "type": "pdf"
      },
      {
        "title": "7-Solid-State-Physics-Superconductivity",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/7-Solid-State-Physics-Superconductivity.pdf?updatedAt=1783198140812",
        "type": "pdf"
      },
      {
        "title": "8-X-rays_",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/8-X-rays_.pdf?updatedAt=1783198185920",
        "type": "pdf"
      },
      {
        "title": "8-X-rays_Sept2024",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/8-X-rays_Sept2024.pdf?updatedAt=1783198185864",
        "type": "pdf"
      },
      {
        "title": "9-Laser_",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/9-Laser_.pdf?updatedAt=1783198182085",
        "type": "pdf"
      },
      {
        "title": "9-Laser_Sept-24",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/9-Laser_Sept-24.pdf?updatedAt=1783198182080",
        "type": "pdf"
      },
      {
        "title": "Diffraction - Notes",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/Diffraction%20-%20Notes.pdf?updatedAt=1783198130489",
        "type": "pdf"
      },
      {
        "title": "EP CWS",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/EP%20CWS.pdf?updatedAt=1783198085392",
        "type": "pdf"
      },
      {
        "title": "EP_Course Handout_Aug-Dec'25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/EP_Course%20Handout_Aug-Dec'25.pdf?updatedAt=1783198154705",
        "type": "pdf"
      },
      {
        "title": "Interference - Notes",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/Interference%20-%20Notes.pdf?updatedAt=1783198131429",
        "type": "pdf"
      },
      {
        "title": "PHY1001-NEP-EP-Course-Hand-Out-Jan-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/PHY1001-NEP-EP-Course-Hand-Out-Jan-25.pdf?updatedAt=1783198136908",
        "type": "pdf"
      },
      {
        "title": "SYLLABUS FOR ENGINEERING PHYSICS",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/study-material/SYLLABUS%20FOR%20ENGINEERING%20PHYSICS.pdf?updatedAt=1783198088619",
        "type": "pdf"
      }
    ],
    "pyqs": [
      {
        "title": "EP_ETE_Sem-I_2023-24",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/pyqs/EP_ETE_Sem-I_2023-24.pdf?updatedAt=1783198095669",
        "type": "pdf"
      },
      {
        "title": "EP_ETE_Sem-I_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/pyqs/EP_ETE_Sem-I_2024-25.pdf?updatedAt=1783198097150",
        "type": "pdf"
      },
      {
        "title": "EP_ETE_Sem-I_2025-26_with_Answer_Scheme",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/pyqs/EP_ETE_Sem-I_2025-26_with_Answer_Scheme.pdf?updatedAt=1783198161225",
        "type": "pdf"
      },
      {
        "title": "EP_ETE_Sem-II_2023-24",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/pyqs/EP_ETE_Sem-II_2023-24.pdf?updatedAt=1783198096837",
        "type": "pdf"
      },
      {
        "title": "EP_ETE_Sem-II_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/pyqs/EP_ETE_Sem-II_2024-25.pdf?updatedAt=1783198138905",
        "type": "pdf"
      },
      {
        "title": "EP_MTE_Re-sess_Sem-I_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/pyqs/EP_MTE_Re-sess_Sem-I_2025-26.pdf?updatedAt=1783198097391",
        "type": "pdf"
      },
      {
        "title": "EP_MTE_Re-sess_Sem-I_2025-26 (1)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/pyqs/EP_MTE_Re-sess_Sem-I_2025-26%20(1).pdf?updatedAt=1783198097220",
        "type": "pdf"
      },
      {
        "title": "EP_MTE_Re-sess_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/pyqs/EP_MTE_Re-sess_Sem-II_2025-26.pdf?updatedAt=1783198098528",
        "type": "pdf"
      },
      {
        "title": "EP_MTE_Sem-I_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/pyqs/EP_MTE_Sem-I_2024-25.pdf?updatedAt=1783198107267",
        "type": "pdf"
      },
      {
        "title": "EP_MTE_Sem-I_2025-26_with_Answer_Scheme",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/pyqs/EP_MTE_Sem-I_2025-26_with_Answer_Scheme.pdf?updatedAt=1783198129224",
        "type": "pdf"
      },
      {
        "title": "EP_MTE_Sem-II_2023-24",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/pyqs/EP_MTE_Sem-II_2023-24.pdf?updatedAt=1783198097941",
        "type": "pdf"
      },
      {
        "title": "EP_MTE_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/pyqs/EP_MTE_Sem-II_2025-26.pdf?updatedAt=1783198102175",
        "type": "pdf"
      }
    ],
    "ytResources": []
  },
  {
    "id": "computational-mathematics",
    "name": "Computational Mathematics",
    "shortName": "Comp. Math",
    "emoji": "📐",
    "code": "MA-101",
    "description": "Calculus, matrices, and differential equation modeling.",
    "resourceCount": 25,
    "studyMaterials": [
      {
        "title": "1. QUESTION BANK_MODULE-01_SOLUTION",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/1.%20QUESTION%20BANK_MODULE-01_SOLUTION.pdf?updatedAt=1783198204634",
        "type": "pdf"
      },
      {
        "title": "2. MAS1002_Course Handout (12.09.2024)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/2.%20MAS1002_Course%20Handout%20(12.09.2024).pdf?updatedAt=1783198194451",
        "type": "pdf"
      },
      {
        "title": "2. QUESTION BANK_MODULE-02_SOLUTION",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/2.%20QUESTION%20BANK_MODULE-02_SOLUTION.pdf?updatedAt=1783198202241",
        "type": "pdf"
      },
      {
        "title": "3. Question Bank_Solution_Module_3",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/3.%20Question%20Bank_Solution_Module_3.pdf?updatedAt=1783198221389",
        "type": "pdf"
      },
      {
        "title": "CM_ Module-6_Notes&Solved_PYQs",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/CM_%20Module-6_Notes&Solved_PYQs.pdf?updatedAt=1783198258625",
        "type": "pdf"
      },
      {
        "title": "Module 1 (updated)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/Module%201%20(updated).pdf?updatedAt=1783198450260",
        "type": "pdf"
      },
      {
        "title": "Module 2 (updated)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/Module%202%20(updated).pdf?updatedAt=1783198462525",
        "type": "pdf"
      },
      {
        "title": "Module 3 (updated)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/Module%203%20(updated).pdf?updatedAt=1783198312470",
        "type": "pdf"
      },
      {
        "title": "Module 4 (updated)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/Module%204%20(updated).pdf?updatedAt=1783198459972",
        "type": "pdf"
      },
      {
        "title": "Module 5 (updated)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/Module%205%20(updated).pdf?updatedAt=1783198355775",
        "type": "pdf"
      },
      {
        "title": "Module 6 (updated)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/study-material/Module%206%20(updated).pdf?updatedAt=1783198371964",
        "type": "pdf"
      }
    ],
    "pyqs": [
      {
        "title": "CM_ETE_Sem-I_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/CM_ETE_Sem-I_2024-25.pdf?updatedAt=1783198167639",
        "type": "pdf"
      },
      {
        "title": "CM_ETE_Sem-I_2025-26_QuestionsWithSolution",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/CM_ETE_Sem-I_2025-26_QuestionsWithSolution.pdf?updatedAt=1783198189715",
        "type": "pdf"
      },
      {
        "title": "CM_MTE_Re-sess_Sem-I_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/CM_MTE_Re-sess_Sem-I_2025-26.pdf?updatedAt=1783198164464",
        "type": "pdf"
      },
      {
        "title": "CM_MTE_Re-sess_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/CM_MTE_Re-sess_Sem-II_2025-26.pdf?updatedAt=1783198162482",
        "type": "pdf"
      },
      {
        "title": "CM_MTE_Sem-I_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/CM_MTE_Sem-I_2024-25.pdf?updatedAt=1783198164390",
        "type": "pdf"
      },
      {
        "title": "CM_MTE_Sem-I_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/CM_MTE_Sem-I_2025-26.pdf?updatedAt=1783198172393",
        "type": "pdf"
      },
      {
        "title": "CM_MTE_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/CM_MTE_Sem-II_2025-26.pdf?updatedAt=1783198163785",
        "type": "pdf"
      },
      {
        "title": "ETE_Sem-I_2024-25Solution& Marking scheme",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/ETE_Sem-I_2024-25Solution&%20Marking%20scheme.pdf?updatedAt=1783198257273",
        "type": "pdf"
      },
      {
        "title": "MA1002 ETE 2023-24 Sem-1",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/MA1002%20ETE%202023-24%20Sem-1%20.pdf?updatedAt=1783198176933",
        "type": "pdf"
      },
      {
        "title": "MA1002 ETE 2023-24 Sem-2",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/MA1002%20ETE%202023-24%20Sem-2%20.pdf?updatedAt=1783198177939",
        "type": "pdf"
      },
      {
        "title": "MAS1002 Solution ETE Set 3 (May 2025)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/MAS1002%20Solution%20ETE%20Set%203%20(May%202025).pdf?updatedAt=1783198195963",
        "type": "pdf"
      },
      {
        "title": "MTE QP_MA1002_Sem-2_2023-2024",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/MTE%20QP_MA1002_Sem-2_2023-2024.pdf?updatedAt=1783198174083",
        "type": "pdf"
      },
      {
        "title": "Solution MTE MAS1002 sem 1 2025",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/Solution%20MTE%20MAS1002%20sem%201%202025.pdf?updatedAt=1783198182107",
        "type": "pdf"
      },
      {
        "title": "Solution-MAS1002-Dec 2024",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/computational-mathematics/pyqs/Solution-MAS1002-Dec%202024.pdf?updatedAt=1783198238343",
        "type": "pdf"
      }
    ],
    "ytResources": []
  },
  {
    "id": "psuc",
    "name": "PSUC",
    "shortName": "PSUC",
    "emoji": "💻",
    "code": "CS-101",
    "description": "C programming, logic building, and basic algorithm design.",
    "resourceCount": 28,
    "studyMaterials": [
      {
        "title": "1-Von Neumann architecture, programs, assembly language, high level programming languages",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/study%20material/1-Von%20Neumann%20architecture,%20programs,%20assembly%20language,%20high%20level%20programming%20languages.pptx?updatedAt=1783198150319",
        "type": "pptx"
      },
      {
        "title": "11-14 Repetitive structures for, while loops do while",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/study%20material/11-14%20Repetitive%20structures%20for,%20while%20loops%20do%20while.pptx?updatedAt=1783198173872",
        "type": "pptx"
      },
      {
        "title": "15-23 1-D 2-D Array",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/study%20material/15-23%201-D%202-D%20Array.pptx?updatedAt=1783198424362",
        "type": "pptx"
      },
      {
        "title": "2-Number System (Not for MTE ETE)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/study%20material/2-Number%20System%20(Not%20for%20MTE%20ETE).pptx?updatedAt=1783198167131",
        "type": "pptx"
      },
      {
        "title": "24-27 Pointers",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/study%20material/24-27%20Pointers.pptx?updatedAt=1783198159996",
        "type": "pptx"
      },
      {
        "title": "28-32 Function",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/study%20material/28-32%20Function.pptx?updatedAt=1783198214464",
        "type": "pptx"
      },
      {
        "title": "3-4  Datatype Operators and Storage Enum",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/study%20material/3-4%20%20Datatype%20Operators%20and%20Storage%20Enum.pptx?updatedAt=1783198444464",
        "type": "pptx"
      },
      {
        "title": "32-Function Recursion",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/study%20material/32-Function%20Recursion.pptx?updatedAt=1783198118840",
        "type": "pptx"
      },
      {
        "title": "35-36 Structure",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/study%20material/35-36%20Structure.pptx?updatedAt=1783198166931",
        "type": "pptx"
      },
      {
        "title": "5-6-7  Bitwise Type-cast Operator precedence",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/study%20material/5-6-7%20%20Bitwise%20Type-cast%20Operator%20precedence.pptx?updatedAt=1783198250752",
        "type": "pptx"
      },
      {
        "title": "8-Input and output statements (formatted and unformatted)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/study%20material/8-Input%20and%20output%20statements%20(formatted%20and%20unformatted).pptx?updatedAt=1783198185007",
        "type": "pptx"
      },
      {
        "title": "9-10 decision making if else switch",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/study%20material/9-10%20decision%20making%20if%20else%20switch.pptx?updatedAt=1783198244480",
        "type": "pptx"
      },
      {
        "title": "PSUC Theory Handout 2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/study%20material/PSUC%20Theory%20Handout%202025-26.pdf?updatedAt=1783198150907",
        "type": "pdf"
      }
    ],
    "pyqs": [
      {
        "title": "_MTE_ PSUC Important Questions",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/pyqs/_MTE_%20PSUC%20Important%20Questions.docx?updatedAt=1783198082410",
        "type": "doc"
      },
      {
        "title": "December 2023-PSUCSolutionCum Marking Scheme- ETE_QP",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/pyqs/December%202023-PSUCSolutionCum%20Marking%20Scheme-%20ETE_QP.pdf?updatedAt=1783198125744",
        "type": "pdf"
      },
      {
        "title": "ETE CSE 1002_PSUC Solution final",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/pyqs/ETE%20CSE%201002_PSUC%20Solution%20final.pdf?updatedAt=1783198137789",
        "type": "pdf"
      },
      {
        "title": "Previous year PSUC-Solution-Set-B",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/pyqs/Previous%20year%20PSUC-Solution-Set-B.pdf?updatedAt=1783198117569",
        "type": "pdf"
      },
      {
        "title": "PSUC_ETE_Sem-I_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/pyqs/PSUC_ETE_Sem-I_2024-25.pdf?updatedAt=1783198097137",
        "type": "pdf"
      },
      {
        "title": "PSUC_ETE_Sem-I_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/pyqs/PSUC_ETE_Sem-I_2025-26.pdf?updatedAt=1783198136205",
        "type": "pdf"
      },
      {
        "title": "PSUC_MTE_Sem-I_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/pyqs/PSUC_MTE_Sem-I_2024-25.pdf?updatedAt=1783198093815",
        "type": "pdf"
      },
      {
        "title": "PSUC_MTE_Sem-I_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/pyqs/PSUC_MTE_Sem-I_2025-26.pdf?updatedAt=1783198115726",
        "type": "pdf"
      },
      {
        "title": "PSUC_MTE_Sem-II_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/pyqs/PSUC_MTE_Sem-II_2024-25.pdf?updatedAt=1783198110332",
        "type": "pdf"
      },
      {
        "title": "PSUC-QP-Set1 - ver1 - Set2",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/pyqs/PSUC-QP-Set1%20-%20ver1%20-%20Set2.pdf?updatedAt=1783198106524",
        "type": "pdf"
      },
      {
        "title": "PSUC-QP-Set1 - ver1 - Set2 (1)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/pyqs/PSUC-QP-Set1%20-%20ver1%20-%20Set2%20(1).pdf?updatedAt=1783198107947",
        "type": "pdf"
      },
      {
        "title": "PSUC-QP-Set1 - ver1-Set1",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/pyqs/PSUC-QP-Set1%20-%20ver1-Set1.pdf?updatedAt=1783198108380",
        "type": "pdf"
      },
      {
        "title": "PSUC-QP-Set1 - ver1-Set1 (1)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/pyqs/PSUC-QP-Set1%20-%20ver1-Set1%20(1).pdf?updatedAt=1783198107277",
        "type": "pdf"
      },
      {
        "title": "PSUC-QP-Set2 - ver1- CS1002 and CS1001- Solution-EPAD Version",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/pyqs/PSUC-QP-Set2%20-%20ver1-%20CS1002%20and%20CS1001-%20Solution-EPAD%20Version.pdf?updatedAt=1783198123068",
        "type": "pdf"
      },
      {
        "title": "PSUC-QP-Set2 - ver1- CS1002 and CS1001- Solution-EPAD Version (1)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/psuc/pyqs/PSUC-QP-Set2%20-%20ver1-%20CS1002%20and%20CS1001-%20Solution-EPAD%20Version%20(1).pdf?updatedAt=1783198122810",
        "type": "pdf"
      }
    ],
    "ytResources": []
  },
  {
    "id": "wellness-community-service",
    "name": "Wellness & Community Service",
    "shortName": "WCS",
    "emoji": "🌿",
    "code": "HS-101",
    "description": "Physical wellness, community engagement, and holistic development.",
    "resourceCount": 5,
    "studyMaterials": [
      {
        "title": "DOA1002 quiz notes",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/wellness-community-service/study-material/DOA1002%20quiz%20notes.pdf?updatedAt=1783198127042",
        "type": "pdf"
      },
      {
        "title": "DOA1002_notes",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/wellness-community-service/study-material/DOA1002_notes.pdf?updatedAt=1783198130054",
        "type": "pdf"
      },
      {
        "title": "Lecture Notes_Introduction to sports and physical education",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/wellness-community-service/study-material/Lecture%20Notes_Introduction%20to%20sports%20and%20physical%20education.pdf?updatedAt=1783198122513",
        "type": "pdf"
      },
      {
        "title": "Lecture Notes_Physical Fitness",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/wellness-community-service/study-material/Lecture%20Notes_Physical%20Fitness.pdf?updatedAt=1783198139551",
        "type": "pdf"
      },
      {
        "title": "Wellness and Community Services Quiz",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/wellness-community-service/study-material/Wellness%20and%20Community%20Services%20Quiz.pdf?updatedAt=1783198233693",
        "type": "pdf"
      }
    ],
    "pyqs": [],
    "ytResources": []
  },
  {
    "id": "environmental-science",
    "name": "Environmental Science",
    "shortName": "EVS",
    "emoji": "🌍",
    "code": "ES-101",
    "description": "Environmental science, ecology, and sustainability principles.",
    "resourceCount": 0,
    "studyMaterials": [],
    "pyqs": [],
    "ytResources": []
  },
  {
    "id": "biology-for-engineers",
    "name": "Biology for Engineers",
    "shortName": "Bio. for Eng.",
    "emoji": "🧬",
    "code": "BS-101",
    "description": "Biochemistry, genetics, and biomedical fundamentals.",
    "resourceCount": 21,
    "studyMaterials": [],
    "pyqs": [
      {
        "title": "BFE ETE Dec 2023 Set A Solutions-",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/biology-for-engineers/pyqs/BFE%20ETE%20Dec%202023%20Set%20A%20Solutions-.pdf?updatedAt=1783198256955",
        "type": "pdf"
      },
      {
        "title": "BFE_ETE_Sem-I_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/biology-for-engineers/pyqs/BFE_ETE_Sem-I_2024-25.pdf?updatedAt=1783198175866",
        "type": "pdf"
      },
      {
        "title": "BFE_ETE_Sem-I_2025-2026",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/biology-for-engineers/pyqs/BFE_ETE_Sem-I_2025-2026.pdf?updatedAt=1783198176698",
        "type": "pdf"
      },
      {
        "title": "BFE_ETE_Sem-II_2024-25-Solution",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/biology-for-engineers/pyqs/BFE_ETE_Sem-II_2024-25-Solution.pdf?updatedAt=1783198229014",
        "type": "pdf"
      },
      {
        "title": "BFE_Make-up_Sem-I_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/biology-for-engineers/pyqs/BFE_Make-up_Sem-I_2024-25.pdf?updatedAt=1783198175099",
        "type": "pdf"
      },
      {
        "title": "BFE_Make-up_Sem-I_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/biology-for-engineers/pyqs/BFE_Make-up_Sem-I_2025-26.pdf?updatedAt=1783198178344",
        "type": "pdf"
      },
      {
        "title": "BFE_MTE_Re-sess_Sem-I_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/biology-for-engineers/pyqs/BFE_MTE_Re-sess_Sem-I_2025-26.pdf?updatedAt=1783198175198",
        "type": "pdf"
      },
      {
        "title": "BFE_MTE_Re-sess_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/biology-for-engineers/pyqs/BFE_MTE_Re-sess_Sem-II_2025-26.pdf?updatedAt=1783198176903",
        "type": "pdf"
      },
      {
        "title": "BFE_MTE_Sem-I_2023-24",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/biology-for-engineers/pyqs/BFE_MTE_Sem-I_2023-24.pdf?updatedAt=1783198187767",
        "type": "pdf"
      },
      {
        "title": "BFE_MTE_Sem-I_2024-2025",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/biology-for-engineers/pyqs/BFE_MTE_Sem-I_2024-2025.pdf?updatedAt=1783198178160",
        "type": "pdf"
      },
      {
        "title": "BFE_MTE_Sem-I_2025-2026",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/biology-for-engineers/pyqs/BFE_MTE_Sem-I_2025-2026.pdf?updatedAt=1783198220028",
        "type": "pdf"
      },
      {
        "title": "BFE_MTE_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/biology-for-engineers/pyqs/BFE_MTE_Sem-II_2025-26.pdf?updatedAt=1783198177236",
        "type": "pdf"
      },
      {
        "title": "study-material/BFE_Course Handout_Aug-Dec'25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/biology-for-engineers/pyqs/study-material/BFE_Course%20Handout_Aug-Dec'25.pdf?updatedAt=1783198228689",
        "type": "pdf"
      },
      {
        "title": "study-material/BFE_Course Handout_Jan-May'26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/biology-for-engineers/pyqs/study-material/BFE_Course%20Handout_Jan-May'26.pdf?updatedAt=1783198228986",
        "type": "pdf"
      },
      {
        "title": "study-material/MODULE- 1 NOTES",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/biology-for-engineers/pyqs/study-material/MODULE-%201%20NOTES.pdf?updatedAt=1783198460113",
        "type": "pdf"
      },
      {
        "title": "study-material/MODULE- 2 NOTES",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/biology-for-engineers/pyqs/study-material/MODULE-%202%20NOTES.pdf?updatedAt=1783198298366",
        "type": "pdf"
      },
      {
        "title": "study-material/MODULE- 2 ppt",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/biology-for-engineers/pyqs/study-material/MODULE-%202%20ppt.pdf?updatedAt=1783198461601",
        "type": "pdf"
      },
      {
        "title": "study-material/MODULE- 3 NOTES",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/biology-for-engineers/pyqs/study-material/MODULE-%203%20NOTES.pdf?updatedAt=1783198404590",
        "type": "pdf"
      },
      {
        "title": "study-material/MODULE- 3 ppt",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/biology-for-engineers/pyqs/study-material/MODULE-%203%20ppt.pdf?updatedAt=1783198440710",
        "type": "pdf"
      },
      {
        "title": "study-material/MODULE- 4 NOTES",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/biology-for-engineers/pyqs/study-material/MODULE-%204%20NOTES.pdf?updatedAt=1783198467924",
        "type": "pdf"
      },
      {
        "title": "study-material/MODULE- 4 ppt",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/biology-for-engineers/pyqs/study-material/MODULE-%204%20ppt.pdf?updatedAt=1783198464008",
        "type": "pdf"
      }
    ],
    "ytResources": []
  },
  {
    "id": "internet-of-things",
    "name": "Internet of Things",
    "shortName": "IoT",
    "emoji": "📡",
    "code": "CS-102",
    "description": "IoT architecture, sensors, embedded systems, and data visualization.",
    "resourceCount": 11,
    "studyMaterials": [
      {
        "title": "C_Experiment_1",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/internet-of-things/experiments/C_Experiment_1.docx?updatedAt=1783198085350",
        "type": "doc"
      },
      {
        "title": "C_Experiment_10",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/internet-of-things/experiments/C_Experiment_10.docx?updatedAt=1783198096398",
        "type": "doc"
      },
      {
        "title": "C_Experiment_2",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/internet-of-things/experiments/C_Experiment_2.docx?updatedAt=1783198086356",
        "type": "doc"
      },
      {
        "title": "C_Experiment_3",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/internet-of-things/experiments/C_Experiment_3.docx?updatedAt=1783198093784",
        "type": "doc"
      },
      {
        "title": "C_Experiment_4",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/internet-of-things/experiments/C_Experiment_4.docx?updatedAt=1783198086371",
        "type": "doc"
      },
      {
        "title": "C_Experiment_5",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/internet-of-things/experiments/C_Experiment_5.docx?updatedAt=1783198085369",
        "type": "doc"
      },
      {
        "title": "C_Experiment_6",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/internet-of-things/experiments/C_Experiment_6.docx?updatedAt=1783198105090",
        "type": "doc"
      },
      {
        "title": "C_Experiment_7",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/internet-of-things/experiments/C_Experiment_7.docx?updatedAt=1783198111278",
        "type": "doc"
      },
      {
        "title": "C_Experiment_8",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/internet-of-things/experiments/C_Experiment_8.docx?updatedAt=1783198111775",
        "type": "doc"
      },
      {
        "title": "C_Experiment_9",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/internet-of-things/experiments/C_Experiment_9.docx?updatedAt=1783198128581",
        "type": "doc"
      },
      {
        "title": "IoT Handout",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/internet-of-things/experiments/IoT%20Handout.pdf?updatedAt=1783198119786",
        "type": "pdf"
      }
    ],
    "pyqs": [],
    "ytResources": []
  },
  {
    "id": "engineering-material-mechanics",
    "name": "Engineering Material & Mechanics",
    "shortName": "Eng. Materials",
    "emoji": "⚙️",
    "code": "ME-101",
    "description": "Properties of materials, stress, strain, and thermodynamics basics.",
    "resourceCount": 30,
    "studyMaterials": [
      {
        "title": "1.CIV1002 EMM - Subject Introduction",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/study-material/1.CIV1002%20EMM%20-%20Subject%20Introduction.pdf?updatedAt=1783198135961",
        "type": "pdf"
      },
      {
        "title": "2.CIV1002 EMM Module_5A_ Centroid",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/study-material/2.CIV1002%20EMM%20Module_5A_%20Centroid.pdf?updatedAt=1783198303579",
        "type": "pdf"
      },
      {
        "title": "3.CIV1002 EMM Module_5B_ MI",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/study-material/3.CIV1002%20EMM%20Module_5B_%20MI.pdf?updatedAt=1783198258540",
        "type": "pdf"
      },
      {
        "title": "4.CIV1002 EMM Module_2",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/study-material/4.CIV1002%20EMM%20Module_2.pdf?updatedAt=1783198242097",
        "type": "pdf"
      },
      {
        "title": "5.CIV1002 EMM Module_3A",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/study-material/5.CIV1002%20EMM%20Module_3A.pdf?updatedAt=1783198157268",
        "type": "pdf"
      },
      {
        "title": "6.CIV1002 EMM Module_3B",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/study-material/6.CIV1002%20EMM%20Module_3B.pdf?updatedAt=1783198168469",
        "type": "pdf"
      },
      {
        "title": "7.CIV1002 EMM Module_3C",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/study-material/7.CIV1002%20EMM%20Module_3C.pdf?updatedAt=1783198194535",
        "type": "pdf"
      },
      {
        "title": "8.CIV1002 EMM Module_4",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/study-material/8.CIV1002%20EMM%20Module_4.pdf?updatedAt=1783198229662",
        "type": "pdf"
      },
      {
        "title": "9.CIV1002 EMM - Module 1",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/study-material/9.CIV1002%20EMM%20-%20Module%201.pdf?updatedAt=1783198283908",
        "type": "pdf"
      },
      {
        "title": "EMM-Module-1",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/study-material/EMM-Module-1.pdf?updatedAt=1783198352127",
        "type": "pdf"
      },
      {
        "title": "EMM-Module-2",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/study-material/EMM-Module-2.pdf?updatedAt=1783198274055",
        "type": "pdf"
      },
      {
        "title": "EMM-Module-3",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/study-material/EMM-Module-3.pdf?updatedAt=1783198399029",
        "type": "pdf"
      },
      {
        "title": "EMM-Module-4",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/study-material/EMM-Module-4.pdf?updatedAt=1783198233321",
        "type": "pdf"
      },
      {
        "title": "EMM-Module-5",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/study-material/EMM-Module-5.pdf?updatedAt=1783198211345",
        "type": "pdf"
      },
      {
        "title": "EMM-Module-6_Centroid",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/study-material/EMM-Module-6_Centroid.pdf?updatedAt=1783198458716",
        "type": "pdf"
      },
      {
        "title": "EMM-Module-6_MoI",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/study-material/EMM-Module-6_MoI.pdf?updatedAt=1783198339220",
        "type": "pdf"
      },
      {
        "title": "EMM-Module-7",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/study-material/EMM-Module-7.pdf?updatedAt=1783198288310",
        "type": "pdf"
      },
      {
        "title": "EMM-Module-8",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/study-material/EMM-Module-8.pdf?updatedAt=1783198261786",
        "type": "pdf"
      }
    ],
    "pyqs": [
      {
        "title": "EMM_ETE_Sem-I_2023-24Solution and marking scheme",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/pyqs/EMM_ETE_Sem-I_2023-24Solution%20and%20marking%20scheme.pdf?updatedAt=1783198151057",
        "type": "pdf"
      },
      {
        "title": "EMM_ETE_Sem-I_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/pyqs/EMM_ETE_Sem-I_2024-25.pdf?updatedAt=1783198126522",
        "type": "pdf"
      },
      {
        "title": "EMM_ETE_Sem-I_2024-25Solution and marking scheme",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/pyqs/EMM_ETE_Sem-I_2024-25Solution%20and%20marking%20scheme.pdf?updatedAt=1783198153195",
        "type": "pdf"
      },
      {
        "title": "EMM_ETE_Sem-I_2025-2026",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/pyqs/EMM_ETE_Sem-I_2025-2026.pdf?updatedAt=1783198132903",
        "type": "pdf"
      },
      {
        "title": "EMM_ETE_Sem-I_2025-26Solution and marking scheme",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/pyqs/EMM_ETE_Sem-I_2025-26Solution%20and%20marking%20scheme.pdf?updatedAt=1783198152264",
        "type": "pdf"
      },
      {
        "title": "EMM_ETE_Sem-II_2024-25Solution and marking scheme",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/pyqs/EMM_ETE_Sem-II_2024-25Solution%20and%20marking%20scheme.pdf?updatedAt=1783198154557",
        "type": "pdf"
      },
      {
        "title": "EMM_MTE_Re-sess_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/pyqs/EMM_MTE_Re-sess_Sem-II_2025-26.pdf?updatedAt=1783198133134",
        "type": "pdf"
      },
      {
        "title": "EMM_MTE_Re-sess_Sem-II_2025-26 (1)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/pyqs/EMM_MTE_Re-sess_Sem-II_2025-26%20(1).pdf?updatedAt=1783198129014",
        "type": "pdf"
      },
      {
        "title": "EMM_MTE_Sem-I_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/pyqs/EMM_MTE_Sem-I_2024-25.pdf?updatedAt=1783198135305",
        "type": "pdf"
      },
      {
        "title": "EMM_MTE_Sem-II_2023-24",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/pyqs/EMM_MTE_Sem-II_2023-24.pdf?updatedAt=1783198134132",
        "type": "pdf"
      },
      {
        "title": "EMM_MTE_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/pyqs/EMM_MTE_Sem-II_2025-26.pdf?updatedAt=1783198138324",
        "type": "pdf"
      },
      {
        "title": "EMM_MTEsem-I_2024-25 Solution and Marking Scheme-1",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-material-mechanics/pyqs/EMM_MTEsem-I_2024-25%20Solution%20and%20Marking%20Scheme-1.pdf?updatedAt=1783198142672",
        "type": "pdf"
      }
    ],
    "ytResources": []
  },
  {
    "id": "data-visualization",
    "name": "Data Visualization",
    "shortName": "Data Viz",
    "emoji": "📊",
    "code": "CS-103",
    "description": "Charts, data storytelling, and visual analytics tools.",
    "resourceCount": 15,
    "studyMaterials": [
      {
        "title": "01 Visual Representation of Data",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/data-visualization/study-material/01%20Visual%20Representation%20of%20Data.pptx?updatedAt=1783198185920",
        "type": "pptx"
      },
      {
        "title": "02 Gestalt Principles",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/data-visualization/study-material/02%20Gestalt%20Principles.pptx?updatedAt=1783198168359",
        "type": "pptx"
      },
      {
        "title": "03 Information Overload",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/data-visualization/study-material/03%20Information%20Overload.pptx?updatedAt=1783198314870",
        "type": "pptx"
      },
      {
        "title": "04 Creating Visual Representations _ Visualization Reference Model",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/data-visualization/study-material/04%20Creating%20Visual%20Representations%20_%20Visualization%20Reference%20Model.pptx?updatedAt=1783198192429",
        "type": "pptx"
      },
      {
        "title": "05 Visual Mapping",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/data-visualization/study-material/05%20Visual%20Mapping.pptx?updatedAt=1783198205543",
        "type": "pptx"
      },
      {
        "title": "06 Visual Analytics",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/data-visualization/study-material/06%20Visual%20Analytics.pptx?updatedAt=1783198177419",
        "type": "pptx"
      },
      {
        "title": "07 Design of Visualization Applications",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/data-visualization/study-material/07%20Design%20of%20Visualization%20Applications.pptx?updatedAt=1783198196883",
        "type": "pptx"
      },
      {
        "title": "08 Classification of Visualization Systems - Interaction and Visualization Techniques",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/data-visualization/study-material/08%20Classification%20of%20Visualization%20Systems%20-%20Interaction%20and%20Visualization%20Techniques.pptx?updatedAt=1783198274407",
        "type": "pptx"
      },
      {
        "title": "09 Visualization of One, Two, and Multi-Dimensional Data",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/data-visualization/study-material/09%20Visualization%20of%20One,%20Two,%20and%20Multi-Dimensional%20Data.pptx?updatedAt=1783198186286",
        "type": "pptx"
      },
      {
        "title": "10 Visualization of Text and Text Documents",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/data-visualization/study-material/10%20Visualization%20of%20Text%20and%20Text%20Documents.pptx?updatedAt=1783198284686",
        "type": "pptx"
      },
      {
        "title": "11 Line Plot",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/data-visualization/study-material/11%20Line%20Plot.pptx?updatedAt=1783198164443",
        "type": "pptx"
      },
      {
        "title": "12 Bar",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/data-visualization/study-material/12%20Bar.pptx?updatedAt=1783198157920",
        "type": "pptx"
      },
      {
        "title": "12-24 Lecture",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/data-visualization/study-material/12-24%20Lecture.pptx?updatedAt=1783198174974",
        "type": "pptx"
      }
    ],
    "pyqs": [
      {
        "title": "DV_MTE_Re-sess_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/data-visualization/pyqs/DV_MTE_Re-sess_Sem-II_2025-26.pdf?updatedAt=1783198163274",
        "type": "pdf"
      },
      {
        "title": "DV_MTE_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/data-visualization/pyqs/DV_MTE_Sem-II_2025-26.pdf?updatedAt=1783198174084",
        "type": "pdf"
      }
    ],
    "ytResources": []
  },
  {
    "id": "fundamentals-data-structures",
    "name": "Fundamentals of Data Structures",
    "shortName": "Data Structures",
    "emoji": "🗃️",
    "code": "CS-104",
    "description": "Arrays, linked lists, stacks, queues, trees, and graphs.",
    "resourceCount": 28,
    "studyMaterials": [
      {
        "title": "1-2 Introduction DS",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/study-material/1-2%20Introduction%20DS.pdf?updatedAt=1783198238337",
        "type": "pdf"
      },
      {
        "title": "15-18 Sortings",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/study-material/15-18%20Sortings.pdf?updatedAt=1783198209075",
        "type": "pdf"
      },
      {
        "title": "19-23 Linked List",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/study-material/19-23%20Linked%20List.pdf?updatedAt=1783198475757",
        "type": "pdf"
      },
      {
        "title": "24-28 Stack",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/study-material/24-28%20Stack.pdf?updatedAt=1783198290369",
        "type": "pdf"
      },
      {
        "title": "31-35 Queue and Circular Queue",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/study-material/31-35%20Queue%20and%20Circular%20Queue.pdf?updatedAt=1783198220825",
        "type": "pdf"
      },
      {
        "title": "5-6One Dimensional Array",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/study-material/5-6One%20Dimensional%20Array.pdf?updatedAt=1783198176670",
        "type": "pdf"
      },
      {
        "title": "8-10. Two Dimensional Array",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/study-material/8-10.%20Two%20Dimensional%20Array.pdf?updatedAt=1783198258154",
        "type": "pdf"
      },
      {
        "title": "8-malloc",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/study-material/8-malloc.pdf?updatedAt=1783198211790",
        "type": "pdf"
      },
      {
        "title": "array insertion",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/study-material/array%20insertion.pdf?updatedAt=1783198110991",
        "type": "pdf"
      },
      {
        "title": "Asymptotic Notation",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/study-material/Asymptotic%20Notation.pdf?updatedAt=1783198144771",
        "type": "pdf"
      },
      {
        "title": "Binary Search",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/study-material/Binary%20Search.pdf?updatedAt=1783198125627",
        "type": "pdf"
      },
      {
        "title": "CSC1201-FDS-THEORY HANDOUT",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/study-material/CSC1201-FDS-THEORY%20HANDOUT.pdf?updatedAt=1783198168350",
        "type": "pdf"
      },
      {
        "title": "Dynamic Memory Allocation",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/study-material/Dynamic%20Memory%20Allocation.pdf?updatedAt=1783198162466",
        "type": "pdf"
      },
      {
        "title": "FDS LAB (CSC1230) Course Handout JAN 2026",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/study-material/FDS%20LAB%20(CSC1230)%20Course%20Handout%20JAN%202026.pdf?updatedAt=1783198144979",
        "type": "pdf"
      },
      {
        "title": "linklist",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/study-material/linklist.pdf?updatedAt=1783198132700",
        "type": "pdf"
      },
      {
        "title": "radix and bucket",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/study-material/radix%20and%20bucket.pdf?updatedAt=1783198133961",
        "type": "pdf"
      },
      {
        "title": "singly linked list",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/study-material/singly%20linked%20list.pdf?updatedAt=1783198187884",
        "type": "pdf"
      },
      {
        "title": "singly linked list program",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/study-material/singly%20linked%20list%20program.pdf?updatedAt=1783198156818",
        "type": "pdf"
      },
      {
        "title": "sorting techniques",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/study-material/sorting%20techniques.pdf?updatedAt=1783198303000",
        "type": "pdf"
      },
      {
        "title": "Stack",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/study-material/Stack.pdf?updatedAt=1783198127597",
        "type": "pdf"
      },
      {
        "title": "Two Dimensional Array",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/study-material/Two%20Dimensional%20Array.pdf?updatedAt=1783198264940",
        "type": "pdf"
      },
      {
        "title": "Two Dimensional Array (1)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/study-material/Two%20Dimensional%20Array%20(1).pdf?updatedAt=1783198265039",
        "type": "pdf"
      }
    ],
    "pyqs": [
      {
        "title": "FDS_MTE_Re-sess_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/pyqs/FDS_MTE_Re-sess_Sem-II_2025-26.pdf?updatedAt=1783198098689",
        "type": "pdf"
      },
      {
        "title": "FDS_MTE_ref.CSE2101_Oct2024",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/pyqs/FDS_MTE_ref.CSE2101_Oct2024.pdf?updatedAt=1783198131917",
        "type": "pdf"
      },
      {
        "title": "FDS_MTE_ref.CSE2101_Oct2024 (1)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/pyqs/FDS_MTE_ref.CSE2101_Oct2024%20(1).pdf?updatedAt=1783198132325",
        "type": "pdf"
      },
      {
        "title": "FDS_MTE_ref.CSE2101_Sep2025",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/pyqs/FDS_MTE_ref.CSE2101_Sep2025.pdf?updatedAt=1783198126046",
        "type": "pdf"
      },
      {
        "title": "FDS_MTE_ref.INT2102_Sep2025",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/pyqs/FDS_MTE_ref.INT2102_Sep2025.pdf?updatedAt=1783198146759",
        "type": "pdf"
      },
      {
        "title": "FDS_MTE_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/fundamentals-data-structures/pyqs/FDS_MTE_Sem-II_2025-26.pdf?updatedAt=1783198118312",
        "type": "pdf"
      }
    ],
    "ytResources": []
  },
  {
    "id": "electrical-technology",
    "name": "Electrical Technology",
    "shortName": "Elec. Tech",
    "emoji": "⚡",
    "code": "EE-101",
    "description": "Circuits, electromagnetism, and power systems fundamentals.",
    "resourceCount": 13,
    "studyMaterials": [
      {
        "title": "0.EEE1001_CouseHandout_Jan May 2026",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/electrical-technology/study-material/0.EEE1001_CouseHandout_Jan%20May%202026%20.pdf?updatedAt=1783198164669",
        "type": "pdf"
      },
      {
        "title": "2 EEE1001-Electrical Technology_Lecture_09-13_AC circuit Analysis",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/electrical-technology/study-material/2%20EEE1001-Electrical%20Technology_Lecture_09-13_AC%20circuit%20Analysis.pdf?updatedAt=1783198272060",
        "type": "pdf"
      },
      {
        "title": "3 EEE1001-Electrical Technology_Lecture_14-15_3-phase AC circuit Analysis",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/electrical-technology/study-material/3%20EEE1001-Electrical%20Technology_Lecture_14-15_3-phase%20AC%20circuit%20Analysis.pdf?updatedAt=1783198211253",
        "type": "pdf"
      },
      {
        "title": "4 EEE1001-Electrical Technology_Lecture_16-17_Magnetic Circuits",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/electrical-technology/study-material/4%20EEE1001-Electrical%20Technology_Lecture_16-17_Magnetic%20Circuits.pdf?updatedAt=1783198197433",
        "type": "pdf"
      },
      {
        "title": "5 EEE1001-Electrical Technology_Lecture_18-21_Transformers",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/electrical-technology/study-material/5%20EEE1001-Electrical%20Technology_Lecture_18-21_Transformers.pdf?updatedAt=1783198470157",
        "type": "pdf"
      },
      {
        "title": "6 EEE1001-Electrical Technology_Lecture_18-21_Clean Energy Systems & Electric Mobility",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/electrical-technology/study-material/6%20EEE1001-Electrical%20Technology_Lecture_18-21_Clean%20Energy%20Systems%20&%20Electric%20Mobility.pdf?updatedAt=1783198268423",
        "type": "pdf"
      }
    ],
    "pyqs": [
      {
        "title": "ET_ETE_Sem-I_2025-2026",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/electrical-technology/pyqs/ET_ETE_Sem-I_2025-2026.pdf?updatedAt=1783198141729",
        "type": "pdf"
      },
      {
        "title": "ET_MTE_Re-sess_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/electrical-technology/pyqs/ET_MTE_Re-sess_Sem-II_2025-26.pdf?updatedAt=1783198142346",
        "type": "pdf"
      },
      {
        "title": "ET_MTE_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/electrical-technology/pyqs/ET_MTE_Sem-II_2025-26.pdf?updatedAt=1783198144488",
        "type": "pdf"
      },
      {
        "title": "ET_MTE-1_Sem-I_2020-21",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/electrical-technology/pyqs/ET_MTE-1_Sem-I_2020-21.pdf?updatedAt=1783198138533",
        "type": "pdf"
      },
      {
        "title": "ET_MTE-1_Sem-I_2022-23",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/electrical-technology/pyqs/ET_MTE-1_Sem-I_2022-23.pdf?updatedAt=1783198137684",
        "type": "pdf"
      },
      {
        "title": "ET_MTE-1_Sem-II_2021-22",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/electrical-technology/pyqs/ET_MTE-1_Sem-II_2021-22.pdf?updatedAt=1783198135898",
        "type": "pdf"
      },
      {
        "title": "ET_MTE-1_Sem-II_2022-23",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/electrical-technology/pyqs/ET_MTE-1_Sem-II_2022-23.pdf?updatedAt=1783198137423",
        "type": "pdf"
      }
    ],
    "ytResources": []
  },
  {
    "id": "applied-mathematics",
    "name": "Applied Mathematics",
    "shortName": "App. Maths",
    "emoji": "🔢",
    "code": "MA-102",
    "description": "Calculus, sequences, series, and analytical geometry.",
    "resourceCount": 4,
    "studyMaterials": [],
    "pyqs": [
      {
        "title": "AM-1_ETE_MakeupFEB2025",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/applied-mathematics/pyqs/AM-1_ETE_MakeupFEB2025.pdf?updatedAt=1783198189063",
        "type": "pdf"
      },
      {
        "title": "AM-1_ETE_Sem-I_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/applied-mathematics/pyqs/AM-1_ETE_Sem-I_2024-25.pdf?updatedAt=1783198189090",
        "type": "pdf"
      },
      {
        "title": "AM-1_MTE_Sem-I_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/applied-mathematics/pyqs/AM-1_MTE_Sem-I_2024-25.pdf?updatedAt=1783198185714",
        "type": "pdf"
      },
      {
        "title": "Course Handout_MA1109_BTech-1Sem",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/applied-mathematics/pyqs/Course%20Handout_MA1109_BTech-1Sem.pdf?updatedAt=1783198214613",
        "type": "pdf"
      }
    ],
    "ytResources": []
  }
]
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
  {
    "id": "applied-mathematics",
    "name": "Applied Mathematics",
    "shortName": "App. Maths",
    "emoji": "🔢",
    "code": "MA-102",
    "description": "Calculus, sequences, series, and analytical geometry.",
    "resourceCount": 4,
    "studyMaterials": [],
    "pyqs": [
      {
        "title": "AM-1_ETE_MakeupFEB2025",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/applied-mathematics/pyqs/AM-1_ETE_MakeupFEB2025.pdf?updatedAt=1783198395387",
        "type": "pdf"
      },
      {
        "title": "AM-1_ETE_Sem-I_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/applied-mathematics/pyqs/AM-1_ETE_Sem-I_2024-25.pdf?updatedAt=1783198395307",
        "type": "pdf"
      },
      {
        "title": "AM-1_MTE_Sem-I_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/applied-mathematics/pyqs/AM-1_MTE_Sem-I_2024-25.pdf?updatedAt=1783198394398",
        "type": "pdf"
      },
      {
        "title": "Course Handout_MA1109_BTech-1Sem",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/applied-mathematics/pyqs/Course%20Handout_MA1109_BTech-1Sem.pdf?updatedAt=1783198404758",
        "type": "pdf"
      }
    ],
    "ytResources": []
  },
  {
    "id": "basic-mechanical-engineering",
    "name": "Basic Mechanical Engineering",
    "shortName": "Basic Mech.",
    "emoji": "⚙️",
    "code": "ME-102",
    "description": "Thermodynamics, mechanics, and basic mechanical design.",
    "resourceCount": 29,
    "studyMaterials": [
      {
        "title": "2nd Law  Of Thermodymc",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/study-material/2nd%20Law%20%20Of%20Thermodymc.pptx?updatedAt=1783198372010",
        "type": "pptx"
      },
      {
        "title": "2nd Law SLOT Problems",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/study-material/2nd%20Law%20SLOT%20Problems.pdf?updatedAt=1783198388326",
        "type": "pdf"
      },
      {
        "title": "BME LECTURE 4 and 5",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/study-material/BME%20LECTURE%204%20and%205.pdf?updatedAt=1783198389884",
        "type": "pdf"
      },
      {
        "title": "BME LECTURE-1&2",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/study-material/BME%20LECTURE-1&2.pdf?updatedAt=1783198392431",
        "type": "pdf"
      },
      {
        "title": "BME LECTURE-3",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/study-material/BME%20LECTURE-3.pdf?updatedAt=1783198396419",
        "type": "pdf"
      },
      {
        "title": "BME LECTURE-4",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/study-material/BME%20LECTURE-4.pdf?updatedAt=1783198395452",
        "type": "pdf"
      },
      {
        "title": "Casting (New)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/study-material/Casting%20(New).pdf?updatedAt=1783198407424",
        "type": "pdf"
      },
      {
        "title": "Casting & Lathe BME",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/study-material/Casting%20&%20Lathe%20BME.pdf?updatedAt=1783198428515",
        "type": "pdf"
      },
      {
        "title": "FLOT",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/study-material/FLOT.pptx?updatedAt=1783198376479",
        "type": "pptx"
      },
      {
        "title": "IC Engines BME",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/study-material/IC%20Engines%20BME.pdf?updatedAt=1783198424175",
        "type": "pdf"
      },
      {
        "title": "IC Engines Vol 1",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/study-material/IC%20Engines%20Vol%201.pdf?updatedAt=1783198423020",
        "type": "pdf"
      },
      {
        "title": "IC Engines Vol 2",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/study-material/IC%20Engines%20Vol%202.pdf?updatedAt=1783198388433",
        "type": "pdf"
      },
      {
        "title": "Lathe",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/study-material/Lathe.pdf?updatedAt=1783198417815",
        "type": "pdf"
      },
      {
        "title": "Lecture 1&2",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/study-material/Lecture%201&2.pptx?updatedAt=1783198387806",
        "type": "pptx"
      },
      {
        "title": "Lecture 3",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/study-material/Lecture%203.pptx?updatedAt=1783198385747",
        "type": "pptx"
      },
      {
        "title": "Lecture 6",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/study-material/Lecture%206.pdf?updatedAt=1783198395970",
        "type": "pdf"
      },
      {
        "title": "Non-Traditional Machining Methods",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/study-material/Non-Traditional%20Machining%20Methods.pdf?updatedAt=1783198397618",
        "type": "pdf"
      },
      {
        "title": "Power Transmission BME",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/study-material/Power%20Transmission%20BME.pdf?updatedAt=1783198435656",
        "type": "pdf"
      },
      {
        "title": "RAC Ppt",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/study-material/RAC%20Ppt.pdf?updatedAt=1783198408041",
        "type": "pdf"
      },
      {
        "title": "Rapid_Prototyping",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/study-material/Rapid_Prototyping.pdf?updatedAt=1783198399390",
        "type": "pdf"
      },
      {
        "title": "Refrigeration RAC",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/study-material/Refrigeration%20RAC.pptx?updatedAt=1783198399785",
        "type": "pptx"
      },
      {
        "title": "SECOND  Law  Of Thermodymc",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/study-material/SECOND%20%20Law%20%20Of%20Thermodymc.pptx?updatedAt=1783198387331",
        "type": "pptx"
      },
      {
        "title": "Steady Flow Energy Equation",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/study-material/Steady%20Flow%20Energy%20Equation.pdf?updatedAt=1783198399568",
        "type": "pdf"
      },
      {
        "title": "Thermodynamics BME",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/study-material/Thermodynamics%20BME.pdf?updatedAt=1783198437500",
        "type": "pdf"
      }
    ],
    "pyqs": [
      {
        "title": "BME_ETE_Sem-I_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/pyqs/BME_ETE_Sem-I_2025-26.pdf?updatedAt=1783198394210",
        "type": "pdf"
      },
      {
        "title": "BME_Make-up_Sem-I_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/pyqs/BME_Make-up_Sem-I_2025-26.pdf?updatedAt=1783198393506",
        "type": "pdf"
      },
      {
        "title": "BME_MTE_Re-sess_Sem-I_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/pyqs/BME_MTE_Re-sess_Sem-I_2025-26.pdf?updatedAt=1783198392976",
        "type": "pdf"
      },
      {
        "title": "BME_MTE_Re-sess_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/pyqs/BME_MTE_Re-sess_Sem-II_2025-26.pdf?updatedAt=1783198395626",
        "type": "pdf"
      },
      {
        "title": "BME_MTE_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/basic-mechanical-engineering/pyqs/BME_MTE_Sem-II_2025-26.pdf?updatedAt=1783198395044",
        "type": "pdf"
      }
    ],
    "ytResources": []
  },
  {
    "id": "calculus-and-matrices",
    "name": "Calculus & Matrices",
    "shortName": "Calculus",
    "emoji": "📈",
    "code": "MA-103",
    "description": "Calculus, matrices, and basic math tools.",
    "resourceCount": 24,
    "studyMaterials": [
      {
        "title": "0.MAS1001_Calculus & Matrices_Course Handout",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/calculus-and-matrices/study-material/0.MAS1001_Calculus%20&%20Matrices_Course%20Handout.pdf?updatedAt=1783198359191",
        "type": "pdf"
      },
      {
        "title": "1_cayley hamilton theorem + exam questions",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/calculus-and-matrices/study-material/1_cayley%20hamilton%20theorem%20+%20exam%20questions.pdf?updatedAt=1783198358705",
        "type": "pdf"
      },
      {
        "title": "1_rank of matrix",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/calculus-and-matrices/study-material/1_rank%20of%20matrix.pdf?updatedAt=1783198360758",
        "type": "pdf"
      },
      {
        "title": "3_soln of simultaneous linear eqn",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/calculus-and-matrices/study-material/3_soln%20of%20simultaneous%20linear%20eqn.pdf?updatedAt=1783198438129",
        "type": "pdf"
      },
      {
        "title": "4_Curvature CAM_merged",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/calculus-and-matrices/study-material/4_Curvature%20CAM_merged.pdf?updatedAt=1783198383169",
        "type": "pdf"
      },
      {
        "title": "5_Partial Differentiation",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/calculus-and-matrices/study-material/5_Partial%20Differentiation.pdf?updatedAt=1783198406128",
        "type": "pdf"
      },
      {
        "title": "6_partial differentiation Question Bank",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/calculus-and-matrices/study-material/6_partial%20differentiation%20Question%20Bank.pdf?updatedAt=1783198357197",
        "type": "pdf"
      },
      {
        "title": "Change_of_Order",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/calculus-and-matrices/study-material/Change_of_Order.pdf?updatedAt=1783198373729",
        "type": "pdf"
      },
      {
        "title": "Double and Tripple Integration_notes",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/calculus-and-matrices/study-material/Double%20and%20Tripple%20Integration_notes.pdf?updatedAt=1783198373066",
        "type": "pdf"
      },
      {
        "title": "integrating factor",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/calculus-and-matrices/study-material/integrating%20factor%20.pdf?updatedAt=1783198359235",
        "type": "pdf"
      },
      {
        "title": "Maxima Minima_Notes",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/calculus-and-matrices/study-material/Maxima%20Minima_Notes.pdf?updatedAt=1783198391711",
        "type": "pdf"
      },
      {
        "title": "surface integral",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/calculus-and-matrices/study-material/surface%20integral.pdf?updatedAt=1783198410847",
        "type": "pdf"
      },
      {
        "title": "TRIPLE_INTEGRATION",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/calculus-and-matrices/study-material/TRIPLE_INTEGRATION.pdf?updatedAt=1783198379711",
        "type": "pdf"
      },
      {
        "title": "Vector",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/calculus-and-matrices/study-material/Vector.pdf?updatedAt=1783198414264",
        "type": "pdf"
      }
    ],
    "pyqs": [
      {
        "title": "CAM_ETE_Sem-I_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/calculus-and-matrices/pyqs/CAM_ETE_Sem-I_2024-25.pdf?updatedAt=1783198364210",
        "type": "pdf"
      },
      {
        "title": "CAM_ETE_Sem-I_2025-2026",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/calculus-and-matrices/pyqs/CAM_ETE_Sem-I_2025-2026.pdf?updatedAt=1783198371955",
        "type": "pdf"
      },
      {
        "title": "CAM_Make-up_Sem-I_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/calculus-and-matrices/pyqs/CAM_Make-up_Sem-I_2025-26.pdf?updatedAt=1783198365238",
        "type": "pdf"
      },
      {
        "title": "CAM_MTE_Re-sess_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/calculus-and-matrices/pyqs/CAM_MTE_Re-sess_Sem-II_2025-26.pdf?updatedAt=1783198365935",
        "type": "pdf"
      },
      {
        "title": "CAM_MTE_Sem-I_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/calculus-and-matrices/pyqs/CAM_MTE_Sem-I_2024-25.pdf?updatedAt=1783198369318",
        "type": "pdf"
      },
      {
        "title": "CAM_MTE_Sem-I_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/calculus-and-matrices/pyqs/CAM_MTE_Sem-I_2025-26.pdf?updatedAt=1783198370929",
        "type": "pdf"
      },
      {
        "title": "CAM_MTE_Sem-II_2024-25 Qp with solution",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/calculus-and-matrices/pyqs/CAM_MTE_Sem-II_2024-25%20Qp%20with%20solution.pdf?updatedAt=1783198382786",
        "type": "pdf"
      },
      {
        "title": "CAM_MTE_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/calculus-and-matrices/pyqs/CAM_MTE_Sem-II_2025-26.pdf?updatedAt=1783198368653",
        "type": "pdf"
      },
      {
        "title": "ETE CAM QP 24 April-May",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/calculus-and-matrices/pyqs/ETE%20CAM%20QP%2024%20April-May.pdf?updatedAt=1783198371054",
        "type": "pdf"
      },
      {
        "title": "ETE_CAM Dec 2023",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/calculus-and-matrices/pyqs/ETE_CAM%20Dec%202023.pdf?updatedAt=1783198372222",
        "type": "pdf"
      }
    ],
    "ytResources": []
  },
  {
    "id": "psuc",
    "name": "PSUC",
    "shortName": "PSUC",
    "emoji": "💻",
    "code": "CS-101",
    "description": "C programming, logic building, and basic algorithm design.",
    "resourceCount": 28,
    "studyMaterials": [
      {
        "title": "1-Von Neumann architecture, programs, assembly language, high level programming languages",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/study%20material/1-Von%20Neumann%20architecture,%20programs,%20assembly%20language,%20high%20level%20programming%20languages.pptx?updatedAt=1783198259879",
        "type": "pptx"
      },
      {
        "title": "11-14 Repetitive structures for, while loops do while",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/study%20material/11-14%20Repetitive%20structures%20for,%20while%20loops%20do%20while.pptx?updatedAt=1783198283230",
        "type": "pptx"
      },
      {
        "title": "15-23 1-D 2-D Array",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/study%20material/15-23%201-D%202-D%20Array.pptx?updatedAt=1783198463811",
        "type": "pptx"
      },
      {
        "title": "2-Number System (Not for MTE ETE)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/study%20material/2-Number%20System%20(Not%20for%20MTE%20ETE).pptx?updatedAt=1783198280673",
        "type": "pptx"
      },
      {
        "title": "24-27 Pointers",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/study%20material/24-27%20Pointers.pptx?updatedAt=1783198274726",
        "type": "pptx"
      },
      {
        "title": "28-32 Function",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/study%20material/28-32%20Function.pptx?updatedAt=1783198327938",
        "type": "pptx"
      },
      {
        "title": "3-4  Datatype Operators and Storage Enum",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/study%20material/3-4%20%20Datatype%20Operators%20and%20Storage%20Enum.pptx?updatedAt=1783198468180",
        "type": "pptx"
      },
      {
        "title": "32-Function Recursion",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/study%20material/32-Function%20Recursion.pptx?updatedAt=1783198233649",
        "type": "pptx"
      },
      {
        "title": "35-36 Structure",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/study%20material/35-36%20Structure.pptx?updatedAt=1783198283831",
        "type": "pptx"
      },
      {
        "title": "5-6-7  Bitwise Type-cast Operator precedence",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/study%20material/5-6-7%20%20Bitwise%20Type-cast%20Operator%20precedence.pptx?updatedAt=1783198387634",
        "type": "pptx"
      },
      {
        "title": "8-Input and output statements (formatted and unformatted)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/study%20material/8-Input%20and%20output%20statements%20(formatted%20and%20unformatted).pptx?updatedAt=1783198302643",
        "type": "pptx"
      },
      {
        "title": "9-10 decision making if else switch",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/study%20material/9-10%20decision%20making%20if%20else%20switch.pptx?updatedAt=1783198377534",
        "type": "pptx"
      },
      {
        "title": "PSUC Theory Handout 2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/study%20material/PSUC%20Theory%20Handout%202025-26.pdf?updatedAt=1783198269040",
        "type": "pdf"
      }
    ],
    "pyqs": [
      {
        "title": "_MTE_ PSUC Important Questions",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/pyqs/_MTE_%20PSUC%20Important%20Questions.docx?updatedAt=1783198217934",
        "type": "doc"
      },
      {
        "title": "December 2023-PSUCSolutionCum Marking Scheme- ETE_QP",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/pyqs/December%202023-PSUCSolutionCum%20Marking%20Scheme-%20ETE_QP.pdf?updatedAt=1783198245349",
        "type": "pdf"
      },
      {
        "title": "ETE CSE 1002_PSUC Solution final",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/pyqs/ETE%20CSE%201002_PSUC%20Solution%20final.pdf?updatedAt=1783198257846",
        "type": "pdf"
      },
      {
        "title": "Previous year PSUC-Solution-Set-B",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/pyqs/Previous%20year%20PSUC-Solution-Set-B.pdf?updatedAt=1783198236440",
        "type": "pdf"
      },
      {
        "title": "PSUC_ETE_Sem-I_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/pyqs/PSUC_ETE_Sem-I_2024-25.pdf?updatedAt=1783198225015",
        "type": "pdf"
      },
      {
        "title": "PSUC_ETE_Sem-I_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/pyqs/PSUC_ETE_Sem-I_2025-26.pdf?updatedAt=1783198266113",
        "type": "pdf"
      },
      {
        "title": "PSUC_MTE_Sem-I_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/pyqs/PSUC_MTE_Sem-I_2024-25.pdf?updatedAt=1783198228197",
        "type": "pdf"
      },
      {
        "title": "PSUC_MTE_Sem-I_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/pyqs/PSUC_MTE_Sem-I_2025-26.pdf?updatedAt=1783198248641",
        "type": "pdf"
      },
      {
        "title": "PSUC_MTE_Sem-II_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/pyqs/PSUC_MTE_Sem-II_2024-25.pdf?updatedAt=1783198240408",
        "type": "pdf"
      },
      {
        "title": "PSUC-QP-Set1 - ver1 - Set2",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/pyqs/PSUC-QP-Set1%20-%20ver1%20-%20Set2.pdf?updatedAt=1783198229913",
        "type": "pdf"
      },
      {
        "title": "PSUC-QP-Set1 - ver1 - Set2 (1)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/pyqs/PSUC-QP-Set1%20-%20ver1%20-%20Set2%20(1).pdf?updatedAt=1783198229145",
        "type": "pdf"
      },
      {
        "title": "PSUC-QP-Set1 - ver1-Set1",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/pyqs/PSUC-QP-Set1%20-%20ver1-Set1.pdf?updatedAt=1783198230450",
        "type": "pdf"
      },
      {
        "title": "PSUC-QP-Set1 - ver1-Set1 (1)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/pyqs/PSUC-QP-Set1%20-%20ver1-Set1%20(1).pdf?updatedAt=1783198230415",
        "type": "pdf"
      },
      {
        "title": "PSUC-QP-Set2 - ver1- CS1002 and CS1001- Solution-EPAD Version",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/pyqs/PSUC-QP-Set2%20-%20ver1-%20CS1002%20and%20CS1001-%20Solution-EPAD%20Version.pdf?updatedAt=1783198247373",
        "type": "pdf"
      },
      {
        "title": "PSUC-QP-Set2 - ver1- CS1002 and CS1001- Solution-EPAD Version (1)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/psuc/pyqs/PSUC-QP-Set2%20-%20ver1-%20CS1002%20and%20CS1001-%20Solution-EPAD%20Version%20(1).pdf?updatedAt=1783198246201",
        "type": "pdf"
      }
    ],
    "ytResources": []
  },
  {
    "id": "universal-human-values",
    "name": "Universal Human Values",
    "shortName": "UHV",
    "emoji": "🤝",
    "code": "HS-102",
    "description": "Ethics, human values, harmony, and professional code.",
    "resourceCount": 12,
    "studyMaterials": [
      {
        "title": "L1 UHV Introduction ppt",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/universal-human-values/study-material/L1%20UHV%20Introduction%20ppt.pptx?updatedAt=1783198216977",
        "type": "pptx"
      },
      {
        "title": "L10 Self Management",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/universal-human-values/study-material/L10%20Self%20Management.pptx?updatedAt=1783198185205",
        "type": "pptx"
      },
      {
        "title": "L2 Sanskar-Education",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/universal-human-values/study-material/L2%20Sanskar-Education.pptx?updatedAt=1783198203506",
        "type": "pptx"
      },
      {
        "title": "L3 Right Understanding",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/universal-human-values/study-material/L3%20Right%20Understanding.pptx?updatedAt=1783198308156",
        "type": "pptx"
      },
      {
        "title": "L4 Aspiration and Concerns",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/universal-human-values/study-material/L4%20Aspiration%20and%20Concerns.pptx?updatedAt=1783198198068",
        "type": "pptx"
      },
      {
        "title": "L5 Health",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/universal-human-values/study-material/L5%20Health.pptx?updatedAt=1783198226206",
        "type": "pptx"
      },
      {
        "title": "L6Harmony",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/universal-human-values/study-material/L6Harmony.pptx?updatedAt=1783198192690",
        "type": "pptx"
      },
      {
        "title": "L7 Relationship",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/universal-human-values/study-material/L7%20Relationship.pptx?updatedAt=1783198203076",
        "type": "pptx"
      },
      {
        "title": "L7 Relationship (1)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/universal-human-values/study-material/L7%20Relationship%20(1).pptx?updatedAt=1783198199487",
        "type": "pptx"
      },
      {
        "title": "L8 Trust",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/universal-human-values/study-material/L8%20Trust.pptx?updatedAt=1783198253123",
        "type": "pptx"
      },
      {
        "title": "L8 Trust (1)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/universal-human-values/study-material/L8%20Trust%20(1).pptx?updatedAt=1783198252540",
        "type": "pptx"
      },
      {
        "title": "L9 Participation in Society and Nature",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/universal-human-values/study-material/L9%20Participation%20in%20Society%20and%20Nature.pptx?updatedAt=1783198193331",
        "type": "pptx"
      }
    ],
    "pyqs": [],
    "ytResources": []
  },
  {
    "id": "technical-writing-clinic",
    "name": "Technical Writing Clinic",
    "shortName": "Tech Writing",
    "emoji": "📝",
    "code": "HS-103",
    "description": "Communication skills, writing reports, and business letters.",
    "resourceCount": 5,
    "studyMaterials": [],
    "pyqs": [
      {
        "title": "CS_ETE_Sem-I_2025-2026",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/technical-writing-clinic/pyqs/CS_ETE_Sem-I_2025-2026.pdf?updatedAt=1783198235601",
        "type": "pdf"
      },
      {
        "title": "CS_Make-up_Sem-I_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/technical-writing-clinic/pyqs/CS_Make-up_Sem-I_2025-26.pdf?updatedAt=1783198200279",
        "type": "pdf"
      },
      {
        "title": "CS_MTE_Sem-I_2025-26(INCOMPLETE)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/technical-writing-clinic/pyqs/CS_MTE_Sem-I_2025-26(INCOMPLETE).pdf?updatedAt=1783198196569",
        "type": "pdf"
      },
      {
        "title": "TWC_ETE_Sem-I_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/technical-writing-clinic/pyqs/TWC_ETE_Sem-I_2024-25.pdf?updatedAt=1783198199103",
        "type": "pdf"
      },
      {
        "title": "TWC1 Course Handout LLC1010",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/technical-writing-clinic/pyqs/TWC1%20Course%20Handout%20LLC1010.pdf?updatedAt=1783198227200",
        "type": "pdf"
      }
    ],
    "ytResources": []
  },
  {
    "id": "manufracturing-products",
    "name": "Manufracturing Products",
    "shortName": "Manufacturing",
    "emoji": "🏭",
    "code": "ME-103",
    "description": "Manufacturing tools, welding, workshop practices.",
    "resourceCount": 36,
    "studyMaterials": [
      {
        "title": "10. Electric Arc SMAW Submerged",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/10.%20Electric%20Arc%20SMAW%20Submerged%20.pptx?updatedAt=1783198244291",
        "type": "pptx"
      },
      {
        "title": "11. Resistance welding",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/11.%20Resistance%20welding.pptx?updatedAt=1783198298525",
        "type": "pptx"
      },
      {
        "title": "12. Soldering and brazing",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/12.%20Soldering%20and%20brazing.pptx?updatedAt=1783198269446",
        "type": "pptx"
      },
      {
        "title": "13. Metal Forming Process Introduction and Basics",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/13.%20Metal%20Forming%20Process%20Introduction%20and%20Basics.pptx?updatedAt=1783198229766",
        "type": "pptx"
      },
      {
        "title": "14. Rolling Process",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/14.%20Rolling%20Process.pptx?updatedAt=1783198232537",
        "type": "pptx"
      },
      {
        "title": "15. Extrusion and Deep Drawing",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/15.%20Extrusion%20and%20Deep%20Drawing.pptx?updatedAt=1783198232519",
        "type": "pptx"
      },
      {
        "title": "16. Sheet Metal Forming",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/16.%20Sheet%20Metal%20Forming.pptx?updatedAt=1783198238553",
        "type": "pptx"
      },
      {
        "title": "17. Drawing and Sheet Metal Forming",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/17.%20Drawing%20and%20Sheet%20Metal%20Forming.pptx?updatedAt=1783198243477",
        "type": "pptx"
      },
      {
        "title": "18. Machining Principles of metal cutting",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/18.%20Machining%20Principles%20of%20metal%20cutting.pptx?updatedAt=1783198264590",
        "type": "pptx"
      },
      {
        "title": "19. Cutting tools, materials and applications",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/19.%20Cutting%20tools,%20materials%20and%20applications.pptx?updatedAt=1783198245478",
        "type": "pptx"
      },
      {
        "title": "2. Pattern and Allowances",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/2.%20Pattern%20and%20Allowances.pptx?updatedAt=1783198248159",
        "type": "pptx"
      },
      {
        "title": "20. Geometry of single point cutting tool",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/20.%20Geometry%20of%20single%20point%20cutting%20tool.pptx?updatedAt=1783198266182",
        "type": "pptx"
      },
      {
        "title": "21. Abrasive Jet Machining",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/21.%20Abrasive%20Jet%20Machining.pptx?updatedAt=1783198238233",
        "type": "pptx"
      },
      {
        "title": "21. Electron Beam Machining",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/21.%20Electron%20Beam%20Machining.pdf?updatedAt=1783198259630",
        "type": "pdf"
      },
      {
        "title": "21. G and M Codes (Codes for CNC Machining)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/21.%20G%20and%20M%20Codes%20(Codes%20for%20CNC%20Machining).pdf?updatedAt=1783198471538",
        "type": "pdf"
      },
      {
        "title": "21. Laser Beam Machining",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/21.%20Laser%20Beam%20Machining.pdf?updatedAt=1783198260264",
        "type": "pdf"
      },
      {
        "title": "21. Lathe operations",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/21.%20Lathe%20operations.pptx?updatedAt=1783198279727",
        "type": "pptx"
      },
      {
        "title": "21. Ultrasonic Machining",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/21.%20Ultrasonic%20Machining.pptx?updatedAt=1783198286169",
        "type": "pptx"
      },
      {
        "title": "24. Introduction to multi-point machining processes - milling",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/24.%20Introduction%20to%20multi-point%20machining%20processes%20-%20milling.pptx?updatedAt=1783198353042",
        "type": "pptx"
      },
      {
        "title": "25. Multi-point machining - Drilling",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/25.%20Multi-point%20machining%20-%20Drilling.pptx?updatedAt=1783198248673",
        "type": "pptx"
      },
      {
        "title": "3. Fuels",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/3.%20Fuels.pptx?updatedAt=1783198451992",
        "type": "pptx"
      },
      {
        "title": "3. Moulding Sand",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/3.%20Moulding%20Sand.pptx?updatedAt=1783198241997",
        "type": "pptx"
      },
      {
        "title": "4. Mould Making",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/4.%20Mould%20Making.pptx?updatedAt=1783198244428",
        "type": "pptx"
      },
      {
        "title": "5. Gating System",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/5.%20Gating%20System.pptx?updatedAt=1783198442259",
        "type": "pptx"
      },
      {
        "title": "6. Die Centrifugal casting",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/6.%20Die%20Centrifugal%20casting.pptx?updatedAt=1783198314631",
        "type": "pptx"
      },
      {
        "title": "7. Investment casting",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/7.%20Investment%20casting.pptx?updatedAt=1783198253367",
        "type": "pptx"
      },
      {
        "title": "7. Investment casting (1)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/7.%20Investment%20casting%20(1).pptx?updatedAt=1783198251628",
        "type": "pptx"
      },
      {
        "title": "8. Welding Concept and Classification",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/8.%20Welding%20Concept%20and%20Classification.pptx?updatedAt=1783198315061",
        "type": "pptx"
      },
      {
        "title": "9. Gas Welding and types of flame",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/9.%20Gas%20Welding%20and%20types%20of%20flame.pptx?updatedAt=1783198270292",
        "type": "pptx"
      },
      {
        "title": "Electrochemical Machining",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/study-material/Electrochemical%20Machining.pdf?updatedAt=1783198471012",
        "type": "pdf"
      }
    ],
    "pyqs": [
      {
        "title": "MP_ETE_Sem-I_2025-2026",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/pyqs/MP_ETE_Sem-I_2025-2026.pdf?updatedAt=1783198272547",
        "type": "pdf"
      },
      {
        "title": "MP_MTE_Re-sess_Sem-I_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/pyqs/MP_MTE_Re-sess_Sem-I_2025-26.pdf?updatedAt=1783198249336",
        "type": "pdf"
      },
      {
        "title": "MP_MTE_Re-sess_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/pyqs/MP_MTE_Re-sess_Sem-II_2025-26.pdf?updatedAt=1783198250654",
        "type": "pdf"
      },
      {
        "title": "MP_MTE_Sem-I_2025-2026",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/pyqs/MP_MTE_Sem-I_2025-2026.pdf?updatedAt=1783198267516",
        "type": "pdf"
      },
      {
        "title": "MP_MTE_Sem-I_2025-2026(with questions and solutions)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/pyqs/MP_MTE_Sem-I_2025-2026(with%20questions%20and%20solutions).pdf?updatedAt=1783198269540",
        "type": "pdf"
      },
      {
        "title": "MP_MTE_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/manufracturing-products/pyqs/MP_MTE_Sem-II_2025-26.pdf?updatedAt=1783198251572",
        "type": "pdf"
      }
    ],
    "ytResources": []
  },
  {
    "id": "fundamentals-data-structures",
    "name": "Fundamentals of Data Structures",
    "shortName": "Data Structures",
    "emoji": "🗃️",
    "code": "CS-104",
    "description": "Arrays, linked lists, stacks, queues, trees, and graphs.",
    "resourceCount": 28,
    "studyMaterials": [
      {
        "title": "1-2 Introduction DS",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/study-material/1-2%20Introduction%20DS.pdf?updatedAt=1783198428638",
        "type": "pdf"
      },
      {
        "title": "15-18 Sortings",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/study-material/15-18%20Sortings.pdf?updatedAt=1783198394623",
        "type": "pdf"
      },
      {
        "title": "19-23 Linked List",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/study-material/19-23%20Linked%20List.pdf?updatedAt=1783198484105",
        "type": "pdf"
      },
      {
        "title": "24-28 Stack",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/study-material/24-28%20Stack.pdf?updatedAt=1783198452654",
        "type": "pdf"
      },
      {
        "title": "31-35 Queue and Circular Queue",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/study-material/31-35%20Queue%20and%20Circular%20Queue.pdf?updatedAt=1783198410360",
        "type": "pdf"
      },
      {
        "title": "5-6One Dimensional Array",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/study-material/5-6One%20Dimensional%20Array.pdf?updatedAt=1783198343257",
        "type": "pdf"
      },
      {
        "title": "8-10. Two Dimensional Array",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/study-material/8-10.%20Two%20Dimensional%20Array.pdf?updatedAt=1783198441966",
        "type": "pdf"
      },
      {
        "title": "8-malloc",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/study-material/8-malloc.pdf?updatedAt=1783198403881",
        "type": "pdf"
      },
      {
        "title": "array insertion",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/study-material/array%20insertion.pdf?updatedAt=1783198277801",
        "type": "pdf"
      },
      {
        "title": "Asymptotic Notation",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/study-material/Asymptotic%20Notation.pdf?updatedAt=1783198311671",
        "type": "pdf"
      },
      {
        "title": "Binary Search",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/study-material/Binary%20Search.pdf?updatedAt=1783198292868",
        "type": "pdf"
      },
      {
        "title": "CSC1201-FDS-THEORY HANDOUT",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/study-material/CSC1201-FDS-THEORY%20HANDOUT.pdf?updatedAt=1783198338141",
        "type": "pdf"
      },
      {
        "title": "Dynamic Memory Allocation",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/study-material/Dynamic%20Memory%20Allocation.pdf?updatedAt=1783198330185",
        "type": "pdf"
      },
      {
        "title": "FDS LAB (CSC1230) Course Handout JAN 2026",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/study-material/FDS%20LAB%20(CSC1230)%20Course%20Handout%20JAN%202026.pdf?updatedAt=1783198313951",
        "type": "pdf"
      },
      {
        "title": "linklist",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/study-material/linklist.pdf?updatedAt=1783198302495",
        "type": "pdf"
      },
      {
        "title": "radix and bucket",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/study-material/radix%20and%20bucket.pdf?updatedAt=1783198303860",
        "type": "pdf"
      },
      {
        "title": "singly linked list",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/study-material/singly%20linked%20list.pdf?updatedAt=1783198375662",
        "type": "pdf"
      },
      {
        "title": "singly linked list program",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/study-material/singly%20linked%20list%20program.pdf?updatedAt=1783198326894",
        "type": "pdf"
      },
      {
        "title": "sorting techniques",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/study-material/sorting%20techniques.pdf?updatedAt=1783198458980",
        "type": "pdf"
      },
      {
        "title": "Stack",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/study-material/Stack.pdf?updatedAt=1783198303252",
        "type": "pdf"
      },
      {
        "title": "Two Dimensional Array",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/study-material/Two%20Dimensional%20Array.pdf?updatedAt=1783198448130",
        "type": "pdf"
      },
      {
        "title": "Two Dimensional Array (1)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/study-material/Two%20Dimensional%20Array%20(1).pdf?updatedAt=1783198448112",
        "type": "pdf"
      }
    ],
    "pyqs": [
      {
        "title": "FDS_MTE_Re-sess_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/pyqs/FDS_MTE_Re-sess_Sem-II_2025-26.pdf?updatedAt=1783198277553",
        "type": "pdf"
      },
      {
        "title": "FDS_MTE_ref.CSE2101_Oct2024",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/pyqs/FDS_MTE_ref.CSE2101_Oct2024.pdf?updatedAt=1783198308876",
        "type": "pdf"
      },
      {
        "title": "FDS_MTE_ref.CSE2101_Oct2024 (1)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/pyqs/FDS_MTE_ref.CSE2101_Oct2024%20(1).pdf?updatedAt=1783198308835",
        "type": "pdf"
      },
      {
        "title": "FDS_MTE_ref.CSE2101_Sep2025",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/pyqs/FDS_MTE_ref.CSE2101_Sep2025.pdf?updatedAt=1783198303100",
        "type": "pdf"
      },
      {
        "title": "FDS_MTE_ref.INT2102_Sep2025",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/pyqs/FDS_MTE_ref.INT2102_Sep2025.pdf?updatedAt=1783198323691",
        "type": "pdf"
      },
      {
        "title": "FDS_MTE_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/fundamentals-data-structures/pyqs/FDS_MTE_Sem-II_2025-26.pdf?updatedAt=1783198297179",
        "type": "pdf"
      }
    ],
    "ytResources": []
  },
  {
    "id": "engineering-graphics",
    "name": "Engineering Graphics",
    "shortName": "Eng. Graphics",
    "emoji": "🎨",
    "code": "ME-104",
    "description": "AutoCAD, engineering drawing, projection, and drafting.",
    "resourceCount": 8,
    "studyMaterials": [
      {
        "title": "0. ENGINEERING GRAPHICS (MEE1036) - Course Handout",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/engineering-graphics/study-material/0.%20ENGINEERING%20GRAPHICS%20(MEE1036)%20-%20Course%20Handout.pdf?updatedAt=1783198319618",
        "type": "pdf"
      },
      {
        "title": "1. Lectures 1 - 5",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/engineering-graphics/study-material/1.%20Lectures%201%20-%205.pdf?updatedAt=1783198465556",
        "type": "pdf"
      },
      {
        "title": "2.  Orthographic projections animation _ First angles vs Third angle method",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/engineering-graphics/study-material/2.%20%20Orthographic%20projections%20animation%20_%20First%20angles%20vs%20Third%20angle%20method.mp4?updatedAt=1783198484111",
        "type": "pdf"
      },
      {
        "title": "3. AutoCAD Commands (annexure 3)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/engineering-graphics/study-material/3.%20AutoCAD%20Commands%20(annexure%203).pdf?updatedAt=1783198313430",
        "type": "pdf"
      },
      {
        "title": "4. Projection of Planes.",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/engineering-graphics/study-material/4.%20Projection%20of%20Planes..ppt?updatedAt=1783198315413",
        "type": "pptx"
      },
      {
        "title": "5. Projection of Solids",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/engineering-graphics/study-material/5.%20Projection%20of%20Solids.pps?updatedAt=1783198306901",
        "type": "pdf"
      },
      {
        "title": "ISOMETRIC",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/engineering-graphics/study-material/ISOMETRIC.pdf?updatedAt=1783198441734",
        "type": "pdf"
      }
    ],
    "pyqs": [
      {
        "title": "EG_ETE_Sem-I_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/engineering-graphics/pyqs/EG_ETE_Sem-I_2024-25.pdf?updatedAt=1783198277808",
        "type": "pdf"
      }
    ],
    "ytResources": []
  },
  {
    "id": "engineering-chemistry",
    "name": "Engineering Chemistry",
    "shortName": "Eng. Chem",
    "emoji": "🧪",
    "code": "CH-101",
    "description": "Engineering chemistry, water treatment, fuels, polymers.",
    "resourceCount": 12,
    "studyMaterials": [
      {
        "title": "0. ENGINEERING CHEMISTRY (CHY1001) - Course Handout",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/engineering-chemistry/study-material/0.%20ENGINEERING%20CHEMISTRY%20(CHY1001)%20-%20Course%20Handout.pdf?updatedAt=1783198331086",
        "type": "pdf"
      },
      {
        "title": "1. Water Treatment Technology",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/engineering-chemistry/study-material/1.%20Water%20Treatment%20Technology.pdf?updatedAt=1783198483031",
        "type": "pdf"
      },
      {
        "title": "2. Polymers",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/engineering-chemistry/study-material/2.%20Polymers.pdf?updatedAt=1783198480583",
        "type": "pdf"
      },
      {
        "title": "4. Corrosion",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/engineering-chemistry/study-material/4.%20Corrosion.pdf?updatedAt=1783198475205",
        "type": "pdf"
      }
    ],
    "pyqs": [
      {
        "title": "EC_ETE April-May 2024",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/engineering-chemistry/pyqs/EC_ETE%20April-May%202024.pdf?updatedAt=1783198285920",
        "type": "pdf"
      },
      {
        "title": "EC_ETE_MakeupFEB2025",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/engineering-chemistry/pyqs/EC_ETE_MakeupFEB2025.pdf?updatedAt=1783198285012",
        "type": "pdf"
      },
      {
        "title": "EC_ETE_Sem-I_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/engineering-chemistry/pyqs/EC_ETE_Sem-I_2024-25.pdf?updatedAt=1783198284479",
        "type": "pdf"
      },
      {
        "title": "EC_ETE_Sem-I_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/engineering-chemistry/pyqs/EC_ETE_Sem-I_2025-26.pdf?updatedAt=1783198320170",
        "type": "pdf"
      },
      {
        "title": "EC_ETE_Solution April-May 2024",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/engineering-chemistry/pyqs/EC_ETE_Solution%20April-May%202024.pdf?updatedAt=1783198303147",
        "type": "pdf"
      },
      {
        "title": "EC_MTE_Re-sess_Sem-I_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/engineering-chemistry/pyqs/EC_MTE_Re-sess_Sem-I_2025-26.pdf?updatedAt=1783198286181",
        "type": "pdf"
      },
      {
        "title": "EC_MTE_Re-sess_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/engineering-chemistry/pyqs/EC_MTE_Re-sess_Sem-II_2025-26.pdf?updatedAt=1783198287251",
        "type": "pdf"
      },
      {
        "title": "Solution -EC_ETE_Sem-I_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/engineering-chemistry/pyqs/Solution%20-EC_ETE_Sem-I_2024-25.pdf?updatedAt=1783198302216",
        "type": "pdf"
      }
    ],
    "ytResources": []
  },
  {
    "id": "electronic-circuits",
    "name": "Electronic Circuits",
    "shortName": "Elec. Circuits",
    "emoji": "🔌",
    "code": "EC-101",
    "description": "Basic electronic circuits, diodes, transistors, and rectifiers.",
    "resourceCount": 22,
    "studyMaterials": [
      {
        "title": "8-Application of diode",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electronic-circuits/study-material/8-Application%20of%20diode.pptx?updatedAt=1783198309494",
        "type": "pptx"
      },
      {
        "title": "9-Application of diode-2",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electronic-circuits/study-material/9-Application%20of%20diode-2.pptx?updatedAt=1783198315580",
        "type": "pptx"
      },
      {
        "title": "BJT Lecture 21",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electronic-circuits/study-material/BJT%20Lecture%2021.pptx?updatedAt=1783198296571",
        "type": "pptx"
      },
      {
        "title": "BJT Lecture 22",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electronic-circuits/study-material/BJT%20Lecture%2022.pptx?updatedAt=1783198298174",
        "type": "pptx"
      },
      {
        "title": "BJT Lecture 23 - 25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electronic-circuits/study-material/BJT%20Lecture%2023%20-%2025.pptx?updatedAt=1783198304985",
        "type": "pptx"
      },
      {
        "title": "BJT Lecture 26 - 27",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electronic-circuits/study-material/BJT%20Lecture%2026%20-%2027.pptx?updatedAt=1783198326149",
        "type": "pptx"
      },
      {
        "title": "EC1001-L Zener diode",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electronic-circuits/study-material/EC1001-L%20Zener%20diode.pptx?updatedAt=1783198319833",
        "type": "pptx"
      },
      {
        "title": "ECE1002 - Semiconductor and Diode",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electronic-circuits/study-material/ECE1002%20-%20Semiconductor%20and%20Diode.pdf?updatedAt=1783198436941",
        "type": "pdf"
      },
      {
        "title": "jfet",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electronic-circuits/study-material/jfet.pptx?updatedAt=1783198296185",
        "type": "pptx"
      },
      {
        "title": "Lecture_35_Boolean algebra, DeMorgan_s theorem",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electronic-circuits/study-material/Lecture_35_Boolean%20algebra,%20DeMorgan_s%20theorem.pptx?updatedAt=1783198303110",
        "type": "pptx"
      },
      {
        "title": "Lecture_36_Logic gates_Truth table",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electronic-circuits/study-material/Lecture_36_Logic%20gates_Truth%20table.pptx?updatedAt=1783198304393",
        "type": "pptx"
      },
      {
        "title": "Lecture_36_Logic gates_Truth table (1)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electronic-circuits/study-material/Lecture_36_Logic%20gates_Truth%20table%20(1).pptx?updatedAt=1783198304097",
        "type": "pptx"
      },
      {
        "title": "Lecture_37_Implementation of Boolean expression with logic gates",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electronic-circuits/study-material/Lecture_37_Implementation%20of%20Boolean%20expression%20with%20logic%20gates%20%20.pptx?updatedAt=1783198306152",
        "type": "pptx"
      },
      {
        "title": "Lecture_38_SOP, POS forms",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electronic-circuits/study-material/Lecture_38_SOP,%20POS%20forms.pptx?updatedAt=1783198304150",
        "type": "pptx"
      },
      {
        "title": "Lecture_39_K-Map for minimization of Boolean expressions",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electronic-circuits/study-material/Lecture_39_K-Map%20for%20minimization%20of%20Boolean%20expressions%20.pptx?updatedAt=1783198309393",
        "type": "pptx"
      },
      {
        "title": "Numerical_250811_131238",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electronic-circuits/study-material/Numerical_250811_131238.pptx?updatedAt=1783198314473",
        "type": "pptx"
      },
      {
        "title": "Op-Amp 1",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electronic-circuits/study-material/Op-Amp%201.pptx?updatedAt=1783198320393",
        "type": "pptx"
      },
      {
        "title": "Op-Amp 2",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electronic-circuits/study-material/Op-Amp%202.pptx?updatedAt=1783198313552",
        "type": "pptx"
      },
      {
        "title": "Op-Amp 3",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electronic-circuits/study-material/Op-Amp%203.pptx?updatedAt=1783198317435",
        "type": "pptx"
      }
    ],
    "pyqs": [
      {
        "title": "ECC_Make-up_Sem-I_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electronic-circuits/pyqs/ECC_Make-up_Sem-I_2025-26.pdf?updatedAt=1783198310094",
        "type": "pdf"
      },
      {
        "title": "ECC_MTE_Re-sess_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electronic-circuits/pyqs/ECC_MTE_Re-sess_Sem-II_2025-26.pdf?updatedAt=1783198307378",
        "type": "pdf"
      },
      {
        "title": "ECC_MTE_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electronic-circuits/pyqs/ECC_MTE_Sem-II_2025-26.pdf?updatedAt=1783198308852",
        "type": "pdf"
      }
    ],
    "ytResources": []
  },
  {
    "id": "electrical-and-electronic-systems",
    "name": "Electrical & Electronic Systems",
    "shortName": "E&E Systems",
    "emoji": "⚡",
    "code": "EE-102",
    "description": "AC/DC systems, basic electronics, machinery.",
    "resourceCount": 33,
    "studyMaterials": [
      {
        "title": "BJT-examples",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/BJT-examples.pdf?updatedAt=1783198317421",
        "type": "pdf"
      },
      {
        "title": "BJT-extra numericals",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/BJT-extra%20numericals.pdf?updatedAt=1783198329366",
        "type": "pdf"
      },
      {
        "title": "L1_Course preamble, Brief Overview of Electrical Systems",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/L1_Course%20preamble,%20Brief%20Overview%20of%20Electrical%20Systems.pdf?updatedAt=1783198367887",
        "type": "pdf"
      },
      {
        "title": "L10-11 Thevenin_s Theorem and Maximum Power Transfer Theorem",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/L10-11%20Thevenin_s%20Theorem%20and%20Maximum%20Power%20Transfer%20Theorem.pdf?updatedAt=1783198401131",
        "type": "pdf"
      },
      {
        "title": "L12-Single Phase Circuits",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/L12-Single%20Phase%20Circuits.pdf?updatedAt=1783198451697",
        "type": "pdf"
      },
      {
        "title": "L13 to 15 Single Phase Circuits",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/L13%20to%2015%20Single%20Phase%20Circuits.pdf?updatedAt=1783198433302",
        "type": "pdf"
      },
      {
        "title": "L16 to 19 Diode",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/L16%20to%2019%20Diode.pdf?updatedAt=1783198453347",
        "type": "pdf"
      },
      {
        "title": "L2_Conventional Power Generation",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/L2_Conventional%20Power%20Generation.pdf?updatedAt=1783198365039",
        "type": "pdf"
      },
      {
        "title": "L3_Non-Conventional Power Generation",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/L3_Non-Conventional%20Power%20Generation.pdf?updatedAt=1783198444070",
        "type": "pdf"
      },
      {
        "title": "L4-5 Source Transformation",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/L4-5%20Source%20Transformation.pdf?updatedAt=1783198445289",
        "type": "pdf"
      },
      {
        "title": "L6-L8 Mesh Analysis & Node Analysis",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/L6-L8%20Mesh%20Analysis%20&%20Node%20Analysis.pdf?updatedAt=1783198411328",
        "type": "pdf"
      },
      {
        "title": "L9 Superposition Theorem",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/L9%20Superposition%20Theorem.pdf?updatedAt=1783198385076",
        "type": "pdf"
      },
      {
        "title": "Lecture 20 BJT",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/Lecture%2020%20BJT.pdf?updatedAt=1783198373910",
        "type": "pdf"
      },
      {
        "title": "Lecture 21 BJT",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/Lecture%2021%20BJT.pdf?updatedAt=1783198353807",
        "type": "pdf"
      },
      {
        "title": "Lecture 22 BJT",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/Lecture%2022%20BJT.pdf?updatedAt=1783198357892",
        "type": "pdf"
      },
      {
        "title": "Lecture 23 - 25 BJT",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/Lecture%2023%20-%2025%20BJT.pdf?updatedAt=1783198385855",
        "type": "pdf"
      },
      {
        "title": "Lecture 26 - 27 BJT",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/Lecture%2026%20-%2027%20BJT.pdf?updatedAt=1783198421087",
        "type": "pdf"
      },
      {
        "title": "Lecture_28-31 Op-Amp",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/Lecture_28-31%20Op-Amp.pdf?updatedAt=1783198464385",
        "type": "pdf"
      },
      {
        "title": "Lecture_32_Boolean algebra, DeMorgan_s theorem",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/Lecture_32_Boolean%20algebra,%20DeMorgan_s%20theorem.pdf?updatedAt=1783198410453",
        "type": "pdf"
      },
      {
        "title": "Lecture_33_Logic gates_Truth table",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/Lecture_33_Logic%20gates_Truth%20table.pdf?updatedAt=1783198438136",
        "type": "pdf"
      },
      {
        "title": "Lecture_34_Implementation of Boolean expression with logic gates",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/Lecture_34_Implementation%20of%20Boolean%20expression%20with%20logic%20gates%20%20.pdf?updatedAt=1783198376424",
        "type": "pdf"
      },
      {
        "title": "Lecture_35_SOP, POS forms",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/Lecture_35_SOP,%20POS%20forms.pdf?updatedAt=1783198411301",
        "type": "pdf"
      },
      {
        "title": "Lecture_36_K-Map for minimization of Boolean expressions",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/Lecture_36_K-Map%20for%20minimization%20of%20Boolean%20expressions.pdf?updatedAt=1783198456132",
        "type": "pdf"
      },
      {
        "title": "Lecture_37-39 Sensors",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/Lecture_37-39%20Sensors.pdf?updatedAt=1783198437372",
        "type": "pdf"
      },
      {
        "title": "Lecture_40-IOT",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/Lecture_40-IOT.pdf?updatedAt=1783198380997",
        "type": "pdf"
      },
      {
        "title": "Lecture_41-Drone Technology",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/Lecture_41-Drone%20Technology.pdf?updatedAt=1783198440186",
        "type": "pdf"
      },
      {
        "title": "Lecture_42-Electric vehicle",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/study-material/Lecture_42-Electric%20vehicle.pdf?updatedAt=1783198409968",
        "type": "pdf"
      }
    ],
    "pyqs": [
      {
        "title": "EES_ETE_Sem-I_2023-24_solution",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/pyqs/EES_ETE_Sem-I_2023-24_solution.pdf?updatedAt=1783198359052",
        "type": "pdf"
      },
      {
        "title": "EES_ETE_Sem-I_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/pyqs/EES_ETE_Sem-I_2024-25.pdf?updatedAt=1783198325543",
        "type": "pdf"
      },
      {
        "title": "EES_ETE_Sem-II_2023-24_solution",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/pyqs/EES_ETE_Sem-II_2023-24_solution.pdf?updatedAt=1783198397911",
        "type": "pdf"
      },
      {
        "title": "EES_ETE_Sem-II_2024-25_solution",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/pyqs/EES_ETE_Sem-II_2024-25_solution.pdf?updatedAt=1783198388352",
        "type": "pdf"
      },
      {
        "title": "EES_MTE_Sem-I_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/pyqs/EES_MTE_Sem-I_2024-25.pdf?updatedAt=1783198324777",
        "type": "pdf"
      },
      {
        "title": "EES_MTE_Sem-II_2023-24",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/electrical-and-electronic-systems/pyqs/EES_MTE_Sem-II_2023-24.pdf?updatedAt=1783198456495",
        "type": "pdf"
      }
    ],
    "ytResources": []
  },
  {
    "id": "digital-systems",
    "name": "Digital Systems",
    "shortName": "Digital Sys",
    "emoji": "🔢",
    "code": "CS-105",
    "description": "Boolean algebra, logic gates, flip flops, and counters.",
    "resourceCount": 5,
    "studyMaterials": [],
    "pyqs": [
      {
        "title": "Answer key_DS_ECE1001_Sem-I_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/digital-systems/pyqs/Answer%20key_DS_ECE1001_Sem-I_2025-26.pdf?updatedAt=1783198324639",
        "type": "pdf"
      },
      {
        "title": "DS_ETE_Sem-I_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/digital-systems/pyqs/DS_ETE_Sem-I_2025-26.pdf?updatedAt=1783198394643",
        "type": "pdf"
      },
      {
        "title": "DS_MTE_Re-sess_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/digital-systems/pyqs/DS_MTE_Re-sess_Sem-II_2025-26.pdf?updatedAt=1783198324792",
        "type": "pdf"
      },
      {
        "title": "DS_MTE_Sem-I_2025-2026",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/digital-systems/pyqs/DS_MTE_Sem-I_2025-2026.pdf?updatedAt=1783198333432",
        "type": "pdf"
      },
      {
        "title": "DS_MTE_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/digital-systems/pyqs/DS_MTE_Sem-II_2025-26.pdf?updatedAt=1783198325501",
        "type": "pdf"
      }
    ],
    "ytResources": []
  },
  {
    "id": "communication-skills",
    "name": "Communication Skills",
    "shortName": "Comm. Skills",
    "emoji": "🗣️",
    "code": "HS-104",
    "description": "Listening, speaking, writing, and presentation skills.",
    "resourceCount": 18,
    "studyMaterials": [
      {
        "title": "1. Communication 1",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/communication-skills/study-material/1.%20Communication%201.pptx?updatedAt=1783198336641",
        "type": "pptx"
      },
      {
        "title": "1. Communication 2",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/communication-skills/study-material/1.%20Communication%202.pptx?updatedAt=1783198333437",
        "type": "pptx"
      },
      {
        "title": "1. TWC1-Communication 1",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/communication-skills/study-material/1.%20TWC1-Communication%201.pdf?updatedAt=1783198335751",
        "type": "pdf"
      },
      {
        "title": "1. TWC1-Communication 2",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/communication-skills/study-material/1.%20TWC1-Communication%202.pdf?updatedAt=1783198340740",
        "type": "pdf"
      },
      {
        "title": "2. TWC1 Communication Modes 1",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/communication-skills/study-material/2.%20TWC1%20Communication%20Modes%201.pdf?updatedAt=1783198339614",
        "type": "pdf"
      },
      {
        "title": "2. TWC1 Communication Modes 2",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/communication-skills/study-material/2.%20TWC1%20Communication%20Modes%202.pdf?updatedAt=1783198339440",
        "type": "pdf"
      },
      {
        "title": "2. TWC1 Communication Modes 3",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/communication-skills/study-material/2.%20TWC1%20Communication%20Modes%203.pdf?updatedAt=1783198340633",
        "type": "pdf"
      },
      {
        "title": "3. Barriers to Communication",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/communication-skills/study-material/3.%20Barriers%20to%20Communication.pptx?updatedAt=1783198340825",
        "type": "pptx"
      },
      {
        "title": "3. Barriers to Listening Skills",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/communication-skills/study-material/3.%20Barriers%20to%20Listening%20Skills.pptx?updatedAt=1783198341474",
        "type": "pptx"
      },
      {
        "title": "3. Communication Barriers",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/communication-skills/study-material/3.%20Communication%20Barriers.pptx?updatedAt=1783198341501",
        "type": "pptx"
      },
      {
        "title": "3. TWC1-Communication Barriers",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/communication-skills/study-material/3.%20TWC1-Communication%20Barriers.pdf?updatedAt=1783198342492",
        "type": "pdf"
      },
      {
        "title": "communication skills (1)",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/communication-skills/study-material/communication%20skills%20(1).pdf?updatedAt=1783198379915",
        "type": "pdf"
      },
      {
        "title": "PowerPoint Presentation Guidelines",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/communication-skills/study-material/PowerPoint%20Presentation%20Guidelines.pdf?updatedAt=1783198349365",
        "type": "pdf"
      },
      {
        "title": "Powerpointguidelines PPT McGill University",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/communication-skills/study-material/Powerpointguidelines%20PPT%20McGill%20University.pdf?updatedAt=1783198350441",
        "type": "pdf"
      }
    ],
    "pyqs": [
      {
        "title": "CS_ETE_Sem-I_2025-2026",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/communication-skills/pyqs/CS_ETE_Sem-I_2025-2026.pdf?updatedAt=1783198349848",
        "type": "pdf"
      },
      {
        "title": "CS_Make-up_Sem-I_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/communication-skills/pyqs/CS_Make-up_Sem-I_2025-26.pdf?updatedAt=1783198346371",
        "type": "pdf"
      },
      {
        "title": "TWC_ETE_2023Dec",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/communication-skills/pyqs/TWC_ETE_2023Dec.pdf?updatedAt=1783198348832",
        "type": "pdf"
      },
      {
        "title": "TWC_ETE_Sem-I_2024-25",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/communication-skills/pyqs/TWC_ETE_Sem-I_2024-25.pdf?updatedAt=1783198347083",
        "type": "pdf"
      }
    ],
    "ytResources": []
  },
  {
    "id": "data-visualization",
    "name": "Data Visualization",
    "shortName": "Data Viz",
    "emoji": "📊",
    "code": "CS-103",
    "description": "Charts, data storytelling, and visual analytics tools.",
    "resourceCount": 15,
    "studyMaterials": [
      {
        "title": "01 Visual Representation of Data",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/data-visualization/study-material/01%20Visual%20Representation%20of%20Data.pptx?updatedAt=1783198394869",
        "type": "pptx"
      },
      {
        "title": "02 Gestalt Principles",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/data-visualization/study-material/02%20Gestalt%20Principles.pptx?updatedAt=1783198369459",
        "type": "pptx"
      },
      {
        "title": "03 Information Overload",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/data-visualization/study-material/03%20Information%20Overload.pptx?updatedAt=1783198463162",
        "type": "pptx"
      },
      {
        "title": "04 Creating Visual Representations _ Visualization Reference Model",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/data-visualization/study-material/04%20Creating%20Visual%20Representations%20_%20Visualization%20Reference%20Model.pptx?updatedAt=1783198404840",
        "type": "pptx"
      },
      {
        "title": "05 Visual Mapping",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/data-visualization/study-material/05%20Visual%20Mapping.pptx?updatedAt=1783198421685",
        "type": "pptx"
      },
      {
        "title": "06 Visual Analytics",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/data-visualization/study-material/06%20Visual%20Analytics.pptx?updatedAt=1783198383243",
        "type": "pptx"
      },
      {
        "title": "07 Design of Visualization Applications",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/data-visualization/study-material/07%20Design%20of%20Visualization%20Applications.pptx?updatedAt=1783198410798",
        "type": "pptx"
      },
      {
        "title": "08 Classification of Visualization Systems - Interaction and Visualization Techniques",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/data-visualization/study-material/08%20Classification%20of%20Visualization%20Systems%20-%20Interaction%20and%20Visualization%20Techniques.pptx?updatedAt=1783198455611",
        "type": "pptx"
      },
      {
        "title": "09 Visualization of One, Two, and Multi-Dimensional Data",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/data-visualization/study-material/09%20Visualization%20of%20One,%20Two,%20and%20Multi-Dimensional%20Data.pptx?updatedAt=1783198398713",
        "type": "pptx"
      },
      {
        "title": "10 Visualization of Text and Text Documents",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/data-visualization/study-material/10%20Visualization%20of%20Text%20and%20Text%20Documents.pptx?updatedAt=1783198457746",
        "type": "pptx"
      },
      {
        "title": "11 Line Plot",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/data-visualization/study-material/11%20Line%20Plot.pptx?updatedAt=1783198364981",
        "type": "pptx"
      },
      {
        "title": "12 Bar",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/data-visualization/study-material/12%20Bar.pptx?updatedAt=1783198353860",
        "type": "pptx"
      },
      {
        "title": "12-24 Lecture",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/data-visualization/study-material/12-24%20Lecture.pptx?updatedAt=1783198383530",
        "type": "pptx"
      }
    ],
    "pyqs": [
      {
        "title": "DV_MTE_Re-sess_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/data-visualization/pyqs/DV_MTE_Re-sess_Sem-II_2025-26.pdf?updatedAt=1783198363699",
        "type": "pdf"
      },
      {
        "title": "DV_MTE_Sem-II_2025-26",
        "url": "https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/chemistry-cycle/data-visualization/pyqs/DV_MTE_Sem-II_2025-26.pdf?updatedAt=1783198383611",
        "type": "pdf"
      }
    ],
    "ytResources": []
  }
]
  }
];

export const branches: Branch[] = [
  {
    "id": "aiml",
    "name": "Artificial Intelligence & ML",
    "shortName": "AIML",
    "emoji": "\ud83e\udd16",
    "icon": "Brain",
    "gradient": "from-purple-500 to-violet-600",
    "color": "#7c3aed",
    "description": "Intelligence systems, Neural Networks & Machine Learning",
    "subjects": [
      {
        "id": "aiml-coa",
        "name": "Computer Organization & Architecture",
        "shortName": "COA",
        "emoji": "\ud83d\udcbb",
        "code": "CS-2101",
        "description": "Processor data paths, memory hierarchy, instruction sets, pipelining, and I/O organization.",
        "resourceCount": 30,
        "studyMaterials": [
          {
            "title": "1. Memory mapping (Cache).docx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/study-material/1.%20Memory%20mapping%20(Cache).docx?updatedAt=1784893720083",
            "type": "pdf"
          },
          {
            "title": "2. Assembly Language.docx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/study-material/2.%20Assembly%20Language.docx?updatedAt=1784893720094",
            "type": "pdf"
          },
          {
            "title": "3. Pipelining.docx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/study-material/3.%20Pipelining.docx?updatedAt=1784893727793",
            "type": "pdf"
          },
          {
            "title": "Pipelining.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/study-material/Pipelining.pptx?updatedAt=1784893728692",
            "type": "pdf"
          },
          {
            "title": "Control Sequences for three bus processor data path",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/study-material/Control%20Sequences%20for%20three%20bus%20processor%20data%20path.pdf?updatedAt=1784893728904",
            "type": "pdf"
          },
          {
            "title": "Introduction.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/study-material/Introduction.ppt?updatedAt=1784893732814",
            "type": "pdf"
          },
          {
            "title": "The Memory System.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/study-material/The%20Memory%20System.ppt?updatedAt=1784893735096",
            "type": "pdf"
          },
          {
            "title": "Arithmetic.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/study-material/Arithmetic.pptx?updatedAt=1784893736901",
            "type": "pdf"
          },
          {
            "title": "Parallelism_and_multicores.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/study-material/Parallelism_and_multicores.pptx?updatedAt=1784893773927",
            "type": "pdf"
          },
          {
            "title": "Architecture",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/study-material/Architecture.pdf?updatedAt=1784893781497",
            "type": "pdf"
          },
          {
            "title": "chapter5-the memory system",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/study-material/chapter5-the%20memory%20system.pdf?updatedAt=1784893790949",
            "type": "pdf"
          },
          {
            "title": "Basic Structure of Computers and Machine Instructions.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/study-material/Basic%20Structure%20of%20Computers%20and%20Machine%20Instructions.ppt?updatedAt=1784893791488",
            "type": "pdf"
          },
          {
            "title": "week3-slides",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/study-material/week3-slides.pdf?updatedAt=1784893796932",
            "type": "pdf"
          },
          {
            "title": "chapter6-Arithmetic",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/study-material/chapter6-Arithmetic.pdf?updatedAt=1784893799903",
            "type": "pdf"
          },
          {
            "title": "week4-slides",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/study-material/week4-slides.pdf?updatedAt=1784893803215",
            "type": "pdf"
          },
          {
            "title": "chapter 1-Basic Structure of Computers",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/study-material/chapter%201-Basic%20Structure%20of%20Computers.pdf?updatedAt=1784893812557",
            "type": "pdf"
          },
          {
            "title": "ISA",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/study-material/ISA.pdf?updatedAt=1784893815029",
            "type": "pdf"
          },
          {
            "title": "chapter6- Pipelining",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/study-material/chapter6-%20Pipelining.pdf?updatedAt=1784893832545",
            "type": "pdf"
          },
          {
            "title": "week9-slides",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/study-material/week9-slides.pdf?updatedAt=1784893842859",
            "type": "pdf"
          },
          {
            "title": "chapter2- Machine Instructions and Programs",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/study-material/chapter2-%20Machine%20Instructions%20and%20Programs.pdf?updatedAt=1784893847598",
            "type": "pdf"
          },
          {
            "title": "week12-slides",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/study-material/week12-slides.pdf?updatedAt=1784893862929",
            "type": "pdf"
          },
          {
            "title": "week11-slides",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/study-material/week11-slides.pdf?updatedAt=1784893864166",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "COA_Make-up_Sem-3_2024-25 (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/pyqs/COA_Make-up_Sem-3_2024-25%20(1).pdf?updatedAt=1784893729900",
            "type": "pdf"
          },
          {
            "title": "COA_Make-up_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/pyqs/COA_Make-up_Sem-3_2024-25.pdf?updatedAt=1784893730065",
            "type": "pdf"
          },
          {
            "title": "COA_MTE_Sem-3_2024-2025 (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/pyqs/COA_MTE_Sem-3_2024-2025%20(1).pdf?updatedAt=1784893730077",
            "type": "pdf"
          },
          {
            "title": "COA_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/pyqs/COA_ETE_Sem-3_2025-26.pdf?updatedAt=1784893732409",
            "type": "pdf"
          },
          {
            "title": "COA_MTE_Sem-3_2025-2026(With Solns) (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/pyqs/COA_MTE_Sem-3_2025-2026(With%20Solns)%20(1).pdf?updatedAt=1784893734412",
            "type": "pdf"
          },
          {
            "title": "COA_ETE_Sem-3_2025-26(with Solns) (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/pyqs/COA_ETE_Sem-3_2025-26(with%20Solns)%20(1).pdf?updatedAt=1784893739603",
            "type": "pdf"
          },
          {
            "title": "COA_ETE_Sem-3_2024-25(with Solns) (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/pyqs/COA_ETE_Sem-3_2024-25(with%20Solns)%20(1).pdf?updatedAt=1784893742562",
            "type": "pdf"
          },
          {
            "title": "COA_MTE_Sem-3_2024-2025(With Solns) (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/coa/pyqs/COA_MTE_Sem-3_2024-2025(With%20Solns)%20(1).pdf?updatedAt=1784893753435",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Computer Organization & Architecture Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "aiml-daa",
        "name": "Design and Analysis of Algorithms",
        "shortName": "DAA",
        "emoji": "\ud83e\uddee",
        "code": "CS-2201",
        "description": "Algorithm analysis, divide-and-conquer, greedy approaches, dynamic programming, and NP-completeness.",
        "resourceCount": 16,
        "studyMaterials": [
          {
            "title": "5. Mathematical Analysis of Non Recursive techniques.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/daa/study-material/5.%20Mathematical%20Analysis%20of%20Non%20Recursive%20techniques.pptx?updatedAt=1784893732956",
            "type": "pdf"
          },
          {
            "title": "merge (1).pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/daa/study-material/merge%20(1).pptx?updatedAt=1784893734226",
            "type": "pdf"
          },
          {
            "title": "11. Graphs_BFS_DFS.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/daa/study-material/11.%20Graphs_BFS_DFS.ppt?updatedAt=1784893739376",
            "type": "pdf"
          },
          {
            "title": "1. Introduction to Algorithms, Specification of Algorithm, Complexity.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/daa/study-material/1.%20Introduction%20to%20Algorithms,%20Specification%20of%20Algorithm,%20Complexity.pptx?updatedAt=1784893739633",
            "type": "pdf"
          },
          {
            "title": "4. Mathematical Analysis of Recursive techniques.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/daa/study-material/4.%20Mathematical%20Analysis%20of%20Recursive%20techniques.pptx?updatedAt=1784893756064",
            "type": "pdf"
          },
          {
            "title": "3. Time & Space Complexity _ Hands-on.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/daa/study-material/3.%20Time%20&%20Space%20Complexity%20_%20Hands-on.pptx?updatedAt=1784893762236",
            "type": "pdf"
          },
          {
            "title": "P NP Complete.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/daa/study-material/P%20NP%20Complete.pptx?updatedAt=1784893765244",
            "type": "pdf"
          },
          {
            "title": "2. Asymptotic Notation- Analysis of Algorithms.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/daa/study-material/2.%20Asymptotic%20Notation-%20Analysis%20of%20Algorithms.pptx?updatedAt=1784893766039",
            "type": "pdf"
          },
          {
            "title": "Backtracking All.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/daa/study-material/Backtracking%20All.pptx?updatedAt=1784893791147",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "ETE Question Paper DAA (CS3102) Dec24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/daa/pyqs/ETE%20Question%20Paper%20DAA%20(CS3102)%20Dec24.pdf?updatedAt=1784893723038",
            "type": "pdf"
          },
          {
            "title": "DAA_MTE_Sem-5_Oct2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/daa/pyqs/DAA_MTE_Sem-5_Oct2024.pdf?updatedAt=1784893724802",
            "type": "pdf"
          },
          {
            "title": "DAA_MTE_Sem-4_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/daa/pyqs/DAA_MTE_Sem-4_2024-25.pdf?updatedAt=1784893731653",
            "type": "pdf"
          },
          {
            "title": "DAA_CS3102_Make-up_Sem-5_2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/daa/pyqs/DAA_CS3102_Make-up_Sem-5_2024.pdf?updatedAt=1784893733675",
            "type": "pdf"
          },
          {
            "title": "DAA_CS3102_ETE_Sem-5_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/daa/pyqs/DAA_CS3102_ETE_Sem-5_2023-24.pdf?updatedAt=1784893734029",
            "type": "pdf"
          },
          {
            "title": "DAA_MTE_Sem-4_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/daa/pyqs/DAA_MTE_Sem-4_2024-2025.pdf?updatedAt=1784893735378",
            "type": "pdf"
          },
          {
            "title": "DAA_MTE_Sem-5_2023-2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/daa/pyqs/DAA_MTE_Sem-5_2023-2024.pdf?updatedAt=1784893740730",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Design and Analysis of Algorithms Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "aiml-dsa",
        "name": "Data Structures & Algorithms",
        "shortName": "DSA",
        "emoji": "\ud83e\uddec",
        "code": "CS-2102",
        "description": "Arrays, linked lists, stacks, queues, trees, graphs, hashing, and fundamental sorting/searching techniques.",
        "resourceCount": 26,
        "studyMaterials": [
          {
            "title": "7-9. Dynamic Array and DMA.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/study-material/7-9.%20Dynamic%20Array%20and%20DMA.pptx?updatedAt=1784893734250",
            "type": "pdf"
          },
          {
            "title": "3. One Dimensional Array.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/study-material/3.%20One%20Dimensional%20Array.pptx?updatedAt=1784893735224",
            "type": "pdf"
          },
          {
            "title": "42-44 Sortings.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/study-material/42-44%20Sortings.pptx?updatedAt=1784893739185",
            "type": "pdf"
          },
          {
            "title": "6. Pointes.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/study-material/6.%20Pointes.pptx?updatedAt=1784893740140",
            "type": "pdf"
          },
          {
            "title": "47. Hashing.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/study-material/47.%20Hashing.pptx?updatedAt=1784893740301",
            "type": "pdf"
          },
          {
            "title": "4-5. Two Dimensional Array.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/study-material/4-5.%20Two%20Dimensional%20Array.pptx?updatedAt=1784893740654",
            "type": "pdf"
          },
          {
            "title": "43. MST, Prims, Kruskals.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/study-material/43.%20MST,%20Prims,%20Kruskals.ppt?updatedAt=1784893741753",
            "type": "pdf"
          },
          {
            "title": "44. Hashing.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/study-material/44.%20Hashing.pptx?updatedAt=1784893745244",
            "type": "pdf"
          },
          {
            "title": "36. Heaps and Heap Sort.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/study-material/36.%20Heaps%20and%20Heap%20Sort.ppt?updatedAt=1784893764152",
            "type": "pdf"
          },
          {
            "title": "46. Merge Sort and Quick Sort.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/study-material/46.%20Merge%20Sort%20and%20Quick%20Sort.ppt?updatedAt=1784893767332",
            "type": "pdf"
          },
          {
            "title": "18-19. Recursion.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/study-material/18-19.%20Recursion.ppt?updatedAt=1784893790572",
            "type": "pdf"
          },
          {
            "title": "41-42. Graph Data Structure.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/study-material/41-42.%20Graph%20Data%20Structure.ppt?updatedAt=1784893801359",
            "type": "pdf"
          },
          {
            "title": "10-17. Linked List.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/study-material/10-17.%20Linked%20List.pptx?updatedAt=1784893801602",
            "type": "pdf"
          },
          {
            "title": "1 - 2. Introduction and Performance Analysis Updated.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/study-material/1%20-%202.%20Introduction%20and%20Performance%20Analysis%20Updated.pptx?updatedAt=1784893874017",
            "type": "pdf"
          },
          {
            "title": "26-29. Queue and Circular Queue.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/study-material/26-29.%20Queue%20and%20Circular%20Queue.ppt?updatedAt=1784893876802",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "DSA_AI2103_MTE_Sem-3_Summer2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/pyqs/DSA_AI2103_MTE_Sem-3_Summer2024.pdf?updatedAt=1784893726085",
            "type": "pdf"
          },
          {
            "title": "DSA_INT2102_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/pyqs/DSA_INT2102_MTE_Sem-3_2025-26.pdf?updatedAt=1784893731092",
            "type": "pdf"
          },
          {
            "title": "DSA_MTE_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/pyqs/DSA_MTE_Sem-3_2024-25.pdf?updatedAt=1784893731523",
            "type": "pdf"
          },
          {
            "title": "DSA_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/pyqs/DSA_MTE_Sem-3_2025-26.pdf?updatedAt=1784893732208",
            "type": "pdf"
          },
          {
            "title": "DSA_DSE2101_ETE_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/pyqs/DSA_DSE2101_ETE_Sem-3_2024-25.pdf?updatedAt=1784893732430",
            "type": "pdf"
          },
          {
            "title": "DSA_ETE_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/pyqs/DSA_ETE_Sem-3_2024-25.pdf?updatedAt=1784893734304",
            "type": "pdf"
          },
          {
            "title": "DSA_IT2101_Make-up_Sem-3_Summer2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/pyqs/DSA_IT2101_Make-up_Sem-3_Summer2024.pdf?updatedAt=1784893736952",
            "type": "pdf"
          },
          {
            "title": "DSA-MTE-Solution (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/pyqs/DSA-MTE-Solution%20(1).pdf?updatedAt=1784893737674",
            "type": "pdf"
          },
          {
            "title": "DSA_DSE2101_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/pyqs/DSA_DSE2101_ETE_Sem-3_2025-26.pdf?updatedAt=1784893738726",
            "type": "pdf"
          },
          {
            "title": "DSA_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/pyqs/DSA_ETE_Sem-3_2025-26.pdf?updatedAt=1784893739901",
            "type": "pdf"
          },
          {
            "title": "DSA_AIM2101_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/dsa/pyqs/DSA_AIM2101_ETE_Sem-3_2025-26.pdf?updatedAt=1784893740878",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Data Structures & Algorithms Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "aiml-engineering-economics",
        "name": "Engineering Economics",
        "shortName": "Engineering Eco",
        "emoji": "\ud83d\udcc8",
        "code": "HS-2101",
        "description": "Financial evaluation of engineering projects, time value of money, cost estimation, depreciation, and budgeting.",
        "resourceCount": 24,
        "studyMaterials": [
          {
            "title": "Risk and Risk_Vs_Returns_L28",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/engineering-economics/study-material/Risk%20and%20Risk_Vs_Returns_L28.pdf?updatedAt=1784893726503",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_7",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_7.pdf?updatedAt=1784893727194",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_20-21",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_20-21.pdf?updatedAt=1784893728780",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_3 (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_3%20(1).pdf?updatedAt=1784893729607",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_3",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_3.pdf?updatedAt=1784893729583",
            "type": "pdf"
          },
          {
            "title": "Budgeting_L25-27-final",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/engineering-economics/study-material/Budgeting_L25-27-final.pdf?updatedAt=1784893732988",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_10-12 new",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_10-12%20new.pdf?updatedAt=1784893733153",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_22 24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_22%2024.pdf?updatedAt=1784893736865",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_13",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_13.pdf?updatedAt=1784893737050",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_NPV_L14-17",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_NPV_L14-17.pdf?updatedAt=1784893738439",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_8 9",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_8%209.pdf?updatedAt=1784893740118",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_NPV,IRR_L14-19",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_NPV,IRR_L14-19.pdf?updatedAt=1784893741348",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_1",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_1.pdf?updatedAt=1784893742446",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_2",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_2.pdf?updatedAt=1784893743813",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_4-5",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_4-5.pdf?updatedAt=1784893746716",
            "type": "pdf"
          },
          {
            "title": "Depreciation_L29-31",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/engineering-economics/study-material/Depreciation_L29-31.pdf?updatedAt=1784893759997",
            "type": "pdf"
          },
          {
            "title": "PERT CPM final_L32-35 - Copy",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/engineering-economics/study-material/PERT%20CPM%20final_L32-35%20-%20Copy.pdf?updatedAt=1784893763507",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "ECO_Make-up_Sem-4_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/engineering-economics/pyqs/ECO_Make-up_Sem-4_2023-24.pdf?updatedAt=1784893724327",
            "type": "pdf"
          },
          {
            "title": "ECO_Make-up_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/engineering-economics/pyqs/ECO_Make-up_Sem-3_2024-25.pdf?updatedAt=1784893724636",
            "type": "pdf"
          },
          {
            "title": "ECO_MTE_Sem-4_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/engineering-economics/pyqs/ECO_MTE_Sem-4_2023-24.pdf?updatedAt=1784893728309",
            "type": "pdf"
          },
          {
            "title": "ECO_MTE_Sem-4_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/engineering-economics/pyqs/ECO_MTE_Sem-4_2025-26.pdf?updatedAt=1784893729922",
            "type": "pdf"
          },
          {
            "title": "ECO_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/engineering-economics/pyqs/ECO_MTE_Sem-3_2025-26.pdf?updatedAt=1784893730172",
            "type": "pdf"
          },
          {
            "title": "ECO_ETE_Sem-4_2023-2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/engineering-economics/pyqs/ECO_ETE_Sem-4_2023-2024.pdf?updatedAt=1784893736722",
            "type": "pdf"
          },
          {
            "title": "ECO_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/engineering-economics/pyqs/ECO_ETE_Sem-3_2025-26.pdf?updatedAt=1784893739271",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Engineering Economics Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "aiml-oops-java",
        "name": "Object Oriented Programming (Java)",
        "shortName": "OOPs (Java)",
        "emoji": "\u2615",
        "code": "CS-2103",
        "description": "Classes, inheritance, interfaces, polymorphism, exception handling, and multithreading in Java.",
        "resourceCount": 25,
        "studyMaterials": [
          {
            "title": "JSE (Lecture-18 )(Keyword this and static)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20java/study-material/JSE%20(Lecture-18%20)(Keyword%20this%20and%20static).pdf?updatedAt=1784893721862",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-21)(Method overriding)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20java/study-material/JSE%20(Lecture-21)(Method%20overriding).pdf?updatedAt=1784893723024",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-7 part-2)_Operator",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20java/study-material/JSE%20(Lecture-7%20part-2)_Operator.pdf?updatedAt=1784893723057",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-23 )(Using keyword final)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20java/study-material/JSE%20(Lecture-23%20)(Using%20keyword%20final).pdf?updatedAt=1784893723037",
            "type": "pdf"
          },
          {
            "title": "Lect-7",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20java/study-material/Lect-7.pdf?updatedAt=1784893723551",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-24 )(Interfaces)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20java/study-material/JSE%20(Lecture-24%20)(Interfaces).pdf?updatedAt=1784893724458",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-8)_Conditional Statements",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20java/study-material/JSE%20(Lecture-8)_Conditional%20Statements.pdf?updatedAt=1784893724913",
            "type": "pdf"
          },
          {
            "title": "Lect-8",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20java/study-material/Lect-8.pdf?updatedAt=1784893725785",
            "type": "pdf"
          },
          {
            "title": "Lect-5",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20java/study-material/Lect-5.pdf?updatedAt=1784893725850",
            "type": "pdf"
          },
          {
            "title": "Lect-6",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20java/study-material/Lect-6.pdf?updatedAt=1784893726686",
            "type": "pdf"
          },
          {
            "title": "Lect-1",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20java/study-material/Lect-1.pdf?updatedAt=1784893727400",
            "type": "pdf"
          },
          {
            "title": "Lect-20-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20java/study-material/Lect-20-26.pdf?updatedAt=1784893727461",
            "type": "pdf"
          },
          {
            "title": "Lect-4",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20java/study-material/Lect-4.pdf?updatedAt=1784893728451",
            "type": "pdf"
          },
          {
            "title": "Lect-26-28",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20java/study-material/Lect-26-28.pdf?updatedAt=1784893729022",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-7)_String",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20java/study-material/JSE%20(Lecture-7)_String.pdf?updatedAt=1784893728993",
            "type": "pdf"
          },
          {
            "title": "Lect-2,3",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20java/study-material/Lect-2,3.pdf?updatedAt=1784893729060",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-14)initialize instance variables",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20java/study-material/JSE%20(Lecture-14)initialize%20instance%20variables.pdf?updatedAt=1784893775188",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-15 )(Explicit,Initializers,constructors)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20java/study-material/JSE%20(Lecture-15%20)(Explicit,Initializers,constructors).pdf?updatedAt=1784893775757",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-17 )(Argument Passing) (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20java/study-material/JSE%20(Lecture-17%20)(Argument%20Passing)%20(1).pdf?updatedAt=1784893777866",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-17 )(Argument Passing)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20java/study-material/JSE%20(Lecture-17%20)(Argument%20Passing).pdf?updatedAt=1784893779906",
            "type": "pdf"
          },
          {
            "title": "Introduction to java.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20java/study-material/Introduction%20to%20java.ppt?updatedAt=1784893780537",
            "type": "pdf"
          },
          {
            "title": "introduction_OO.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20java/study-material/introduction_OO.pptx?updatedAt=1784893791472",
            "type": "pdf"
          },
          {
            "title": "Java_Basics",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20java/study-material/Java_Basics.pdf?updatedAt=1784893793246",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "OOP-J_ETE_Sem-3_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20java/pyqs/OOP-J_ETE_Sem-3_2024-2025.pdf?updatedAt=1784893724839",
            "type": "pdf"
          },
          {
            "title": "OOP-J_MTE_Sem-3_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20java/pyqs/OOP-J_MTE_Sem-3_2024-2025.pdf?updatedAt=1784893725895",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Object Oriented Programming (Java) Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "aiml-oops-python",
        "name": "Object Oriented Programming (Python)",
        "shortName": "OOPs (Python)",
        "emoji": "\ud83d\udc0d",
        "code": "CS-2105",
        "description": "Object-oriented design patterns, functional programming features, decorators, and data structures in Python.",
        "resourceCount": 11,
        "studyMaterials": [
          {
            "title": "CS2122_Encapsulation",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20python/study-material/CS2122_Encapsulation.pdf?updatedAt=1784893773461",
            "type": "pdf"
          },
          {
            "title": "CSE2122_OOPs",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20python/study-material/CSE2122_OOPs.pdf?updatedAt=1784893774210",
            "type": "pdf"
          },
          {
            "title": "Data Structure_Tree",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20python/study-material/Data%20Structure_Tree.pdf?updatedAt=1784893775945",
            "type": "pdf"
          },
          {
            "title": "Python- Data Structures",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20python/study-material/Python-%20Data%20Structures.pdf?updatedAt=1784893780441",
            "type": "pdf"
          },
          {
            "title": "Functions in Python",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20python/study-material/Functions%20in%20Python.pdf?updatedAt=1784893781005",
            "type": "pdf"
          },
          {
            "title": "Generators and Modules",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20python/study-material/Generators%20and%20Modules.pdf?updatedAt=1784893781514",
            "type": "pdf"
          },
          {
            "title": "CS2122_Inheritance",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20python/study-material/CS2122_Inheritance.pdf?updatedAt=1784893786996",
            "type": "pdf"
          },
          {
            "title": "Arrays_In-Built Function in python data structure_Search and Sort",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20python/study-material/Arrays_In-Built%20Function%20in%20python%20data%20structure_Search%20and%20Sort.pdf?updatedAt=1784893787665",
            "type": "pdf"
          },
          {
            "title": "CS2122_Constructor",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20python/study-material/CS2122_Constructor.pdf?updatedAt=1784893787884",
            "type": "pdf"
          },
          {
            "title": "OOP CONCEPTS",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20python/study-material/OOP%20CONCEPTS.pdf?updatedAt=1784893791801",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "OOP-P_MTE_Sem-3_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/oops%20python/pyqs/OOP-P_MTE_Sem-3_2024-2025.pdf?updatedAt=1784893782246",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Object Oriented Programming (Python) Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "aiml-rdbms",
        "name": "Relational Database Management Systems",
        "shortName": "RDBMS",
        "emoji": "\ud83d\uddc4\ufe0f",
        "code": "CS-2203",
        "description": "Relational model, SQL queries, ER diagrams, normalization, indexing, transaction processing, and concurrency.",
        "resourceCount": 7,
        "studyMaterials": [],
        "pyqs": [
          {
            "title": "2 Moderated QP CS2202 RDBMS",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/rdbms/pyqs/2%20Moderated%20QP%20CS2202%20RDBMS.pdf?updatedAt=1784893707444",
            "type": "pdf"
          },
          {
            "title": "CSE2102 - RDBMS",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/rdbms/pyqs/CSE2102%20-%20RDBMS.pdf?updatedAt=1784893709941",
            "type": "pdf"
          },
          {
            "title": "MTE1 QP CS2202 RDBMS Solution 2021",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/rdbms/pyqs/MTE1%20QP%20CS2202%20RDBMS%20Solution%202021.pdf?updatedAt=1784893711369",
            "type": "pdf"
          },
          {
            "title": "RDBMS_MTE_CS2202_Sem-4_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/rdbms/pyqs/RDBMS_MTE_CS2202_Sem-4_2023-24.pdf?updatedAt=1784893774771",
            "type": "pdf"
          },
          {
            "title": "RDBMS_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/rdbms/pyqs/RDBMS_MTE_Sem-3_2025-26.pdf?updatedAt=1784893782106",
            "type": "pdf"
          },
          {
            "title": "CS2202-RDBMS-Set C - Solution (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/rdbms/pyqs/CS2202-RDBMS-Set%20C%20-%20Solution%20(1).pdf?updatedAt=1784893785828",
            "type": "pdf"
          },
          {
            "title": "CS2202-RDBMS-Set C - Solution",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/rdbms/pyqs/CS2202-RDBMS-Set%20C%20-%20Solution.pdf?updatedAt=1784893786853",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Relational Database Management Systems Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "aiml-statistics-probability",
        "name": "Statistics & Probability",
        "shortName": "Stats & Prob",
        "emoji": "\ud83d\udcca",
        "code": "MA-2101",
        "description": "Probability distributions, random variables, statistical inference, hypothesis testing, and regression.",
        "resourceCount": 8,
        "studyMaterials": [
          {
            "title": "S&P-2",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/statistics-probability/study-material/S&P-2.pdf?updatedAt=1784893801886",
            "type": "pdf"
          },
          {
            "title": "S&P-1",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/statistics-probability/study-material/S&P-1.pdf?updatedAt=1784893856076",
            "type": "pdf"
          },
          {
            "title": "S&P-3",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/statistics-probability/study-material/S&P-3.pdf?updatedAt=1784893882085",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "S&P_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/statistics-probability/pyqs/S&P_ETE_Sem-3_2025-26.pdf?updatedAt=1784893704398",
            "type": "pdf"
          },
          {
            "title": "S&P_ETE_Sem-4_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/statistics-probability/pyqs/S&P_ETE_Sem-4_2024-25.pdf?updatedAt=1784893706060",
            "type": "pdf"
          },
          {
            "title": "S&P_MTE_Sem-3_2025-2026",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/statistics-probability/pyqs/S&P_MTE_Sem-3_2025-2026.pdf?updatedAt=1784893711044",
            "type": "pdf"
          },
          {
            "title": "S&P_MTE_Sem-3_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/statistics-probability/pyqs/S&P_MTE_Sem-3_2024-2025.pdf?updatedAt=1784893775222",
            "type": "pdf"
          },
          {
            "title": "S&P_ETE_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/aiml-2nd%20year/statistics-probability/pyqs/S&P_ETE_Sem-3_2024-25.pdf?updatedAt=1784893777302",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Statistics & Probability Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      }
    ]
  },
  {
    "id": "cce",
    "name": "Computer & Communication Engg",
    "shortName": "CCE",
    "emoji": "\ud83d\udce1",
    "icon": "Wifi",
    "gradient": "from-teal-500 to-cyan-600",
    "color": "#0891b2",
    "description": "Networks, Communication Systems & Computing",
    "subjects": [
      {
        "id": "cce-dsa",
        "name": "Data Structures & Algorithms",
        "shortName": "DSA",
        "emoji": "\ud83e\uddec",
        "code": "CS-2102",
        "description": "Arrays, linked lists, stacks, queues, trees, graphs, hashing, and fundamental sorting/searching techniques.",
        "resourceCount": 26,
        "studyMaterials": [
          {
            "title": "3. One Dimensional Array.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/study-material/3.%20One%20Dimensional%20Array.pptx?updatedAt=1784893706347",
            "type": "pdf"
          },
          {
            "title": "7-9. Dynamic Array and DMA.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/study-material/7-9.%20Dynamic%20Array%20and%20DMA.pptx?updatedAt=1784893708130",
            "type": "pdf"
          },
          {
            "title": "42-44 Sortings.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/study-material/42-44%20Sortings.pptx?updatedAt=1784893764705",
            "type": "pdf"
          },
          {
            "title": "4-5. Two Dimensional Array.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/study-material/4-5.%20Two%20Dimensional%20Array.pptx?updatedAt=1784893765889",
            "type": "pdf"
          },
          {
            "title": "47. Hashing.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/study-material/47.%20Hashing.pptx?updatedAt=1784893766609",
            "type": "pdf"
          },
          {
            "title": "6. Pointes.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/study-material/6.%20Pointes.pptx?updatedAt=1784893766719",
            "type": "pdf"
          },
          {
            "title": "43. MST, Prims, Kruskals.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/study-material/43.%20MST,%20Prims,%20Kruskals.ppt?updatedAt=1784893767919",
            "type": "pdf"
          },
          {
            "title": "44. Hashing.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/study-material/44.%20Hashing.pptx?updatedAt=1784893771736",
            "type": "pdf"
          },
          {
            "title": "36. Heaps and Heap Sort.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/study-material/36.%20Heaps%20and%20Heap%20Sort.ppt?updatedAt=1784893787153",
            "type": "pdf"
          },
          {
            "title": "46. Merge Sort and Quick Sort.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/study-material/46.%20Merge%20Sort%20and%20Quick%20Sort.ppt?updatedAt=1784893790685",
            "type": "pdf"
          },
          {
            "title": "18-19. Recursion.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/study-material/18-19.%20Recursion.ppt?updatedAt=1784893806195",
            "type": "pdf"
          },
          {
            "title": "10-17. Linked List.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/study-material/10-17.%20Linked%20List.pptx?updatedAt=1784893812883",
            "type": "pdf"
          },
          {
            "title": "41-42. Graph Data Structure.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/study-material/41-42.%20Graph%20Data%20Structure.ppt?updatedAt=1784893813058",
            "type": "pdf"
          },
          {
            "title": "1 - 2. Introduction and Performance Analysis Updated.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/study-material/1%20-%202.%20Introduction%20and%20Performance%20Analysis%20Updated.pptx?updatedAt=1784893877657",
            "type": "pdf"
          },
          {
            "title": "26-29. Queue and Circular Queue.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/study-material/26-29.%20Queue%20and%20Circular%20Queue.ppt?updatedAt=1784893878893",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "DSA_AI2103_MTE_Sem-3_Summer2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/pyqs/DSA_AI2103_MTE_Sem-3_Summer2024.pdf?updatedAt=1784893698847",
            "type": "pdf"
          },
          {
            "title": "DSA_DSE2101_ETE_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/pyqs/DSA_DSE2101_ETE_Sem-3_2024-25.pdf?updatedAt=1784893705583",
            "type": "pdf"
          },
          {
            "title": "DSA_INT2102_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/pyqs/DSA_INT2102_MTE_Sem-3_2025-26.pdf?updatedAt=1784893707521",
            "type": "pdf"
          },
          {
            "title": "DSA_MTE_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/pyqs/DSA_MTE_Sem-3_2024-25.pdf?updatedAt=1784893708891",
            "type": "pdf"
          },
          {
            "title": "DSA_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/pyqs/DSA_MTE_Sem-3_2025-26.pdf?updatedAt=1784893709868",
            "type": "pdf"
          },
          {
            "title": "DSA_ETE_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/pyqs/DSA_ETE_Sem-3_2024-25.pdf?updatedAt=1784893710816",
            "type": "pdf"
          },
          {
            "title": "DSA-MTE-Solution (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/pyqs/DSA-MTE-Solution%20(1).pdf?updatedAt=1784893764566",
            "type": "pdf"
          },
          {
            "title": "DSA_IT2101_Make-up_Sem-3_Summer2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/pyqs/DSA_IT2101_Make-up_Sem-3_Summer2024.pdf?updatedAt=1784893765734",
            "type": "pdf"
          },
          {
            "title": "DSA_DSE2101_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/pyqs/DSA_DSE2101_ETE_Sem-3_2025-26.pdf?updatedAt=1784893765965",
            "type": "pdf"
          },
          {
            "title": "DSA_AIM2101_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/pyqs/DSA_AIM2101_ETE_Sem-3_2025-26.pdf?updatedAt=1784893768278",
            "type": "pdf"
          },
          {
            "title": "DSA_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/dsa/pyqs/DSA_ETE_Sem-3_2025-26.pdf?updatedAt=1784893768468",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Data Structures & Algorithms Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "cce-engineering-economics",
        "name": "Engineering Economics",
        "shortName": "Engineering Eco",
        "emoji": "\ud83d\udcc8",
        "code": "HS-2101",
        "description": "Financial evaluation of engineering projects, time value of money, cost estimation, depreciation, and budgeting.",
        "resourceCount": 24,
        "studyMaterials": [
          {
            "title": "Risk and Risk_Vs_Returns_L28",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/engineering-economics/study-material/Risk%20and%20Risk_Vs_Returns_L28.pdf?updatedAt=1784893695252",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_7",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_7.pdf?updatedAt=1784893696619",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_20-21",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_20-21.pdf?updatedAt=1784893698401",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_3",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_3.pdf?updatedAt=1784893699088",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_3 (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_3%20(1).pdf?updatedAt=1784893699100",
            "type": "pdf"
          },
          {
            "title": "Budgeting_L25-27-final",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/engineering-economics/study-material/Budgeting_L25-27-final.pdf?updatedAt=1784893699452",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_10-12 new",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_10-12%20new.pdf?updatedAt=1784893699498",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_13",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_13.pdf?updatedAt=1784893706892",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_22 24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_22%2024.pdf?updatedAt=1784893707753",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_NPV_L14-17",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_NPV_L14-17.pdf?updatedAt=1784893709335",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_1",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_1.pdf?updatedAt=1784893765984",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_8 9",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_8%209.pdf?updatedAt=1784893763397",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_NPV,IRR_L14-19",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_NPV,IRR_L14-19.pdf?updatedAt=1784893764320",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_2",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_2.pdf?updatedAt=1784893766882",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_4-5",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_4-5.pdf?updatedAt=1784893769867",
            "type": "pdf"
          },
          {
            "title": "Depreciation_L29-31",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/engineering-economics/study-material/Depreciation_L29-31.pdf?updatedAt=1784893781601",
            "type": "pdf"
          },
          {
            "title": "PERT CPM final_L32-35 - Copy",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/engineering-economics/study-material/PERT%20CPM%20final_L32-35%20-%20Copy.pdf?updatedAt=1784893785307",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "ECO_Make-up_Sem-4_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/engineering-economics/pyqs/ECO_Make-up_Sem-4_2023-24.pdf?updatedAt=1784893692546",
            "type": "pdf"
          },
          {
            "title": "ECO_Make-up_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/engineering-economics/pyqs/ECO_Make-up_Sem-3_2024-25.pdf?updatedAt=1784893692830",
            "type": "pdf"
          },
          {
            "title": "ECO_MTE_Sem-4_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/engineering-economics/pyqs/ECO_MTE_Sem-4_2023-24.pdf?updatedAt=1784893697209",
            "type": "pdf"
          },
          {
            "title": "ECO_MTE_Sem-4_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/engineering-economics/pyqs/ECO_MTE_Sem-4_2025-26.pdf?updatedAt=1784893699319",
            "type": "pdf"
          },
          {
            "title": "ECO_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/engineering-economics/pyqs/ECO_MTE_Sem-3_2025-26.pdf?updatedAt=1784893699423",
            "type": "pdf"
          },
          {
            "title": "ECO_ETE_Sem-4_2023-2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/engineering-economics/pyqs/ECO_ETE_Sem-4_2023-2024.pdf?updatedAt=1784893706733",
            "type": "pdf"
          },
          {
            "title": "ECO_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/engineering-economics/pyqs/ECO_ETE_Sem-3_2025-26.pdf?updatedAt=1784893710741",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Engineering Economics Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "cce-oops-java",
        "name": "Object Oriented Programming (Java)",
        "shortName": "OOPs (Java)",
        "emoji": "\u2615",
        "code": "CS-2103",
        "description": "Classes, inheritance, interfaces, polymorphism, exception handling, and multithreading in Java.",
        "resourceCount": 26,
        "studyMaterials": [
          {
            "title": "JSE (Lecture-14)initialize instance variables",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/study-material/JSE%20(Lecture-14)initialize%20instance%20variables.pdf?updatedAt=1784893672840",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-15 )(Explicit,Initializers,constructors)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/study-material/JSE%20(Lecture-15%20)(Explicit,Initializers,constructors).pdf?updatedAt=1784893674542",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-17 )(Argument Passing) (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/study-material/JSE%20(Lecture-17%20)(Argument%20Passing)%20(1).pdf?updatedAt=1784893677185",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-23 )(Using keyword final)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/study-material/JSE%20(Lecture-23%20)(Using%20keyword%20final).pdf?updatedAt=1784893677231",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-17 )(Argument Passing)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/study-material/JSE%20(Lecture-17%20)(Argument%20Passing).pdf?updatedAt=1784893677293",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-21)(Method overriding)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/study-material/JSE%20(Lecture-21)(Method%20overriding).pdf?updatedAt=1784893677357",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-18 )(Keyword this and static)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/study-material/JSE%20(Lecture-18%20)(Keyword%20this%20and%20static).pdf?updatedAt=1784893677369",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-7 part-2)_Operator",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/study-material/JSE%20(Lecture-7%20part-2)_Operator.pdf?updatedAt=1784893677535",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-19 )(static methods and blocks)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/study-material/JSE%20(Lecture-19%20)(static%20methods%20and%20blocks).pdf?updatedAt=1784893677808",
            "type": "pdf"
          },
          {
            "title": "Introduction to java.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/study-material/Introduction%20to%20java.ppt?updatedAt=1784893678140",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-24 )(Interfaces)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/study-material/JSE%20(Lecture-24%20)(Interfaces).pdf?updatedAt=1784893678642",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-8)_Conditional Statements",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/study-material/JSE%20(Lecture-8)_Conditional%20Statements.pdf?updatedAt=1784893681305",
            "type": "pdf"
          },
          {
            "title": "Lect-7",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/study-material/Lect-7.pdf?updatedAt=1784893682824",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-7)_String",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/study-material/JSE%20(Lecture-7)_String.pdf?updatedAt=1784893683372",
            "type": "pdf"
          },
          {
            "title": "Lect-1",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/study-material/Lect-1.pdf?updatedAt=1784893683931",
            "type": "pdf"
          },
          {
            "title": "Lect-8",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/study-material/Lect-8.pdf?updatedAt=1784893685178",
            "type": "pdf"
          },
          {
            "title": "Lect-2,3",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/study-material/Lect-2,3.pdf?updatedAt=1784893685895",
            "type": "pdf"
          },
          {
            "title": "Lect-5",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/study-material/Lect-5.pdf?updatedAt=1784893685947",
            "type": "pdf"
          },
          {
            "title": "Lect-20-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/study-material/Lect-20-26.pdf?updatedAt=1784893686629",
            "type": "pdf"
          },
          {
            "title": "Lect-6",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/study-material/Lect-6.pdf?updatedAt=1784893686796",
            "type": "pdf"
          },
          {
            "title": "Lect-4",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/study-material/Lect-4.pdf?updatedAt=1784893688143",
            "type": "pdf"
          },
          {
            "title": "Lect-26-28",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/study-material/Lect-26-28.pdf?updatedAt=1784893689145",
            "type": "pdf"
          },
          {
            "title": "introduction_OO.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/study-material/introduction_OO.pptx?updatedAt=1784893691687",
            "type": "pdf"
          },
          {
            "title": "Java_Basics",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/study-material/Java_Basics.pdf?updatedAt=1784893694338",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "OOP-J_ETE_Sem-3_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/pyqs/OOP-J_ETE_Sem-3_2024-2025.pdf?updatedAt=1784893684756",
            "type": "pdf"
          },
          {
            "title": "OOP-J_MTE_Sem-3_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20java/pyqs/OOP-J_MTE_Sem-3_2024-2025.pdf?updatedAt=1784893687334",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Object Oriented Programming (Java) Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "cce-oops-python",
        "name": "Object Oriented Programming (Python)",
        "shortName": "OOPs (Python)",
        "emoji": "\ud83d\udc0d",
        "code": "CS-2105",
        "description": "Object-oriented design patterns, functional programming features, decorators, and data structures in Python.",
        "resourceCount": 11,
        "studyMaterials": [
          {
            "title": "CS2122_Encapsulation",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20python/study-material/CS2122_Encapsulation.pdf?updatedAt=1784893669633",
            "type": "pdf"
          },
          {
            "title": "CSE2122_OOPs",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20python/study-material/CSE2122_OOPs.pdf?updatedAt=1784893669786",
            "type": "pdf"
          },
          {
            "title": "Data Structure_Tree",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20python/study-material/Data%20Structure_Tree.pdf?updatedAt=1784893673691",
            "type": "pdf"
          },
          {
            "title": "Python- Data Structures",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20python/study-material/Python-%20Data%20Structures.pdf?updatedAt=1784893678054",
            "type": "pdf"
          },
          {
            "title": "Functions in Python",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20python/study-material/Functions%20in%20Python.pdf?updatedAt=1784893678873",
            "type": "pdf"
          },
          {
            "title": "Generators and Modules",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20python/study-material/Generators%20and%20Modules.pdf?updatedAt=1784893679732",
            "type": "pdf"
          },
          {
            "title": "CS2122_Inheritance",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20python/study-material/CS2122_Inheritance.pdf?updatedAt=1784893684510",
            "type": "pdf"
          },
          {
            "title": "Arrays_In-Built Function in python data structure_Search and Sort",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20python/study-material/Arrays_In-Built%20Function%20in%20python%20data%20structure_Search%20and%20Sort.pdf?updatedAt=1784893685955",
            "type": "pdf"
          },
          {
            "title": "CS2122_Constructor",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20python/study-material/CS2122_Constructor.pdf?updatedAt=1784893686073",
            "type": "pdf"
          },
          {
            "title": "OOP CONCEPTS",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20python/study-material/OOP%20CONCEPTS.pdf?updatedAt=1784893692355",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "OOP-P_MTE_Sem-3_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cce-2nd%20year/oops%20python/pyqs/OOP-P_MTE_Sem-3_2024-2025.pdf?updatedAt=1784893680033",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Object Oriented Programming (Python) Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      }
    ]
  },
  {
    "id": "cse",
    "name": "Computer Science Engineering",
    "shortName": "CSE",
    "emoji": "\ud83d\udda5\ufe0f",
    "icon": "Code",
    "gradient": "from-blue-500 to-indigo-600",
    "color": "#2563eb",
    "description": "Software Engineering, OS & Advanced Computation",
    "subjects": [
      {
        "id": "cse-acd",
        "name": "Automata and Compiler Design",
        "shortName": "ACD",
        "emoji": "\u2699\ufe0f",
        "code": "CS-2104",
        "description": "Finite automata, regular expressions, lexing, parsing, syntax directed translation, and code optimization.",
        "resourceCount": 21,
        "studyMaterials": [
          {
            "title": "4. Pushdown Automata",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/acd/study-material/4.%20Pushdown%20Automata.pdf?updatedAt=1784893668134",
            "type": "pdf"
          },
          {
            "title": "8. Compiler",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/acd/study-material/8.%20Compiler.pdf?updatedAt=1784893668366",
            "type": "pdf"
          },
          {
            "title": "5. Turing Machine",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/acd/study-material/5.%20Turing%20Machine.pdf?updatedAt=1784893675204",
            "type": "pdf"
          },
          {
            "title": "ContextFreeGrammars",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/acd/study-material/ContextFreeGrammars.pdf?updatedAt=1784893678943",
            "type": "pdf"
          },
          {
            "title": "7. P , NP and NP hard",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/acd/study-material/7.%20P%20,%20NP%20and%20NP%20hard.pdf?updatedAt=1784893680911",
            "type": "pdf"
          },
          {
            "title": "3. Context Free Grammar",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/acd/study-material/3.%20Context%20Free%20Grammar.pdf?updatedAt=1784893683258",
            "type": "pdf"
          },
          {
            "title": "2. Regular Expression",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/acd/study-material/2.%20Regular%20Expression.pdf?updatedAt=1784893685730",
            "type": "pdf"
          },
          {
            "title": "6. Decidable and undecidable problems",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/acd/study-material/6.%20Decidable%20and%20undecidable%20problems.pdf?updatedAt=1784893788664",
            "type": "pdf"
          },
          {
            "title": "PDA_NOTES",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/acd/study-material/PDA_NOTES.pdf?updatedAt=1784893822201",
            "type": "pdf"
          },
          {
            "title": "CFG",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/acd/study-material/CFG.pdf?updatedAt=1784893853322",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "ACD_CS3103_MTE-2_Sem-5_2022-23",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/acd/pyqs/ACD_CS3103_MTE-2_Sem-5_2022-23.pdf?updatedAt=1784893662177",
            "type": "pdf"
          },
          {
            "title": "ACD_CS3103_MTE-1_Sem-5_2021-22",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/acd/pyqs/ACD_CS3103_MTE-1_Sem-5_2021-22.pdf?updatedAt=1784893663658",
            "type": "pdf"
          },
          {
            "title": "ACD_CS3103_ETE_Sem-5_2022-23",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/acd/pyqs/ACD_CS3103_ETE_Sem-5_2022-23.pdf?updatedAt=1784893664427",
            "type": "pdf"
          },
          {
            "title": "ACD_CS1505_ETE_Sem-5_2018-19",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/acd/pyqs/ACD_CS1505_ETE_Sem-5_2018-19.pdf?updatedAt=1784893667933",
            "type": "pdf"
          },
          {
            "title": "ACD_CS3103_MTE_Sem-5_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/acd/pyqs/ACD_CS3103_MTE_Sem-5_2024-25.pdf?updatedAt=1784893668798",
            "type": "pdf"
          },
          {
            "title": "ACD_CS3103_Make-up_Sem-5_2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/acd/pyqs/ACD_CS3103_Make-up_Sem-5_2024.pdf?updatedAt=1784893673989",
            "type": "pdf"
          },
          {
            "title": "CS3103-set2",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/acd/pyqs/CS3103-set2.pdf?updatedAt=1784893677046",
            "type": "pdf"
          },
          {
            "title": "ACD_CS3103_ETE_Sem-5_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/acd/pyqs/ACD_CS3103_ETE_Sem-5_2023-24.pdf?updatedAt=1784893677676",
            "type": "pdf"
          },
          {
            "title": "CS3103-set1",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/acd/pyqs/CS3103-set1.pdf?updatedAt=1784893677793",
            "type": "pdf"
          },
          {
            "title": "ACD_CS3103_MTE_Sem-5_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/acd/pyqs/ACD_CS3103_MTE_Sem-5_2023-24.pdf?updatedAt=1784893690925",
            "type": "pdf"
          },
          {
            "title": "ACD_CS3103_ETE_Sem-5_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/acd/pyqs/ACD_CS3103_ETE_Sem-5_2024-25.pdf?updatedAt=1784893881108",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Automata and Compiler Design Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "cse-coa",
        "name": "Computer Organization & Architecture",
        "shortName": "COA",
        "emoji": "\ud83d\udcbb",
        "code": "CS-2101",
        "description": "Processor data paths, memory hierarchy, instruction sets, pipelining, and I/O organization.",
        "resourceCount": 30,
        "studyMaterials": [
          {
            "title": "1. Memory mapping (Cache).docx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/study-material/1.%20Memory%20mapping%20(Cache).docx?updatedAt=1784893642641",
            "type": "pdf"
          },
          {
            "title": "2. Assembly Language.docx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/study-material/2.%20Assembly%20Language.docx?updatedAt=1784893644273",
            "type": "pdf"
          },
          {
            "title": "3. Pipelining.docx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/study-material/3.%20Pipelining.docx?updatedAt=1784893652972",
            "type": "pdf"
          },
          {
            "title": "Pipelining.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/study-material/Pipelining.pptx?updatedAt=1784893655346",
            "type": "pdf"
          },
          {
            "title": "Control Sequences for three bus processor data path",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/study-material/Control%20Sequences%20for%20three%20bus%20processor%20data%20path.pdf?updatedAt=1784893658224",
            "type": "pdf"
          },
          {
            "title": "Introduction.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/study-material/Introduction.ppt?updatedAt=1784893661589",
            "type": "pdf"
          },
          {
            "title": "The Memory System.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/study-material/The%20Memory%20System.ppt?updatedAt=1784893663121",
            "type": "pdf"
          },
          {
            "title": "Arithmetic.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/study-material/Arithmetic.pptx?updatedAt=1784893664179",
            "type": "pdf"
          },
          {
            "title": "Parallelism_and_multicores.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/study-material/Parallelism_and_multicores.pptx?updatedAt=1784893710464",
            "type": "pdf"
          },
          {
            "title": "Architecture",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/study-material/Architecture.pdf?updatedAt=1784893793597",
            "type": "pdf"
          },
          {
            "title": "Basic Structure of Computers and Machine Instructions.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/study-material/Basic%20Structure%20of%20Computers%20and%20Machine%20Instructions.ppt?updatedAt=1784893801907",
            "type": "pdf"
          },
          {
            "title": "chapter5-the memory system",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/study-material/chapter5-the%20memory%20system.pdf?updatedAt=1784893802226",
            "type": "pdf"
          },
          {
            "title": "week3-slides",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/study-material/week3-slides.pdf?updatedAt=1784893804321",
            "type": "pdf"
          },
          {
            "title": "chapter6-Arithmetic",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/study-material/chapter6-Arithmetic.pdf?updatedAt=1784893808504",
            "type": "pdf"
          },
          {
            "title": "week4-slides",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/study-material/week4-slides.pdf?updatedAt=1784893808976",
            "type": "pdf"
          },
          {
            "title": "chapter 1-Basic Structure of Computers",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/study-material/chapter%201-Basic%20Structure%20of%20Computers.pdf?updatedAt=1784893818413",
            "type": "pdf"
          },
          {
            "title": "ISA",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/study-material/ISA.pdf?updatedAt=1784893821327",
            "type": "pdf"
          },
          {
            "title": "chapter6- Pipelining",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/study-material/chapter6-%20Pipelining.pdf?updatedAt=1784893838758",
            "type": "pdf"
          },
          {
            "title": "week9-slides",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/study-material/week9-slides.pdf?updatedAt=1784893848208",
            "type": "pdf"
          },
          {
            "title": "chapter2- Machine Instructions and Programs",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/study-material/chapter2-%20Machine%20Instructions%20and%20Programs.pdf?updatedAt=1784893853720",
            "type": "pdf"
          },
          {
            "title": "week12-slides",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/study-material/week12-slides.pdf?updatedAt=1784893865830",
            "type": "pdf"
          },
          {
            "title": "week11-slides",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/study-material/week11-slides.pdf?updatedAt=1784893866729",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "COA_Make-up_Sem-3_2024-25 (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/pyqs/COA_Make-up_Sem-3_2024-25%20(1).pdf?updatedAt=1784893655612",
            "type": "pdf"
          },
          {
            "title": "COA_MTE_Sem-3_2024-2025 (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/pyqs/COA_MTE_Sem-3_2024-2025%20(1).pdf?updatedAt=1784893655716",
            "type": "pdf"
          },
          {
            "title": "COA_Make-up_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/pyqs/COA_Make-up_Sem-3_2024-25.pdf?updatedAt=1784893655754",
            "type": "pdf"
          },
          {
            "title": "COA_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/pyqs/COA_ETE_Sem-3_2025-26.pdf?updatedAt=1784893658204",
            "type": "pdf"
          },
          {
            "title": "COA_MTE_Sem-3_2025-2026(With Solns) (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/pyqs/COA_MTE_Sem-3_2025-2026(With%20Solns)%20(1).pdf?updatedAt=1784893659595",
            "type": "pdf"
          },
          {
            "title": "COA_ETE_Sem-3_2025-26(with Solns) (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/pyqs/COA_ETE_Sem-3_2025-26(with%20Solns)%20(1).pdf?updatedAt=1784893668217",
            "type": "pdf"
          },
          {
            "title": "COA_ETE_Sem-3_2024-25(with Solns) (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/pyqs/COA_ETE_Sem-3_2024-25(with%20Solns)%20(1).pdf?updatedAt=1784893673086",
            "type": "pdf"
          },
          {
            "title": "COA_MTE_Sem-3_2024-2025(With Solns) (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/coa/pyqs/COA_MTE_Sem-3_2024-2025(With%20Solns)%20(1).pdf?updatedAt=1784893681909",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Computer Organization & Architecture Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "cse-cryptography",
        "name": "Cryptography & Network Security",
        "shortName": "Cryptography",
        "emoji": "\ud83d\udd10",
        "code": "CS-2204",
        "description": "Symmetric and asymmetric encryption, hash functions, digital signatures, and network security protocols.",
        "resourceCount": 21,
        "studyMaterials": [
          {
            "title": "ch-01.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/cryptography/study-material/ch-01.ppt?updatedAt=1784893644100",
            "type": "pdf"
          },
          {
            "title": "ch-09.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/cryptography/study-material/ch-09.ppt?updatedAt=1784893646311",
            "type": "pdf"
          },
          {
            "title": "ch-05.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/cryptography/study-material/ch-05.ppt?updatedAt=1784893655053",
            "type": "pdf"
          },
          {
            "title": "ch-13_new upload.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/cryptography/study-material/ch-13_new%20upload.ppt?updatedAt=1784893657188",
            "type": "pdf"
          },
          {
            "title": "RSA_Diffie-Hellman and ElGamel.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/cryptography/study-material/RSA_Diffie-Hellman%20and%20ElGamel.ppt?updatedAt=1784893660143",
            "type": "pdf"
          },
          {
            "title": "Stallings Solutions",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/cryptography/study-material/Stallings%20Solutions.pdf?updatedAt=1784893661520",
            "type": "pdf"
          },
          {
            "title": "ch-14 Entity Authentication_new upload.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/cryptography/study-material/ch-14%20Entity%20Authentication_new%20upload.ppt?updatedAt=1784893665309",
            "type": "pdf"
          },
          {
            "title": "ch-08_new upload.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/cryptography/study-material/ch-08_new%20upload.ppt?updatedAt=1784893674057",
            "type": "pdf"
          },
          {
            "title": "ch-04.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/cryptography/study-material/ch-04.ppt?updatedAt=1784893691862",
            "type": "pdf"
          },
          {
            "title": "ch-02.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/cryptography/study-material/ch-02.ppt?updatedAt=1784893693836",
            "type": "pdf"
          },
          {
            "title": "Hash Function.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/cryptography/study-material/Hash%20Function.ppt?updatedAt=1784893695774",
            "type": "pdf"
          },
          {
            "title": "ch-06.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/cryptography/study-material/ch-06.ppt?updatedAt=1784893697844",
            "type": "pdf"
          },
          {
            "title": "ch-03.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/cryptography/study-material/ch-03.ppt?updatedAt=1784893801641",
            "type": "pdf"
          },
          {
            "title": "behrouz-a-forouzan-cryptography-solution",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/cryptography/study-material/behrouz-a-forouzan-cryptography-solution.pdf?updatedAt=1784893803618",
            "type": "pdf"
          },
          {
            "title": "ch-07.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/cryptography/study-material/ch-07.ppt?updatedAt=1784893808009",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "Cryptography_MTE_Re-sess_Sem-4_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/cryptography/pyqs/Cryptography_MTE_Re-sess_Sem-4_2025-26.pdf?updatedAt=1784893647746",
            "type": "pdf"
          },
          {
            "title": "Cryptography_MTE_re-sess_Sem-4_2024-25 ",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/cryptography/pyqs/Cryptography_MTE_re-sess_Sem-4_2024-25%20.pdf?updatedAt=1784893659456",
            "type": "pdf"
          },
          {
            "title": "InformationSystemSecurity_MTE_2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/cryptography/pyqs/InformationSystemSecurity_MTE_2024.pdf?updatedAt=1784893659538",
            "type": "pdf"
          },
          {
            "title": "Cryptography_ETE_Sem-4_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/cryptography/pyqs/Cryptography_ETE_Sem-4_2024-25.pdf?updatedAt=1784893661014",
            "type": "pdf"
          },
          {
            "title": "InformationSystemSecurity_ETE_2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/cryptography/pyqs/InformationSystemSecurity_ETE_2024.pdf?updatedAt=1784893670694",
            "type": "pdf"
          },
          {
            "title": "Cryptography_MTE_Sem-4_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/cryptography/pyqs/Cryptography_MTE_Sem-4_2024-25.pdf?updatedAt=1784893672705",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Cryptography & Network Security Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "cse-daa",
        "name": "Design and Analysis of Algorithms",
        "shortName": "DAA",
        "emoji": "\ud83e\uddee",
        "code": "CS-2201",
        "description": "Algorithm analysis, divide-and-conquer, greedy approaches, dynamic programming, and NP-completeness.",
        "resourceCount": 16,
        "studyMaterials": [
          {
            "title": "5. Mathematical Analysis of Non Recursive techniques.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/daa/study-material/5.%20Mathematical%20Analysis%20of%20Non%20Recursive%20techniques.pptx?updatedAt=1784893640606",
            "type": "pdf"
          },
          {
            "title": "merge (1).pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/daa/study-material/merge%20(1).pptx?updatedAt=1784893642344",
            "type": "pdf"
          },
          {
            "title": "11. Graphs_BFS_DFS.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/daa/study-material/11.%20Graphs_BFS_DFS.ppt?updatedAt=1784893646060",
            "type": "pdf"
          },
          {
            "title": "1. Introduction to Algorithms, Specification of Algorithm, Complexity.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/daa/study-material/1.%20Introduction%20to%20Algorithms,%20Specification%20of%20Algorithm,%20Complexity.pptx?updatedAt=1784893646295",
            "type": "pdf"
          },
          {
            "title": "4. Mathematical Analysis of Recursive techniques.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/daa/study-material/4.%20Mathematical%20Analysis%20of%20Recursive%20techniques.pptx?updatedAt=1784893666438",
            "type": "pdf"
          },
          {
            "title": "3. Time & Space Complexity _ Hands-on.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/daa/study-material/3.%20Time%20&%20Space%20Complexity%20_%20Hands-on.pptx?updatedAt=1784893673595",
            "type": "pdf"
          },
          {
            "title": "2. Asymptotic Notation- Analysis of Algorithms.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/daa/study-material/2.%20Asymptotic%20Notation-%20Analysis%20of%20Algorithms.pptx?updatedAt=1784893677260",
            "type": "pdf"
          },
          {
            "title": "P NP Complete.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/daa/study-material/P%20NP%20Complete.pptx?updatedAt=1784893677992",
            "type": "pdf"
          },
          {
            "title": "Backtracking All.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/daa/study-material/Backtracking%20All.pptx?updatedAt=1784893708312",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "ETE Question Paper DAA (CS3102) Dec24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/daa/pyqs/ETE%20Question%20Paper%20DAA%20(CS3102)%20Dec24.pdf?updatedAt=1784893634384",
            "type": "pdf"
          },
          {
            "title": "DAA_MTE_Sem-5_Oct2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/daa/pyqs/DAA_MTE_Sem-5_Oct2024.pdf?updatedAt=1784893636861",
            "type": "pdf"
          },
          {
            "title": "DAA_MTE_Sem-4_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/daa/pyqs/DAA_MTE_Sem-4_2024-25.pdf?updatedAt=1784893641471",
            "type": "pdf"
          },
          {
            "title": "DAA_CS3102_Make-up_Sem-5_2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/daa/pyqs/DAA_CS3102_Make-up_Sem-5_2024.pdf?updatedAt=1784893642532",
            "type": "pdf"
          },
          {
            "title": "DAA_CS3102_ETE_Sem-5_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/daa/pyqs/DAA_CS3102_ETE_Sem-5_2023-24.pdf?updatedAt=1784893642612",
            "type": "pdf"
          },
          {
            "title": "DAA_MTE_Sem-4_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/daa/pyqs/DAA_MTE_Sem-4_2024-2025.pdf?updatedAt=1784893645657",
            "type": "pdf"
          },
          {
            "title": "DAA_MTE_Sem-5_2023-2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/daa/pyqs/DAA_MTE_Sem-5_2023-2024.pdf?updatedAt=1784893652517",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Design and Analysis of Algorithms Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "cse-dsa",
        "name": "Data Structures & Algorithms",
        "shortName": "DSA",
        "emoji": "\ud83e\uddec",
        "code": "CS-2102",
        "description": "Arrays, linked lists, stacks, queues, trees, graphs, hashing, and fundamental sorting/searching techniques.",
        "resourceCount": 26,
        "studyMaterials": [
          {
            "title": "7-9. Dynamic Array and DMA.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/study-material/7-9.%20Dynamic%20Array%20and%20DMA.pptx?updatedAt=1784893636152",
            "type": "pdf"
          },
          {
            "title": "3. One Dimensional Array.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/study-material/3.%20One%20Dimensional%20Array.pptx?updatedAt=1784893637158",
            "type": "pdf"
          },
          {
            "title": "42-44 Sortings.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/study-material/42-44%20Sortings.pptx?updatedAt=1784893641803",
            "type": "pdf"
          },
          {
            "title": "6. Pointes.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/study-material/6.%20Pointes.pptx?updatedAt=1784893643092",
            "type": "pdf"
          },
          {
            "title": "47. Hashing.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/study-material/47.%20Hashing.pptx?updatedAt=1784893643402",
            "type": "pdf"
          },
          {
            "title": "4-5. Two Dimensional Array.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/study-material/4-5.%20Two%20Dimensional%20Array.pptx?updatedAt=1784893643695",
            "type": "pdf"
          },
          {
            "title": "43. MST, Prims, Kruskals.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/study-material/43.%20MST,%20Prims,%20Kruskals.ppt?updatedAt=1784893645432",
            "type": "pdf"
          },
          {
            "title": "44. Hashing.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/study-material/44.%20Hashing.pptx?updatedAt=1784893648811",
            "type": "pdf"
          },
          {
            "title": "36. Heaps and Heap Sort.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/study-material/36.%20Heaps%20and%20Heap%20Sort.ppt?updatedAt=1784893669727",
            "type": "pdf"
          },
          {
            "title": "46. Merge Sort and Quick Sort.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/study-material/46.%20Merge%20Sort%20and%20Quick%20Sort.ppt?updatedAt=1784893673589",
            "type": "pdf"
          },
          {
            "title": "18-19. Recursion.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/study-material/18-19.%20Recursion.ppt?updatedAt=1784893700982",
            "type": "pdf"
          },
          {
            "title": "41-42. Graph Data Structure.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/study-material/41-42.%20Graph%20Data%20Structure.ppt?updatedAt=1784893808057",
            "type": "pdf"
          },
          {
            "title": "10-17. Linked List.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/study-material/10-17.%20Linked%20List.pptx?updatedAt=1784893808379",
            "type": "pdf"
          },
          {
            "title": "1 - 2. Introduction and Performance Analysis Updated.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/study-material/1%20-%202.%20Introduction%20and%20Performance%20Analysis%20Updated.pptx?updatedAt=1784893875982",
            "type": "pdf"
          },
          {
            "title": "26-29. Queue and Circular Queue.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/study-material/26-29.%20Queue%20and%20Circular%20Queue.ppt?updatedAt=1784893878225",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "DSA_AI2103_MTE_Sem-3_Summer2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/pyqs/DSA_AI2103_MTE_Sem-3_Summer2024.pdf?updatedAt=1784893626347",
            "type": "pdf"
          },
          {
            "title": "DSA_INT2102_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/pyqs/DSA_INT2102_MTE_Sem-3_2025-26.pdf?updatedAt=1784893633278",
            "type": "pdf"
          },
          {
            "title": "DSA_DSE2101_ETE_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/pyqs/DSA_DSE2101_ETE_Sem-3_2024-25.pdf?updatedAt=1784893633546",
            "type": "pdf"
          },
          {
            "title": "DSA_MTE_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/pyqs/DSA_MTE_Sem-3_2024-25.pdf?updatedAt=1784893635714",
            "type": "pdf"
          },
          {
            "title": "DSA_ETE_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/pyqs/DSA_ETE_Sem-3_2024-25.pdf?updatedAt=1784893636627",
            "type": "pdf"
          },
          {
            "title": "DSA_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/pyqs/DSA_MTE_Sem-3_2025-26.pdf?updatedAt=1784893637094",
            "type": "pdf"
          },
          {
            "title": "DSA-MTE-Solution (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/pyqs/DSA-MTE-Solution%20(1).pdf?updatedAt=1784893640126",
            "type": "pdf"
          },
          {
            "title": "DSA_IT2101_Make-up_Sem-3_Summer2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/pyqs/DSA_IT2101_Make-up_Sem-3_Summer2024.pdf?updatedAt=1784893641135",
            "type": "pdf"
          },
          {
            "title": "DSA_DSE2101_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/pyqs/DSA_DSE2101_ETE_Sem-3_2025-26.pdf?updatedAt=1784893641750",
            "type": "pdf"
          },
          {
            "title": "DSA_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/pyqs/DSA_ETE_Sem-3_2025-26.pdf?updatedAt=1784893644123",
            "type": "pdf"
          },
          {
            "title": "DSA_AIM2101_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/dsa/pyqs/DSA_AIM2101_ETE_Sem-3_2025-26.pdf?updatedAt=1784893644708",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Data Structures & Algorithms Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "cse-engineering-economics",
        "name": "Engineering Economics",
        "shortName": "Engineering Eco",
        "emoji": "\ud83d\udcc8",
        "code": "HS-2101",
        "description": "Financial evaluation of engineering projects, time value of money, cost estimation, depreciation, and budgeting.",
        "resourceCount": 24,
        "studyMaterials": [
          {
            "title": "Engg. Economics_Lecture_7",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_7.pdf?updatedAt=1784893620172",
            "type": "pdf"
          },
          {
            "title": "Risk and Risk_Vs_Returns_L28",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/engineering-economics/study-material/Risk%20and%20Risk_Vs_Returns_L28.pdf?updatedAt=1784893620674",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_20-21",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_20-21.pdf?updatedAt=1784893621267",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_3",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_3.pdf?updatedAt=1784893621371",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_3 (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_3%20(1).pdf?updatedAt=1784893621733",
            "type": "pdf"
          },
          {
            "title": "Budgeting_L25-27-final",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/engineering-economics/study-material/Budgeting_L25-27-final.pdf?updatedAt=1784893623159",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_10-12 new",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_10-12%20new.pdf?updatedAt=1784893623729",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_13",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_13.pdf?updatedAt=1784893631049",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_22 24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_22%2024.pdf?updatedAt=1784893631493",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_NPV_L14-17",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_NPV_L14-17.pdf?updatedAt=1784893635817",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_1",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_1.pdf?updatedAt=1784893636374",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_8 9",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_8%209.pdf?updatedAt=1784893636849",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_NPV,IRR_L14-19",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_NPV,IRR_L14-19.pdf?updatedAt=1784893638225",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_2",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_2.pdf?updatedAt=1784893640217",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_4-5",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_4-5.pdf?updatedAt=1784893644408",
            "type": "pdf"
          },
          {
            "title": "Depreciation_L29-31",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/engineering-economics/study-material/Depreciation_L29-31.pdf?updatedAt=1784893654291",
            "type": "pdf"
          },
          {
            "title": "PERT CPM final_L32-35 - Copy",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/engineering-economics/study-material/PERT%20CPM%20final_L32-35%20-%20Copy.pdf?updatedAt=1784893663461",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "ECO_Make-up_Sem-4_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/engineering-economics/pyqs/ECO_Make-up_Sem-4_2023-24.pdf?updatedAt=1784893619187",
            "type": "pdf"
          },
          {
            "title": "ECO_Make-up_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/engineering-economics/pyqs/ECO_Make-up_Sem-3_2024-25.pdf?updatedAt=1784893619693",
            "type": "pdf"
          },
          {
            "title": "ECO_MTE_Sem-4_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/engineering-economics/pyqs/ECO_MTE_Sem-4_2023-24.pdf?updatedAt=1784893625647",
            "type": "pdf"
          },
          {
            "title": "ECO_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/engineering-economics/pyqs/ECO_MTE_Sem-3_2025-26.pdf?updatedAt=1784893626771",
            "type": "pdf"
          },
          {
            "title": "ECO_MTE_Sem-4_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/engineering-economics/pyqs/ECO_MTE_Sem-4_2025-26.pdf?updatedAt=1784893628090",
            "type": "pdf"
          },
          {
            "title": "ECO_ETE_Sem-4_2023-2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/engineering-economics/pyqs/ECO_ETE_Sem-4_2023-2024.pdf?updatedAt=1784893633378",
            "type": "pdf"
          },
          {
            "title": "ECO_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/engineering-economics/pyqs/ECO_ETE_Sem-3_2025-26.pdf?updatedAt=1784893636990",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Engineering Economics Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "cse-oops-java",
        "name": "Object Oriented Programming (Java)",
        "shortName": "OOPs (Java)",
        "emoji": "\u2615",
        "code": "CS-2103",
        "description": "Classes, inheritance, interfaces, polymorphism, exception handling, and multithreading in Java.",
        "resourceCount": 26,
        "studyMaterials": [
          {
            "title": "JSE (Lecture-14)initialize instance variables",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/study-material/JSE%20(Lecture-14)initialize%20instance%20variables.pdf?updatedAt=1784893599577",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-15 )(Explicit,Initializers,constructors)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/study-material/JSE%20(Lecture-15%20)(Explicit,Initializers,constructors).pdf?updatedAt=1784893601586",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-21)(Method overriding)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/study-material/JSE%20(Lecture-21)(Method%20overriding).pdf?updatedAt=1784893601703",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-23 )(Using keyword final)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/study-material/JSE%20(Lecture-23%20)(Using%20keyword%20final).pdf?updatedAt=1784893602211",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-7 part-2)_Operator",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/study-material/JSE%20(Lecture-7%20part-2)_Operator.pdf?updatedAt=1784893603029",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-19 )(static methods and blocks)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/study-material/JSE%20(Lecture-19%20)(static%20methods%20and%20blocks).pdf?updatedAt=1784893602990",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-17 )(Argument Passing) (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/study-material/JSE%20(Lecture-17%20)(Argument%20Passing)%20(1).pdf?updatedAt=1784893603083",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-17 )(Argument Passing)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/study-material/JSE%20(Lecture-17%20)(Argument%20Passing).pdf?updatedAt=1784893603114",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-18 )(Keyword this and static)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/study-material/JSE%20(Lecture-18%20)(Keyword%20this%20and%20static).pdf?updatedAt=1784893603403",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-24 )(Interfaces)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/study-material/JSE%20(Lecture-24%20)(Interfaces).pdf?updatedAt=1784893604205",
            "type": "pdf"
          },
          {
            "title": "Introduction to java.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/study-material/Introduction%20to%20java.ppt?updatedAt=1784893605458",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-8)_Conditional Statements",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/study-material/JSE%20(Lecture-8)_Conditional%20Statements.pdf?updatedAt=1784893605601",
            "type": "pdf"
          },
          {
            "title": "Lect-1",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/study-material/Lect-1.pdf?updatedAt=1784893608229",
            "type": "pdf"
          },
          {
            "title": "Lect-7",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/study-material/Lect-7.pdf?updatedAt=1784893608439",
            "type": "pdf"
          },
          {
            "title": "Lect-5",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/study-material/Lect-5.pdf?updatedAt=1784893608784",
            "type": "pdf"
          },
          {
            "title": "Lect-20-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/study-material/Lect-20-26.pdf?updatedAt=1784893609035",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-7)_String",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/study-material/JSE%20(Lecture-7)_String.pdf?updatedAt=1784893609410",
            "type": "pdf"
          },
          {
            "title": "Lect-6",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/study-material/Lect-6.pdf?updatedAt=1784893610043",
            "type": "pdf"
          },
          {
            "title": "Lect-2,3",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/study-material/Lect-2,3.pdf?updatedAt=1784893610402",
            "type": "pdf"
          },
          {
            "title": "Lect-8",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/study-material/Lect-8.pdf?updatedAt=1784893610445",
            "type": "pdf"
          },
          {
            "title": "Lect-4",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/study-material/Lect-4.pdf?updatedAt=1784893610594",
            "type": "pdf"
          },
          {
            "title": "Lect-26-28",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/study-material/Lect-26-28.pdf?updatedAt=1784893610945",
            "type": "pdf"
          },
          {
            "title": "introduction_OO.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/study-material/introduction_OO.pptx?updatedAt=1784893618774",
            "type": "pdf"
          },
          {
            "title": "Java_Basics",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/study-material/Java_Basics.pdf?updatedAt=1784893621791",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "OOP-J_ETE_Sem-3_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/pyqs/OOP-J_ETE_Sem-3_2024-2025.pdf?updatedAt=1784893609687",
            "type": "pdf"
          },
          {
            "title": "OOP-J_MTE_Sem-3_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20java/pyqs/OOP-J_MTE_Sem-3_2024-2025.pdf?updatedAt=1784893611079",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Object Oriented Programming (Java) Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "cse-oops-python",
        "name": "Object Oriented Programming (Python)",
        "shortName": "OOPs (Python)",
        "emoji": "\ud83d\udc0d",
        "code": "CS-2105",
        "description": "Object-oriented design patterns, functional programming features, decorators, and data structures in Python.",
        "resourceCount": 11,
        "studyMaterials": [
          {
            "title": "CS2122_Encapsulation",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20python/study-material/CS2122_Encapsulation.pdf?updatedAt=1784893594777",
            "type": "pdf"
          },
          {
            "title": "CSE2122_OOPs",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20python/study-material/CSE2122_OOPs.pdf?updatedAt=1784893596069",
            "type": "pdf"
          },
          {
            "title": "Data Structure_Tree",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20python/study-material/Data%20Structure_Tree.pdf?updatedAt=1784893599098",
            "type": "pdf"
          },
          {
            "title": "Functions in Python",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20python/study-material/Functions%20in%20Python.pdf?updatedAt=1784893604682",
            "type": "pdf"
          },
          {
            "title": "Python- Data Structures",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20python/study-material/Python-%20Data%20Structures.pdf?updatedAt=1784893604715",
            "type": "pdf"
          },
          {
            "title": "Generators and Modules",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20python/study-material/Generators%20and%20Modules.pdf?updatedAt=1784893605139",
            "type": "pdf"
          },
          {
            "title": "Arrays_In-Built Function in python data structure_Search and Sort",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20python/study-material/Arrays_In-Built%20Function%20in%20python%20data%20structure_Search%20and%20Sort.pdf?updatedAt=1784893610828",
            "type": "pdf"
          },
          {
            "title": "CS2122_Constructor",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20python/study-material/CS2122_Constructor.pdf?updatedAt=1784893610919",
            "type": "pdf"
          },
          {
            "title": "CS2122_Inheritance",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20python/study-material/CS2122_Inheritance.pdf?updatedAt=1784893611025",
            "type": "pdf"
          },
          {
            "title": "OOP CONCEPTS",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20python/study-material/OOP%20CONCEPTS.pdf?updatedAt=1784893617724",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "OOP-P_MTE_Sem-3_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/oops%20python/pyqs/OOP-P_MTE_Sem-3_2024-2025.pdf?updatedAt=1784893607432",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Object Oriented Programming (Python) Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "cse-os",
        "name": "Operating Systems",
        "shortName": "OS",
        "emoji": "\ud83d\udd27",
        "code": "CS-2202",
        "description": "Processes, threads, CPU scheduling, inter-process communication, memory management, and file systems.",
        "resourceCount": 29,
        "studyMaterials": [
          {
            "title": "ch10 File System Interface.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/study-material/ch10%20File%20System%20Interface.ppt?updatedAt=1784893616305",
            "type": "pdf"
          },
          {
            "title": "ch12 Mass Storage Structure.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/study-material/ch12%20Mass%20Storage%20Structure.ppt?updatedAt=1784893640269",
            "type": "pdf"
          },
          {
            "title": "ch7 Deadlock.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/study-material/ch7%20Deadlock.ppt?updatedAt=1784893644743",
            "type": "pdf"
          },
          {
            "title": "ch12.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/study-material/ch12.pptx?updatedAt=1784893651946",
            "type": "pdf"
          },
          {
            "title": "ch9 Virtual Memory.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/study-material/ch9%20Virtual%20Memory.ppt?updatedAt=1784893651953",
            "type": "pdf"
          },
          {
            "title": "ch11.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/study-material/ch11.pptx?updatedAt=1784893652158",
            "type": "pdf"
          },
          {
            "title": "ch1.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/study-material/ch1.ppt?updatedAt=1784893655116",
            "type": "pdf"
          },
          {
            "title": "ch5 Synchronization.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/study-material/ch5%20Synchronization.ppt?updatedAt=1784893656628",
            "type": "pdf"
          },
          {
            "title": "ch11 File System Implementation.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/study-material/ch11%20File%20System%20Implementation.ppt?updatedAt=1784893675843",
            "type": "pdf"
          },
          {
            "title": "ch4.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/study-material/ch4.ppt?updatedAt=1784893676576",
            "type": "pdf"
          },
          {
            "title": "ch21.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/study-material/ch21.pptx?updatedAt=1784893684175",
            "type": "pdf"
          },
          {
            "title": "ch31.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/study-material/ch31.pptx?updatedAt=1784893685901",
            "type": "pdf"
          },
          {
            "title": "ch2.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/study-material/ch2.ppt?updatedAt=1784893686857",
            "type": "pdf"
          },
          {
            "title": "ch6.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/study-material/ch6.pptx?updatedAt=1784893687214",
            "type": "pdf"
          },
          {
            "title": "ch3.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/study-material/ch3.ppt?updatedAt=1784893817705",
            "type": "pdf"
          },
          {
            "title": "ch8 (Memory Management).ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/study-material/ch8%20(Memory%20Management).ppt?updatedAt=1784893820413",
            "type": "pdf"
          },
          {
            "title": "ch6.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/study-material/ch6.ppt?updatedAt=1784893824537",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "OS_ETE_Sem-4_Set-1_2023-2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/pyqs/OS_ETE_Sem-4_Set-1_2023-2024.pdf?updatedAt=1784893590776",
            "type": "pdf"
          },
          {
            "title": "OS_MTE_Sem-4_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/pyqs/OS_MTE_Sem-4_2024-2025.pdf?updatedAt=1784893591675",
            "type": "pdf"
          },
          {
            "title": "OS_AI2202_ETE_Sem-4_2022-23",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/pyqs/OS_AI2202_ETE_Sem-4_2022-23.pdf?updatedAt=1784893593208",
            "type": "pdf"
          },
          {
            "title": "OS_MTE_solns_Sem-4_2023-2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/pyqs/OS_MTE_solns_Sem-4_2023-2024.pdf?updatedAt=1784893593710",
            "type": "pdf"
          },
          {
            "title": "OS_MTE_solns_Sem-4_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/pyqs/OS_MTE_solns_Sem-4_2024-2025.pdf?updatedAt=1784893597119",
            "type": "pdf"
          },
          {
            "title": "OS_ETE_solns_Sem-4_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/pyqs/OS_ETE_solns_Sem-4_2024-2025.pdf?updatedAt=1784893597753",
            "type": "pdf"
          },
          {
            "title": "OS_CS2201_ETE_Sem-4_2021-22",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/pyqs/OS_CS2201_ETE_Sem-4_2021-22.pdf?updatedAt=1784893606467",
            "type": "pdf"
          },
          {
            "title": "OS_AI2202_ETE_Sem-4_Summer2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/pyqs/OS_AI2202_ETE_Sem-4_Summer2024.pdf?updatedAt=1784893607524",
            "type": "pdf"
          },
          {
            "title": "OS_AI2202_ETE_Sem-4_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/pyqs/OS_AI2202_ETE_Sem-4_2023-24.pdf?updatedAt=1784893608555",
            "type": "pdf"
          },
          {
            "title": "OS_ETE_Sem-4_Set-1_2023-2024withSolutions",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/pyqs/OS_ETE_Sem-4_Set-1_2023-2024withSolutions.pdf?updatedAt=1784893608860",
            "type": "pdf"
          },
          {
            "title": "OS_CS1401_ETE__Sem-4_2017-18",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/pyqs/OS_CS1401_ETE__Sem-4_2017-18.pdf?updatedAt=1784893618711",
            "type": "pdf"
          },
          {
            "title": "OS_ETE_Sem-4_Set-2_2023-2024withSolutions",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/os/pyqs/OS_ETE_Sem-4_Set-2_2023-2024withSolutions.pdf?updatedAt=1784893690068",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Operating Systems Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "cse-rdbms",
        "name": "Relational Database Management Systems",
        "shortName": "RDBMS",
        "emoji": "\ud83d\uddc4\ufe0f",
        "code": "CS-2203",
        "description": "Relational model, SQL queries, ER diagrams, normalization, indexing, transaction processing, and concurrency.",
        "resourceCount": 7,
        "studyMaterials": [],
        "pyqs": [
          {
            "title": "2 Moderated QP CS2202 RDBMS",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/rdbms/pyqs/2%20Moderated%20QP%20CS2202%20RDBMS.pdf?updatedAt=1784893590989",
            "type": "pdf"
          },
          {
            "title": "CSE2102 - RDBMS",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/rdbms/pyqs/CSE2102%20-%20RDBMS.pdf?updatedAt=1784893591412",
            "type": "pdf"
          },
          {
            "title": "MTE1 QP CS2202 RDBMS Solution 2021",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/rdbms/pyqs/MTE1%20QP%20CS2202%20RDBMS%20Solution%202021.pdf?updatedAt=1784893592736",
            "type": "pdf"
          },
          {
            "title": "RDBMS_MTE_CS2202_Sem-4_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/rdbms/pyqs/RDBMS_MTE_CS2202_Sem-4_2023-24.pdf?updatedAt=1784893595034",
            "type": "pdf"
          },
          {
            "title": "RDBMS_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/rdbms/pyqs/RDBMS_MTE_Sem-3_2025-26.pdf?updatedAt=1784893602402",
            "type": "pdf"
          },
          {
            "title": "CS2202-RDBMS-Set C - Solution (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/rdbms/pyqs/CS2202-RDBMS-Set%20C%20-%20Solution%20(1).pdf?updatedAt=1784893609648",
            "type": "pdf"
          },
          {
            "title": "CS2202-RDBMS-Set C - Solution",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/rdbms/pyqs/CS2202-RDBMS-Set%20C%20-%20Solution.pdf?updatedAt=1784893609615",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Relational Database Management Systems Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "cse-statistics-probability",
        "name": "Statistics & Probability",
        "shortName": "Stats & Prob",
        "emoji": "\ud83d\udcca",
        "code": "MA-2101",
        "description": "Probability distributions, random variables, statistical inference, hypothesis testing, and regression.",
        "resourceCount": 8,
        "studyMaterials": [
          {
            "title": "S&P-2",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/statistics-probability/study-material/S&P-2.pdf?updatedAt=1784893647344",
            "type": "pdf"
          },
          {
            "title": "S&P-1",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/statistics-probability/study-material/S&P-1.pdf?updatedAt=1784893849638",
            "type": "pdf"
          },
          {
            "title": "S&P-3",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/statistics-probability/study-material/S&P-3.pdf?updatedAt=1784893881780",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "S&P_ETE_Sem-4_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/statistics-probability/pyqs/S&P_ETE_Sem-4_2024-25.pdf?updatedAt=1784893590074",
            "type": "pdf"
          },
          {
            "title": "S&P_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/statistics-probability/pyqs/S&P_ETE_Sem-3_2025-26.pdf?updatedAt=1784893591427",
            "type": "pdf"
          },
          {
            "title": "S&P_MTE_Sem-3_2025-2026",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/statistics-probability/pyqs/S&P_MTE_Sem-3_2025-2026.pdf?updatedAt=1784893594133",
            "type": "pdf"
          },
          {
            "title": "S&P_MTE_Sem-3_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/statistics-probability/pyqs/S&P_MTE_Sem-3_2024-2025.pdf?updatedAt=1784893599160",
            "type": "pdf"
          },
          {
            "title": "S&P_ETE_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/cse-2nd%20year/statistics-probability/pyqs/S&P_ETE_Sem-3_2024-25.pdf?updatedAt=1784893602831",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Statistics & Probability Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      }
    ]
  },
  {
    "id": "dse",
    "name": "Data Science Engineering",
    "shortName": "DSE",
    "emoji": "\ud83d\udcca",
    "icon": "Database",
    "gradient": "from-emerald-500 to-teal-600",
    "color": "#059669",
    "description": "Big Data Analytics, Statistical Modeling & Data Mining",
    "subjects": [
      {
        "id": "dse-dsa",
        "name": "Data Structures & Algorithms",
        "shortName": "DSA",
        "emoji": "\ud83e\uddec",
        "code": "CS-2102",
        "description": "Arrays, linked lists, stacks, queues, trees, graphs, hashing, and fundamental sorting/searching techniques.",
        "resourceCount": 26,
        "studyMaterials": [
          {
            "title": "3. One Dimensional Array.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/study-material/3.%20One%20Dimensional%20Array.pptx?updatedAt=1784893583262",
            "type": "pdf"
          },
          {
            "title": "42-44 Sortings.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/study-material/42-44%20Sortings.pptx?updatedAt=1784893586149",
            "type": "pdf"
          },
          {
            "title": "4-5. Two Dimensional Array.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/study-material/4-5.%20Two%20Dimensional%20Array.pptx?updatedAt=1784893587996",
            "type": "pdf"
          },
          {
            "title": "43. MST, Prims, Kruskals.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/study-material/43.%20MST,%20Prims,%20Kruskals.ppt?updatedAt=1784893590585",
            "type": "pdf"
          },
          {
            "title": "7-9. Dynamic Array and DMA.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/study-material/7-9.%20Dynamic%20Array%20and%20DMA.pptx?updatedAt=1784893598585",
            "type": "pdf"
          },
          {
            "title": "6. Pointes.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/study-material/6.%20Pointes.pptx?updatedAt=1784893605731",
            "type": "pdf"
          },
          {
            "title": "47. Hashing.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/study-material/47.%20Hashing.pptx?updatedAt=1784893605966",
            "type": "pdf"
          },
          {
            "title": "44. Hashing.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/study-material/44.%20Hashing.pptx?updatedAt=1784893611406",
            "type": "pdf"
          },
          {
            "title": "36. Heaps and Heap Sort.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/study-material/36.%20Heaps%20and%20Heap%20Sort.ppt?updatedAt=1784893613331",
            "type": "pdf"
          },
          {
            "title": "46. Merge Sort and Quick Sort.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/study-material/46.%20Merge%20Sort%20and%20Quick%20Sort.ppt?updatedAt=1784893635959",
            "type": "pdf"
          },
          {
            "title": "18-19. Recursion.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/study-material/18-19.%20Recursion.ppt?updatedAt=1784893646629",
            "type": "pdf"
          },
          {
            "title": "10-17. Linked List.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/study-material/10-17.%20Linked%20List.pptx?updatedAt=1784893655685",
            "type": "pdf"
          },
          {
            "title": "41-42. Graph Data Structure.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/study-material/41-42.%20Graph%20Data%20Structure.ppt?updatedAt=1784893662769",
            "type": "pdf"
          },
          {
            "title": "1 - 2. Introduction and Performance Analysis Updated.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/study-material/1%20-%202.%20Introduction%20and%20Performance%20Analysis%20Updated.pptx?updatedAt=1784893875650",
            "type": "pdf"
          },
          {
            "title": "26-29. Queue and Circular Queue.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/study-material/26-29.%20Queue%20and%20Circular%20Queue.ppt?updatedAt=1784893878101",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "DSA_AI2103_MTE_Sem-3_Summer2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/pyqs/DSA_AI2103_MTE_Sem-3_Summer2024.pdf?updatedAt=1784893588685",
            "type": "pdf"
          },
          {
            "title": "DSA_INT2102_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/pyqs/DSA_INT2102_MTE_Sem-3_2025-26.pdf?updatedAt=1784893594474",
            "type": "pdf"
          },
          {
            "title": "DSA_MTE_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/pyqs/DSA_MTE_Sem-3_2024-25.pdf?updatedAt=1784893595128",
            "type": "pdf"
          },
          {
            "title": "DSA_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/pyqs/DSA_MTE_Sem-3_2025-26.pdf?updatedAt=1784893595912",
            "type": "pdf"
          },
          {
            "title": "DSA_DSE2101_ETE_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/pyqs/DSA_DSE2101_ETE_Sem-3_2024-25.pdf?updatedAt=1784893595978",
            "type": "pdf"
          },
          {
            "title": "DSA_ETE_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/pyqs/DSA_ETE_Sem-3_2024-25.pdf?updatedAt=1784893598329",
            "type": "pdf"
          },
          {
            "title": "DSA_IT2101_Make-up_Sem-3_Summer2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/pyqs/DSA_IT2101_Make-up_Sem-3_Summer2024.pdf?updatedAt=1784893601583",
            "type": "pdf"
          },
          {
            "title": "DSA-MTE-Solution (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/pyqs/DSA-MTE-Solution%20(1).pdf?updatedAt=1784893602651",
            "type": "pdf"
          },
          {
            "title": "DSA_DSE2101_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/pyqs/DSA_DSE2101_ETE_Sem-3_2025-26.pdf?updatedAt=1784893603964",
            "type": "pdf"
          },
          {
            "title": "DSA_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/pyqs/DSA_ETE_Sem-3_2025-26.pdf?updatedAt=1784893605351",
            "type": "pdf"
          },
          {
            "title": "DSA_AIM2101_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/dsa/pyqs/DSA_AIM2101_ETE_Sem-3_2025-26.pdf?updatedAt=1784893606882",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Data Structures & Algorithms Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "dse-oops-java",
        "name": "Object Oriented Programming (Java)",
        "shortName": "OOPs (Java)",
        "emoji": "\u2615",
        "code": "CS-2103",
        "description": "Classes, inheritance, interfaces, polymorphism, exception handling, and multithreading in Java.",
        "resourceCount": 26,
        "studyMaterials": [
          {
            "title": "JSE (Lecture-14)initialize instance variables",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/study-material/JSE%20(Lecture-14)initialize%20instance%20variables.pdf?updatedAt=1784893564555",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-15 )(Explicit,Initializers,constructors)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/study-material/JSE%20(Lecture-15%20)(Explicit,Initializers,constructors).pdf?updatedAt=1784893565370",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-21)(Method overriding)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/study-material/JSE%20(Lecture-21)(Method%20overriding).pdf?updatedAt=1784893566125",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-19 )(static methods and blocks)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/study-material/JSE%20(Lecture-19%20)(static%20methods%20and%20blocks).pdf?updatedAt=1784893566372",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-23 )(Using keyword final)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/study-material/JSE%20(Lecture-23%20)(Using%20keyword%20final).pdf?updatedAt=1784893566439",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-17 )(Argument Passing) (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/study-material/JSE%20(Lecture-17%20)(Argument%20Passing)%20(1).pdf?updatedAt=1784893566587",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-17 )(Argument Passing)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/study-material/JSE%20(Lecture-17%20)(Argument%20Passing).pdf?updatedAt=1784893566674",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-18 )(Keyword this and static)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/study-material/JSE%20(Lecture-18%20)(Keyword%20this%20and%20static).pdf?updatedAt=1784893566911",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-24 )(Interfaces)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/study-material/JSE%20(Lecture-24%20)(Interfaces).pdf?updatedAt=1784893567417",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-7 part-2)_Operator",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/study-material/JSE%20(Lecture-7%20part-2)_Operator.pdf?updatedAt=1784893567505",
            "type": "pdf"
          },
          {
            "title": "Lect-7",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/study-material/Lect-7.pdf?updatedAt=1784893568327",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-8)_Conditional Statements",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/study-material/JSE%20(Lecture-8)_Conditional%20Statements.pdf?updatedAt=1784893568729",
            "type": "pdf"
          },
          {
            "title": "Introduction to java.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/study-material/Introduction%20to%20java.ppt?updatedAt=1784893569141",
            "type": "pdf"
          },
          {
            "title": "Lect-5",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/study-material/Lect-5.pdf?updatedAt=1784893569863",
            "type": "pdf"
          },
          {
            "title": "Lect-6",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/study-material/Lect-6.pdf?updatedAt=1784893570296",
            "type": "pdf"
          },
          {
            "title": "Lect-20-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/study-material/Lect-20-26.pdf?updatedAt=1784893570393",
            "type": "pdf"
          },
          {
            "title": "Lect-8",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/study-material/Lect-8.pdf?updatedAt=1784893570405",
            "type": "pdf"
          },
          {
            "title": "Lect-1",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/study-material/Lect-1.pdf?updatedAt=1784893570618",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-7)_String",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/study-material/JSE%20(Lecture-7)_String.pdf?updatedAt=1784893571154",
            "type": "pdf"
          },
          {
            "title": "Lect-4",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/study-material/Lect-4.pdf?updatedAt=1784893571275",
            "type": "pdf"
          },
          {
            "title": "Lect-2,3",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/study-material/Lect-2,3.pdf?updatedAt=1784893571375",
            "type": "pdf"
          },
          {
            "title": "Lect-26-28",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/study-material/Lect-26-28.pdf?updatedAt=1784893571421",
            "type": "pdf"
          },
          {
            "title": "introduction_OO.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/study-material/introduction_OO.pptx?updatedAt=1784893576484",
            "type": "pdf"
          },
          {
            "title": "Java_Basics",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/study-material/Java_Basics.pdf?updatedAt=1784893577655",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "OOP-J_ETE_Sem-3_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/pyqs/OOP-J_ETE_Sem-3_2024-2025.pdf?updatedAt=1784893570250",
            "type": "pdf"
          },
          {
            "title": "OOP-J_MTE_Sem-3_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/oops%20java/pyqs/OOP-J_MTE_Sem-3_2024-2025.pdf?updatedAt=1784893571191",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Object Oriented Programming (Java) Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "dse-rdbms",
        "name": "Relational Database Management Systems",
        "shortName": "RDBMS",
        "emoji": "\ud83d\uddc4\ufe0f",
        "code": "CS-2203",
        "description": "Relational model, SQL queries, ER diagrams, normalization, indexing, transaction processing, and concurrency.",
        "resourceCount": 7,
        "studyMaterials": [],
        "pyqs": [
          {
            "title": "2 Moderated QP CS2202 RDBMS",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/rdbms/pyqs/2%20Moderated%20QP%20CS2202%20RDBMS.pdf?updatedAt=1784893561193",
            "type": "pdf"
          },
          {
            "title": "CSE2102 - RDBMS",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/rdbms/pyqs/CSE2102%20-%20RDBMS.pdf?updatedAt=1784893563934",
            "type": "pdf"
          },
          {
            "title": "MTE1 QP CS2202 RDBMS Solution 2021",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/rdbms/pyqs/MTE1%20QP%20CS2202%20RDBMS%20Solution%202021.pdf?updatedAt=1784893565094",
            "type": "pdf"
          },
          {
            "title": "RDBMS_MTE_CS2202_Sem-4_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/rdbms/pyqs/RDBMS_MTE_CS2202_Sem-4_2023-24.pdf?updatedAt=1784893566927",
            "type": "pdf"
          },
          {
            "title": "RDBMS_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/rdbms/pyqs/RDBMS_MTE_Sem-3_2025-26.pdf?updatedAt=1784893571383",
            "type": "pdf"
          },
          {
            "title": "CS2202-RDBMS-Set C - Solution (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/rdbms/pyqs/CS2202-RDBMS-Set%20C%20-%20Solution%20(1).pdf?updatedAt=1784893573882",
            "type": "pdf"
          },
          {
            "title": "CS2202-RDBMS-Set C - Solution",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/dse-2nd%20year/rdbms/pyqs/CS2202-RDBMS-Set%20C%20-%20Solution.pdf?updatedAt=1784893574262",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Relational Database Management Systems Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      }
    ]
  },
  {
    "id": "iot",
    "name": "Internet of Things Engg",
    "shortName": "IOT",
    "emoji": "\ud83c\udf10",
    "icon": "Cpu",
    "gradient": "from-cyan-500 to-blue-600",
    "color": "#0284c7",
    "description": "Embedded Systems, Smart Devices & Connected Hardware",
    "subjects": [
      {
        "id": "iot-acd",
        "name": "Automata and Compiler Design",
        "shortName": "ACD",
        "emoji": "\u2699\ufe0f",
        "code": "CS-2104",
        "description": "Finite automata, regular expressions, lexing, parsing, syntax directed translation, and code optimization.",
        "resourceCount": 21,
        "studyMaterials": [
          {
            "title": "8. Compiler",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/acd/study-material/8.%20Compiler.pdf?updatedAt=1784893558798",
            "type": "pdf"
          },
          {
            "title": "4. Pushdown Automata",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/acd/study-material/4.%20Pushdown%20Automata.pdf?updatedAt=1784893560408",
            "type": "pdf"
          },
          {
            "title": "5. Turing Machine",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/acd/study-material/5.%20Turing%20Machine.pdf?updatedAt=1784893566198",
            "type": "pdf"
          },
          {
            "title": "ContextFreeGrammars",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/acd/study-material/ContextFreeGrammars.pdf?updatedAt=1784893567154",
            "type": "pdf"
          },
          {
            "title": "7. P , NP and NP hard",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/acd/study-material/7.%20P%20,%20NP%20and%20NP%20hard.pdf?updatedAt=1784893569939",
            "type": "pdf"
          },
          {
            "title": "3. Context Free Grammar",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/acd/study-material/3.%20Context%20Free%20Grammar.pdf?updatedAt=1784893573085",
            "type": "pdf"
          },
          {
            "title": "2. Regular Expression",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/acd/study-material/2.%20Regular%20Expression.pdf?updatedAt=1784893574303",
            "type": "pdf"
          },
          {
            "title": "6. Decidable and undecidable problems",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/acd/study-material/6.%20Decidable%20and%20undecidable%20problems.pdf?updatedAt=1784893584796",
            "type": "pdf"
          },
          {
            "title": "PDA_NOTES",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/acd/study-material/PDA_NOTES.pdf?updatedAt=1784893659195",
            "type": "pdf"
          },
          {
            "title": "CFG",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/acd/study-material/CFG.pdf?updatedAt=1784893849401",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "ACD_CS3103_MTE-2_Sem-5_2022-23",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/acd/pyqs/ACD_CS3103_MTE-2_Sem-5_2022-23.pdf?updatedAt=1784893550864",
            "type": "pdf"
          },
          {
            "title": "ACD_CS3103_MTE-1_Sem-5_2021-22",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/acd/pyqs/ACD_CS3103_MTE-1_Sem-5_2021-22.pdf?updatedAt=1784893552949",
            "type": "pdf"
          },
          {
            "title": "ACD_CS3103_ETE_Sem-5_2022-23",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/acd/pyqs/ACD_CS3103_ETE_Sem-5_2022-23.pdf?updatedAt=1784893553055",
            "type": "pdf"
          },
          {
            "title": "ACD_CS1505_ETE_Sem-5_2018-19",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/acd/pyqs/ACD_CS1505_ETE_Sem-5_2018-19.pdf?updatedAt=1784893556523",
            "type": "pdf"
          },
          {
            "title": "ACD_CS3103_MTE_Sem-5_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/acd/pyqs/ACD_CS3103_MTE_Sem-5_2024-25.pdf?updatedAt=1784893559062",
            "type": "pdf"
          },
          {
            "title": "ACD_CS3103_Make-up_Sem-5_2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/acd/pyqs/ACD_CS3103_Make-up_Sem-5_2024.pdf?updatedAt=1784893564400",
            "type": "pdf"
          },
          {
            "title": "ACD_CS3103_ETE_Sem-5_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/acd/pyqs/ACD_CS3103_ETE_Sem-5_2023-24.pdf?updatedAt=1784893566342",
            "type": "pdf"
          },
          {
            "title": "CS3103-set2",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/acd/pyqs/CS3103-set2.pdf?updatedAt=1784893567701",
            "type": "pdf"
          },
          {
            "title": "CS3103-set1",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/acd/pyqs/CS3103-set1.pdf?updatedAt=1784893568156",
            "type": "pdf"
          },
          {
            "title": "ACD_CS3103_MTE_Sem-5_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/acd/pyqs/ACD_CS3103_MTE_Sem-5_2023-24.pdf?updatedAt=1784893574855",
            "type": "pdf"
          },
          {
            "title": "ACD_CS3103_ETE_Sem-5_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/acd/pyqs/ACD_CS3103_ETE_Sem-5_2024-25.pdf?updatedAt=1784893880365",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Automata and Compiler Design Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "iot-dsa",
        "name": "Data Structures & Algorithms",
        "shortName": "DSA",
        "emoji": "\ud83e\uddec",
        "code": "CS-2102",
        "description": "Arrays, linked lists, stacks, queues, trees, graphs, hashing, and fundamental sorting/searching techniques.",
        "resourceCount": 26,
        "studyMaterials": [
          {
            "title": "3. One Dimensional Array.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/study-material/3.%20One%20Dimensional%20Array.pptx?updatedAt=1784893556155",
            "type": "pdf"
          },
          {
            "title": "7-9. Dynamic Array and DMA.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/study-material/7-9.%20Dynamic%20Array%20and%20DMA.pptx?updatedAt=1784893559545",
            "type": "pdf"
          },
          {
            "title": "42-44 Sortings.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/study-material/42-44%20Sortings.pptx?updatedAt=1784893563229",
            "type": "pdf"
          },
          {
            "title": "4-5. Two Dimensional Array.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/study-material/4-5.%20Two%20Dimensional%20Array.pptx?updatedAt=1784893563269",
            "type": "pdf"
          },
          {
            "title": "47. Hashing.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/study-material/47.%20Hashing.pptx?updatedAt=1784893565742",
            "type": "pdf"
          },
          {
            "title": "43. MST, Prims, Kruskals.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/study-material/43.%20MST,%20Prims,%20Kruskals.ppt?updatedAt=1784893566035",
            "type": "pdf"
          },
          {
            "title": "6. Pointes.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/study-material/6.%20Pointes.pptx?updatedAt=1784893566502",
            "type": "pdf"
          },
          {
            "title": "44. Hashing.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/study-material/44.%20Hashing.pptx?updatedAt=1784893569302",
            "type": "pdf"
          },
          {
            "title": "36. Heaps and Heap Sort.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/study-material/36.%20Heaps%20and%20Heap%20Sort.ppt?updatedAt=1784893577640",
            "type": "pdf"
          },
          {
            "title": "46. Merge Sort and Quick Sort.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/study-material/46.%20Merge%20Sort%20and%20Quick%20Sort.ppt?updatedAt=1784893580639",
            "type": "pdf"
          },
          {
            "title": "18-19. Recursion.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/study-material/18-19.%20Recursion.ppt?updatedAt=1784893597017",
            "type": "pdf"
          },
          {
            "title": "10-17. Linked List.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/study-material/10-17.%20Linked%20List.pptx?updatedAt=1784893612933",
            "type": "pdf"
          },
          {
            "title": "41-42. Graph Data Structure.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/study-material/41-42.%20Graph%20Data%20Structure.ppt?updatedAt=1784893615283",
            "type": "pdf"
          },
          {
            "title": "1 - 2. Introduction and Performance Analysis Updated.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/study-material/1%20-%202.%20Introduction%20and%20Performance%20Analysis%20Updated.pptx?updatedAt=1784893875314",
            "type": "pdf"
          },
          {
            "title": "26-29. Queue and Circular Queue.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/study-material/26-29.%20Queue%20and%20Circular%20Queue.ppt?updatedAt=1784893878090",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "DSA_AI2103_MTE_Sem-3_Summer2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/pyqs/DSA_AI2103_MTE_Sem-3_Summer2024.pdf?updatedAt=1784893548446",
            "type": "pdf"
          },
          {
            "title": "DSA_INT2102_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/pyqs/DSA_INT2102_MTE_Sem-3_2025-26.pdf?updatedAt=1784893557139",
            "type": "pdf"
          },
          {
            "title": "DSA_DSE2101_ETE_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/pyqs/DSA_DSE2101_ETE_Sem-3_2024-25.pdf?updatedAt=1784893557503",
            "type": "pdf"
          },
          {
            "title": "DSA_MTE_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/pyqs/DSA_MTE_Sem-3_2024-25.pdf?updatedAt=1784893558146",
            "type": "pdf"
          },
          {
            "title": "DSA_ETE_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/pyqs/DSA_ETE_Sem-3_2024-25.pdf?updatedAt=1784893560126",
            "type": "pdf"
          },
          {
            "title": "DSA_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/pyqs/DSA_MTE_Sem-3_2025-26.pdf?updatedAt=1784893560482",
            "type": "pdf"
          },
          {
            "title": "DSA-MTE-Solution (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/pyqs/DSA-MTE-Solution%20(1).pdf?updatedAt=1784893563884",
            "type": "pdf"
          },
          {
            "title": "DSA_IT2101_Make-up_Sem-3_Summer2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/pyqs/DSA_IT2101_Make-up_Sem-3_Summer2024.pdf?updatedAt=1784893564618",
            "type": "pdf"
          },
          {
            "title": "DSA_DSE2101_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/pyqs/DSA_DSE2101_ETE_Sem-3_2025-26.pdf?updatedAt=1784893565655",
            "type": "pdf"
          },
          {
            "title": "DSA_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/pyqs/DSA_ETE_Sem-3_2025-26.pdf?updatedAt=1784893567101",
            "type": "pdf"
          },
          {
            "title": "DSA_AIM2101_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/dsa/pyqs/DSA_AIM2101_ETE_Sem-3_2025-26.pdf?updatedAt=1784893567905",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Data Structures & Algorithms Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "iot-engineering-economics",
        "name": "Engineering Economics",
        "shortName": "Engineering Eco",
        "emoji": "\ud83d\udcc8",
        "code": "HS-2101",
        "description": "Financial evaluation of engineering projects, time value of money, cost estimation, depreciation, and budgeting.",
        "resourceCount": 24,
        "studyMaterials": [
          {
            "title": "Risk and Risk_Vs_Returns_L28",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/engineering-economics/study-material/Risk%20and%20Risk_Vs_Returns_L28.pdf?updatedAt=1784893539476",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_7",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_7.pdf?updatedAt=1784893539572",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_20-21",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_20-21.pdf?updatedAt=1784893540324",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_3 (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_3%20(1).pdf?updatedAt=1784893541017",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_3",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_3.pdf?updatedAt=1784893541476",
            "type": "pdf"
          },
          {
            "title": "Budgeting_L25-27-final",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/engineering-economics/study-material/Budgeting_L25-27-final.pdf?updatedAt=1784893543799",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_10-12 new",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_10-12%20new.pdf?updatedAt=1784893543934",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_22 24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_22%2024.pdf?updatedAt=1784893550515",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_13",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_13.pdf?updatedAt=1784893550876",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_NPV_L14-17",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_NPV_L14-17.pdf?updatedAt=1784893554428",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_8 9",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_8%209.pdf?updatedAt=1784893557358",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_1",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_1.pdf?updatedAt=1784893557677",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_NPV,IRR_L14-19",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_NPV,IRR_L14-19.pdf?updatedAt=1784893558554",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_2",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_2.pdf?updatedAt=1784893560833",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_4-5",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_4-5.pdf?updatedAt=1784893565066",
            "type": "pdf"
          },
          {
            "title": "Depreciation_L29-31",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/engineering-economics/study-material/Depreciation_L29-31.pdf?updatedAt=1784893572584",
            "type": "pdf"
          },
          {
            "title": "PERT CPM final_L32-35 - Copy",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/engineering-economics/study-material/PERT%20CPM%20final_L32-35%20-%20Copy.pdf?updatedAt=1784893575471",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "ECO_Make-up_Sem-4_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/engineering-economics/pyqs/ECO_Make-up_Sem-4_2023-24.pdf?updatedAt=1784893538811",
            "type": "pdf"
          },
          {
            "title": "ECO_Make-up_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/engineering-economics/pyqs/ECO_Make-up_Sem-3_2024-25.pdf?updatedAt=1784893538910",
            "type": "pdf"
          },
          {
            "title": "ECO_MTE_Sem-4_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/engineering-economics/pyqs/ECO_MTE_Sem-4_2023-24.pdf?updatedAt=1784893542599",
            "type": "pdf"
          },
          {
            "title": "ECO_MTE_Sem-4_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/engineering-economics/pyqs/ECO_MTE_Sem-4_2025-26.pdf?updatedAt=1784893544669",
            "type": "pdf"
          },
          {
            "title": "ECO_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/engineering-economics/pyqs/ECO_MTE_Sem-3_2025-26.pdf?updatedAt=1784893545173",
            "type": "pdf"
          },
          {
            "title": "ECO_ETE_Sem-4_2023-2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/engineering-economics/pyqs/ECO_ETE_Sem-4_2023-2024.pdf?updatedAt=1784893552742",
            "type": "pdf"
          },
          {
            "title": "ECO_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/engineering-economics/pyqs/ECO_ETE_Sem-3_2025-26.pdf?updatedAt=1784893557774",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Engineering Economics Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "iot-oops-java",
        "name": "Object Oriented Programming (Java)",
        "shortName": "OOPs (Java)",
        "emoji": "\u2615",
        "code": "CS-2103",
        "description": "Classes, inheritance, interfaces, polymorphism, exception handling, and multithreading in Java.",
        "resourceCount": 26,
        "studyMaterials": [
          {
            "title": "JSE (Lecture-14)initialize instance variables",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/study-material/JSE%20(Lecture-14)initialize%20instance%20variables.pdf?updatedAt=1784893522857",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-15 )(Explicit,Initializers,constructors)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/study-material/JSE%20(Lecture-15%20)(Explicit,Initializers,constructors).pdf?updatedAt=1784893523300",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-17 )(Argument Passing) (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/study-material/JSE%20(Lecture-17%20)(Argument%20Passing)%20(1).pdf?updatedAt=1784893524918",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-17 )(Argument Passing)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/study-material/JSE%20(Lecture-17%20)(Argument%20Passing).pdf?updatedAt=1784893525081",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-21)(Method overriding)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/study-material/JSE%20(Lecture-21)(Method%20overriding).pdf?updatedAt=1784893525237",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-19 )(static methods and blocks)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/study-material/JSE%20(Lecture-19%20)(static%20methods%20and%20blocks).pdf?updatedAt=1784893525451",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-23 )(Using keyword final)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/study-material/JSE%20(Lecture-23%20)(Using%20keyword%20final).pdf?updatedAt=1784893525643",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-18 )(Keyword this and static)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/study-material/JSE%20(Lecture-18%20)(Keyword%20this%20and%20static).pdf?updatedAt=1784893526103",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-7 part-2)_Operator",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/study-material/JSE%20(Lecture-7%20part-2)_Operator.pdf?updatedAt=1784893527374",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-24 )(Interfaces)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/study-material/JSE%20(Lecture-24%20)(Interfaces).pdf?updatedAt=1784893528572",
            "type": "pdf"
          },
          {
            "title": "Introduction to java.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/study-material/Introduction%20to%20java.ppt?updatedAt=1784893529158",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-8)_Conditional Statements",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/study-material/JSE%20(Lecture-8)_Conditional%20Statements.pdf?updatedAt=1784893530174",
            "type": "pdf"
          },
          {
            "title": "Lect-7",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/study-material/Lect-7.pdf?updatedAt=1784893531257",
            "type": "pdf"
          },
          {
            "title": "Lect-1",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/study-material/Lect-1.pdf?updatedAt=1784893533086",
            "type": "pdf"
          },
          {
            "title": "Lect-5",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/study-material/Lect-5.pdf?updatedAt=1784893533456",
            "type": "pdf"
          },
          {
            "title": "JSE (Lecture-7)_String",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/study-material/JSE%20(Lecture-7)_String.pdf?updatedAt=1784893533612",
            "type": "pdf"
          },
          {
            "title": "Lect-6",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/study-material/Lect-6.pdf?updatedAt=1784893534181",
            "type": "pdf"
          },
          {
            "title": "Lect-20-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/study-material/Lect-20-26.pdf?updatedAt=1784893534895",
            "type": "pdf"
          },
          {
            "title": "Lect-2,3",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/study-material/Lect-2,3.pdf?updatedAt=1784893535154",
            "type": "pdf"
          },
          {
            "title": "Lect-4",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/study-material/Lect-4.pdf?updatedAt=1784893535892",
            "type": "pdf"
          },
          {
            "title": "Lect-8",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/study-material/Lect-8.pdf?updatedAt=1784893536274",
            "type": "pdf"
          },
          {
            "title": "Lect-26-28",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/study-material/Lect-26-28.pdf?updatedAt=1784893536470",
            "type": "pdf"
          },
          {
            "title": "introduction_OO.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/study-material/introduction_OO.pptx?updatedAt=1784893541150",
            "type": "pdf"
          },
          {
            "title": "Java_Basics",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/study-material/Java_Basics.pdf?updatedAt=1784893543052",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "OOP-J_ETE_Sem-3_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/pyqs/OOP-J_ETE_Sem-3_2024-2025.pdf?updatedAt=1784893535711",
            "type": "pdf"
          },
          {
            "title": "OOP-J_MTE_Sem-3_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20java/pyqs/OOP-J_MTE_Sem-3_2024-2025.pdf?updatedAt=1784893536927",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Object Oriented Programming (Java) Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "iot-oops-python",
        "name": "Object Oriented Programming (Python)",
        "shortName": "OOPs (Python)",
        "emoji": "\ud83d\udc0d",
        "code": "CS-2105",
        "description": "Object-oriented design patterns, functional programming features, decorators, and data structures in Python.",
        "resourceCount": 11,
        "studyMaterials": [
          {
            "title": "CSE2122_OOPs",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20python/study-material/CSE2122_OOPs.pdf?updatedAt=1784893523006",
            "type": "pdf"
          },
          {
            "title": "CS2122_Encapsulation",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20python/study-material/CS2122_Encapsulation.pdf?updatedAt=1784893523386",
            "type": "pdf"
          },
          {
            "title": "Data Structure_Tree",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20python/study-material/Data%20Structure_Tree.pdf?updatedAt=1784893525076",
            "type": "pdf"
          },
          {
            "title": "Python- Data Structures",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20python/study-material/Python-%20Data%20Structures.pdf?updatedAt=1784893529334",
            "type": "pdf"
          },
          {
            "title": "Functions in Python",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20python/study-material/Functions%20in%20Python.pdf?updatedAt=1784893530648",
            "type": "pdf"
          },
          {
            "title": "Generators and Modules",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20python/study-material/Generators%20and%20Modules.pdf?updatedAt=1784893531008",
            "type": "pdf"
          },
          {
            "title": "CS2122_Inheritance",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20python/study-material/CS2122_Inheritance.pdf?updatedAt=1784893537180",
            "type": "pdf"
          },
          {
            "title": "CS2122_Constructor",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20python/study-material/CS2122_Constructor.pdf?updatedAt=1784893538675",
            "type": "pdf"
          },
          {
            "title": "Arrays_In-Built Function in python data structure_Search and Sort",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20python/study-material/Arrays_In-Built%20Function%20in%20python%20data%20structure_Search%20and%20Sort.pdf?updatedAt=1784893538962",
            "type": "pdf"
          },
          {
            "title": "OOP CONCEPTS",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20python/study-material/OOP%20CONCEPTS.pdf?updatedAt=1784893542643",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "OOP-P_MTE_Sem-3_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/oops%20python/pyqs/OOP-P_MTE_Sem-3_2024-2025.pdf?updatedAt=1784893530769",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Object Oriented Programming (Python) Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "iot-os",
        "name": "Operating Systems",
        "shortName": "OS",
        "emoji": "\ud83d\udd27",
        "code": "CS-2202",
        "description": "Processes, threads, CPU scheduling, inter-process communication, memory management, and file systems.",
        "resourceCount": 29,
        "studyMaterials": [
          {
            "title": "ch10 File System Interface.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/study-material/ch10%20File%20System%20Interface.ppt?updatedAt=1784893536055",
            "type": "pdf"
          },
          {
            "title": "ch12 Mass Storage Structure.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/study-material/ch12%20Mass%20Storage%20Structure.ppt?updatedAt=1784893562655",
            "type": "pdf"
          },
          {
            "title": "ch7 Deadlock.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/study-material/ch7%20Deadlock.ppt?updatedAt=1784893567910",
            "type": "pdf"
          },
          {
            "title": "ch11.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/study-material/ch11.pptx?updatedAt=1784893571559",
            "type": "pdf"
          },
          {
            "title": "ch1.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/study-material/ch1.ppt?updatedAt=1784893571697",
            "type": "pdf"
          },
          {
            "title": "ch12.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/study-material/ch12.pptx?updatedAt=1784893571830",
            "type": "pdf"
          },
          {
            "title": "ch9 Virtual Memory.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/study-material/ch9%20Virtual%20Memory.ppt?updatedAt=1784893573600",
            "type": "pdf"
          },
          {
            "title": "ch5 Synchronization.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/study-material/ch5%20Synchronization.ppt?updatedAt=1784893574228",
            "type": "pdf"
          },
          {
            "title": "ch11 File System Implementation.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/study-material/ch11%20File%20System%20Implementation.ppt?updatedAt=1784893580992",
            "type": "pdf"
          },
          {
            "title": "ch4.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/study-material/ch4.ppt?updatedAt=1784893582134",
            "type": "pdf"
          },
          {
            "title": "ch21.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/study-material/ch21.pptx?updatedAt=1784893585732",
            "type": "pdf"
          },
          {
            "title": "ch31.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/study-material/ch31.pptx?updatedAt=1784893587669",
            "type": "pdf"
          },
          {
            "title": "ch2.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/study-material/ch2.ppt?updatedAt=1784893588375",
            "type": "pdf"
          },
          {
            "title": "ch6.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/study-material/ch6.pptx?updatedAt=1784893590360",
            "type": "pdf"
          },
          {
            "title": "ch3.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/study-material/ch3.ppt?updatedAt=1784893612900",
            "type": "pdf"
          },
          {
            "title": "ch8 (Memory Management).ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/study-material/ch8%20(Memory%20Management).ppt?updatedAt=1784893622497",
            "type": "pdf"
          },
          {
            "title": "ch6.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/study-material/ch6.ppt?updatedAt=1784893634332",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "OS_ETE_Sem-4_Set-1_2023-2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/pyqs/OS_ETE_Sem-4_Set-1_2023-2024.pdf?updatedAt=1784893518986",
            "type": "pdf"
          },
          {
            "title": "OS_AI2202_ETE_Sem-4_2022-23",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/pyqs/OS_AI2202_ETE_Sem-4_2022-23.pdf?updatedAt=1784893519449",
            "type": "pdf"
          },
          {
            "title": "OS_MTE_Sem-4_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/pyqs/OS_MTE_Sem-4_2024-2025.pdf?updatedAt=1784893521353",
            "type": "pdf"
          },
          {
            "title": "OS_MTE_solns_Sem-4_2023-2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/pyqs/OS_MTE_solns_Sem-4_2023-2024.pdf?updatedAt=1784893523443",
            "type": "pdf"
          },
          {
            "title": "OS_MTE_solns_Sem-4_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/pyqs/OS_MTE_solns_Sem-4_2024-2025.pdf?updatedAt=1784893526501",
            "type": "pdf"
          },
          {
            "title": "OS_ETE_solns_Sem-4_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/pyqs/OS_ETE_solns_Sem-4_2024-2025.pdf?updatedAt=1784893527368",
            "type": "pdf"
          },
          {
            "title": "OS_CS2201_ETE_Sem-4_2021-22",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/pyqs/OS_CS2201_ETE_Sem-4_2021-22.pdf?updatedAt=1784893533680",
            "type": "pdf"
          },
          {
            "title": "OS_AI2202_ETE_Sem-4_Summer2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/pyqs/OS_AI2202_ETE_Sem-4_Summer2024.pdf?updatedAt=1784893534986",
            "type": "pdf"
          },
          {
            "title": "OS_AI2202_ETE_Sem-4_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/pyqs/OS_AI2202_ETE_Sem-4_2023-24.pdf?updatedAt=1784893535196",
            "type": "pdf"
          },
          {
            "title": "OS_ETE_Sem-4_Set-1_2023-2024withSolutions",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/pyqs/OS_ETE_Sem-4_Set-1_2023-2024withSolutions.pdf?updatedAt=1784893535929",
            "type": "pdf"
          },
          {
            "title": "OS_CS1401_ETE__Sem-4_2017-18",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/pyqs/OS_CS1401_ETE__Sem-4_2017-18.pdf?updatedAt=1784893546494",
            "type": "pdf"
          },
          {
            "title": "OS_ETE_Sem-4_Set-2_2023-2024withSolutions",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/os/pyqs/OS_ETE_Sem-4_Set-2_2023-2024withSolutions.pdf?updatedAt=1784893599029",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Operating Systems Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "iot-rdbms",
        "name": "Relational Database Management Systems",
        "shortName": "RDBMS",
        "emoji": "\ud83d\uddc4\ufe0f",
        "code": "CS-2203",
        "description": "Relational model, SQL queries, ER diagrams, normalization, indexing, transaction processing, and concurrency.",
        "resourceCount": 7,
        "studyMaterials": [],
        "pyqs": [
          {
            "title": "2 Moderated QP CS2202 RDBMS",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/rdbms/pyqs/2%20Moderated%20QP%20CS2202%20RDBMS.pdf?updatedAt=1784893509632",
            "type": "pdf"
          },
          {
            "title": "CSE2102 - RDBMS",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/rdbms/pyqs/CSE2102%20-%20RDBMS.pdf?updatedAt=1784893511282",
            "type": "pdf"
          },
          {
            "title": "MTE1 QP CS2202 RDBMS Solution 2021",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/rdbms/pyqs/MTE1%20QP%20CS2202%20RDBMS%20Solution%202021.pdf?updatedAt=1784893512042",
            "type": "pdf"
          },
          {
            "title": "RDBMS_MTE_CS2202_Sem-4_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/rdbms/pyqs/RDBMS_MTE_CS2202_Sem-4_2023-24.pdf?updatedAt=1784893513924",
            "type": "pdf"
          },
          {
            "title": "RDBMS_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/rdbms/pyqs/RDBMS_MTE_Sem-3_2025-26.pdf?updatedAt=1784893521279",
            "type": "pdf"
          },
          {
            "title": "CS2202-RDBMS-Set C - Solution",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/rdbms/pyqs/CS2202-RDBMS-Set%20C%20-%20Solution.pdf?updatedAt=1784893527657",
            "type": "pdf"
          },
          {
            "title": "CS2202-RDBMS-Set C - Solution (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/iot-2nd%20year/rdbms/pyqs/CS2202-RDBMS-Set%20C%20-%20Solution%20(1).pdf?updatedAt=1784893527591",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Relational Database Management Systems Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      }
    ]
  },
  {
    "id": "it",
    "name": "Information Technology",
    "shortName": "IT",
    "emoji": "\ud83d\udcbb",
    "icon": "Laptop",
    "gradient": "from-indigo-500 to-purple-600",
    "color": "#6366f1",
    "description": "Web Architecture, Cloud Infrastructure & IT Systems",
    "subjects": [
      {
        "id": "it-acd",
        "name": "Automata and Compiler Design",
        "shortName": "ACD",
        "emoji": "\u2699\ufe0f",
        "code": "CS-2104",
        "description": "Finite automata, regular expressions, lexing, parsing, syntax directed translation, and code optimization.",
        "resourceCount": 21,
        "studyMaterials": [
          {
            "title": "8. Compiler",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/acd/study-material/8.%20Compiler.pdf?updatedAt=1784893507199",
            "type": "pdf"
          },
          {
            "title": "4. Pushdown Automata",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/acd/study-material/4.%20Pushdown%20Automata.pdf?updatedAt=1784893507483",
            "type": "pdf"
          },
          {
            "title": "5. Turing Machine",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/acd/study-material/5.%20Turing%20Machine.pdf?updatedAt=1784893512640",
            "type": "pdf"
          },
          {
            "title": "ContextFreeGrammars",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/acd/study-material/ContextFreeGrammars.pdf?updatedAt=1784893513866",
            "type": "pdf"
          },
          {
            "title": "7. P , NP and NP hard",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/acd/study-material/7.%20P%20,%20NP%20and%20NP%20hard.pdf?updatedAt=1784893517689",
            "type": "pdf"
          },
          {
            "title": "3. Context Free Grammar",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/acd/study-material/3.%20Context%20Free%20Grammar.pdf?updatedAt=1784893521948",
            "type": "pdf"
          },
          {
            "title": "2. Regular Expression",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/acd/study-material/2.%20Regular%20Expression.pdf?updatedAt=1784893524691",
            "type": "pdf"
          },
          {
            "title": "6. Decidable and undecidable problems",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/acd/study-material/6.%20Decidable%20and%20undecidable%20problems.pdf?updatedAt=1784893550331",
            "type": "pdf"
          },
          {
            "title": "PDA_NOTES",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/acd/study-material/PDA_NOTES.pdf?updatedAt=1784893604634",
            "type": "pdf"
          },
          {
            "title": "CFG",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/acd/study-material/CFG.pdf?updatedAt=1784893685298",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "ACD_CS3103_ETE_Sem-5_2022-23",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/acd/pyqs/ACD_CS3103_ETE_Sem-5_2022-23.pdf?updatedAt=1784893502120",
            "type": "pdf"
          },
          {
            "title": "ACD_CS3103_MTE-1_Sem-5_2021-22",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/acd/pyqs/ACD_CS3103_MTE-1_Sem-5_2021-22.pdf?updatedAt=1784893504122",
            "type": "pdf"
          },
          {
            "title": "ACD_CS1505_ETE_Sem-5_2018-19",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/acd/pyqs/ACD_CS1505_ETE_Sem-5_2018-19.pdf?updatedAt=1784893504819",
            "type": "pdf"
          },
          {
            "title": "ACD_CS3103_MTE-2_Sem-5_2022-23",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/acd/pyqs/ACD_CS3103_MTE-2_Sem-5_2022-23.pdf?updatedAt=1784893505334",
            "type": "pdf"
          },
          {
            "title": "ACD_CS3103_MTE_Sem-5_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/acd/pyqs/ACD_CS3103_MTE_Sem-5_2024-25.pdf?updatedAt=1784893510187",
            "type": "pdf"
          },
          {
            "title": "ACD_CS3103_Make-up_Sem-5_2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/acd/pyqs/ACD_CS3103_Make-up_Sem-5_2024.pdf?updatedAt=1784893511075",
            "type": "pdf"
          },
          {
            "title": "ACD_CS3103_ETE_Sem-5_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/acd/pyqs/ACD_CS3103_ETE_Sem-5_2023-24.pdf?updatedAt=1784893513129",
            "type": "pdf"
          },
          {
            "title": "CS3103-set2",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/acd/pyqs/CS3103-set2.pdf?updatedAt=1784893515587",
            "type": "pdf"
          },
          {
            "title": "CS3103-set1",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/acd/pyqs/CS3103-set1.pdf?updatedAt=1784893516891",
            "type": "pdf"
          },
          {
            "title": "ACD_CS3103_MTE_Sem-5_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/acd/pyqs/ACD_CS3103_MTE_Sem-5_2023-24.pdf?updatedAt=1784893531105",
            "type": "pdf"
          },
          {
            "title": "ACD_CS3103_ETE_Sem-5_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/acd/pyqs/ACD_CS3103_ETE_Sem-5_2024-25.pdf?updatedAt=1784893880548",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Automata and Compiler Design Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "it-daa",
        "name": "Design and Analysis of Algorithms",
        "shortName": "DAA",
        "emoji": "\ud83e\uddee",
        "code": "CS-2201",
        "description": "Algorithm analysis, divide-and-conquer, greedy approaches, dynamic programming, and NP-completeness.",
        "resourceCount": 16,
        "studyMaterials": [
          {
            "title": "5. Mathematical Analysis of Non Recursive techniques.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/daa/study-material/5.%20Mathematical%20Analysis%20of%20Non%20Recursive%20techniques.pptx?updatedAt=1784893506502",
            "type": "pdf"
          },
          {
            "title": "merge (1).pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/daa/study-material/merge%20(1).pptx?updatedAt=1784893508265",
            "type": "pdf"
          },
          {
            "title": "11. Graphs_BFS_DFS.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/daa/study-material/11.%20Graphs_BFS_DFS.ppt?updatedAt=1784893511848",
            "type": "pdf"
          },
          {
            "title": "1. Introduction to Algorithms, Specification of Algorithm, Complexity.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/daa/study-material/1.%20Introduction%20to%20Algorithms,%20Specification%20of%20Algorithm,%20Complexity.pptx?updatedAt=1784893511875",
            "type": "pdf"
          },
          {
            "title": "4. Mathematical Analysis of Recursive techniques.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/daa/study-material/4.%20Mathematical%20Analysis%20of%20Recursive%20techniques.pptx?updatedAt=1784893530065",
            "type": "pdf"
          },
          {
            "title": "3. Time & Space Complexity _ Hands-on.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/daa/study-material/3.%20Time%20&%20Space%20Complexity%20_%20Hands-on.pptx?updatedAt=1784893535803",
            "type": "pdf"
          },
          {
            "title": "2. Asymptotic Notation- Analysis of Algorithms.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/daa/study-material/2.%20Asymptotic%20Notation-%20Analysis%20of%20Algorithms.pptx?updatedAt=1784893538964",
            "type": "pdf"
          },
          {
            "title": "P NP Complete.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/daa/study-material/P%20NP%20Complete.pptx?updatedAt=1784893539674",
            "type": "pdf"
          },
          {
            "title": "Backtracking All.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/daa/study-material/Backtracking%20All.pptx?updatedAt=1784893570167",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "ETE Question Paper DAA (CS3102) Dec24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/daa/pyqs/ETE%20Question%20Paper%20DAA%20(CS3102)%20Dec24.pdf?updatedAt=1784893497543",
            "type": "pdf"
          },
          {
            "title": "DAA_MTE_Sem-5_Oct2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/daa/pyqs/DAA_MTE_Sem-5_Oct2024.pdf?updatedAt=1784893499627",
            "type": "pdf"
          },
          {
            "title": "DAA_MTE_Sem-4_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/daa/pyqs/DAA_MTE_Sem-4_2024-25.pdf?updatedAt=1784893506404",
            "type": "pdf"
          },
          {
            "title": "DAA_CS3102_Make-up_Sem-5_2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/daa/pyqs/DAA_CS3102_Make-up_Sem-5_2024.pdf?updatedAt=1784893508250",
            "type": "pdf"
          },
          {
            "title": "DAA_CS3102_ETE_Sem-5_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/daa/pyqs/DAA_CS3102_ETE_Sem-5_2023-24.pdf?updatedAt=1784893508590",
            "type": "pdf"
          },
          {
            "title": "DAA_MTE_Sem-4_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/daa/pyqs/DAA_MTE_Sem-4_2024-2025.pdf?updatedAt=1784893509687",
            "type": "pdf"
          },
          {
            "title": "DAA_MTE_Sem-5_2023-2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/daa/pyqs/DAA_MTE_Sem-5_2023-2024.pdf?updatedAt=1784893515138",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Design and Analysis of Algorithms Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "it-dsa",
        "name": "Data Structures & Algorithms",
        "shortName": "DSA",
        "emoji": "\ud83e\uddec",
        "code": "CS-2102",
        "description": "Arrays, linked lists, stacks, queues, trees, graphs, hashing, and fundamental sorting/searching techniques.",
        "resourceCount": 26,
        "studyMaterials": [
          {
            "title": "3. One Dimensional Array.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/study-material/3.%20One%20Dimensional%20Array.pptx?updatedAt=1784893501155",
            "type": "pdf"
          },
          {
            "title": "7-9. Dynamic Array and DMA.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/study-material/7-9.%20Dynamic%20Array%20and%20DMA.pptx?updatedAt=1784893503364",
            "type": "pdf"
          },
          {
            "title": "42-44 Sortings.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/study-material/42-44%20Sortings.pptx?updatedAt=1784893506478",
            "type": "pdf"
          },
          {
            "title": "4-5. Two Dimensional Array.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/study-material/4-5.%20Two%20Dimensional%20Array.pptx?updatedAt=1784893507852",
            "type": "pdf"
          },
          {
            "title": "47. Hashing.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/study-material/47.%20Hashing.pptx?updatedAt=1784893508633",
            "type": "pdf"
          },
          {
            "title": "43. MST, Prims, Kruskals.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/study-material/43.%20MST,%20Prims,%20Kruskals.ppt?updatedAt=1784893509165",
            "type": "pdf"
          },
          {
            "title": "6. Pointes.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/study-material/6.%20Pointes.pptx?updatedAt=1784893509235",
            "type": "pdf"
          },
          {
            "title": "44. Hashing.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/study-material/44.%20Hashing.pptx?updatedAt=1784893513229",
            "type": "pdf"
          },
          {
            "title": "36. Heaps and Heap Sort.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/study-material/36.%20Heaps%20and%20Heap%20Sort.ppt?updatedAt=1784893530568",
            "type": "pdf"
          },
          {
            "title": "46. Merge Sort and Quick Sort.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/study-material/46.%20Merge%20Sort%20and%20Quick%20Sort.ppt?updatedAt=1784893535043",
            "type": "pdf"
          },
          {
            "title": "18-19. Recursion.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/study-material/18-19.%20Recursion.ppt?updatedAt=1784893562666",
            "type": "pdf"
          },
          {
            "title": "10-17. Linked List.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/study-material/10-17.%20Linked%20List.pptx?updatedAt=1784893573678",
            "type": "pdf"
          },
          {
            "title": "41-42. Graph Data Structure.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/study-material/41-42.%20Graph%20Data%20Structure.ppt?updatedAt=1784893574098",
            "type": "pdf"
          },
          {
            "title": "1 - 2. Introduction and Performance Analysis Updated.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/study-material/1%20-%202.%20Introduction%20and%20Performance%20Analysis%20Updated.pptx?updatedAt=1784893874915",
            "type": "pdf"
          },
          {
            "title": "26-29. Queue and Circular Queue.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/study-material/26-29.%20Queue%20and%20Circular%20Queue.ppt?updatedAt=1784893877850",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "DSA_AI2103_MTE_Sem-3_Summer2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/pyqs/DSA_AI2103_MTE_Sem-3_Summer2024.pdf?updatedAt=1784893495355",
            "type": "pdf"
          },
          {
            "title": "DSA_INT2102_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/pyqs/DSA_INT2102_MTE_Sem-3_2025-26.pdf?updatedAt=1784893502819",
            "type": "pdf"
          },
          {
            "title": "DSA_DSE2101_ETE_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/pyqs/DSA_DSE2101_ETE_Sem-3_2024-25.pdf?updatedAt=1784893502808",
            "type": "pdf"
          },
          {
            "title": "DSA_MTE_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/pyqs/DSA_MTE_Sem-3_2024-25.pdf?updatedAt=1784893504064",
            "type": "pdf"
          },
          {
            "title": "DSA_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/pyqs/DSA_MTE_Sem-3_2025-26.pdf?updatedAt=1784893504746",
            "type": "pdf"
          },
          {
            "title": "DSA_ETE_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/pyqs/DSA_ETE_Sem-3_2024-25.pdf?updatedAt=1784893505904",
            "type": "pdf"
          },
          {
            "title": "DSA-MTE-Solution (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/pyqs/DSA-MTE-Solution%20(1).pdf?updatedAt=1784893507312",
            "type": "pdf"
          },
          {
            "title": "DSA_IT2101_Make-up_Sem-3_Summer2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/pyqs/DSA_IT2101_Make-up_Sem-3_Summer2024.pdf?updatedAt=1784893508689",
            "type": "pdf"
          },
          {
            "title": "DSA_DSE2101_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/pyqs/DSA_DSE2101_ETE_Sem-3_2025-26.pdf?updatedAt=1784893509795",
            "type": "pdf"
          },
          {
            "title": "DSA_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/pyqs/DSA_ETE_Sem-3_2025-26.pdf?updatedAt=1784893511584",
            "type": "pdf"
          },
          {
            "title": "DSA_AIM2101_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/dsa/pyqs/DSA_AIM2101_ETE_Sem-3_2025-26.pdf?updatedAt=1784893511902",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Data Structures & Algorithms Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "it-engineering-economics",
        "name": "Engineering Economics",
        "shortName": "Engineering Eco",
        "emoji": "\ud83d\udcc8",
        "code": "HS-2101",
        "description": "Financial evaluation of engineering projects, time value of money, cost estimation, depreciation, and budgeting.",
        "resourceCount": 24,
        "studyMaterials": [
          {
            "title": "Engg. Economics_Lecture_20-21",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_20-21.pdf?updatedAt=1784893486938",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_7",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_7.pdf?updatedAt=1784893487422",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_3 (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_3%20(1).pdf?updatedAt=1784893488325",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_3",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_3.pdf?updatedAt=1784893488479",
            "type": "pdf"
          },
          {
            "title": "Risk and Risk_Vs_Returns_L28",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/engineering-economics/study-material/Risk%20and%20Risk_Vs_Returns_L28.pdf?updatedAt=1784893489403",
            "type": "pdf"
          },
          {
            "title": "Budgeting_L25-27-final",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/engineering-economics/study-material/Budgeting_L25-27-final.pdf?updatedAt=1784893489848",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_10-12 new",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_10-12%20new.pdf?updatedAt=1784893490223",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_13",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_13.pdf?updatedAt=1784893495068",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_22 24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_22%2024.pdf?updatedAt=1784893495946",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_NPV_L14-17",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_NPV_L14-17.pdf?updatedAt=1784893501094",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_1",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_1.pdf?updatedAt=1784893501818",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_8 9",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_8%209.pdf?updatedAt=1784893502873",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_2",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_2.pdf?updatedAt=1784893503741",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_NPV,IRR_L14-19",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_NPV,IRR_L14-19.pdf?updatedAt=1784893504286",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_4-5",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_4-5.pdf?updatedAt=1784893509113",
            "type": "pdf"
          },
          {
            "title": "Depreciation_L29-31",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/engineering-economics/study-material/Depreciation_L29-31.pdf?updatedAt=1784893516834",
            "type": "pdf"
          },
          {
            "title": "PERT CPM final_L32-35 - Copy",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/engineering-economics/study-material/PERT%20CPM%20final_L32-35%20-%20Copy.pdf?updatedAt=1784893526050",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "ECO_Make-up_Sem-4_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/engineering-economics/pyqs/ECO_Make-up_Sem-4_2023-24.pdf?updatedAt=1784893487663",
            "type": "pdf"
          },
          {
            "title": "ECO_Make-up_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/engineering-economics/pyqs/ECO_Make-up_Sem-3_2024-25.pdf?updatedAt=1784893487872",
            "type": "pdf"
          },
          {
            "title": "ECO_MTE_Sem-4_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/engineering-economics/pyqs/ECO_MTE_Sem-4_2023-24.pdf?updatedAt=1784893491557",
            "type": "pdf"
          },
          {
            "title": "ECO_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/engineering-economics/pyqs/ECO_MTE_Sem-3_2025-26.pdf?updatedAt=1784893493645",
            "type": "pdf"
          },
          {
            "title": "ECO_MTE_Sem-4_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/engineering-economics/pyqs/ECO_MTE_Sem-4_2025-26.pdf?updatedAt=1784893493683",
            "type": "pdf"
          },
          {
            "title": "ECO_ETE_Sem-4_2023-2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/engineering-economics/pyqs/ECO_ETE_Sem-4_2023-2024.pdf?updatedAt=1784893501662",
            "type": "pdf"
          },
          {
            "title": "ECO_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/engineering-economics/pyqs/ECO_ETE_Sem-3_2025-26.pdf?updatedAt=1784893504514",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Engineering Economics Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "it-oops-python",
        "name": "Object Oriented Programming (Python)",
        "shortName": "OOPs (Python)",
        "emoji": "\ud83d\udc0d",
        "code": "CS-2105",
        "description": "Object-oriented design patterns, functional programming features, decorators, and data structures in Python.",
        "resourceCount": 11,
        "studyMaterials": [
          {
            "title": "CSE2122_OOPs",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/oops%20python/study-material/CSE2122_OOPs.pdf?updatedAt=1784893477787",
            "type": "pdf"
          },
          {
            "title": "CS2122_Encapsulation",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/oops%20python/study-material/CS2122_Encapsulation.pdf?updatedAt=1784893477960",
            "type": "pdf"
          },
          {
            "title": "Data Structure_Tree",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/oops%20python/study-material/Data%20Structure_Tree.pdf?updatedAt=1784893480298",
            "type": "pdf"
          },
          {
            "title": "Python- Data Structures",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/oops%20python/study-material/Python-%20Data%20Structures.pdf?updatedAt=1784893484756",
            "type": "pdf"
          },
          {
            "title": "Functions in Python",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/oops%20python/study-material/Functions%20in%20Python.pdf?updatedAt=1784893485606",
            "type": "pdf"
          },
          {
            "title": "Generators and Modules",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/oops%20python/study-material/Generators%20and%20Modules.pdf?updatedAt=1784893485666",
            "type": "pdf"
          },
          {
            "title": "CS2122_Inheritance",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/oops%20python/study-material/CS2122_Inheritance.pdf?updatedAt=1784893491368",
            "type": "pdf"
          },
          {
            "title": "Arrays_In-Built Function in python data structure_Search and Sort",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/oops%20python/study-material/Arrays_In-Built%20Function%20in%20python%20data%20structure_Search%20and%20Sort.pdf?updatedAt=1784893492963",
            "type": "pdf"
          },
          {
            "title": "CS2122_Constructor",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/oops%20python/study-material/CS2122_Constructor.pdf?updatedAt=1784893493343",
            "type": "pdf"
          },
          {
            "title": "OOP CONCEPTS",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/oops%20python/study-material/OOP%20CONCEPTS.pdf?updatedAt=1784893499229",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "OOP-P_MTE_Sem-3_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/oops%20python/pyqs/OOP-P_MTE_Sem-3_2024-2025.pdf?updatedAt=1784893487388",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Object Oriented Programming (Python) Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "it-os",
        "name": "Operating Systems",
        "shortName": "OS",
        "emoji": "\ud83d\udd27",
        "code": "CS-2202",
        "description": "Processes, threads, CPU scheduling, inter-process communication, memory management, and file systems.",
        "resourceCount": 29,
        "studyMaterials": [
          {
            "title": "ch10 File System Interface.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/study-material/ch10%20File%20System%20Interface.ppt?updatedAt=1784893492033",
            "type": "pdf"
          },
          {
            "title": "ch12 Mass Storage Structure.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/study-material/ch12%20Mass%20Storage%20Structure.ppt?updatedAt=1784893512861",
            "type": "pdf"
          },
          {
            "title": "ch7 Deadlock.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/study-material/ch7%20Deadlock.ppt?updatedAt=1784893516420",
            "type": "pdf"
          },
          {
            "title": "ch12.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/study-material/ch12.pptx?updatedAt=1784893524776",
            "type": "pdf"
          },
          {
            "title": "ch9 Virtual Memory.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/study-material/ch9%20Virtual%20Memory.ppt?updatedAt=1784893525036",
            "type": "pdf"
          },
          {
            "title": "ch11.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/study-material/ch11.pptx?updatedAt=1784893525027",
            "type": "pdf"
          },
          {
            "title": "ch1.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/study-material/ch1.ppt?updatedAt=1784893527364",
            "type": "pdf"
          },
          {
            "title": "ch5 Synchronization.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/study-material/ch5%20Synchronization.ppt?updatedAt=1784893528178",
            "type": "pdf"
          },
          {
            "title": "ch4.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/study-material/ch4.ppt?updatedAt=1784893544508",
            "type": "pdf"
          },
          {
            "title": "ch11 File System Implementation.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/study-material/ch11%20File%20System%20Implementation.ppt?updatedAt=1784893544746",
            "type": "pdf"
          },
          {
            "title": "ch21.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/study-material/ch21.pptx?updatedAt=1784893556448",
            "type": "pdf"
          },
          {
            "title": "ch31.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/study-material/ch31.pptx?updatedAt=1784893558767",
            "type": "pdf"
          },
          {
            "title": "ch6.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/study-material/ch6.pptx?updatedAt=1784893559941",
            "type": "pdf"
          },
          {
            "title": "ch2.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/study-material/ch2.ppt?updatedAt=1784893560047",
            "type": "pdf"
          },
          {
            "title": "ch3.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/study-material/ch3.ppt?updatedAt=1784893575754",
            "type": "pdf"
          },
          {
            "title": "ch8 (Memory Management).ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/study-material/ch8%20(Memory%20Management).ppt?updatedAt=1784893579571",
            "type": "pdf"
          },
          {
            "title": "ch6.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/study-material/ch6.ppt?updatedAt=1784893583815",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "OS_AI2202_ETE_Sem-4_2022-23",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/pyqs/OS_AI2202_ETE_Sem-4_2022-23.pdf?updatedAt=1784893470586",
            "type": "pdf"
          },
          {
            "title": "OS_ETE_Sem-4_Set-1_2023-2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/pyqs/OS_ETE_Sem-4_Set-1_2023-2024.pdf?updatedAt=1784893473548",
            "type": "pdf"
          },
          {
            "title": "OS_MTE_Sem-4_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/pyqs/OS_MTE_Sem-4_2024-2025.pdf?updatedAt=1784893475674",
            "type": "pdf"
          },
          {
            "title": "OS_MTE_solns_Sem-4_2023-2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/pyqs/OS_MTE_solns_Sem-4_2023-2024.pdf?updatedAt=1784893477767",
            "type": "pdf"
          },
          {
            "title": "OS_MTE_solns_Sem-4_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/pyqs/OS_MTE_solns_Sem-4_2024-2025.pdf?updatedAt=1784893480676",
            "type": "pdf"
          },
          {
            "title": "OS_ETE_solns_Sem-4_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/pyqs/OS_ETE_solns_Sem-4_2024-2025.pdf?updatedAt=1784893481435",
            "type": "pdf"
          },
          {
            "title": "OS_AI2202_ETE_Sem-4_Summer2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/pyqs/OS_AI2202_ETE_Sem-4_Summer2024.pdf?updatedAt=1784893482992",
            "type": "pdf"
          },
          {
            "title": "OS_AI2202_ETE_Sem-4_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/pyqs/OS_AI2202_ETE_Sem-4_2023-24.pdf?updatedAt=1784893484672",
            "type": "pdf"
          },
          {
            "title": "OS_CS2201_ETE_Sem-4_2021-22",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/pyqs/OS_CS2201_ETE_Sem-4_2021-22.pdf?updatedAt=1784893487823",
            "type": "pdf"
          },
          {
            "title": "OS_ETE_Sem-4_Set-1_2023-2024withSolutions",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/pyqs/OS_ETE_Sem-4_Set-1_2023-2024withSolutions.pdf?updatedAt=1784893489718",
            "type": "pdf"
          },
          {
            "title": "OS_CS1401_ETE__Sem-4_2017-18",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/pyqs/OS_CS1401_ETE__Sem-4_2017-18.pdf?updatedAt=1784893500867",
            "type": "pdf"
          },
          {
            "title": "OS_ETE_Sem-4_Set-2_2023-2024withSolutions",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/os/pyqs/OS_ETE_Sem-4_Set-2_2023-2024withSolutions.pdf?updatedAt=1784893568318",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Operating Systems Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "it-rdbms",
        "name": "Relational Database Management Systems",
        "shortName": "RDBMS",
        "emoji": "\ud83d\uddc4\ufe0f",
        "code": "CS-2203",
        "description": "Relational model, SQL queries, ER diagrams, normalization, indexing, transaction processing, and concurrency.",
        "resourceCount": 7,
        "studyMaterials": [],
        "pyqs": [
          {
            "title": "2 Moderated QP CS2202 RDBMS",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/rdbms/pyqs/2%20Moderated%20QP%20CS2202%20RDBMS.pdf?updatedAt=1784893468460",
            "type": "pdf"
          },
          {
            "title": "CSE2102 - RDBMS",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/rdbms/pyqs/CSE2102%20-%20RDBMS.pdf?updatedAt=1784893469183",
            "type": "pdf"
          },
          {
            "title": "MTE1 QP CS2202 RDBMS Solution 2021",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/rdbms/pyqs/MTE1%20QP%20CS2202%20RDBMS%20Solution%202021.pdf?updatedAt=1784893470134",
            "type": "pdf"
          },
          {
            "title": "RDBMS_MTE_CS2202_Sem-4_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/rdbms/pyqs/RDBMS_MTE_CS2202_Sem-4_2023-24.pdf?updatedAt=1784893471870",
            "type": "pdf"
          },
          {
            "title": "RDBMS_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/rdbms/pyqs/RDBMS_MTE_Sem-3_2025-26.pdf?updatedAt=1784893478834",
            "type": "pdf"
          },
          {
            "title": "CS2202-RDBMS-Set C - Solution (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/rdbms/pyqs/CS2202-RDBMS-Set%20C%20-%20Solution%20(1).pdf?updatedAt=1784893485531",
            "type": "pdf"
          },
          {
            "title": "CS2202-RDBMS-Set C - Solution",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/rdbms/pyqs/CS2202-RDBMS-Set%20C%20-%20Solution.pdf?updatedAt=1784893485526",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Relational Database Management Systems Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "it-statistics-probability",
        "name": "Statistics & Probability",
        "shortName": "Stats & Prob",
        "emoji": "\ud83d\udcca",
        "code": "MA-2101",
        "description": "Probability distributions, random variables, statistical inference, hypothesis testing, and regression.",
        "resourceCount": 8,
        "studyMaterials": [
          {
            "title": "S&P-2",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/statistics-probability/study-material/S&P-2.pdf?updatedAt=1784893522918",
            "type": "pdf"
          },
          {
            "title": "S&P-1",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/statistics-probability/study-material/S&P-1.pdf?updatedAt=1784893647310",
            "type": "pdf"
          },
          {
            "title": "S&P-3",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/statistics-probability/study-material/S&P-3.pdf?updatedAt=1784893881343",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "S&P_ETE_Sem-4_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/statistics-probability/pyqs/S&P_ETE_Sem-4_2024-25.pdf?updatedAt=1784893467619",
            "type": "pdf"
          },
          {
            "title": "S&P_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/statistics-probability/pyqs/S&P_ETE_Sem-3_2025-26.pdf?updatedAt=1784893469043",
            "type": "pdf"
          },
          {
            "title": "S&P_MTE_Sem-3_2025-2026",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/statistics-probability/pyqs/S&P_MTE_Sem-3_2025-2026.pdf?updatedAt=1784893471357",
            "type": "pdf"
          },
          {
            "title": "S&P_MTE_Sem-3_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/statistics-probability/pyqs/S&P_MTE_Sem-3_2024-2025.pdf?updatedAt=1784893476135",
            "type": "pdf"
          },
          {
            "title": "S&P_ETE_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/it-2nd%20year/statistics-probability/pyqs/S&P_ETE_Sem-3_2024-25.pdf?updatedAt=1784893481997",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Statistics & Probability Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      }
    ]
  },
  {
    "id": "mechanical",
    "name": "Mechanical Engineering",
    "shortName": "Mechanical",
    "emoji": "\u2699\ufe0f",
    "icon": "Settings",
    "gradient": "from-orange-500 to-amber-600",
    "color": "#ea580c",
    "description": "Thermodynamics, Machine Design & Manufacturing",
    "subjects": [
      {
        "id": "mechanical-dsa",
        "name": "Data Structures & Algorithms",
        "shortName": "DSA",
        "emoji": "\ud83e\uddec",
        "code": "CS-2102",
        "description": "Arrays, linked lists, stacks, queues, trees, graphs, hashing, and fundamental sorting/searching techniques.",
        "resourceCount": 26,
        "studyMaterials": [
          {
            "title": "7-9. Dynamic Array and DMA.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/study-material/7-9.%20Dynamic%20Array%20and%20DMA.pptx?updatedAt=1784893478628",
            "type": "pdf"
          },
          {
            "title": "3. One Dimensional Array.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/study-material/3.%20One%20Dimensional%20Array.pptx?updatedAt=1784893478938",
            "type": "pdf"
          },
          {
            "title": "42-44 Sortings.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/study-material/42-44%20Sortings.pptx?updatedAt=1784893483976",
            "type": "pdf"
          },
          {
            "title": "6. Pointes.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/study-material/6.%20Pointes.pptx?updatedAt=1784893485013",
            "type": "pdf"
          },
          {
            "title": "47. Hashing.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/study-material/47.%20Hashing.pptx?updatedAt=1784893485175",
            "type": "pdf"
          },
          {
            "title": "4-5. Two Dimensional Array.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/study-material/4-5.%20Two%20Dimensional%20Array.pptx?updatedAt=1784893485873",
            "type": "pdf"
          },
          {
            "title": "43. MST, Prims, Kruskals.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/study-material/43.%20MST,%20Prims,%20Kruskals.ppt?updatedAt=1784893487120",
            "type": "pdf"
          },
          {
            "title": "44. Hashing.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/study-material/44.%20Hashing.pptx?updatedAt=1784893490888",
            "type": "pdf"
          },
          {
            "title": "36. Heaps and Heap Sort.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/study-material/36.%20Heaps%20and%20Heap%20Sort.ppt?updatedAt=1784893508853",
            "type": "pdf"
          },
          {
            "title": "46. Merge Sort and Quick Sort.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/study-material/46.%20Merge%20Sort%20and%20Quick%20Sort.ppt?updatedAt=1784893512132",
            "type": "pdf"
          },
          {
            "title": "18-19. Recursion.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/study-material/18-19.%20Recursion.ppt?updatedAt=1784893537331",
            "type": "pdf"
          },
          {
            "title": "41-42. Graph Data Structure.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/study-material/41-42.%20Graph%20Data%20Structure.ppt?updatedAt=1784893555571",
            "type": "pdf"
          },
          {
            "title": "10-17. Linked List.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/study-material/10-17.%20Linked%20List.pptx?updatedAt=1784893555953",
            "type": "pdf"
          },
          {
            "title": "1 - 2. Introduction and Performance Analysis Updated.pptx",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/study-material/1%20-%202.%20Introduction%20and%20Performance%20Analysis%20Updated.pptx?updatedAt=1784893874646",
            "type": "pdf"
          },
          {
            "title": "26-29. Queue and Circular Queue.ppt",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/study-material/26-29.%20Queue%20and%20Circular%20Queue.ppt?updatedAt=1784893877728",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "DSA_AI2103_MTE_Sem-3_Summer2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/pyqs/DSA_AI2103_MTE_Sem-3_Summer2024.pdf?updatedAt=1784893469897",
            "type": "pdf"
          },
          {
            "title": "DSA_MTE_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/pyqs/DSA_MTE_Sem-3_2024-25.pdf?updatedAt=1784893475338",
            "type": "pdf"
          },
          {
            "title": "DSA_INT2102_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/pyqs/DSA_INT2102_MTE_Sem-3_2025-26.pdf?updatedAt=1784893475406",
            "type": "pdf"
          },
          {
            "title": "DSA_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/pyqs/DSA_MTE_Sem-3_2025-26.pdf?updatedAt=1784893476192",
            "type": "pdf"
          },
          {
            "title": "DSA_DSE2101_ETE_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/pyqs/DSA_DSE2101_ETE_Sem-3_2024-25.pdf?updatedAt=1784893476086",
            "type": "pdf"
          },
          {
            "title": "DSA_ETE_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/pyqs/DSA_ETE_Sem-3_2024-25.pdf?updatedAt=1784893478122",
            "type": "pdf"
          },
          {
            "title": "DSA_IT2101_Make-up_Sem-3_Summer2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/pyqs/DSA_IT2101_Make-up_Sem-3_Summer2024.pdf?updatedAt=1784893481169",
            "type": "pdf"
          },
          {
            "title": "DSA-MTE-Solution (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/pyqs/DSA-MTE-Solution%20(1).pdf?updatedAt=1784893481431",
            "type": "pdf"
          },
          {
            "title": "DSA_DSE2101_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/pyqs/DSA_DSE2101_ETE_Sem-3_2025-26.pdf?updatedAt=1784893482678",
            "type": "pdf"
          },
          {
            "title": "DSA_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/pyqs/DSA_ETE_Sem-3_2025-26.pdf?updatedAt=1784893485115",
            "type": "pdf"
          },
          {
            "title": "DSA_AIM2101_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/dsa/pyqs/DSA_AIM2101_ETE_Sem-3_2025-26.pdf?updatedAt=1784893485762",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Data Structures & Algorithms Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "mechanical-engineering-economics",
        "name": "Engineering Economics",
        "shortName": "Engineering Eco",
        "emoji": "\ud83d\udcc8",
        "code": "HS-2101",
        "description": "Financial evaluation of engineering projects, time value of money, cost estimation, depreciation, and budgeting.",
        "resourceCount": 24,
        "studyMaterials": [
          {
            "title": "Risk and Risk_Vs_Returns_L28",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/engineering-economics/study-material/Risk%20and%20Risk_Vs_Returns_L28.pdf?updatedAt=1784893467636",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_7",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_7.pdf?updatedAt=1784893471004",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_20-21",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_20-21.pdf?updatedAt=1784893472418",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_3 (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_3%20(1).pdf?updatedAt=1784893473292",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_3",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_3.pdf?updatedAt=1784893473317",
            "type": "pdf"
          },
          {
            "title": "Budgeting_L25-27-final",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/engineering-economics/study-material/Budgeting_L25-27-final.pdf?updatedAt=1784893476647",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_10-12 new",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_10-12%20new.pdf?updatedAt=1784893476728",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_NPV_L14-17",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_NPV_L14-17.pdf?updatedAt=1784893480887",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_13",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_13.pdf?updatedAt=1784893480903",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_22 24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_22%2024.pdf?updatedAt=1784893481321",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_NPV,IRR_L14-19",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_NPV,IRR_L14-19.pdf?updatedAt=1784893484440",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_8 9",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_8%209.pdf?updatedAt=1784893485054",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_1",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_1.pdf?updatedAt=1784893487746",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_2",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_2.pdf?updatedAt=1784893488900",
            "type": "pdf"
          },
          {
            "title": "Engg. Economics_Lecture_4-5",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/engineering-economics/study-material/Engg.%20Economics_Lecture_4-5.pdf?updatedAt=1784893491499",
            "type": "pdf"
          },
          {
            "title": "Depreciation_L29-31",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/engineering-economics/study-material/Depreciation_L29-31.pdf?updatedAt=1784893504600",
            "type": "pdf"
          },
          {
            "title": "PERT CPM final_L32-35 - Copy",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/engineering-economics/study-material/PERT%20CPM%20final_L32-35%20-%20Copy.pdf?updatedAt=1784893508630",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "ECO_Make-up_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/engineering-economics/pyqs/ECO_Make-up_Sem-3_2024-25.pdf?updatedAt=1784893467655",
            "type": "pdf"
          },
          {
            "title": "ECO_Make-up_Sem-4_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/engineering-economics/pyqs/ECO_Make-up_Sem-4_2023-24.pdf?updatedAt=1784893467760",
            "type": "pdf"
          },
          {
            "title": "ECO_MTE_Sem-4_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/engineering-economics/pyqs/ECO_MTE_Sem-4_2023-24.pdf?updatedAt=1784893472158",
            "type": "pdf"
          },
          {
            "title": "ECO_MTE_Sem-4_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/engineering-economics/pyqs/ECO_MTE_Sem-4_2025-26.pdf?updatedAt=1784893474431",
            "type": "pdf"
          },
          {
            "title": "ECO_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/engineering-economics/pyqs/ECO_MTE_Sem-3_2025-26.pdf?updatedAt=1784893474623",
            "type": "pdf"
          },
          {
            "title": "ECO_ETE_Sem-4_2023-2024",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/engineering-economics/pyqs/ECO_ETE_Sem-4_2023-2024.pdf?updatedAt=1784893478098",
            "type": "pdf"
          },
          {
            "title": "ECO_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/engineering-economics/pyqs/ECO_ETE_Sem-3_2025-26.pdf?updatedAt=1784893484632",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Engineering Economics Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "mechanical-rdbms",
        "name": "Relational Database Management Systems",
        "shortName": "RDBMS",
        "emoji": "\ud83d\uddc4\ufe0f",
        "code": "CS-2203",
        "description": "Relational model, SQL queries, ER diagrams, normalization, indexing, transaction processing, and concurrency.",
        "resourceCount": 7,
        "studyMaterials": [],
        "pyqs": [
          {
            "title": "2 Moderated QP CS2202 RDBMS",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/rdbms/pyqs/2%20Moderated%20QP%20CS2202%20RDBMS.pdf?updatedAt=1784893465432",
            "type": "pdf"
          },
          {
            "title": "CSE2102 - RDBMS",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/rdbms/pyqs/CSE2102%20-%20RDBMS.pdf?updatedAt=1784893465822",
            "type": "pdf"
          },
          {
            "title": "MTE1 QP CS2202 RDBMS Solution 2021",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/rdbms/pyqs/MTE1%20QP%20CS2202%20RDBMS%20Solution%202021.pdf?updatedAt=1784893468443",
            "type": "pdf"
          },
          {
            "title": "RDBMS_MTE_CS2202_Sem-4_2023-24",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/rdbms/pyqs/RDBMS_MTE_CS2202_Sem-4_2023-24.pdf?updatedAt=1784893470333",
            "type": "pdf"
          },
          {
            "title": "RDBMS_MTE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/rdbms/pyqs/RDBMS_MTE_Sem-3_2025-26.pdf?updatedAt=1784893477457",
            "type": "pdf"
          },
          {
            "title": "CS2202-RDBMS-Set C - Solution",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/rdbms/pyqs/CS2202-RDBMS-Set%20C%20-%20Solution.pdf?updatedAt=1784893483868",
            "type": "pdf"
          },
          {
            "title": "CS2202-RDBMS-Set C - Solution (1)",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/rdbms/pyqs/CS2202-RDBMS-Set%20C%20-%20Solution%20(1).pdf?updatedAt=1784893483918",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Relational Database Management Systems Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      },
      {
        "id": "mechanical-statistics-probability",
        "name": "Statistics & Probability",
        "shortName": "Stats & Prob",
        "emoji": "\ud83d\udcca",
        "code": "MA-2101",
        "description": "Probability distributions, random variables, statistical inference, hypothesis testing, and regression.",
        "resourceCount": 8,
        "studyMaterials": [
          {
            "title": "S&P-2",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/statistics-probability/study-material/S&P-2.pdf?updatedAt=1784893518807",
            "type": "pdf"
          },
          {
            "title": "S&P-1",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/statistics-probability/study-material/S&P-1.pdf?updatedAt=1784893643736",
            "type": "pdf"
          },
          {
            "title": "S&P-3",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/statistics-probability/study-material/S&P-3.pdf?updatedAt=1784893881574",
            "type": "pdf"
          }
        ],
        "pyqs": [
          {
            "title": "S&P_ETE_Sem-4_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/statistics-probability/pyqs/S&P_ETE_Sem-4_2024-25.pdf?updatedAt=1784893464758",
            "type": "pdf"
          },
          {
            "title": "S&P_ETE_Sem-3_2025-26",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/statistics-probability/pyqs/S&P_ETE_Sem-3_2025-26.pdf?updatedAt=1784893465880",
            "type": "pdf"
          },
          {
            "title": "S&P_MTE_Sem-3_2025-2026",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/statistics-probability/pyqs/S&P_MTE_Sem-3_2025-2026.pdf?updatedAt=1784893468758",
            "type": "pdf"
          },
          {
            "title": "S&P_MTE_Sem-3_2024-2025",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/statistics-probability/pyqs/S&P_MTE_Sem-3_2024-2025.pdf?updatedAt=1784893472226",
            "type": "pdf"
          },
          {
            "title": "S&P_ETE_Sem-3_2024-25",
            "url": "https://ik.imagekit.io/tjp471xsxp/2nd%20year%20btech/mechanical-2nd%20year/statistics-probability/pyqs/S&P_ETE_Sem-3_2024-25.pdf?updatedAt=1784893478509",
            "type": "pdf"
          }
        ],
        "ytResources": [
          {
            "title": "Statistics & Probability Complete Lectures",
            "url": "https://youtube.com",
            "channelName": "NPTEL / Gate Smashers",
            "thumbnailId": "dQw4w9WgXcQ"
          }
        ]
      }
    ]
  }
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
  frequency?: 'most' | 'moderate' | 'can-be';
  type?: 'mcq' | 'short' | 'long' | 'numerical' | 'theory';
  keywords?: string[];
  formula?: string;
}

export const QUESTIONS_DB: Record<string, Question[]> = {
  "aiml-engineering-economics": [
    {
      "id": "aiml-engineering-economics-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of Aiml Engineering Economics and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of Aiml Engineering Economics.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "aiml-engineering-economics-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Aiml Engineering Economics to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Aiml Engineering Economics.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "aiml-engineering-economics-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Aiml Engineering Economics?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Aiml Engineering Economics.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "aiml-oops-java": [
    {
      "id": "aiml-oops-java-q1",
      "topic": "Inheritance & Polymorphism",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "What is the difference between method overloading and method overriding in Java? Explain with code.",
      "options": [],
      "correct": 0,
      "explanation": "Method Overloading (Compile-time): Same method name, different signatures in the same class. Method Overriding (Runtime): Same method signature in a subclass, overriding the superclass method.",
      "frequency": "most",
      "keywords": ["overloading", "overriding", "polymorphism", "signature", "subclass"]
    },
    {
      "id": "aiml-oops-java-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Aiml Oops Java to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Aiml Oops Java.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "aiml-oops-java-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Aiml Oops Java?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Aiml Oops Java.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "aiml-oops-python": [
    {
      "id": "aiml-oops-python-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of Aiml Oops Python and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of Aiml Oops Python.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "aiml-oops-python-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Aiml Oops Python to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Aiml Oops Python.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "aiml-oops-python-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Aiml Oops Python?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Aiml Oops Python.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "aiml-statistics-probability": [
    {
      "id": "aiml-statistics-probability-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of Aiml Statistics Probability and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of Aiml Statistics Probability.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "aiml-statistics-probability-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Aiml Statistics Probability to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Aiml Statistics Probability.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "aiml-statistics-probability-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Aiml Statistics Probability?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Aiml Statistics Probability.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "cce-engineering-economics": [
    {
      "id": "cce-engineering-economics-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of Cce Engineering Economics and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of Cce Engineering Economics.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "cce-engineering-economics-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Cce Engineering Economics to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Cce Engineering Economics.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "cce-engineering-economics-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Cce Engineering Economics?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Cce Engineering Economics.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "cce-oops-java": [
    {
      "id": "cce-oops-java-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of Cce Oops Java and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of Cce Oops Java.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "cce-oops-java-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Cce Oops Java to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Cce Oops Java.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "cce-oops-java-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Cce Oops Java?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Cce Oops Java.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "cce-oops-python": [
    {
      "id": "cce-oops-python-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of Cce Oops Python and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of Cce Oops Python.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "cce-oops-python-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Cce Oops Python to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Cce Oops Python.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "cce-oops-python-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Cce Oops Python?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Cce Oops Python.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "cse-acd": [
    {
      "id": "cse-acd-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of Cse Acd and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of Cse Acd.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "cse-acd-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Cse Acd to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Cse Acd.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "cse-acd-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Cse Acd?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Cse Acd.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "cse-coa": [
    {
      "id": "cse-coa-q1",
      "topic": "Pipelining",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Explain structural, data, and control hazards in CPU pipelining.",
      "options": [],
      "correct": 0,
      "explanation": "Structural: hardware resource conflicts. Data: instruction depends on result of preceding instruction. Control: branch changes execution flow.",
      "frequency": "most",
      "keywords": ["structural", "data hazard", "control hazard", "pipelining"]
    },
    {
      "id": "cse-coa-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Cse Coa to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Cse Coa.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "cse-coa-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Cse Coa?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Cse Coa.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "cse-cryptography": [
    {
      "id": "cse-cryptography-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of Cse Cryptography and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of Cse Cryptography.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "cse-cryptography-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Cse Cryptography to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Cse Cryptography.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "cse-cryptography-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Cse Cryptography?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Cse Cryptography.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "cse-daa": [
    {
      "id": "cse-daa-q1",
      "topic": "Asymptotic Notation",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Define Big-O, Theta, and Omega asymptotic notations with graphs.",
      "options": [],
      "correct": 0,
      "explanation": "Big-O defines upper bound. Omega defines lower bound. Theta defines tight bound of an algorithm's complexity.",
      "frequency": "most",
      "keywords": ["big-o", "theta", "omega", "upper bound", "lower bound"]
    },
    {
      "id": "cse-daa-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Cse Daa to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Cse Daa.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "cse-daa-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Cse Daa?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Cse Daa.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "cse-dsa": [
    {
      "id": "cse-dsa-q1",
      "topic": "Hashing",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Explain collision resolution techniques in hashing: Chaining vs Open Addressing.",
      "options": [],
      "correct": 0,
      "explanation": "Chaining links colliding keys in linked lists. Open addressing probes subsequent slots (Linear/Quadratic probing, Double hashing).",
      "frequency": "most",
      "keywords": ["collision", "chaining", "open addressing", "probing", "hashing"]
    },
    {
      "id": "cse-dsa-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Cse Dsa to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Cse Dsa.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "cse-dsa-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Cse Dsa?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Cse Dsa.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "cse-engineering-economics": [
    {
      "id": "cse-engineering-economics-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of Cse Engineering Economics and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of Cse Engineering Economics.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "cse-engineering-economics-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Cse Engineering Economics to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Cse Engineering Economics.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "cse-engineering-economics-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Cse Engineering Economics?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Cse Engineering Economics.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "cse-oops-java": [
    {
      "id": "cse-oops-java-q1",
      "topic": "Exception Handling",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Explain the difference between Checked and Unchecked exceptions in Java.",
      "options": [],
      "correct": 0,
      "explanation": "Checked exceptions are checked at compile-time (e.g. IOException); Unchecked exceptions are checked at runtime (e.g. NullPointerException).",
      "frequency": "most",
      "keywords": ["checked exception", "unchecked exception", "compile-time", "runtime", "throwable"]
    },
    {
      "id": "cse-oops-java-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Cse Oops Java to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Cse Oops Java.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "cse-oops-java-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Cse Oops Java?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Cse Oops Java.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "cse-oops-python": [
    {
      "id": "cse-oops-python-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of Cse Oops Python and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of Cse Oops Python.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "cse-oops-python-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Cse Oops Python to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Cse Oops Python.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "cse-oops-python-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Cse Oops Python?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Cse Oops Python.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "cse-rdbms": [
    {
      "id": "cse-rdbms-q1",
      "topic": "SQL Queries",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Explain the difference between INNER JOIN, LEFT JOIN, and RIGHT JOIN in SQL.",
      "options": [],
      "correct": 0,
      "explanation": "INNER JOIN returns records with matching values. LEFT JOIN returns all records from left table and matched from right. RIGHT JOIN returns all from right table.",
      "frequency": "most",
      "keywords": ["inner join", "left join", "right join", "sql", "null"]
    },
    {
      "id": "cse-rdbms-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Cse Rdbms to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Cse Rdbms.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "cse-rdbms-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Cse Rdbms?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Cse Rdbms.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "cse-statistics-probability": [
    {
      "id": "cse-statistics-probability-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of Cse Statistics Probability and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of Cse Statistics Probability.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "cse-statistics-probability-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Cse Statistics Probability to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Cse Statistics Probability.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "cse-statistics-probability-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Cse Statistics Probability?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Cse Statistics Probability.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "dse-dsa": [
    {
      "id": "dse-dsa-q1",
      "topic": "Sorting",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Explain the working of Quick Sort algorithm and its time complexity in best, average, and worst cases.",
      "options": [],
      "correct": 0,
      "explanation": "Divide and conquer algorithm. Chooses pivot, partitions elements. Best/Average: O(n log n). Worst: O(n^2).",
      "frequency": "most",
      "keywords": ["quick sort", "pivot", "partition", "complexity", "worst case"]
    },
    {
      "id": "dse-dsa-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Dse Dsa to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Dse Dsa.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "dse-dsa-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Dse Dsa?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Dse Dsa.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "dse-oops-java": [
    {
      "id": "dse-oops-java-q1",
      "topic": "Interface & Abstract Class",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Differentiate between an abstract class and an interface in Java.",
      "options": [],
      "correct": 0,
      "explanation": "Abstract class can have instance fields and constructors; supports single inheritance. Interface can only have constant fields (static final) and public methods; supports multiple inheritance.",
      "frequency": "most",
      "keywords": ["abstract class", "interface", "multiple inheritance", "fields", "methods"]
    },
    {
      "id": "dse-oops-java-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Dse Oops Java to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Dse Oops Java.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "dse-oops-java-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Dse Oops Java?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Dse Oops Java.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "dse-rdbms": [
    {
      "id": "dse-rdbms-q1",
      "topic": "Indexing",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "What is database indexing? Differentiate between Clustered and Non-Clustered Indexes.",
      "options": [],
      "correct": 0,
      "explanation": "Index speeds up query search. Clustered index defines physical order of data rows (only 1 per table). Non-clustered index stores index pointers in separate structure (multiple allowed).",
      "frequency": "most",
      "keywords": ["index", "clustered", "non-clustered", "query", "speed"]
    },
    {
      "id": "dse-rdbms-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Dse Rdbms to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Dse Rdbms.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "dse-rdbms-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Dse Rdbms?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Dse Rdbms.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "iot-acd": [
    {
      "id": "iot-acd-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of Iot Acd and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of Iot Acd.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "iot-acd-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Iot Acd to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Iot Acd.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "iot-acd-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Iot Acd?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Iot Acd.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "iot-dsa": [
    {
      "id": "iot-dsa-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of Iot Dsa and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of Iot Dsa.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "iot-dsa-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Iot Dsa to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Iot Dsa.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "iot-dsa-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Iot Dsa?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Iot Dsa.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "iot-engineering-economics": [
    {
      "id": "iot-engineering-economics-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of Iot Engineering Economics and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of Iot Engineering Economics.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "iot-engineering-economics-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Iot Engineering Economics to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Iot Engineering Economics.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "iot-engineering-economics-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Iot Engineering Economics?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Iot Engineering Economics.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "iot-oops-java": [
    {
      "id": "iot-oops-java-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of Iot Oops Java and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of Iot Oops Java.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "iot-oops-java-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Iot Oops Java to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Iot Oops Java.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "iot-oops-java-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Iot Oops Java?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Iot Oops Java.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "iot-oops-python": [
    {
      "id": "iot-oops-python-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of Iot Oops Python and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of Iot Oops Python.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "iot-oops-python-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Iot Oops Python to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Iot Oops Python.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "iot-oops-python-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Iot Oops Python?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Iot Oops Python.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "iot-os": [
    {
      "id": "iot-os-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of Iot Os and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of Iot Os.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "iot-os-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Iot Os to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Iot Os.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "iot-os-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Iot Os?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Iot Os.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "iot-rdbms": [
    {
      "id": "iot-rdbms-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of Iot Rdbms and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of Iot Rdbms.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "iot-rdbms-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Iot Rdbms to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Iot Rdbms.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "iot-rdbms-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Iot Rdbms?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Iot Rdbms.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "it-acd": [
    {
      "id": "it-acd-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of It Acd and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of It Acd.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "it-acd-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in It Acd to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within It Acd.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "it-acd-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of It Acd?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in It Acd.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "it-daa": [
    {
      "id": "it-daa-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of It Daa and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of It Daa.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "it-daa-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in It Daa to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within It Daa.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "it-daa-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of It Daa?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in It Daa.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "it-dsa": [
    {
      "id": "it-dsa-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of It Dsa and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of It Dsa.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "it-dsa-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in It Dsa to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within It Dsa.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "it-dsa-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of It Dsa?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in It Dsa.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "it-engineering-economics": [
    {
      "id": "it-engineering-economics-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of It Engineering Economics and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of It Engineering Economics.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "it-engineering-economics-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in It Engineering Economics to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within It Engineering Economics.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "it-engineering-economics-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of It Engineering Economics?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in It Engineering Economics.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "it-oops-python": [
    {
      "id": "it-oops-python-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of It Oops Python and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of It Oops Python.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "it-oops-python-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in It Oops Python to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within It Oops Python.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "it-oops-python-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of It Oops Python?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in It Oops Python.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "it-os": [
    {
      "id": "it-os-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of It Os and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of It Os.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "it-os-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in It Os to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within It Os.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "it-os-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of It Os?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in It Os.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "it-rdbms": [
    {
      "id": "it-rdbms-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of It Rdbms and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of It Rdbms.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "it-rdbms-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in It Rdbms to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within It Rdbms.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "it-rdbms-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of It Rdbms?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in It Rdbms.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "it-statistics-probability": [
    {
      "id": "it-statistics-probability-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of It Statistics Probability and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of It Statistics Probability.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "it-statistics-probability-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in It Statistics Probability to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within It Statistics Probability.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "it-statistics-probability-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of It Statistics Probability?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in It Statistics Probability.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "mechanical-dsa": [
    {
      "id": "mechanical-dsa-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of Mechanical Dsa and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of Mechanical Dsa.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "mechanical-dsa-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Mechanical Dsa to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Mechanical Dsa.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "mechanical-dsa-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Mechanical Dsa?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Mechanical Dsa.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "mechanical-engineering-economics": [
    {
      "id": "mechanical-engineering-economics-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of Mechanical Engineering Economics and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of Mechanical Engineering Economics.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "mechanical-engineering-economics-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Mechanical Engineering Economics to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Mechanical Engineering Economics.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "mechanical-engineering-economics-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Mechanical Engineering Economics?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Mechanical Engineering Economics.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "mechanical-rdbms": [
    {
      "id": "mechanical-rdbms-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of Mechanical Rdbms and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of Mechanical Rdbms.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "mechanical-rdbms-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Mechanical Rdbms to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Mechanical Rdbms.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "mechanical-rdbms-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Mechanical Rdbms?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Mechanical Rdbms.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "mechanical-statistics-probability": [
    {
      "id": "mechanical-statistics-probability-q-most",
      "topic": "Core Concept",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the fundamental principles of Mechanical Statistics Probability and their primary real-world engineering applications.",
      "options": [],
      "correct": 0,
      "explanation": "This is a high-volume sessional question regarding the core fundamentals and architectural implementation of Mechanical Statistics Probability.",
      "frequency": "most",
      "keywords": ["applications", "concept", "principle", "fundamental", "engineering"]
    },
    {
      "id": "mechanical-statistics-probability-q-mod",
      "topic": "Sessional Topics",
      "year": "2024",
      "marks": 5,
      "type": "theory",
      "text": "Compare and contrast the primary approaches used in Mechanical Statistics Probability to optimize efficiency and system performance.",
      "options": [],
      "correct": 0,
      "explanation": "Moderately asked topics emphasize trade-offs and structural comparisons within Mechanical Statistics Probability.",
      "frequency": "moderate",
      "keywords": ["optimize", "efficiency", "performance", "compare", "contrast"]
    },
    {
      "id": "mechanical-statistics-probability-q-can",
      "topic": "Future Trends",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What are the emerging trends and future challenges in the domain of Mechanical Statistics Probability?",
      "options": [],
      "correct": 0,
      "explanation": "Exploratory sessional questions test the theoretical understanding of modern evolutions in Mechanical Statistics Probability.",
      "frequency": "can-be",
      "keywords": ["emerging", "trends", "challenges", "future", "domain"]
    }
  ],
  "engineering-physics": [
    {
      "id": "engineering-physics-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for engineering-physics",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "computational-mathematics": [
    {
      "id": "computational-mathematics-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for computational-mathematics",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "psuc": [
    {
      "id": "psuc-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for psuc",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "wellness-community-service": [
    {
      "id": "wellness-community-service-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for wellness-community-service",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "environmental-science": [
    {
      "id": "environmental-science-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for environmental-science",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "biology-for-engineers": [
    { "id": "bfe-q1", "topic": "DNA & Genetics", "year": "2025", "marks": 10, "type": "theory", "text": "Explain the structure and function of DNA. What is the central dogma of molecular biology?", "options": [], "correct": 0, "explanation": "DNA is a double helix of nucleotides (A-T, G-C base pairs). Central Dogma: DNA → (Transcription) → mRNA → (Translation) → Protein.", "frequency": "most", "keywords": ["double helix", "nucleotides", "transcription", "translation", "genetic"] },
    { "id": "bfe-q2", "topic": "Biosensors", "year": "2025", "marks": 10, "type": "theory", "text": "What is a biosensor? Explain its components and working with an example.", "options": [], "correct": 0, "explanation": "Biosensor: analytical device using biological recognition elements coupled with a transducer. Components: bioreceptor (enzyme/antibody), transducer (converts bio-signal to electrical signal), signal processor.", "frequency": "most", "keywords": ["receptor", "transducer", "signal", "enzyme", "biosensor"] },
    { "id": "bfe-q3", "topic": "Cellular Respiration", "year": "2025", "marks": 10, "type": "theory", "text": "Describe the process of cellular respiration. Differentiate between aerobic and anaerobic respiration.", "options": [], "correct": 0, "explanation": "Aerobic: Glucose + O₂ → CO₂ + H₂O + 38 ATP (in mitochondria). Anaerobic: Glucose → Lactic acid/Ethanol + 2 ATP (no oxygen required).", "frequency": "most", "keywords": ["ATP", "mitochondria", "aerobic", "anaerobic", "glucose"] },
    { "id": "bfe-q4", "topic": "Enzymes", "year": "2025", "marks": 5, "type": "theory", "text": "Explain the role of enzymes as biological catalysts. What factors affect enzyme activity?", "options": [], "correct": 0, "explanation": "Enzymes lower activation energy without being consumed. Factors: Temperature (denaturation above 40°C), pH (optimal pH for each enzyme), substrate concentration, inhibitors.", "frequency": "moderate", "keywords": ["activation energy", "substrate", "temperature", "pH", "catalyst"] },
    { "id": "bfe-q5", "topic": "Biomedical Engineering", "year": "2025", "marks": 10, "type": "theory", "text": "How are biological principles applied in biomedical engineering? Give two examples.", "options": [], "correct": 0, "explanation": "Applications: 1) Prosthetics — use biomechanics to design functional limb replacements. 2) Medical imaging — MRI uses nuclear magnetic resonance of water molecules in tissues.", "frequency": "moderate", "keywords": ["prosthetics", "imaging", "biomechanics", "MRI", "biomedical"] }
  ],
  "internet-of-things": [
    {
      "id": "internet-of-things-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for internet-of-things",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "engineering-material-mechanics": [
    { "id": "emm-q1", "topic": "Stress-Strain", "year": "2025", "marks": 10, "type": "theory", "text": "Draw and explain the stress-strain curve for mild steel. Identify all key points on the curve.", "options": [], "correct": 0, "explanation": "Key points: Proportionality limit, Elastic limit, Upper yield point, Lower yield point, Ultimate tensile strength, Fracture point. Elastic region obeys Hooke's Law; plastic region shows permanent deformation.", "frequency": "most", "keywords": ["elastic", "plastic", "yield", "ultimate", "fracture"] },
    { "id": "emm-q2", "topic": "Hooke's Law", "year": "2025", "marks": 5, "type": "theory", "text": "State Hooke's Law. Define Young's Modulus, Shear Modulus, and Bulk Modulus.", "options": [], "correct": 0, "explanation": "Hooke's Law: stress ∝ strain (within elastic limit). Young's Modulus E = σ/ε (tensile). Shear Modulus G = τ/γ (shear). Bulk Modulus K = volumetric stress/volumetric strain.", "frequency": "most", "keywords": ["stress", "strain", "Young's modulus", "elastic", "proportional"] },
    { "id": "emm-q3", "topic": "Beams", "year": "2025", "marks": 10, "type": "theory", "text": "Explain the concepts of bending moment and shear force in beams. Draw SFD and BMD for a simply supported beam with central point load.", "options": [], "correct": 0, "explanation": "Shear force at section = algebraic sum of transverse forces on one side. Bending moment = algebraic sum of moments. For central load W, max SF=W/2 at supports, max BM=WL/4 at center.", "frequency": "most", "keywords": ["bending moment", "shear force", "beam", "SFD", "BMD"] },
    { "id": "emm-q4", "topic": "Material Properties", "year": "2025", "marks": 5, "type": "theory", "text": "Define and differentiate: hardness, toughness, ductility, malleability, and brittleness.", "options": [], "correct": 0, "explanation": "Hardness: resistance to scratching. Toughness: energy absorbed before fracture. Ductility: ability to draw into wires. Malleability: ability to form sheets. Brittleness: fractures without plastic deformation.", "frequency": "moderate", "keywords": ["hardness", "toughness", "ductility", "malleability", "brittleness"] },
    { "id": "emm-q5", "topic": "Composite Materials", "year": "2025", "marks": 5, "type": "theory", "text": "What is a composite material? Give two examples and explain their applications.", "options": [], "correct": 0, "explanation": "Composite: two or more materials combined to get superior properties. Examples: 1) Fiberglass (glass fibers + polymer matrix) — used in boats, windmill blades. 2) Carbon fiber (carbon + epoxy) — aerospace, sports equipment.", "frequency": "moderate", "keywords": ["matrix", "reinforcement", "fiberglass", "carbon fiber", "composite"] }
  ],
  "data-visualization": [
    {
      "id": "dv-q1",
      "topic": "Visualization Basics",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What is the primary purpose of data visualization? Explain with an example.",
      "options": [],
      "correct": 0,
      "explanation": "Data visualization transforms raw data into graphical formats to reveal trends, patterns, and insights that are not easily seen in tabular data.",
      "frequency": "most",
      "keywords": ["trends", "patterns", "graphical", "insights", "data"]
    },
    {
      "id": "dv-q2",
      "topic": "Chart Types",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the difference between a bar chart and a histogram.",
      "options": [],
      "correct": 0,
      "explanation": "Bar charts display categorical data with separate bars, while histograms display the distribution of continuous numerical data using adjacent bars.",
      "frequency": "most",
      "keywords": ["categorical", "continuous", "distribution", "frequency", "bars"]
    },
    {
      "id": "dv-q3",
      "topic": "Dashboard Design",
      "year": "2025",
      "marks": 10,
      "type": "theory",
      "text": "Describe the principles of good dashboard design. What is the data-ink ratio as defined by Edward Tufte?",
      "options": [],
      "correct": 0,
      "explanation": "Good dashboards are clear, concise, and contextual. Tufte's data-ink ratio is the proportion of ink used to display actual data versus total ink used—maximize it by removing non-essential elements.",
      "frequency": "most",
      "keywords": ["layout", "clarity", "tufte", "data-ink", "metrics", "concise"]
    },
    {
      "id": "dv-q4",
      "topic": "Visualization Techniques",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "What is a scatter plot? When is it used and what does it reveal?",
      "options": [],
      "correct": 0,
      "explanation": "A scatter plot visualizes the relationship between two quantitative variables by plotting data points on two axes, revealing correlations and clusters.",
      "frequency": "moderate",
      "keywords": ["correlation", "variables", "relationship", "quantitative", "clusters"]
    },
    {
      "id": "dv-q5",
      "topic": "Visual Analytics",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the concept of Gestalt principles in data visualization.",
      "options": [],
      "correct": 0,
      "explanation": "Gestalt principles (proximity, similarity, continuity, closure) describe how humans perceive visual elements as groups, helping designers create clearer visualizations.",
      "frequency": "moderate",
      "keywords": ["gestalt", "proximity", "similarity", "perception", "grouping"]
    }
  ],
  "fundamentals-data-structures": [
    {
      "id": "fds-q1",
      "topic": "Linked Lists",
      "year": "2025",
      "marks": 10,
      "type": "theory",
      "text": "What is a linked list? Differentiate between singly and doubly linked lists with diagrams.",
      "options": [],
      "correct": 0,
      "explanation": "A linked list is a linear data structure where elements (nodes) are connected via pointers. Singly linked lists have one pointer (next); doubly linked lists have two (next and prev).",
      "frequency": "most",
      "keywords": ["nodes", "pointers", "traversal", "singly", "doubly"]
    },
    {
      "id": "fds-q2",
      "topic": "Stack",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Explain the concept of a Stack. What is LIFO? Give two real-world applications of stacks.",
      "options": [],
      "correct": 0,
      "explanation": "A stack is a LIFO (Last In, First Out) data structure. Operations: push (insert) and pop (remove from top). Applications: undo operation in editors, function call stack in recursion.",
      "frequency": "most",
      "keywords": ["LIFO", "push", "pop", "recursion", "undo"]
    },
    {
      "id": "fds-q3",
      "topic": "Searching",
      "year": "2025",
      "marks": 10,
      "type": "theory",
      "text": "Write an algorithm for binary search and analyze its time complexity.",
      "options": [],
      "correct": 0,
      "explanation": "Binary search divides the sorted array in half at each step: compare the target with the mid element, then search left or right. Time complexity: O(log n).",
      "frequency": "most",
      "keywords": ["array", "mid", "divide", "O(log n)", "sorted"]
    },
    {
      "id": "fds-q4",
      "topic": "Trees",
      "year": "2025",
      "marks": 10,
      "type": "theory",
      "text": "Define a Binary Search Tree (BST). Explain insertion and deletion operations with examples.",
      "options": [],
      "correct": 0,
      "explanation": "A BST is a tree where each node's left child is smaller and right child is larger. Insertion places the new node by traversal; deletion handles three cases: leaf, one child, two children.",
      "frequency": "moderate",
      "keywords": ["root", "leaves", "children", "insertion", "deletion", "BST"]
    },
    {
      "id": "fds-q5",
      "topic": "Arrays vs Linked Lists",
      "year": "2025",
      "marks": 5,
      "type": "theory",
      "text": "Compare arrays and linked lists in terms of memory allocation, access time, and insertion/deletion.",
      "options": [],
      "correct": 0,
      "explanation": "Arrays use contiguous memory with O(1) access but O(n) insertion. Linked lists use dynamic memory with O(n) access but O(1) insertion at known positions.",
      "frequency": "moderate",
      "keywords": ["memory", "contiguous", "dynamic", "O(1)", "access"]
    }
  ],
  "electrical-technology": [
    {
      "id": "electrical-technology-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for electrical-technology",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "applied-mathematics": [
    {
      "id": "applied-mathematics-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for applied-mathematics",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "basic-mechanical-engineering": [
    { "id": "bme-q1", "topic": "Thermodynamics", "year": "2025", "marks": 5, "type": "theory", "text": "State and explain the First and Second Laws of Thermodynamics with examples.", "options": [], "correct": 0, "explanation": "First Law: energy cannot be created or destroyed, only transformed. Second Law: heat flows spontaneously from hot to cold; entropy increases.", "frequency": "most", "keywords": ["energy", "conservation", "entropy", "heat", "thermodynamics"] },
    { "id": "bme-q2", "topic": "IC Engines", "year": "2025", "marks": 10, "type": "theory", "text": "Explain the working principle of a 4-stroke internal combustion engine with a neat diagram.", "options": [], "correct": 0, "explanation": "4-stroke engine: Intake (air-fuel mix enters), Compression (mixture compressed), Power (spark ignites, piston pushed), Exhaust (burnt gases expelled).", "frequency": "most", "keywords": ["intake", "compression", "power", "exhaust", "piston"] },
    { "id": "bme-q3", "topic": "Mechanics", "year": "2025", "marks": 5, "type": "theory", "text": "What is the difference between stress and strain? State Hooke's Law.", "options": [], "correct": 0, "explanation": "Stress = Force/Area; Strain = Change in length/Original length. Hooke's Law: stress is proportional to strain within elastic limit.", "frequency": "most", "keywords": ["stress", "strain", "force", "area", "elastic"] },
    { "id": "bme-q4", "topic": "Power Transmission", "year": "2025", "marks": 10, "type": "theory", "text": "Describe the different types of gears and their applications in power transmission.", "options": [], "correct": 0, "explanation": "Types: Spur (parallel shafts), Helical (smoother, angular shafts), Bevel (intersecting shafts), Worm (high reduction). Used in gearboxes, clocks, vehicles.", "frequency": "moderate", "keywords": ["spur", "helical", "bevel", "transmission", "gears"] },
    { "id": "bme-q5", "topic": "RAC", "year": "2025", "marks": 5, "type": "theory", "text": "Explain the vapor compression refrigeration cycle.", "options": [], "correct": 0, "explanation": "Cycle: Compression (refrigerant vapor compressed) → Condensation (heat rejected) → Expansion (pressure drops) → Evaporation (heat absorbed from space).", "frequency": "moderate", "keywords": ["refrigerant", "compression", "evaporation", "condensation", "cycle"] }
  ],
  "calculus-and-matrices": [
    { "id": "cam-q1", "topic": "Matrices", "year": "2025", "marks": 10, "type": "numerical", "text": "Find the eigenvalues and eigenvectors of the matrix A = [[4, 1], [2, 3]].", "options": [], "correct": 0, "explanation": "Characteristic equation: det(A - λI) = 0. Eigenvalues: λ=5, λ=2. Corresponding eigenvectors are found by substituting each eigenvalue.", "frequency": "most", "keywords": ["eigenvalues", "eigenvectors", "determinant", "characteristic", "matrix"] },
    { "id": "cam-q2", "topic": "Matrices", "year": "2025", "marks": 5, "type": "theory", "text": "State and verify the Cayley-Hamilton theorem for a 2x2 matrix.", "options": [], "correct": 0, "explanation": "The Cayley-Hamilton theorem states every square matrix satisfies its own characteristic polynomial. For A = [[a,b],[c,d]], verify A² - (a+d)A + (ad-bc)I = 0.", "frequency": "most", "keywords": ["Cayley-Hamilton", "characteristic polynomial", "matrix", "satisfies"] },
    { "id": "cam-q3", "topic": "Integration", "year": "2025", "marks": 10, "type": "numerical", "text": "Evaluate the double integral of (x + y) over the region bounded by x=0, x=1, y=0, y=1.", "options": [], "correct": 0, "explanation": "∫₀¹∫₀¹(x+y) dx dy = ∫₀¹[x²/2 + xy]₀¹ dy = ∫₀¹(1/2+y) dy = [y/2 + y²/2]₀¹ = 1.", "frequency": "most", "keywords": ["integration", "double integral", "limits", "bounded", "area"] },
    { "id": "cam-q4", "topic": "Series", "year": "2025", "marks": 5, "type": "theory", "text": "Write the Taylor series expansion for e^x and sin(x) about x=0.", "options": [], "correct": 0, "explanation": "e^x = 1 + x + x²/2! + x³/3! + ... ; sin(x) = x - x³/3! + x⁵/5! - ...", "frequency": "moderate", "keywords": ["Taylor series", "Maclaurin", "expansion", "e^x", "sin"] },
    { "id": "cam-q5", "topic": "Partial Differentiation", "year": "2025", "marks": 5, "type": "theory", "text": "Explain partial differentiation. If z = x²y + xy², find ∂z/∂x and ∂z/∂y.", "options": [], "correct": 0, "explanation": "Partial diff: differentiate w.r.t. one variable keeping others constant. ∂z/∂x = 2xy + y². ∂z/∂y = x² + 2xy.", "frequency": "moderate", "keywords": ["partial derivative", "constant", "variable", "gradient"] }
  ],
  "universal-human-values": [
    {
      "id": "universal-human-values-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for universal-human-values",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "technical-writing-clinic": [
    { "id": "twc-q1", "topic": "Technical Reports", "year": "2025", "marks": 10, "type": "theory", "text": "What are the essential components of a formal technical report? Explain each section briefly.", "options": [], "correct": 0, "explanation": "Components: Title Page, Abstract, Table of Contents, Introduction, Methodology, Results, Discussion, Conclusion, References, Appendices.", "frequency": "most", "keywords": ["abstract", "introduction", "methodology", "conclusion", "references"] },
    { "id": "twc-q2", "topic": "Professional Writing", "year": "2025", "marks": 5, "type": "theory", "text": "How do you write an effective professional email? List the key elements.", "options": [], "correct": 0, "explanation": "Key elements: Clear subject line, professional salutation, concise body, polite closing, signature. Avoid jargon, be specific and professional.", "frequency": "most", "keywords": ["subject", "salutation", "concise", "professional", "email"] },
    { "id": "twc-q3", "topic": "CV vs Resume", "year": "2025", "marks": 5, "type": "theory", "text": "Explain the difference between a CV and a Resume. When is each used?", "options": [], "correct": 0, "explanation": "CV (Curriculum Vitae) is a comprehensive document listing all academic and professional achievements—used for academic positions. Resume is a brief (1-2 page) summary for job applications.", "frequency": "moderate", "keywords": ["CV", "resume", "academic", "length", "purpose"] },
    { "id": "twc-q4", "topic": "Plagiarism", "year": "2025", "marks": 5, "type": "theory", "text": "What is plagiarism? How can it be avoided in academic writing?", "options": [], "correct": 0, "explanation": "Plagiarism is using someone's work without proper attribution. Avoid it by citing sources, paraphrasing correctly, using plagiarism detection tools, and maintaining originality.", "frequency": "moderate", "keywords": ["citations", "originality", "paraphrasing", "attribution", "academic"] },
    { "id": "twc-q5", "topic": "Literature Review", "year": "2025", "marks": 10, "type": "theory", "text": "Describe the process of writing a literature review for a research paper.", "options": [], "correct": 0, "explanation": "Steps: Define scope → Search databases → Read and evaluate sources → Synthesize findings → Identify gaps → Write critically, not descriptively. Group sources thematically.", "frequency": "can-be", "keywords": ["research", "synthesize", "sources", "critical", "gaps"] }
  ],
  "manufracturing-products": [
    { "id": "mp-q1", "topic": "Casting", "year": "2025", "marks": 10, "type": "theory", "text": "Describe the sand casting process step by step. What are its advantages and limitations?", "options": [], "correct": 0, "explanation": "Steps: Pattern making → Mold preparation (sand) → Pouring molten metal → Solidification → Shakeout and cleaning. Advantages: Low cost, complex shapes. Limitations: Poor surface finish.", "frequency": "most", "keywords": ["mold", "pattern", "pouring", "solidification", "casting"] },
    { "id": "mp-q2", "topic": "Welding", "year": "2025", "marks": 10, "type": "theory", "text": "What is the difference between welding, brazing, and soldering?", "options": [], "correct": 0, "explanation": "Welding: base metals melted together (>450°C). Brazing: filler melted above 450°C, base metal not melted. Soldering: filler below 450°C, weakest joint.", "frequency": "most", "keywords": ["temperature", "filler", "joint", "welding", "brazing"] },
    { "id": "mp-q3", "topic": "Lathe", "year": "2025", "marks": 10, "type": "theory", "text": "Explain the basic operations performed on a lathe machine.", "options": [], "correct": 0, "explanation": "Operations: Turning (reducing diameter), Facing (smooth flat surface), Threading (cutting threads), Boring (enlarging holes), Knurling (textured surface).", "frequency": "most", "keywords": ["turning", "facing", "threading", "lathe", "boring"] },
    { "id": "mp-q4", "topic": "Advanced Manufacturing", "year": "2025", "marks": 5, "type": "theory", "text": "What is additive manufacturing (3D printing)? How does FDM work?", "options": [], "correct": 0, "explanation": "Additive manufacturing builds objects layer by layer from digital models. FDM (Fused Deposition Modeling) melts thermoplastic filament and deposits it layer by layer.", "frequency": "moderate", "keywords": ["additive", "3D printing", "FDM", "layers", "filament"] },
    { "id": "mp-q5", "topic": "Forging", "year": "2025", "marks": 5, "type": "theory", "text": "Define forging. Differentiate between hot forging and cold forging.", "options": [], "correct": 0, "explanation": "Forging shapes metal using compressive forces. Hot forging: metal heated above recrystallization temp (easier deformation). Cold forging: done at room temp (better surface finish, higher strength).", "frequency": "moderate", "keywords": ["deformation", "hot", "cold", "hammer", "compressive"] }
  ],
  "engineering-graphics": [
    { "id": "eg-q1", "topic": "Projections", "year": "2025", "marks": 5, "type": "theory", "text": "Explain first angle and third angle projection methods with diagrams. Where is each used?", "options": [], "correct": 0, "explanation": "First angle (European): object between observer and plane, view placed on opposite side. Third angle (American): plane between observer and object, view placed on same side.", "frequency": "most", "keywords": ["orthographic", "planes", "views", "first angle", "third angle"] },
    { "id": "eg-q2", "topic": "Isometric", "year": "2025", "marks": 5, "type": "theory", "text": "What is isometric projection? How does it differ from perspective projection?", "options": [], "correct": 0, "explanation": "Isometric: 3D representation with equal foreshortening on all three axes (120° between axes, no perspective distortion). Perspective: shows depth with vanishing points.", "frequency": "most", "keywords": ["3D", "isometric", "angles", "foreshortening", "scale"] },
    { "id": "eg-q3", "topic": "Points & Lines", "year": "2025", "marks": 5, "type": "theory", "text": "Draw and describe the projections of a point situated in the first quadrant at 30mm above HP and 20mm in front of VP.", "options": [], "correct": 0, "explanation": "In 1st quadrant: front view (elevation) is 30mm above XY line; top view (plan) is 20mm below XY line on the projection.", "frequency": "moderate", "keywords": ["HP", "VP", "XY line", "quadrant", "projection"] },
    { "id": "eg-q4", "topic": "Development of Surfaces", "year": "2025", "marks": 5, "type": "theory", "text": "What is development of surfaces? Draw the development of a right circular cylinder.", "options": [], "correct": 0, "explanation": "Development = unfolding a 3D surface into a flat 2D layout. Cylinder development: a rectangle of width = circumference (2πr) and height = h of cylinder.", "frequency": "moderate", "keywords": ["unfolding", "sheet metal", "cylinder", "rectangle", "surface"] },
    { "id": "eg-q5", "topic": "BIS Standards", "year": "2025", "marks": 5, "type": "theory", "text": "What are the standard drawing sheet sizes according to BIS? List the title block contents.", "options": [], "correct": 0, "explanation": "BIS sizes: A0 (841x1189mm), A1 (594x841mm), A2, A3, A4. Title block contains: title, scale, projection symbol, material, date, drawn by, checked by.", "frequency": "can-be", "keywords": ["A0", "A1", "A4", "BIS", "title block"] }
  ],
  "engineering-chemistry": [
    { "id": "ec-q1", "topic": "Water Treatment", "year": "2025", "marks": 5, "type": "theory", "text": "Explain the principle and process of reverse osmosis. Where is it applied?", "options": [], "correct": 0, "explanation": "Reverse osmosis uses pressure to force water through a semipermeable membrane, removing dissolved salts and impurities. Applied in drinking water purification, desalination.", "frequency": "most", "keywords": ["water", "purification", "membrane", "pressure", "semipermeable"] },
    { "id": "ec-q2", "topic": "Polymers", "year": "2025", "marks": 10, "type": "theory", "text": "What are polymers? Differentiate between addition and condensation polymerization with examples.", "options": [], "correct": 0, "explanation": "Addition polymerization: monomers add without byproduct (e.g., polythene). Condensation polymerization: monomers join releasing small molecules like water (e.g., nylon, polyester).", "frequency": "most", "keywords": ["monomers", "polymer", "addition", "condensation", "byproduct"] },
    { "id": "ec-q3", "topic": "Corrosion", "year": "2025", "marks": 10, "type": "theory", "text": "Describe the mechanism of electrochemical corrosion. How can it be prevented?", "options": [], "correct": 0, "explanation": "Electrochemical corrosion: anode oxidizes (Fe → Fe²⁺ + 2e⁻), cathode reduces (O₂ + H₂O + 4e⁻ → 4OH⁻). Prevention: galvanization, cathodic protection, coatings.", "frequency": "most", "keywords": ["anode", "cathode", "oxidation", "galvanization", "rust"] },
    { "id": "ec-q4", "topic": "Fuels", "year": "2025", "marks": 10, "type": "theory", "text": "What is a fuel cell? Explain the working of a hydrogen-oxygen fuel cell.", "options": [], "correct": 0, "explanation": "A fuel cell converts chemical energy of fuel directly to electrical energy. H₂-O₂ cell: H₂ oxidized at anode → H⁺ + e⁻; O₂ reduced at cathode → H₂O. Byproduct is only water.", "frequency": "moderate", "keywords": ["hydrogen", "fuel cell", "electrode", "efficiency", "electrolysis"] },
    { "id": "ec-q5", "topic": "Water Hardness", "year": "2025", "marks": 5, "type": "theory", "text": "Define hard and soft water. How is hardness measured? What are its types?", "options": [], "correct": 0, "explanation": "Hard water contains dissolved Ca²⁺ and Mg²⁺ salts. Temporary hardness (carbonates, removed by boiling), permanent hardness (sulfates/chlorides, removed by softening). Measured in ppm using EDTA titration.", "frequency": "moderate", "keywords": ["calcium", "magnesium", "hardness", "EDTA", "temporary"] }
  ],
  "electronic-circuits": [
    { "id": "ecir-q1", "topic": "Op-Amp", "year": "2025", "marks": 10, "type": "theory", "text": "Explain the functioning of an Operational Amplifier. Describe inverting and non-inverting amplifier configurations.", "options": [], "correct": 0, "explanation": "Op-Amp: high-gain differential amplifier. Inverting: gain = -Rf/Rin (output inverted). Non-inverting: gain = 1 + Rf/Rin (output in phase).", "frequency": "most", "keywords": ["inverting", "non-inverting", "gain", "op-amp", "feedback"] },
    { "id": "ecir-q2", "topic": "Rectifiers", "year": "2025", "marks": 10, "type": "theory", "text": "Differentiate between half-wave and full-wave rectifiers. What is ripple factor?", "options": [], "correct": 0, "explanation": "Half-wave: uses 1 diode, converts only positive half cycle. Full-wave: uses 4 diodes (bridge), converts both cycles. Ripple factor: ratio of AC to DC component in output.", "frequency": "most", "keywords": ["AC", "DC", "diode", "ripple", "bridge"] },
    { "id": "ecir-q3", "topic": "Transistors", "year": "2025", "marks": 10, "type": "theory", "text": "Describe the characteristics of a BJT. Explain CB, CE, CC configurations.", "options": [], "correct": 0, "explanation": "BJT: NPN or PNP transistor. CE: common emitter (most used, high gain). CB: common base (low input impedance). CC: common collector / emitter follower (unity gain, high current gain).", "frequency": "most", "keywords": ["npn", "pnp", "common emitter", "amplification", "BJT"] },
    { "id": "ecir-q4", "topic": "Filters", "year": "2025", "marks": 5, "type": "theory", "text": "What is a filter circuit? Differentiate between low-pass and high-pass filters.", "options": [], "correct": 0, "explanation": "Low-pass filter: allows frequencies below cutoff to pass (used after rectifiers). High-pass filter: allows frequencies above cutoff (used in audio). Implemented with RC or LC circuits.", "frequency": "moderate", "keywords": ["low-pass", "high-pass", "cutoff", "frequency", "RC"] },
    { "id": "ecir-q5", "topic": "Feedback", "year": "2025", "marks": 5, "type": "theory", "text": "Explain the concept of feedback in amplifiers. What are the effects of negative feedback?", "options": [], "correct": 0, "explanation": "Feedback: part of output is returned to input. Negative feedback reduces gain but improves stability, bandwidth, reduces distortion and noise. Positive feedback used in oscillators.", "frequency": "moderate", "keywords": ["positive", "negative", "stability", "bandwidth", "distortion"] }
  ],
  "electrical-and-electronic-systems": [
    { "id": "ees-q1", "topic": "Circuit Laws", "year": "2025", "marks": 5, "type": "theory", "text": "State Ohm's Law, Kirchhoff's Current Law (KCL), and Kirchhoff's Voltage Law (KVL) with examples.", "options": [], "correct": 0, "explanation": "Ohm's Law: V=IR. KCL: sum of currents entering a node = sum leaving (current conservation). KVL: sum of voltages around a closed loop = 0 (energy conservation).", "frequency": "most", "keywords": ["voltage", "current", "resistance", "KCL", "KVL"] },
    { "id": "ees-q2", "topic": "Diodes", "year": "2025", "marks": 10, "type": "theory", "text": "Explain the working of a PN junction diode under forward and reverse bias with V-I characteristics.", "options": [], "correct": 0, "explanation": "Forward bias: depletion region narrows, current flows. Reverse bias: depletion region widens, negligible current until breakdown. V-I curve shows exponential in forward, near-zero in reverse.", "frequency": "most", "keywords": ["depletion", "forward bias", "reverse bias", "current", "PN junction"] },
    { "id": "ees-q3", "topic": "Transformers", "year": "2025", "marks": 10, "type": "theory", "text": "What is a transformer? Explain its working principle with the turns ratio formula.", "options": [], "correct": 0, "explanation": "Transformer transfers AC power via mutual induction. Turns ratio: V₁/V₂ = N₁/N₂ = I₂/I₁. Step-up: N₂>N₁, voltage increases. Step-down: N₂<N₁, voltage decreases.", "frequency": "most", "keywords": ["induction", "primary", "secondary", "turns ratio", "transformer"] },
    { "id": "ees-q4", "topic": "AC vs DC", "year": "2025", "marks": 5, "type": "theory", "text": "Differentiate between AC and DC power. What are the advantages of AC for power transmission?", "options": [], "correct": 0, "explanation": "AC alternates direction periodically (50Hz in India). DC flows in one direction. AC preferred for transmission: can be stepped up (reduces I²R losses) using transformers.", "frequency": "moderate", "keywords": ["alternating", "direct", "frequency", "transmission", "losses"] },
    { "id": "ees-q5", "topic": "Resistor Networks", "year": "2025", "marks": 5, "type": "numerical", "text": "Calculate the equivalent resistance of three 15Ω resistors connected in parallel.", "options": [], "correct": 0, "explanation": "1/Req = 1/15 + 1/15 + 1/15 = 3/15 = 1/5. Therefore Req = 5Ω.", "formula": "Req = 5", "frequency": "moderate", "keywords": ["parallel", "resistance", "equivalent", "calculation"] }
  ],
  "digital-systems": [
    { "id": "ds-q1", "topic": "Number Systems", "year": "2025", "marks": 5, "type": "numerical", "text": "Convert the binary number 11010110 to its decimal and hexadecimal equivalents.", "options": [], "correct": 0, "explanation": "11010110₂ = 128+64+16+4+2 = 214₁₀ = D6₁₆.", "formula": "214", "frequency": "most", "keywords": ["binary", "decimal", "hexadecimal", "conversion", "number system"] },
    { "id": "ds-q2", "topic": "Flip-Flops", "year": "2025", "marks": 10, "type": "theory", "text": "Explain the operation of a J-K flip-flop with its truth table. How does it avoid the race-around condition?", "options": [], "correct": 0, "explanation": "JK flip-flop: J=0,K=0 → No change; J=0,K=1 → Reset; J=1,K=0 → Set; J=1,K=1 → Toggle. Race-around avoided using master-slave or edge-triggered configuration.", "frequency": "most", "keywords": ["flip-flop", "toggle", "truth table", "JK", "master-slave"] },
    { "id": "ds-q3", "topic": "Combinational Circuits", "year": "2025", "marks": 10, "type": "theory", "text": "What is a multiplexer (MUX)? Design a 4:1 MUX using basic logic gates.", "options": [], "correct": 0, "explanation": "MUX selects one of n inputs to output based on select lines. 4:1 MUX: 4 inputs, 2 select lines. Output Y = S1'S0'I0 + S1'S0I1 + S1S0'I2 + S1S0I3.", "frequency": "most", "keywords": ["data selector", "inputs", "select lines", "MUX", "logic gates"] },
    { "id": "ds-q4", "topic": "Boolean Algebra", "year": "2025", "marks": 5, "type": "theory", "text": "State and prove De Morgan's theorems. Simplify: F = A'B + AB' + AB.", "options": [], "correct": 0, "explanation": "De Morgan's: (A+B)' = A'B', (AB)' = A'+B'. Simplification: F = A'B + AB' + AB = A'B + A(B'+B) = A'B + A = A + B.", "frequency": "most", "keywords": ["boolean", "De Morgan", "complement", "simplification", "logic"] },
    { "id": "ds-q5", "topic": "Sequential Circuits", "year": "2025", "marks": 10, "type": "theory", "text": "Design a full adder using half adders. Write its truth table and Boolean expressions.", "options": [], "correct": 0, "explanation": "Full adder: Sum = A⊕B⊕Cin, Carry = AB + BCin + ACin. Built using two half adders and an OR gate.", "frequency": "moderate", "keywords": ["sum", "carry", "full adder", "half adder", "XOR"] }
  ],
  "communication-skills": [
    { "id": "cs-q1", "topic": "Barriers", "year": "2025", "marks": 10, "type": "theory", "text": "What are the barriers to effective communication? Explain with examples and how to overcome them.", "options": [], "correct": 0, "explanation": "Barriers: Noise (physical/semantic), Language barriers, Psychological barriers (prejudice), Cultural differences, Poor listening. Overcome by: clarity, active listening, feedback, appropriate channel.", "frequency": "most", "keywords": ["noise", "language", "psychological", "cultural", "feedback"] },
    { "id": "cs-q2", "topic": "Non-verbal Communication", "year": "2025", "marks": 5, "type": "theory", "text": "Explain the importance of non-verbal communication. What are its types?", "options": [], "correct": 0, "explanation": "Non-verbal communication conveys 70% of meaning. Types: Body language, Facial expressions, Eye contact, Gestures, Posture, Proxemics (personal space), Paralanguage (tone, pitch).", "frequency": "most", "keywords": ["body language", "gestures", "eye contact", "facial", "posture"] },
    { "id": "cs-q3", "topic": "7 Cs", "year": "2025", "marks": 10, "type": "theory", "text": "Describe the 7 C's of effective communication with examples.", "options": [], "correct": 0, "explanation": "7 C's: Clear (easy to understand), Concise (brief), Concrete (specific facts), Correct (accurate), Coherent (logical flow), Complete (all info present), Courteous (respectful tone).", "frequency": "most", "keywords": ["clear", "concise", "concrete", "correct", "complete"] },
    { "id": "cs-q4", "topic": "Active Listening", "year": "2025", "marks": 5, "type": "theory", "text": "What is active listening? How does it differ from passive listening?", "options": [], "correct": 0, "explanation": "Active listening: fully concentrating, understanding, responding and remembering. Involves paraphrasing, asking questions, maintaining eye contact. Passive: merely hearing without engagement.", "frequency": "moderate", "keywords": ["attention", "feedback", "paraphrasing", "engagement", "understanding"] },
    { "id": "cs-q5", "topic": "Communication Networks", "year": "2025", "marks": 5, "type": "theory", "text": "Differentiate between formal and informal communication networks in an organization.", "options": [], "correct": 0, "explanation": "Formal: follows official hierarchy (upward, downward, horizontal). Informal: grapevine network, spontaneous, faster but less accurate. Both serve important organizational functions.", "frequency": "moderate", "keywords": ["official", "grapevine", "hierarchy", "formal", "informal"] }
  ],
  "aiml-ase": [
    {
      "id": "aiml-ase-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-ase",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "aiml-cc": [
    {
      "id": "aiml-cc-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-cc",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "aiml-coa": [
    {
      "id": "aiml-coa-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-coa",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "aiml-daa": [
    {
      "id": "aiml-daa-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-daa",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "aiml-dsa": [
    {
      "id": "aiml-dsa-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-dsa",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "aiml-eco": [
    {
      "id": "aiml-eco-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-eco",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "aiml-mot": [
    {
      "id": "aiml-mot-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-mot",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "aiml-oops": [
    {
      "id": "aiml-oops-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-oops",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "aiml-os": [
    {
      "id": "aiml-os-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-os",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "aiml-pai": [
    {
      "id": "aiml-pai-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-pai",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "aiml-rdbms": [
    {
      "id": "aiml-rdbms-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-rdbms",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "aiml-sepm": [
    {
      "id": "aiml-sepm-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-sepm",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "aiml-stats": [
    {
      "id": "aiml-stats-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-stats",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "aiml-acd": [
    {
      "id": "aiml-acd-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-acd",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "aiml-cn": [
    {
      "id": "aiml-cn-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-cn",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "aiml-deep-learning": [
    {
      "id": "aiml-deep-learning-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-deep-learning",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "aiml-machine-learning": [
    {
      "id": "aiml-machine-learning-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-machine-learning",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "aiml-mte26": [
    {
      "id": "aiml-mte26-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-mte26",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "aiml-rec": [
    {
      "id": "aiml-rec-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-rec",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "aiml-webtech": [
    {
      "id": "aiml-webtech-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-webtech",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cse-os": [
    {
      "id": "cse-os-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cse-os",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cse-dbms": [
    {
      "id": "cse-dbms-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cse-dbms",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cce-dccn": [
    {
      "id": "cce-dccn-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cce-dccn",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cce-ddca": [
    {
      "id": "cce-ddca-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cce-ddca",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cce-dsa": [
    {
      "id": "cce-dsa-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cce-dsa",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cce-eco": [
    {
      "id": "cce-eco-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cce-eco",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cce-mot": [
    {
      "id": "cce-mot-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cce-mot",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cce-oops": [
    {
      "id": "cce-oops-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cce-oops",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cce-os": [
    {
      "id": "cce-os-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cce-os",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cce-rdbms": [
    {
      "id": "cce-rdbms-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cce-rdbms",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cce-stats": [
    {
      "id": "cce-stats-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cce-stats",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "ece-signals-systems": [
    {
      "id": "ece-signals-systems-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for ece-signals-systems",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "it-web-development": [
    {
      "id": "it-web-development-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for it-web-development",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cyber-security": [
    {
      "id": "cyber-security-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cyber-security",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cs-network-security": [
    {
      "id": "cs-network-security-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cs-network-security",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "iot": [
    {
      "id": "iot-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for iot",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "iot-embedded": [
    {
      "id": "iot-embedded-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for iot-embedded",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "mech-thermo": [
    {
      "id": "mech-thermo-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for mech-thermo",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "mect-robotics": [
    {
      "id": "mect-robotics-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for mect-robotics",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "auto-vehicle-dynamics": [
    {
      "id": "auto-vehicle-dynamics-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for auto-vehicle-dynamics",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "dse-statistics": [
    {
      "id": "dse-statistics-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for dse-statistics",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bba": [
    {
      "id": "bba-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bba",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bba-pom": [
    {
      "id": "bba-pom-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bba-pom",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bba-fa": [
    {
      "id": "bba-fa-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bba-fa",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bba-ob": [
    {
      "id": "bba-ob-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bba-ob",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bba-sm": [
    {
      "id": "bba-sm-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bba-sm",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bcom-bl": [
    {
      "id": "bcom-bl-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bcom-bl",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bcom-ca": [
    {
      "id": "bcom-ca-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bcom-ca",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bcom-cost": [
    {
      "id": "bcom-cost-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bcom-cost",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "llb-con1": [
    {
      "id": "llb-con1-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for llb-con1",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "llb-crim": [
    {
      "id": "llb-crim-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for llb-crim",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "llb-admin": [
    {
      "id": "llb-admin-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for llb-admin",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "aiml-q1": [
    {
      "id": "aiml-q1-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-q1",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "aiml-q2": [
    {
      "id": "aiml-q2-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-q2",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "aiml-q3": [
    {
      "id": "aiml-q3-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-q3",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "aiml-q4": [
    {
      "id": "aiml-q4-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-q4",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "aiml-q5": [
    {
      "id": "aiml-q5-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-q5",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "aiml-q6": [
    {
      "id": "aiml-q6-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for aiml-q6",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cse--q1": [
    {
      "id": "cse--q1-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cse--q1",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cse--q2": [
    {
      "id": "cse--q2-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cse--q2",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cse--q3": [
    {
      "id": "cse--q3-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cse--q3",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cse--q4": [
    {
      "id": "cse--q4-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cse--q4",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cse--q5": [
    {
      "id": "cse--q5-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cse--q5",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cse--q6": [
    {
      "id": "cse--q6-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cse--q6",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cce--q1": [
    {
      "id": "cce--q1-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cce--q1",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cce--q2": [
    {
      "id": "cce--q2-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cce--q2",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cce--q3": [
    {
      "id": "cce--q3-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cce--q3",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cce--q4": [
    {
      "id": "cce--q4-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cce--q4",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cce--q5": [
    {
      "id": "cce--q5-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cce--q5",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cce--q6": [
    {
      "id": "cce--q6-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cce--q6",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "ece--q1": [
    {
      "id": "ece--q1-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for ece--q1",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "ece--q2": [
    {
      "id": "ece--q2-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for ece--q2",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "ece--q3": [
    {
      "id": "ece--q3-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for ece--q3",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "ece--q4": [
    {
      "id": "ece--q4-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for ece--q4",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "ece--q5": [
    {
      "id": "ece--q5-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for ece--q5",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "ece--q6": [
    {
      "id": "ece--q6-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for ece--q6",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "it-w-q1": [
    {
      "id": "it-w-q1-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for it-w-q1",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "it-w-q2": [
    {
      "id": "it-w-q2-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for it-w-q2",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "it-w-q3": [
    {
      "id": "it-w-q3-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for it-w-q3",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "it-w-q4": [
    {
      "id": "it-w-q4-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for it-w-q4",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "it-w-q5": [
    {
      "id": "it-w-q5-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for it-w-q5",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "it-w-q6": [
    {
      "id": "it-w-q6-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for it-w-q6",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cybe-q1": [
    {
      "id": "cybe-q1-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cybe-q1",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cybe-q2": [
    {
      "id": "cybe-q2-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cybe-q2",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cybe-q3": [
    {
      "id": "cybe-q3-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cybe-q3",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cybe-q4": [
    {
      "id": "cybe-q4-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cybe-q4",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cybe-q5": [
    {
      "id": "cybe-q5-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cybe-q5",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cybe-q6": [
    {
      "id": "cybe-q6-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cybe-q6",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cs-n-q1": [
    {
      "id": "cs-n-q1-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cs-n-q1",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cs-n-q2": [
    {
      "id": "cs-n-q2-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cs-n-q2",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cs-n-q3": [
    {
      "id": "cs-n-q3-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cs-n-q3",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cs-n-q4": [
    {
      "id": "cs-n-q4-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cs-n-q4",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cs-n-q5": [
    {
      "id": "cs-n-q5-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cs-n-q5",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "cs-n-q6": [
    {
      "id": "cs-n-q6-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for cs-n-q6",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "iot-q1": [
    {
      "id": "iot-q1-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for iot-q1",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "iot-q2": [
    {
      "id": "iot-q2-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for iot-q2",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "iot-q3": [
    {
      "id": "iot-q3-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for iot-q3",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "iot-q4": [
    {
      "id": "iot-q4-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for iot-q4",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "iot-q5": [
    {
      "id": "iot-q5-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for iot-q5",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "iot-q6": [
    {
      "id": "iot-q6-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for iot-q6",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "iot--q1": [
    {
      "id": "iot--q1-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for iot--q1",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "iot--q2": [
    {
      "id": "iot--q2-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for iot--q2",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "iot--q3": [
    {
      "id": "iot--q3-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for iot--q3",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "iot--q4": [
    {
      "id": "iot--q4-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for iot--q4",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "iot--q5": [
    {
      "id": "iot--q5-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for iot--q5",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "iot--q6": [
    {
      "id": "iot--q6-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for iot--q6",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "mech-q1": [
    {
      "id": "mech-q1-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for mech-q1",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "mech-q2": [
    {
      "id": "mech-q2-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for mech-q2",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "mech-q3": [
    {
      "id": "mech-q3-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for mech-q3",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "mech-q4": [
    {
      "id": "mech-q4-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for mech-q4",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "mech-q5": [
    {
      "id": "mech-q5-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for mech-q5",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "mech-q6": [
    {
      "id": "mech-q6-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for mech-q6",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "mect-q1": [
    {
      "id": "mect-q1-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for mect-q1",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "mect-q2": [
    {
      "id": "mect-q2-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for mect-q2",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "mect-q3": [
    {
      "id": "mect-q3-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for mect-q3",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "mect-q4": [
    {
      "id": "mect-q4-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for mect-q4",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "mect-q5": [
    {
      "id": "mect-q5-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for mect-q5",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "mect-q6": [
    {
      "id": "mect-q6-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for mect-q6",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "auto-q1": [
    {
      "id": "auto-q1-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for auto-q1",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "auto-q2": [
    {
      "id": "auto-q2-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for auto-q2",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "auto-q3": [
    {
      "id": "auto-q3-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for auto-q3",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "auto-q4": [
    {
      "id": "auto-q4-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for auto-q4",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "auto-q5": [
    {
      "id": "auto-q5-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for auto-q5",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "auto-q6": [
    {
      "id": "auto-q6-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for auto-q6",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "dse--q1": [
    {
      "id": "dse--q1-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for dse--q1",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "dse--q2": [
    {
      "id": "dse--q2-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for dse--q2",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "dse--q3": [
    {
      "id": "dse--q3-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for dse--q3",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "dse--q4": [
    {
      "id": "dse--q4-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for dse--q4",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "dse--q5": [
    {
      "id": "dse--q5-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for dse--q5",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "dse--q6": [
    {
      "id": "dse--q6-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for dse--q6",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bba-q1": [
    {
      "id": "bba-q1-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bba-q1",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bba-q2": [
    {
      "id": "bba-q2-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bba-q2",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bba-q3": [
    {
      "id": "bba-q3-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bba-q3",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bba-q4": [
    {
      "id": "bba-q4-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bba-q4",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bba-q5": [
    {
      "id": "bba-q5-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bba-q5",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bba-q6": [
    {
      "id": "bba-q6-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bba-q6",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bba--q1": [
    {
      "id": "bba--q1-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bba--q1",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bba--q2": [
    {
      "id": "bba--q2-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bba--q2",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bba--q3": [
    {
      "id": "bba--q3-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bba--q3",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bba--q4": [
    {
      "id": "bba--q4-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bba--q4",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bba--q5": [
    {
      "id": "bba--q5-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bba--q5",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bba--q6": [
    {
      "id": "bba--q6-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bba--q6",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bcom-q1": [
    {
      "id": "bcom-q1-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bcom-q1",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bcom-q2": [
    {
      "id": "bcom-q2-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bcom-q2",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bcom-q3": [
    {
      "id": "bcom-q3-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bcom-q3",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bcom-q4": [
    {
      "id": "bcom-q4-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bcom-q4",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bcom-q5": [
    {
      "id": "bcom-q5-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bcom-q5",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "bcom-q6": [
    {
      "id": "bcom-q6-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for bcom-q6",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "llb--q1": [
    {
      "id": "llb--q1-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for llb--q1",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "llb--q2": [
    {
      "id": "llb--q2-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for llb--q2",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "llb--q3": [
    {
      "id": "llb--q3-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for llb--q3",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "llb--q4": [
    {
      "id": "llb--q4-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for llb--q4",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "llb--q5": [
    {
      "id": "llb--q5-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for llb--q5",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ],
  "llb--q6": [
    {
      "id": "llb--q6-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for llb--q6",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "correct": 0,
      "explanation": "Explanation",
      "frequency": "most"
    }
  ]
};
