import React from 'react';

function Footer() {
  return (
    <div className="absolute bottom-0 w-full pb-3 pt-1 text-md flex flex-col justify-between px-2 items-center text-white bg-indigo-600 h-16">
      <h1 className="font-semibold tracking-wide">
        Copyright © 2023 EventsForYou
      </h1>
      <h1 className="text-sm font-medium">
        Made with <span className="text-red-600">❤</span> by Gaurang Singh Kushwaha
      </h1>
    </div>
  );
}

export default Footer;
