import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import LanguageSwitcher from "./LanguageSwitcher";
import menuTexts from "../constants/menuTexts";

const linkClass =
  "font-semibold px-4 py-2 text-black hover:text-green-700 transition no-underline";

const Menus: React.FC = () => {
  const currentLang = useSelector(
    (state: RootState) => state.lang.currentLang
  ) as keyof typeof menuTexts;

  return (
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
          Chinoles - Español Online
        </div>
        {/* Right: Menu Items + Language Switcher */}
        <div
          className="flex gap-3 sm:gap-5 items-center"
          style={{ position: "relative" }}
        >
          <NavLink to="/" className={linkClass}>
            {menuTexts[currentLang].home}
          </NavLink>
          <NavLink to="/courses/spanish" className={linkClass}>
            {menuTexts[currentLang].courses}
          </NavLink>
          <NavLink to="/blogs" className={linkClass}>
            {menuTexts[currentLang].blog}
          </NavLink>
          <NavLink to="/tools" className={linkClass}>
            {menuTexts[currentLang].resources}
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            {menuTexts[currentLang].contact}
          </NavLink>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Menus;
