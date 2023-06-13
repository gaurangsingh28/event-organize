import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { getSession } from 'next-auth/react';

import AddEvent from '../../../components/auth/institute/AddEvent';
import ListedEvents from '../../../components/auth/institute/ListedEvents';
import RegisteredStudents from '../../../components/auth/institute/RegisteredStudents';

import Dashboard from '../../../components/auth/Dashboard';

function InstituteHome() {
  const [institute, setInstitute] = useState();
  const menuItems = [
    { id: 1, name: 'Add Event', slug: 'add_event', component: <AddEvent /> },
    {
      id: 2,
      name: 'Listed Events',
      slug: 'listed_events',
      component: <ListedEvents />,
    },
    {
      id: 3,
      name: 'Registered Students',
      slug: 'registered_students',
      component: <RegisteredStudents />,
    },
  ];

  useEffect(() => {
    getSession().then((session) => {
      setInstitute(session.user.name?.institute_name);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Welcome, {institute}</title>
      </Head>
      <Dashboard menuItems={menuItems} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default InstituteHome;
