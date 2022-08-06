import React from "react";
import { NavLink } from "react-router-dom";

//styles
import { Wrapper } from "./DriveOrRide.Styles";

const DriveOrRide = () => {
  return (
    <>
      <Wrapper>
        <NavLink to="/login">
          <h2>Sign up to drive</h2>
          <h6>(for merchants)</h6>
        </NavLink>
        <NavLink to="/login">
          <h2>Sign up to ride</h2>
          <h6>(non-merchants)</h6>
        </NavLink>
      </Wrapper>
    </>
  );
};

export default DriveOrRide;
