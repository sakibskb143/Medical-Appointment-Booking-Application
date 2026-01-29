import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const MainLayouts = () => {
  return (
    <div className="bg-base-300 min-h-screen jakarta">
      <div className="h-16">
        <Nav></Nav>
      </div>
      <div className="min-h-[calc(100vh-299px)]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
