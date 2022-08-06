import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 3rem 7rem;
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  background-color: white;

  // PC - 1024
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
  }
`;

export const PerkCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 5rem 1rem;
  background-color: whitesmoke;
  width: 25rem;
  cursor: pointer;

  // PC - 1024
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
  }
`;

export const CardTop = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  // PC - 1024
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
  }

  i {
    width: 70px;

    // PC - 1024
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
    }

    // TAB
    @media only screen and (min-width: 768px) and (max-width: 991px) {
    }

    // MOBILE
    @media only screen and (max-width: 767px) {
    }
  }
`;
