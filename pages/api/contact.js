import { connectToDatabase } from '../../util/mongodb';
async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const { db } = await connectToDatabase();
    const contact = await db.collection('contacts').insertOne(data);
    res.json({ message: 'Message sent Successfully!' });
    return;
  }
}
export default handler;
