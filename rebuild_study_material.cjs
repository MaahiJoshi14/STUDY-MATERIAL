
const fs = require('fs');
const path = require('path');

const dirPath = __dirname;
const files = fs.readdirSync(dirPath);

const allLines = {};

// Process all files starting with "step_" or "chunk_"
files.forEach(file => {
    if (!file.endsWith('.txt')) return;
    if (
        !file.startsWith('step_') &&
        !file.startsWith('chunk_') &&
        !file.startsWith('grep_') &&
        !file.startsWith('imagekit_') &&
        !file.startsWith('reconstructed_') &&
        !file.startsWith('full_')
    ) return;

    const content = fs.readFileSync(path.join(dirPath, file), 'utf8');

    // Try to extract lines in the format: <number>: <content>
    const lines = content.split('\n');
    lines.forEach(line => {
        // Line numbers can be like "613:" or "  613:" or "  613: ..." or "{\"LineNumber\":613,..."
        let match = line.match(/^\s*(\d+):\s*(.*)$/);
        if (match) {
            const lineNum = parseInt(match[1], 10);
            const lineContent = match[2];
            if (!allLines[lineNum]) {
                allLines[lineNum] = lineContent;
            }
            return;
        }

        // Also check for JSON lines like {"File":"...","LineNumber":...,"LineContent":"..."}
        match = line.match(/^\s*\{.*"LineNumber"\s*:\s*(\d+).*"LineContent"\s*:\s*"([^"]+)".*\}\s*,?\s*$/);
        if (match) {
            const lineNum = parseInt(match[1], 10);
            let lineContent = match[2];
            // unescape JSON escape sequences
            lineContent = lineContent.replace(/\\u0026/g, '&').replace(/\\u([0-9a-f]{4})/gi, (m, g) => String.fromCharCode(parseInt(g, 16)));
            if (!allLines[lineNum]) {
                allLines[lineNum] = lineContent;
            }
        }
    });
});

// Now collect all unique line numbers and sort them
const sortedLineNumbers = Object.keys(allLines).map(Number).sort((a, b) => a - b);
console.log('Total unique lines collected:', sortedLineNumbers.length);
console.log('Line range:', sortedLineNumbers[0], '-', sortedLineNumbers[sortedLineNumbers.length - 1]);

// Write the reconstructed studyMaterial.ts file
const reconstructedContent = sortedLineNumbers.map(lineNum => allLines[lineNum]).join('\n');
const outputPath = path.join(dirPath, 'rebuilt_studyMaterial.ts');
fs.writeFileSync(outputPath, reconstructedContent, 'utf8');
console.log('Wrote rebuilt_studyMaterial.ts');

// Now count ImageKit URLs in the rebuilt file!
const imagekitRegex = /https:\/\/ik\.imagekit\.io\/[^\s"'},]+/g;
const matches = reconstructedContent.match(imagekitRegex);
console.log('Total ImageKit URL matches:', matches ? matches.length : 0);
if (matches) {
    const uniqueUrls = [...new Set(matches)].sort();
    console.log('Unique ImageKit URLs:', uniqueUrls.length);
    fs.writeFileSync(path.join(dirPath, 'all_unique_imagekit_urls.txt'), uniqueUrls.join('\n'), 'utf8');
    console.log('Wrote all_unique_imagekit_urls.txt with', uniqueUrls.length, 'URLs');
}
