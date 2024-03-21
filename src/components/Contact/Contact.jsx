import React from 'react'

function Contact() {
  return (
      <div className="flex flex-col md:flex-row items-center md:justify-around md:p-10">
          <div id="left-contact" className="p-6 w-[90%] max-w-96">
              <h1 className="text-white text-2xl font-semibold py-6">
                  Contact Us For <br /> More Info
              </h1>
              <div className="flex flex-col gap-3 leading-none">
                  <p className="text-lg">
                      <i className="ri-map-pin-line text-blue-400 text-xl"></i>
                      <span className="text-gray-300 mx-3">
                          Cecilia Chapman 711-2880 Nulla St. Mank
                      </span>
                  </p>
                  <p className="text-lg">
                      <i className="ri-phone-line text-blue-400 text-xl"></i>
                      <span className="text-gray-300 mx-3">(257) 563-7401</span>
                  </p>
                  <p className="text-lg">
                      <i className="ri-mail-line text-blue-400 text-xl"></i>
                      <span className="text-gray-300 mx-3">
                          acb@example.com
                      </span>
                  </p>
                  <div className="text-gray-100 flex flex-col gap-4 my-5">
                      <h4 className="text-gray-100">Follow Us</h4>
                      <div className="flex gap-3 text-2xl md:gap-6">
                          <i className="ri-twitter-x-line cursor-pointer"></i>
                          <i className="ri-linkedin-fill cursor-pointer"></i>
                          <i className="ri-facebook-fill cursor-pointer"></i>
                          <i className="ri-instagram-line cursor-pointer"></i>
                          <i className="ri-github-fill cursor-pointer"></i>
                      </div>
                  </div>
              </div>
          </div>
          <div
              id="right-contact"
              className="text-gray-200 w-[90%] max-w-96 bg-slate-900 p-6 rounded-lg"
          >
              <form
                  action="#"
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-col gap-2"
              >
                  <caption className="text-left text-gray-400">
                      What do you want to ask
                  </caption>
                  <label htmlFor="fname" className="text-sm">
                      Full Name
                  </label>
                  <input
                      type="text"
                      id="fname"
                      placeholder="Jerry Green"
                      className="w-full py-2 px-4 rounded bg-transparent border border-gray-500 outline-none focus:outline-blue-500 focus:outline-2"
                  />
                  <label htmlFor="email" className="mt-2 text-sm">
                      Email address
                  </label>
                  <input
                      type="email"
                      id="email"
                      placeholder="jerry@example.com"
                      className="w-full py-2 px-4 rounded bg-transparent border border-gray-500 outline-none focus:outline-blue-500 focus:outline-2"
                  />
                  <label htmlFor="message" className="mt-2 text-sm">
                      Message
                  </label>
                  <textarea
                      name="message"
                      id="message"
                      className="w-full bg-transparent border border-gray-500 py-2 px-4 rounded outline-none focus:outline-blue-500 focus:outline-2"
                      rows="5"
                      placeholder="Message..."
                  ></textarea>
                  <input
                      type="button"
                      value="Get in Touch"
                      className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-md my-3 cursor-pointer"
                  />
              </form>
          </div>
      </div>
  );
}

export default Contact
