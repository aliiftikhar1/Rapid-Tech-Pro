// components/Industries.js

export default function Industries() {
    const industries = [
      {
        name: 'Automotive',
        description: 'Improve your vehicle management and enhance customer satisfaction with custom solutions.',
        tags: ['Fleet Management', 'Telematics', 'Dealer Portal', 'Inventory', 'CRM'],
      },
      {
        name: 'Finance',
        description: 'Get scalable solutions that improve the efficiency and security of your financial services.',
        tags: ['Fleet Management', 'Telematics', 'Dealer Portal', 'Inventory', 'CRM'],
      },
      {
        name: 'Real Estate',
        description: 'Our real estate solutions streamline operations, simplifying property management and sales.',
        tags: ['Fleet Management', 'Telematics', 'Dealer Portal', 'Inventory', 'CRM'],
      },
      {
        name: 'Hospitality',
        description: 'Get user-friendly solutions that enhance guest experiences and boost customer satisfaction.',
        tags: ['Fleet Management', 'Telematics', 'Dealer Portal', 'Inventory', 'CRM'],
      },
      {
        name: 'Education',
        description: 'Revolutionize ed-tech with solutions that boost student engagement and simplify learning.',
        tags: ['Fleet Management', 'Telematics', 'Dealer Portal', 'Inventory', 'CRM'],
      },
      {
        name: 'Healthcare',
        description: 'Our solutions enhance healthcare by streamlining processes and improving patient care.',
        tags: ['Fleet Management', 'Telematics', 'Dealer Portal', 'Inventory', 'CRM'],
      },
    ];
  
    return (
      <div className="bg-white py-8 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-left mb-12">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-900">
            Industries We Serve.
          </h2>
          <p className="text-gray-600 mt-4 text-lg text-justify md:text-2xl max-w-4xl">
            With a wide range of services and proven experience across major industries, we understand your challenges and deliver tailored solutions that overcome them and drive meaningful impact.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`border-2 flex flex-col justify-between rounded-xl p-2 md:p-6 md:h-[320px] pr-10 bg-white shadow-sm border-gray-500 hover:border-blue-400`}>
                 <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                {industry.name}
              </h3>
              </div>
              <div>
              <p className="text-gray-600 mb-4 text-base text-justify md:text-xl">{industry.description}</p>
             </div>
              <div className="flex flex-wrap gap-1 md:gap-2">
                {industry.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm md:text-lg font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  