import React from "react";
import { NavLink } from "react-router-dom";

// styles
import { Wrapper, Content, Left, Right } from "./Wallet.Styles";

const Wallet = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <Left>
            <NavLink to="/user/wallet/create">
              <i className="bx bx-wallet"></i> Create Wallet
            </NavLink>
            <NavLink to="/user/wallet/deposit">
              <i className="bx bx-wallet"></i> Make Deposit
            </NavLink>
          </Left>
          <Left>
            <NavLink to="/user/wallet/transfer">
              <i className="bx bx-wallet"></i> Transfer Funds
            </NavLink>
            <NavLink to="/user/wallet/withdraw">
              <i className="bx bx-wallet"></i> Withdraw Funds
            </NavLink>
          </Left>
        </Content>
      </Wrapper>
    </>
  );
};

export default Wallet;
