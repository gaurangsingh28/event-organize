export function getStatus(stDate, enDate) {
  const today = Date.now();

  const startDate = new Date(stDate);
  const eventStart = startDate.valueOf();
  const endDate = new Date(enDate);
  const eventEnd = endDate.valueOf();

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
  return status;
}
