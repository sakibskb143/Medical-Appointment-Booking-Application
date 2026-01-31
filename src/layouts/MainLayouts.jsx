import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet, useLocation, useNavigation } from "react-router";
import Loading from "../components/Loading";

const MainLayouts = () => {
  const location = useLocation();
  const hideFooter = location.pathname === "/blogs";

  const navigation = useNavigation();
  if (navigation.state === "loading") return <Loading></Loading>;
  return (
    <div className="bg-base-300 min-h-screen jakarta ">
      <div className="h-16 container mx-auto">
        <Nav></Nav>
      </div>
      <div className="min-h-[calc(100vh-299px)] container mx-auto">
        <Outlet></Outlet>
      </div>

      {!hideFooter && <Footer></Footer>}
    </div>
  );
};

export default MainLayouts;
