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
      name: 'webPlatforms',
      title: 'Web Platforms',
      content: ['React', 'Angular', 'Vue', 'Next.js', 'Svelte', 'Nuxt.js', 'Ember.js', 'Backbone.js', 'Bootstrap', 'jQuery'],
    },
    {
      name: 'database',
      title: 'Database',
      content: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQLite', 'OracleDB', 'Cassandra', 'Firebase Realtime Database', 'Redis', 'Neo4j', 'DynamoDB'],
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
      name: 'php',
      title: 'PHP',
      content: ['Laravel', 'CodeIgniter', 'Symfony', 'Yii', 'Zend Framework', 'CakePHP', 'Phalcon', 'Slim', 'FuelPHP', 'Lumen'],
    },
    {
      name: 'nextjs',
      title: 'Next.js',
      content: ['Server-side Rendering', 'Static Site Generation', 'API Routes', 'Image Optimization', 'Incremental Static Regeneration', 'Dynamic Routing', 'Middleware', 'Edge Functions', 'React Fast Refresh', 'SEO Optimization'],
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
              <h3 className="text-4xl mb-2">{subCategory}</h3>
              <div className="grid grid-cols-3 gap-4">
                {items.map((item, index) => (
                  <div key={index} className="bg-gray-200 text-center rounded-full px-4 py-2 text-3xl">
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
            <div key={index} className="bg-gray-200 text-center rounded-full px-4 py-2 text-3xl">
              {item}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="flex text-2xl h-screen">
      {/* Left Side - Tabs */}
      <div className="w-1/4 text-black p-6 border-t">
        <div className="space-y-4">
          {tabData.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`w-full text-left py-2 px-4 rounded-lg hover:bg-gradient-to-r from-blue-300 to-white ${
                activeTab === tab.name ? 'bg-gradient-to-r from-blue-300 to-white' : ''
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Right Side - Tab Content */}
      <div className="w-3/4 border-t border-l p-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default TabsSection;
