
const fs = require('fs');
const readline = require('readline');
const path = require('path');

const logFile = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\5aa150c2-ed89-4c52-b7fb-4e6d62847adf\\.system_generated\\logs\\transcript_full.jsonl';

const rl = readline.createInterface({
    input: fs.createReadStream(logFile),
    crlfDelay: Infinity
});

const allFileLines = {}; // key: line number (number), value: line content
let stepsWithStudyMaterial = 0;

rl.on('line', (line) => {
    try {
        const obj = JSON.parse(line);
        if (obj.type !== 'VIEW_FILE') return;
        
        if (!obj.content || typeof obj.content !== 'string') return;
        if (!obj.content.includes('studyMaterial.ts')) return;
        
        stepsWithStudyMaterial++;

        const content = obj.content;
        
        // Extract actual content lines (like "<num>: <content>")
        const lines = content.split('\n');
        
        for (const l of lines) {
            const match = l.match(/^(\d+): (.*)$/);
            if (match) {
                const lineNum = parseInt(match[1], 10);
                const lineContent = match[2];
                allFileLines[lineNum] = lineContent;
            }
        }
        
    } catch (e) {
        // ignore invalid JSON lines, if any
    }
});

rl.on('close', () => {
    console.log(`Processed ${stepsWithStudyMaterial} VIEW_FILE steps for studyMaterial.ts`);
    console.log(`Collected ${Object.keys(allFileLines).length} unique file lines`);
    
    if (Object.keys(allFileLines).length > 0) {
        // Write reconstructed file with all collected lines
        const sortedLineNumbers = Object.keys(allFileLines).map(Number).sort((a, b) => a - b);
        const maxLine = sortedLineNumbers[sortedLineNumbers.length - 1];
        const minLine = sortedLineNumbers[0];
        console.log(`Lines range: ${minLine} to ${maxLine}`);
        
        const reconstructedContent = sortedLineNumbers.map(num => allFileLines[num]).join('\n');
        const outputPath = path.join(__dirname, 'full_studymaterial_reconstructed.ts');
        fs.writeFileSync(outputPath, reconstructedContent, 'utf8');
        
        // Now count ImageKit URLs in this reconstructed content
        const imagekitUrlRegex = /https:\/\/ik\.imagekit\.io\/[^\s"',]+/g;
        const matches = reconstructedContent.match(imagekitUrlRegex);
        console.log(`\n--- ImageKit URL Count ---`);
        if (matches) {
            const uniqueMatches = [...new Set(matches)].sort();
            console.log(`Total matches: ${matches.length}`);
            console.log(`Unique matches: ${uniqueMatches.length}`);
            console.log(`\nAll unique ImageKit URLs (sorted):`);
            uniqueMatches.forEach((url, index) => console.log(`${index + 1}. ${url}`));
            
            // Also write unique URLs to a file
            fs.writeFileSync(path.join(__dirname, 'unique_imagekit_urls.txt'), uniqueMatches.join('\n'), 'utf8');
            console.log('\nWrote unique_imagekit_urls.txt and full_studymaterial_reconstructed.ts!');
        } else {
            console.log('No ImageKit URLs found in reconstructed content!');
        }
    } else {
        console.log('No studyMaterial.ts content found in transcript_full.jsonl!');
    }
});
