import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 7.8rem;
  width: 100%;
  min-width: 42.8rem;
  gap: 0.8rem;
  padding: 2.4rem 12.2rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};

  img {
    width: 2.2rem;
    height: 2.2rem;

    @media (min-width: 768px) {
      width: 3.0rem;
      height: 3.0rem;
    }
  }

  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.GRAY};
    width: 11.4rem;

    @media (min-width: 768px) {
      font-size: 2.4rem;
      width: 14.6rem;
    }
  }

  p {
    text-align: right;
    font-family: "DM Sans", sans-serif;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.SIMPLE_WHITE};
    width: 22.2rem;
  }

  @media (min-width: 768px) {
    display: flex;
    gap: 70.0rem;
    min-width: 136.6rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2rem 1.6rem;
    gap: 1rem;
    max-width: 42.8rem;
    width: 100%;
    margin-left: 46rem;


    p {
      width: 100%;
      text-align: center;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;