import { connectDB } from './_lib/mongodb.js';
import { RsvpModel } from './_lib/rsvpSchema.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { primaryName, attendance, guests = [] } = req.body ?? {};

  if (!primaryName || typeof primaryName !== 'string' || !primaryName.trim()) {
    return res.status(400).json({ error: 'primaryName is required' });
  }
  if (!['solo', 'with_guest'].includes(attendance)) {
    return res.status(400).json({ error: 'Invalid attendance value' });
  }
  if (!Array.isArray(guests) || guests.length > 5) {
    return res.status(400).json({ error: 'guests must be an array of max 5 items' });
  }

  try {
    await connectDB();
    const ip = req.headers['x-forwarded-for']?.split(',')[0] ?? req.socket?.remoteAddress ?? '';
    const doc = await RsvpModel.create({ primaryName: primaryName.trim(), attendance, guests, ipAddress: ip });
    return res.status(201).json({ success: true, id: doc._id });
  } catch (err) {
    console.error('RSVP save error:', err);
    return res.status(500).json({ error: 'Database error' });
  }
}
