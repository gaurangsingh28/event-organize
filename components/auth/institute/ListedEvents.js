import React, { useState, useEffect } from 'react';
import { getSession } from 'next-auth/react';

import Table from '../Table';

function ListedEvents() {
  const [tableDetails, setTableDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getEvents() {
      const session = await getSession();
      const response = await fetch(
        `/api/events/institute/e${session.user.name._id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();

      if (data?.events) {
        setTableDetails({
          headings: [
            'Event Name',
            'Event Start Date',
            'Event End Date',
            'Status',
          ],
          data: data.events,
        });
      } else {
        setTableDetails({
          headings: null,
          data: null,
        });
      }
      setLoading(false);
    }
    getEvents();
  }, []);

  return (
    <div className="p-3 rounded-lg">
      <div className=" bg-white border-red-500 h-96 sm:h-[75vh] overflow-scroll shadow-2xl sm:w-[96%] mx-auto divide-indigo-700 p-3 text-gray-900 rounded-lg">
        <h1 className=" sticky left-0 bg-white uppercase text-center text-gray-800 font-montserrat">
          Your Listed Events
        </h1>
        <Table
          tableDetails={tableDetails}
          showInstitute={false}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default ListedEvents;
