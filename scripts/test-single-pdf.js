
import { PDFDocument, rgb, StandardFonts, degrees } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import os from 'os';

// Let's pick one of the first PDFs to test
const testPdfPath = path.join(os.homedir(), 'Desktop', 'study-material-resources', '2nd year btech', 'aiml-2nd year', 'coa', 'pyqs', 'COA_ETE_Sem-3_2024-25(with Solns) (1).pdf');
console.log('Testing PDF:', testPdfPath);
console.log('Exists:', fs.existsSync(testPdfPath));

try {
  // Try reading
  console.log('Reading file...');
  const pdfBytes = fs.readFileSync(testPdfPath);
  console.log('Read file, length:', pdfBytes.length);

  console.log('Loading PDF...');
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const pages = pdfDoc.getPages();
  console.log('Pages:', pages.length);

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  for (const page of pages) {
    const { width, height } = page.getSize();
    console.log('Page size:', width, 'x', height);

    // Add 3-4 subtle, diagonal, light watermarks (NO WHITE RECTANGLES!)
    // 1. Top-right
    page.drawText('nearcampus.in', {
      x: width * 0.6,
      y: height * 0.7,
      size: 12,
      font,
      color: rgb(0.9, 0.9, 0.9),
      opacity: 0.1,
      rotate: degrees(-30),
    });

    // 2. Bottom-left
    page.drawText('nearcampus.in', {
      x: width * 0.2,
      y: height * 0.3,
      size: 12,
      font,
      color: rgb(0.9, 0.9, 0.9),
      opacity: 0.1,
      rotate: degrees(-30),
    });

    // 3. Middle-right
    page.drawText('nearcampus.in', {
      x: width * 0.7,
      y: height * 0.4,
      size: 12,
      font,
      color: rgb(0.9, 0.9, 0.9),
      opacity: 0.1,
      rotate: degrees(-30),
    });

    // Add clean new footer (on top of existing content, no covering)
    page.drawText('For more material and PYQs, checkout nearcampus.in website and NearCampus app on Playstore', {
      x: 45,
      y: 18,
      size: 8,
      font,
      color: rgb(0.3, 0.3, 0.3),
    });
  }

  console.log('Saving PDF...');
  const modifiedPdfBytes = await pdfDoc.save();

  const outputPath = path.join(os.homedir(), 'Desktop', 'test-output.pdf');
  console.log('Writing to:', outputPath);
  fs.writeFileSync(outputPath, modifiedPdfBytes);
  console.log('✅ Successfully wrote test file!');

} catch (error) {
  console.error('❌ Error:', error.message, '\nStack:', error.stack);
}
