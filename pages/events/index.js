import React, { useState, useRef } from 'react';
import Head from 'next/head';
import { connectToDatabase } from '../../util/mongodb';

import Filter from '../../components/events/Filter';
import EventCard from '../../components/ui/EventCard';

function Events({ allEvents, institutes }) {
  const [aEvents, setAEvents] = useState(allEvents);
  const [events, setEvents] = useState(allEvents);

  const instituteRef = useRef(null);
  const startRef = useRef(null);
  const endRef = useRef(null);

  const clearForm = (e) => {
    e.preventDefault();
    document.getElementById('filter').reset();
    setEvents(aEvents);
  };

  const onChangeInstitute = () => {
    let newEvents = [];
    if (startRef.current.value.length > 0 || endRef.current.value.length > 0) {
      newEvents = events.filter(
        (event) => event.institute_name === instituteRef.current.value
      );
    } else {
      newEvents = aEvents.filter(
        (event) => event.institute_name === instituteRef.current.value
      );
    }

    setEvents(newEvents);
  };

  const handleBothDates = () => {
    const startDate = new Date(startRef.current.value).valueOf();
    const endDate = new Date(endRef.current.value).valueOf();

    function call(event) {
      const a = new Date(event.startDate);
      const b = new Date(event.endDate);
      return a.valueOf() >= startDate && endDate >= b.valueOf();
    }
    let newEvents = [];
    if (instituteRef.current.value.length > 0) newEvents = events.filter(call);
    else newEvents = aEvents.filter(call);
    setEvents(newEvents);
  };

  const onChangeStart = () => {
    if (!endRef.current || !(endRef.current.value === '')) {
      handleBothDates();
    } else {
      const startDate = new Date(startRef.current.value).valueOf();

      function call(event) {
        return new Date(event.startDate).valueOf() >= startDate;
      }

      let newEvents = [];
      if (instituteRef.current.value.length > 0)
        newEvents = events.filter(call);
      else newEvents = aEvents.filter(call);
      setEvents(newEvents);
    }
  };

  const onChangeEnd = () => {
    if (!startRef.current || !(startRef.current.value === '')) {
      handleBothDates();
    } else {
      const endDate = new Date(endRef.current.value).valueOf();

      function call(event) {
        return new Date(event.endDate).valueOf() <= endDate;
      }

      let newEvents = [];
      if (instituteRef.current.value.length > 0)
        newEvents = events.filter(call);
      else newEvents = aEvents.filter(call);
      setEvents(newEvents);
    }
  };

  return (
    <>
      <Head>
        <title>Events</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col px-3 mb-3 gap-2 md:flex-row w-full">
        {/* Filter */}
        <div className="md:w-1/4 z-10 p-2 rounded-xl sticky top-16 md:top-20 h-fit min-w-fit max-w-full bg-white">
          <Filter
            onChangeStart={onChangeStart}
            onChangeEnd={onChangeEnd}
            onChangeInstitute={onChangeInstitute}
            instituteRef={instituteRef}
            institutes={institutes}
            clearForm={clearForm}
            startRef={startRef}
            endRef={endRef}
          />
        </div>

        {/* List of Events */}
        <div className="md:mt-4 rounded-md w-full md:grow-1">
          {/* content */}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {events.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
          {events?.length === 0 && (
            <h1 className="flex justify-center font-montserrat text-indigo-600 tracking-wider items-center">
              No Events to show...
            </h1>
          )}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { db } = await connectToDatabase();
  const allEvents = await db.collection('events').find().toArray();
  let events = [];
  for (let i = 0; i < allEvents.length; i++) {
    let ev = { ...allEvents[i] };
    delete ev._id;

    ev._id = allEvents[i]._id.toString();

    events.push(ev);
  }

  const collected = await db.collection('institutes').find({}).toArray();
  var institutes = [];
  collected.map((item) => {
    institutes.push({
      id: item._id.toString(),
      name: item.name,
    });
  });

  return {
    props: {
      allEvents: events,
      institutes,
    },
    revalidate: 10,
  };
}

export default Events;
