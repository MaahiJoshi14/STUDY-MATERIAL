const fs = require('fs');
const readline = require('readline');

const logFile = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\5aa150c2-ed89-4c52-b7fb-4e6d62847adf\\.system_generated\\logs\\transcript_full.jsonl';

const rl = readline.createInterface({
  input: fs.createReadStream(logFile),
  crlfDelay: Infinity
});

// Collect all VIEW_FILE steps of studyMaterial.ts that have imagekit content
// Each step shows lines N to M of the file
const chunks = [];

rl.on('line', (line) => {
  try {
    const obj = JSON.parse(line);
    if (
      obj.type === 'VIEW_FILE' &&
      obj.content &&
      line.includes('studyMaterial.ts') &&
      line.includes('ik.imagekit.io')
    ) {
      const content = obj.content;
      // Parse the "Showing lines X to Y" line
      const lineMatch = content.match(/Showing lines (\d+) to (\d+)/);
      if (lineMatch) {
        const startLine = parseInt(lineMatch[1]);
        const endLine = parseInt(lineMatch[2]);
        chunks.push({ step: obj.step_index, startLine, endLine, content });
        console.log(`Step ${obj.step_index}: lines ${startLine}-${endLine}`);
      }
    }
  } catch (e) {
    // ignore
  }
});

rl.on('close', () => {
  if (chunks.length === 0) {
    console.log('No chunks found!');
    return;
  }
  
  // Sort by startLine
  chunks.sort((a, b) => a.startLine - b.startLine);
  
  // Write all chunk contents to separate files
  chunks.forEach((chunk) => {
    const filename = `studymaterial_chunk_${chunk.startLine}_${chunk.endLine}.txt`;
    fs.writeFileSync(filename, chunk.content);
    console.log(`Wrote ${filename}`);
  });
  
  console.log(`\nTotal chunks: ${chunks.length}`);
  console.log('Done!');
});
