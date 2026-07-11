const fs = require('fs');
const readline = require('readline');

const logFile = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\5aa150c2-ed89-4c52-b7fb-4e6d62847adf\\.system_generated\\logs\\transcript_full.jsonl';
const rl = readline.createInterface({ input: fs.createReadStream(logFile), crlfDelay: Infinity });

const targetSteps = [1743, 1745];

rl.on('line', (line) => {
  try {
    const obj = JSON.parse(line);
    if (targetSteps.includes(obj.step_index)) {
      console.log(`=== Step ${obj.step_index} (${obj.type}) ===`);
      if (obj.tool_calls) {
        obj.tool_calls.forEach((tc, idx) => {
          console.log(`Tool call ${idx}: ${tc.name}`);
          fs.writeFileSync(`step_${obj.step_index}_tool_${idx}.json`, JSON.stringify(tc, null, 2), 'utf8');
          console.log(`  Saved to step_${obj.step_index}_tool_${idx}.json`);
        });
      }
    }
  } catch (e) {
    // ignore
  }
});

rl.on('close', () => {
  console.log('Finished extracting step details.');
});
