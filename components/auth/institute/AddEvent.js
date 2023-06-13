import React, { useRef, useState } from 'react';
import { getSession } from 'next-auth/react';

import { getStates } from '../../../data/states';

function AddEvent() {
  const states = getStates();

  const [message, setMessage] = useState();
  const emailRef = useRef(null);
  const contactRef = useRef(null);
  const stateRef = useRef(null);
  const eventNameRef = useRef(null);
  const degreeRef = useRef(null);
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  const minSemRef = useRef(null);
  const modeOfConductRef = useRef(null);
  const descriptionRef = useRef(null);

  const registerEvent = async (data) => {
    const response = await fetch('/api/events/institute', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      email: emailRef.current.value,
      contact: contactRef.current.value,
      state: stateRef.current.value,
      eventName: eventNameRef.current.value,
      degree: degreeRef.current.value,
      startDate: startDateRef.current.value,
      endDate: endDateRef.current.value,
      minSem: minSemRef.current.value,
      modeOfConduct: modeOfConductRef.current.value,
      description: descriptionRef.current.value,
      isActive: false,
    };
    const session = await getSession();
    data.institute_name = session.user.name.institute_name;
    data.user_id = session.user.name._id;

    const response = await registerEvent(data);
    setMessage('Added Successfully!');
    document.getElementById('eventAdd').reset();
  };

  return (
    <form id="eventAdd" className="p-3 rounded-lg" onSubmit={handleSubmit}>
      {message && (
        <h1 className="bg-green-600 w-[50%] mx-auto p-2 rounded-lg text-center text-white font-bold tracking-wider mb-2">
          {message}
        </h1>
      )}
      <div className="bg-white h-96 sm:h-[75vh] overflow-scroll shadow-2xl sm:w-[96%] mx-auto grid grid-cols-1 gap-2 divide-indigo-700 divide-y-4 md:divide-y-0 md:divide-x-4 md:grid-cols-2 p-3 text-gray-900 rounded-lg">
        <div className="flex flex-col pl-1 pt-1 pb-1">
          <h1 className="font-montserrat">Host Details</h1>

          {/* Email */}
          <div className="flex gap-1 mt-2 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
            <div className="grow">
              <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                Email Address
              </h6>
              <input
                className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                type="email"
                name="email"
                id="email"
                ref={emailRef}
                required
              />
            </div>
          </div>

          {/* Phone & State */}
          <div className="grid grid-cols-1 sm:mt-2 sm:gap-1 sm:grid-cols-2">
            <div className="flex gap-1 mt-2 sm:mt-0 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  Contact Number
                </h6>
                <input
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  type="tel"
                  name="phone"
                  id="phone"
                  maxLength="10"
                  minLength="10"
                  ref={contactRef}
                  required
                />
              </div>
            </div>
            {/* State*/}
            <div className="flex gap-1 mt-2 sm:mt-0 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  State
                </h6>
                <select
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  name="state"
                  id="state"
                  defaultValue=""
                  ref={stateRef}
                  required
                >
                  <option
                    value=""
                    disabled
                    className="bg-white text-indigo-600"
                  >
                    Select State
                  </option>
                  {states.map((state) => (
                    <option
                      value={state.name}
                      className="bg-white text-indigo-600"
                      key={state.id}
                    >
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col pl-1 sm:pl-2 pt-1">
          <h1 className="font-montserrat">Event Details</h1>

          {/* Event Name */}
          <div className="flex gap-1 mt-2 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
            <div className="grow">
              <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                Event Name
              </h6>
              <input
                className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                type="text"
                name="event_name"
                id="event_name"
                ref={eventNameRef}
                required
              />
            </div>
          </div>

          {/* Degree */}
          <div className="flex gap-1 mt-2 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
            <div className="grow">
              <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                Degree (Ex. MSc,MCA,BTech,MTech..)
              </h6>
              <input
                className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                type="text"
                name="degree"
                id="degree"
                ref={degreeRef}
                required
              />
            </div>
          </div>

          {/* Start Date & End Date */}
          <div className="grid grid-cols-1 sm:mt-2 sm:gap-1 sm:grid-cols-2">
            <div className="flex gap-1 mt-2 sm:mt-0 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  Start Date
                </h6>
                <input
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  type="date"
                  name="start_date"
                  id="start_date"
                  ref={startDateRef}
                  required
                />
              </div>
            </div>
            {/* End date */}
            <div className="flex gap-1 mt-2 sm:mt-0 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  End Date
                </h6>
                <input
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  type="date"
                  name="end_date"
                  id="end_date"
                  ref={endDateRef}
                  required
                />
              </div>
            </div>
          </div>

          {/* semester & Roll No */}
          <div className="grid grid-cols-1 sm:mt-2 sm:gap-1 sm:grid-cols-2">
            <div className="flex gap-1 mt-2 sm:mt-0 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  Minimum Semester Allowed
                </h6>
                <input
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  type="number"
                  min="1"
                  name="semester"
                  id="semester"
                  ref={minSemRef}
                  required
                />
              </div>
            </div>
            {/* Mode of Conduct*/}
            <div className="flex gap-1 mt-2 sm:mt-0 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  Mode of Conduct
                </h6>
                <select
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  name="mode"
                  id="mode"
                  defaultValue=""
                  ref={modeOfConductRef}
                  required
                >
                  <option value="">Select Mode of Conduct</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="flex gap-1 mt-2 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
            <div className="grow">
              <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                Event Description
              </h6>
              <textarea
                className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                type="text"
                name="description"
                id="description"
                ref={descriptionRef}
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 flex justify-center">
        <button
          type="submit"
          className="bg-violet-600 w-fit hover:scale-95 hover:drop-shadow-2xl hover:bg-white hover:text-violet-600 transition-all duration-500 ease-in-out border-0 outline-none tracking-widest rounded-3xl text-center font-semibold px-5 py-2 uppercase text-white"
        >
          List Event
        </button>
      </div>
    </form>
  );
}

export default AddEvent;
