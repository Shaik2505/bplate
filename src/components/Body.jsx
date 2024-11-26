import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Body = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        {/* Render the nested child routes */}
        <Outlet />
      </div>
    </>
  );
};

export default Body;
