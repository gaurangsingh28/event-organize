import React from 'react';
import Loader from './Loader';

function Loading() {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <Loader />
    </div>
  );
}

export default Loading;
