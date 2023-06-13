import { connectToDatabase } from '../../../../util/mongodb';
import { ObjectId } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'GET') {
    const { db } = await connectToDatabase();
    let userId = req.query.userId;
    const type = userId[0];
    userId = userId.slice(1);

    const users_events = await db
      .collection('users_events')
      .findOne({ user_id: userId });

    if (!users_events) {
      res.json({ message: 'No Events for the Institute Exists!' });
      return;
    }

    var listOfEvents = users_events.event_ids;
    var findIds = [];
    var findIdsE = [];
    for (let i = 0; i < listOfEvents.length; i++) {
      const eventId = listOfEvents[i];
      findIds.push({ _id: ObjectId(eventId) });
      findIdsE.push({ eventId: eventId });
    }

    if (type === 'e') {
      if (findIds.length === 0) {
        res.json({ events: null });
        return;
      }

      const eventsDetails = await db
        .collection('events')
        .find({ $or: findIds })
        .toArray();
      // console.log('called above');
      res.json({ events: eventsDetails });
      return;
    } else {
      if (findIdsE.length === 0) {
        res.json({ users: null });
        return;
      }
      const usersList = await db
        .collection('student_event')
        .find({ $or: findIdsE })
        .toArray();

      const trial = [];
      for (let i = 0; i < usersList.length; i++) {
        const current = usersList[i];
        const userD = await db
          .collection('users')
          .findOne(
            { _id: ObjectId(current.userId) },
            { email: 1, institute_name: 1 }
          );
        const temp = {
          ...current,
          email: userD.email,
          institute_name: userD.institute,
        };
        trial.push(temp);
      }

      if (usersList.length === 0) {
        res.json({ users: null });
        return;
      }
      // console.log(usersList);
      // console.log(trial);
      res.json({ users: trial });
      return;
    }
  }
}
export default handler;
