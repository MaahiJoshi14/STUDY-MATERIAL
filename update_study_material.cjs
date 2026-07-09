const fs = require('fs');
const path = require('path');

// Read studyMaterial.ts
const studyMaterialPath = path.join(__dirname, 'src', 'data', 'studyMaterial.ts');
let studyMaterialContent = fs.readFileSync(studyMaterialPath, 'utf8');

// Base URL
const baseUrl = 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech';

// Subject mapping
const subjectsData = {
  'physics-cycle': {
    'computational-mathematics': {
      studyMaterials: [
        '1. QUESTION BANK_MODULE-01_SOLUTION.pdf',
        '2. MAS1002_Course Handout (12.09.2024).pdf',
        '2. QUESTION BANK_MODULE-02_SOLUTION.pdf',
        '3. Question Bank_Solution_Module_3.pdf',
        'CM_ Module-6_Notes&Solved_PYQs.pdf',
        'Module 1 (updated).pdf',
        'Module 2 (updated).pdf',
        'Module 3 (updated).pdf',
        'Module 4 (updated).pdf',
        'Module 5 (updated).pdf',
        'Module 6 (updated).pdf',
      ],
      pyqs: [
        'CM_ETE_Sem-I_2024-25.pdf',
        'CM_ETE_Sem-I_2025-26_QuestionsWithSolution.pdf',
        'CM_MTE_Re-sess_Sem-II_2025-26.pdf',
        'CM_MTE_Re-sess_Sem-I_2025-26.pdf',
        'CM_MTE_Sem-II_2025-26.pdf',
        'CM_MTE_Sem-I_2024-25.pdf',
        'CM_MTE_Sem-I_2025-26.pdf',
        'ETE_Sem-I_2024-25Solution & Marking scheme.pdf',
        'MA1002 ETE 2023-24 Sem-1 .pdf',
        'MA1002 ETE 2023-24 Sem-2 .pdf',
        'MAS1002 Solution ETE Set 3 (May 2025).pdf',
        'MTE QP_MA1002_Sem-2_2023-2024.pdf',
        'Solution MTE MAS1002 sem 1 2025.pdf',
        'Solution-MAS1002-Dec 2024.pdf',
      ],
    },
  },
  'chemistry-cycle': {
    'applied-mathematics': {
      studyMaterials: [
        'Applied Mathematics Unit 1.pdf',
        'Applied Mathematics Unit 2.pdf',
        'Applied Mathematics Unit 3.pdf',
        'Applied Mathematics Unit 4.pdf',
        'BMA1002 - Course Handout 2024-25.pdf',
        'Course Handout BMA1002.pdf',
        'Handwritten Notes - Differential Calculus (Unit 1 & 2).pdf',
        'Handwritten Notes - Integral Calculus (Unit 3 & 4).pdf',
        'Handwritten Notes - Linear Algebra.pdf',
        'Hints and Solutions Question Bank Module 1.pdf',
        'Hints and Solutions Question Bank Module 2.pdf',
        'Hints and Solutions Question Bank Module 3.pdf',
        'Hints and Solutions Question Bank Module 4.pdf',
        'Handwritten Notes - Differential Equations (Unit 5 & 6).pdf',
      ],
      pyqs: [
        'BMA1002-ETE-Sem-II-2025-26.pdf',
        'BMA1002-MTE-Sem-II-2025-26.pdf',
        'MA1001 2023-24 ETE Sem-1 .pdf',
        'MA1001 2023-24 ETE Sem-2 .pdf',
        'MA1001 2023-24 MTE Sem-1 .pdf',
        'MA1001 2023-24 MTE Sem-2 .pdf',
        'Question Bank Module-1.pdf',
        'Question Bank Module-2.pdf',
        'Question Bank Module-3.pdf',
        'Question Bank Module-4.pdf',
        'Solution BMA1002 Dec 2024.pdf',
        'Solution BMA1002 May 2025.pdf',
        'Solution MA1001 ETE 2024-25.pdf',
        'Solution MA1001 MTE Dec 2024.pdf',
        'Solution MA1001 MTE May 2025.pdf',
      ],
    },
    'basic-mechanical-engineering': {
      studyMaterials: [
        'BME ETE Questions Bank.pdf',
        'BME- MTE Question Bank.pdf',
        'BME-Question Bank.pdf',
        'BME1001_Module1.pdf',
        'BME1001_Module2.pdf',
        'BME1001_Module3.pdf',
        'BME1001_Module4.pdf',
        'BME1001_Module5.pdf',
        'BME1001_Module6.pdf',
        'Course Handout.pdf',
        'Handwritten Notes.pdf',
      ],
      pyqs: [
        'BME Dec 2024 Solution Set-1.pdf',
        'BME May 2025 Solution Set-1.pdf',
        'BME1001 ETE 2023-24 Sem-1 .pdf',
        'BME1001 ETE 2023-24 Sem-2 .pdf',
        'BME1001 MTE 2023-24 Sem-1 .pdf',
        'BME1001 MTE 2023-24 Sem-2 .pdf',
        'BME1001-ETE-Sem-I-2024-25.pdf',
        'BME1001-ETE-Sem-I-2025-26.pdf',
        'BME1001-MTE-Sem-I-2024-25.pdf',
        'BME1001-MTE-Sem-I-2025-26.pdf',
        'BME1001-MTE-Sem-I-2025-26_Solution Set-1.pdf',
      ],
    },
    'calculus-and-matrices': {
      studyMaterials: [
        'BMA1001 Course Handout 2024-25.pdf',
        'Course Handout - Calculus and Matrices (BMA1001).pdf',
        'Hints and Solutions - Question Bank - Module 1.pdf',
        'Hints and Solutions - Question Bank - Module 2.pdf',
        'Hints and Solutions - Question Bank - Module 3.pdf',
        'Hints and Solutions - Question Bank - Module 4.pdf',
        'Hints and Solutions - Question Bank - Module 5.pdf',
        'Hints and Solutions - Question Bank - Module 6.pdf',
        'Question Bank - Module 1.pdf',
        'Question Bank - Module 2.pdf',
        'Question Bank - Module 3.pdf',
        'Question Bank - Module 4.pdf',
        'Question Bank - Module 5.pdf',
        'Question Bank - Module 6.pdf',
      ],
      pyqs: [
        'BMA1001 - MTE - Solution Set 1 - Dec 2024.pdf',
        'BMA1001 ETE-Sem-I-2025-26.pdf',
        'BMA1001 MTE-Sem-I-2024-25.pdf',
        'BMA1001 MTE-Sem-I-2025-26.pdf',
        'ETE 2023-24 Sem-1 - BMA1001.pdf',
        'ETE 2023-24 Sem-2 - BMA1001.pdf',
        'MTE 2023-24 Sem-1 - BMA1001.pdf',
        'MTE 2023-24 Sem-2 - BMA1001.pdf',
        'Solution - BMA1001 - ETE 2025-26.pdf',
        'Solution - BMA1001 - ETE Sem-1 2024-25.pdf',
        'Solution - BMA1001 - MTE Sem-1 2024-25.pdf',
      ],
    },
    'universal-human-values': {
      studyMaterials: [
        'UHV Module 2.pdf',
        'UHV Module 3.pdf',
        'UHV Module 4.pdf',
        'UHV Module-1 Notes by Dr. B.K.Panda.pdf',
        'UHV- Course Handout (2024-2025).pdf',
        'UHV-Module-1.pdf',
        'UHV-Module-5.pdf',
      ],
      pyqs: [
        'UHV-ETE-Sem-1-2023-24.pdf',
        'UHV-ETE-Sem-1-2024-25.pdf',
        'UHV-ETE-Sem-1-2025-26.pdf',
        'UHV-MTE-Sem-1-2023-24.pdf',
        'UHV-MTE-Sem-1-2024-25.pdf',
        'UHV-MTE-Sem-1-2025-26.pdf',
      ],
    },
    'psuc': {
      studyMaterials: [
        'Case Study Problems.pdf',
        'CS1001_Course Handout.pdf',
        'CSES1001 - Course Handout.pdf',
        'Flow Chart & Pseudo code.pdf',
        'Flowcharts PPT.pdf',
        'Introduction to Computer.pptx',
        'Programming in C - Theory Notes.pdf',
        'Question Bank Module 1.pdf',
        'Question Bank Module 2.pdf',
        'Question Bank Module 3.pdf',
        'Question Bank Module 4.pdf',
        'Question Bank Module 5.pdf',
        'Question Bank Module 6.pdf',
        'CSES1001-Lecture Slides-Module-1.pdf',
        'CSES1001-Lecture Slides-Module-2.pdf',
        'CSES1001-Lecture Slides-Module-3.pdf',
        'CSES1001-Lecture Slides-Module-4.pdf',
        'CSES1001-Lecture Slides-Module-5.pdf',
        'CSES1001-Lecture Slides-Module-6.pdf',
      ],
      pyqs: [
        'CSES1001 ETE Solution Dec 2024 Set-1.pdf',
        'CSES1001 ETE-Sem-I-2024-25.pdf',
        'CSES1001 ETE-Sem-I-2025-26.pdf',
        'CSES1001 MTE Solution Dec 2024 Set-1.pdf',
        'CSES1001 MTE Solution May 2025 Set-1.pdf',
        'CSES1001 MTE-Sem-I-2024-25.pdf',
        'CSES1001 MTE-Sem-I-2025-26.pdf',
        'CS1001 ETE 2023-24 Sem-1.pdf',
        'CS1001 ETE 2023-24 Sem-2.pdf',
        'CS1001 MTE 2023-24 Sem-1.pdf',
        'CS1001 MTE 2023-24 Sem-2.pdf',
      ],
    },
  },
};

