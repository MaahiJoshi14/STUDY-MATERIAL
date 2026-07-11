const https = require('https');
const fs = require('fs');

const PRIVATE_KEY = 'private_sx0aA2JRgNvVLNMmUZf8ZCXaSyk=';

const options = {
  hostname: 'api.imagekit.io',
  path: '/v1/files?limit=1000', // list all files at root or any folder
  method: 'GET',
  headers: {
    'Authorization': 'Basic ' + Buffer.from(PRIVATE_KEY + ':').toString('base64')
  }
};

console.log('Sending request to ImageKit API (all files)...');

const req = https.request(options, (res) => {
  let body = '';
  console.log('Status Code:', res.statusCode);
  
  res.on('data', (chunk) => {
    body += chunk;
  });
  
  res.on('end', () => {
    try {
      const files = JSON.parse(body);
      console.log('Successfully fetched all files list from ImageKit!');
      console.log('Total files found:', files.length);
      fs.writeFileSync('imagekit_files_list.json', JSON.stringify(files, null, 2));
      console.log('Saved to imagekit_files_list.json');
      
      // Let's print some sample paths
      if (files.length > 0) {
        console.log('Sample file paths:');
        files.slice(0, 10).forEach(f => {
          console.log(`- ${f.filePath} (${f.url})`);
        });
      }
    } catch (e) {
      console.error('Error parsing JSON:', e.message);
      console.log('Raw response sample:', body.substring(0, 500));
    }
  });
});

req.on('error', (e) => {
  console.error('Request error:', e.message);
});

req.end();
