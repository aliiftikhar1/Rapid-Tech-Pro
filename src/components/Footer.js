// components/Footer.js
export default function Footer() {
  return (
      <footer className="bg-black w-full text-white py-16">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Company Section */}
                  <div className="">
                      <div className="flex gap-2 items-center mb-8">
                          <div className="h-4 w-4 bg-bluish rounded-full"></div>
                          <h3 className="text-xl text-gray-400">Company</h3>
                      </div>
                      <ul className="text-lg md:text-2xl">
                          <li>About Us</li>
                          <li>Testimonials</li>
                          <li>Process</li>
                          <li>Contact</li>
                      </ul>
                  </div>

                  {/* Resources Section */}
                  <div>
                      <div className="flex gap-2 items-center mb-8">
                          <div className="h-4 w-4 bg-bluish rounded-full"></div>
                          <h3 className="text-xl text-gray-400">Resources</h3>
                      </div>
                      <ul className="text-lg md:text-2xl">
                          <li>Blog</li>
                          <li>Events</li>
                          <li>Press Release</li>
                          <li>Work</li>
                      </ul>
                  </div>

                  {/* Services Section */}
                  <div>
                      <div className="flex gap-2 items-center mb-8">
                          <div className="h-4 w-4 bg-bluish rounded-full"></div>
                          <h3 className="text-xl text-gray-400">Services</h3>
                      </div>
                      <ul className="text-lg md:text-2xl">
                          <li>Mobile App</li>
                          <li>Game Development</li>
                          <li>Blockchain Development</li>
                          <li>AI Development</li>
                      </ul>
                  </div>

                  {/* Insights Section */}
                  <div>
                      <div className="flex gap-2 items-center mb-8">
                          <div className="h-4 w-4 bg-bluish rounded-full"></div>
                          <h3 className="text-xl text-gray-400">Insights</h3>
                      </div>
                      <ul className="text-lg md:text-2xl">
                          <li>University</li>
                          <li>Careers</li>
                          <li>Manifesto</li>
                          <li>Culture Book</li>
                      </ul>
                  </div>
              </div>

              {/* Location Section */}
              <div className="mt-16">
                  <div className="flex gap-2 items-center mb-8">
                      <div className="h-4 w-4 bg-bluish rounded-full"></div>
                      <h3 className="text-xl text-gray-400">Locations</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div>
                          <p className="text-xl md:text-3xl font-bold mb-4">Manchester</p>
                          <p>73 Meadway, Bramhall</p>
                          <p>Stockport, Manchester - SK7 1LX,</p>
                          <p>United Kingdom</p>
                      </div>

                      <div>
                          <p className="text-xl md:text-3xl font-bold mb-4">Dubai</p>
                          <p>Building 11, Level 7, Bay Square,</p>
                          <p>Business Bay, Dubai - 23304,</p>
                          <p>United Arab Emirates</p>
                      </div>

                      <div>
                          <p className="text-xl md:text-3xl font-bold mb-4">Mandi Bahauddin</p>
                          <p>54C, Phalia Road, Punjab Center,</p>
                          <p>Mandi Bahauddin - 75400,</p>
                          <p>Pakistan</p>
                      </div>
                  </div>
              </div>

              {/* Contact Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-xl md:text-2xl">
                      <p className="font-bold">+92 340 3051059</p>
                      <p>RapidTec@gmail.com</p>
                  </div>

                  <div className="flex flex-col md:items-center items-start">
                      <p className="text-3xl font-bold text-white mb-4">
                          Rapid<span className="text-bluish">TecPro</span>
                      </p>
                      <p>© 2024 RapidTecPro All Rights Reserved</p>
                  </div>

                  {/* Social Media and Links */}
                  <div className="flex flex-col items-center space-y-4 md:space-y-0">
                      <div className="flex space-x-4 text-2xl">
                          <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">in</a>
                          <a href="#" aria-label="X" className="hover:text-gray-400">X</a>
                          <a href="#" aria-label="Facebook" className="hover:text-gray-400">F</a>
                      </div>
                      <div className="flex gap-4 text-sm md:text-lg">
                          <a href="/">Privacy Policy</a>
                          <a href="/">Terms and Conditions</a>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
  );
}
