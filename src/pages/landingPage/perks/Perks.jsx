import React from "react";

// styles
import {
  Wrapper,
  PerkCard,
  CardTop,
  CardBottom,
  CardTitle,
  CardDescription,
} from "./Perks.Styles";

const Perks = () => {
  return (
    <>
      <Wrapper>
        <PerkCard>
          <CardTop>
            <i className="bx bx-car"></i>
          </CardTop>
          <CardBottom>
            <CardTitle>Drive and earn</CardTitle>
            <CardDescription>
              Sign up as a merchant on etú today and enjoy exclusive benefits
              when you drive.
            </CardDescription>
          </CardBottom>
        </PerkCard>
        <PerkCard>
          <CardTop>
            <i className="bx bx-wallet"></i>
          </CardTop>
          <CardBottom>
            <CardTitle>Secure payment</CardTitle>
            <CardDescription>
              With etú, you don't need to carry physical cash around.
            </CardDescription>
          </CardBottom>
        </PerkCard>
        <PerkCard>
          <CardTop>
            <i className="bx bx-mobile"></i>
          </CardTop>
          <CardBottom>
            <CardTitle>Easy & reliable</CardTitle>
            <CardDescription>
              Make payment with ease from your phone on etú
            </CardDescription>
          </CardBottom>
        </PerkCard>
      </Wrapper>
    </>
  );
};

export default Perks;
