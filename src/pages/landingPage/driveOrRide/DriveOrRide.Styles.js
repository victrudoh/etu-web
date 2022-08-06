import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 5rem;
  background-color: var(--text-black);
  display: flex;
  gap: 2rem;

  // PC - 1024
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 100%;
    padding: 3rem 2rem;
    gap: 1rem;
  }

  a {
    width: 50%;
    background-color: var(--primary-color);
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--text-white);
    padding: 7rem;
    transition: all 300ms ease-in;

    // PC - 1024
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      padding: 5rem 1rem;
    }

    // TAB
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      padding: 5rem 1rem;
    }

    // MOBILE
    @media only screen and (max-width: 767px) {
      padding: 5rem 1rem;
    }

    h2 {
      font-size: 54px;

      // PC - 1024
      @media only screen and (min-width: 992px) and (max-width: 1199px) {
        font-size: 44px;
      }

      // TAB
      @media only screen and (min-width: 768px) and (max-width: 991px) {
        font-size: 34px;
      }

      // MOBILE
      @media only screen and (max-width: 767px) {
        font-size: 24px;
      }
    }
  }
`;
