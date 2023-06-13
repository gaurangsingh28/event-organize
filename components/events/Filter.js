import React from 'react';

import InstituteFilter from './Filters/InstituteFilter';
import DateStartFilter from './Filters/DateStartFilter';
import DateEndFilter from './Filters/DateEndFilter';

function Filter({
  institutes,
  onChangeInstitute,
  onChangeStart,
  onChangeEnd,
  instituteRef,
  clearForm,
  startRef,
  endRef,
}) {
  return (
    <div className="min-h-fit min-w-fit max-w-full text-indigo-600 rounded-md">
      <div className="p-1">
        <form
          id="filter"
          onSubmit={(e) => clearForm(e)}
          className="gap-3 justify-center flex flex-col py-2 md:flex-col w-3/4 min-w-fit max-w-full mx-auto md:w-fit"
        >
          <div className="flex flex-col gap-3">
            <InstituteFilter
              onChangeInstitute={onChangeInstitute}
              institutes={institutes}
              instituteRef={instituteRef}
            />
          </div>
          <div className="flex flex-col gap-3">
            <DateStartFilter
              startRef={startRef}
              type="from"
              onChangeStart={onChangeStart}
            />
            <DateEndFilter
              endRef={endRef}
              type="to"
              onChangeEnd={onChangeEnd}
            />
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-md tracking-wider transition-all ease-in-out duration-500 hover:shadow-xl text-sm hover:scale-95 sm:text-md sm:btn-md bg-indigo-500 hover:bg-indigo-400 border-0"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Filter;
