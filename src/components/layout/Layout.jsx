import React from "react";

// Components
import MainRouter from "../Routes";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

// Styles
import { LayoutStyle } from "./Layout.Styles";

const Layout = () => {
  return (
    <>
      <LayoutStyle>
        <Navbar />
        <MainRouter />
        <Footer />
      </LayoutStyle>
    </>
  );
};

export default Layout;
