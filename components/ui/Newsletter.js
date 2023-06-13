import React, { useRef, useState } from 'react';

import EmailIcon from '../icons/EmailIcon';
import CheckIcon from '@mui/icons-material/Check';

function Newsletter() {
  const emailRef = useRef(null);
  const [message, setMessage] = useState(null);
  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const response = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify(email),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    if (data.message) setMessage(data.message);
    document.getElementById('subscribe').reset();
  };

  return (
    <div className="bg-white  my-8 rounded-md pb-3 px-2 mx-8 h-64">
      <div className=" h-full items-center justify-evenly flex flex-col space-x-2 md:flex-row">
        <div className="flex pt-3 flex-col justify-start items-center">
          <EmailIcon className="h-16 w-16 text-indigo-800" />
          <h2 className="uppercase tracking-widest font-montserrat md:text-lg text-indigo-800">
            Subscribe
          </h2>
          <h6 className="tracking-wider text-indigo-600 text-xs md:text-sm text-center font-montserrat">
            Get updated to the latest events by subscribing to our newsletters.
          </h6>
        </div>

        <div className="p-6 my-2 bg-indigo-600 rounded-xl">
          <form onSubmit={submitHandler} id="subscribe">
            <div>
              {message && (
                <p className="tracking-wide text-green-300 font-montserrat text-xs md:text-md text-center">
                  {message}
                </p>
              )}
              <div className="flex ease-in-out duration-500 transition-transform my-1 bg-white space-x-2 focus-within:scale-105 hover:scale-105 px-2 py-2 w-full overflow-hidden rounded-full ">
                <input
                  ref={emailRef}
                  type="email"
                  className="flex-grow font-semibold outline-none text-indigo-600 placeholder:text-indigo-300 p-1"
                  placeholder="Enter your email address"
                />
                <button
                  type="submit"
                  className="flex justify-center transition-all ease-in-out duration-300 items-center space-x-1 px-3 bg-indigo-600 text-white hover:bg-white border-indigo-600 border-2 hover:text-indigo-600 rounded-full"
                >
                  <CheckIcon className="h-8" />
                  <span className="hidden  uppercase font-bold text-xs tracking-wider lg:block">
                    Subscribe
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
