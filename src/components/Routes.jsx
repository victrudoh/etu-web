// Dependencies
import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import Layed from "./Layed";
import UnAuth from "../pages/unAuth/UnAuth";
import Error404 from "../pages/error404/Error404";

// Login
import Login from "../pages/login/Login";
import LandingPage from "../pages/landingPage/LandingPage";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layed />}>
        <Route index element={<LandingPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/unauth" element={<UnAuth />} />
        <Route path="*" element={<Error404 />} />
      </Route>
      {/* )} */}
    </Routes>
  );
};

export default MainRouter;
