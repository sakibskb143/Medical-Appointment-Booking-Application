import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import { Component } from "react";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children:[
      {
        index:"/",
        loader: ()=>fetch('/public/doctorsData .json'),
        Component:Home 
      }
    ]
  } ,
]);
