import React from "react";
import { NavLink } from "react-router";


const EmptyState = () => {
  return (
    <div className="min-h-[calc(100vh-299px)] container mx-auto flex justify-center items-center">
      <div className="flex items-center justify-center flex-col gap-5">
        <h1 className="text-3xl font-bold">No Appointment Book Yet</h1>
        <NavLink
          to="/"
          className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group"
        >
          <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
            Go to Home 
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default EmptyState;
