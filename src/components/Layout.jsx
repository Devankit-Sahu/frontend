import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="h-[78px] absolute top-0 right-0 left-0 border-b border-b-[#ffffff1a]">
        <Navbar />
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
