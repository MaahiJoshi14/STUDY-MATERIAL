#!/usr/bin/env node
import { PDFDocument, rgb, StandardFonts, degrees } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import os from 'os';

// Configuration
const BACKUP_FOLDER = path.join(os.homedir(), 'Desktop', 'study-material-resources-backup');
const TEST_PDF_OUTPUT = path.join(os.homedir(), 'Desktop', 'test-watermark-done.pdf');
const NEW_WATERMARK = 'nearcampus.in';
const NEW_FOOTER = 'For more material and PYQs, checkout nearcampus.in website and NearCampus app on Playstore';

async function main() {
  console.log('🔍 Looking for a test PDF in backup...');
  
  // Get a test PDF from backup
  const targetFolders = ['1st year btech', '2nd year btech'];
  const allPdfs = [];
  
  for (const targetFolder of targetFolders) {
    const folderPath = path.join(BACKUP_FOLDER, targetFolder);
    if (!fs.existsSync(folderPath)) continue;
    
    const walkDir = (dir) => {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          walkDir(fullPath);
        } else if (entry.name.toLowerCase().endsWith('.pdf') && fullPath.toLowerCase().includes('pyqs')) {
          allPdfs.push(fullPath);
        }
      }
    };
    
    walkDir(folderPath);
  }
  
  if (allPdfs.length === 0) {
    console.error('❌ No PDFs found in backup!');
    return;
  }
  
  const testPdfSource = allPdfs[50]; // Pick one we tried before
  console.log(`✅ Using test PDF: ${path.relative(BACKUP_FOLDER, testPdfSource)}`);
  console.log(`📄 Copying to desktop for test...`);
  
  // Copy to desktop first
  const testPdfOnDesktop = path.join(os.homedir(), 'Desktop', 'test-watermark-original.pdf');
  fs.copyFileSync(testPdfSource, testPdfOnDesktop);
  console.log(`✓ Copied to: ${testPdfOnDesktop}`);
  
  // Now process it!
  console.log(`🔧 Processing test PDF...`);
  const pdfBytes = fs.readFileSync(testPdfOnDesktop);
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const pages = pdfDoc.getPages();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  
  for (const page of pages) {
    const { width, height } = page.getSize();
    
    // 1. First, cover the old footer area with a white rectangle (only bottom ~50px, no content there!)
    page.drawRectangle({
      x: 0,
      y: 0,
      width: width,
      height: 50,
      color: rgb(1, 1, 1), // pure white
    });
    
    // 2. Add 2 subtle, diagonal, light watermarks (no overlapping question content!)
    // a. Top-right diagonal (angled down to left)
    page.drawText(NEW_WATERMARK, {
      x: width * 0.6,
      y: height * 0.7,
      size: 12,
      font,
      color: rgb(0.9, 0.9, 0.9),
      opacity: 0.12,
      rotate: degrees(-30),
    });
    
    // b. Bottom-left diagonal (angled up to right)
    page.drawText(NEW_WATERMARK, {
      x: width * 0.2,
      y: height * 0.3,
      size: 12,
      font,
      color: rgb(0.9, 0.9, 0.9),
      opacity: 0.12,
      rotate: degrees(-30),
    });
    
    // 3. Add clean footer at the very bottom
    page.drawText(NEW_FOOTER, {
      x: 45,
      y: 18,
      size: 8,
      font,
      color: rgb(0.3, 0.3, 0.3),
    });
  }
  
  const modifiedPdfBytes = await pdfDoc.save();
  fs.writeFileSync(TEST_PDF_OUTPUT, modifiedPdfBytes);
  console.log(`✅ Test PDF processed!`);
  console.log(`📄 Check it out at: ${TEST_PDF_OUTPUT}`);
  console.log('\nOriginal is still safe at:');
  console.log(`   ${testPdfOnDesktop}`);
  console.log(`   And also in your backup folder!`);
}

main().catch(console.error);
