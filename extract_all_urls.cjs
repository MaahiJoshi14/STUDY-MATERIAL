
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const allFiles = fs.readdirSync(dir);
const stepFiles = allFiles.filter(f => f.startsWith('step_') && f.endsWith('.txt'));

const urlSet = new Set();

stepFiles.forEach(file => {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = content.match(/https:\/\/ik\.imagekit\.io\/[^\s"'}\],]+/g);
  if (matches) {
    matches.forEach(url => {
      // Clean up any trailing characters that aren't part of the URL
      const cleanUrl = url.replace(/[}\],\s]+$/, '');
      urlSet.add(cleanUrl);
    });
  }
});

const uniqueUrls = Array.from(urlSet).sort();

console.log(`Found ${uniqueUrls.length} unique ImageKit URLs!`);
console.log('');

uniqueUrls.forEach((url, index) => {
  console.log(`${index + 1}. ${url}`);
});

fs.writeFileSync(path.join(dir, 'all_urls_from_steps.txt'), uniqueUrls.join('\n'));
console.log('');
console.log(`Saved to all_urls_from_steps.txt!`);
