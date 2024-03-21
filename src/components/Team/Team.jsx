import React from 'react'

const Team = () => {
  return (
      <div className="flex flex-col gap-5 md:gap-10 py-6 items-center w-full px-[5%] mx-auto bg-[#212121] ">
          <h1 className="text-white text-2xl md:text-4xl font-bold mt-6">
              Tailus blocks leadership
          </h1>
          <p className="text-center md:text-xl md:w-[80%] text-white">
              Tailus prides itself not only on award-winning technology, but
              also on the talent of its people of some of the brightest minds
              and most experienced executives in business.
          </p>
          <div id="team-images" className="flex flex-col gap-5 my-4 sm:flex-row sm:flex-wrap md:flex-nowrap md:gap-10 sm:justify-center md:items-center">
              <div className="w-52 overflow-hidden object-center rounded-xl">
                  <img
                      src="https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="w-full h-60 object-cover rounded-xl"
                  />
                  <div className="text-white w-48 text-center my-3">
                      <h2 className="text-2xl">Jack Finnigan</h2>
                      <h3 className="text-slate-300">CEO-Founder</h3>
                  </div>
              </div>
              <div className="w-52 md:w-64 overflow-hidden object-center rounded-xl">
                  <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="w-full h-60 md:h-80 object-cover rounded-xl"
                  />
                  <div className="text-white w-full text-center my-3">
                      <h2 className="text-2xl">Jurica Koletić</h2>
                      <h3 className="text-slate-300">
                          Cheif Technical Officer
                      </h3>
                  </div>
              </div>
              <div className="w-52 overflow-hidden object-center rounded-xl">
                  <img
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="w-full h-60 object-cover rounded-xl"
                  />
                  <div className="text-white w-48 text-center my-3">
                      <h2 className="text-2xl">Jake Nackos</h2>
                      <h3 className="text-slate-300">
                          Chief Operations Officer
                      </h3>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Team
