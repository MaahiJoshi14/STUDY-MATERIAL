const fs = require('fs');
const readline = require('readline');

const logFile = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\5aa150c2-ed89-4c52-b7fb-4e6d62847adf\\.system_generated\\logs\\transcript_full.jsonl';

const rl = readline.createInterface({
  input: fs.createReadStream(logFile),
  crlfDelay: Infinity
});

// Find ALL view_file steps of studyMaterial.ts
// that show lines beyond 150 AND look like they could contain imagekit data
// We know the full file was 2110 lines
// The 150-line view showed chemistry-cycle subjects with imagekit up to line 150
// We need to find views of lines 150-2110

const allChunks = {};

rl.on('line', (line) => {
  try {
    const obj = JSON.parse(line);
    if (obj.type !== 'VIEW_FILE') return;
    if (!line.includes('studyMaterial.ts')) return;
    
    const content = obj.content || '';
    const lineMatch = content.match(/Showing lines (\d+) to (\d+)/);
    if (!lineMatch) return;
    
    const startLine = parseInt(lineMatch[1]);
    const endLine = parseInt(lineMatch[2]);
    
    // Extract actual file content (lines with number prefix)
    const lines = content.split('\n');
    const fileLines = [];
    lines.forEach(l => {
      const m = l.match(/^(\d+): (.*)/);
      if (m) {
        const lineNum = parseInt(m[1]);
        fileLines.push({ lineNum, content: m[2] });
      }
    });
    
    if (fileLines.length > 0) {
      allChunks[startLine] = fileLines;
      console.log(`Step ${obj.step_index}: lines ${startLine}-${endLine}, extracted ${fileLines.length} lines`);
    }
  } catch (e) {
    // ignore
  }
});

rl.on('close', () => {
  // Reconstruct the file
  // Get all line numbers and sort
  const allLines = {};
  Object.values(allChunks).forEach(chunk => {
    chunk.forEach(({ lineNum, content }) => {
      allLines[lineNum] = content;
    });
  });
  
  const sortedLineNums = Object.keys(allLines).map(Number).sort((a, b) => a - b);
  console.log(`\nTotal unique lines collected: ${sortedLineNums.length}`);
  
  if (sortedLineNums.length > 0) {
    const maxLine = sortedLineNums[sortedLineNums.length - 1];
    console.log(`Line range: ${sortedLineNums[0]} - ${maxLine}`);
    
    // Write reconstructed content
    const reconstructed = sortedLineNums.map(n => allLines[n]).join('\n');
    fs.writeFileSync('full_reconstructed.ts', reconstructed);
    console.log('Wrote full_reconstructed.ts');
  }
  
  console.log('Done!');
});
