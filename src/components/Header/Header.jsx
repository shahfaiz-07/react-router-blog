import React from 'react'
import { NavLink } from 'react-router-dom';
function Header() {
  return (
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center px-4 py-4 md:py-0 shadow bg-[#070606] text-white">
          <div className="font-bold text-3xl md:text-2xl text-center" id="main-nav-icon">
              React&nbsp;Routing Project
          </div>
          <div id="right-nav">
              <ul className="flex flex-col md:flex-row items-center text-xl font-semibold md:gap-2 md:text-base">
                  <li>
                      <NavLink
                          to="/"
                          className={({ isActive }) =>
                              `${
                                  isActive
                                      ? "text-orange-700 bg-slate-200"
                                      : "text-white"
                              }
                              navLink`
                          }
                      >
                          Home
                      </NavLink>
                  </li>
                  <li>
                      <NavLink
                          to="/team"
                          className={({ isActive }) =>
                              `${
                                  isActive
                                      ? "text-orange-700 bg-slate-200"
                                      : "text-white"
                              }
                              navLink`
                          }
                      >
                          Team
                      </NavLink>
                  </li>
                  <li>
                      <NavLink
                          to="/blog"
                          className={({ isActive }) =>
                              `${
                                  isActive
                                      ? "text-orange-700 bg-slate-200"
                                      : "text-white"
                              }
                              navLink`
                          }
                      >
                          Blog
                      </NavLink>
                  </li>
                  <li>
                      <NavLink
                          to="/about"
                          className={({ isActive }) =>
                              `${
                                  isActive
                                      ? "text-orange-700 bg-slate-200"
                                      : "text-white"
                              }
                              navLink`
                          }
                      >
                          About
                      </NavLink>
                  </li>
                  <li>
                      <NavLink
                          to="/services"
                          className={({ isActive }) =>
                              `${
                                  isActive
                                      ? "text-orange-700 bg-slate-200"
                                      : "text-white"
                              }
                              navLink`
                          }
                      >
                          Services
                      </NavLink>
                  </li>
                  <li>
                      <NavLink
                          to="/contact"
                          className={({ isActive }) =>
                              `${
                                  isActive
                                      ? "text-orange-700 bg-slate-200"
                                      : "text-white"
                              }
                              navLink`
                          }
                      >
                          Contact&nbsp;US
                      </NavLink>
                  </li>
              </ul>
          </div>
      </div>
  );
}

export default Header
