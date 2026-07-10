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
  frequency?: 'most' | 'moderate' | 'can-be';
  type?: 'mcq' | 'short' | 'long' | 'numerical' | 'theory';
  keywords?: string[];
  formula?: string;
}

export const QUESTIONS_DB: Record<string, Question[]> = {
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
    {
      "id": "biology-for-engineers-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for biology-for-engineers",
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
    {
      "id": "engineering-material-mechanics-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for engineering-material-mechanics",
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
  "data-visualization": [
    {
      "id": "data-visualization-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for data-visualization",
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
  "fundamentals-data-structures": [
    {
      "id": "fundamentals-data-structures-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for fundamentals-data-structures",
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
    {
      "id": "basic-mechanical-engineering-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for basic-mechanical-engineering",
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
  "calculus-and-matrices": [
    {
      "id": "calculus-and-matrices-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for calculus-and-matrices",
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
    {
      "id": "technical-writing-clinic-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for technical-writing-clinic",
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
  "manufracturing-products": [
    {
      "id": "manufracturing-products-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for manufracturing-products",
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
  "engineering-graphics": [
    {
      "id": "engineering-graphics-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for engineering-graphics",
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
  "engineering-chemistry": [
    {
      "id": "engineering-chemistry-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for engineering-chemistry",
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
  "electronic-circuits": [
    {
      "id": "electronic-circuits-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for electronic-circuits",
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
  "electrical-and-electronic-systems": [
    {
      "id": "electrical-and-electronic-systems-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for electrical-and-electronic-systems",
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
  "digital-systems": [
    {
      "id": "digital-systems-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for digital-systems",
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
  "communication-skills": [
    {
      "id": "communication-skills-q1",
      "topic": "General",
      "year": "2024",
      "marks": 5,
      "text": "Sample Question for communication-skills",
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
