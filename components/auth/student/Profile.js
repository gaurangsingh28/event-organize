import React, { useState, useEffect, useRef } from 'react';
import { getStates } from '../../../data/states';
import { getSession } from 'next-auth/react';

function Profile({ profile, institutes }) {
  const states = getStates();
  const [message, setMessage] = useState();
  const contactRef = useRef(null);
  const genderRef = useRef(null);
  const dobRef = useRef(null);
  const stateRef = useRef(null);
  const linkedInRef = useRef(null);
  const githubRef = useRef(null);
  const addressRef = useRef(null);
  const instituteRef = useRef(null);
  // const iEmailRef = useRef(null);
  const degreeRef = useRef(null);
  const semesterRef = useRef(null);
  const registerRef = useRef(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const profileData = {
      contact: contactRef.current.value,
      gender: genderRef.current.value,
      dob: dobRef.current.value,
      state: stateRef.current.value,
      linkedIn: linkedInRef.current.value,
      github: githubRef.current.value,
      address: addressRef.current.value,
      institute: instituteRef.current.value,
      // iEmail: iEmailRef.current.value,
      degree: degreeRef.current.value,
      semester: semesterRef.current.value,
      registerNumber: registerRef.current.value,
    };
    const session = await getSession();

    const response = await fetch(`/api/profile/${session.user.name._id}`, {
      method: 'POST',
      body: JSON.stringify(profileData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setMessage(
      'Updated Successfully!.. Login again to see the updates changes!'
    );
  };

  return (
    <form onSubmit={submitHandler} className="p-3 rounded-lg">
      {message && (
        <h5 className="bg-green-600 text-xs w-[50%] mx-auto p-2 rounded-lg text-center text-white font-bold tracking-wider mb-2">
          {message}
        </h5>
      )}
      <div className="bg-white h-96 sm:h-[75vh] overflow-scroll shadow-2xl sm:w-[96%] mx-auto grid grid-cols-1 gap-2 divide-indigo-700 divide-y-4 md:divide-y-0 md:divide-x-4 md:grid-cols-2 p-3 text-gray-900 rounded-lg">
        <div className="flex flex-col pl-1 pt-1 pb-1">
          <h1 className="font-montserrat">Personal Information</h1>

          {/* Name */}
          <div className="grid mt-2 grid-cols-1 sm:gap-1 sm:grid-cols-2">
            <div className="flex gap-1 mt-2 sm:mt-0 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  First Name
                </h6>
                <input
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  type="text"
                  name="first_name"
                  id="first_name"
                  disabled
                  defaultValue={profile?.first_name}
                />
              </div>
            </div>
            {/* lastName */}
            <div className="flex gap-1 mt-2 sm:mt-0 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  Last Name
                </h6>
                <input
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  type="text"
                  name="last_name"
                  id="last_name"
                  disabled
                  defaultValue={profile?.last_name}
                />
              </div>
            </div>
          </div>

          {/* Phone & Gender */}
          <div className="grid grid-cols-1 sm:mt-2 sm:gap-1 sm:grid-cols-2">
            <div className="flex gap-1 mt-2 sm:mt-0 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  Contact Number
                </h6>
                <input
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  type="tel"
                  minLength="10"
                  maxLength="10"
                  name="phone"
                  id="phone"
                  defaultValue={profile?.contact}
                  required
                  ref={contactRef}
                />
              </div>
            </div>
            {/* Gender */}
            <div className="flex gap-1 mt-2 sm:mt-0 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  Gender
                </h6>
                <select
                  name="gender"
                  id="gender"
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  defaultValue={profile?.gender}
                  required
                  ref={genderRef}
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
            </div>
          </div>

          {/* State & DOB */}
          <div className="grid grid-cols-1 sm:mt-2 sm:gap-1 sm:grid-cols-2">
            <div className="flex gap-1 mt-2 sm:mt-0 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  Date of Birth
                </h6>
                <input
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  type="date"
                  name="date_of_birth"
                  id="date_of_birth"
                  defaultValue={profile?.dob}
                  required
                  ref={dobRef}
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
                  name="state"
                  id="state"
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  defaultValue={profile?.state}
                  required
                  ref={stateRef}
                >
                  <option value="">Select State</option>
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

          {/* LinkedIn & Github */}
          <div className="grid grid-cols-1 sm:mt-2 sm:gap-1 sm:grid-cols-2">
            <div className="flex gap-1 mt-2 sm:mt-0 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  LinkedIn Profile
                </h6>
                <input
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  type="url"
                  name="linkedin"
                  id="linkedin"
                  defaultValue={profile?.linkedIn}
                  required
                  ref={linkedInRef}
                />
              </div>
            </div>
            {/* Github */}
            <div className="flex gap-1 mt-2 sm:mt-0 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  Github Profile
                </h6>
                <input
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  type="url"
                  name="github"
                  id="github"
                  defaultValue={profile?.github}
                  required
                  ref={githubRef}
                />
              </div>
            </div>
          </div>

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
                disabled
                defaultValue={profile?.email}
              />
            </div>
          </div>

          {/* Address */}
          <div className="flex gap-1 mt-2 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
            <div className="grow">
              <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                Home Address
              </h6>
              <textarea
                className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                type="text"
                name="address"
                id="address"
                defaultValue={profile?.address}
                required
                ref={addressRef}
              />
            </div>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col pl-1 sm:pl-2 pt-1">
          <h1 className="font-montserrat">Educational Information</h1>
          {/* Institute */}
          <div className="flex gap-1 mt-2 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
            <div className="grow">
              <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                Current Institute
              </h6>
              <select
                name="institute"
                id="institute_filter"
                className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                defaultValue={profile.institute}
                required
                ref={instituteRef}
              >
                <option value="" disabled className="bg-white text-indigo-600">
                  Select Institute
                </option>
                {institutes.map((institute) => (
                  <option
                    className="bg-white text-indigo-600"
                    value={institute.name}
                    key={institute.id}
                  >
                    {institute.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* College Email */}
          {/* <div className="flex gap-1 mt-2 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
            <div className="grow">
              <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                Institute Email Address
              </h6>
              <input
                className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                type="email"
                name="institute_email"
                id="institute_email"
                defaultValue={profile?.iEmail}
                required
                ref={iEmailRef}
              />
            </div>
          </div> */}

          {/* Degree */}
          <div className="flex gap-1 mt-2 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
            <div className="grow">
              <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                Degree (Ex. MCA,BTech,MTech..)
              </h6>
              <input
                className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                type="text"
                name="degree"
                id="degree"
                defaultValue={profile?.degree}
                required
                ref={degreeRef}
              />
            </div>
          </div>

          {/* semester & Roll No */}
          <div className="grid grid-cols-1 sm:mt-2 sm:gap-1 sm:grid-cols-2">
            <div className="flex gap-1 mt-2 sm:mt-0 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  Semester
                </h6>
                <input
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  type="number"
                  min="1"
                  name="semester"
                  id="semester"
                  defaultValue={profile?.semester}
                  required
                  ref={semesterRef}
                />
              </div>
            </div>
            {/* Roll No */}
            <div className="flex gap-1 mt-2 sm:mt-0 bg-indigo-500 shadow-xl px-2 py-2 rounded-xl">
              <div className="grow">
                <h6 className="text-xs font-semibold text-zinc-200 mb-1">
                  Roll / Registration Number
                </h6>
                <input
                  className="w-full placeholder:hidden border-0 focus-visible:bg-indigo-500 text-white text-sm font-bold focus-within:bg-indigo-500 outline-none bg-indigo-500"
                  type="text"
                  name="roll"
                  id="roll"
                  defaultValue={profile?.registerNumber}
                  required
                  ref={registerRef}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 flex justify-center">
        <button className="bg-violet-600 w-fit hover:scale-95 hover:drop-shadow-2xl hover:bg-white hover:text-violet-600 transition-all duration-500 ease-in-out border-0 outline-none tracking-widest rounded-3xl text-center font-semibold px-5 py-2 uppercase text-white">
          Save
        </button>
      </div>
    </form>
  );
}

export default Profile;
