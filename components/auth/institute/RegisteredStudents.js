import React, { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';

import Table from '../Table';

function RegisteredStudents() {
  const [tableDetails, setTableDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getEvents() {
      const session = await getSession();
      const response = await fetch(
        `/api/events/institute/s${session.user.name._id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();

      if (data?.users) {
        setTableDetails({
          headings: [
            'First Name',
            'Last Name',
            'Email',
            'Event Name',
            'Institute',
            'Registration Date',
          ],
          data: data.users,
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
          Registered Students
        </h1>
        <Table
          isStudent={true}
          tableDetails={tableDetails}
          showInstitute={false}
          loading={loading}
        />
        {/* <div className="bg-white">
          <table className="table bg-white w-full overflow-x-scroll">
            <thead className="sticky -top-3">
              <tr>
                <th></th>
                {tableDetails?.headings.map((heading, index) => (
                  <th key={index}>{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableDetails?.data.map((student, index) => (
                <TableRowStudent key={index} student={student} index={index} />
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
    </div>
  );
}

export default RegisteredStudents;
