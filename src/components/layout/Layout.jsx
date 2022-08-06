import React from "react";

// Components
import MainRouter from "../Routes";
import Navbar from "../navbar/Navbar";

// Styles
import { LayoutStyle } from "./Layout.Styles";

const Layout = () => {
  return (
    <>
      <LayoutStyle>
        <Navbar />
        <MainRouter />
      </LayoutStyle>
    </>
  );
};

export default Layout;
