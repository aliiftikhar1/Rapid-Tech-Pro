'use client'
import React, { useState } from 'react';

// Define the list of tabs and their respective data
const tabData = [
  {
    name: 'mobileApps',
    title: 'Mobile Apps',
    content: {
      iOS: ['Swift', 'UI Kit', 'RxSwift', 'Combine', 'MVVM', 'Core Data', 'SwiftUI', 'Realm', 'Alamofire', 'MapKit'],
      android: ['Java', 'Kotlin', 'Retrofit', 'RxJava', 'Coroutines', 'Room', 'Dagger', 'Hilt', 'Jetpack Compose', 'LiveData'],
    },
  },

  {
    name: 'flutter',
    title: 'Flutter',
    content: ['Dart', 'Flutter SDK', 'Flutter Web', 'Provider', 'BLoC', 'GetX', 'Riverpod', 'Flame', 'FlutterFire', 'Hive'],
  },
  {
    name: 'nodejs',
    title: 'Node.js',
    content: ['Express', 'NestJS', 'Koa', 'Socket.io', 'Mongoose', 'PM2', 'Jest', 'Apollo Server', 'Fastify', 'Microservices'],
  },
  {
    name: 'nextjs',
    title: 'Next.js',
    content: ['Server-side', 'Static Site ', 'API Routes', 'Image Optimization', 'Dynamic Routing', 'Middleware', 'Edge Functions', 'React Fast Refresh', 'SEO Optimization'],
  },
  {
    name: 'firebase',
    title: 'Firebase',
    content: ['Authentication', 'Firestore', 'Firebase Realtime Database', 'Cloud Functions', 'Hosting', 'Cloud Storage', 'Firebase Analytics', 'Remote Config', 'Performance Monitoring', 'Crashlytics'],
  },
  {
    name: 'python',
    title: 'Python',
    content: ['Django', 'Flask', 'FastAPI', 'Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow', 'Keras', 'Beautiful Soup', 'Celery'],
  },
];



const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].name); // Default tab is the first one

  // Render content based on active tab
  const renderTabContent = () => {
    const activeTabData = tabData.find((tab) => tab.name === activeTab);

    if (!activeTabData) return <div>Select a tab to view the content</div>;

    if (typeof activeTabData.content === 'object' && !Array.isArray(activeTabData.content)) {
      // Display for nested objects (like mobileApps with iOS and Android)
      return (
        <div className="flex flex-col gap-8">
          {Object.entries(activeTabData.content).map(([subCategory, items]) => (
            <div key={subCategory}>
              <h3 className="md:text-4xl text-2xl mb-2">{subCategory}</h3>
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                {items.map((item, index) => (
                  <div key={index} className="bg-gray-200 text-center rounded-full md:px-4 px-2 py-1 md:py-2 text-sm md:text-2xl">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      // Display for arrays
      return (
        <div className="grid grid-cols-3 gap-2">
          {activeTabData.content.map((item, index) => (
            <div key={index} className="bg-gray-200 text-center rounded-full md:px-4 md:py-2 px-2 py-1 text-sm md:text-2xl">
              {item}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col md:flex-row text-lg md:text-2xl md:h-screen md:px-28 mx-auto w-full">
      {/* Left Side - Tabs */}
      <div className="md:w-1/4 text-black md:p-6 p-6 md:border-t">
        <div className="flex flex-row md:flex-col md:space-y-4 overflow-x-auto overflow-y-hidden no-scrollbar">
          {tabData.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`min-w-max text-left md:py-2 md:px-4 px-2 py-1 rounded-lg  
            ${activeTab === tab.name
                  ? 'font-bold md:font-normal md:bg-gradient-to-r from-blue-300 to-white underline md:no-underline'
                  : ''}`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>



      {/* Right Side - Tab Content */}
      <div className="w-full border-t md:border-l p-6">
        <div className='max-w-3xl'>
        {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default TabsSection;
