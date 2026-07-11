const fs = require('fs');
const readline = require('readline');

const logFile = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\5aa150c2-ed89-4c52-b7fb-4e6d62847adf\\.system_generated\\logs\\transcript_full.jsonl';

const rl = readline.createInterface({
  input: fs.createReadStream(logFile),
  crlfDelay: Infinity
});

// Find ANY WRITE_FILE steps for studyMaterial.ts (all steps)
rl.on('line', (line) => {
  try {
    const obj = JSON.parse(line);
    if (obj.tool_calls) {
      obj.tool_calls.forEach(tc => {
        if (tc.name === 'write_to_file' || tc.name === 'replace_file_content' || tc.name === 'multi_replace_file_content') {
          const targetFile = (tc.args || {}).TargetFile || '';
          if (targetFile.includes('studyMaterial')) {
            const codeContent = tc.args.CodeContent || tc.args.ReplacementContent || '';
            console.log(`Step ${obj.step_index}, ${tc.name}, file: ${targetFile}, content length: ${codeContent.length}, hasImagekit: ${codeContent.includes('ik.imagekit.io')}`);
            if (codeContent.includes('ik.imagekit.io') && codeContent.length > 1000) {
              fs.writeFileSync(`REAL_studyMaterial_step${obj.step_index}.ts`, codeContent);
              console.log(`  --> Wrote REAL_studyMaterial_step${obj.step_index}.ts`);
            }
          }
        }
        // Also check PS1 scripts that wrote the data
        if (tc.name === 'write_to_file') {
          const targetFile = (tc.args || {}).TargetFile || '';
          const content = (tc.args || {}).CodeContent || '';
          if (content.includes('ik.imagekit.io') && content.length > 5000) {
            console.log(`Step ${obj.step_index} WRITE_FILE to ${targetFile} has imagekit, length: ${content.length}`);
            fs.writeFileSync(`imagekit_script_step${obj.step_index}.txt`, content);
            console.log(`  --> Wrote imagekit_script_step${obj.step_index}.txt`);
          }
        }
      });
    }
  } catch (e) {
    // ignore
  }
});

rl.on('close', () => {
  console.log('Done!');
});
