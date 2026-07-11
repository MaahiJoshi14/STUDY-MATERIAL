const https = require('https');
const fs = require('fs');

const PRIVATE_KEY = 'private_sx0aA2JRgNvVLNMmUZf8ZCXaSyk=';

const options = {
  hostname: 'api.imagekit.io',
  path: '/v1/files?path=/1st%20year%20btech&limit=1000',
  method: 'GET',
  headers: {
    'Authorization': 'Basic ' + Buffer.from(PRIVATE_KEY + ':').toString('base64')
  }
};

console.log('Sending request to ImageKit API...');

const req = https.request(options, (res) => {
  let body = '';
  console.log('Status Code:', res.statusCode);
  
  res.on('data', (chunk) => {
    body += chunk;
  });
  
  res.on('end', () => {
    try {
      const files = JSON.parse(body);
      console.log('Successfully fetched files list from ImageKit!');
      console.log('Total files found:', files.length);
      fs.writeFileSync('imagekit_files_list.json', JSON.stringify(files, null, 2));
      console.log('Saved to imagekit_files_list.json');
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
