
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'studyMaterial.ts');
const content = fs.readFileSync(filePath, 'utf8');
const matches = content.match(/https:\/\/ik\.imagekit\.io\/[^\s"'}\],]+/g);

if (matches) {
  const unique = new Set(matches.map(m => m.replace(/[}\],\s]+$/, '')));
  console.log(`Current studyMaterial.ts has ${unique.size} unique ImageKit URLs!`);
  console.log('');
  console.log('List of URLs:');
  Array.from(unique).sort().forEach((url, i) => console.log(`${i+1}. ${url}`));
} else {
  console.log('No ImageKit URLs found!');
}
