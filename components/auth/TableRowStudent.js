import React from 'react';

const month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function TableRow({ student, index }) {
  const registerDate = new Date(student.registrationDate);

  const readableDate =
    registerDate.getDate().toString() +
    ' ' +
    month[registerDate.getMonth()] +
    ' ' +
    registerDate.getFullYear().toString();

  return (
    <tr key={student.id}>
      <th>{index + 1}</th>
      <td>{student.first_name}</td>
      <td>{student.last_name}</td>
      <td>{student.email}</td>
      <td>{student.eventName}</td>
      <td>{student.institute_name}</td>
      <td>{readableDate}</td>
    </tr>
  );
}

export default TableRow;
