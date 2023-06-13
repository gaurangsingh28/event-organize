import React from 'react';
import Link from 'next/link';

function Hero() {
  return (
    <div className="h-56 mx-8 text-white shadow-xl my-5 md:h-64 lg:h-72 p-2 bg-indigo-600 rounded-2xl">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-md sm:text-xl md:text-2xl lg:text-3xl font-montserrat">
          One Roof for all Events from NIT&apos;s
        </h1>
        <h2 className="text-sm sm:text-md mt-4 mb-1 font-montserrat">
          Want to list an event ?
        </h2>
        <Link href="/auth">
          <a className="btn btn-sm transition-all ease-in-out duration-500 hover:shadow-xl text-xs hover:scale-95 sm:text-md sm:btn-md bg-indigo-500 hover:bg-indigo-400 border-0">
            List an Event
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
