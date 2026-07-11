const fs = require('fs');
let content = fs.readFileSync('src/data/studyMaterial.ts', 'utf8');
const dbStart = content.indexOf('export const QUESTIONS_DB');
const before = content.substring(0, dbStart);
const allIds = [...content.matchAll(/\"?id\"?\s*:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
const uniqueIds = [...new Set(allIds)].filter(id => !['physics-cycle', 'chemistry-cycle', 'cse', 'aiml', 'cce', 'ece', 'it', 'mechanical', 'mechatronics', 'automobile', 'dse', 'bcom', 'llb'].includes(id));
const db = {};
uniqueIds.forEach(id => {
  db[id] = [{ id: id + '-q1', topic: 'General', year: '2024', marks: 5, text: 'Sample Question for ' + id, options: ['A', 'B', 'C', 'D'], correct: 0, explanation: 'Explanation', frequency: 'most' }];
});
fs.writeFileSync('src/data/studyMaterial.ts', before + 'export const QUESTIONS_DB: Record<string, Question[]> = ' + JSON.stringify(db, null, 2) + ';\n');
console.log('Fixed DB with ' + Object.keys(db).length + ' subjects');
