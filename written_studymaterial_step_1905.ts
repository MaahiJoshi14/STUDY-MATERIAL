const fs = require('fs');
let content = fs.readFileSync('src/data/studyMaterial.ts', 'utf8');

const map = {
  'ðŸ§ª': '🧪',
  'ðŸ”¢': '🔢',
  'ðŸ“–': '📖',
  'ðŸ–¥ï¸ ': '💻',
  'ðŸŒ ': '🌍',
  'ðŸ¤–': '🤖',
  'ðŸ”„': '🔄',
  'â˜ ï¸ ': '☁️',
  'ðŸ’¾': '💾',
  'ðŸ§®': '🧮',
  'â€”': '—',
  'Âš>Ï_': '⚛️',
  'Âš>Ã _': '⚛️',
  'Ã¢â‚¬â€œ': '-',
  'Ã¢â‚¬â„¢': '\'',
  'ðŸ“Š': '📊',
  'âš™ï¸ ': '⚙️',
  'ðŸ“ˆ': '📈',
  'ðŸ—‚ï¸ ': '🗂️',
  'âš¡': '⚡',
  'ðŸ”¬': '🔬',
  'ðŸŒ¿': '🌿',
  'ðŸ§¬': '🧬',
  'ðŸ”§': '🔧',
  'ðŸ“': '📐',
  'Âš>Â ': '⚛️', // extra physics fallback
  'Ã¢â‚¬Å“': '"',
  'Ã¢â‚¬Â ': '"'
};

for (const [bad, good] of Object.entries(map)) {
  content = content.split(bad).join(good);
}

fs.writeFileSync('src/data/studyMaterial.ts', content, 'utf8');
console.log('Fixed encoding issues in studyMaterial.ts');
