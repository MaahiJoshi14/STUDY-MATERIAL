#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import os from 'os';
import { PDFExtract } from 'pdf.js-extract';

const pdfExtract = new PDFExtract();
const resourcesPath = path.join(os.homedir(), 'Desktop', 'study-material-resources-backup');
const physicsPath = path.join(resourcesPath, '1st year btech', 'physics-cycle', 'engineering-physics', 'pyqs');

async function debugPDF() {
  if (fs.existsSync(physicsPath)) {
    const files = fs.readdirSync(physicsPath);
    const firstPdf = files.find(file => file.toLowerCase().endsWith('.pdf'));
    if (firstPdf) {
      const pdfPath = path.join(physicsPath, firstPdf);
      console.log(`📄 Debugging PDF text extraction for: ${firstPdf}`);
      console.log('='.repeat(80));
      
      try {
        // Use pdf.js-extract with promise API (wrap callback in promise)
        const data = await new Promise((resolve, reject) => {
          pdfExtract.extract(pdfPath, (err, result) => {
            if (err) reject(err);
            else resolve(result);
          });
        });
        
        // Show text from first 2 pages
        for (let i = 0; i < Math.min(2, data.pages.length); i++) {
          const page = data.pages[i];
          console.log(`\n📃 Page ${i + 1}:`);
          console.log('-'.repeat(80));
          
          // Group content into lines (based on y-position)
          const lines: { y: number; text: string }[] = [];
          
          for (const item of page.content) {
            // Find existing line with similar y position (within 2 units)
            const existingLine = lines.find(line => Math.abs(line.y - item.y) < 2);
            if (existingLine) {
              existingLine.text += ` ${item.str}`;
            } else {
              lines.push({ y: item.y, text: item.str });
            }
          }
          
          // Sort lines by y position (top to bottom)
          lines.sort((a, b) => a.y - b.y);
          
          for (const line of lines) {
            console.log(line.text);
          }
        }
      } catch (err) {
        console.error(err);
      }
    }
  }
}

debugPDF();

