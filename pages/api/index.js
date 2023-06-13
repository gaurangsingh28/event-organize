import { connectToDatabase } from '../../util/mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body;
    const { db } = await connectToDatabase();
    const letter = await db.collection('emails').insertOne({ email });
    res.json({ message: 'Added Successfully!' });
    return;
  }
}

export default handler;
