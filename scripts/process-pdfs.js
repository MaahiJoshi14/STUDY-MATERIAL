#!/usr/bin/env node
import { PDFDocument, rgb, StandardFonts, degrees } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import os from 'os';

// Configuration
const SOURCE_FOLDER = path.join(os.homedir(), 'Desktop', 'study-material-resources');
const BACKUP_FOLDER = path.join(os.homedir(), 'Desktop', 'study-material-resources-backup');
const TARGET_FOLDERS = ['2nd year btech']; // ONLY PROCESS 2ND YEAR!

// New watermark and footer
const NEW_WATERMARK = 'nearcampus.in';
const NEW_FOOTER = 'For more material and PYQs, checkout nearcampus.in website and NearCampus app on Playstore';

/**
 * Create a backup of the source folder (if not already exists)
 */
function createBackup() {
  if (fs.existsSync(BACKUP_FOLDER)) {
    console.log('✅ Backup folder already exists, skipping backup creation.');
    return;
  }

  console.log('📦 Creating backup at', BACKUP_FOLDER);
  copyDirectorySync(SOURCE_FOLDER, BACKUP_FOLDER);
  console.log('✅ Backup completed.');
}

/**
 * Recursively copy a directory
 */
function copyDirectorySync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectorySync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

/**
 * Find all PDF files in target directory tree
 */
function findAllFiles(dir, fileList = [], targetExts = ['.pdf']) {
  try {
    const files = fs.readdirSync(dir, { withFileTypes: true });

    for (const file of files) {
      const filePath = path.join(dir, file.name);
      const relativePath = path.relative(SOURCE_FOLDER, filePath);
      
      // Only process files in our target folders (2nd year btech only)
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

/**
 * Check if a file is accessible for writing
 */
function isFileWritable(filePath) {
  try {
    fs.accessSync(filePath, fs.constants.W_OK);
    return true;
  } catch {
    return false;
  }
}

/**
 * Process a single PDF file - add new clean watermarks and footer
 */
let errorLogCount = 0;
async function processPDF(pdfPath) {
  try {
    const pdfBytes = fs.readFileSync(pdfPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const pages = pdfDoc.getPages();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    for (const page of pages) {
      const { width, height } = page.getSize();

      // Add 3-4 subtle, diagonal, light watermarks (NO WHITE RECTANGLES!)
      // 1. Top-right
      page.drawText(NEW_WATERMARK, {
        x: width * 0.6,
        y: height * 0.7,
        size: 12,
        font,
        color: rgb(0.9, 0.9, 0.9),
        opacity: 0.1,
        rotate: degrees(-30),
      });

      // 2. Bottom-left
      page.drawText(NEW_WATERMARK, {
        x: width * 0.2,
        y: height * 0.3,
        size: 12,
        font,
        color: rgb(0.9, 0.9, 0.9),
        opacity: 0.1,
        rotate: degrees(-30),
      });

      // 3. Middle-right
      page.drawText(NEW_WATERMARK, {
        x: width * 0.7,
        y: height * 0.4,
        size: 12,
        font,
        color: rgb(0.9, 0.9, 0.9),
        opacity: 0.1,
        rotate: degrees(-30),
      });

      // Add clean new footer (on top of existing content, no covering)
      page.drawText(NEW_FOOTER, {
        x: 45,
        y: 18,
        size: 8,
        font,
        color: rgb(0.3, 0.3, 0.3),
      });
    }

    const modifiedPdfBytes = await pdfDoc.save();
    
    // Try to write, if fails try temp file approach
    try {
      fs.writeFileSync(pdfPath, modifiedPdfBytes);
    } catch (writeErr) {
      // If write fails, try temp file method
      const tempPath = pdfPath + '.tmp';
      fs.writeFileSync(tempPath, modifiedPdfBytes);
      fs.unlinkSync(pdfPath);
      fs.renameSync(tempPath, pdfPath);
    }
    
    return true;
  } catch (error) {
    if (errorLogCount < 10) {
      console.error('❌ Error processing', path.relative(SOURCE_FOLDER, pdfPath), ':', error.message);
      errorLogCount++;
    }
    return false;
  }
}

/**
 * Main function
 */
async function main() {
  errorLogCount = 0;
  if (!fs.existsSync(SOURCE_FOLDER)) {
    console.error('❌ Error: Source folder not found at', SOURCE_FOLDER);
    process.exit(1);
  }

  console.log('🚀 Starting 2nd year btech PDF processing...');
  console.log('📂 Source folder:', SOURCE_FOLDER);
  console.log('🎯 Target folder:', TARGET_FOLDERS.join(', '));

  // Step 1: Ensure backup exists
  createBackup();

  // Step 2: Find all PDFs in 2nd year btech
  const pdfFiles = findAllFiles(SOURCE_FOLDER, [], ['.pdf']);
  console.log(`\n📄 Found ${pdfFiles.length} PDF files to process.`);

  if (pdfFiles.length === 0) {
    console.log('⚠️ No PDFs found in target folder!');
    return;
  }

  // Step 3: Process each PDF
  const filesToProcess = pdfFiles;
  let successCount = 0;
  let failCount = 0;
  let skipCount = 0;

  console.log(`\n🔧 Processing ${filesToProcess.length} files...\n`);
  for (let i = 0; i < filesToProcess.length; i++) {
    const pdfFile = filesToProcess[i];
    const result = await processPDF(pdfFile);
    if (result === true) {
      successCount++;
    } else if (result === 'skipped') {
      skipCount++;
    } else {
      failCount++;
    }
    // Show progress every 20 files
    if ((i + 1) % 20 === 0 || i + 1 === filesToProcess.length) {
      console.log(`⏳ Progress: ${i + 1}/${filesToProcess.length} (${Math.round(((i + 1) / filesToProcess.length) * 100)}%)`);
    }
  }

  // Summary
  const summary = `
=====================================
✅ Processing complete!
✅ Successfully processed: ${successCount}
⚠️ Skipped (locked/unwritable): ${skipCount}
❌ Failed: ${failCount}
🔒 Backup stored at: ${BACKUP_FOLDER}
=====================================
  `;
  
  console.log(summary);
  
  // Write summary to a file for safekeeping
  fs.writeFileSync('pdf-processing-summary.txt', summary, 'utf8');
}

main().catch(console.error);
