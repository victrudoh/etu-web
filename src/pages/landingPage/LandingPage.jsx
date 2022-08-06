import React from "react";

// styles
import { Wrapper } from "./LandingPage.Styles";

// components
import HeroSection from "./heroSection/HeroSection";

const LandingPage = () => {
  return (
    <>
      <Wrapper>
        <HeroSection />
      </Wrapper>
    </>
  );
};

export default LandingPage;
