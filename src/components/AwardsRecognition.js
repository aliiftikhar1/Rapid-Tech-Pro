// components/AwardsAndRecognitions.js
import React from 'react';

const AwardsAndRecognitions = () => {
  const awardsData = [
    {
      company: 'Clutch',
      rating: 4.9,
      description: 'Acclaimed as a top-rated software development company 2024',
      icon: '★', // Star icon for rating
    },
    {
      company: 'GoodFirms',
      rating: 4.9,
      description: 'Acknowledged among the top software consulting experts 2024',
      icon: '⭐', // Star icon for rating
    },
    {
      company: 'Clutch',
      rating: 4.9,
      description: 'Acclaimed as a top-rated software development company 2024',
      icon: '★', // Star icon for rating
    },
    {
      company: 'GoodFirms',
      rating: 4.9,
      description: 'Acknowledged among the top software consulting experts 2024',
      icon: '⭐', // Star icon for rating
    },
  ];

  return (
    <section className="bg-black text-white py-10 md:py-20 px-2 md:px-16">
      <h2 className="md:text-6xl text-4xl max-w-xl font-bold text-left mb-8">
        Our Awards and <span className="text-blue-500">Recognitions.</span>
      </h2>
      <p className=" text-lg text-justify md:text-2xl md:font-extralight font-light mb-12 max-w-5xl">
        Recognized globally for our industry-leading development expertise and innovative solutions. Creating innovative, user-friendly, and life-changing products is what we do!
      </p>
      <div className=" md:h-[300px] flex justify-center gap-6 flex-wrap">
        {awardsData.map((award, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center bg-gradient-to-br  from-black/10  to-gray-500 rounded-lg p-6 w-80 text-left"
          >
            <div className="flex justify-between items-center gap-2 mb-4 w-full">
                <div className='flex justify-center items-center'> <h3 className="font-semibold text-2xl mb-4">{award.company}</h3></div>
                <div className='flex justify-center items-center'>
              <span className="text-yellow-500">{award.icon}</span>
              <span className="text-2xl">{award.rating}</span>
              </div>
            </div>
           
            <p className="text-sm text-gray-400">{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsAndRecognitions;
