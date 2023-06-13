import React, { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import Table from '../Table';

function RegisteredEvents() {
  const [tableDetails, setTableDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getEvents() {
      const session = await getSession();

      const response = await fetch(
        `/api/events/student/${session.user.name._id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      console.log(data.events);
      if (data?.events) {
        setTableDetails({
          headings: [
            'Event Name',
            'Institute',
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
          Registered Events
        </h1>
        <Table
          tableDetails={tableDetails}
          loading={loading}
          showInstitute={true}
        />
      </div>
    </div>
  );
}

export default RegisteredEvents;
