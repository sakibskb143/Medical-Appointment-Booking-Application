import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import { Component } from "react";
import Home from "../pages/Home";
import DoctorDetails from "../pages/DoctorDetails";
import BookingPage from "../pages/BookingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: "/",
        loader: () => fetch("/public/doctorsData .json"),
        Component: Home,
      },
      {
        path: "/doctor/:registrationNumber",
        loader: () => fetch("/public/doctorsData .json"),
        Component: DoctorDetails,
      },
      {
        path:"/bookingPage",
        Component:BookingPage
      }
    ],
  },
]);