// Function to encode URL parts
const encodeUrlPart = (part) => encodeURIComponent(part);

// Update studyMaterialContent
for (const cycleId in subjectsData) {
  const cycleSubjects = subjectsData[cycleId];
  for (const subjectId in cycleSubjects) {
    const subject = cycleSubjects[subjectId];
    
    // Find subject in content
    const subjectPattern = new RegExp(`id:\\s*'${subjectId}'[\\s\\S]*?studyMaterials:\\s*\\[([\\s\\S]*?)\\][\\s\\S]*?pyqs:\\s*\\[([\\s\\S]*?)\\]`);
    const match = studyMaterialContent.match(subjectPattern);
    
    if (match) {
      // Create studyMaterials array
      const studyMaterialsArray = subject.studyMaterials.map(file => {
        const encodedFile = encodeURIComponent(file);
        return `{ title: '${file.replace('.pdf', '')}', url: '${baseUrl}/${cycleId}/${subjectId}/study-material/${encodedFile}', type: 'pdf' }`;
      }).join(',\n          ');
      
      // Create pyqs array
      const pyqsArray = subject.pyqs.map(file => {
        const encodedFile = encodeURIComponent(file);
        return `{ title: '${file.replace('.pdf', '')}', url: '${baseUrl}/${cycleId}/${subjectId}/pyqs/${encodedFile}', type: 'pdf' }`;
      }).join(',\n          ');
      
      // Calculate total resources
      const resourceCount = subject.studyMaterials.length + subject.pyqs.length;
      
      // Replace studyMaterials and pyqs
      let replacement = `id: '${subjectId}'`;
      const resourceCountPattern = new RegExp(`resourceCount:\\s*\\d+`);
      studyMaterialContent = studyMaterialContent.replace(resourceCountPattern, `resourceCount: ${resourceCount}`);
      
      const studyMaterialsPattern = new RegExp(`studyMaterials:\\s*\\[([\\s\\S]*?)\\]`);
      studyMaterialContent = studyMaterialContent.replace(studyMaterialsPattern, `studyMaterials: [\n          ${studyMaterialsArray}\n        ]`);
      
      const pyqsPattern = new RegExp(`pyqs:\\s*\\[([\\s\\S]*?)\\]`);
      studyMaterialContent = studyMaterialContent.replace(pyqsPattern, `pyqs: [\n          ${pyqsArray}\n        ]`);
      
      console.log(`Updated ${subjectId} in ${cycleId}`);
    } else {
      console.log(`Subject ${subjectId} not found in ${cycleId}`);
    }
  }
}

// Write back to studyMaterial.ts
fs.writeFileSync(studyMaterialPath, studyMaterialContent, 'utf8');

console.log('Successfully updated studyMaterial.ts!');
