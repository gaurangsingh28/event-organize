import React, { useRef, useState } from 'react';
import Head from 'next/head';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const [feedback, setFeedback] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const d = await response.json();
    setFeedback(d.message);
    document.getElementById('contact').reset();
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="antialiased bg-gray-100">
        <div className="flex w-full min-h-[80%] md:py-3 justify-center items-center">
          <div className="flex flex-col md:flex-row md:space-x-8 md:space-y-0 overflow-hidden space-y-6 bg-indigo-600 w-full max-w-4xl p-8 md:p-12 md:rounded-lg shadow-lg text-white">
            <div className="flex flex-col space-y-8 justify-around">
              <div>
                <h1 className="font-bold text-4xl font-montserrat tracking-wide">
                  Contact Us
                </h1>
                <p className="pt-2 font-nunito text-indigo-200 text-sm">
                  Feel free to get in touch with us with regard to any query.
                  Drop a message in case other medium of contacts are
                  unavailable.
                </p>
              </div>
              <div className="flex font-semibold tracking-wide text-sm items-start flex-col text-white space-y-6">
                <div className="justify-center flex  items-center space-x-2 ">
                  <span>
                    <LocalPhoneIcon />
                  </span>
                  <span>+91 6353693537</span>
                </div>
                <div className="justify-center flex  items-center space-x-2 ">
                  <span>
                    <AlternateEmailIcon />
                  </span>
                  <span>harshkawadia8.hk@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute hidden md:block -right-28 -top-20 z-0 w-40 h-40 bg-indigo-300 rounded-full"></div>
              <div className="absolute hidden md:block -left-20 -bottom-16 z-0 w-40 h-40 bg-indigo-300 rounded-full"></div>
              <div className="bg-white relative z-10 md:w-80 rounded-xl drop-shadow-xl p-6 text-gray-600">
                <form
                  id="contact"
                  onSubmit={handleSubmit}
                  className="flex flex-col space-y-4"
                >
                  {feedback && (
                    <p className="text-sm font-bold text-green-600 tracking-wide">
                      {feedback}
                    </p>
                  )}
                  <div>
                    <label htmlFor="name" className="text-sm font-bold">
                      Your Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      required
                      ref={nameRef}
                      className="ring-1 ring-gray-300 focus:ring-2 mt-2 focus:ring-indigo-300 w-full rounded-md px-4 py-2 outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-bold">
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      required
                      ref={emailRef}
                      placeholder="Your Email address"
                      className="ring-1 ring-gray-300 focus:ring-2 mt-2 focus:ring-indigo-300 w-full rounded-md px-4 py-2 outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-bold">
                      Message
                    </label>

                    <textarea
                      id="message"
                      rows="4"
                      type="text"
                      required
                      ref={messageRef}
                      placeholder="Message goes here"
                      className="ring-1 ring-gray-300 focus:ring-2 mt-2 focus:ring-indigo-300 w-full rounded-md px-4 py-2 outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-2 uppercase text-sm inline-block self-end bg-indigo-600 text-white font-bold rounded-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
