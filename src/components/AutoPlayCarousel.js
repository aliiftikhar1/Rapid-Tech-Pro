// components/Autoplayslider.js
import React from 'react';

const Autoplayslider = ({ companyNames }) => {
  // Duplicate the company names array to create the infinite effect
  const extendedNames = [...companyNames, ...companyNames];

  return (
    <div className="relative overflow-hidden">
      {/* Company Names Slider */}
      <ul className="whitespace-nowrap animate-marquee flex list-none p-0">
        {extendedNames.map((name, index) => (
          <li key={index} className="inline-flex items-center mr-12 text-7xl font-light text-gray-700">
            {/* Black Circle */}
            <div className="h-6 w-6 bg-gray-700 rounded-full mr-4 flex items-center justify-center">
              {/* <span className="text-white">{index + 1}</span> */}
            </div>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Autoplayslider;
