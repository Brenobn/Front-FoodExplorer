import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  max-width: 100%;
  min-height: 7.8rem;
  width: 100%;
  gap: 0.8rem;
  padding: 2.4rem 12.2rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};

  img {
    width: 2.2rem;
    height: 2.2rem;
  }

  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.GRAY};
    width: 11.4rem;
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
`;