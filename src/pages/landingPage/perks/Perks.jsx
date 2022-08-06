import React from "react";

// styles
import { Wrapper, PerkCard, CardTop } from "./Perks.Styles";

const Perks = () => {
  return (
    <>
      <Wrapper>
        <PerkCard>
          <CardTop>
            <i className="bx bx-box"></i>
          </CardTop>
        </PerkCard>
      </Wrapper>
    </>
  );
};

export default Perks;
