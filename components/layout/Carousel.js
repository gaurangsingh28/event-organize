import React from 'react';

import EventCard from '../ui/EventCard';

function Carousel({ events, type }) {
  return (
    <div className="flex bg-white flex-col mx-8 my-8 shadow-xl rounded-2xl h-96">
      <div>
        <h1 className="pt-5 pb-1 underline underline-offset-8 decoration-4 text-indigo-700 tracking-widest text-center font-montserrat uppercase">
          {type}
        </h1>
      </div>
      <div className="flex-1 m-2 px-3 flex rounded-md overflow-y-auto pt-3 pb-3 space-x-8 snap-both">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
