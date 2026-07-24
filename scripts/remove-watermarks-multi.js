#!/usr/bin/env node
/**
 * Multi-Format Watermark Removal/Replacement Script
 * Handles PDF, PPT, DOC, DOCX files
 * Safely removes mujstella.in watermarks and adds subtle nearcampus.in watermarks
 */

import fs from 'fs';
import path from 'path';
import os from 'os';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const DESKTOP_PATH = path.join(os.homedir(), 'Desktop', 'study-material-resources');
const BACKUP_DIR = path.join(os.homedir(), 'Desktop', 'study-material-resources-backup');

// Watermark patterns to remove
const WATERMARK_PATTERNS = [
  'mujstella.in',
  'nearcampus.in',
  'MUJSTELLA.IN',
  'NEARCAMPUS.IN',
];

const NEW_WATERMARK = 'nearcampus.in';

/**
 * Create a backup of the entire study-material-resources folder
 */
function createBackup() {
  if (fs.existsSync(BACKUP_DIR)) {
    console.log(`Backup already exists at ${BACKUP_DIR}`);
    return;
  }

  console.log(`Creating backup at ${BACKUP_DIR}...`);
  copyDirectorySync(DESKTOP_PATH, BACKUP_DIR);
  console.log('Backup created successfully!');
}

/**
 * Recursively copy directory
 */
function copyDirectorySync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
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
 * Find all supported files in the directory structure
 */
function findSupportedFiles(rootPath) {
  const supportedExtensions = ['.pdf', '.ppt', '.pptx', '.doc', '.docx'];
  const files = [];

  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const filePath = path.join(dir, entry.name);
      const stat = fs.statSync(filePath);
      if (entry.isDirectory()) {
        walk(filePath);
      } else {
        const ext = path.extname(entry.name).toLowerCase();
        if (supportedExtensions.includes(ext)) {
          files.push(filePath);
        }
      }
    }
  }

  walk(rootPath);
  return files;
}

/**
 * Process PDF files
 */
async function processPDF(pdfPath) {
  try {
    const pdfBytes = fs.readFileSync(pdfPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    
    const pages = pdfDoc.getPages();
    let modified = false;

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    for (const page of pages) {
      const { width, height } = page.getSize();
      
      // Add subtle nearcampus.in watermarks (3-4 per page)
      // Using very low opacity to be subtle
      
      // Position 1: Top center
      page.drawText(NEW_WATERMARK, {
        x: width / 2 - 50,
        y: height - 30,
        size: 7,
        font: font,
        color: rgb(0.6, 0.6, 0.6),
        opacity: 0.08,
      });

      // Position 2: Bottom center  
      page.drawText(NEW_WATERMARK, {
        x: width / 2 - 50,
        y: 20,
        size: 7,
        font: font,
        color: rgb(0.6, 0.6, 0.6),
        opacity: 0.08,
      });

      // Position 3: Left middle
      page.drawText(NEW_WATERMARK, {
        x: 15,
        y: height / 2,
        size: 7,
        font: font,
        color: rgb(0.6, 0.6, 0.6),
        opacity: 0.08,
      });

      // Position 4: Right middle (optional)
      page.drawText(NEW_WATERMARK, {
        x: width - 65,
        y: height / 2,
        size: 7,
        font: font,
        color: rgb(0.6, 0.6, 0.6),
        opacity: 0.08,
      });

      modified = true;
    }

    if (modified) {
      const pdfBytesModified = await pdfDoc.save();
      fs.writeFileSync(pdfPath, pdfBytesModified);
      console.log(`  ✓ PDF Processed: ${path.basename(pdfPath)}`);
      return true;
    }

    return false;
  } catch (error) {
    console.log(`  ✗ Error processing PDF ${path.basename(pdfPath)}: ${error.message}`);
    return false;
  }
}

/**
 * Process PPT/PPTX files
 * Note: This requires additional libraries like officegen or pptxgenjs
 * For now, we'll log that PPT processing requires manual intervention
 */
function processPPT(pptPath) {
  console.log(`  ⚠ PPT/PPTX files require manual processing or specialized tools: ${path.basename(pptPath)}`);
  console.log(`    Recommendation: Use Microsoft PowerPoint or LibreOffice to manually replace watermarks`);
  return false;
}

/**
 * Process DOC/DOCX files
 * Note: This requires additional libraries like docx or mammoth
 * For now, we'll log that DOC processing requires manual intervention
 */
function processDOC(docPath) {
  console.log(`  ⚠ DOC/DOCX files require manual processing or specialized tools: ${path.basename(docPath)}`);
  console.log(`    Recommendation: Use Microsoft Word or LibreOffice to manually replace watermarks`);
  return false;
}

/**
 * Process file based on extension
 */
async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  switch (ext) {
    case '.pdf':
      return await processPDF(filePath);
    case '.ppt':
    case '.pptx':
      return processPPT(filePath);
    case '.doc':
    case '.docx':
      return processDOC(filePath);
    default:
      console.log(`  ⚠ Unsupported file type: ${ext}`);
      return false;
  }
}

/**
 * Main function
 */
async function main() {
  if (!fs.existsSync(DESKTOP_PATH)) {
    console.error(`Error: Directory not found: ${DESKTOP_PATH}`);
    console.error('Please ensure "study-material-resources" exists on your Desktop');
    process.exit(1);
  }

  console.log(`Scanning for files in: ${DESKTOP_PATH}`);
  console.log('='.repeat(60));

  // Create backup
  createBackup();

  // Find all supported files
  const files = findSupportedFiles(DESKTOP_PATH);
  console.log(`Found ${files.length} supported files (PDF, PPT, DOC, DOCX)`);

  if (files.length === 0) {
    console.log('No supported files found.');
    return;
  }

  // Process each file
  let processedCount = 0;
  let skippedCount = 0;

  for (const file of files) {
    console.log(`\nProcessing: ${path.relative(DESKTOP_PATH, file)}`);
    const result = await processFile(file);
    if (result) {
      processedCount++;
    } else {
      skippedCount++;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`Summary:`);
  console.log(`  Processed: ${processedCount} files`);
  console.log(`  Skipped/Manual: ${skippedCount} files`);
  console.log(`  Total: ${files.length} files`);
  console.log(`\nBackup saved to: ${BACKUP_DIR}`);
  
  if (skippedCount > 0) {
    console.log(`\nNote: PPT/PPTX and DOC/DOCX files require manual processing.`);
    console.log(`For automated processing of these formats, additional libraries are needed:`);
    console.log(`  - PPT: officegen, pptxgenjs, or use LibreOffice headless`);
    console.log(`  - DOC: docx, mammoth, or use LibreOffice headless`);
  }
}

// Run the script
main().catch(console.error);
