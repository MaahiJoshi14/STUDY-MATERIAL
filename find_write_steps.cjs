
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
        if (obj.type === 'WRITE_FILE') {
            console.log('WRITE_FILE step found! Step index:', obj.step_index);
            if (obj.content) {
                console.log('Content includes:');
                console.log(obj.content.substring(0, 500)); // first 500 chars
                if (obj.content.includes('studyMaterial.ts')) {
                    console.log('THIS WRITE_FILE STEP IS FOR studyMaterial.ts!');
                    console.log('Writing full content to write_step_' + obj.step_index + '.txt');
                    fs.writeFileSync('write_step_' + obj.step_index + '.txt', obj.content, 'utf8');
                }
                console.log('---');
            }
        }
    } catch (e) {
        // ignore errors
    }
});

rl.on('close', () => {
    console.log('Done checking WRITE_FILE steps!');
});
