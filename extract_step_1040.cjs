
const fs = require('fs');
const readline = require('readline');

const logFile = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\5aa150c2-ed89-4c52-b7fb-4e6d62847adf\\.system_generated\\logs\\transcript_full.jsonl';
const rl = readline.createInterface({ input: fs.createReadStream(logFile), crlfDelay: Infinity });

rl.on('line', (line) => {
    try {
        const obj = JSON.parse(line);
        if (obj.step_index === 1040) {
            console.log('Step 1040 found!');
            console.log('Full content:');
            console.log(obj.content);
            fs.writeFileSync('step_1040_full.txt', obj.content, 'utf8');
            console.log('Wrote step_1040_full.txt');
        }
    } catch (e) {}
});
