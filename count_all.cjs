
const fs = require('fs');
const path = require('path');

const dirPath = __dirname;
const files = fs.readdirSync(dirPath);

let totalMatches = 0;
const allUrls = [];

files.forEach(file => {
    if (file.endsWith('.txt')) {
        const filePath = path.join(dirPath, file);
        const content = fs.readFileSync(filePath, 'utf8');
        
        const imagekitUrlRegex = /https:\/\/ik\.imagekit\.io\/[^\s"',]+/g;
        const matches = content.match(imagekitUrlRegex);
        
        if (matches) {
            console.log(`Found ${matches.length} matches in ${file}`);
            totalMatches += matches.length;
            allUrls.push(...matches);
        }
    }
});

console.log(`\nTotal ImageKit URLs found across all .txt files: ${totalMatches}`);

const uniqueUrls = [...new Set(allUrls)];
console.log(`Unique ImageKit URLs: ${uniqueUrls.length}`);

console.log('\nAll Unique URLs:');
uniqueUrls.sort().forEach((url, index) => console.log(`${index + 1}. ${url}`));
