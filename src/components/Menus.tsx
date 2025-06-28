import React from "react";
import { NavLink } from "react-router-dom";

const linkClass =
  "inline-block rounded border border-gray-300 px-5 py-2 font-semibold shadow-sm " +
  "bg-gray-800 text-white hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 " +
  "transition aria-[current=page]:bg-blue-700 aria-[current=page]:text-white no-underline";

const Menus: React.FC = () => (
  <nav className="fixed top-0 left-0 w-full z-10 flex justify-center gap-3 sm:gap-5 p-4 bg-white shadow">
    <NavLink to="/" className={linkClass}>
      Home
    </NavLink>
    <NavLink to="/courses" className={linkClass}>
      Courses
    </NavLink>
    <NavLink to="/blogs" className={linkClass}>
      Blogs
    </NavLink>
    <NavLink to="/about" className={linkClass}>
      About
    </NavLink>
    <NavLink to="/login" className={linkClass}>
      Login
    </NavLink>
    <NavLink to="/register" className={linkClass}>
      Register
    </NavLink>
  </nav>
);

export default Menus;
