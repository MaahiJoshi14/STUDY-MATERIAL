const fs = require('fs');

function getPngDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  // PNG header starts with 8 bytes, followed by IHDR chunk
  // IHDR chunk starts at byte 12 with IHDR type, then width (4 bytes) at 16, height (4 bytes) at 20
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  return { width, height };
}

['media_1.png', 'media_2.png', 'media_3.png'].forEach(file => {
  try {
    const path = `public/${file}`;
    const dims = getPngDimensions(path);
    const size = fs.statSync(path).size;
    console.log(`${file}: ${dims.width}x${dims.height} (${size} bytes)`);
  } catch (e) {
    console.error(`Error reading ${file}:`, e.message);
  }
});
