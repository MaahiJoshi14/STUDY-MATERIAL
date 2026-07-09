
const fs = require('fs');
const readline = require('readline');

const logFile = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\5aa150c2-ed89-4c52-b7fb-4e6d62847adf\\.system_generated\\logs\\transcript_full.jsonl';

const rl = readline.createInterface({
    input: fs.createReadStream(logFile),
    crlfDelay: Infinity
});

let lineNumber = 0;
let linesWithImageKit = 0;

rl.on('line', (line) => {
    lineNumber++;
    if (line.includes('ik.imagekit.io')) {
        linesWithImageKit++;
        console.log(`--- Line ${lineNumber} ---`);
        try {
            const obj = JSON.parse(line);
            console.log('Step index:', obj.step_index);
            console.log('Type:', obj.type);
            // if it has content, show first 1000 chars
            if (obj.content) {
                console.log('Content snippet:');
                console.log(obj.content.substring(0, 2000));
            }
        } catch (e) {
            console.log('Line (raw):', line);
        }
        console.log('---');
    }
});

rl.on('close', () => {
    console.log(`Total lines with ik.imagekit.io: ${linesWithImageKit}`);
});
