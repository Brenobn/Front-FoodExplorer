import styled from "styled-components";

export const HeaderContainer = styled.header`
  grid-area: header;

  height: 11.4rem;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
`;

export const HeaderItensContainer = styled.div`
  display: flex;
  height: 3.4rem;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  margin: 5.6rem 2.8rem 2.4rem 2.8rem;
`;

export const LogoText = styled.div`
  display: flex;
  height: 3.4rem;
  align-items: center;
  gap: 1.6rem;

  > img {
    width: 2.4rem;
    height: 2.4rem;
  }

  > svg:nth-child(1) {
    margin-right: 6.8rem;
    color: ${({ theme }) => theme.COLORS.SIMPLE_WHITE};
  }

  > svg:nth-child(4) {
    margin-left: 6.8rem;
    color: ${({ theme }) => theme.COLORS.SIMPLE_WHITE};
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.SIMPLE_WHITE};
    font-family: 'Roboto', sans-serif;
    font-size: 2.0rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;