
import { PDFDocument, rgb, StandardFonts, degrees } from 'pdf-lib';
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

const NEW_WATERMARK = 'nearcampus.in';
const NEW_FOOTER = 'For more material and PYQs, checkout nearcampus.in website and NearCampus app on Playstore';

async function processPDF(pdfPath, index, total) {
  console.log(`[${index+1}/${total}] Processing: ${path.relative(SOURCE_FOLDER, pdfPath)}`);
  try {
    const pdfBytes = fs.readFileSync(pdfPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const pages = pdfDoc.getPages();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    for (const page of pages) {
      const { width, height } = page.getSize();

      page.drawText(NEW_WATERMARK, {
        x: width * 0.6,
        y: height * 0.7,
        size: 12,
        font,
        color: rgb(0.9, 0.9, 0.9),
        opacity: 0.1,
        rotate: degrees(-30),
      });
      page.drawText(NEW_WATERMARK, {
        x: width * 0.2,
        y: height * 0.3,
        size: 12,
        font,
        color: rgb(0.9, 0.9, 0.9),
        opacity: 0.1,
        rotate: degrees(-30),
      });
      page.drawText(NEW_WATERMARK, {
        x: width * 0.7,
        y: height * 0.4,
        size: 12,
        font,
        color: rgb(0.9, 0.9, 0.9),
        opacity: 0.1,
        rotate: degrees(-30),
      });
      page.drawText(NEW_FOOTER, {
        x: 45,
        y: 18,
        size: 8,
        font,
        color: rgb(0.3, 0.3, 0.3),
      });
    }

    const modifiedPdfBytes = await pdfDoc.save();
    
    try {
      fs.writeFileSync(pdfPath, modifiedPdfBytes);
      console.log(`✅ [${index+1}/${total}] Successfully wrote: ${path.relative(SOURCE_FOLDER, pdfPath)}`);
      return true;
    } catch (writeErr) {
      console.warn(`⚠️ [${index+1}/${total}] Direct write failed, trying temp approach: ${writeErr.message}`);
      const tempPath = pdfPath + '.tmp';
      fs.writeFileSync(tempPath, modifiedPdfBytes);
      fs.unlinkSync(pdfPath);
      fs.renameSync(tempPath, pdfPath);
      console.log(`✅ [${index+1}/${total}] Successfully wrote via temp: ${path.relative(SOURCE_FOLDER, pdfPath)}`);
      return true;
    }
    
  } catch (error) {
    console.error(`❌ [${index+1}/${total}] Failed: ${path.relative(SOURCE_FOLDER, pdfPath)}: ${error.message}`);
    return false;
  }
}

async function main() {
  const pdfFiles = findAllFiles(SOURCE_FOLDER).slice(0, 10); // First 10 files
  console.log('Processing first', pdfFiles.length, 'PDF files');
  let successCount = 0;
  
  for (let i=0; i < pdfFiles.length; i++) {
    const result = await processPDF(pdfFiles[i], i, pdfFiles.length);
    if (result) successCount++;
  }
  
  console.log('\n=== Final Results ===');
  console.log('✅ Success:', successCount);
  console.log('❌ Failed:', pdfFiles.length - successCount);
}

main().catch(console.error);
