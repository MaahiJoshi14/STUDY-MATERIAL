const fs = require('fs');
const readline = require('readline');

const logFile = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\5aa150c2-ed89-4c52-b7fb-4e6d62847adf\\.system_generated\\logs\\transcript_full.jsonl';
const rl = readline.createInterface({ input: fs.createReadStream(logFile), crlfDelay: Infinity });

rl.on('line', (line) => {
  try {
    const obj = JSON.parse(line);
    if (obj.tool_calls) {
      obj.tool_calls.forEach((tc) => {
        if (tc.args && JSON.stringify(tc.args).includes('studyMaterial.ts')) {
          console.log(`Step ${obj.step_index} (${obj.type}): Tool ${tc.name}`);
          if (tc.name === 'write_to_file') {
            console.log(`  TargetFile: ${tc.args.TargetFile}`);
            console.log(`  Overwrite: ${tc.args.Overwrite}`);
            if (tc.args.CodeContent) {
              const len = tc.args.CodeContent.length;
              console.log(`  CodeContent length: ${len}`);
              const outName = `written_studymaterial_step_${obj.step_index}.ts`;
              fs.writeFileSync(outName, tc.args.CodeContent, 'utf8');
              console.log(`  SAVED full content to ${outName}`);
            }
          } else if (tc.name === 'replace_file_content' || tc.name === 'multi_replace_file_content') {
            console.log(`  Tool args keys: ${Object.keys(tc.args).join(', ')}`);
          }
          console.log('----------------------------------------------------');
        }
      });
    }
  } catch (e) {
    // ignore
  }
});

rl.on('close', () => {
  console.log('Finished searching tool calls.');
});
