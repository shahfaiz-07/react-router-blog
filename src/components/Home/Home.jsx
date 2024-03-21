import React from 'react'

function Home() {
  return (
      <div className="flex flex-col gap-5 md:gap-14 py-3 items-center w-full px-[5%] mx-auto bg-[#212121]">
          <h1 className="text-center text-3xl font-extrabold md:text-5xl md:mt-6 text-white">
              Start{" "}
              <span className="bg-gradient-to-r from-[#51D389] to-[#A659F4] bg-clip-text text-transparent">
                  React Routing
              </span>{" "}
              for your project
          </h1>
          <p className="text-center md:text-xl md:w-[80%] text-white">
              Start gaining the traction you've always wanted with our
              next-level templates and designs. Crafted to help you tell your
              story.
          </p>
          <div
              id="home-buttons"
              className="w-[90%] flex flex-col md:flex-row gap-3 md:justify-center md:text-lg"
          >
              <button className="w-full md:w-fit py-3 md:px-5 bg-[#51D389] hover:bg-[#4a9a6d] text-white rounded-full">
                  Get Started <i className="ri-arrow-right-line"></i>
              </button>
              <button className="w-full md:w-fit py-3 md:px-5 bg-slate-100 hover:bg-slate-200 rounded-full">
                  Learn More <i className="ri-lightbulb-flash-line"></i>
              </button>
          </div>
          <div id="home-image-container" className="w-full">
              <div className="w-full bg-[#51D389] h-5 md:h-10 rounded-t-xl"></div>
              <img
                  src="https://cdn.devdojo.com/images/march2021/green-dashboard.jpg"
                  alt=""
              />
          </div>
      </div>
  );
}

export default Home
