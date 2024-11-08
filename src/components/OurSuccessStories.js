// components/SuccessStories.js
import React from 'react';

const SuccessStories = () => {
  // Dummy data for the success stories
  const stories = [
    {
      id: 1,
      title: 'Unleash Creativity With Maker4U',
      description: 'Your all-in-one solution for creating magnetic promotional products and flawless editing.',
      imageUrl: '/projects/maker4u.png', // Replace with actual image paths or URLs
      link: '#',
    },
    {
      id: 2,
      title: 'Welcome to Our Store2U',
      description: 'Discover a variety of products at unbeatable prices. Shop now and enjoy a seamless online shopping experience!',
      imageUrl: '/projects/maker4u.png', // Replace with actual image paths or URLs
      link: '#',
    },
    {
        id: 3,
        title: 'Welcome to Our Store2U',
        description: 'Discover a variety of products at unbeatable prices. Shop now and enjoy a seamless online shopping experience!',
        imageUrl: '/projects/maker4u.png', // Replace with actual image paths or URLs
        link: '#',
      },
      {
        id: 4,
        title: 'Welcome to Our Store2U',
        description: 'Discover a variety of products at unbeatable prices. Shop now and enjoy a seamless online shopping experience!',
        imageUrl: '/projects/maker4u.png', // Replace with actual image paths or URLs
        link: '#',
      },
  ];


  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="md:text-6xl text-4xl font-bold text-gray-900 mb-8 text-left">Our Success Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:rotate-3"
            >
              <img
                src={story.imageUrl}
                alt={story.title}
                className="w-full md:h-80 object-contain"
              />
              <div className="md:p-6 p-2">
                <h3 className="text-xl font-semibold text-gray-800">{story.title}</h3>
                <p className="text-gray-600 mt-2">{story.description}</p>
                <a
                  href={story.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
                >
                  View live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
