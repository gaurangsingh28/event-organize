import Head from 'next/head';
import { getStatus } from '../util/dates';
import { connectToDatabase } from '../util/mongodb';

import Hero from '../components/ui/Hero';
import Carousel from '../components/layout/Carousel';
import Social from '../components/layout/Social';
import Newsletter from '../components/ui/Newsletter';

export default function Home({ ongoingEvents, upcomingEvents }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <Hero />
      {/* Ongoing Events */}
      {ongoingEvents.length >= 1 && (
        <Carousel
          key="ongoing_events"
          type="Ongoing Events"
          events={ongoingEvents}
        />
      )}

      {/* Upcoming Events */}
      {upcomingEvents.length >= 1 && (
        <Carousel
          key="upcoming_events"
          type="Upcoming Events"
          events={upcomingEvents}
        />
      )}

      {/* Newsletter Section */}
      <Newsletter />

      {/* Social */}
      <Social />
    </>
  );
}

export async function getStaticProps() {
  const { db } = await connectToDatabase();
  const allEvents = await db.collection('events').find().toArray();
  let upComingEvents = [];
  let onGoingEvents = [];
  for (let i = 0; i < allEvents.length; i++) {
    let ev = { ...allEvents[i] };
    delete ev._id;
    const status = getStatus(allEvents[i].startDate, allEvents[i].endDate).name;
    ev._id = allEvents[i]._id.toString();
    ev.status = status;
    if (status === 'Active') onGoingEvents.push(ev);
    if (status === 'Pending') upComingEvents.push(ev);
  }
  const ongoingEvents = onGoingEvents;
  const upcomingEvents = upComingEvents;
  return {
    props: {
      ongoingEvents,
      upcomingEvents,
    },
    revalidate: 10,
  };
}
