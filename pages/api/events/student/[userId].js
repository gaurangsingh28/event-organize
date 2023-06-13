import { connectToDatabase } from '../../../../util/mongodb';
import { ObjectId } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'GET') {
    const user_id = req.query.userId;
    const { db } = await connectToDatabase();
    const findEvents = await db
      .collection('student_event')
      .find({ userId: user_id })
      .toArray();
    let eventIds = [];
    for (let i = 0; i < findEvents.length; i++) {
      eventIds.push({ _id: ObjectId(findEvents[i].eventId) });
    }

    if (eventIds.length === 0) {
      res.json({ events: null });
      return;
    }

    const allevents = await db
      .collection('events')
      .find({ $or: eventIds })
      .toArray();

    res.json({ events: allevents });
    return;
  }
}

export default handler;
