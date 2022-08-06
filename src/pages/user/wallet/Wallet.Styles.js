import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 18rem;

  // PC - 1024
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
  }

  a {
    padding: 5rem;
    width: 40%;
    background-image: linear-gradient(to bottom right, #e33023, #1c1c1e);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 34px;
    text-decoration: none;
    color: var(--text-white);
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    border-radius: 20px;
    transition: all 300ms ease-in;

    &:hover {
      background-image: linear-gradient(to bottom right, #1c1c1e, #e33023);
    }

    // PC - 1024
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      width: 40%;
      gap: 1rem;
      padding: 3rem;
    }

    // MOBILE
    @media only screen and (max-width: 767px) {
      width: 40%;
      gap: 1rem;
      padding: 3rem;
      font-size: 24px;
    }
  }
`;

export const Content = styled.div`
  /* background-color: red; */
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 5rem;
  gap: 1rem;

  // PC - 1024
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    width: 90%;
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    display: flex;
    gap: 3rem;
    flex-direction: column;
    /* justify-content: space-between; */
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    display: flex;
    width: 100%;
    gap: 3rem;
    flex-direction: column;
  }
`;

export const Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  /* background-color: green; */

  // PC - 1024
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 100%;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  /* a {
    padding: 5rem;
    width: 40%;
    background-image: linear-gradient(to bottom right, #e33023, #1c1c1e);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 34px;
    text-decoration: none;
    color: var(--text-white);
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    border-radius: 20px;
  } */
`;

export const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  /* background-color: green; */

  // PC - 1024
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 100%;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
  }

  /* a {
    padding: 5rem;
    width: 40%;
    background-image: linear-gradient(to bottom right, #e33023, #1c1c1e);
    display: flex;
    gap: 1rem;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 34px;
    text-decoration: none;
    color: var(--text-white);
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    border-radius: 20px;
  } */
`;
