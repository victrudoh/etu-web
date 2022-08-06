import React from "react";

// styles
import { Wrapper } from "./LandingPage.Styles";

// components
import HeroSection from "./heroSection/HeroSection";
import Perks from "./perks/Perks";
import DriveOrRide from "./driveOrRide/DriveOrRide";

const LandingPage = () => {
  return (
    <>
      <Wrapper>
        <HeroSection />
        <Perks />
        <DriveOrRide />
      </Wrapper>
    </>
  );
};

export default LandingPage;
