// components/TestimonialSlider.js
'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: 'Hamed Al Zadjali',
    title: 'Digital Manager',
    rating: 5,
    review:
      'RapidTecPro managed to provide successful support and development in a timely manner. The app is still in preparation for the beta launch, but it has been receiving a lot of positive feedback from the client. The team provided excellent workflow and communication throughout the project.',
  },
  {
    id: 2,
    name: 'Emily Johnson',
    title: 'Project Lead',
    rating: 5,
    review:
      'The team at RapidTecPro was amazing. They took our vision and turned it into reality seamlessly. Communication was always clear, and they went above and beyond to meet our deadlines.',
  },
  {
    id: 3,
    name: 'John Doe',
    title: 'CEO',
    rating: 5,
    review:
      'A highly skilled and reliable team! RapidTecPro exceeded our expectations in every way. The project was delivered ahead of schedule, and the quality of work was exceptional.',
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change review every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black md:min-h-screen flex items-center justify-center md:px-4 py-8 md:py-16">
      <div className="text-center md:max-w-3xl mx-auto text-white">
        <h2 className="text-xl md:text-4xl font-bold mb-6">
          Our Clients Simply love <span className="text-blue-400">What We Do.</span>
        </h2>
        <p className="text-gray-400 mb-10 text-sm md:text-lg">
          Proud to serve as the innovation partner for industry leaders who have experienced our expertise and excellence firsthand.
        </p>
        <div className="flex justify-center items-center space-x-4 mb-10">
          <div className="text-blue-400 text-4xl font-bold">R</div>
          <div className="text-gray-400">52 REVIEWS</div>
          <div className="text-blue-400 text-4xl font-bold">F</div>
          <div className="text-gray-400">32 REVIEWS</div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[currentIndex].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="border border-white p-8 rounded-lg shadow-xl flex flex-col justify-between h-[270px] md:h-[300px] md:w-[800px]"
            >
                <div>
              <p className="text-sm text-justify md:text-lg mb-6 text-gray-300 ">
                &ldquo;{reviews[currentIndex].review}&rdquo;
              </p>
              </div>
              <div className="flex items-center justify-start">
                <div className="bg-blue-400 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-sm md:text-xl font-bold text-gray-900 mr-4">
                  {reviews[currentIndex].name.split(' ').map(word => word[0]).join('')}
                </div>
                <div className="text-left">
                  <p className="text-sm md:text-base font-semibold text-white">{reviews[currentIndex].name}</p>
                  <p className="text-xs md:text-sm text-gray-400">{reviews[currentIndex].title}</p>
                  <div className="text-xs md:text-base flex text-yellow-400">
                    {Array.from({ length: reviews[currentIndex].rating }).map((_, i) => (
                      <span key={i} className="mr-1">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots for manual navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full ${
                  currentIndex === index ? 'bg-blue-400' : 'bg-gray-600'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
