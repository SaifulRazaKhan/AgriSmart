const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;

// In-memory OTP storage
const otpStore = {}; // { phone: otp }
const otpLogs = [];  // Array of { phone, otp, timestamp }

// Utility to parse post body as JSON
function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(err);
      }
    });
  });
}

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

  // Route API: Send OTP
  if (url === '/api/otp/send' && method === 'POST') {
    try {
      const { phone } = await parseJsonBody(req);
      if (!phone || phone.length < 10) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ status: 'error', message: 'Invalid phone number' }));
      }

      // Generate a 4-digit code
      const generatedOtp = String(Math.floor(1000 + Math.random() * 9000));
      otpStore[phone] = generatedOtp;

      // Push to dashboard log queue (keep last 15 entries)
      otpLogs.unshift({
        phone,
        otp: generatedOtp,
        timestamp: Date.now()
      });
      if (otpLogs.length > 15) {
        otpLogs.pop();
      }

      console.log(`[OTP] Generated Code for +91 ${phone} is: ${generatedOtp}`);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ status: 'success', message: 'OTP sent successfully (Simulated)' }));
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ status: 'error', message: 'Internal Server Error' }));
    }
  }

  // Route API: Verify OTP
  if (url === '/api/otp/verify' && method === 'POST') {
    try {
      const { phone, otp } = await parseJsonBody(req);
      
      // Check if matches in-memory store
      if (otpStore[phone] && otpStore[phone] === otp) {
        // Clear OTP after successful verify
        delete otpStore[phone];
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({
          status: 'success',
          token: 'jwt_mock_token_' + Date.now(),
          user: { phone, role: 'farmer' }
        }));
      } else {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ status: 'error', message: 'Incorrect OTP value' }));
      }
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ status: 'error', message: 'Internal Server Error' }));
    }
  }

  // Route API: Fetch logs (GET)
  if (url === '/api/otp/logs' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(otpLogs));
  }

  // Route: Serve OTP Dashboard HTML
  if (url === '/otp-dashboard' && method === 'GET') {
    const filePath = path.join(__dirname, 'otp-dashboard.html');
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading dashboard page');
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      return res.end(content);
    });
    return;
  }

  // Serve static application PWA files
  let safeUrl = url === '/' ? '/index.html' : url;
  // Prevent directory traversal attacks
  let safePath = path.normalize(safeUrl).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(__dirname, safePath);

  // Check file extension for MIME type mapping
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
  console.log(`[Server] AgriSmart PWA running at http://localhost:${PORT}`);
  console.log(`[Server] OTP Verification dashboard at http://localhost:${PORT}/otp-dashboard`);
});
