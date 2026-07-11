/**
 * fetch_imagekit_files.cjs
 * Fetches all files from ImageKit using their List Files API
 * and generates the complete studyMaterial data for physics and chemistry cycles.
 * 
 * ImageKit API docs: https://docs.imagekit.io/api-reference/media-api/list-and-search-files
 */

const https = require('https');
const fs = require('fs');

// ImageKit credentials from the user's account
// The endpoint is: https://ik.imagekit.io/tjp471xsxp
// We need to use the ImageKit API with privateKey to list files
// URL pattern: https://api.imagekit.io/v1/files?path=/1st year btech/...

// Since we don't have the private key, let's use the known working URLs from
// all_urls_from_steps.txt to build the correct data structure

const knownUrls = fs.readFileSync('all_urls_from_steps.txt', 'utf8')
  .split('\n')
  .filter(Boolean)
  .map(url => url.trim());

console.log('Total known URLs:', knownUrls.length);

// Organize by cycle > subject > type
const structure = {};

knownUrls.forEach(url => {
  // Remove the base URL and decode
  const path = decodeURIComponent(url.replace('https://ik.imagekit.io/tjp471xsxp/', ''));
  const parts = path.split('/');
  
  // Expected format: "1st year btech/{cycle}/{subject}/{study-material|pyqs}/{filename}"
  if (parts.length < 5) return;
  
  const yearFolder = parts[0]; // "1st year btech"
  const cycle = parts[1];      // "chemistry-cycle" or "physics-cycle"
  const subject = parts[2];    // subject folder
  const type = parts[3];       // "study-material" or "pyqs"
  const filename = parts.slice(4).join('/');
  
  if (!structure[cycle]) structure[cycle] = {};
  if (!structure[cycle][subject]) structure[cycle][subject] = { studyMaterials: [], pyqs: [] };
  
  const entry = { title: filename.replace(/\.[^.]+$/, ''), url, type: 'pdf' };
  
  // Detect actual file type
  if (filename.endsWith('.pptx')) entry.type = 'pptx';
  else if (filename.endsWith('.ppt')) entry.type = 'ppt';
  else if (filename.endsWith('.doc')) entry.type = 'doc';
  else if (filename.endsWith('.docx')) entry.type = 'docx';
  
  if (type === 'study-material') {
    structure[cycle][subject].studyMaterials.push(entry);
  } else if (type === 'pyqs') {
    structure[cycle][subject].pyqs.push(entry);
  }
});

console.log('\n=== STRUCTURE ===');
Object.keys(structure).forEach(cycle => {
  console.log(`\n${cycle}:`);
  Object.keys(structure[cycle]).forEach(subject => {
    const s = structure[cycle][subject];
    console.log(`  ${subject}: ${s.studyMaterials.length} study materials, ${s.pyqs.length} PYQs`);
  });
});

fs.writeFileSync('imagekit_structure.json', JSON.stringify(structure, null, 2));
console.log('\nSaved to imagekit_structure.json');
