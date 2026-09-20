const http = require('http');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env if present
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  try {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    envContent.split(/\r?\n/).forEach(line => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;
      const parts = trimmed.split('=');
      if (parts.length >= 2) {
        const key = parts[0].trim();
        const value = parts.slice(1).join('=').trim().replace(/^['"]|['"]$/g, '');
        process.env[key] = value;
      }
    });
    console.log('[Env] Environment variables loaded from .env');
  } catch (e) {
    console.error('[Env] Error reading .env file:', e);
  }
}

const PORT = 8000;

// MIME Types lookup helper
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg'
};

const server = http.createServer(async (req, res) => {
  const url = req.url;
  const method = req.method;

  console.log(`[HTTP] ${method} ${url}`);

  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  // API: SECURE ADMIN METRICS ENDPOINT
  if (url === '/api/admin/metrics' && method === 'GET') {
    const authHeader = req.headers['authorization'];
    if (!authHeader || authHeader !== 'Bearer admin_pin_9999') {
      res.writeHead(403, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ 
        status: 'error', 
        message: 'Access Denied: Admin authorization pin required.' 
      }));
    }

    const metrics = {
      systemStatus: 'ONLINE',
      serverUptimeSeconds: Math.floor(process.uptime()),
      systemTime: new Date().toISOString(),
      architectureMode: 'Local Profile System (Zero OTP)'
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'success', metrics }));
  }

  // Serve static application PWA files
  let safeUrl = url === '/' ? '/index.html' : url;
  let safePath = path.normalize(safeUrl).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(__dirname, safePath);

  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('File Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        return res.end('Server Error: ' + err.code);
      }
    }
    res.writeHead(200, { 'Content-Type': contentType });
    return res.end(content);
  });
});

server.listen(PORT, () => {
  console.log(`[Server] AgriSmart AI PWA backend running on http://localhost:${PORT}`);
  console.log(`[Server] Architecture Mode: Local User Profile System (Zero OTP)`);
});
