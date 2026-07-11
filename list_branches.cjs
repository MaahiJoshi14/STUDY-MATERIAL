const fs=require('fs');
const c=fs.readFileSync('src/data/studyMaterial.ts','utf8');
const bStart=c.indexOf('export const branches');
const bSec=c.substring(bStart, bStart+100000);
// Find all objects at top level (indent=2 spaces)
const matches=[...bSec.matchAll(/\n  \{\r?\n    id: '([^']+)'/g)];
console.log('Top-level branch IDs:');
matches.forEach(m=>console.log(' ',m[1]));
