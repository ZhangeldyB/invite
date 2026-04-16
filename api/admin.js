import { connectDB } from './_lib/mongodb.js';
import { RsvpModel } from './_lib/rsvpSchema.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { secret } = req.query ?? {};
  if (!secret || secret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    await connectDB();
    const submissions = await RsvpModel.find({}).sort({ submittedAt: -1 }).lean();
    return res.status(200).json({ submissions });
  } catch (err) {
    console.error('Admin fetch error:', err);
    return res.status(500).json({ error: 'Database error' });
  }
}
