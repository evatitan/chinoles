import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import type { LanguageState } from "../types/languages";
import LanguageSwitcher from "./LanguageSwitcher";

const linkClass =
  "font-semibold px-4 py-2 text-black hover:text-green-700 transition no-underline";

const Menus: React.FC = () => {
  const currentLang = useSelector((state: RootState) => state.lang.currentLang);

  if (!currentLang || !currentLang.menu) {
    return null; // 或者显示加载状态
  }

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
          Chinoles - 西班牙语学院
        </div>
        {/* Right: Menu Items + Language Switcher */}
        <div
          className="flex gap-3 sm:gap-5 items-center"
          style={{ position: "relative" }}
        >
          <NavLink to="/" className={linkClass}>
            {currentLang.menu.home}
          </NavLink>
          <NavLink to="/courses/spanish" className={linkClass}>
            {currentLang.menu.courses}
          </NavLink>
          <NavLink to="/tools" className={linkClass}>
            {currentLang.menu.resources}
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            {currentLang.menu.contact}
          </NavLink>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Menus;
