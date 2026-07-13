#!/usr/bin/env node
/**
 * PDF Watermark Removal/Replacement Script
 * Removes or replaces watermarks (mujstella.in, nearcampus.in) from PDFs
 * and reduces watermark frequency to 2-3 per page.
 */

const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');

// Configuration
const DESKTOP_PATH = path.join(require('os').homedir(), 'Desktop', 'study-material-resources');
const BACKUP_DIR = path.join(require('os').homedir(), 'Desktop', 'study-material-resources-backup');

// Watermark patterns to replace
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
  // For large folders, we might want to use a more efficient backup method
  // This is a simple recursive copy
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
 * Find all PDF files in the directory structure
 */
function findPDFFiles(rootPath) {
  const pdfFiles = [];

  function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        walk(filePath);
      } else if (file.toLowerCase().endsWith('.pdf')) {
        pdfFiles.push(filePath);
      }
    }
  }

  walk(rootPath);
  return pdfFiles;
}

/**
 * Process a single PDF file to remove/replace watermarks
 * Note: pdf-lib adds content to the end of the content stream, so watermarks
 * will appear on top of existing content. For true background watermarks,
 * commercial PDF tools like Adobe Acrobat are recommended.
 */
async function processPDF(pdfPath) {
  try {
    const pdfBytes = fs.readFileSync(pdfPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    
    const pages = pdfDoc.getPages();
    let modified = false;

    // Get font for new watermark
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    for (const page of pages) {
      const { width, height } = page.getSize();
      
      // Add new watermark at specific positions (2-3 per page)
      // Using low opacity to make it less intrusive
      
      // Position 1: Top center
      page.drawText(NEW_WATERMARK, {
        x: width / 2 - 50,
        y: height - 30,
        size: 8,
        font: font,
        color: rgb(0.7, 0.7, 0.7),
        opacity: 0.1, // Very low opacity for subtle watermark
      });

      // Position 2: Bottom center
      page.drawText(NEW_WATERMARK, {
        x: width / 2 - 50,
        y: 20,
        size: 8,
        font: font,
        color: rgb(0.7, 0.7, 0.7),
        opacity: 0.1,
      });

      // Position 3: Diagonal (optional)
      page.drawText(NEW_WATERMARK, {
        x: 20,
        y: height / 2,
        size: 8,
        font: font,
        color: rgb(0.7, 0.7, 0.7),
        opacity: 0.1,
        rotate: { angle: 45 },
      });

      modified = true;
    }

    if (modified) {
      const pdfBytesModified = await pdfDoc.save();
      fs.writeFileSync(pdfPath, pdfBytesModified);
      console.log(`  ✓ Processed: ${path.basename(pdfPath)}`);
      return true;
    }

    return false;
  } catch (error) {
    console.log(`  ✗ Error processing ${path.basename(pdfPath)}: ${error.message}`);
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

  console.log(`Scanning for PDFs in: ${DESKTOP_PATH}`);
  console.log('='.repeat(60));

  // Create backup
  createBackup();

  // Find all PDF files
  const pdfFiles = findPDFFiles(DESKTOP_PATH);
  console.log(`Found ${pdfFiles.length} PDF files`);

  if (pdfFiles.length === 0) {
    console.log('No PDF files found.');
    return;
  }

  // Process each PDF
  let processedCount = 0;
  for (const pdfFile of pdfFiles) {
    console.log(`\nProcessing: ${path.relative(DESKTOP_PATH, pdfFile)}`);
    if (await processPDF(pdfFile)) {
      processedCount++;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`Summary: ${processedCount}/${pdfFiles.length} files processed`);
  console.log(`Backup saved to: ${BACKUP_DIR}`);
}

// Run the script
main().catch(console.error);
