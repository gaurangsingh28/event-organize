import React from 'react';

function Contact({ contact }) {
  return (
    <div className="shadow-md relative rounded-xl p-3 m-1 overflow-scroll">
      <h1 className="font-montserrat text-gray-800 text-sm sm:text-md my-1 font-extrabold">
        {contact.name}
      </h1>
      <h1 className="font-nunito text-gray-600 my-2 text-xs sm:text-sm font-bold tracking-wide">
        {contact.email}
      </h1>

      <p className="text-gray-500 max-h-12 text-sm">{contact.message}</p>
    </div>
  );
}

export default Contact;
