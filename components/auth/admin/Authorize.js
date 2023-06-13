import React from 'react';
import InstitutesList from './InstitutesList';

function Authorize({ institutes }) {
  return (
    <div className="p-3 rounded-lg">
      {institutes.length >= 1 && (
        <div className=" bg-white border-red-500 h-96 sm:h-[75vh] overflow-scroll shadow-2xl sm:w-[96%] mx-auto divide-indigo-700 p-3 text-gray-900 rounded-lg">
          <h1 className=" sticky left-0 bg-white uppercase text-center text-gray-800 font-montserrat">
            Registered Institutes
          </h1>
          <InstitutesList institutes={institutes} />
        </div>
      )}
      {institutes.length === 0 && (
        <h1 className="text-indigo-600 font-montserrat tracking-wider font-sm text-center">
          No Institutes registered Yet!!
        </h1>
      )}
    </div>
  );
}

export default Authorize;
