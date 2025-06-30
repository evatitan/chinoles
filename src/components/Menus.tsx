import React from "react";
import { NavLink } from "react-router-dom";

const linkClass =
  "font-semibold px-4 py-2 text-black hover:text-green-700 transition no-underline";

const Menus: React.FC = () => (
  <nav
    className="top-0 left-0 z-10"
    style={{
      width: "100%",
      background: "transparent",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "1.5rem 0",
    }}
  >
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Left: Academy Name */}
      <div
        style={{
          fontWeight: 800,
          fontSize: "1.6rem",
          color: "rgb(64, 145, 108)",
          letterSpacing: "6px",
          marginRight: "2.5rem",
        }}
      >
        Chinoles Academy
      </div>
      {/* Right: Menu Items */}
      <div className="flex gap-3 sm:gap-5 items-center">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/courses" className={linkClass}>
          Courses
        </NavLink>
        <NavLink to="/blogs" className={linkClass}>
          Blogs
        </NavLink>
        <NavLink to="/tools" className={linkClass}>
          Tools
        </NavLink>
        <NavLink to="/login" className={linkClass}>
          Login
        </NavLink>
      </div>
    </div>
  </nav>
);

export default Menus;
