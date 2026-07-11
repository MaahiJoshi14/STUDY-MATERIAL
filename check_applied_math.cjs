const fs = require('fs');

const files = JSON.parse(fs.readFileSync('imagekit_files_list.json', 'utf8'));

const appliedMathFiles = files.filter(f => f.filePath.toLowerCase().includes('applied-mathematics'));

console.log('Applied Mathematics Files in ImageKit:');
appliedMathFiles.forEach(f => {
  console.log(`- ${f.filePath} (${f.url})`);
});
