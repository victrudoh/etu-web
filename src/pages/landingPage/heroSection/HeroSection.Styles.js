import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 5rem;
  height: 80vh;
  width: 100%;
  display: flex;

  // PC
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    height: 60vh;
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
  }
`;

export const Left = styled.div`
  width: 40%;
  align-items: center;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: var(--primary-color);
  justify-content: center;

  // PC
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    padding: 2rem;
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    text-align: center;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 100%;
    padding: 2rem;
    text-align: center;
    line-height: 35px;
  }

  span {
    font-size: 40px;
    font-weight: 800;
    color: black;
    margin-bottom: 1rem;

    // PC
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      font-size: 35px;
    }

    // TAB
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 40px;
    }

    // MOBILE
    @media only screen and (max-width: 767px) {
      font-size: 30px;
    }
  }

  h4 {
    font-size: 20px;
    font-weight: 500;
    color: var(--primary-color);

    // PC
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      font-size: 20px;
    }

    // TAB
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 20px;
    }

    // MOBILE
    @media only screen and (max-width: 767px) {
      font-size: 16px;
    }
  }
`;

export const Right = styled.div`
  width: 60%;
  background-image: url("../../../assets/images/landingPage/hero-image.jpg");
  background-size: cover;

  // PC
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    display: none;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
