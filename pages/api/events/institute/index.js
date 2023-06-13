import { connectToDatabase } from '../../../../util/mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const event = req.body;

    const { db } = await connectToDatabase();
    const newEvent = await db.collection('events').insertOne(event);

    const newEventId = newEvent.insertedId.toString();
    const combination = await db
      .collection('users_events')
      .findOne({ user_id: event.user_id });

    if (combination) {
      const up = await db
        .collection('users_events')
        .update(
          { user_id: event.user_id },
          { $push: { event_ids: newEventId } }
        );
    } else {
      const NewCombination = {
        user_id: event.user_id,
        event_ids: [newEventId],
      };
      const newCombination = await db
        .collection('users_events')
        .insertOne(NewCombination);
    }
    res.json({ message: 'Event Added!' });
  }
}
export default handler;
