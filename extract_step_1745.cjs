const fs = require('fs');
const json = JSON.parse(fs.readFileSync('step_1745_tool_0.json', 'utf8'));
console.log('ReplacementContent length:', json.args.ReplacementContent.length);
fs.writeFileSync('step_1745_replacement.txt', json.args.ReplacementContent, 'utf8');
console.log('Wrote step_1745_replacement.txt');
