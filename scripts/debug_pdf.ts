import { PDFExtract } from 'pdf.js-extract';

const pdfExtract = new PDFExtract();

const TEST_URL = 'https://ik.imagekit.io/tjp471xsxp/1st%20year%20btech/physics-cycle/engineering-physics/pyqs/EP_ETE_Sem-I_2023-24.pdf?updatedAt=1783198095669';

async function debug() {
  const response = await fetch(TEST_URL);
  const buffer = Buffer.from(await response.arrayBuffer());
  
  const data = await new Promise<any>((resolve, reject) => {
    pdfExtract.extractBuffer(buffer, {}, (err, d) => {
      if (err) reject(err);
      else resolve(d);
    });
  });

  // Print first 3 pages raw
  for (let i = 0; i < Math.min(3, data.pages.length); i++) {
    console.log(`\n=== PAGE ${i + 1} ===`);
    const text = data.pages[i].content.map((c: any) => c.str).join(' ');
    console.log(text.substring(0, 2000));
    console.log('\n--- LINE BY LINE ---');
    // Also show per-item 
    for (const item of data.pages[i].content.slice(0, 50)) {
      console.log(`[x=${Math.round(item.x)}, y=${Math.round(item.y)}, h=${Math.round(item.height)}] "${item.str}"`);
    }
  }
}

debug().catch(console.error);
