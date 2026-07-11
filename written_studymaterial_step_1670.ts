const fs = require('fs');
const readline = require('readline');

const logFile = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\5aa150c2-ed89-4c52-b7fb-4e6d62847adf\\.system_generated\\logs\\transcript_full.jsonl';

const rl = readline.createInterface({
  input: fs.createReadStream(logFile),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  try {
    const obj = JSON.parse(line);
    // Look for WRITE_FILE steps for studyMaterial.ts that contain imagekit URLs
    if (
      (obj.type === 'WRITE_FILE' || obj.type === 'RUN_COMMAND') &&
      obj.step_index >= 700 && obj.step_index <= 1100
    ) {
      // Check tool calls for CodeContent with imagekit
      if (obj.tool_calls) {
        obj.tool_calls.forEach(tc => {
          if (tc.name === 'write_to_file' && tc.args) {
            const targetFile = tc.args.TargetFile || '';
            const codeContent = tc.args.CodeContent || '';
            if (targetFile.includes('studyMaterial') && codeContent.includes('ik.imagekit.io')) {
              console.log(`Found WRITE_FILE step ${obj.step_index}, file: ${targetFile}, content length: ${codeContent.length}`);
              fs.writeFileSync('recovered_studyMaterial.ts', codeContent);
              console.log('Wrote recovered_studyMaterial.ts!');
            }
          }
          if (tc.name === 'replace_file_content' && tc.args) {
            const targetFile = tc.args.TargetFile || '';
            const code = (tc.args.ReplacementContent || tc.args.CodeContent || '');
            if (targetFile.includes('studyMaterial') && code.includes('ik.imagekit.io')) {
              console.log(`Found REPLACE step ${obj.step_index}, content length: ${code.length}`);
            }
          }
          if (tc.name === 'run_command' && tc.args && tc.args.CommandLine) {
            const cmd = tc.args.CommandLine;
            if (cmd.includes('studyMaterial') && cmd.includes('imagekit')) {
              console.log(`Found RUN_COMMAND step ${obj.step_index}:`, cmd.substring(0, 200));
            }
          }
        });
      }
    }
  } catch (e) {
    // ignore
  }
});

rl.on('close', () => {
  console.log('Done scanning for WRITE_FILE with imagekit in studyMaterial.ts');
});
