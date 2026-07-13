#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import os from 'os';

async function debugPDF() {
  // Import pdf.js-extract
  const pdfjsExtractModule = await import('pdf.js-extract');
  const { PDFExtract } = pdfjsExtractModule;
  
  const pdfExtract = new PDFExtract();
  const resourcesPath = path.join(os.homedir(), 'Desktop', 'study-material-resources-backup');
  
  // First, let's just list all target folders and PDFs
  console.log('🔍 Finding PYQ PDFs in backup folder...\n');
  
  const targetFolders = ['1st year btech', '2nd year btech'];
  const allPdfs = [];
  
  for (const targetFolder of targetFolders) {
    const folderPath = path.join(resourcesPath, targetFolder);
    if (!fs.existsSync(folderPath)) continue;
    
    // Walk through all files in this folder
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
  
  console.log(`✅ Found ${allPdfs.length} PDF files in backup!`);
  
  if (allPdfs.length === 0) {
    console.log('❌ No PDFs found!');
    return;
  }
  
  // Skip the first 50 PDFs, pick one that might have content
  const testPdfPath = allPdfs[50];
  console.log(`\n📄 Inspecting first PDF: ${path.relative(resourcesPath, testPdfPath)}`);
  console.log('='.repeat(100));
  
  // Extract the test PDF
  const data = await pdfExtract.extract(testPdfPath, {});
  
  console.log('✅ Extracted PDF!');
  console.log(`📄 Pages: ${data.pages.length}`);
  
  // Show first page's content
  if (data.pages.length > 0) {
    const page1 = data.pages[0];
    console.log('\n📃 Page 1 content:');
    console.log('-'.repeat(100));
    
    // Group by y-coordinate to form lines
    const lines = new Map();
    for (const item of page1.content) {
      const yKey = Math.round(item.y / 5) * 5; // Group by every 5 units
      if (!lines.has(yKey)) {
        lines.set(yKey, []);
      }
      lines.get(yKey).push({ x: item.x, text: item.str });
    }
    
    // Sort lines by y (top to bottom)
    const sortedYKeys = Array.from(lines.keys()).sort((a, b) => a - b);
    
    for (const yKey of sortedYKeys) {
      const items = lines.get(yKey);
      // Sort items on the same line by x
      items.sort((a, b) => a.x - b.x);
      // Join into a line
      const lineText = items.map(i => i.text).join(' ').trim();
      if (lineText) {
        console.log(lineText);
      }
    }
  }
}

debugPDF().catch(console.error);

