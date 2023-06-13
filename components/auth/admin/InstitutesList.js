import React from 'react';

import Institute from './Institute';

function InstitutesList({ institutes }) {
  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
      {institutes.map((institute) => (
        <Institute key={institute.id} institute={institute} />
      ))}
    </div>
  );
}

export default InstitutesList;
