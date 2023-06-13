import React from 'react';

function InstituteFilter({ institutes, onChangeInstitute, instituteRef }) {
  return (
    <>
      <div className="bg-white max-w-full h-14 drop-shadow-4xl rounded-2xl min-w-fit p-4 ">
        <select
          name="institute"
          id="institute_filter"
          defaultValue=""
          ref={instituteRef}
          onChange={() => onChangeInstitute(instituteRef.current.value)}
          className="italic w-[100%] sm:w-[480px] md:w-[200px] font-medium placeholder:text-slate-200 outline-none bg-white"
        >
          <option value="">Select Institute</option>
          {institutes.map((institute) => (
            <option
              className="bg-white text-indigo-600 pt-2"
              value={institute.name}
              key={institute.id}
            >
              {institute.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default InstituteFilter;
