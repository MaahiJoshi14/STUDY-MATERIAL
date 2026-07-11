const fs = require('fs');
const readline = require('readline');

const logFile = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\5aa150c2-ed89-4c52-b7fb-4e6d62847adf\\.system_generated\\logs\\transcript_full.jsonl';

const rl = readline.createInterface({
  input: fs.createReadStream(logFile),
  crlfDelay: Infinity
});

// We want to find the VIEW_FILE step that viewed studyMaterial.ts and had the most lines
// Let's collect all steps that contain ik.imagekit.io and write their content
let found = false;

rl.on('line', (line) => {
  try {
    const obj = JSON.parse(line);
    // Look for WRITE_FILE step types that wrote studyMaterial.ts content
    // OR look for any step where the full studyMaterial.ts content was written
    if (
      (obj.type === 'WRITE_FILE' || obj.type === 'RUN_COMMAND') &&
      obj.content && line.includes('ik.imagekit.io') && line.includes('studyMaterial')
    ) {
      console.log('--- FOUND WRITE in STEP', obj.step_index, '---');
      fs.writeFileSync('step_write_' + obj.step_index + '.txt', obj.content || '');
    }
    // Also look for the full script content that was written with all the imagekit URLs
    if (obj.step_index >= 1000 && obj.step_index <= 1100 && line.includes('ik.imagekit.io')) {
      if (!found) {
        found = true;
        console.log('--- MAIN IMAGEKIT STEP:', obj.step_index, 'TYPE:', obj.type, '---');
        // write the full content
        const content = obj.content || '';
        fs.writeFileSync('imagekit_step_' + obj.step_index + '.txt', content);
        console.log('Wrote to imagekit_step_' + obj.step_index + '.txt, length:', content.length);
      }
    }
  } catch (e) {
    // ignore parse errors
  }
});

rl.on('close', () => {
  console.log('Done scanning transcript');
});
