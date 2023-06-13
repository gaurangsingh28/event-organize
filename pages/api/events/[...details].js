import { connectToDatabase } from '../../../util/mongodb';
async function handler(req, res) {
  const month = [
    'Jan',
    'Feb',
    'March',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  if (req.method === 'POST') {
    const [eventId, userId] = req.query.details;
    const user_data = req.body;

    if (!eventId || !userId) {
      res.json({ message: 'Incomplete Details!' });
      return;
    }

    const { db } = await connectToDatabase();
    const exists = await db
      .collection('student_event')
      .findOne({ eventId: eventId, userId: userId });
    if (exists) {
      res.json({ message: 'Already Registered!' });
      return;
    }

    const date = Date.now();
    const d = new Date(date);
    const readableDate =
      d.getFullYear().toString() +
      '-' +
      month[d.getMonth()] +
      '-' +
      d.getDate().toString();

    const newCombination = await db.collection('student_event').insertOne({
      eventId,
      userId,
      registrationDate: readableDate,
      ...user_data,
    });
    console.log(newCombination);
    res.send({ message: 'Registered Successfully!' });
    return;
  }
}

export default handler;
