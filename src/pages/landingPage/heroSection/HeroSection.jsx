import React from "react";

// Styles
import { Wrapper, Left, Right } from "./HeroSection.Styles";

const HeroSection = () => {
  return (
    <>
      <Wrapper>
        <Left>
          <span>Making Transportation Services Convenient For You.</span>
          <h4>
            etú makes it easier to make payment for transportation, helps you
            save some bucks and spend wisely.
          </h4>
        </Left>
        <Right />
      </Wrapper>
    </>
  );
};

export default HeroSection;
