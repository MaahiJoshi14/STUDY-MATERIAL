
const fs = require('fs');
const readline = require('readline');

const logFile = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\5aa150c2-ed89-4c52-b7fb-4e6d62847adf\\.system_generated\\logs\\transcript_full.jsonl';
const rl = readline.createInterface({ input: fs.createReadStream(logFile), crlfDelay: Infinity });

rl.on('line', (line) => {
    try {
        const obj = JSON.parse(line);
        const targetPath = 'src/data/studyMaterial.ts';
        if (
            (obj.file_path && obj.file_path.includes(targetPath)) ||
            (obj.filePath && obj.filePath.includes(targetPath)) ||
            (obj.content && obj.content.includes(targetPath))
        ) {
            console.log('=== Step', obj.step_index, obj.type, '===');
            const filename = `step_${obj.step_index}_${obj.type}.txt`;
            fs.writeFileSync(filename, JSON.stringify(obj, null, 2), 'utf8');
            console.log('Wrote', filename);
        }
    } catch (e) {}
});
