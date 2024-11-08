// components/CallToAction.js

export default function CallToAction() {
    return (
      <div className="bg-white py-10 md:py-32 flex flex-col items-center text-center">
        <p className="text-gray-500 text-lg mb-2">Pull the Trigger!</p>
        <h2 className="text-4xl md:text-7xl font-bold text-gray-900 mb-8">
          Let’s Bring Your <br /> Vision to Life.
        </h2>
        <button className="px-6 py-3 bg-black text-white rounded-full text-xs md:text-lg font-medium hover:bg-gray-800 transition duration-200">
          Book free Consultancy
        </button>
      </div>
    );
  }
  