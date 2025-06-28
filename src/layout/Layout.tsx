import React from "react";
import Menus from "../components/Menus";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Menus />
    <main>{children}</main>
  </>
);

export default Layout;
