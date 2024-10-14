import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
  padding: 2.4rem 12.4rem;
  width: 100%;
  min-width: 136.8rem;
`;

export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 1.6rem;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: unset;
  }
`;

export const NavMobile = styled.div`
  display: flex;
  align-items: center;
  min-height: 11.4rem;
  gap: 1.6rem;
  @media (min-width: 768px) {
    display: none;
  }

  > svg {
    width: 4.4rem;
    height: 4.4rem;
  }
`;

export const NavDesktop = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 3.2rem;
    flex-grow: 1;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 1.0rem;
  flex-shrink: 1;
  white-space: nowrap;

  @media (max-width: 768px) {
    justify-content: center;
    min-width: 37.2rem;
  }

  > h1 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: normal;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 3.2rem;
    }
  }

  img {
    @media (max-width: 768px) {
      width: 4.2rem;
      height: 4.2rem;
    }
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  border-radius: 0.5rem;

  > svg {
    margin-left: 1.4rem;
  }

  > input {
    width: 100%;

    padding: 1.6rem;

    color: ${({ theme }) => theme.COLORS.SIMPLE_WHITE};
    background: transparent;
    text-align: center;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  position: fixed;
  inset: 0;
  z-index: 1000;
  padding: 2rem;
  @media (min-width: 768px) {
    display: none;
  }
`;  