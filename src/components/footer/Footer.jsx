import React from "react";

import { Wrapper } from "./Footer.Styles";

const Footer = () => {
  return (
    <>
      <Wrapper className="bg-dark text-white py-5 d-flex justify-content-evenly">
        &copy; eNaira 2022
      </Wrapper>
      {/* <div className="bg-dark text-white py-5 d-flex justify-content-evenly">
        &copy; eNaira 2022
      </div> */}
    </>
  );
};

export default Footer;
