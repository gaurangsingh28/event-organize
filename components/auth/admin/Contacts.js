import React from 'react';
import ContactList from './ContactList';

function Contacts({ contacts }) {
  return (
    <div className="p-3 rounded-lg">
      {contacts.length >= 1 && (
        <div className=" bg-white border-red-500 h-96 sm:h-[75vh] overflow-scroll shadow-2xl sm:w-[96%] mx-auto divide-indigo-700 p-3 text-gray-900 rounded-lg">
          <h1 className=" sticky left-0 bg-white uppercase text-center text-gray-800 font-montserrat">
            Inquiries
          </h1>
          <ContactList contacts={contacts} />
        </div>
      )}
      {contacts.length === 0 && (
        <h1 className="text-indigo-600 font-montserrat tracking-wider font-sm text-center">
          No Inquiries Yet!!
        </h1>
      )}
    </div>
  );
}

export default Contacts;
