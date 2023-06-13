import { connectToDatabase } from '../../util/mongodb';

async function handler(req, res) {
  if (req.method === 'GET') {
    const { db } = await connectToDatabase();
    const collected = await db.collection('institutes').find({}).toArray();
    var institutes = [];
    collected.map((item) => {
      institutes.push({
        id: item._id.toString(),
        name: item.name,
      });
    });
    res.status(201).json({ institutes });
  }
}

export default handler;
