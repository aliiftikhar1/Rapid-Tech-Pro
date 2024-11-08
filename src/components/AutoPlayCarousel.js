
import React from 'react';

const Autoplayslider = ({ companyNames }) => {

  const extendedNames = [...companyNames, ...companyNames];

  return (
    <div className="relative overflow-hidden py-10 md:py-20">

      <ul className="whitespace-nowrap animate-marquee flex list-none p-0">
        {extendedNames.map((name, index) => (
          <li key={index} className="inline-flex items-center mr-12 text-3xl md:text-6xl font-light text-gray-700">
            <div className="md:h-6 md:w-6 h-3 w-3 bg-gray-700 rounded-full mr-4 flex items-center justify-center">
            </div>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Autoplayslider;
