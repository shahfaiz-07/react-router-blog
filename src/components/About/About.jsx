import React from 'react'

function About() {
  return (
      <div className="text-white text-center flex flex-col md:flex-row md:justify-around items-center gap-3 pt-5 w-[90%] mx-auto md:pt-10 md:text-left">
          <div className="w-full md:max-w-96">
              <h5>ABOUT</h5>
              <h1 className="text-3xl md:text-4xl md:my-3 font-bold">
                  About US
              </h1>
              <p className="text-left font-light my-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eaque sint cumque laboriosam sunt veniam nemo vero perferendis
                  hic earum consequatur.
              </p>
              <div className="font-semibold flex gap-5 justify-evenly w-full md:justify-start md:my-5">
                  <button className="py-2 px-5 bg-white text-black shadow-slate-400 shadow-md active:shadow-sm md:text-lg">
                      Get Started
                  </button>
                  <button className="py-2 px-5 bg-[#313131] shadow-gray-900 shadow-md active:shadow-sm md:text-lg">
                      Learn More
                  </button>
              </div>
          </div>
          <div className="relative overflow-hidden mt-14 h-96 md:h-full">
              <img
                  src="https://kitwind.io/assets/kometa/two-thirds-phone.png"
                  alt=""
                  className="relative w-full md:w-96 object-cover"
              />
          </div>
      </div>
  );
}

export default About
