import 'dotenv/config';
import { readFileSync } from 'fs';
import express from 'express';

// Load .env.local (Vite convention — dotenv only reads .env by default)
try {
  const raw = readFileSync('.env.local', 'utf8');
  for (const line of raw.split('\n')) {
    const m = line.match(/^\s*([^#=\s]+)\s*=\s*(.*)\s*$/);
    if (m) process.env[m[1]] ??= m[2].replace(/^['"]|['"]$/g, '');
  }
} catch { /* no .env.local is fine */ }

import('./api/rsvp.js').then(({ default: rsvpHandler }) => {
import('./api/admin.js').then(({ default: adminHandler }) => {

const app = express();
app.use(express.json());

// Wrap Vercel-style handler (req,res) for Express
const wrap = (fn) => (req, res) => fn(req, res);

app.post('/api/rsvp',  wrap(rsvpHandler));
app.get('/api/admin',  wrap(adminHandler));

const PORT = 3001;
app.listen(PORT, () => console.log(`API server → http://localhost:${PORT}`));

}); });
