import React from 'react';

function DateEndFilter({ type, endRef, onChangeEnd }) {
  return (
    <>
      <div
        data-tip={type[0].toUpperCase() + type.slice(1)}
        className="tooltip bg-white drop-shadow-4xl h-14 rounded-2xl max-w-full min-w-fit p-4 "
      >
        <input
          className="italic font-medium min-w-full max-w-full placeholder:text-slate-200 outline-none bg-white"
          type="date"
          id={`date_selector_${type}`}
          name={`${type}`}
          ref={endRef}
          onChange={onChangeEnd}
        />
      </div>
    </>
  );
}

export default DateEndFilter;
