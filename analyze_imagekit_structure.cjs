const fs = require('fs');

const files = JSON.parse(fs.readFileSync('imagekit_files_list.json', 'utf8'));
console.log('Total files from ImageKit:', files.length);

const structure = {};

files.forEach(f => {
  const path = f.filePath;
  // Expected: /1st year btech/{cycle}/{subject}/{type}/{filename}
  const parts = path.split('/').filter(Boolean);
  if (parts.length < 4) {
    // console.log('Skipping short path:', path);
    return;
  }
  
  const root = parts[0].toLowerCase();
  if (root !== '1st year btech') {
    // console.log('Skipping non-btech root:', path);
    return;
  }
  
  const cycle = parts[1].toLowerCase();
  const subject = parts[2].toLowerCase();
  const type = parts[3].toLowerCase(); // e.g. study-material, pyqs, experiments, etc.
  const filename = parts.slice(4).join('/');
  
  if (!structure[cycle]) structure[cycle] = {};
  if (!structure[cycle][subject]) structure[cycle][subject] = {};
  if (!structure[cycle][subject][type]) structure[cycle][subject][type] = [];
  
  structure[cycle][subject][type].push({
    name: filename,
    url: f.url
  });
});

console.log('\nCycles found in ImageKit:');
Object.keys(structure).forEach(cycle => {
  console.log(`\n=== Cycle: ${cycle} ===`);
  const subjects = Object.keys(structure[cycle]);
  console.log(`Subjects count: ${subjects.length}`);
  subjects.forEach(subject => {
    const folders = Object.keys(structure[cycle][subject]);
    console.log(`  Subject: ${subject}`);
    folders.forEach(folder => {
      console.log(`    - ${folder}: ${structure[cycle][subject][folder].length} files`);
    });
  });
});

fs.writeFileSync('imagekit_extracted_structure.json', JSON.stringify(structure, null, 2));
