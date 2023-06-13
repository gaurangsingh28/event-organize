import React, { useState } from 'react';
import { getSession } from 'next-auth/react';

import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SchoolIcon from '@mui/icons-material/School';
import DevicesIcon from '@mui/icons-material/Devices';

const month = [
  'Jan',
  'Feb',
  'March',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

function EventDetails({ event }) {
  const [message, setMessage] = useState(null);

  const imageF = `/images/${event.institute_name}.jpg`;
  let image;
  if (
    event.institute_name === 'National Institute of Technology, Patna' ||
    event.institute_name === 'National Institute of Technology, Raipur' ||
    event.institute_name === 'National Institute of Technology, Warangal'
  ) {
    image = `/images/logos/${event.institute_name}.jpg`;
  } else {
    image = `/images/logos/${event.institute_name}.png`;
  }
  const handleRegister = async () => {
    const eventId = event._id;
    const session = await getSession();

    if (!session) {
      setMessage('SignIn to Register in event!');
      return;
    }

    const userId = session.user.name._id;

    const user_data = {
      first_name: session.user.name?.first_name,
      last_name: session.user.name?.last_name,
      institute_name: session.user.name?.institute,
      iEmail: session.user.name?.iEmail,
      eventName: event.eventName,
    };
    const response = await fetch(`/api/events/${eventId}/${userId}`, {
      method: 'POST',
      body: JSON.stringify(user_data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setMessage(data.message);
  };
  const startDate = new Date(event.startDate);
  const readableStart =
    startDate.getDate().toString() +
    ' ' +
    month[startDate.getMonth()] +
    ' ' +
    startDate.getFullYear().toString();
  const endDate = new Date(event.endDate);
  const readableEnd =
    endDate.getDate().toString() +
    ' ' +
    month[endDate.getMonth()] +
    ' ' +
    endDate.getFullYear().toString();
  return (
    <div>
      <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
          <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
            <h1 className="mt-1 uppercase font-montserrat text-lg font-semibold text-white sm:text-indigo-600 md:text-2xl ">
              {event.eventName}
            </h1>
            <p className="text-sm leading-4 font-medium md:text-lg text-white sm:text-indigo-600 ">
              {event.institute_name}
            </p>
          </div>
          <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
            <img
              src={imageF}
              style={{ objectFit: '' }}
              className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
              loading="lazy"
            />
            <img
              src={image}
              style={{ objectFit: 'contain' }}
              className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
              loading="lazy"
            />
            {/* <img
              src="/beach-house-interior-2.jpg"
              alt=""
              className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32"
              loading="lazy"
            /> */}
          </div>

          <dl className="mt-4 transition-all ease-in-out text-xs font-medium flex flex-col items-start gap-2 row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
            <div className="flex w-80 justify-between">
              <dd className="text-indigo-600 gap-1 flex items-center ">
                <EventIcon />
                <span>
                  <span>{readableStart}</span> &nbsp; to &nbsp;
                  <span>{readableEnd}</span>
                </span>
              </dd>

              <dd className="text-indigo-600 flex gap-1 items-center">
                <LocationOnIcon />
                <span>{event.state}</span>
              </dd>
            </div>
            <div className="flex w-80 justify-between">
              <dd className="text-indigo-600 gap-1 flex items-center">
                <AlternateEmailIcon />
                <span>{event.email}</span>
              </dd>
            </div>
            <div className="flex w-80 justify-between">
              <dd className="text-indigo-600 gap-1 flex items-center">
                <SchoolIcon />
                <span>{event.degree}</span>
              </dd>
              <dd className="text-indigo-600 gap-1 flex items-center">
                <DevicesIcon />
                <span>{event.modeOfConduct}</span>
              </dd>
            </div>
          </dl>
          <div className="mt-4 col-start-1 transition-all ease-in-out row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
            {message && (
              <div
                className={`flex max-w-fit rounded-lg mt-2 mb-2 items-center bg-orange-600 text-white text-sm font-bold px-2 py-2`}
                role="alert"
              >
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
                </svg>
                <p>{message}.</p>
              </div>
            )}
            <button
              type="button"
              onClick={handleRegister}
              className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
            >
              Register
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-600 tracking-wide leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 ">
            {event.description}
          </p>
        </div>
      </main>
    </div>
  );
}

export default EventDetails;
