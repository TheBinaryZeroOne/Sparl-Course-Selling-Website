import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./pages/footer/Footer";
import Header from "./pages/header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
