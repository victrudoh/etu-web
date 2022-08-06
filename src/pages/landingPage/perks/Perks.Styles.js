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
    padding: 3rem 4rem;
    gap: 2rem;
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    gap: 2rem;
    align-items: center;
    flex-direction: column;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    gap: 2rem;
    align-items: center;
    flex-direction: column;
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
    width: 30rem;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 20rem;
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
    font-size: 70px;
    color: var(--primary-color);

    // PC - 1024
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      font-size: 60px;
    }

    // TAB
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 50px;
    }

    // MOBILE
    @media only screen and (max-width: 767px) {
      font-size: 40px;
    }
  }
`;

export const CardBottom = styled.div`
  width: 80%;

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

export const CardTitle = styled.div`
  font-weight: 500;
  font-size: 30px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 1rem;

  // PC - 1024
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    font-size: 25px;
  }
`;

export const CardDescription = styled.div`
  color: grey;
  font-weight: 500;
  font-size: 18px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  // PC - 1024
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    font-size: 16px;
  }
`;
