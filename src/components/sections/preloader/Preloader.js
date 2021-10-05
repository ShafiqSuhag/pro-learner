import React from 'react';

const Preloader = () => {
    return (
        <div className=" flex justify-center items-center bg-white">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
};

export default Preloader;