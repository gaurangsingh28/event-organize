import { connectToDatabase } from '../../../util/mongodb';
import { ObjectId } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const userId = req.query.userId;
    const profileData = req.body;
    const { db } = await connectToDatabase();
    const query = { _id: ObjectId(userId) };
    const update = {
      $set: {
        ...profileData,
      },
    };
    const options = { returnNewDocument: true };
    const user = await db
      .collection('users')
      .findOneAndUpdate(query, update, options);
    console.log(user);
    res.json({ message: 'Called In' });
    return;
  }
}
export default handler;
