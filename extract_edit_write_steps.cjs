
const fs = require('fs');
const readline = require('readline');
const path = require('path');

const logFile = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\5aa150c2-ed89-4c52-b7fb-4e6d62847adf\\.system_generated\\logs\\transcript_full.jsonl';
const rl = readline.createInterface({ input: fs.createReadStream(logFile), crlfDelay: Infinity });

rl.on('line', (line) => {
    try {
        const obj = JSON.parse(line);
        if (
            (obj.type === 'WRITE_FILE' || obj.type === 'EDIT' || obj.type === 'MULTI_EDIT') &&
            obj.content &&
            obj.content.includes('studyMaterial.ts')
        ) {
            console.log('=== Step', obj.step_index, obj.type, '===');
            const filename = `${obj.type.toLowerCase()}_step_${obj.step_index}.txt`;
            fs.writeFileSync(filename, JSON.stringify(obj, null, 2), 'utf8');
            console.log('Wrote', filename);
        }
    } catch (e) {}
});
