
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'studyMaterial.ts');
const content = fs.readFileSync(filePath, 'utf8');

const imagekitUrlRegex = /https:\/\/ik\.imagekit\.io\/[^\s"',]+/g;
const matches = content.match(imagekitUrlRegex);

console.log(`Total ImageKit URLs found: ${matches ? matches.length : 0}`);

if (matches) {
    // Optional: Show first 10 to verify
    console.log('\nFirst 10 URLs:');
    matches.slice(0, 10).forEach((url, index) => console.log(`${index + 1}. ${url}`));
}
