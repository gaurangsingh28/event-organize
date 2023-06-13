import { getStatus } from '../../../util/dates';
import { connectToDatabase } from '../../../util/mongodb';
async function handler(req, res) {
  if (req.method === 'GET') {
    const { db } = await connectToDatabase();
    const allEvents = await db.collection('events').find().toArray();
    let events = [];

    for (let i = 0; i < allEvents.length; i++) {
      let ev = { ...allEvents[i] };
      delete ev._id;
      const status = getStatus(
        allEvents[i].startDate,
        allEvents[i].endDate
      ).name;
      ev._id = allEvents[i]._id.toString();
      ev.status = status;
      events.push(ev);
    }

    res.json({ events: events });
  }
}
export default handler;
