import fs from 'fs';
import path from 'path';
import os from 'os';

const SOURCE_FOLDER = path.join(os.homedir(), 'Desktop', 'study-material-resources');
const TARGET_FOLDERS = ['2nd year btech'];

function findAllFiles(dir, fileList = [], targetExts = ['.pdf']) {
  try {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
      const filePath = path.join(dir, file.name);
      const relativePath = path.relative(SOURCE_FOLDER, filePath);
      const inTargetFolder = TARGET_FOLDERS.some(target => 
        relativePath.startsWith(target)
      );
      if (file.isDirectory() && inTargetFolder) {
        findAllFiles(filePath, fileList, targetExts);
      } else if (file.isFile() && inTargetFolder) {
        const ext = path.extname(file.name).toLowerCase();
        if (targetExts.includes(ext)) {
          fileList.push(filePath);
        }
      }
    }
  } catch (error) {
    console.warn('⚠️ Could not read directory:', dir, ':', error.message);
  }
  return fileList;
}

const pdfFiles = findAllFiles(SOURCE_FOLDER);
console.log(`Total PDFs: ${pdfFiles.length}`);
