import React from 'react';
import Head from 'next/head';
import { connectToDatabase } from '../../util/mongodb';
import { ObjectId } from 'mongodb';

import EventDetails from '../../components/events/EventDetails';

export default function EventDetail({ event }) {
  return (
    <div>
      <Head>
        <title>{event.eventName}</title>
      </Head>
      <EventDetails event={event} />
    </div>
  );
}

export async function getStaticPaths() {
  const { db } = await connectToDatabase();
  const eventsList = await db.collection('events').find().toArray();
  let eventIds = [];
  for (let i = 0; i < eventsList.length; i++) {
    eventIds.push({ eventId: eventsList[i]._id.toString() });
  }

  const paths = eventIds.map((event) => ({
    params: { eventId: event.eventId },
  }));
  return {
    paths: paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const { db } = await connectToDatabase();

  let convertedId;
  try {
    convertedId = ObjectId(eventId);
  } catch (e) {
    return {
      notFound: true,
    };
  }

  const fetchedEvent = await db
    .collection('events')
    .findOne({ _id: convertedId });

  if (!fetchedEvent) {
    return {
      notFound: true,
      revalidate: 10,
    };
  }

  let event = {
    ...fetchedEvent,
  };
  delete event._id;
  event._id = fetchedEvent._id.toString();

  return {
    props: {
      event,
    },
    revalidate: 10,
  };
}
