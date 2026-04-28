import https from 'node:https';

// Cloudflare Purge Cache Script (Node.js)
// Usage: node purge-cloudflare.js

// Replace these with your actual Cloudflare credentials or set them as environment variables
const ZONE_ID = process.env.CF_ZONE_ID || 'your_zone_id_here';
const API_TOKEN = process.env.CF_API_TOKEN || 'your_api_token_here';

if (!ZONE_ID || !API_TOKEN || ZONE_ID === 'your_zone_id_here') {
  console.warn('⚠️ Cloudflare Purge Skipped: CF_ZONE_ID or CF_API_TOKEN not found in environment variables. Add them in Vercel to enable auto-purge.');
  process.exit(0);
}

const data = JSON.stringify({ purge_everything: true });

const options = {
  hostname: 'api.cloudflare.com',
  port: 443,
  path: `/client/v4/zones/${ZONE_ID}/purge_cache`,
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`,
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    const response = JSON.parse(body);
    if (response.success) {
      console.log('✅ Cloudflare Cache Purged Successfully!');
    } else {
      console.error('❌ Failed to purge cache:', response.errors);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Request error:', error);
});

req.write(data);
req.end();
