
const fs = require('fs');
const readline = require('readline');

const logFile = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\5aa150c2-ed89-4c52-b7fb-4e6d62847adf\\.system_generated\\logs\\transcript_full.jsonl';
const rl = readline.createInterface({ input: fs.createReadStream(logFile), crlfDelay: Infinity });

const allGrepResults = [];

rl.on('line', (line) => {
    try {
        const obj = JSON.parse(line);
        if (obj.type === 'GREP_SEARCH' && obj.content && obj.content.includes('ik.imagekit.io')) {
            console.log('Found GREP_SEARCH at step', obj.step_index);
            allGrepResults.push({ stepIndex: obj.step_index, content: obj.content });
        }
    } catch (e) {}
});

rl.on('close', () => {
    console.log('Total GREP_SEARCH steps with ik.imagekit.io:', allGrepResults.length);
    allGrepResults.forEach((grep, index) => {
        const filename = `grep_step_${grep.stepIndex}.txt`;
        fs.writeFileSync(filename, grep.content, 'utf8');
        console.log(`Wrote ${filename}`);
    });

    // Now parse all grep results to collect unique lines
    const allLines = {};
    allGrepResults.forEach(grep => {
        const content = grep.content;
        // split content into lines, each line is like {"File":"...", "LineNumber":..., "LineContent":"..."}
        const entries = content.split('\n').filter(l => l.trim().startsWith('{'));
        entries.forEach(entry => {
            try {
                const parsed = JSON.parse(entry);
                allLines[parsed.LineNumber] = parsed.LineContent;
            } catch (e) {}
        });
    });

    // Write all unique lines to a file
    const sortedLineNumbers = Object.keys(allLines).map(Number).sort((a, b) => a - b);
    const allImageKitLines = sortedLineNumbers.map(lineNum => `${lineNum}: ${allLines[lineNum]}`).join('\n');
    fs.writeFileSync('all_imagekit_lines.txt', allImageKitLines, 'utf8');
    console.log('Wrote all_imagekit_lines.txt with', sortedLineNumbers.length, 'lines');
});
