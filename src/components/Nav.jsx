import React from "react";
import { Link, NavLink } from "react-router";
import logo from '../assets/logo.png'

const Nav = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-color border-b-2 font-bold " : "text-color"
        }
      >
        Home
      </NavLink>

      <NavLink
        to={"/my-bookings"}
        className={({ isActive }) =>
          isActive ? "text-color border-b-2 font-bold" : "text-color"
        }
      >
        My-Bookings
      </NavLink>
      <NavLink
        to={"/blogs"}
        className={({ isActive }) =>
          isActive ? "text-color border-b-2 font-bold" : "text-color"
        }
      >
        Blogs
      </NavLink>
      <NavLink
        to={"/contactUs"}
        className={({ isActive }) =>
          isActive ? "text-color uborder-b-2 font-bold" : "text-color"
        }
      >
        ContactUs
      </NavLink>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-base-300 px-4 sm:px-8 md:px-16 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex justify-center items-center gap-4">
            <img src={logo} className="h-8" alt="" />
          <Link to={"/"} className="text-2xl font-bold">
            MiniCare
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2 gap-10">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-bg">Emergency</a>
      </div>
    </div>
  );
};

export default Nav;
