
const fs = require('fs');

const filePath = 'full_reconstructed.ts';
const content = fs.readFileSync(filePath, 'utf8');

const imagekitUrlRegex = /https:\/\/ik\.imagekit\.io\/[^\s"',]+/g;
const matches = content.match(imagekitUrlRegex);

console.log(`Total ImageKit URLs found in full_reconstructed.ts: ${matches ? matches.length : 0}`);

if (matches) {
    const uniqueMatches = [...new Set(matches)];
    console.log(`Unique ImageKit URLs: ${uniqueMatches.length}`);
    console.log('\nAll Unique URLs:');
    uniqueMatches.forEach((url, index) => console.log(`${index + 1}. ${url}`));
}
