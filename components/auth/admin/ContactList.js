import React from 'react';

import Contact from './Contact';

function ContactList({ contacts }) {
  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
      {contacts.map((contact, index) => (
        <Contact key={index} contact={contact} />
      ))}
    </div>
  );
}

export default ContactList;
