import { connectToDatabase } from '../../../util/mongodb';
import { hashPassword } from '../../../util/auth';

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
    const {
      email,
      password,
      first_name,
      last_name,
      is_student,
      is_institute,
      institute_name,
    } = req.body;

    if (
      (is_institute && !institute_name) ||
      (is_student && (!first_name || !last_name)) ||
      !email ||
      !email.includes('@') ||
      !password ||
      password.trim().length < 6
    ) {
      res.status(422).json({ message: 'Invalid Input!', status: 'fail' });
      return;
    }

    const { db } = await connectToDatabase();

    const existingUser = await db.collection('users').findOne({ email });

    if (existingUser) {
      res.status(422).json({ message: 'User already Exists!', status: 'fail' });
      return;
    }

    const hashedPassword = await hashPassword(password);
    const date = Date.now();
    const d = new Date(date);
    const readableDate =
      d.getFullYear().toString() +
      '-' +
      month[d.getMonth()] +
      '-' +
      d.getDate().toString();
    let user = {
      email,
      password: hashedPassword,
      is_student,
      is_institute,
      created_at: readableDate,
    };
    if (is_student) {
      user.first_name = first_name;
      user.last_name = last_name;
    }
    if (is_institute) {
      user.institute_name = institute_name;
    }
    const result = await db.collection('users').insertOne(user);

    res
      .status(201)
      .json({ message: 'User created successfully!', status: 'success' });
  }
}

export default handler;
