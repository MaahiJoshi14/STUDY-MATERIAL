$lines = Get-Content 'c:\Users\Admin\study-material\src\data\studyMaterial.ts'
# Keep only lines 1 to 1483 (before the Questions section)
$baseContent = $lines[0..1482] -join "`r`n"

$questionsContent = @'

// -- Shared Questions Database for Master Arena --
export interface Question {
  id: string;
  topic: string;
  year: string;
  marks: number;
  /** 'mcq' | 'theory' | 'numerical' */
  type: 'mcq' | 'theory' | 'numerical';
  text: string;
  // MCQ only
  options: string[];
  correct: number;
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
      keywords: ['Meissner effect', 'magnetic field expulsion', 'perfect diamagnetic', 'critical temperature', 'flux exclusion'],
      explanation: 'The Meissner effect is the expulsion of magnetic fields from inside a superconductor below critical temperature Tc, making it a perfect diamagnet.'
    },
    {
      id: 'ep5', topic: 'Quantum Mechanics', year: 'Sessional 2022', marks: 4,
      type: 'numerical', frequency: 'moderate',
      text: 'Calculate the de Broglie wavelength of an electron accelerated through 100 V. (m=9.1x10^-31 kg, h=6.63x10^-34 Js, e=1.6x10^-19 C)',
      options: [], correct: -1,
      formula: 'lambda = h / sqrt(2meV) = 6.63e-34 / sqrt(2 x 9.1e-31 x 1.6e-19 x 100) = 1.226 Angstrom',
      explanation: 'de Broglie wavelength: lambda = h/sqrt(2meV). Substituting values gives lambda approx 1.226 Angstrom for 100 V.'
    },
    {
      id: 'ep6', topic: 'Fibre Optics', year: 'Mid-Term 2023', marks: 3,
      type: 'mcq', frequency: 'can-be',
      text: 'Numerical aperture of an optical fibre depends on:',
      options: ['Core refractive index only', 'Cladding refractive index only', 'Both core and cladding refractive indices', 'The wavelength of light only'],
      correct: 2,
      explanation: 'NA = sqrt(n1^2 - n2^2) where n1 is core RI and n2 is cladding RI.'
    },
    {
      id: 'ep7', topic: 'Wave Optics', year: 'End-Term 2022', marks: 2,
      type: 'theory', frequency: 'can-be',
      text: 'State Huygens\' principle and explain how it accounts for refraction.',
      options: [], correct: -1,
      keywords: ['wavefront', 'secondary wavelets', 'envelope', 'speed change', 'direction change'],
      explanation: 'Huygens\' principle: every point on a wavefront acts as a source of secondary spherical wavelets. The new wavefront is their common tangent (envelope).'
    },
  ],

  'computational-mathematics': [
    {
      id: 'cm1', topic: 'Linear Algebra', year: 'End-Term 2024', marks: 8,
      type: 'mcq', frequency: 'most',
      text: 'If A is a 3x3 matrix with eigenvalues 1, 2, and -1, what is Trace(A)?',
      options: ['2', '3', '6', '-2'],
      correct: 0,
      explanation: 'Trace = sum of eigenvalues = 1 + 2 + (-1) = 2.'
    },
    {
      id: 'cm2', topic: 'Numerical Methods', year: 'Mid-Term 2024', marks: 6,
      type: 'mcq', frequency: 'most',
      text: 'Which iterative method has quadratic rate of convergence?',
      options: ['Bisection Method', 'Regula-Falsi Method', 'Newton-Raphson Method', 'Secant Method'],
      correct: 2,
      explanation: 'Newton-Raphson has order of convergence = 2 (quadratic), making it the fastest among standard root-finding methods.'
    },
    {
      id: 'cm3', topic: 'Differential Equations', year: 'End-Term 2023', marks: 7,
      type: 'numerical', frequency: 'most',
      text: 'Solve dy/dx = 2x + 3 with y(0) = 1. Find y(2).',
      options: [], correct: -1,
      formula: 'y = x^2 + 3x + C. y(0)=1 => C=1. y(2) = 4 + 6 + 1 = 11',
      explanation: 'Integrate: y = x^2 + 3x + C. Apply IC: y(0)=1 => C=1. y(2) = 11.'
    },
    {
      id: 'cm4', topic: 'Fourier Series', year: 'Sessional 2023', marks: 5,
      type: 'theory', frequency: 'moderate',
      text: 'State the Dirichlet conditions for convergence of a Fourier series.',
      options: [], correct: -1,
      keywords: ['finite discontinuities', 'bounded', 'periodic', 'single-valued', 'finite maxima minima'],
      explanation: 'Dirichlet: f(x) must be periodic, bounded, single-valued, with finite discontinuities and finite maxima/minima in one period.'
    },
    {
      id: 'cm5', topic: 'Statistics', year: 'Mid-Term 2023', marks: 4,
      type: 'numerical', frequency: 'moderate',
      text: 'Find the mean and variance of: {4, 7, 13, 2}.',
      options: [], correct: -1,
      formula: 'Mean = (4+7+13+2)/4 = 6.5. Variance = [(4-6.5)^2+(7-6.5)^2+(13-6.5)^2+(2-6.5)^2]/4 = 17.25',
      explanation: 'Mean = 6.5. Variance = 17.25.'
    },
    {
      id: 'cm6', topic: 'Laplace Transforms', year: 'End-Term 2022', marks: 3,
      type: 'mcq', frequency: 'can-be',
      text: 'The Laplace transform of e^(at) is:',
      options: ['1/(s-a)', '1/(s+a)', 'a/(s^2+a^2)', 's/(s^2+a^2)'],
      correct: 0,
      explanation: 'L{e^(at)} = 1/(s-a) for s > a. Standard first-shifting result.'
    },
  ],

  'psuc': [
    {
      id: 'psuc1', topic: 'Pointers & Memory', year: 'End-Term 2023', marks: 8,
      type: 'mcq', frequency: 'most',
      text: 'What is sizeof(char*) on a 64-bit system?',
      options: ['1', '4', '8', 'Compiler dependent'],
      correct: 2,
      explanation: 'On 64-bit systems, all pointer types are 8 bytes regardless of what they point to.'
    },
    {
      id: 'psuc2', topic: 'Data Structures', year: 'Mid-Term 2024', marks: 6,
      type: 'mcq', frequency: 'most',
      text: 'Which data structure follows the Last In First Out (LIFO) order?',
      options: ['Queue', 'Stack', 'Binary Search Tree', 'Singly Linked List'],
      correct: 1,
      explanation: 'A stack follows LIFO -- elements are pushed and popped from the same end (top).'
    },
    {
      id: 'psuc3', topic: 'Functions & Recursion', year: 'End-Term 2024', marks: 7,
      type: 'theory', frequency: 'most',
      text: 'Explain recursion with an example. What is the role of base case and recursive case?',
      options: [], correct: -1,
      keywords: ['base case', 'recursive case', 'call stack', 'termination', 'self-call', 'factorial'],
      explanation: 'Recursion: a function calling itself. Base case stops infinite calls. Example: factorial(n) = n x factorial(n-1), base: factorial(0) = 1.'
    },
    {
      id: 'psuc4', topic: 'Arrays & Strings', year: 'Sessional 2023', marks: 5,
      type: 'numerical', frequency: 'moderate',
      text: 'Write logic to reverse string "HELLO" in-place using two pointers.',
      options: [], correct: -1,
      formula: 'left=0, right=n-1. While left<right: swap(str[left],str[right]), left++, right--. Result: "OLLEH"',
      explanation: 'Two-pointer technique: swap characters from both ends moving inward until pointers meet.'
    },
    {
      id: 'psuc5', topic: 'File Handling', year: 'Mid-Term 2023', marks: 3,
      type: 'mcq', frequency: 'can-be',
      text: 'Which file opening mode appends data without deleting existing content in C?',
      options: ['"w"', '"r"', '"a"', '"r+"'],
      correct: 2,
      explanation: '"a" (append mode) opens the file and positions the pointer at the end, preserving existing content.'
    },
    {
      id: 'psuc6', topic: 'Structures', year: 'End-Term 2022', marks: 2,
      type: 'theory', frequency: 'can-be',
      text: 'Differentiate between structure and union in C.',
      options: [], correct: -1,
      keywords: ['memory allocation', 'largest member', 'simultaneous access', 'separate storage', 'union shares'],
      explanation: 'Structure: separate memory for each member. Union: shared memory (size = largest member). In struct all members exist; in union only one active at a time.'
    },
  ],

  'digital-systems': [
    {
      id: 'ds1', topic: 'Boolean Algebra', year: 'End-Term 2024', marks: 8,
      type: 'mcq', frequency: 'most',
      text: "Simplify the expression: A + A'B",
      options: ['A + B', 'A', 'B', "A'B"],
      correct: 0,
      explanation: "By absorption law: A + A'B = A + B."
    },
    {
      id: 'ds2', topic: 'Karnaugh Maps', year: 'Mid-Term 2024', marks: 7,
      type: 'theory', frequency: 'most',
      text: "Explain K-Map simplification. What are don't care conditions and how are they used?",
      options: [], correct: -1,
      keywords: ['Karnaugh map', 'grouping', 'power of 2', "don't care", 'sum of products', 'minimization'],
      explanation: "K-Maps group adjacent 1s (1,2,4,8). Don't cares (X) can be 0 or 1 to maximize group size and simplify further."
    },
    {
      id: 'ds3', topic: 'Flip Flops', year: 'End-Term 2023', marks: 5,
      type: 'mcq', frequency: 'moderate',
      text: 'A JK flip-flop with J=1, K=1 is in state Q=0. After one clock pulse, Q becomes:',
      options: ['0', '1', 'Q (unchanged)', "Q' (toggle)"],
      correct: 3,
      explanation: "When J=K=1, the JK flip-flop toggles. Since Q=0, after toggle Q becomes 1 = Q'."
    },
    {
      id: 'ds4', topic: 'Number Systems', year: 'Sessional 2023', marks: 4,
      type: 'numerical', frequency: 'moderate',
      text: 'Convert (125) base 10 to binary, octal and hexadecimal.',
      options: [], correct: -1,
      formula: 'Binary: 1111101. Octal: 175. Hexadecimal: 7D',
      explanation: '(125)10 = (1111101)2 = (175)8 = (7D)16. Use repeated division method.'
    },
    {
      id: 'ds5', topic: 'Logic Gates', year: 'Mid-Term 2022', marks: 2,
      type: 'mcq', frequency: 'can-be',
      text: 'A NAND gate is called a universal gate because:',
      options: ['It is the fastest gate', 'Any logic function can be realised using only NAND gates', 'It uses the least power', 'It has the fewest transistors'],
      correct: 1,
      explanation: 'NAND (and NOR) are universal -- any logic function can be built using NAND gates alone.'
    },
  ],

  'aiml-machine-learning': [
    {
      id: 'ml1', topic: 'Supervised Learning', year: 'End-Term 2024', marks: 8,
      type: 'mcq', frequency: 'most',
      text: 'Which algorithm minimises mean squared error for regression?',
      options: ['k-NN', 'Decision Tree', 'Linear Regression', 'SVM'],
      correct: 2,
      explanation: 'Linear Regression directly minimises the sum of squared residuals (MSE) via ordinary least squares.'
    },
    {
      id: 'ml2', topic: 'Neural Networks', year: 'End-Term 2023', marks: 7,
      type: 'theory', frequency: 'most',
      text: 'Explain the backpropagation algorithm in neural networks. Why is it important?',
      options: [], correct: -1,
      keywords: ['gradient descent', 'chain rule', 'weight update', 'loss function', 'forward pass', 'backward pass', 'learning rate'],
      explanation: 'Backpropagation computes gradients of loss w.r.t. each weight using chain rule, enabling gradient descent to update weights and reduce loss.'
    },
    {
      id: 'ml3', topic: 'Classification', year: 'Mid-Term 2024', marks: 5,
      type: 'mcq', frequency: 'moderate',
      text: 'What does the Softmax function output?',
      options: ['A single probability', 'A probability distribution over classes', 'Binary 0 or 1', 'The maximum value'],
      correct: 1,
      explanation: 'Softmax converts a vector of real numbers into a probability distribution where all values sum to 1.'
    },
    {
      id: 'ml4', topic: 'Unsupervised Learning', year: 'Sessional 2023', marks: 5,
      type: 'theory', frequency: 'moderate',
      text: 'How does K-Means clustering work? State its limitations.',
      options: [], correct: -1,
      keywords: ['centroids', 'assign clusters', 'recalculate centroids', 'convergence', 'k choice', 'local minima', 'outliers'],
      explanation: 'K-Means: assign each point to nearest centroid, recalculate centroids, repeat until convergence. Sensitive to k, outliers, local minima.'
    },
    {
      id: 'ml5', topic: 'Model Evaluation', year: 'Mid-Term 2023', marks: 3,
      type: 'numerical', frequency: 'can-be',
      text: 'Classifier: TP=50, FP=10, FN=5, TN=35. Calculate Precision, Recall and F1 Score.',
      options: [], correct: -1,
      formula: 'Precision = 50/60 = 0.833. Recall = 50/55 = 0.909. F1 = 2xPxR/(P+R) = 0.869',
      explanation: 'Precision = TP/(TP+FP) = 0.833. Recall = TP/(TP+FN) = 0.909. F1 = harmonic mean = 0.869.'
    },
  ],

  'cse-os': [
    {
      id: 'os1', topic: 'Process Scheduling', year: 'End-Term 2024', marks: 8,
      type: 'mcq', frequency: 'most',
      text: 'Which scheduling algorithm can lead to starvation?',
      options: ['FCFS', 'SJF (non-preemptive)', 'Round Robin', 'HRRN'],
      correct: 1,
      explanation: 'SJF (Shortest Job First) can cause starvation for longer processes if shorter jobs keep arriving.'
    },
    {
      id: 'os2', topic: 'Deadlocks', year: 'End-Term 2023', marks: 7,
      type: 'theory', frequency: 'most',
      text: 'State the four necessary conditions for deadlock. How can each be prevented?',
      options: [], correct: -1,
      keywords: ['mutual exclusion', 'hold and wait', 'no preemption', 'circular wait', 'prevention', 'resource ordering'],
      explanation: 'Coffman conditions: Mutual exclusion, Hold and Wait, No Preemption, Circular Wait. Prevent by negating any one condition.'
    },
    {
      id: 'os3', topic: 'Memory Management', year: 'End-Term 2023', marks: 5,
      type: 'mcq', frequency: 'moderate',
      text: "Which page replacement algorithm is known as the optimal algorithm?",
      options: ['FIFO', 'LRU', "Optimal (Belady's)", 'Clock'],
      correct: 2,
      explanation: "Belady's Optimal Algorithm replaces the page that won't be used for the longest time in the future."
    },
    {
      id: 'os4', topic: 'Process Scheduling', year: 'Sessional 2023', marks: 4,
      type: 'numerical', frequency: 'moderate',
      text: 'P1(AT=0,BT=4), P2(AT=1,BT=3), P3(AT=2,BT=1). Calculate average waiting time using SJF non-preemptive.',
      options: [], correct: -1,
      formula: 'Order: P1(0-4), P3(4-5), P2(5-8). WT: P1=0, P3=2, P2=4. Avg WT = (0+2+4)/3 = 2 ms',
      explanation: 'SJF: P1 runs first (only process at t=0). At t=4: P3 has shorter BT. P2 last. Avg WT = 2ms.'
    },
    {
      id: 'os5', topic: 'File Systems', year: 'Mid-Term 2022', marks: 2,
      type: 'mcq', frequency: 'can-be',
      text: 'Which disk scheduling algorithm services requests in the order they arrive?',
      options: ['SSTF', 'SCAN', 'C-SCAN', 'FCFS'],
      correct: 3,
      explanation: 'FCFS (First Come First Served) disk scheduling services requests in arrival order.'
    },
  ],

  'bba-pom': [
    {
      id: 'bbapom1', topic: 'Management Process', year: 'End-Term 2024', marks: 6,
      type: 'mcq', frequency: 'most',
      text: 'Who is known as the Father of Scientific Management?',
      options: ['Henri Fayol', 'F.W. Taylor', 'Max Weber', 'Peter Drucker'],
      correct: 1,
      explanation: 'F.W. Taylor developed the principles of Scientific Management focusing on shop-floor efficiency.'
    },
    {
      id: 'bbapom2', topic: 'Planning', year: 'Sessional 1 2023', marks: 5,
      type: 'mcq', frequency: 'moderate',
      text: 'SWOT Analysis stands for:',
      options: ['Strengths, Weaknesses, Options, Threats', 'Strengths, Weaknesses, Opportunities, Threats', 'Smart, Wide, Open, Tested', 'Simple, Wise, Original, Timely'],
      correct: 1,
      explanation: 'SWOT stands for Strengths, Weaknesses, Opportunities, Threats.'
    },
    {
      id: 'bbapom3', topic: 'Motivation', year: 'End-Term 2023', marks: 7,
      type: 'theory', frequency: 'most',
      text: "Explain Maslow's Hierarchy of Needs. How is it relevant to management?",
      options: [], correct: -1,
      keywords: ['physiological', 'safety', 'social', 'esteem', 'self-actualization', 'hierarchy', 'motivation'],
      explanation: "Maslow's five levels (physiological, safety, social, esteem, self-actualization) help managers understand and satisfy employee needs progressively."
    },
    {
      id: 'bbapom4', topic: 'Controlling', year: 'Mid-Term 2023', marks: 3,
      type: 'theory', frequency: 'can-be',
      text: 'What is Management by Exception (MBE)?',
      options: [], correct: -1,
      keywords: ['exception', 'significant deviations', 'managers focus', 'routine', 'delegate'],
      explanation: 'MBE: managers focus only on significant deviations from standards, delegating routine matters to subordinates.'
    }
  ],

  'bba-fa': [
    {
      id: 'bbafa1', topic: 'Accounting Basics', year: 'End-Term 2024', marks: 6,
      type: 'mcq', frequency: 'most',
      text: 'Which accounting equation is correct?',
      options: ['Assets = Liabilities - Equity', 'Assets = Liabilities + Equity', 'Liabilities = Assets + Equity', 'Equity = Assets + Liabilities'],
      correct: 1,
      explanation: "The fundamental accounting equation is Assets = Liabilities + Owners' Equity."
    }
  ],

  'bcom-bl': [
    {
      id: 'bcombl1', topic: 'Contract Act', year: 'End-Term 2024', marks: 6,
      type: 'mcq', frequency: 'most',
      text: 'An agreement enforceable by law is a:',
      options: ['Proposal', 'Promise', 'Contract', 'Acceptance'],
      correct: 2,
      explanation: 'According to Section 2(h) of the Indian Contract Act, 1872, an agreement enforceable by law is a contract.'
    }
  ],

  'llb-con1': [
    {
      id: 'llbcon1', topic: 'Fundamental Rights', year: 'End-Term 2024', marks: 8,
      type: 'mcq', frequency: 'most',
      text: 'Which article of the Indian Constitution is known as the Heart and Soul of the Constitution?',
      options: ['Article 14', 'Article 19', 'Article 21', 'Article 32'],
      correct: 3,
      explanation: 'Dr. B.R. Ambedkar termed Article 32 (Right to Constitutional Remedies) as the Heart and Soul of the Constitution.'
    }
  ]
};
'@

$baseContent + "`r`n" + $questionsContent | Set-Content 'c:\Users\Admin\study-material\src\data\studyMaterial.ts' -Encoding UTF8
Write-Output "Done"
