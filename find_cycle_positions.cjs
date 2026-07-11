const fs = require('fs');
const content = fs.readFileSync('src/data/studyMaterial.ts', 'utf8');

// Find where chemistry-cycle starts
const chemStart = content.indexOf("id: 'chemistry-cycle'");
console.log("chemistry-cycle id found at char:", chemStart);

const linesBefore = content.substring(0, chemStart).split('\n').length;
console.log('Line number of chemistry-cycle:', linesBefore);

// Find where physics-cycle ends / chemistry starts
const physStart = content.indexOf("id: 'physics-cycle'");
console.log("physics-cycle id found at char:", physStart);
console.log("physics-cycle line:", content.substring(0, physStart).split('\n').length);

// Count total subjects in physics cycle
const physSection = content.substring(physStart, chemStart);
const subjectMatches = physSection.match(/id: '[^']+'/g);
console.log("\nSubject IDs found in physics section:");
subjectMatches.forEach(m => console.log(" ", m));
