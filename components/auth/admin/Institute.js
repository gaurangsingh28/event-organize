import React from 'react';

function Institute({ institute }) {
  return (
    <div className="shadow-md relative rounded-xl p-3 m-1 overflow-scroll">
      <h1 className="font-montserrat text-gray-800 text-sm sm:text-md my-1 font-extrabold">
        {institute.instituteName}
      </h1>
      <h1 className="font-nunito text-gray-600 my-2 text-xs sm:text-sm font-bold tracking-wide">
        {institute.email}
      </h1>
      <span
        className={`w-3 absolute z-10 p-1 top-2 right-2 h-3 rounded-full ${
          institute.isActive ? 'bg-green-600' : 'bg-red-600'
        }`}
      ></span>
      {/* <button className="px-3 uppercase font-bold sm:tracking-wide my-1 py-1 hover:shadow-md hover:scale-95 transition-all ease-in-out duration-300  text-xs mx-1  rounded-full text-white outline-none border-0 bg-green-600">
        Activate
      </button>
      <button className="px-3 uppercase font-bold sm:tracking-wide my-1 py-1 hover:shadow-md hover:scale-95 transition-all ease-in-out duration-300  text-xs mx-1 rounded-full text-white outline-none border-0 bg-red-600">
        Deactivate
      </button> */}
    </div>
  );
}

export default Institute;
