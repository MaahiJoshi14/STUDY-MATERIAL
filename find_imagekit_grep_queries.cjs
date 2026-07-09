
const fs = require('fs');
const readline = require('readline');

const logFile = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\5aa150c2-ed89-4c52-b7fb-4e6d62847adf\\.system_generated\\logs\\transcript_full.jsonl';
const rl = readline.createInterface({ input: fs.createReadStream(logFile), crlfDelay: Infinity });

rl.on('line', (line) => {
    try {
        const obj = JSON.parse(line);
        if (obj.type === 'GREP_SEARCH') {
            if (
                (obj.query && obj.query.toLowerCase().includes('imagekit')) ||
                (obj.content && obj.content.toLowerCase().includes('imagekit'))
            ) {
                console.log('=== Step', obj.step_index, '===');
                console.log('Query:', obj.query);
                console.log('Content:', obj.content);
                fs.writeFileSync('grep_all_step_' + obj.step_index + '.txt', JSON.stringify(obj, null, 2), 'utf8');
            }
        }
    } catch (e) {}
});
