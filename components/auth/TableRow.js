import React from 'react';

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

function TableRow({ event, index, showInstitute }) {
  const today = Date.now();

  const startDate = new Date(event.startDate);
  const eventStart = startDate.valueOf();
  const endDate = new Date(event.endDate);
  const eventEnd = endDate.valueOf();

  const readableStart =
    startDate.getDate().toString() +
    ' ' +
    month[startDate.getMonth()] +
    ' ' +
    startDate.getFullYear().toString();

  const readableEnd =
    endDate.getDate().toString() +
    ' ' +
    month[endDate.getMonth()] +
    ' ' +
    endDate.getFullYear().toString();

  var status;
  if (today >= eventStart && today <= eventEnd) {
    status = {
      name: 'Active',
      color: 'bg-green-500',
    };
  } else if (today < eventStart) {
    status = {
      name: 'Pending',
      color: 'bg-orange-500',
    };
  } else if (today > endDate) {
    status = {
      name: 'Ended',
      color: 'bg-red-500',
    };
  }

  return (
    <tr key={event.eventId}>
      <th>{index + 1}</th>
      <td>{event.eventName}</td>
      {showInstitute && <td>{event.institute_name}</td>}
      <td>{readableStart}</td>
      <td>{readableEnd}</td>
      <td>
        <span
          className={`rounded-lg ${status.color} text-white status px-2 py-1`}
        >
          {status.name}
        </span>
      </td>
    </tr>
  );
}

export default TableRow;
