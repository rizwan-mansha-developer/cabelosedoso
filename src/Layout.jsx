import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

const Layout = () => {
  return (
    <div>
      
      <Header className="fixed top-0 left-0 w-full z-50" />
      <Outlet />
    </div>
  );
};

export default Layout;
