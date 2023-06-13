import React from 'react';
import TableRow from './TableRow';
import TableRowStudent from './TableRowStudent';
import Loader from '../ui/Loader';

function Table({
  tableDetails,
  showInstitute,
  loading = false,
  isStudent = false,
}) {
  const { headings, data } = tableDetails;

  const message = isStudent
    ? 'No students registered Yet!'
    : 'No Events listed Yet!';

  if (loading)
    return (
      <div className="bg-white">
        <div className="w-full h-96 flex justify-center items-center">
          <Loader />
        </div>
      </div>
    );

  return (
    <div className="bg-white">
      {!data && (
        <div className="w-full h-96 flex justify-center items-center">
          <h1 className="font-montserrat text-indigo-800 tracking-wider">
            {message}
          </h1>
        </div>
      )}
      {data && (
        <table className="table bg-white w-full overflow-x-scroll">
          <thead className="sticky -top-3">
            <tr>
              <th></th>
              {headings.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
            </tr>
          </thead>
          {!isStudent && (
            <tbody>
              {data.map((item, index) => (
                <TableRow
                  key={index}
                  event={item}
                  index={index}
                  showInstitute={showInstitute}
                />
              ))}
            </tbody>
          )}
          {isStudent && (
            <tbody>
              {data.map((item, index) => (
                <TableRowStudent key={index} student={item} index={index} />
              ))}
            </tbody>
          )}
        </table>
      )}
    </div>
  );
}

export default Table;
